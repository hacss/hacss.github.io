import { useEffect, useState } from "react";
import HomePageDemo from "./HomePageDemo";
import highlight from "../utils/highlight";

export default function StaticVariablesDemo() {
  // font:$h1; font:$h2; font:$h3; font:$h4; font:$h5; font:$h6;

  const initial = "$h1";
  const initHTML =
    `<span class="font:${initial}; line-height:1;!">\n  Inline Superpowers\n</span>`;

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
    <HomePageDemo
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
      right={{ __html: `<div class="display:flex; align-items:center; height:$len96; @lg{height:auto}">${initHTML.replace(initial, current)}</div>` }} />
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
