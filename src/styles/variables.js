import { css } from 'styled-components';

const variables = css`
  :root {
    /* Dark Theme Base */
    --dark-navy: #010c1c;
    --navy: #0a192f;
    --light-navy: #112240;
    --lightest-navy: #233554;
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;

    /* Accent Colors */
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);
    --blue: #57cbff;
    --pink: #f57dff;
    --orange: #ffb86c;

    /* Grayscale Palette */
    --white: #ffffff;
    --lightest-slate: #a8b2d1;
    --light-slate: #8892b0;
    --slate: #ccd6f6;
    --dark-grey: #131515;
    --grey: #202a32;
    --light-grey: #1e1e1e;
    --lightest-grey: #8b8c89;

    /* Typography */
    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    /* Font Sizes */
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 24px;
    --fz-heading: 32px;

    /* Layout */
    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;
    --tab-height: 42px;
    --tab-width: 260px;
    --hamburger-width: 30px;

    /* Animation */
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s var(--easing);

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
