const highlight = (html: string, opts = { cursor: false }) => {
  const chev = (x: string) => `<span class="color:$blue40;">${x}</span>`;
  const ochev = chev("&lt;");
  const cchev = chev("&gt;");
  const tag = (x: string) => `<span class="color:$blue40;">${x}</span>`;
  return html
    .replace(
      /<([a-z][a-z0-9]*)([^>]*)>|<\/([a-z][a-z0-9]*)>/g,
      (_, open, attrs, close) =>
        close
          ? ochev + tag("/" + close) + cchev
          : ochev + tag(open) +
              attrs.replace(
                new RegExp(
                  `([a-z]([a-z\-${opts.cursor ? "|": ""}]+)?)(="([^"]*)")?`,
                  "gm",
                ),
                (_: any, name: string, __: any, ___: any, value: string) => {
                  const v = value
                    ? `=</span><span class="color:$orange10;">"${
                      value ? value.replace(/\n/g, `</span>\n<span class="color:$orange10;">`) : ""
                      }"`
                    : "";
                  return `<span class="color:$blue20;">${name}${v}</span>`;
                }
              ) +
            cchev 
    );
};

export default highlight;
