import { useState } from "react";
import ContextDemo from "../components/ContextDemo";
import CutTheBSDemo from "../components/CutTheBSDemo";
import Logo from "../components/Logo";
import MediaQueriesDemo from "../components/MediaQueriesDemo";
import PostProcessingDemo from "../components/PostProcessingDemo";
import PseudoClassesDemo from "../components/PseudoClassesDemo";
import PseudoElementsDemo from "../components/PseudoElementsDemo";
import StaticVariablesDemo from "../components/StaticVariablesDemo";
import highlight from "../utils/highlight";

const Feature = ({ children, heading, synopsis }) => (
  <div className="margin-y:$len48;">
    <h3 className={`
      margin-top:0;
      margin-bottom:$len8;
      font:$h4;
      color:$green70;
      display:flex;
      align-items:center;
    `}>
      <svg className="margin-right:$len4;" height="24" viewBox="0 0 24 24" width="24">
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          fill="currentColor" />
      </svg>
      {heading}
    </h3>
    {synopsis && (
      <p className="margin-top:0; margin-bottom:$len16; font:$body1; color:$gray95;">
        {synopsis}
      </p>
    )}
    {children}
  </div>
);

export default function Home() {
  return (
    <div className={`
      padding:$len32;
      @lg{padding:$len128}
      max-width:80rem;
      margin-x:auto;
    `}>
      <Logo />
      <h1 className="inset:0; font:$jumbo; letter-spacing:-0.04em; margin-y:$len32; color:$gray95;">
        Beautiful, responsive websites made simple.
      </h1>
      <p className="font:$h4; margin-y:$len32; color:$gray60;">
        The CSS-in-HTML methodology unlocks the full power of CSS from within
        your HTML. Write style rules directly in markup using expressive class
        names like{" "}
        <code className="font-family:$mono;! font-weight:700;! color:$gray95;">
          {":hover{background:$gray80}"}
        </code>.
        Hacss generates a style sheet for you at build time.
      </p>
      <a
        href="#"
        className={`
          border:none;
          appearance:none;
          outline:none;
          display:inline-flex;
          align-items:center;
          margin:0;
          padding-x:$len24;
          padding-y:$len16;
          border-radius:$md;
          font:$button;
          text-decoration:none;
          background:$gray90;
          :hover{background:$gray80}
          color:$gray05;
          cursor:pointer;
          :focus{box-shadow:#{$outline-offset-gray05},#{$outline-ring-gray90}}
          :focus:hover{box-shadow:#{$outline-offset-gray05},#{$outline-ring-gray80}}
        `}>
        <span className="font-size:1.25em;">Get started</span>
        <svg viewBox="0 0 14 9" className="width:1.25em; margin-left:0.625em;">
          <path d="M14,4 l-5,5 v-4 h-9 v-2 h9 v-4" fill="currentColor" />
        </svg>
      </a>
      <div className="padding-y:$len64;">
        <CutTheBSDemo />
      </div>
      <h2 className="margin:0; text-align:center; color:$gray95; font:$h2;">
        Inline styles are back
        <br className="@sm{display:none} @lg{display:none}" />
        <span className="@md{display:none}">{" "}</span>
        <strong>with a ton of new tricks&hellip;</strong>
      </h2>
      <Feature
        heading="Static Variables"
        synopsis={
          <>
            Easily propagate design tokens such as color palette, spacing
            presets, and typography through "static variables". References to
            these named constants are resolved at build time, offering wider
            browser compatibility than CSS variables. (CSS variables still work
            too!)
          </>
        }>
        <StaticVariablesDemo />
      </Feature>
      <Feature
        heading="Media Queries"
        synopsis={
          <>
            Create responsive style rules without the context switch of an
            external style sheet. Define media queries in your Hacss
            configuration and reference them by a simple alias.
          </>
        }>
        <MediaQueriesDemo />
      </Feature>
      <Feature
        heading="Context"
        synopsis={
          <>
            Apply a style conditionally based on the existence and/or state of
            an ancestor, parent, adjacent sibling, or general sibling.
          </>
        }>
        <ContextDemo />
      </Feature>
      <Feature
        heading="Pseudo-classes"
        synopsis={
          <>
            Conditionally apply a style rule using virtually any combination of
            pseudo-classes available in native CSS. While atomic CSS frameworks
            often provide basic states like hover, focus, active, and disabled,
            Hacss is the only comparable option that provides access to{" "}
            <span className="font-family:$mono;">:nth-child</span>{" and "}
            <span className="font-family:$mono;">:not</span> selectors, among
            many others.
          </>
        }>
        <PseudoClassesDemo />
      </Feature>
      <Feature
        heading="Pseudo-elements"
        synopsis={
          <>
            Use pseudo-elements to target specific parts of an element or to
            create presentational elements that exist outside of the DOM tree.
          </>
        }>
        <PseudoElementsDemo />
      </Feature>
      <Feature
        heading="Post-processing"
        synopsis={
          <>
            Transform the static style sheet produced by Hacss with{" "}
            <a
              href="https://postcss.org/"
              target="_blank"
              className={`
                color:$blue70;
                :hover{color:$blue50}
                :focus{color:$red70}
                :active{color:$red50}
              `}>
              PostCSS
            </a>, whose
            various{" "}
            <a
              href="https://postcss.parts/"
              target="_blank"
              className={`
                color:$blue70;
                :hover{color:$blue50}
                :focus{color:$red70}
                :active{color:$red50}
              `}>
              plugins
            </a>{" "}
            offer new CSS features, performance optimizations, compatibility
            fixes, and much more.
          </>
        }>
        <PostProcessingDemo />
      </Feature>
    </div>
  );
}
