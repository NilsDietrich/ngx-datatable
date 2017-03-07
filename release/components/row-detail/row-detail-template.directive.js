"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DatatableRowDetailTemplateDirective = (function () {
    function DatatableRowDetailTemplateDirective(template) {
        this.template = template;
    }
    ;
    return DatatableRowDetailTemplateDirective;
}());
DatatableRowDetailTemplateDirective.decorators = [
    { type: core_1.Directive, args: [{
                selector: '[ngx-datatable-row-detail-template]'
            },] },
];
/** @nocollapse */
DatatableRowDetailTemplateDirective.ctorParameters = function () { return [
    { type: core_1.TemplateRef, },
]; };
exports.DatatableRowDetailTemplateDirective = DatatableRowDetailTemplateDirective;
//# sourceMappingURL=row-detail-template.directive.js.map