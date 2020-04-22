const { page } = require("./common.js");

module.exports = () => page({
  source: __filename,
  content: `
    <div class="height:100%; display:flex; flex-direction:column;">
      <div class="
        flex-grow:1;
        flex-shrink:0;
        box-sizing:border-box;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background-image:linear-gradient($blue700,$blue400);
        color:white;
        font-family:$sans-serif;
        font-size:32px;
        @small{font-size:32px;}
        font-weight:300;
        padding-y:32px;
      ">
        <img src="logo-hacss.svg" alt="Hacss" class="height:3em;" />
        <p class="margin-top:8px; margin-bottom:0; letter-spacing:-1px;">
          Style like you mean it.
        </p>
        <a
          href="getting-started.html"
          class="
            border:none;
            border-radius:0.25em;
            margin-top:1.5em;
            @small{margin-top:1em;}
            padding-y:0.6em;
            padding-left:0.8em;
            padding-right:0.6em;
            font-size:0.625em;
            font-weight:200;
            font-family:$sans-serif;
            background:$red700;
            :hover{background:$red800;}
            color:$red100;
            display:inline-flex;
            align-items:center;
            cursor:pointer;
            text-decoration:none;
          ">
          <span class="display:inline-block; margin-right:0.2em;">Start</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="W(1.2em)"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" fill="currentColor" /></svg>
        </a>
      </div>
      <div class="
        background:$red700;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:center;
        padding:4px;
      ">
        ${
          [
            {
              title: "Cut the BS out of CSS.",
              content: `
                The atomic CSS methodology avoids redundant abstractions,
                inconsistent or dead code, and surprising behaviors inherent
                to other approaches and methodologies.
              `,
            },
            {
              title: "Increase your agility.",
              content: `
                This direct approach to styling HTML makes code more transparent
                and easier to change while eliminating context switches, code
                alignment issues, and naming challenges.
              `,
            },
            {
              title: "Inline superpowers",
              content: `
                Hacss brings media queries, pseudo-classes, pseudo-elements, and
                contextual styling capabilities to the inline style language
                you've always used, even without plugins.
              `,
            },
          ]
            .map(({ title, content }) => `
              <div class="
                margin:4px;
                padding:24px;
                border-radius:8px;
                flex-basis:calc(33.333%-8px);
                @small{flex-basis:100%;}
                box-sizing:border-box;
                font-family:$sans-serif;
                background:$red100;
                color:$red700;
              ">
                <header class="text-align:center;">
                  <h1 class="margin:0; font-weight:500; font-size:18px; line-height:1;">${title}</h1>
                </header>
                <p class="
                  font-size:14px;
                  font-weight:400;
                  margin-top:8px;
                  margin-bottom:0;
                  line-height:1.4;
                ">
                  ${content}
                </p>
              </div>
            `)
            .join("")
        }
      </div>
    </div>
  `,
});
