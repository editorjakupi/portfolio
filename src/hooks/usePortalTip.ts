import { useCallback, useLayoutEffect, useRef, useState } from 'react';

const EDGE_PAD = 10;
const GAP = 8;

export interface PortalTipCoords {
  /** CSS `top` — tip’s top edge in viewport px */
  top: number;
  /** CSS `left` — tip’s left edge in viewport px */
  left: number;
  below: boolean;
}

/** Positions a fixed portal tooltip and clamps it fully inside the viewport. */
export function usePortalTip(open: boolean) {
  const anchorRef = useRef<HTMLSpanElement>(null);
  const tipRef = useRef<HTMLSpanElement>(null);
  const [coords, setCoords] = useState<PortalTipCoords>({
    top: 0,
    left: EDGE_PAD,
    below: false,
  });

  const place = useCallback(() => {
    const anchor = anchorRef.current;
    const tip = tipRef.current;
    if (!anchor) return;

    const rect = anchor.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Prefer above the chip; flip below if not enough room.
    let below = rect.top < 140;
    const tipW = tip?.offsetWidth || Math.min(288, vw - EDGE_PAD * 2);
    const tipH = tip?.offsetHeight || 72;

    let left = rect.left + rect.width / 2 - tipW / 2;
    left = Math.max(EDGE_PAD, Math.min(left, vw - EDGE_PAD - tipW));

    let top = below ? rect.bottom + GAP : rect.top - tipH - GAP;

    if (!below && top < EDGE_PAD) {
      below = true;
      top = rect.bottom + GAP;
    }
    if (below && top + tipH > vh - EDGE_PAD) {
      // Prefer keeping it on-screen even if it overlaps the chip a bit.
      top = Math.max(EDGE_PAD, vh - EDGE_PAD - tipH);
    }

    setCoords((prev) =>
      prev.top === top && prev.left === left && prev.below === below
        ? prev
        : { top, left, below },
    );
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    // First pass (tip may just have mounted), then remeasure with real size.
    place();
    const id = requestAnimationFrame(() => place());
    return () => cancelAnimationFrame(id);
  }, [open, place]);

  useLayoutEffect(() => {
    if (!open) return;
    const onReposition = () => place();
    window.addEventListener('scroll', onReposition, true);
    window.addEventListener('resize', onReposition);
    return () => {
      window.removeEventListener('scroll', onReposition, true);
      window.removeEventListener('resize', onReposition);
    };
  }, [open, place]);

  return { anchorRef, tipRef, coords, place };
}
