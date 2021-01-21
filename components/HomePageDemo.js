export default function HomePageDemo({ left, leftRef, right }) {
  return (
    <div className={`
      display:flex;
      flex-direction:column;
      @lg{flex-direction:row}
      border-radius:$md;
      overflow:hidden;
    `}>
      <pre className={`
        margin:0;
        font:inherit;
        box-shadow:$inner;
        background:$gray90;
        padding:$len16;
        flex:1;
        display:flex;
        align-items:center;
        overflow:auto;
      `}>
        <code
          ref={leftRef}
          className="font:$code; color:$gray30;"
          dangerouslySetInnerHTML={left} />
      </pre>
      <div
        className={`
          @lg{box-shadow:$inner}
          background:$gray10;
          color:$gray70;
          font:$body1;
          flex:1;
          display:flex;
          align-items:center;
          justify-content:center;
          white-space:nowrap;
          overflow:hidden;
        `}
        dangerouslySetInnerHTML={right} />
    </div>
  );
}
