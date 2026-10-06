import { useCallback, useLayoutEffect, useRef, useState } from 'react';

const EDGE_PAD = 10;

export interface PortalTipCoords {
  top: number;
  left: number;
  below: boolean;
  shiftX: number;
}

/** Positions a fixed portal tooltip above/below an anchor and keeps it inside the viewport. */
export function usePortalTip(open: boolean) {
  const anchorRef = useRef<HTMLSpanElement>(null);
  const tipRef = useRef<HTMLSpanElement>(null);
  const [coords, setCoords] = useState<PortalTipCoords>({
    top: 0,
    left: 0,
    below: false,
    shiftX: 0,
  });

  const place = useCallback(() => {
    const el = anchorRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const spaceAbove = rect.top;
    const estimatedTipH = 120;
    const below = spaceAbove < estimatedTipH + EDGE_PAD;
    setCoords({
      top: below ? rect.bottom : rect.top,
      left: rect.left + rect.width / 2,
      below,
      shiftX: 0,
    });
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    place();
  }, [open, place]);

  useLayoutEffect(() => {
    if (!open) return;
    const tip = tipRef.current;
    if (!tip) return;

    const tipRect = tip.getBoundingClientRect();
    const vw = window.innerWidth;
    let shiftX = 0;
    if (tipRect.left < EDGE_PAD) {
      shiftX = EDGE_PAD - tipRect.left;
    } else if (tipRect.right > vw - EDGE_PAD) {
      shiftX = vw - EDGE_PAD - tipRect.right;
    }

    setCoords((prev) => (prev.shiftX === shiftX ? prev : { ...prev, shiftX }));
  }, [open, coords.left, coords.top, coords.below]);

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
