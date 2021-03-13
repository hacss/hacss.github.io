import mkShortcuts from "@hacss/shortcuts";
import { FC } from "react";

const shortcuts = mkShortcuts();

const borderRadii = Object.entries(shortcuts.variables["border-radius"]);

const ShortcutCornerRadii: FC<{ children?: undefined }> = () => (
  <div>
    {
      borderRadii.map(([key, borderRadius]: [any, any]) => (
        <div
          className={`
            border-width:$len1;
            border-style:solid;
            border-color:$gray70;
            display:inline-block;
            font:$code;
            padding:$len16;
            :not(:first-child){margin-left:$len8}
          `}
          style={{ borderRadius }}>
          {key}
        </div>
      ))
    }
  </div>
);

export default ShortcutCornerRadii;
