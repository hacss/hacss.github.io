export const html = `
<div class="
  background:#fff;
  color:$gray70;
">
  <div>
    <div class="
      background-image:url('grinder.jpg');
      background-position:center;
      background-size:cover;
      width:$len128;
      height:100%;
      min-height:$len128;
    ">
    </div>
  </div>
  <div>
    <h1>
      Cut the B.S. out of CSS.
    </h1>
    <p class="margin:0;">
      Hacss combines the advantages of atomic CSS
      with the flexibility and familiarity of
      native CSS. It&apos;s no longer necessary to
      burn valuable development time learning a
      complicated system of utility classes only to
      discover later that the system didn&apos;t
      anticipate all of your needs.
    </p>
  </div>
</div>
`;

export const row = 0;

export const col = 0;

export type Step = ({
  type: "up" | "right" | "down" | "left" | "show" | "hide" | "delete"
} | {
  type: "insert";
  character: string;
}) & { publish?: boolean };

const publishLast = (o: Step, i: number, { length }: Array<Step>): Step => ({ ...o, publish: i === length - 1 });

const insertString = (s: string) =>
  Array
    .from(s)
    .map(character => ({
      type: "insert",
      character,
    }))
    .map((a, b, c) => publishLast(a as any, b, c as any));

export const steps = [
  { type: "show" },
  ...Array(2).fill({ type: "down" }),
  ...Array(16).fill({ type: "right" }),
  ...insertString("\n  padding:$len24;"),
  ...Array(9).fill({ type: "down" }),
  ...Array(8).fill({ type: "right" }),
  ...insertString("\n      margin:0__auto;"),
  ...Array(5).fill({ type: "down" }),
  { type: "left" },
  ...insertString(` class="\n\n    "`),
  { type: "up" },
  ...insertString("      margin-top:$len32;"),
  ...insertString("\n      margin-bottom:$len16;"),
  ...insertString("\n      font:$h5;"),
  ...insertString("\n      color:$blue60;"),
  ...insertString("\n      text-align:center;"),
  ...Array(4).fill({ type: "down" }),
  { type: "left" },
  ...insertString(" font:$body2;"),
  ...Array(24).fill({ type: "up" }),
  ...insertString("\n  box-shadow:$md;"),
  ...insertString("\n  @lg{display:flex}"),
  ...insertString("\n  @lg{padding:0}"),
  ...Array(14).fill({ type: "down" }),
  { type: "left" },
  ...insertString(` class=""`),
  { type: "left" },
  ...insertString("@lg{padding:$len24}"),
  ...Array(2).fill({ type: "down" }),
  ...insertString("\n      @lg{margin-top:0}"),
  ...insertString("\n      @lg{text-align:left}"),
  { type: "hide" },
];
