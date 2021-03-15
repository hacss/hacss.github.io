import mkShortcuts from "@hacss/shortcuts";
import { FC, useState } from "react";

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

const ColorPicker: FC<{
  value: string;
  onValueChange: (value: string) => void;
}> = ({ value, onValueChange }) => {
  return (
    <div className="display:flex;">
      {
        colors.map((group: any, i) => (
          <div key={i}>
            {
              group.map(([key, backgroundColor]: [any, any]) => (
                <div
                  key={key}
                  className={`
                    ${key === value ? "sel" : ""}
                    width:$len16;
                    height:$len16;
                    .sel{box-shadow:0__0__0__#{$len1}__#000,#{$sm}}
                    .sel{transform:scale(1.25)}
                    cursor:pointer;
                  `}
                  style={{ backgroundColor }}
                  onClick={() => {
                    onValueChange(key);
                  }} />
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

const ShortcutFocusOutlines: FC<{ children?: undefined }> = () => {
  const [style, setStyle] = useState("small");
  const [primaryColor, setPrimaryColor] = useState("blue50");
  const [surfaceColor, setSurfaceColor] = useState("blue05");

  const smallShadow = `0 0 0 0.125rem ${shortcuts.variables[style === "ring" ? surfaceColor : primaryColor]}`;
  const smallShadowCode = `$outline-sm-${style === "ring" ? surfaceColor : primaryColor}`;
  const largeShadow = `0 0 0 0.25rem ${shortcuts.variables[primaryColor]}`;
  const largeShadowCode = `$outline-lg-${primaryColor}`;

  let
    boxShadow,
    boxShadowCode = [smallShadowCode, largeShadowCode].map(x => `#{${x}}`).join(","),
    buttonBackground = shortcuts.variables[surfaceColor],
    buttonColor = shortcuts.variables[primaryColor];
  switch (style) {
    case "small":
      boxShadow = smallShadow;
      boxShadowCode = smallShadowCode;
      break;
    case "large":
      boxShadow = largeShadow;
      boxShadowCode = largeShadowCode;
      break;
    case "ring":
      boxShadow = [smallShadow, largeShadow].join(",");
      buttonBackground = shortcuts.variables[primaryColor];
      buttonColor = shortcuts.variables[surfaceColor];
      break;
  }

  return (
    <div className={`
      max-width:100%;
      overflow-x:auto;
      display:inline-flex;
      flex-direction:column;
      align-items:stretch;
      box-shadow:$md;
      border-width:$len1;
      border-style:solid;
      border-color:$gray10;
      border-radius:$md;
      overflow:hidden;
    `}>
      <div
        style={{ background: shortcuts.variables[surfaceColor] }}
        className={`
          padding-y:$len32;
          text-align:center;
        `}>
        <div
          style={{ boxShadow, background: buttonBackground, color: buttonColor }}
          className={`
            display:inline-block;
            font:$button;
            padding-x:$len16;
            padding-y:$len12;
            border-radius:$sm;
            cursor:default;
          `}>
          Button
        </div>
        <code
          className="font:$code; display:block; margin-top:$len16;"
          style={{ color: shortcuts.variables[primaryColor] }}>
          box-shadow:{boxShadowCode};
        </code>
      </div>
      <div className="display:flex; padding:$len8;">
        <div className="padding:$len8; flex:1;">
          <div>Style</div>
          {["small", "large", "ring"].map(s => (
            <label key={s} className="display:flex; align-items:center;">
              <input
                type="radio"
                name="focusOutlineStyle"
                value={s}
                defaultChecked={style === s}
                onChange={({ currentTarget: { checked } }) => {
                  if (checked) {
                    setStyle(s);
                  }
                }} />
              <span
                className="font:$body2; display:inline-block; margin-left:$len4;">
                {s[0].toUpperCase() + s.substring(1)}
              </span>
            </label>
          ))}
        </div>
        <label className="padding:$len8;">
          <span className="display:block;">
            Outline Color
          </span>
          <ColorPicker
            value={primaryColor}
            onValueChange={setPrimaryColor} />
        </label>
        <label className="padding:$len8;">
          <span className="display:block;">
            Surface Color
          </span>
          <ColorPicker
            value={surfaceColor}
            onValueChange={setSurfaceColor} />
        </label>
      </div>
    </div>
  );
};

export default ShortcutFocusOutlines;
