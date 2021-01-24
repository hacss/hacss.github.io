import { useEffect, useRef, useState } from "react";
import { HomePageDemoOuter, HomePageDemoInner } from "./HomePageDemo";
import highlight from "../utils/highlight";

export default function StaticVariablesDemo() {
  const [current, previous] = useSteps([<FontDemo />, <ColorDemo />], 30000);
  const container = useRef();
  useEffect(() => {
    if (container.current) {
      container.current.classList.remove("triggered");
      const t = setTimeout(() => container.current.classList.add("triggered"), 2500);
      return () => { clearTimeout(t); };
    }
  }, [container, current]);
  return (
    <HomePageDemoOuter>
      <div className="height:$len256; @lg{height:$len128} overflow:hidden;" ref={container}>
        <div className={`
          .triggered>{opacity:0}
          .triggered>{transition:opacity__2.5s}
        `}>
          {previous}
        </div>
        <div className={`
          transform:translateY(0%);
          .triggered>{transform:translateY(-100%)}
          .triggered>{transition:transform__2.5s}
        `}>
          {current}
        </div>
      </div>
    </HomePageDemoOuter>
  );
}

export function ColorDemo() {
  /*
  color:$red95;
  color:$red90;
  color:$red80;
  color:$red70;
  color:$red60;
  color:$red50;
  color:$green95;
  color:$green90;
  color:$green80;
  color:$green70;
  color:$green60;
  color:$green50;
  color:$blue95;
  color:$blue90;
  color:$blue80;
  color:$blue70;
  color:$blue60;
  color:$blue50;
 */

  const initial = "$red95";
  const initHTML =
    `<span class="color:${initial};">\n  Awesome!\n</span>`;

  const [current, previous] =
    useSteps([
      "$red95",
      "$red90",
      "$red80",
      "$red70",
      "$red60",
      "$red50",
      "$green95",
      "$green90",
      "$green80",
      "$green70",
      "$green60",
      "$green50",
      "$blue95",
      "$blue90",
      "$blue80",
      "$blue70",
      "$blue60",
      "$blue50",
    ], 1500);

  const [codeArea, setCodeArea] = useState(null);
  useEffect(() => {
    if (codeArea) {
      const target = codeArea.querySelector(".target");
      if (target) {
        target.classList.add("flash");
        target.textContent = current;
        const revert = () => { target.classList.remove("flash"); };
        const timeout = setTimeout(revert, 500);
        return () => {
          revert();
          clearTimeout(timeout);
        };
      }
    }
  }, [codeArea, setCodeArea, current]);

  return (
    <HomePageDemoInner
      left={{
        __html: highlight(initHTML).replace(
          initial,
          `<span class="
              target
              .flash{background:$orange10}
              .flash{box-shadow:0__0__0__#{$len2}__#{$orange10}}
              .flash{color:$gray95}
              :not(.flash){transition-property:background,box-shadow,color}
              :not(.flash){transition-duration:0.5s}
            ">${initial}</span>`
        )
      }}
      leftRef={setCodeArea}
      right={{ __html: `<div class="display:flex; align-items:center; height:100%;">${initHTML.replace(initial, current)}</div>` }} />
  );
};

export function FontDemo() {
  // font:$h1; font:$h2; font:$h3; font:$h4; font:$h5; font:$h6;

  const initial = "$h1";
  const initHTML =
    `<span class="font:${initial}; line-height:1;!">\n  Awesome!\n</span>`;

  const [current, previous] =
    useSteps(Array.from(Array(6).keys()).map(x => `$h${6-x}`), 2000);

  const [codeArea, setCodeArea] = useState(null);
  useEffect(() => {
    if (codeArea) {
      const target = codeArea.querySelector(".target");
      if (target) {
        target.classList.add("flash");
        target.textContent = current;
        const revert = () => { target.classList.remove("flash"); };
        const timeout = setTimeout(revert, 1000);
        return () => {
          revert();
          clearTimeout(timeout);
        };
      }
    }
  }, [codeArea, setCodeArea, current]);

  return (
    <HomePageDemoInner
      left={{
        __html: highlight(initHTML).replace(
          initial,
          `<span class="
              target
              .flash{background:$orange10}
              .flash{box-shadow:0__0__0__#{$len2}__#{$orange10}}
              .flash{color:$gray95}
              :not(.flash){transition-property:background,box-shadow,color}
              :not(.flash){transition-duration:1s}
            ">${initial}</span>`
        )
      }}
      leftRef={setCodeArea}
      right={{ __html: `<div class="display:flex; align-items:center; height:100%;">${initHTML.replace(initial, current)}</div>` }} />
  );
}

function useSteps(steps, t = 500) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStep(step >= steps.length - 1 ? 0 : step + 1);
    }, t);
    return () => clearTimeout(timeout);
  }, [steps, t, step, setStep]);
  return [steps[step], steps[step ? step - 1 : steps.length - 1]];
}
