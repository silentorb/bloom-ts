// Bloom JS
// Version 0.1.1
// By Christopher W. Johnson
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function generate_element(html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    return div.firstChild;
}
exports.generate_element = generate_element;
var Common_Flower = (function () {
    function Common_Flower(element) {
        this.element = element;
    }
    Common_Flower.prototype.get_element = function () {
        return this.element;
    };
    Common_Flower.prototype.find_one = function (selector) {
        return this.element.querySelector(selector);
    };
    return Common_Flower;
}());
exports.Common_Flower = Common_Flower;
var List_Flower = (function (_super) {
    __extends(List_Flower, _super);
    function List_Flower(element) {
        _super.call(this, element);
        this.children = [];
    }
    List_Flower.prototype.add_child = function (child) {
        this.children.push(child);
        this.element.appendChild(child.get_element());
    };
    return List_Flower;
}(Common_Flower));
exports.List_Flower = List_Flower;
var Indirect_List_Flower = (function (_super) {
    __extends(Indirect_List_Flower, _super);
    function Indirect_List_Flower(element, list_selector) {
        _super.call(this, element);
        this.children = [];
        this.list_element = this.element.querySelector(list_selector);
    }
    Indirect_List_Flower.prototype.add_child = function (child) {
        this.children.push(child);
        this.list_element.appendChild(child.get_element());
    };
    return Indirect_List_Flower;
}(Common_Flower));
exports.Indirect_List_Flower = Indirect_List_Flower;
//# sourceMappingURL=bloom.js.map