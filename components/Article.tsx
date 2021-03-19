import React, { useContext } from "react";
import { FC } from "react";
import Link from "next/link";
import { MDXProvider } from "@mdx-js/react";
import Highlight, { Language, defaultProps } from 'prism-react-renderer'
import theme from "prism-react-renderer/themes/vsLight";
import Head from "./Head";
import Viewport from "../context/Viewport";

const Article: FC<{
  title: string;
  subtitle?: string;
  previewImage?: string;
}> = ({ children, title, subtitle, previewImage }) => {
  const viewport = useContext(Viewport);
  return (
    <>
      <Head subtitle={title} description={subtitle} previewImage={previewImage} />
      <div
        className={`
          padding-x:$len64;
          padding-y:$len32;
          @sm{padding:$len16}
          max-width:68rem;
          box-sizing:border-box;
        `}
        style={viewport < 600 ? { minWidth: `${viewport - 70}px` } : {}}>
        <h1 className="font:$h1; margin:0;">{title}</h1>
        {subtitle && (<h2 className="font:$h2; margin:0; color:$gray70;">{subtitle}</h2>)}
        <hr className={`
          border-width:$len1;
          border-style:solid;
          border-color:$gray10;
          height:0;
          margin-y:$len16;
        `} />
        <section>
          <MDXProvider components={markdownComponents}>
            {children}
          </MDXProvider>
        </section>
      </div>
    </>
  );
};

export default Article;

const Code: FC<{ children: string, className: string }> = ({ children, className }) => {
  const language = className.replace(/language-/, "") as Language;

  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <div className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </div>
      )}
    </Highlight>
  )
};

const markdownComponents: Record<string, (x: any) => any> = {
  a: ({ children, className, href, ...props }) => (
    <Link href={href}>
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
    </Link>
  ),
  code: Code,
  /*
  code: ({ children, className, ...props }) => (
    <code {...props} className={`${className || ""} font:inherit;`}>
      {children}
    </code>
  ),
  */
  h1: ({ children, className, ...props }) => (
    <h3
      {...props}
      className={`${className || ""} font:$h3; margin-y:$len16;`}>
      {children}
    </h3>
  ),
  h2: ({ children, className, ...props }) => (
    <h4
      {...props}
      className={`${className || ""} font:$h4; margin-y:$len16;`}>
      {children}
    </h4>
  ),
  h3: ({ children, className, ...props }) => (
    <h5
      {...props}
      className={`${className || ""} font:$h5; margin-y:$len16;`}>
      {children}
    </h5>
  ),
  hr: () => (<div className="height:0; border-width:$len1; border-style:solid; border-color:$gray10;" />),
  inlineCode: ({ children, className, ...props }) => (
    <code
      {...props}
      className={`${className || ""} font-family:$mono; font-size:0.875em; vertical-align:0.0625em;`}>
      {children}
    </code>
  ),
  pre: ({ children, className, ...props }) => (
    <pre {...props} className={`${className || ""} font:$code; margin:0;`}>{children}</pre>
  ),
};
