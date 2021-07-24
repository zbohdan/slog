export enum SlogColor {
  red = 'red',
  green= 'green',
  yellow = 'yellow',
  blue = 'blue',
}
declare function slog(logParams: any[], color?: SlogColor): number;
declare namespace slog {
  const c: typeof SlogColor;
}
export default slog;
