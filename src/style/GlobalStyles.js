import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

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
  --main-color: #7683d9;
  --sub-color: #d8a0fe;

  --main-bg-color: #f0ffff;
  --sub-bg-color: rgb(23, 33, 48);

  --text-color: #696969;
  --main-text-color: #787878;
  --sub-text-color: #525252;

  --btn-bg-color: #201e39;
  --btn-st-color: #8f8ae2;
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
