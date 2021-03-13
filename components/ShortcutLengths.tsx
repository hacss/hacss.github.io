import mkShortcuts from "@hacss/shortcuts";
import { FC, useEffect, useState } from "react";

const shortcuts = mkShortcuts();

const lengths =
  Object
    .entries(shortcuts.variables)
    .filter(([k]) => /^len[0-9]+$/.test(k))
    .reverse();

const ShortcutLengths: FC<{ children?: undefined }> = () => {
  const [ratio, setRatio] = useState(1);

  useEffect(() => {
    const listener = () => {
      const { matches } = matchMedia("(max-width: 62.49999em)");
      setRatio(matches ? 0.5 : 1);
    };
    listener();
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return (
    <>
      {
        lengths.map(([k, width]: [string, any]) => (
          <div key={k} className="len .len+{margin-top:$len8} display:flex;">
            <div className="font:$code; width:$len64;">${k}</div>
            <div className="width:$len512;">
              <div
                className="height:$len16; background:$gray70;"
                style={{ width: `calc(${width}*${ratio})` }} />
            </div>
          </div>
        ))
      }
    </>
  );
};

export default ShortcutLengths;
