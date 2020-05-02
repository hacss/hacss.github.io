# FAQ

## What is Hacss?
It is a build tool that enhances your inline styling capabilities by analyzing
the styles you have written throughout your code and generating a style sheet to
match.

## How is it different from inline styles?
This is the same, in essence, as inline styles. The goal here is to make inline
styles more powerful.

## Classes usually help me to avoid repeating the same styles over and over again. Aren't inline styles a step backward?
If your project uses HTML templating or has some notion of components outside of
CSS, then you can likely use these existing tools to avoid repeating styles.

## If I don't need advanced styling capabilities, should I still use Hacss?
The primary use case for Hacss is to recover style sheet functionality within
inline styles. Some more subtle issues such as
[specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) may
provide other reasons to lift inline styles into a style sheet, but these are
somewhat advanced topics.

## What does the name mean?
_Hacss_ is a portmanteau combining _hack_ and _CSS_. The name seemed to fit
considering that its presentational class names are
[the exact opposite of what you are supposed to do](https://stackoverflow.com/questions/11440693/use-class-styles-as-inline-styles#tab-top).
