import { useCallback, useId, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Locale } from '../i18n/types';
import { getTechTip } from '../data/techTips';
import { usePortalTip } from '../hooks/usePortalTip';

interface Props {
  projectId: string;
  tech: string;
  locale: Locale;
  className?: string;
}

/** Tech pill with a portal tooltip so it never clips behind cards/images or the viewport. */
export default function TechChip({ projectId, tech, locale, className = 'chip chip-muted' }: Props) {
  const tip = getTechTip(projectId, tech, locale);
  const tipId = useId();
  const [open, setOpen] = useState(false);
  const { anchorRef, tipRef, coords, place } = usePortalTip(open);

  const show = useCallback(() => {
    place();
    setOpen(true);
  }, [place]);

  const hide = useCallback(() => setOpen(false), []);

  const tipTransform = coords.below
    ? `translate(calc(-50% + ${coords.shiftX}px), 0.55rem)`
    : `translate(calc(-50% + ${coords.shiftX}px), calc(-100% - 0.55rem))`;

  return (
    <>
      <span
        ref={anchorRef}
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
            ref={tipRef}
            id={tipId}
            className={`tech-tip tech-tip--portal${coords.below ? ' tech-tip--below' : ''}`}
            role="tooltip"
            style={{ top: coords.top, left: coords.left, transform: tipTransform }}
          >
            <span className="tech-tip__what">{tip.what}</span>
            <span className="tech-tip__use">{tip.use}</span>
          </span>,
          document.body,
        )}
    </>
  );
}
