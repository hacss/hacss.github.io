import { useState } from "react";
import CodeEditor from "./CodeEditor";
import * as script from "./script";

export default function CutTheBSDemo() {
  const [html, setHtml] = useState(script.html);
  return (
    <div className={`
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
          script={script}
          onPublish={setHtml} />
      </div>
    </div>
  );
};
