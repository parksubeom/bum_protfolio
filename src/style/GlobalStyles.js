import { createGlobalStyle } from 'styled-components';
import chab from './font/chab.otf';
import Lime from './font/210lime.otf';
import KopubB from './font/KoPubWorld B.ttf';
import KopubL from './font/KoPubWorld B.ttf';
import KopubM from './font/KoPubWorld Light.ttf';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "KopubM";
  src: url(${KopubM}) format("truetype");
}

@font-face {
  font-family: "KopubL";
  src: url(${KopubL}) format("truetype");
}

@font-face {
  font-family: "KopubB";
  src: url(${KopubB}) format("truetype");
}

@font-face {
  font-family: "Lime";
  src: url(${Lime}) format("truetype");
}

@font-face {
  font-family: "촵";
  src: url(${chab}) format("truetype");
}

  body {
    
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
* {
  padding: 0;
  margin: 0;
  
}

:root {
  --main-color: #D18237;
  --sub-color: #D66C44;

  --main-bg-color: #324856;
  --sub-bg-color: #4A746A;

  --text-color: #F2F4EF;
  --main-text-color: #F2F4EF;
  --sub-text-color: #C2E3F4;

  --btn-bg-color: #FF7F50;
  --btn-st-color: #FF9614;
}

/**수평,수직 중앙정렬**/
.flex-all-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

/**수평,수직 중앙정렬**/
.flex-v-center {
  display: flex;
  justify-content: center;
}

/**수평,수직 중앙정렬**/
.flex-h-center {
  display: flex;
  align-items: center;
}

.column {
  flex-direction: column;
}

.row {
  flex-direction: row;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
color: #fff;
text-decoration: none;
outline: none;
}
a:hover,
a:active {
text-decoration: none;
color: #fff;
background-color: #f59000;
}

button {
box-shadow: none;
padding: 0;
 cursor: pointer;
}

`;

export default GlobalStyles;
