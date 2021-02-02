import HomePageDemo from "./HomePageDemo";
import highlight from "../utils/highlight";

const html = `Current breakpoint:\n<strong class="display:none; @sm{display:inline}">small</strong>\n<strong class="display:none; @md{display:inline}">medium</strong>\n<strong class="display:none; @lg{display:inline}">large</strong>`;

export default function MediaQueriesDemo() {
  return (
    <HomePageDemo
      left={{ __html: highlight(html) }}
      right={{ __html: `<div class="padding:$len32;">${html}</div>` }} />
  );
}
