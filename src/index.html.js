const { page } = require("./common.js");

module.exports = () => page({
  content: `
    <div class="H(100%) D(f) Fxd(c)">
      <div class="Fxg(1) Fxs(0) Bxz(bb) D(f) Fxd(c) Jc(c) Ai(c) Bgi(linear-gradient(blue700,blue400)) C(white) Ff(ss) Fz(32px) Fz(24px)--sm Fw(300) Py(32px)">
        <img src="logo-hacss.svg" alt="Hacss" class="H(3em)" />
        <p class="Mt(8px) Mb(0) Lts(-1px)">Style like you mean it.</p>
        <a href="getting-started.html" class="Bd(n) Bdrs(0.25em) Mt(1.5em) Mt(1em)--sm Py(0.6em) Pstart(0.8em) Pend(0.6em) Fz(0.625em) Fw(200) Ff(ss) Bgc(red700) Bgc(red800):h C(red100) D(if) Ai(c) Cur(p) Td(n)">
          <span class="D(ib) Mend(0.2em)">Start</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="W(1.2em)"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" fill="currentColor" /></svg>
        </a>
      </div>
      <div class="Bgc(red700) D(f) Fxd(r) Fxw(w) Jc(c) P(4px)">
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
              title: "Set your own rules.",
              content: `
                Rules are small functions that generate the CSS required for a
                given class, e. g. <code class="Ff(m)">W(100%)</code>. While
                many are bundled with Hacss, we prioritize your ability to
                redefine them and to add new ones.
              `,
            },
          ]
            .map(({ title, content }) => `
              <div class="M(4px) P(24px) Bdrs(8px) Fxb(calc(1/3-8px)) Fxb(100%)--sm Bxz(bb) Ff(ss) Bgc(red100) C(red700)">
                <header class="Ta(c)">
                  <h1 class="M(0) Fw(500) Fz(18px) Lh(1)">${title}</h1>
                </header>
                <p class="Fz(14px) Fw(400) Mt(8px) Mb(0) Lh(1.4)">
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
