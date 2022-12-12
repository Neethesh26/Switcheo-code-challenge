"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var ethers_1 = require("ethers");
var provider = new ethers_1.ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/91163dc759cc41c186064d0251893a9b');
var tokenAddress = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";
var holderAddresses = ['0xb5d4f343412dc8efb6ff599d790074d0f1e8d430',
    '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
    '0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392'];
var ERC20_ABI = [
    "function balanceOf(address) view returns (uint256)",
];
function getTokenBalance(holderAddress) {
    return __awaiter(this, void 0, void 0, function () {
        var contract, balance;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contract = new ethers_1.ethers.Contract(tokenAddress, ERC20_ABI, provider);
                    return [4 /*yield*/, contract.balanceOf(holderAddress)];
                case 1:
                    balance = _a.sent();
                    console.log("".concat(holderAddress, " ").concat(ethers_1.ethers.utils.formatEther(balance), "\n"));
                    return [2 /*return*/];
            }
        });
    });
}
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _i, holderAddresses_1, add;
    return __generator(this, function (_a) {
        for (_i = 0, holderAddresses_1 = holderAddresses; _i < holderAddresses_1.length; _i++) {
            add = holderAddresses_1[_i];
            getTokenBalance(add);
        }
        return [2 /*return*/];
    });
}); };
main();
