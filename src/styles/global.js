import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${({ theme }) => css`
  html {
    background: ${theme.colors.background};
  }
  .HomeHero-hello,
  .HomeHero-iAm,
  .About-block-title,
  .About-block-text,
  .About-block-competency-text,
  .Experience-title,
  .Portfolio-block-title,
  .Contact-block-title,
  div > .MuiOutlinedInput-root .MuiOutlinedInput-input {
    color: ${theme.colors.black};
  }
  .About-block-title,
  .Experience-title,
  .Portfolio-block-title,
  .Contact-block-title {
    text-shadow: ${theme.colors.textShadow};
  }
  .Experience-item-block {
    border-left: ${theme.colors.border};
  }
  .Experience-item-details {
    background-color: ${theme.colors.black};
  }
  .SocialNetworks-icon-second {
    color: ${theme.colors.black};
  }
`}
`;
