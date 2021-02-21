import mse from '../src/index';
import * as chai from 'chai';


describe('Mean Squared Error', () => {
  it('should be 0.375', async () => {
    const y_true = [3, -0.5, 2, 7];
    const y_pred = [2.5, 0.0, 2, 8];
    const meanSquaredError = mse(y_true, y_pred);

     chai.expect(meanSquaredError).to.equal(0.375);
  });
});

describe('Mean Squared Error - Slightly larger', () => {
  it('should be 5.3125', async () => {
    const y_true = [
      188, 100, 114, 171, 171, 173, 230, 149,
      191,  81,  61,  62, 127, 217,  62,  81,
      178, 159, 245,  18,   9,  86, 201, 166,
      122, 210,   4, 182,  15,  18, 135, 203,
      222, 134, 154,  21,  71, 217,  48, 153,
      113, 234, 207, 119,  51,  61, 149, 222,
      186,  38, 158,  79, 185,   1, 118, 222,
      22, 137, 110, 206,  94, 120, 163, 241
    ];
    const y_pred = [
      188, 100, 114, 171, 171, 173, 230, 149,
      191,  81,  61,  62, 123, 217,  62,  81,
      178, 159, 245,  18,   9,  86, 201, 166,
      122, 210,   4, 200,  15,  18, 135, 203,
      222, 134, 154,  21,  71, 217,  48, 153,
      113, 234, 207, 119,  51,  61, 149, 222,
      186,  38, 158,  79, 185,   1, 118, 222,
      22, 137, 110, 206,  94, 120, 163, 241
    ];
    const meanSquaredError = mse(y_true, y_pred);


     chai.expect(meanSquaredError).to.equal(5.3125);
  });
});

describe('Mean Squared Error - 2 Step', () => {
  it('should be 0.0625', async () => {
    const y_true = [3, -0.5, 2, 7];
    const y_pred = [2.5, 0.0, 2, 8];
    const meanSquaredError = mse(y_true, y_pred, { step: 2});

     chai.expect(meanSquaredError).to.equal(0.0625);
  });
});

describe('Mean Squared Error - Empty', () => {
  it('should be NaN', async () => {
    const y_true = [];
    const y_pred = [];
    const meanSquaredError = mse(y_true, y_pred);

     chai.expect(meanSquaredError).to.be.NaN;
  });
});



describe('Mean Squared Error - Diff size array', () => {
  it('should throw correct error', async () => {
    const y_true = [3, -0.5, 2, 7, 1];
    const y_pred = [2.5, 0.0, 2, 8];
    chai.expect(()=> mse(y_true, y_pred)).to.throw(Error, "yPred at index 4 is undefined");
  });
});


