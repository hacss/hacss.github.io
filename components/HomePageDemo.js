export default function HomePageDemo({ left, leftRef, right }) {
  return (
    <div className={`
      width:100%;
      height:$len256;
      @lg{height:$len128}
      border-radius:$md;
      overflow:hidden;
      position:relative;
    `}>
      <pre className={`
        position:absolute;
        top:0;
        right:0;
        left:0;
        height:$len128;
        box-sizing:border-box;
        @lg{right:50%}
        margin:0;
        font:inherit;
        box-shadow:$inner;
        background:$gray90;
        padding:$len16;
        overflow:auto;
        display:flex;
        align-items:center;
      `}>
        <code
          ref={leftRef}
          className="font:$code; color:$gray30;"
          dangerouslySetInnerHTML={left} />
      </pre>
      <div
        className={`
          position:absolute;
          right:0;
          bottom:0;
          left:0;
          height:$len128;
          @lg{left:50%}
          @lg{box-shadow:$inner}
          background:$gray10;
          color:$gray70;
          font:$body1;
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
