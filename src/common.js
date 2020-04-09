exports.page = ({ title, content }) => `
  <!DOCTYPE html>
  <html class="H(100%)">
    <head>
      <title>Hacss${title ? `: ${title}` : ""}</title>
      <link href="https://fonts.googleapis.com/css?family=Inter:300,400,500,700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Inconsolata:400" rel="stylesheet" />
      <link href="styles.css" rel="stylesheet" />
    </head>
    <body class="M(0) H(100%) Bgc(#201220)">
      <div class="Mx(auto) W(100%) Maw(1180px) H(100%) Bxsh(page)">
        <header class="H(64px) Bgc(#000) Px(16px) Bxz(bb) D(f) Fxd(r) Ai(c) Jc(sb)">
          <img src="logo-h.svg" alt="Hacss" class="H(32px)" />
          <nav class="Ff(ss) Fz(16px) C(#b1afca) D(if)">
            <a href="#" class="C(#b1afca) C(#fff):h Td(n)">Getting Started</a>
            <a href="#" class="C(#b1afca) C(#fff):h Td(n) Mstart(16px)">Guides</a>
            <a href="#" class="C(#b1afca) C(#fff):h Td(n) Mstart(16px)">FAQ</a>
            <a href="#" class="C(#b1afca) C(#fff):h Td(n) Mstart(16px)">Playground</a>
          </nav>
        </header>
        ${content}
      </div>
    </body>
  </html>
`;
