export enum SlogColor {
  aquamarine = 'aquamarine',
  palegreen = 'palegreen',
  pink = 'pink',
  violet = 'violet',
  khaki = 'khaki',
  lightskyblue = 'lightskyblue',
  navajowhite = 'navajowhite',
  lightgray = 'lightgray',
}
declare function slog(logParams: any[], color?: SlogColor): number;
declare namespace slog {
  const c: typeof SlogColor;
}
export default slog;
