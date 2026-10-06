import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Locale } from '../i18n/types';
import { getTechTip } from '../data/techTips';

interface Props {
  projectId: string;
  tech: string;
  locale: Locale;
  className?: string;
}

/** Tech pill with a portal tooltip so it never clips behind cards/images. */
export default function TechChip({ projectId, tech, locale, className = 'chip chip-muted' }: Props) {
  const tip = getTechTip(projectId, tech, locale);
  const chipRef = useRef<HTMLSpanElement>(null);
  const tipId = useId();
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, below: false });

  const place = useCallback(() => {
    const el = chipRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const below = rect.top < 140;
    setCoords({
      top: below ? rect.bottom : rect.top,
      left: rect.left + rect.width / 2,
      below,
    });
  }, []);

  const show = useCallback(() => {
    place();
    setOpen(true);
  }, [place]);

  const hide = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onReposition = () => place();
    window.addEventListener('scroll', onReposition, true);
    window.addEventListener('resize', onReposition);
    return () => {
      window.removeEventListener('scroll', onReposition, true);
      window.removeEventListener('resize', onReposition);
    };
  }, [open, place]);

  return (
    <>
      <span
        ref={chipRef}
        className={`tech-chip ${className}${tip ? ' tech-chip--tip' : ''}`}
        tabIndex={tip ? 0 : undefined}
        aria-describedby={tip && open ? tipId : undefined}
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
        onMouseEnter={tip ? show : undefined}
        onMouseLeave={tip ? hide : undefined}
        onFocus={tip ? show : undefined}
        onBlur={tip ? hide : undefined}
      >
        {tech}
      </span>
      {tip &&
        open &&
        createPortal(
          <span
            id={tipId}
            className={`tech-tip tech-tip--portal${coords.below ? ' tech-tip--below' : ''}`}
            role="tooltip"
            style={{ top: coords.top, left: coords.left }}
          >
            <span className="tech-tip__what">{tip.what}</span>
            <span className="tech-tip__use">{tip.use}</span>
          </span>,
          document.body,
        )}
    </>
  );
}
