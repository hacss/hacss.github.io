import { FC, useEffect, useRef, useState } from "react";
import CodeEditor from "./CodeEditor";
import * as script from "./script";

function elementVisible(el: Element) {
  const {
    top,
    right,
    bottom,
    left,
  } = el.getBoundingClientRect();

  const vw = window.innerWidth || document.documentElement.clientWidth;
  const vh = window.innerHeight || document.documentElement.clientHeight;
  const zero = -32;

  return top >= zero && left >= zero && right <= vw - zero && bottom <= vh - zero;
}

const CutTheBSDemo: FC<{ children?: undefined }> = () => {
  const [html, setHtml] = useState(script.html);
  const container = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const listener = () => {
      setPaused(!container.current || !elementVisible(container.current));
    };

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return (
    <div
      ref={container}
      className={`
        display:flex;
        flex-direction:column-reverse;
        @lg{flex-direction:row}
        padding:$len16;
        background:$gray10;
        border-radius:$md;
        box-shadow:$inner;
      `}>
      <div className={`
        flex:1;
        margin:$len16;
        display:flex;
        align-items:center;
        justify-content:center;
      `}>
        <div
          className="max-width:$len512;"
          dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="flex:1; @lg{flex:1} margin:$len16;">
        <CodeEditor
          className="height:100%; min-height:$len256; @lg{min-height:$len512}"
          paused={paused}
          script={script}
          onPublish={setHtml} />
      </div>
    </div>
  );
};

export default CutTheBSDemo;
