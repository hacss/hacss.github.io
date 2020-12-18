const path = require("path");

exports.colors = {
  black: "black",
  blue100: "#eae8f9",
  blue200: "#c8c6d7",
  blue300: "#a7a5b6",
  blue400: "#868495",
  blue500: "#656374",
  blue600: "#4c4a5b",
  blue700: "#323041",
  blue800: "#191728",
  blue900: "#00000e",
  red100: "#f9e8ea",
  red200: "#d7c6c8",
  red300: "#b6a5a7",
  red400: "#958486",
  red500: "#746365",
  red600: "#5b4a4c",
  red700: "#413032",
  red800: "#281719",
  red900: "#0e0000",
  purple100: "#f9e8f9",
  purple200: "#d7c6d7",
  purple300: "#b6a5b6",
  purple400: "#958495",
  purple500: "#746374",
  purple600: "#5b4a5b",
  purple700: "#413041",
  purple800: "#281728",
  purple900: "#0e000e",
  white: "white",
};

const navLinks = [
  {
    href: "overview.html",
    content: "Overview",
    active: x => path.basename(x) === "overview.md",
  },
  {
    href: "getting-started.html",
    content: "Getting Started",
    active: x => path.basename(x) === "getting-started.md",
  },
  {
    href: "guides.html",
    content: "Guides",
    active: x => x.includes("guide"),
  },
  {
    href: "https://basement.hacss.io/#N4IgbghgTglhBGAbApgZxALgNpZABxgDsBrEAGhCgHN4AKAJgFZGz6BmABlYBYOBKEAF0yuKMgAm5SjQbMyjLgEYO-ISJCoIhdBQCShAC7IoQ4SAMwDKTCABCEVMgC2yQ1KfRiAVzw2APOIwYAAEADqEwcEAxogOqAC8oSDhkZF4APaoljDphBgIqOmIXkYA3CmpBul4GBzlEamwVAAWBrX1qcHw6QZVTu0VkSgAZm11g8GBqHixAJ4YwygAHh2pEIgwVIQAtJbOqBhRrkZQq5EAVl6oFsOz21G5RoaHx8arSQB8EwFBE5ExcUSyQanUiUxmEHmRA2hGQ2yQ6SixDOoLwEHEgUIVAwijEThRnXgECRVCg6S8hHEGAAJAQSATUg9EOkoDSxOIGZFho9tsMIE4YIh5tTNNpOcFuYZtlkAF7IDD0PHimFw5rITatHHi7pQcTGbYAdxg4gMzQVeBWf1SOr1UGlBlmKAwhQ2HKtkRt+qZLMOXigYkMAGEiiyGZ8rQAJZCIZnBADqLMQ4m+AHpAmAvoQ-Gmgh8pA9CMNNpg+YhHBQIAYAMoPPBoTBYQQAXyAA",
    content: "Basement",
    active: () => false,
  },
  {
    href: "https://github.com/hacss/core",
    content: `
      <svg viewBox="0 0 16 16" version="1.1" class="width:16px;">
        <path fill="currentColor" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
      </svg>
    `,
    popContent: `
      <svg viewBox="0 0 16 16" version="1.1" class="width:16px;">
        <path fill="currentColor" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
      </svg>
      <span class="display:inline-block; margin-left:8px;">GitHub</span>
    `,
    active: () => false,
  },
];

