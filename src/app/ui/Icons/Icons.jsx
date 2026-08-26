/**
 * Self-hosted icons.
 *
 * The template originally pulled every icon from @iconify/react, which fetches
 * SVG data from api.iconify.design at runtime. That means a third-party request
 * on every page view and blank icons whenever that host is slow or blocked.
 * These are inlined instead so the site has no external icon dependency.
 */

const paths = {
  envelope: (
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
  ),
  location: (
    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
  ),
  translate: (
    <path d="M12.9 15l-2.6-2.6.03-.03A17.5 17.5 0 0 0 14 6h3V4h-7V2H8v2H1v2h11.2A15.5 15.5 0 0 1 9 10.9 15.7 15.7 0 0 1 6.8 7.8H4.8A17.6 17.6 0 0 0 7.6 12.3L2.9 17l1.4 1.4L9 13.7l2.9 2.9.9-1.6ZM18.5 10h-2L12 22h2l1.1-3h4.8l1.1 3h2l-4.5-12Zm-2.6 7 1.6-4.3 1.6 4.3h-3.2Z" />
  ),
  'arrow-right': (
    <path d="M13.2 5.6 11.8 7l4 4H4v2h11.8l-4 4 1.4 1.4L19.6 12 13.2 5.6Z" />
  ),
  'plus-circle': (
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2Z" />
  ),
  linkedin: (
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  ),
  github: (
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.9 18.3 5.2 18.3 5.2c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
  ),
};

const boxes = { linkedin: '0 0 24 24', github: '0 0 24 24' };

const Icon = ({ icon, className }) => {
  const key = String(icon).split(':').pop();
  const path = paths[key];
  if (!path) return null;
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={boxes[key] || '0 0 24 24'}
      width="1em"
      height="1em"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  );
};

export { Icon };
export default Icon;
