const { page } = require("./common.js");

module.exports = page({
  content: `
    <div class="H(100%) D(f) Fxd(c)">
      <div class="Fxg(1) D(f) Fxd(c) Jc(c) Ai(c) Bgi(linear-gradient(#323041,#7e7c8d)) C(#fff) Ff(ss) Fz(32px) Fz(24px)--sm Fw(300)">
        <img src="logo-hacss.svg" alt="Hacss" class="H(3em)" />
        <p class="Mt(8px) Mb(0) Lts(-1px)">Style like you mean it.</p>
        <button class="Bd(n) Bdrs(0.25em) Mt(1.5em) M(1em)--sm Py(0.375em) Px(0.5em) Fz(0.625em) Fw(200) Ff(ss) Bgc(#392b2d) Bgc(#201214):h C(#fff) D(if) Ai(c) Cur(p)">
          <span class="D(ib) Mend(0.125em)">Start</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="W(0.75em)"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" fill="#fff" /></svg>
        </button>
      </div>
      <div class="Bgc(#392b2d) D(f) Fxd(r) Fxw(w) Jc(c) P(4px)">
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
              title: "Cut the BS out of CSS.",
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
              <div class="M(4px) P(24px) Bdrs(8px) Fxb(calc(1/3-8px)) Fxb(100%)--sm Bxz(bb) Ff(ss) Bgc(#d2c4c6) C(#392b2d)">
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