exports.page = ({ title, content, source, tags = "" }) => `
  <!DOCTYPE html>
  <html class="height:100%;">
    <head>
      <title>Hacss${title ? `: ${title}` : ""}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Do+Hyeon:400" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Inter:300,400,500" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Inconsolata:400" rel="stylesheet" />
      <link href="styles.css" rel="stylesheet" />
      <link href="hljs.css" rel="stylesheet" />
      ${tags}
    </head>
    <body class="margin:0; height:100%; background:$purple800;">
      <div class="
        margin-x:auto;
        padding-top:64px;
        width:100%;
        max-width:1180px;
        min-height:calc(100%-64px);
        position:relative;
        box-shadow:-10px__0__20px__0__$black,__10px__0__20px__0__$black;">
        ${content}
      </div>
      <div class="position:fixed; top:0; right:0; left:0; height:64px;">
        <header class="
          margin-x:auto;
          width:100%;
          max-width:1180px;
          height:100%;
          background:$black;
          padding-x:16px;
          box-sizing:border-box;
          display:flex;
          flex-direction:row;
          align-items:center;
          justify-content:space-between;
        ">
          ${title
            ? `<a href="index.html" class="display:flex; align-items:center;">`
            : ""
          }
            <img src="logo-h.svg" alt="Hacss" class="border:0; height:32px;" />
          ${title ? "</a>" : ""}
          <button
            id="navOpener"
            class="
              display:none;
              @small{display:inline-block}
              outline:none;
              height:auto;
              background:transparent;
              padding:0;
              margin:0;
              border:0;
              opener
            ">
            <svg
              viewBox="0 0 24 21"
              class="
                width:24px;
                height:21px;
                fill:$blue300;
                :hover>fill:$white;
              ">
              <rect width="100%" height="5px" />
              <rect width="100%" height="5px" y="8" />
              <rect width="100%" height="5px" y="16" />
            </svg>
          </button>
          <nav class="
            font-family:$font-sans;
            font-size:16px;
            color:$blue200;
            display:inline-flex;
            align-items:center;
            @small{display:none}
          ">
            ${
              navLinks
                .map(({ href, content, active }) =>
                  active(source)
                  ? `
                      <a
                        href="${href}"
                        class="
                          display:inline-flex;
                          margin-left:16px;
                          color:$white;
                          text-decoration:none;
                        ">
                        ${content}
                      </a>
                    `
                  : `
                      <a
                        href="${href}"
                        class="
                          display:inline-flex;
                          margin-left:16px;
                          color:$blue300;
                          :hover{color:$white}
                          text-decoration:none;
                        ">
                        ${content}
                      </a>
                    `
                )
                .join("")
            }
          </nav>
        </header>
      </div>
      <div
        id="popNav"
        class="
          display:none;
          @small{display:block}
          position:fixed;
          z-index:-1;
          opacity:0;
          transition-property:opacity;
          transition-duration:300ms;
          top:56px;
          right:16px;
          box-shadow:4px__4px__0__rgba(0,0,0,0.1);
          border-color:$red700;
          border-style:solid;
          border-width:1px;
          background:$purple100;
          padding-x:0;
          padding-y:4px;
          border-radius:4px;
          font-family:$font-sans;
          font-size:16px;
          font-weight:400;
          ::before{content:''}
          ::before{position:absolute}
          ::before{top:-5px}
          ::before{right:8px}
          ::before{background-image:url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%279px%27%20height=%275px%27%20viewBox=%270%200%209%205%27%3E%3Cpolygon%20points=%270,5%205,0%209,5%27%20fill=%27#{$red100}%27%20/%3E%3C/svg%3E')}
          ::before{width:9px}
          ::before{height:5px}
        ">
        ${
          navLinks
            .map(({ href, popContent, content, active }) =>
              active(source)
              ? `
                  <a
                    href="${href}"
                    class="
                      display:flex;
                      align-items:center;
                      padding-x:8px;
                      padding-y:4px;
                      min-height:28px;
                      box-sizing:border-box;
                      background:$purple200;
                      color:$purple900;
                      text-decoration:none;
                    ">
                    ${popContent || content}
                  </a>
                `
              : `
                  <a
                    href="${href}"
                    class="
                      display:flex;
                      align-items:center;
                      padding-x:8px;
                      padding-y:4px;
                      min-height:28px;
                      box-sizing:border-box;
                      color:$purple600;
                      text-decoration:none;
                      :hover{background:$purple600}
                      :hover{color:$purple100}
                    ">
                    ${popContent || content}
                  </a>
                `
            )
            .join("")
        }
      </div>
      <script>
      document.getElementById("navOpener").addEventListener("click", function() {
        var nav = document.getElementById("popNav");
        ["z-index:-1;", "opacity:0;", "opacity:1;"].forEach(function(c) {
          nav.classList.toggle(c);
        });
      });
      </script>
    </body>
  </html>
`;
