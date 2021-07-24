const c = {
  aquamarine: 'aquamarine',
  palegreen: 'palegreen',
  pink: 'pink',
  violet: 'violet',
  khaki: 'khaki',
  lightskyblue: 'lightskyblue',
  navajowhite: 'navajowhite',
  lightgray: 'lightgray',
}

function slog(logParams, color) {
  const stringToParse = logParams[0];
  const resolvedColor = color ?? c.aquamarine;

  const startMark = '{';
  const endMark = '}';

  const markIndicator = '%c';

  const start = stringToParse.indexOf(startMark);
  const end = stringToParse.lastIndexOf(endMark);

  const isStartValid = start !== -1;
  const isEndValid = end > start;

  if (isStartValid && isEndValid) {
    const output = stringToParse.slice(0, start) + markIndicator + stringToParse.slice(start + 1, end) + markIndicator + stringToParse.slice(end + 1);
    console.log(output, `background-color: ${resolvedColor}`, '');
  } else {
    console.log(markIndicator + stringToParse, `background-color: ${resolvedColor}`);
  }
}

slog.c = c;
export default slog;

