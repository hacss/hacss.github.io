import HomePageDemo from "./HomePageDemo";
import highlight from "../utils/highlight";

const html = `<p class="::first-letter{color:$blue50} font:$h4; margin:0;">\n  Awesome!\n</p>`;

export default function PseudoClassesDemo() {
  return (
    <HomePageDemo
      left={{ __html: highlight(html) }}
      right={{ __html: `<div class="padding:$len32;">${html}</div>` }} />
  );
}
