import "@hacss/build";

import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const bg = "background:white;";
    document.body.classList.add(bg);
    return () => document.body.classList.remove(bg);
  }, []);

  return (
    <div className="position:absolute; inset:0;">
      <Component {...pageProps} />
    </div>
  );
}
