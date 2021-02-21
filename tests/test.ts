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


