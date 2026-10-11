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

/** Tech pill with a portal tooltip kept inside the viewport. */
export default function TechChip({ projectId, tech, locale, className = 'chip chip-muted' }: Props) {
  const tip = getTechTip(projectId, tech, locale);
  const tipId = useId();
  const [open, setOpen] = useState(false);
  const { anchorRef, tipRef, coords } = usePortalTip(open);

  const show = useCallback(() => setOpen(true), []);
  const hide = useCallback(() => setOpen(false), []);

  return (
    <>
      <span
        ref={anchorRef}
        className={`tech-chip ${className}${tip ? ' tech-chip--tip' : ''}`}
        tabIndex={tip ? 0 : undefined}
        aria-describedby={tip && open ? tipId : undefined}
        onClick={(event) => {
          event.stopPropagation();
          if (tip) setOpen(true);
        }}
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
            className="tech-tip tech-tip--portal"
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
