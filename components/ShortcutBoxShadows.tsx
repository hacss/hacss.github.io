import mkShortcuts from "@hacss/shortcuts";
import { FC, useEffect, useState } from "react";

const shortcuts = mkShortcuts();

const shadows = Object
  .entries(shortcuts.variables["box-shadow"])
  .filter(([key]) => /^[^outline]/.test(key));

const ShortcutBoxShadows: FC<{ children?: undefined }> = () => (
  <div>
    {
      shadows.map(([key, boxShadow]: [any, any]) => (
        <div
          key={key}
          className={`
            padding:$len16;
            display:inline-block;
            :not(:first-child){margin-left:$len32}
            background:#fff;
          `}
          style={{ boxShadow }}>
          ${key}
        </div>
      ))
    }
  </div>
);

export default ShortcutBoxShadows;
