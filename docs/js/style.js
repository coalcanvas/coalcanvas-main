window.onload = loadCss();

function loadCss() {
  var linkz = document.createElement("style");
  linkz.innerHTML = `
  
  .cinematic-t {
    z-index: 5;
    position: fixed;
    background: #000000;
    top: 0;
    width: 100vw;
    filter: grayscale(40%);
    -webkit-filter: grayscale(40%);
    height: 100px;
    max-height: 100px;
    overflow: hidden;
    -webkit-transition: max-height 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    -moz-transition: max-height 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    -o-transition: max-height 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    -ms-transition: max-height 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition: max-height 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}


.hide-t {
    max-height: 0px !important;
}

.cinematic-b {
    z-index: 5;
    position: fixed;
    transform: translate(0, 0);
    background: #000000;
    bottom: 0;
    width: 100%;
    height: 12vh;
    filter: grayscale(40%);
    -webkit-filter: grayscale(40%);
    height: 100px;
    max-height: 100px;
    overflow: hidden;
    -webkit-transition: max-height 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    -moz-transition: max-height 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    -o-transition: max-height 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    -ms-transition: max-height 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transition: max-height 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

@keyframes hide-t {
    from {
        transform: translate(0, -0);
        transition: all 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86) !important;
    }
    to {
        transform: translate(0, -12vh);
        transition: all 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86) !important;
    }
}

.cinematic-b.hide-b {
    transform: translate(0, 12vh);
    transition: all 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86) !important;
}

[data-tooltip] {
    --arrow-size: 5px;
    position: relative;
    z-index: 100;
}

[data-tooltip]:before,
[data-tooltip]:after {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    left: 0%;
    bottom: calc(100% + var(--arrow-size));
    pointer-events: none;
    transition: 0.2s;
    will-change: transform;
}

[data-tooltip]:before {
    content: attr(data-tooltip);
    padding: 10px 18px;
    min-width: 50px;
    max-width: 300px;
    width: max-content;
    width: -moz-max-content;
    border-radius: 6px;
    font-size: 14px;
    background-color: rgba(59, 72, 80, 0.9);
    background-image: linear-gradient( 30deg, rgba(59, 72, 80, 0.44), rgba(59, 68, 75, 0.44), rgba(60, 82, 88, 0.44));
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
    color: #fff;
    text-align: center;
    white-space: pre-wrap;
    transform: translate(-50%, calc(0px - var(--arrow-size))) scale(0.5);
}

[data-tooltip]:after {
    content: "";
    border-style: solid;
    border-width: var(--arrow-size) var(--arrow-size) 0px var(--arrow-size);
    border-color: rgba(55, 64, 70, 0.9) transparent transparent transparent;
    transition-duration: 0s;
    transform-origin: top;
    transform: translateX(-50%) scaleY(0);
}

[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
    visibility: visible;
    opacity: 1;
}

[data-tooltip]:hover:before {
    transition-delay: 0.3s;
    transform: translate(-50%, calc(0px - var(--arrow-size))) scale(1);
}

[data-tooltip]:hover:after {
    transition-delay: 0.5s;
    transition-duration: 0.2s;
    transform: translateX(-50%) scaleY(1);
}

[data-tooltip-location="left"]:before,
[data-tooltip-location="left"]:after {
    left: 0;
    right: calc(100% + var(--arrow-size));
    bottom: 50%;
}

[data-tooltip-location="left"]:before {
    transform: translate(calc(0px - var(--arrow-size)), 50%) scale(0.5);
}

[data-tooltip-location="left"]:hover:before {
    transform: translate(calc(-200px - var(--arrow-size)), 50%) scale(1) !important;
}

[data-tooltip-location="left"]:after {
    border-width: var(--arrow-size) 0px var(--arrow-size) var(--arrow-size);
    border-color: transparent transparent transparent rgba(55, 64, 70, 0.9);
    transform-origin: left;
    transform: translateY(50%) scaleX(0);
}

[data-tooltip-location="left"]:hover:after {
    transform: translateY(50%) scaleX(1);
}

[data-tooltip-location="right"]:before,
[data-tooltip-location="right"]:after {
    left: calc(100% + var(--arrow-size));
    bottom: 50%;
}

[data-tooltip-location="right"]:before {
    transform: translate(var(--arrow-size), 50%) scale(0.5);
}

[data-tooltip-location="right"]:hover:before {
    transform: translate(var(--arrow-size), 50%) scale(1);
}

[data-tooltip-location="right"]:after {
    border-width: var(--arrow-size) var(--arrow-size) var(--arrow-size) 0px;
    border-color: transparent rgba(55, 64, 70, 0.9) transparent transparent;
    transform-origin: right;
    transform: translateY(50%) scaleX(0);
}

[data-tooltip-location="right"]:hover:after {
    transform: translateY(50%) scaleX(1);
}

[data-tooltip-location="bottom"]:before,
[data-tooltip-location="bottom"]:after {
    top: calc(100% + var(--arrow-size));
    bottom: auto;
}

[data-tooltip-location="bottom"]:before {
    transform: translate(-50%, var(--arrow-size)) scale(0.5);
}

[data-tooltip-location="bottom"]:hover:before {
    transform: translate(-50%, var(--arrow-size)) scale(1);
}

[data-tooltip-location="bottom"]:after {
    border-width: 0px var(--arrow-size) var(--arrow-size) var(--arrow-size);
    border-color: transparent transparent rgba(55, 64, 70, 0.9) transparent;
    transform-origin: bottom;
}

.timeline {
    position: relative;
    width: 80vw !important;
    max-width: 100vw;
    margin: 0 auto;
    padding: 15px 0;
    top: 15%;
}

div.t-container-ocean {
    background: #ffffff00 !important;
    color: rgb(245, 245, 245) !important;
    background-color: #ffffff00 !important;
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#99222222, endColorstr=#99222222);
    -ms-filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#99222222, endColorstr=#99222222);
    z-index: 10;
    position: relative;
    margin: auto !important;
    -moz-box-shadow: inset 0 0 6px rgb(141 141 141 / 30%);
    -webkit-box-shadow: inset 0 0 6px rgb(141 141 141 / 30%);
    box-shadow: inset 0 0 6px rgb(141 141 141 / 30%);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    backdrop-filter: blur(18px);
}

.timeline::after {
    content: "";
    position: absolute;
    width: 1px;
    background: #8383836b;
    top: 0;
    bottom: 0;
    left: 50% !important;
    margin-left: -1px;
}

@media only screen and (min-width: 576px) {
    .c-title {
        font-size: normal !important;
        letter-spacing: 1rem !important;
    }
 #explore-button {
    position: absolute;
    top: 30%;
    left: 20%;
    min-width: 250px; 
    transform: translate(0%, 0%)
}
    body {
        height: 100vh !important;
    }
}

.t-container {
    padding: 15px 30px;
    position: relative;
    background: inherit;
    width: 50%;
}

.t-container.left {
    left: 0;
}

.t-container.right {
    left: 50%;
}

.t-container::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: calc(50% - 8px);
    right: -9px;
    background: #ffffff;
    border: 1px solid #343434;
    border-radius: 50%;
    z-index: 1;
}

.t-container.right::after {
    left: -8px;
}

.t-container::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 1px;
    top: calc(50% - 1px);
    right: 12px;
    background: #8383836b;
    z-index: 1;
}

.t-container.right::before {
    left: 8px;
}

.t-container .date {
    position: absolute;
    display: inline-block;
    top: calc(50% - 8px);
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #f2f2f2ab;
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 1;
    width: 12vw;
    line-height: 1;
    word-wrap: break-word !important;
}

.t-container.left .date {
    right: -15vw;
}

.t-container.right .date {
    left: -15vw;
}

.t-container .icon {
    position: absolute;
    display: inline-block;
    width: 44px;
    height: 34px;
    padding: 3px 1px;
    top: calc(75% - 21px);
    background: #baadc0;
    border: 0px solid #1b201e40;
    border-radius: 370px 288px 628px 250px;
    text-align: center;
    font-size: 26px;
    color: #e8e3e3fc;
    z-index: 11;
    filter: grayscale(86%);
}

.t-container.left .icon {
    right: 85%;
}

.t-container.right .icon {
    left: 56px;
}

.t-container .content {
    padding: 19px 80px 30px 68px;
    background: #efefef;
    position: relative;
    border-radius: 500px 335px 500px 335px;
}

.jazzy-bradius {
    border-radius: 500px 335px 500px 335px;
}

.t-container.right .content {
    padding: 19px 81px 31px 80px;
    border-radius: 500px 335px 500px 335px;
}

.t-container .content h2 {
    margin: 0 0 10px 0;
    font-size: 18px !important;
    font-weight: 600;
    color: #ffffffba;
}

.t-container .content p {
    margin: 0;
    font-size: 12px !important;
    line-height: 22px;
    color: #ffffffba;
}

 

.btm-shadow {
    box-shadow: 0 1px 0px -2px black;
}

:root {
    --text-color: #adadad !important;
    --link-color: #adadad !important;
    --swiper-theme-color: #373a3e !important;
    --transition: 0.75s cubic-bezier(0.255, 0.67, 0, 1.01);
}

.text-center {
    text-align: center !important;
}

.xxlg-text {
    font-size: xx-large !important;
}

.xsmall-text {
    font-size: x-small !important;
}

.xlg-text {
    font-size: x-large !important;
}

.lgr-text {
    font-size: larger !important;
}

.lg-text {
    font-size: large !important;
}

.med-text {
    font-size: medium !important;
}

.small-text {
    font-size: small !important;
}

div.ql-editor {
    min-height: 300px;
}

.thick {
    font-weight: bold;
}

a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
}

$boxShadow: 2px 8px 4px -6px rgba(0, 0, 0, 0.527);
.site-button-ghost-wrapper {
    padding: 8px 8px 0 8px;
    background: rgb(190, 200, 200);
}

i {
    margin-left: 0.3rem;
    font-size: small;
}

h1,
h2,
h3,
h5,
h6,
span {
    font-family: "Source Sans Pro", sans-serif;
}

h3,
h5,
strong {
    color: var(--text-color);
    font-weight: 300 !important;
}

hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgb(255 255 255 / 32%) !important;
}

h1 {
    font-size: calc(2.5em + 0.5vw) !important;
    font-weight: 300 !important;
    filter: drop-shadow(20px);
}

@media screen and (max-width: 575px) {
    .dot {
 right: 18px !important;
    bottom: 13px !important;
    }
     #explore-button {
    position: absolute;
    top: 30%;
    left: 20%;
    min-width: 250px; 
    transform: translate(0%, 0%)
}
        [data-tooltip-location="left"]:before,
    [data-tooltip-location="left"]:after {
        left: -50%;
    }
    div.t-container-ocean {
        width: 210px !important;
    }
    .t-container .content h2 {
        margin: -30px 0 -80px 0;
        font-size: 12px !important;
        font-weight: 600;
        color: #ffffffba;
    }
    .t-container .icon {
        position: absolute;
        display: inline-block;
        width: 30px;
        height: 30px;
        padding: 3px 1px;
        top: calc(52% - 21px);
        background: #9f6cb640;
        border: 0px solid #1b201e40;
        border-radius: 370px 288px 628px 250px;
        text-align: center;
        font-size: 15px;
        color: #e8e3e3fc;
        z-index: 11;
        filter: grayscale(0%);
    }
    .timeline::after {
        left: 90px !important;
    }
    div.timeline.container {
           transform: translate(0px, -70px) !important;
    }
    .t-container {
        width: 100%;
        padding-left: 120px;
        padding-right: 30px;
    }
    .t-container.right {
        left: 0%;
    }
    .t-container.left::after,
    .t-container.right::after {
        left: 82px;
    }
    .t-container.left::before,
    .t-container.right::before {
        left: 100px;
        border-color: transparent #006e51 transparent transparent;
    }
    .t-container.left .date,
    .t-container.right .date {
        right: auto;
        left: 15px;
    }
    .t-container.left .icon,
    .t-container.right .icon {
        right: auto;
        left: 146px;
    }
    .t-container.left .content,
    .t-container.right .content {
        padding: 30px 30px 30px 90px;
        border-radius: 500px 0 0 500px;
    }
    h1 {
        font-size: calc(0.5em + 1.5vw) !important;
        font-weight: 300 !important;
        filter: drop-shadow(20px);
        line-height: 0.5 !important;
        filter: drop-shadow(20px);
    }
    p {
        color: var(--text-color);
        font-size: calc(0.5em + 1.5vw) !important;
        line-height: normal;
    }
                .title-tag {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        left: 0;
        top: 55vh;
        position: fixed;
    }
    h2 {
        color: var(--text-color);
        font-size: calc(0.5em + 0.5vw) !important;
        line-height: 1.1em;
    }
    .flip-card-back p,
    .flip-card-back p p {
        color: var(--text-color);
        font-size: calc(0.5em + 0.05vw) !important;
        line-height: 1.2em;
    }
    .flip-card {
        margin-left: 0.5vw !important;
        transform: translateX(-30px) !important;
    }
    .centered {
        transform: translate(0%, 0%);
        z-index: 10;
        background: #000000b3;
       margin: auto;  
    padding: 20px;
    }
    .isomorph-o.card {
    transform: translate(0px, 55px) !important;
}
    .grid-container {
        grid-template-columns: 10px repeat(6, 1fr) 10px;
        grid-gap: 10px;
    }
    .cards {
        grid-column: 2 / span 6;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 20px;
    }
    .card {
        grid-column-end: span 6;
    }
    canvas {
        object-fit: fill;
        min-height: 43%;
        width: 100% !important;
        -webkit-aspect-ratio: 4/3;
        aspect-ratio: 4/3;
        z-index: -2;
        position: absolute;
        top: 0;
        left: 0;
    }
    canvas {
        object-fit: fill;
        min-height: 50%;
        width: 100% !important;
        -webkit-aspect-ratio: 4/3;
        aspect-ratio: 4/3;
        z-index: -2;
        position: absolute;
        top: 0;
        left: 0;
    }
    .showreel {
        animation: 25s linear 0s infinite forwards none running beritext;
        animation-duration: 25s;
    }
    @keyframes beritext {
        0% {
            transform: translateX(-700vw);
        }
        100% {
            transform: translateX(420vw);
        }
        0% {
            transform: translateX(-100vw);
        }
    }
}

.neon {
    color: rgba(170, 141, 88, 0.618);
    filter: grayscale(20%);
    cursor: pointer;
    animation: glow infinite 3s alternate ease-in-out forwards;
}

.neon-blue {
    color: rgba(170, 141, 88, 0.618);
    filter: grayscale(20%);
    cursor: pointer;
    animation: glow-blue infinite 3s alternate ease-in-out forwards;
}

p {
    color: var(--text-color);
    font-size: calc(0.5em + 0.8vw) !important;
    line-height: normal;
}

em {
    font-size: calc(0.5em + 0.1vw) !important;
}

h2 {
    padding: 0.5rem 0;
    color: var(--text-color);
    font-size: calc(1em + 0.5vw) !important;
    font-weight: 400 !important;
}

h3 {
    padding: 1rem 0;
}

h4 {
    font-size: calc(0.5em + 2.5vw) !important;
    line-height: 1.5rem;
    font-weight: 100 !important;
    font-family: "Source Sans Pro", sans-serif;
}

h5 {
    font-size: calc(0.6em + 0.5vw) !important;
    line-height: 1.5rem;
}

.sub {
    font-size: calc(0.6em + 0.3vw) !important;
    margin: auto;
    top: 12vh;
}

h6 {
    color: var(--text-color);
    font-size: calc(0.5em + 0.4vw) !important;
    font-weight: 200 !important;
    line-height: 1rem;
}

.centered {
    top: 50%;
    left: 50%;
    transform: translate(0%, 0%);
    z-index: 10;
    background: #000000b3;
}

label {
    font-size: calc(1em + 0.8vw) !important;
    font-weight: 300 !important;
    font-style: normal;
}

.b-text {
    color: var(--blue-text);
}

.green-text {
    color: rgb(91, 228, 86);
}

.purple-text {
    color: rgb(200, 137, 248);
}

.black-text {
    color: rgb(32, 32, 32);
}

.grey-text {
    color: rgb(60, 60, 60) !important;
}

.y-text {
    color: var(--yellow-text);
}

.title-tag {
    padding-top: 1rem;
    z-index: 99;
}

.card {
    background-color: rgba(255, 255, 255, 0) !important;
    top: 15vh !important;
}

@media screen and (min-width: 1060px) {
    .t-container-ocean .content h2 {
        color: var(--text-color);
        font-size: calc(0.8em + 0.5vw) !important;
        line-height: 1.1em;
    }
}
 
.vrl {
    writing-mode: vertical-rl;
}

h4,
b,
label,
.sub {
    color: var(--text-color);
}

i {
    color: #ffffffe5;
    font-weight: 300;
}

a {
    color: var(--link-color);
}

h4,
a,
b,
i,
label,
.sub {
    animation: lightbulb 1s linear;
    -webkit-animation: lightbulb 1s linear;
    -moz-animation: lightbulb 1s linear;
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    -webkit-animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
    filter: contrast(105%);
    -moz-animation-fill-mode: both;
}

@keyframes lightbulb {
    to {
        color: rgba(37, 34, 44, 0.816);
    }
}

.jdorsey {
    background-color: #00acee !important;
}

.volcano {
    background-color: #661d1dd3 !important;
}

.pearl {
    background-color: rgb(5 44 75) !important;
    color: #ffffffd3 !important;
}

.techno {
    background-color: #000000;
    color: #ffffffd3;
    animation: meld 1s linear;
    -webkit-animation: meld 1s linear;
    -moz-animation: meld 1s linear;
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    -webkit-animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
}

.nature {
    background-color: #25006fb8;
    color: #ffffffd3;
    animation: meld 1s linear;
    -webkit-animation: meld 1s linear;
    -moz-animation: meld 1s linear;
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    -webkit-animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
}

.nature-2 {
    border: 0.5px solid #25006f91;
    background-color: #ffffff15;
    color: rgb(255, 255, 255);
    animation: meld-2 1s linear;
    -webkit-animation: meld-2 1s linear;
    -moz-animation: meld-2 1s linear;
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    -webkit-animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
    font-weight: 100;
    -moz-animation-fill-mode: both;
}

.nature-3,
button {
    border: 0.5px solid #25006f91;
    background-color: #ffffff15;
    color: rgb(255, 255, 255);
    animation: meld-3 1s linear;
    -webkit-animation: meld-3 1s linear;
    -moz-animation: meld-3 1s linear;
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    -webkit-animation-delay: calc(var(--scroll) * -1s);
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    font-weight: 600;
}

.nature-4 {
    background-color: #000000ab;
    background-image: linear-gradient(326deg, #211aa7ab 0%, #c520ce88 74%);
    color: rgb(255, 255, 255);
    filter: grayscale(40%);
}

.nature-4:hover {
    filter: grayscale(0%);
}

@keyframes meld {
    to {
        color: rgb(23, 26, 22);
        background-color: #fcfcfcd4;
    }
}

@keyframes meld-2 {
    to {
        border: 0.5px solid #5e5e5e91;
        background-color: #00000015;
        color: rgb(124, 124, 124);
        font-weight: 400;
    }
}

.grass {
    background-color: rgb(9, 63, 21) !important;
    color: #fff2f2d3 !important;
}

.taxi {
    background-color: rgb(231, 198, 50) !important;
    color: #ffffffd3 !important;
}

.volcano-text {
    color: #862626d3 !important;
}

.bold {
    font-weight: 600 !important;
}

.coal-text {
    color: rgb(68, 68, 67) !important;
}

.white-text {
    color: rgb(255, 255, 255) !important;
}

.blue-text {
    color: rgb(62, 81, 143) !important;
}

.ghostwhite-text {
    color: rgb(240, 240, 240) !important;
}

p.a {
    font-style: normal;
}

.descriptor-text {
    font-style: italic !important;
    color: rgb(112, 112, 111) !important;
    line-height: 0.9em !important;
    font-size: smaller !important;
}

p.c {
    font-style: oblique;
}

h6 {
    color: rgb(8, 52, 88) !important;
}

.black-text {
    color: rgb(0, 0, 0) !important;
}

.align-v {
    vertical-align: middle !important;
}

.icon-blue-4:hover {
    color: #3596f1 !important;
    border: 1px solid #70aad4 !important;
}

.icon-gold-3:hover {
    color: #faad14 !important;
    border: 1px solid #ffe58f !important;
}

.icon-red-4:hover {
    color: #ff4d4f !important;
    border: 1px solid #ff7875 !important;
}

.icon-gray-9:hover {
    color: #434343 !important;
    border: 1px solid #d9d9d9 !important;
}

.feedback-card {
    border: 1px solid transparent;
    max-width: 980px;
    background-color: #ffffff17;
    margin: 0 auto;
    box-shadow: $shadow;
    width: 30vw;
    height: 40vh;
    backdrop-filter: blur(12px);
    border-radius: 15%;
}

.feedback-card.feedback-header {
    text-align: center;
    padding: 8px;
    font-size: 1.5rem;
    font-weight: 700;
    border-bottom: 1px solid black;
}

.feedback-body {
    padding: 15px 15px;
    width: 20vw;
    height: 30vh;
    background-color: #fff0;
    margin: 20px 49px;
    border-radius: 15%;
    background-color: #fff0;
    color: white !important;
    display: flex;
    border-radius: 15%;
    flex-direction: column;
    .feedback-body__message {
        margin-top: 10px;
    }
    button {
        margin-top: 10px;
        align-self: flex-end;
    }
}

.feedback-body__email {
    border-radius: 15% !important;
    background-color: #fff0 !important;
    color: white !important;
}

.focus {
    z-index: 1;
    background-image: url("https://media1.giphy.com/media/KouuVwfTuArOWeerLM/giphy.gif?cid=ecf05e47l0hmg6uc3cb8pnz2sn6whky20c9t25hl8wwavb25&rid=giphy.gif&ct=g");
    background-size: auto;
    background-repeat: repeat-x;
    background-position: bottom;
    width: 100%;
    height: 30vh;
    -webkit-filter: grayscale(20%);
    -moz-filter: grayscale(20%);
    -o-filter: grayscale(20%);
    -ms-filter: grayscale(20%);
    filter: grayscale(20%);
}

.tline-wrapper {
    z-index: 1;
    width: 300px;
    margin: 30px auto;
    text-align: center;
    -webkit-filter: grayscale(20%);
    -moz-filter: grayscale(20%);
    -o-filter: grayscale(20%);
    -ms-filter: grayscale(20%);
    filter: grayscale(20%);
    box-sizing: border-box;
}

@media only screen and (max-width: 780px) {
    .feedback-card {
        border: 1px solid transparent;
        max-width: 980px;
        background-color: #ffffff17;
        margin: 0 auto;
        box-shadow: $shadow;
        width: 50vw;
        height: 40vh;
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px) !important;
        border-radius: 15%;
    }
    .feedback-body {
        padding: 15px 15px;
        width: 30vw;
        height: 30vh;
        background-color: #fff0;
        margin: 20px 35px;
        border-radius: 15%;
        background-color: #fff0;
        color: white !important;
        display: flex;
        border-radius: 15%;
        flex-direction: column;
    }
}

.form-footer input[type="text"] {
    border: none;
    border-radius: 16px 0 0 16px;
    outline: none;
    padding-left: 10px;
}

::placeholder {
    font-size: 10px;
    padding-left: 10px;
    font-style: italic;
}

.social .fa {
    color: grey;
    font-size: 22px;
    padding: 10px 15px;
    background: #3c3c3c;
}

section.slide {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform: perspective(800px);
    transform: perspective(800px);
    display: flex;
}

.flip-card {
    background-color: transparent;
    width: 20vw;
    height: 100%;
    perspective: 1000px;
    margin-left: 1vw;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 25px;
}

.flip-card-front {
    background-color: rgba(54, 60, 67, 0.401);
    color: black;
    width: 20vw;
    height: 40vh;
}

.flip-card-back {
    background-color: rgba(54, 60, 67, 0.401);
    color: white;
    width: 20vw;
    height: 40vh;
    transform: rotateY(180deg);
}

.align-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
}

@media (min-width: 1062px) {
    body {
        padding-top: 0;
    }
}

@media (min-width: 1024px) {
    body {
        padding-top: 62px;
    }
}

@media (min-width: 768px) {
    body {
        padding-top: 58px;
    }
}

.page-wrap {
    min-height: 100%;
    max-width: 1212px;
    margin: auto;
}

@media (min-width: 1024px) {
    .main-footer,
    .page-wrap:after {
        min-height: 100px;
    }
    .page-wrap {
        margin-bottom: -100px;
    }
}

.page-wrap:after {
    content: "";
    display: block;
}

.isomorph-i {
    -moz-box-shadow: inset 2px 0px 12px #b6b6b6 !important;
    -webkit-box-shadow: inset 2px 0px 12px #b6b6b6 !important;
    box-shadow: inset 2px 0px 12px #b6b6b6 !important;
    -webkit-border-radius: 1px !important;
    -moz-border-radius: 1px !important;
    border-radius: 1px !important;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
}

.small-br {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border-radius: 5px;
}

.large-br {
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
}

.swipe-icon {
    position: absolute;
    bottom: 60px;
    width: 20px;
    margin: auto;
    display: block;
    cursor: pointer;
    padding-bottom: 40px;
    z-index: 6;
    left: 0;
    right: 0;
    opacity 1;
    visibility: visible;
 
}

.swipe-icon.hide {
    opacity: 0;
    visibility: hidden !important;
    display: none !important;
}

.dot {
    position: absolute;
    right: 15px;
    bottom: 0;
}
.dot.blinking {
     animation: blink 2s infinite;
}
.pulsating-circle {
    position: absolute;
    left: 15%;
    bottom: 5%;
    transform: translateX(-50%) translateY(-50%);
    width: 15px;
    height: 15px;
    z-index: 9;
}
  .pulsating-circle:before {
    content: '';
    position: relative;
    display: block;
    width: 300%;
    height: 300%;
    box-sizing: border-box;
    margin-left: -100%;
    margin-top: -100%;
    border-radius: 45px;
    background-color: #656565bb;
    animation: pulse-ring 1.5s alternate cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    animation-play-state: running;
      -webkit-animation: pulse-ring 1.5s alternate cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    -webkit-animation-play-state: running;
  }
  .pulsating-circle.pause:before,.pulsating-circle.pause:before {
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }
  
.pulsating-circle:after {
    content: '';
    position: absolute;
    left: 0; 
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #7357ed;
    border-radius: 15px;
    box-shadow: 0 0 8px rgba(0,0,0,.3);
        animation: pulse-ring 1.5s alternate cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    animation-play-state: running;
      -webkit-animation: pulse-ring 1.5s alternate cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
    -webkit-animation-play-state: running;
  }
 

@keyframes pulse-ring {
  0% {
    transform: scale(.33);
  }
  80%, 100% {
    opacity: 0.3;
  }
}

@-webkit-keyframes pulse-ring {
  0% {
    -webkit-transform: scale(.33);
  }
  80%, 100% {
    opacity: 0.3;
  }
}

@keyframes pulse-dot {
  0% {
    transform: scale(.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(.8);
  }
}

@-webkit-keyframes pulse-dot  {
  0% {
    -webkit-transform: scale(.8);
  }
  50% {
    -webkit-transform: scale(1);
  }
  100% {
    -webkit-transform: scale(.8);
  }
}

@keyframes "blink" {
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
 
@-moz-keyframes blink {
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-webkit-keyframes "blink" {
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-ms-keyframes "blink" {
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-o-keyframes "blink" {
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
.swipe-icon.hand {
    animation: pulse 2s infinite;margin-top: 20px;
    display: block;
}
#app {
    filter: invert(100%) !important;
    margin: auto;
    z-index: -1;
    width: 100% !important;
    height: 100% !important;
    display: block;
    
}

#tjs {
    margin: auto;
    z-index: -1;
    width: 100% !important;
    height: 100% !important;
    display: block;
    font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #adadad;

}

@media (min-width: 1062px) {
    body {
        padding-top: 0;
    }
}

@media (min-width: 1024px) {
    body {
        padding-top: 62px;
    }
}

@media (min-width: 768px) {
    body {
        padding-top: 58px;
    }
}

.rounded-border {
    -webkit-border-radius: 12px !important;
    -moz-border-radius: 12px !important;
    border-radius: 12px !important;
}

.isomorph-o {
    -moz-box-shadow: 4px 0px 24px #b6b6b6 !important;
    -webkit-box-shadow: 4px 0px 24px #b6b6b6 !important;
    box-shadow: 4px 0px 24px #b6b6b6 !important;
    -webkit-border-radius: 12px !important;
    -moz-border-radius: 12px !important;
    border-radius: 12px !important;
    filter: contrast(65%) !important;
    -webkit-filter: (65%) !important;
}


.isomorph-o-wb {
    -moz-box-shadow: 4px 0px 24px #b6b6b6 !important;
    -webkit-box-shadow: 4px 0px 24px #b6b6b6 !important;
    box-shadow: 4px 0px 24px #b6b6b6 !important;
    -webkit-border-radius: 12px !important;
    -moz-border-radius: 12px !important;
    border-radius: 12px !important;
    backdrop-filter: blur(8px);
    filter: contrast(65%) !important;
    -webkit-backdrop-filter: blur(8px);
}

.isomorph-o:hover {
    filter: contrast(100%) !important;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

div.container-bright {
    -moz-box-shadow: inset 2px 0px 12px #b6b6b6 !important;
    -webkit-box-shadow: inset 2px 0px 12px #b6b6b6 !important;
    box-shadow: inset 2px 0px 12px #b6b6b6 !important;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    width: 100vw;
    height: auto;
    background: linear-gradient(147deg, #f0f3ff9a 0%, #2d2e304d 74%) !important;
    background-color: #ffffff48 74% !important;
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#99222222, endColorstr=#99222222);
    -ms-filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#99222222, endColorstr=#99222222);
}

.small-br {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border-radius: 5px;
}

.large-br {
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
}

.container-translucent {
    background: linear-gradient(147deg, #ffffff 0%, #ffffff8a 74%) !important;
    background-color: #ffffff79 74% !important;
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#99222222, endColorstr=#99222222);
    -ms-filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#99222222, endColorstr=#99222222);
    z-index: 10;
    position: relative;
    margin: auto !important;
    -moz-box-shadow: inset 2px 0px 12px #b6b6b6;
    -webkit-box-shadow: inset 2px 0px 12px #b6b6b6;
    box-shadow: inset 2px 0px 12px #b6b6b6;
    padding: 0.5em;
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
only screen and (-o-min-device-pixel-ratio: 3/2),
only screen and (min--moz-device-pixel-ratio: 1.5),
only screen and (min-device-pixel-ratio: 1.5) {
    html,
    body {
        width: 100% !important;
        overflow-x: hidden;
        scroll-behavior: smooth;
        -webkit-scroll-behavior: smooth;
        font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }
}

.stop-scrolling {
    height: 100%;
    overflow: hidden;
}

html:focus-within {
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
    -ms-scroll-behavior: smooth;
    -moz-scroll-behavior: smooth;
}

.blur-bg {
    backdrop-filter: blur(35px);
    -webkit-backdrop-filter: blur(35px);
    -moz-backdrop-filter: blur(35px);
}

.shadow {
    -moz-box-shadow: inset 3px 5px 6px rgba(80, 80, 80, 0.487);
    -webkit-box-shadow: inset 3px 5px 6px rgba(80, 80, 80, 0.487);
    box-shadow: inset 3px 5px 6px rgba(80, 80, 80, 0.487);
}

@media only screen and (max-width: 700px) {
    body {
        font-size: 1rem;
    }
    .grid-container {
        grid-gap: 20px;
    }
    .card {
        grid-column-end: span 12;
    }
}

 
.container--small {
    max-width: 30em;
}

.container--medium {
    max-width: 42.5em;
}

.container--large {
    max-width: 48em;
}

.container--xlarge {
    max-width: 64em;
}

.container--xxlarge {
    max-width: 77.5em;
}

.container--center {
    margin-left: auto;
    margin-right: auto;
}

audio,
canvas,
video {
    display: inline-block !important;
}

canvas {
    width: 100%;
    aspect-ratio: 1/1;
    z-index: -2;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 48vmax;
    aspect-ratio: 1/1;
    z-index: -2;
    position: absolute;
    object-fit: cover;
    height: max-content;
}


div.container-ocean {
    background: #132f49 !important;
    color: rgb(245, 245, 245) !important;
    background-color: #2a364e4d 74% !important;
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#99222222, endColorstr=#99222222);
    -ms-filter: progid: DXImageTransform.Microsoft.gradient(startColorstr=#99222222, endColorstr=#99222222);
    z-index: 10;
    position: relative;
    margin: auto !important;
    -moz-box-shadow: inset 0 0 6px rgb(141 141 141 / 30%);
    -webkit-box-shadow: inset 0 0 6px rgb(141 141 141 / 30%);
    box-shadow: inset 0 0 6px rgb(141 141 141 / 30%);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    backdrop-filter: blur(1px);
}

@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
only screen and (-o-min-device-pixel-ratio: 3/2),
only screen and (min--moz-device-pixel-ratio: 1.5),
only screen and (min-device-pixel-ratio: 1.5) {
    html,
    body {
        max-width: 100vw;
        max-height: 100vh;
        width: 100% !important;
        overflow-x: hidden;
    }
}

.stop-scrolling {
    height: 100%;
    overflow: hidden;
}

html,
body {
    max-height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-family: "Marvel", sans-serif;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
    -ms-scroll-behavior: smooth;
    -moz-scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-scrolling: touch;
    -moz-overflow-scrolling: touch;
    color: #7e898f !important;
    background-color: #000000 !important;
    -webkit-filter: grayscale(20%) !important;
    filter: grayscale(20%) !important;
}

html:focus-within {
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
    -ms-scroll-behavior: smooth;
    -moz-scroll-behavior: smooth;
}

main {
    width: 100vw;
    margin: 0;
    padding: 0;
}

section {
    height: auto;
    min-width: 100vw;
    min-height: 40vh;
    margin: auto;
}

@keyframes body {
    to {
        background-color: rgb(0, 0, 0);
        border-radius: 50px;
        margin: auto;
        width: 95%;
        transform: translate(2vw);
        filter: contrast(125%);
        filter: grayscale(20%);
    }
}

@keyframes blurp {
    to {
        background-color: rgba(0, 0, 0, 0.37);
    }
}

.blur-bg {
    backdrop-filter: blur(35px);
    -webkit-backdrop-filter: blur(35px);
    -moz-backdrop-filter: blur(35px);
}

@keyframes mmfadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes mmfadeOut {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@keyframes mmslideIn {
    from {
        transform: translateY(15%);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes mmslideOut {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-10%);
    }
}

.shadow {
    -moz-box-shadow: inset 3px 5px 6px rgba(80, 80, 80, 0.487);
    -webkit-box-shadow: inset 3px 5px 6px rgba(80, 80, 80, 0.487);
    box-shadow: inset 3px 5px 6px rgba(80, 80, 80, 0.487);
}

.container--small {
    max-width: 30em;
}

.container--medium {
    max-width: 42.5em;
}

.container--large {
    max-width: 48em;
}

.container--xlarge {
    max-width: 64em;
}

.container--xxlarge {
    max-width: 77.5em;
}

.container--center {
    margin-left: auto;
    margin-right: auto;
}

audio,
canvas,
video {
    display: inline-block !important;
}

@media screen and (min-width: 1062px) {
    canvas {
        width: 100% !important;
        height: max-content;
        z-index: -2;
        position: absolute;
        object-fit: fill !important;
        border-radius: 20px !important;
    }
    .grid__item-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        pointer-events: none;
        background: rgb(0 0 0 / 35%);
        top: 8vh;
        position: relative;
        left: 54vw;
    }
}

canvas {
    width: 100%;
    aspect-ratio: 1/1;
    z-index: -2;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 50vmax;
    aspect-ratio: 1/1;
    z-index: -2;
    position: absolute;
    object-fit: cover;
    height: max-content;
}


img {
    border: 0;
}

button:hover {
    filter: contrast(120%) !important;
    filter: grayscale(90%) !important;
    filter: brightness(100%);
    backdrop-filter: blur(35px);
    -webkit-backdrop-filter: blur(35px);
    -moz-backdrop-filter: blur(35px);
}

 

.showreel {
    display: inline-block;
    animation: 45s linear 0s infinite forwards none running beritext;
    animation-duration: 45s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: forwards;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: beritext;
    white-space: nowrap;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: hidden;
    position: absolute;
}

.paused {
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    -o-animation-play-state: paused;
    animation-play-state: paused;
}

.showreel:hover,
.showreel:active {
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    -o-animation-play-state: paused;
    animation-play-state: paused;
}

@keyframes beritext {
    0% {
        transform: translateX(0vw);
    }
    100% {
        transform: translateX(380vw);
    }
    0% {
        transform: translateX(0vw);
    }
}



a:hover {
    cursor: pointer;
    filter: contrast(90%) !important;
    filter: sepia(80%);
    transform: translateZ(20px) scale(0.95);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    color: rgba(234, 0, 255, 0.707);
}

@keyframes s-appear {
    0% {
        opacity: 0 !important;
        visibility: hidden !important;
    }
    25% {
        opacity: 0.05 !important;
        visibility: visible !important;
    }
    50% {
        opacity: 0.15 !important;
    }
    95% {
        opacity: 0.25 !important;
    }
    100% {
        opacity: 1 !important;
        visibility: visible !important;
    }
}

@keyframes pulse {
    0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
}
50% {
    -webkit-transform: translate(0, 10px);
    transform: translate(0, 10px);
}

100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
}
}
.calendly {
    width: 42.5%;
    border-radius: 50px;
    border: rgba(45, 60, 53, 0.597) 3px solid;
    height: auto;
    filter: contrast(130%);
    background-color: #ffffff80;
}

.instagram {
    width: 80%;
    border-radius: 50px;
    border: rgba(45, 60, 53, 0.597) 5px solid;
    height: auto;
    opacity: 70%;
    filter: contrast(50%);
}

.linkedin {
    width: 70.5%;
    border-radius: 50px;
    border: rgba(45, 60, 53, 0.597) 5px solid;
    height: auto;
    opacity: 70%;
    filter: contrast(50%);
    background-color: #ffffffcb;
    padding: 5px;
}

.email {
    width: 70.5%;
    border-radius: 50px;
    border: rgba(45, 60, 53, 0.597) 5px solid;
    height: auto;
    opacity: 70%;
    filter: contrast(50%);
    background-color: #fffffff0;
    padding: 5px;
}



`;
  document.head.appendChild(linkz);
}
