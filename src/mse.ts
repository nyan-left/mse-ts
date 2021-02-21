interface Options {
  step? : number,
}
const meanSquaredError = (yTrue : number[], yPred : number[], options? : Options) => {
  const hypothesis = (_yTrue, _yPred?, _i?) => _yTrue;
  const step = options?.step || 1;

  let totalError = 0;

  const m = yTrue.length;

  for (let i = 0; i < m; i += step) {
    if(yPred[i] === undefined) throw new Error(`yPred at index ${i} is undefined`)
    const error = (hypothesis(yTrue[i]) - yPred[i]) ** 2;
    totalError += error;
  }

  return totalError / m;
};

export default meanSquaredError;
