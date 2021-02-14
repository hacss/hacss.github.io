import { FC } from "react";

const Page: FC<{
  title: string;
  subtitle?: string;
}> = ({ children, title, subtitle }) => (
  <div className="padding-x:$len64; padding-y:$len32;">
    <h1 className="font:$h1; margin:0;">{title}</h1>
    {subtitle && (<h2 className="font:$h2; margin:0; color:$gray70;">{subtitle}</h2>)}
    <hr className={`
      border-width:$len1;
      border-style:solid;
      border-color:$gray10;
      height:0;
      margin-y:$len16;
    `} />
    <div className="max-width:60rem;">
      {children}
    </div>
  </div>
);

export default Page;
