"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var DocumentsListComponent = /** @class */ (function () {
    function DocumentsListComponent(router) {
        this.router = router;
        this.documents = [
            { "id": 1, "name": "Angular" },
            { "id": 2, "name": "React" },
            { "id": 3, "name": "Java" },
        ];
    }
    DocumentsListComponent.prototype.onSelect = function (document) {
        this.router.navigate(['/documents', document.id]);
    };
    DocumentsListComponent = __decorate([
        core_1.Component({
            selector: 'app-document',
            template: "<h1>Documents List</h1>\n              <ul class=\"items\">\n                 <li (click)=\"onSelect(document)\" *ngFor=\"let document of documents\">\n                   <span class=\"badge\">{{document.id}}</span>{{document.name}}\n                 </li>\n              </ul>"
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], DocumentsListComponent);
    return DocumentsListComponent;
}());
exports.DocumentsListComponent = DocumentsListComponent;
//# sourceMappingURL=document.component.js.map