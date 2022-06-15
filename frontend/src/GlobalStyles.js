import { createGlobalStyle } from 'styled-components'

/* http://meyerweb.com/eric/tools/css/reset/
   v5.0.1 | 20191019
   License: none (public domain)
*/
export default createGlobalStyle`
:root{

    /* global variables */

  /** font color */
  --MainBlack : #707070;
  --MainWhite : #e4e4e4;
  --accent :#5c5470;

  /* font styles */
  --font-main-header : 'Federant', cursive;
  --font-secondary-header: 'Overlock SC', cursive;
  --font-text: 'Josefin Sans', sans-serif;
  --font-anomaly: 'Roboto Condensed', sans-serif;
  
  /*backgrounds*/
  --button-background-gray: rgba(200,195,190,1);
  --semi-tranparent-grey: rgba(215,210,205,0.6);
  --semi-tranparent-grey-InputField: rgba(205,200,195,0.4);

  /*side panel background*/
  --user-sidePanel: rgba(110,110,110,0.8);
  --admin-background-mainPanel:#EFE7DF;

  /*other*/
  --error-message: rgba(210,51,51,0.7);
  --green-confirmation: rgba(51,165,51,0.8);


}



html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;