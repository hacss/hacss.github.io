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
    href: "faq.html",
    content: "FAQ",
    active: x => path.basename(x) === "faq.md",
  },
  {
    href: "https://basement.hacss.io/",
    content: "Basement",
    active: () => false,
  },
  {
    href: "https://github.com/hacss/hacss",
    content: `
      <svg viewBox="0 0 16 16" version="1.1" class="W(16px)">
        <path fill="currentColor" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
      </svg>
    `,
    popContent: `
      <svg viewBox="0 0 16 16" version="1.1" class="W(16px)">
        <path fill="currentColor" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
      </svg>
      <span class="D(ib) Mstart(8px)">GitHub</span>
    `,
    active: () => false,
  },
];

exports.page = ({ title, content, source }) => `
  <!DOCTYPE html>
  <html class="H(100%)">
    <head>
      <title>Hacss${title ? `: ${title}` : ""}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Inter:300,400,500,700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Inconsolata:400" rel="stylesheet" />
      <link href="styles.css" rel="stylesheet" />
      <link href="hljs.css" rel="stylesheet" />
    </head>
    <body class="M(0) H(100%) Bgc(purple800)">
      <div class="Mx(auto) Pt(64px) W(100%) Maw(1180px) H(calc(100%-64px)) Bxsh(page) Pos(r)">
        ${content}
      </div>
      <div class="Pos(f) T(0) End(0) Start(0) H(64px)">
        <header class="
          Mx(auto)
          W(100%)
          Maw(1180px)
          H(100%)
          Bgc(black)
          Px(16px)
          Bxz(bb)
          D(f)
          Fxd(r)
          Ai(c)
          Jc(sb)
        ">
          ${title ? `<a href="index.html" class="D(f) Ai(c)">` : ""}
            <img src="logo-h.svg" alt="Hacss" class="Bd(n) H(32px)" />
          ${title ? "</a>" : ""}
          <button
            id="navOpener"
            class="D(n) D(ib)--sm O(n) H(auto) Bgc(transparent) P(0) M(0) Bd(n) opener">
            <svg
              viewBox="0 0 24 21"
              class="W(24px) H(21px) Fill(blue300) opener:h_Fill(white)">
              <rect width="100%" height="5px" />
              <rect width="100%" height="5px" y="8" />
              <rect width="100%" height="5px" y="16" />
            </svg>
          </button>
          <nav class="Ff(ss) Fz(16px) C(blue200) D(if) Ai(c) D(n)--sm">
            ${
              navLinks
                .map(({ href, content, active }) =>
                  active(source)
                  ? `
                      <a
                        href="${href}"
                        class="D(if) Mstart(16px) C(white) Td(n)">
                        ${content}
                      </a>
                    `
                  : `
                      <a
                        href="${href}"
                        class="D(if) Mstart(16px) C(blue300) C(white):h Td(n)">
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
          D(n)
          D(b)--sm
          Pos(f)
          Z(-1)
          Op(0)
          Trsp(opacity)
          Trsdu(300ms)
          T(56px)
          End(16px)
          Bxsh(md,rgba(0,0,0,0.1))
          Bdc(red700)
          Bds(s)
          Bdw(1px)
          Bgc(purple100)
          Px(0)
          Py(4px)
          Bdrs(4px)
          Ff(ss)
          Fz(16px)
          Fw(400)
          Cnt('')::b
          Pos(a)::b
          T(-5px)::b
          End(8px)::b
          Bgi(url(popnav-pointer.svg))::b
          W(9px)::b
          H(5px)::b
        ">
        ${
          navLinks
            .map(({ href, popContent, content, active }) =>
              active(source)
              ? `
                  <a
                    href="${href}"
                    class="D(f) Ai(c) Px(8px) Py(4px) Mih(28px) Bxz(bb) Bgc(purple200) C(purple900) Td(n)">
                    ${popContent || content}
                  </a>
                `
              : `
                  <a
                    href="${href}"
                    class="D(f) Ai(c) Px(8px) Py(4px) Mih(28px) Bxz(bb) C(purple600) Td(n) Bgc(purple600):h C(purple100):h">
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
        ["Z(-1)", "Op(0)", "Op(1)"].forEach(function(c) {
          nav.classList.toggle(c);
        });
      });
      </script>
    </body>
  </html>
`;
