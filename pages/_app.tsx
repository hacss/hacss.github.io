require( "@hacss/build");

import { FC, useEffect, useState } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ComponentType, MDXProvider } from "@mdx-js/react";
import DocsApp from "./docs/_app";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const bg = "background:white;";
    document.body.classList.add(bg);
    return () => document.body.classList.remove(bg);
  }, []);

  const { pathname } = useRouter();
  const [sidebarState, openSidebar, closeSidebar] = useSidebarState();

  return (
    <div className="position:absolute; inset:0;">
      <MDXProvider components={markdownComponents}>
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
      </MDXProvider>
    </div>
  );
}

export default App;

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

type UnionToIntersection<U> = 
  (U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) ? I : never;

type MarkdownComponents<K = ComponentType> = UnionToIntersection<K extends ComponentType ? Record<K, FC<React.HTMLAttributes<HTMLElement>>> : {}>;

const markdownComponents: Partial<MarkdownComponents> = {
  h1: ({ children, className, ...props }) => (
    <h1
      {...props}
      className={`${className || ""} font:$h1; margin-y:$len8;`}>
      {children}
    </h1>
  ),
  h2: ({ children, className, ...props }) => (
    <h2
      {...props}
      className={`${className || ""} font:$h2; margin-y:$len8;`}>
      {children}
    </h2>
  ),
  h3: ({ children, className, ...props }) => (
    <h3
      {...props}
      className={`${className || ""} font:$h3; margin-y:$len8;`}>
      {children}
    </h3>
  ),
  h4: ({ children, className, ...props }) => (
    <h4
      {...props}
      className={`${className || ""} font:$h4; margin-y:$len8;`}>
      {children}
    </h4>
  ),
  h5: ({ children, className, ...props }) => (
    <h5
      {...props}
      className={`${className || ""} font:$h5; margin-y:$len8;`}>
      {children}
    </h5>
  ),
  a: ({ children, className, ...props }) => (
    <a
      className={`
        ${className || ""}
        color:$blue80;
        :hover{color:$blue60}
        :active{color:$red60}!
      `}
      {...props}>
      {children}
    </a>
  ),
  inlineCode: ({ children, className, ...props }) => (
    <code
      {...props}
      className={`${className || ""} font:$code; transform:translateY(-20px);`}>
      {children}
    </code>
  ),
};
