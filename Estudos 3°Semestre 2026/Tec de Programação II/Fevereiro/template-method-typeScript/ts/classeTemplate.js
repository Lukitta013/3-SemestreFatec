"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClasseTemplate = /** @class */ (function () {
    function ClasseTemplate() {
    }
    ClasseTemplate.prototype.etapa1 = function () {
        console.log('Etapa 1 do processemanto, executada para todos');
    };
    ClasseTemplate.prototype.etapa2 = function () {
        console.log('Etapa 2 do processemanto,executada para todos');
    };
    ClasseTemplate.prototype.etapa5 = function () {
        console.log('Etapa 5 do processemanto,executada para todos');
    };
    ClasseTemplate.prototype.etapa6 = function () {
        console.log('Etapa 6 do processemanto, executada para todos');
    };
    ClasseTemplate.prototype.templateMethod = function () {
        this.etapa1();
        this.etapa2();
        this.etapa3();
        this.etapa4();
        this.etapa5();
        this.etapa6();
    };
    return ClasseTemplate;
}());
exports.default = ClasseTemplate;
