interface Options {
  // eslint-disable-next-line no-unused-vars
  hypothesis? : (_n: number) => number,
  step? : 1,
}
const meanSquaredError = (yTrue : number[], yPred : number[], options : Options) => {
  const { step, hypothesis } = options;
  let totalSquaredError = 0;

  const m = yTrue.length;

  for (let i = 0; i < m; i += step) {
    const theta = hypothesis ? hypothesis(yTrue[i]) : yTrue[i];
    const squaredError = (theta - yPred[i]) ** 2;
    totalSquaredError += squaredError;
  }

  return totalSquaredError / m;
};

export default meanSquaredError;
