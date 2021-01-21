import { useEffect, useState } from "react";
import HomePageDemo from "./HomePageDemo";
import highlight from "../utils/highlight";

const html = `<label>\n  <input type="checkbox" checked>\n  <span class=":checked+{text-decoration:line-through}">\n    Increase my agility.\n  </span>\n</label>`;

export default function ContextDemo() {
  return (
    <HomePageDemo
      left={{ __html: highlight(html) }}
      right={{ __html: `<div class="padding:$len32;">${html}</div>` }} />
  );
}
