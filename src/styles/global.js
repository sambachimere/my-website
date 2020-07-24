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
  .MuiFormControl-root .MuiInputLabel-outlined,
  .MuiOutlinedInput-root .MuiOutlinedInput-input,
  label.Mui-focused,
  .PortfolioItem-projectName {
    color: ${theme.colors.black} !important;
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
  .SocialNetworks-icon-second {
    color: ${theme.colors.black};
  }
`}
`;
