import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${({ theme }) => css`
  html {
    background: ${theme.colors.background};
  }
  .Title,
  .Portfolio-project-title,
  .Portfolio-project-text,
  .Portfolio-project-image,
  .Sidebar-nav-item,
  .Nav-Dot,
  .Vertical-line,
  .Header,
  .Sidebar,
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
  .PortfolioItem-projectName,
  .HomeHero-myWork-text,
  .About-block-text-message,
  .SocialNetworks-icon
  {
    background: ${theme.colors.background};
    color: ${theme.colors.black} !important;
  }
  .Vertical-line {
    background: ${theme.colors.backgroundLine};
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
  .SocialNetworks-icon-second
  {
    color: ${theme.colors.black};
  }
  .Portfolio-container:before,
  {
    background: ${theme.colors.linearGradientBefore}
  }
  .Portfolio-project-button-text,
  .About-myWork-text,
  .About-contact-text {
    color: ${theme.colors.textColor}
  }
  .Portfolio-container:after {
    background: ${theme.colors.linearGradientAfter}
`}
`;
