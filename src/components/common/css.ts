/**
 * Color palette configuration for the project.
 *
 * This object defines commonly used colors as key-value pairs,
 * where the key represents a descriptive label for the color's usage
 * and the value is the corresponding RGBA color code. These colors
 * can be used consistently across the project for styling purposes.
 *
 * Usage:
 * You can import and use these colors in your components or styles, for example:
 *
 * ```javascript
 * import { colors } from './path-to-colors-file';
 *
 * const inputStyle = {
 *   backgroundColor: colors.input,
 *   color: colors.foreground,
 * };
 * ```
 *
 * Key Descriptions:
 * - `input`: Primary color for inputs, yellowish, with 80% opacity (rgba(234, 179, 8, 0.8)).
 * - `input_lighter`: Lighter version of the input color, fully opaque (rgba(252, 211, 77, 1)).
 * - `primary`: Main primary color, redish, fully opaque (rgba(239, 68, 68, 1)).
 * - `primary_lighter`: A lighter variant of the primary color, fully opaque (rgba(220, 38, 38, 1)).
 * - `foreground`: Foreground color for text or elements, blackish, with 80% opacity (rgba(0, 0, 0, 0.8)).
 */
export const colors = {
  input: "rgba(234, 179, 8 , 0.8)",
  input_lighter: "rgba(252, 211,77 , 1)",
  primary: "rgba(239, 68, 68, 1)",
  primary_lighter: "rgba(220, 38, 38,1)",
  foreground: " rgba(0, 0, 0, 0.8)",
};

/**
 * Font weight configuration for the project.
 *
 * This object defines commonly used font weights as key-value pairs,
 * where the key is a descriptive label, and the value is the corresponding
 * numeric font-weight value. These font weights can be used throughout
 * the project to maintain consistent typography styling.
 *
 * Usage:
 * You can import and use these font weights in your styling logic, for example:
 *
 * ```javascript
 * import { fonts } from './path-to-fonts-file';
 *
 * const titleStyle = {
 *   fontWeight: fonts.bold,
 * };
 * ```
 *
 * Key Descriptions:
 * - `normal`: Regular font weight (400).
 * - `medium`: Slightly heavier font weight (500).
 * - `semibold`: Between medium and bold (600).
 * - `bold`: Standard bold font weight (700).
 * - `extrabold`: Extra heavy font weight for strong emphasis (800).
 */
export const fonts = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
};
