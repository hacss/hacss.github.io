import mkShortcuts from "@hacss/shortcuts";
import { FC } from "react";

const shortcuts = mkShortcuts();

const lengths =
  Object
    .entries(shortcuts.variables)
    .filter(([k]) => /^len[0-9]+$/.test(k))
    .reverse();

const ShortcutLengths: FC<{ children?: undefined }> = () => (
  <>
    {
      lengths.map(([k, width]: [string, any]) => (
        <div key={k} className="len .len+{margin-top:$len8} display:flex;">
          <div className="font:$code; width:$len64;">${k}</div>
          <div className="width:$len512;">
            <div
              className="height:$len16; background:$gray70;"
              style={{ width }} />
          </div>
        </div>
      ))
    }
  </>
);

export default ShortcutLengths;
