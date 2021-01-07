exports.initial = `
<h1 class="">
  Hello
</h1>
`;

exports.steps = [
  { type: "move", cursor: [0, 11] },
  ...Array
    .from("color:red;")
    .map((character, i, { length }) => ({
      type: "insert",
      character,
      publish: i === length - 1,
    })),
];
