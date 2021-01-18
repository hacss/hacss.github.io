const highlight = (html, opts = {}) => {
  const chev = x => `<span class="color:$blue40;">${x}</span>`;
  const ochev = chev("&lt;");
  const cchev = chev("&gt;");
  const tag = x => `<span class="color:$blue40;">${x}</span>`;
  return html
    .replace(
      /<([a-z][a-z0-9]*)([^>]*)>|<\/([a-z][a-z0-9]*)>/g,
      (_, open, attrs, close) =>
        close
          ? ochev + tag("/" + close) + cchev
          : ochev + tag(open) +
              attrs.replace(
                new RegExp(
                  `([a-z]([a-z\-${opts.cursor ? "|": ""}]+)?)="([^"]*)"`,
                  "gm",
                ),
                (_, name, __, value) => `<span class="color:$blue20;">${
                  name
                }=</span><span class="color:$orange10;">"${
                  value.replace(/\n/g, `</span>\n<span class="color:$orange10;">`)
                }"</span>`
              ) +
            cchev 
    );
};

export default highlight;
