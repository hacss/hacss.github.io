export const html = `
<div class="
  border-radius:$md;
  box-shadow:$md;
  background:#fff;
  color:$gray70;
  margin:0;
  overflow:hidden;
">
  <div class="">
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
  <div class="">
    <h1 class="
      margin:0;
      margin-bottom:$len8;!
      font:$h5;
    ">
      Cut the B.S. out of CSS.
    </h1>
    <p class="font:$body2; margin:0;">
      Hacss combines the advantages of atomic CSS
      with the flexibility and familiarity of
      native CSS. It&apos;s no longer necessary to
      burn valuable engineering time learning a
      complicated system of utility classes only to
      find out later that the system didn&apos;t
      anticipate all of your needs.
    </p>
  </div>
</div>
`;

export const row = 6;

export const col = 18;

const publishFirst = (o, i, { length }) => ({ ...o, publish: !i });
const publishLast = (o, i, { length }) => ({ ...o, publish: i === length - 1 });

const insertString = s =>
  Array
    .from(s)
    .map(character => ({
      type: "insert",
      character,
    }))
    .map(publishLast);

export const steps = [
  { type: "show" },
  ...insertString("\n  display:flex;"),
  ...insertString("\n  flex-direction:column;"),
  ...insertString("\n  @lg{flex-direction:row}"),
  ...insertString("\n  padding:$len16;"),
  ...Array(2).fill({ type: "down" }),
  ...Array(2).fill({ type: "left" }),
  ...insertString("padding:$len16;"),
  ...Array(11).fill({ type: "down" }),
  ...Array(2).fill({ type: "left" }),
  ...insertString("padding:$len16;"),
  ...insertString(" @lg{padding:$len32}"),
  ...Array(11).fill({ type: "up" }),
  ...Array(2).fill({ type: "left" }),
  ...insertString(" @lg{padding:0}"),
  ...Array(2).fill({ type: "up" }),
  ...Array(18).fill({ type: "delete" }).map(publishFirst),
  ...insertString("\n  @lg{padding:0}"),
  ...Array(9).fill({ type: "down" }),
  ...Array(9).fill({ type: "right" }),
  ...insertString("\n      margin:0__auto;"),
  ...insertString("\n      @lg{border-radius:0}"),
  ...insertString("\n      border-radius:$sm;"),
  ...Array(8).fill({ type: "down" }),
  ...insertString("\n      text-align:center;"),
  ...insertString("\n      @lg{text-align:left}"),
  ...Array(3).fill({ type: "up" }),
  { type: "delete", publish: true },
  { type: "insert", character: "}" },
  ...Array(20).fill({ type: "left" }),
  ...insertString("@lg{"),
  ...Array(21).fill({ type: "right" }),
  ...insertString("\n      margin-bottom:$len16;!"),
];

// @lg{margin-bottom:$len8}!
