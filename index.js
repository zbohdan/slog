const c = {
  red: 'red',
  green: 'green',
  yellow: 'yellow',
  blue: 'blue',
}

function slog(logParams, color) {
  const stringToParse = logParams[0];
  const resolvedColor = color ?? c.red;

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

