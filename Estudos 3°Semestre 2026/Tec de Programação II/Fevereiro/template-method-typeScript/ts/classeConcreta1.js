"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var classeTemplate_1 = require("./classeTemplate");
var ClasseConcreta1 = /** @class */ (function (_super) {
    __extends(ClasseConcreta1, _super);
    function ClasseConcreta1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClasseConcreta1.prototype.etapa3 = function () {
        console.log('Execução da etapa 3. Implementação realizada pela ClasseConcreta 1');
    };
    ClasseConcreta1.prototype.etapa4 = function () {
        console.log('Execução da etapa 4. Implementação realizada pela ClasseConcreta 1');
    };
    return ClasseConcreta1;
}(classeTemplate_1.default));
exports.default = ClasseConcreta1;
