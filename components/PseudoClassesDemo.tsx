import { FC } from "react";
import HomePageDemo from "./HomePageDemo";
import highlight from "../utils/highlight";

const html = `<button class=":hover{transform:scale(1.2)} transition:transform__150ms;">\n  Awesome!\n</button>`;

const PseudoClassesDemo: FC<{ children?: undefined }> = () => (
  <HomePageDemo
    left={{ __html: highlight(html) }}
    right={{ __html: `<div class="padding:$len32;">${html}</div>` }} />
);

export default PseudoClassesDemo;
