import { useEffect, useState } from "react";

const highlight = html => {
  const chev = x => `<span class="color:$blue40;">${x}</span>`;
  const ochev = chev("&lt;");
  const cchev = chev("&gt;");
  const tag = x => `<span class="color:$blue40;">${x}</span>`;
  return html
    .replace(
      /<([a-z][a-z0-9]*)([^>]*)>|<\/([a-z][a-z0-9]+)>/g,
      (_, open, attrs, close) =>
        close
          ? ochev + tag("/" + close) + cchev
          : ochev + tag(open) +
              attrs.replace(
                /([a-z][a-z]*)="([^"]*)"/gm,
                (_, name, value) => `<span class="color:$blue20;">${
                  name
                }=</span><span class="color:$orange10;">"${
                  value
                }"</span>`
              ) +
            cchev 
    )
    .replace("|", `<span class="position:relative;"><span class="position:absolute; inset:0; width:0.125em; height:1em; background:white;"></span></span>`);
};

const play = ({ initial, steps }, x) => {
  let s = { html: initial.replace(/^\s+/m, "").replace(/\s+$/m, "") };
  for (let i = 0; i <= x; i++) {
    const step = steps[i];
    switch (step.type) {
      case "move":
        s.cursor = step.cursor;
        s.html = s
          .html
          .split("\n")
          .map((text, line) => {
            if (line !== s.cursor[0]) {
              return text;
            }
            return text.substring(0, s.cursor[1]) + "|" + text.substring(s.cursor[1]);
          })
          .join("\n");
        break;
      case "insert":
        const pos = s.cursor || [0, 0];
        s.html =
          s
            .html
            .split("\n")
            .map((text, line) => {
              if (line !== pos[0]) {
                return text;
              }
              return text.substring(0, pos[1]) + step.character + text.substring(pos[1]);
            })
            .join("\n");
        s.cursor = [pos[0], pos[1] + 1];
        break;
    }
  }
  return s.html;
};

export default function CodeEditor({ script, onPublish }) {
  const [step, setStep] = useState(-1);

  useEffect(() => {
    setStep(-1);
  }, [script, setStep]);

  useEffect(() => {
    if (step < script.steps.length - 1) {
      const t = setTimeout(() => setStep(step + 1), Math.round(100 + Math.random() * 500));
      return () => clearTimeout(t);
    }
  }, [script, setStep, step]);

  const html = play(script, step);

  useEffect(() => {
    if (step < 0 || script.steps[step]?.publish) {
      onPublish(html.replace("|", ""));
    }
  }, [onPublish, script, step]);

  return (
    <div>
      <div className="background:$gray90;">
        <button onClick={() => { setStep(-1); }}>
          redo
        </button>
      </div>
      <div className="background:$gray95; color:$gray30; padding:$space16;">
        <pre className="margin:0;">
          <code className="font:$code;" dangerouslySetInnerHTML={{
            __html: highlight(html)
          }} />
        </pre>
      </div>
    </div>
  );
}
