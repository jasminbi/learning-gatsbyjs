import Typography from "typography"
import githubTheme from "typography-theme-github"

const typography = new Typography(
  githubTheme

  //     {
  //   baseFontSize: "18px",
  //   baseLineHeight: 1.666,
  //   headerFontFamily: [
  //     "Avenir Next",
  //     "Helvetica Neue",
  //     "Segoe UI",
  //     "Helvetica",
  //     "Arial",
  //     "sans-serif",
  //   ],
  //   bodyFontFamily: ["Roboto", "sans-serif"],
  //   //   overrideStyles: (options, styles) => ({
  //   //     a: {
  //   //       color: "black",
  //   //     },
  //   //   }),
  // }
)

export const rhythm = typography.rhythm
export default typography
