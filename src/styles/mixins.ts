import { css } from 'styled-components'

export const mixins = {
  shadow: {
    level1: css`
      box-shadow: 0px 1px 4px 0px rgba(122, 123, 124, 0.20);
    `,

    level2: css`
      box-shadow: 0px 2px 6px 0px rgba(122, 123, 124, 0.20);
    `,

    level3: css`
      box-shadow: 0px 3px 8px 0px rgba(122, 123, 124, 0.20);
    `,
  },

  fonts: {
    regular_h1: css`
      font-family: 'Inter', sans-serif;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 350;
      line-height: 126.667%;
    `,

    medium_h1: css`
      font-family: 'Inter', sans-serif;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 126.667%;
    `,

    semibold_h1: css`
      font-family: 'Inter', sans-serif;
      font-size: 1.875rem;
      font-style: normal;
      font-weight: 600;
      line-height: 126.667%;
    `,

    regular_h2: css`
      font-family: 'Inter', sans-serif;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 350;
      line-height: 133.333%;
    `,

    medium_h2: css`
      font-family: 'Inter', sans-serif;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 133.333%;
    `,

    semibold_h2: css`
      font-family: 'Inter', sans-serif;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 600;
      line-height: 133.333%;
    `,

    regular_h3: css`
      font-family: 'Inter', sans-serif;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 350;
      line-height: 140%;
    `,

    medium_h3: css`
      font-family: 'Inter', sans-serif;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    `,

    semibold_h3: css`
      font-family: 'Inter', sans-serif;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 600;
      line-height: 140%;
    `,

    regular_h4: css`
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 350;
      line-height: 150%;
    `,

    medium_h4: css`
      font-family: 'Inter', sans-serif !important;
      font-size: 1rem !important;
      font-style: normal !important;
      font-weight: 400 !important;
      line-height: 150% !important;
    `,

    semibold_h4: css`
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
    `,

    regular_h5: css`
      font-family: 'Inter', sans-serif;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 350;
      line-height: 157.143%;
    `,

    medium_h5: css`
      font-family: 'Inter', sans-serif;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 157.143%;
    `,

    semibold_h5: css`
      font-family: 'Inter', sans-serif;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 600;
      line-height: 157.143%;
    `,

    regular_h6: css`
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 350;
      line-height: 166.667%;
    `,

    medium_h6: css`
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 166.667%;
    `,

    semibold_h6: css`
      font-family: 'Inter', sans-serif;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 600;
      line-height: 166.667%;
    `,

    regular_h7: css`
      font-family: 'Inter', sans-serif;
      font-size: 0.625rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    `,

    medium_h7: css`
      font-family: 'Inter', sans-serif;
      font-size: 0.625rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
    `,

    semibold_h7: css`
      font-family: 'Inter', sans-serif;
      font-size: 0.625rem;
      font-style: normal;
      font-weight: 600;
      line-height: 160%;
    `,
  },
}