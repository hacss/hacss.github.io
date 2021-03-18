require( "@hacss/build");

import { FC, useEffect, useState } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import DocsApp from "./docs/_app";
import Viewport from "../context/Viewport";
import * as gtag from "../utils/gtag";

const isProduction = process.env.NODE_ENV === "production";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const bg = "background:white;";
    document.body.classList.add(bg);
    return () => document.body.classList.remove(bg);
  }, []);

  const router = useRouter(), { pathname } = router;

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const [sidebarState, openSidebar, closeSidebar] = useSidebarState();

  return (
    <Viewport.Provider value={useViewportWidth()}>
      <div className="position:absolute; inset:0;">
        {
          pathname.startsWith("/docs")
          ? (
              <DocsApp
                pathname={pathname}
                sidebarState={sidebarState}
                onSidebarOpen={openSidebar}
                onSidebarClose={closeSidebar}>
                <Component {...pageProps} />
              </DocsApp>
            )
          : (<Component {...pageProps} />)
        }
      </div>
    </Viewport.Provider>
  );
}

export default App;

const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState(0);
  useEffect(() => {
    const listener = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", listener);
    return () => { window.removeEventListener("resize", listener); };
  }, []);
  return viewportWidth;
};

const useSidebarState = (): ["open" | "closed", () => void, () => void] => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const collapse = () => {
      const { matches } = matchMedia("(max-width: 37.49999em)");
      if (matches) {
        setOpen(false);
      }
      else {
        setOpen(true);
      }
    };
    collapse();
    window.addEventListener("resize", collapse);
    return () => { window.removeEventListener("resize", collapse); };
  }, [setOpen]);

  return [
    open ? "open" : "closed",
    () => setOpen(true),
    () => setOpen(false)
  ];
};
