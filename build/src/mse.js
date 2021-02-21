"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const meanSquaredError = (yTrue, yPred, options) => {
    const hypothesis = (_yTrue, _yPred, _i) => _yTrue;
    const step = (options === null || options === void 0 ? void 0 : options.step) || 1;
    let totalError = 0;
    const m = yTrue.length;
    for (let i = 0; i < m; i += step) {
        if (yPred[i] === undefined)
            throw new Error(`yPred at index ${i} is undefined`);
        const error = Math.pow((hypothesis(yTrue[i]) - yPred[i]), 2);
        totalError += error;
    }
    return totalError / m;
};
exports.default = meanSquaredError;
//# sourceMappingURL=mse.js.map