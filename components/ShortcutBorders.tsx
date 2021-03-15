import mkShortcuts from "@hacss/shortcuts";
import { FC } from "react";

const shortcuts = mkShortcuts();

const borders =
  Object
    .entries(shortcuts.variables)
    .filter(([k]) => /^border[0-9]+$/.test(k));

const ShortcutBorders: FC<{ children?: undefined }> = () => (
  <div className="margin-top:-#{$len8};">
    {
      borders.map(([k, borderWidth]: [string, any]) => (
        <div
          key={k}
          className={`
            margin-top:$len8;
            :not(:last-child){margin-right:$len8}
            padding:$len8;
            border-style:solid;
            border-color:$gray70;
            display:inline-block;
            font:$code;
          `}
          style={{ borderWidth }}>
          ${k}
        </div>
      ))
    }
  </div>
);

export default ShortcutBorders;
