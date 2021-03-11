import mkShortcuts from "@hacss/shortcuts";
import { FC } from "react";

const shortcuts = mkShortcuts();

const colors = Object.values(
  Object
    .entries(shortcuts.variables)
    .filter(([k]) => /^(blue|gray|green|orange|pink|purple|red|yellow)\d{2}$/.test(k))
    .reduce((groups: any, [k, v]) => {
      const gkeyMatch = k.match(/^[a-z]+/);
      if (!gkeyMatch) {
        return groups;
      }
      const gkey = gkeyMatch[0];
      if (gkey in groups) {
        return {
          ...groups,
          [gkey]: groups[gkey].concat([[k, v]]),
        };
      }
      return {
        ...groups,
        [gkey]: [[k, v]],
      };
    }, {})
);

const ShortcutColors: FC<{ children?: undefined }> = () => (
  <>
    {
      colors.map((group: any, i) => (
        <div key={i} className="group .group+{margin-top:$len16}">
          {
            group.map(([k, background]: [string, string]) => (
              <div
                key={k}
                className={`
                  display:inline-block;
                  text-align:center;
                  padding-x:$len2;
                `}>
                <div
                  className="width:$len80; height:$len40; border-radius:$sm;"
                  style={{ background }} />
                <span className="font:$code;">${k}</span>
              </div>
            ))
          }
        </div>
      ))
    }
  </>
);

export default ShortcutColors;
