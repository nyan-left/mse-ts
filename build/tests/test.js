"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = require("../src/index");
const chai = require("chai");
describe('Mean Squared Error', () => {
    it('should be 0.375', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const y_true = [3, -0.5, 2, 7];
        const y_pred = [2.5, 0.0, 2, 8];
        const meanSquaredError = index_1.default(y_true, y_pred);
        chai.expect(meanSquaredError).to.equal(0.375);
    }));
});
describe('Mean Squared Error - 2 Step', () => {
    it('should be 0.0625', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const y_true = [3, -0.5, 2, 7];
        const y_pred = [2.5, 0.0, 2, 8];
        const meanSquaredError = index_1.default(y_true, y_pred, { step: 2 });
        chai.expect(meanSquaredError).to.equal(0.0625);
    }));
});
describe('Mean Squared Error - Empty', () => {
    it('should be NaN', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const y_true = [];
        const y_pred = [];
        const meanSquaredError = index_1.default(y_true, y_pred);
        chai.expect(meanSquaredError).to.be.NaN;
    }));
});
describe('Mean Squared Error - Diff size array', () => {
    it('should throw correct error', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const y_true = [3, -0.5, 2, 7, 1];
        const y_pred = [2.5, 0.0, 2, 8];
        chai.expect(() => index_1.default(y_true, y_pred)).to.throw(Error, "yPred at index 4 is undefined");
    }));
});
//# sourceMappingURL=test.js.map