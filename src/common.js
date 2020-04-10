const navLinks = [
  { href: "#", title: "Getting Started" },
  { href: "#", title: "Guides" },
  { href: "#", title: "FAQ" },
  { href: "#", title: "Playground" },
];

exports.page = ({ title, content }) => `
  <!DOCTYPE html>
  <html class="H(100%)">
    <head>
      <title>Hacss${title ? `: ${title}` : ""}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Inter:300,400,500,700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Inconsolata:400" rel="stylesheet" />
      <link href="styles.css" rel="stylesheet" />
    </head>
    <body class="M(0) H(100%) Bgc(#201220)">
      <div class="Mx(auto) Pt(64px) W(100%) Maw(1180px) H(calc(100%-64px)) Bxsh(page) Pos(r)">
        ${content}
      </div>
      <div class="Pos(f) T(0) End(0) Start(0) H(64px)">
        <header class="
          Mx(auto)
          W(100%)
          Maw(1180px)
          H(100%)
          Bgc(#000)
          Px(16px)
          Bxz(bb)
          D(f)
          Fxd(r)
          Ai(c)
          Jc(sb)
        ">
          <img src="logo-h.svg" alt="Hacss" class="H(32px)" />
          <button
            id="navOpener"
            class="D(n) D(ib)--sm O(n) H(auto) Bgc(transparent) P(0) M(0) Bd(n) opener">
            <svg
              viewBox="0 0 24 21"
              class="W(24px) H(21px) Fill(#b1afc0) opener:h_Fill(#fff)">
              <rect width="100%" height="5px" />
              <rect width="100%" height="5px" y="8" />
              <rect width="100%" height="5px" y="16" />
            </svg>
          </button>
          <nav class="Ff(ss) Fz(16px) C(#b1afca) D(if) D(n)--sm">
            ${
              navLinks
                .map(({ href, title }) => `
                  <a
                    href="${href}"
                    class="D(ib) Mstart(16px) C(#b1afca) C(#fff):h Td(n)">
                    ${title}
                  </a>
                `)
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
          Bxsh(md,#000.5)
          Bgc(#fff)
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
          Bgi(url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5cHgiIGhlaWdodD0iNXB4IiB2aWV3Qm94PSIwIDAgOSA1Ij48cG9seWdvbiBwb2ludHM9IjAsNSA1LDAgOSw1IiBmaWxsPSIjZmZmIiAvPjwvc3ZnPg==))::b
          W(9px)::b
          H(5px)::b
        ">
        ${
          navLinks
            .map(({ href, title }) => `
              <a
                href="${href}"
                class="D(b) Px(8px) Py(4px) C(#323041) Td(n) Bgc(#656374):h C(#fff):h">
                ${title}
              </a>
            `)
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
