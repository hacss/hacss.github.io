require( "@hacss/build");

import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import DocsPage from "../components/DocsPage";
import { MenuState } from "../state/Menu";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const bg = "background:white;";
    document.body.classList.add(bg);
    return () => document.body.classList.remove(bg);
  }, []);

  return (
    <div className="position:absolute; inset:0;">
      <MenuState>
        {
          useRouter().pathname.startsWith("/docs")
          ? (<DocsPage><Component {...pageProps} /></DocsPage>)
          : (<Component {...pageProps} />)
        }
      </MenuState>
    </div>
  );
}

export default App;
