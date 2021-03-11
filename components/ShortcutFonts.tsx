import mkShortcuts from "@hacss/shortcuts";
import { FC } from "react";

const shortcuts = mkShortcuts();

const fonts = Object.entries(shortcuts.variables.font);

const ShortcutFonts: FC<{ children?: undefined }> = () => (
  <>
    {
      fonts.map(([k, font]: [string, any]) => (
        <div className="display:flex; align-items:center; margin-y:$len12;">
          <div className="font:$code; width:$len80;">${k}</div>
          <div
            key={k}
            style={{ font }}>
            Testing
          </div>
        </div>
      ))
    }
  </>
);

export default ShortcutFonts;
