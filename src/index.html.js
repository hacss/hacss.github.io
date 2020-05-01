const { page } = require("./common.js");

module.exports = () => page({
  source: __filename,
  tags: `
    <meta property="og:title" content="Hacss" />
    <meta property="og:description" content="Style like you mean it. Inline styles without the limitations." />
    <meta property="og:image" content="https://repository-images.githubusercontent.com/234330718/b398e100-8722-11ea-9a02-712ad5e77447" />
    <meta property="og:url" content="https://hacss.io" />
    <meta name="twitter:card" content="summary_large_image" />
  `,
  content: `
    <div class="min-height:calc(100vh-64px); display:flex; flex-direction:column;">
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
        font-weight:300;
        padding-y:32px;
      ">
        <img src="logo-hacss.svg" alt="Hacss" class="height:3em;" />
        <p class="margin-top:0.25em; margin-bottom:0; letter-spacing:-0.03em;">
          Style like you mean it.
        </p>
        <a
          href="getting-started.html"
          class="
            border:none;
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
          <span class="display:inline-block; margin-right:0.2em;">Get Started</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="width:1.2em; height:1.2em;"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" fill="currentColor" /></svg>
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
                Hacss makes inline styles a viable option, helping you to avoid
                redundant abstractions, inconsistent or dead code, and
                surprising behaviors inherent to other approaches and
                methodologies.
              `,
            },
            {
              title: "Inline superpowers",
              content: `
                Hacss brings media queries, pseudo-classes, pseudo-elements,
                contextual styling capabilities, variables, and more to the
                inline style language you already know.
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
          ]
            .map(({ title, content }) => `
              <div class="
                margin:4px;
                padding:24px;
                flex-basis:calc(33.333%-8px);
                @small{flex-basis:100%;}
                box-sizing:border-box;
                font-family:$sans-serif;
                background:$red100;
                color:$red700;
              ">
                <header class="text-align:center;">
                  <h1 class="
                    margin:0;
                    font-weight:500;
                    font-size:18px;
                    line-height:1;
                  ">
                    ${title}
                  </h1>
                </header>
                <p class="
                  font-size:14px;
                  font-weight:400;
                  margin-top:8px;
                  margin-bottom:0;
                  line-height:1.5;
                ">
                  ${content}
                </p>
              </div>
            `)
            .join("")
        }
      </div>
    </div>
    <div class="
      background:$red700;
      color:$red100;
      font-family:$sans-serif;
      font-size:16px;
      font-weight:400;
      line-height:1.25;
      @large{line-height:1.5;}
    ">
      ${
        [
          {
            headline: "Nothing but classes",
            commentary: `
              Hacss moves inline styles from the
              <code class="font-family:$monospace;">style</code>
              attribute to the
              <code class="font-family:$monospace;">class</code>
              attribute with a few minor adjustments.
            `,
          },
          {
            headline: "Pseudo-classes",
            commentary: "Things that should be easy, now they are.",
          },
          {
            headline: "Pseudo-elements",
            commentary: "Things that should be easy, now they are.",
          },
          {
            headline: "Context",
            commentary: "Things that should be easy, nwo they are.",
          },
          {
            headline: "Responsive design",
            commentary: "Blah blah blah",
          },
          {
            headline: "Variables",
            commentary: "Things that should be easy, now they are.",
          },
        ]
          .map(example)
          .join("")
      }
    </div>
  `,
});

const example = ({ headline, commentary }) => `
  <div class="
    padding-x:8px;
    @medium{padding-x:48px;}
    @large{padding-x:96px;}
    padding-top:32px;
    @medium{padding-top:48px;}
    @large{padding-top:96px;}
    padding-bottom:8px;
    @medium{:last-child{padding-bottom:48px;}}
    @large{:last-child{padding-bottom:96px;}}
    display:flex;
    flex-direction:column;
    align-items:stretch;
    @large{flex-direction:row;}
    @large{align-items:flex-start;}
  ">
    <div class="flex:1;">
      <h1 class="
        font-family:$display;
        font-size:32px;
        font-weight:400;
        margin:0;
        line-height:1;
      ">
        ${headline}
      </h1>
      <div class="margin-top:8px; @large{margin-top:16px;}">
        ${commentary}
      </div>
    </div>
    <div class="margin-top:16px; @large{margin-top:0;} @large{margin-left:96px;} flex:2;">
      <div class="width:100%; height:400px; background:$red100;">
      </div>
    </div>
  </div>
`;
