import { useEffect, useRef, useState } from "react";
import baseHighlight from "../utils/highlight";

const speed = 4;

const scrollIfNeeded = (o, i) => {
  const below = Math.max(0, i.offsetTop + i.offsetHeight - (o.clientHeight + o.scrollTop));
  if (below) {
    o._scrollTimer && clearTimeout(o._scrollTimer);
    const down = d => {
      if (d < speed) {
        o.scrollTop += speed;
        o._scrollTimer = null;
      }
      else {
        o.scrollTop += 1;
        requestAnimationFrame(() => down(d - speed));
      }
    };
    down(below + 48);
  }

  const above = Math.max(0, o.scrollTop - i.offsetTop);
  if (above) {
    o._scrollTimer && clearTimeout(o._scrollTimer);
    const up = d => {
      if (d < 1) {
        o.scrollTop -= speed;
        o._scrollTimer = null;
      }
      else {
        o.scrollTop -= speed;
        requestAnimationFrame(() => up(d - speed));
      }
    };
    up(above + 48);
  }
}

const highlight = html => {
  const highlighted = baseHighlight(html, { cursor: true });
  const lines = highlighted.split("\n");
  let cursorLine = null;
  for (let i = 0; i < lines.length; i++) {
    if (~lines[i].indexOf("|")) {
      lines[i] =
          `<span class="width:100%; display:inline-block; background:$gray90;">${lines[i].replace(
            "|",
            `<span class="cursor position:relative;"><span class="position:absolute; inset:0; width:0.125em; height:1em; background:white;"></span></span>`,
          )}</span>`;
    }
  }
  return lines.join("\n");
};

const mapLines = (f, str) => str.split("\n").map(f).join("\n");

const play = (demo, x) => {
  let
    html = demo.html.replace(/^\s+/m, "").replace(/\s+$/m, "").split("\n"),
    { row = 0, col = 0 } = demo,
    vis = false;
  
  const { steps } = demo;

  const hideCursor = () => {
    html = html.map(x => x.replace("|", ""));
  };

  const refreshCursor = () => {
    hideCursor();
    if (vis) {
      html[row] = html[row].substring(0, col) + "|" + html[row].substring(col);
    }
  };

  for (let i = 0; i <= x; i++) {
    const step = steps[i];
    switch (step?.type) {
      case "show":
        vis = true;
        refreshCursor();
        break;
      case "hide":
        vis = false;
        hideCursor();
        break;
      case "up":
        row--;
        refreshCursor();
        break;
      case "down":
        row++;
        refreshCursor();
        break;
      case "right":
        col++;
        refreshCursor();
        break;
      case "left":
        do {
          col--;
        }
        while (col > html[row].length - 2);
        refreshCursor();
        break;
      case "insert":
        if (step.character === "\n") {
          const remainder = html[row].substring(col);
          html[row] = html[row].substring(0, col);
          col = 0;
          row++;
          html.splice(row, 0, remainder);
        }
        else {
          html[row] = html[row].substring(0, col) + step.character + html[row].substring(col);
          col++;
        }
        refreshCursor();
        break;
      case "delete":
        if (col === 0) {
          if (html[row] === "|") {
            html.splice(row, 1);
          }
          row--;
          col = html[row].length;
        }
        else {
          html[row] = html[row].substring(0, col - 1) + html[row].substring(col);
          col--;
        }
        refreshCursor();
        break;
    }
  }
  return html.join("\n");
};

export default function CodeEditor({ className, script, onPublish }) {
  const [step, setStep] = useState(-1);

  useEffect(() => {
    setStep(-1);
  }, [script, setStep]);

  useEffect(() => {
    if (script.steps.length && step < script.steps.length - 1) {
      const t = setTimeout(() => setStep(step + 1), (200 / speed));
      return () => clearTimeout(t);
    }
  }, [script, setStep, step]);

  const html = play(script, step);

  const codeArea = useRef();

  useEffect(() => {
    if (codeArea.current) {
      const cursor = codeArea.current.querySelector(".cursor");
      if (cursor) {
        scrollIfNeeded(codeArea.current, cursor);
      }
    }
  }, [html]);

  useEffect(() => {
    if (step < 0 || script.steps[step]?.publish) {
      onPublish(html.replace("|", ""));
    }
  }, [onPublish, script, step]);

  useEffect(() => {
    if (!~step && codeArea.current) {
      codeArea.current.scrollTop = 0;
    }
  }, [step]);

  return (
    <div className={`
      ${className || ""}
      position:relative;
      background:$gray95;
      color:$gray30;
      border-radius:$md;
      border-top-width:$len2;
      border-x-width:0;
      border-bottom-width:0;
      border-style:solid;
      border-color:$gray60;
      box-shadow:inset__0__#{$len16}__#{$len16}__#{$gray80};
    `}>
      <div
        ref={codeArea}
        className={`
          position:absolute;
          inset:0;
          top:$len32;!
          overflow:auto;
          border-color:$gray90;
          border-style:solid;
          border-width:0;
          border-top-width:$len1;!
        `}>
        <pre className="margin:0;">
          <code className="font:$code;" dangerouslySetInnerHTML={{
            __html: highlight(mapLines(x => `  ${x}  `, html)) + "\n&nbsp;"
          }} />
        </pre>
      </div>
      <button
        className={`
          position:absolute;
          right:$len8;
          top:$len4;
          appearance:none;
          outline:0;
          border:0;
          margin:0;
          padding:0;
          width:$len20;
          height:$len20;
          border-radius:$full;
          background:linear-gradient(#{$gray95},#{$gray30});
          display:inline-flex;
          align-items:center;
          justify-content:center;
          :focus{box-shadow:#{$outline-offset-gray70}}
          :focus{background:linear-gradient(#{$gray80},#{$gray20})}
        `}
        onClick={() => { setStep(-1); }}>
        <div className={`
          border:0;
          font-size:$len16;
          width:1em;
          height:1em;
          box-shadow:inset__0__0.1em__0__0__#{$gray20},inset__0__-0.1em__0__0__#{$gray50};
          background:linear-gradient(#{$gray60},#{$gray40});
          color:$gray80;
          border-radius:$full;
          display:flex;
          align-items:center;
          justify-content:center;
          position:relative;
          ::after{content:''}
          ::after{position:absolute}
          ::after{inset:0}
          ::after{border-radius:$full}
          :hover{background:linear-gradient(#{$gray40},#{$gray20})}
          :active>{box-shadow:inset__0__-0.1em__0__0__#{$gray20},inset__0__0.1em__0__0__#{$gray50}}
        `}>
          <svg className="width:0.75em; :active_{width:0.625em}" viewBox="0 0 16 16">
            <circle cx="8" cy="9" r="6" fill="transparent" stroke="currentColor" strokeDasharray="20 7.69" />
            <path fill="currentColor" d="M 4 3 l 4 -3 v 6" />
          </svg>
        </div>
      </button>
    </div>
  );
}
