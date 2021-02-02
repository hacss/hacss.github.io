import DocsPage from "../../components/DocsPage";

export default function DocsFundamentals() {
  return (
    <DocsPage>
      <div className="padding:$len32;">
        <h1 className="font:$h1; margin:0;">Fundamentals</h1>
        <h2 className="margin:0; font:$h3; color:$gray60;">
          What you need to know about Hacss
        </h2>
        <hr className="height:0; border-width:$len1; border-style:solid; border-color:$gray10; margin-y:$len16; width:100%;" />
        <h3 className="font:$h3; margin:0;">CSS in HTML</h3>
        <p className="margin-y:$len8;">
          Every professional web developer is familiar with inline styles. Most
          prefer to limit their use to trivial prototyping exercises only,
          subscribing to the notion that markup and presentation styles address
          separate concerns and should not be mixed in a production codebase. On
          the other hand, many find that, in practice, these often change
          together, making colocation a more efficient strategy aside from the
          {" "}<a
            href="https://stackoverflow.com/questions/131653/inline-style-to-act-as-hover-in-css"
            target="_blank">
            functional limitations of inline styles
          </a>.
        </p>
        <p>
        </p>
      </div>
    </DocsPage>
  );
}
