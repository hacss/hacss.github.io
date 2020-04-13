const { colors: { blue300, white } } = require("./common.js");

module.exports = `
  <svg width="400px" height="512px" viewBox="0 0 400 512" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad0" x1="0" y1="0" x2="0" y2="100%">
        <stop offset="62.5%" style="stop-color:${white};stop-opacity:1" />
        <stop offset="62.5%" style="stop-color:${blue300};stop-opacity:1" />
      </linearGradient>
    </defs>
    <g fill="url(#grad1)">
      <path fill="url(#grad0)" d="M16,0 v256 l16,16 l-32,32 l32,32 l-32,32 l32,32 l-32,32 l32,32 l-32,32 l16,16 h96 v-288 h128 a64,64 0 0 1 64,64 v224 h96 v-224 a160,160 1 0 0 -160,-160 h-128 v-128" />
    </g>
  </svg>
`;