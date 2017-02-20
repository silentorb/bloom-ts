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
function get_template(name) {
    return generate_element(require(name + '.html'));
}
exports.get_template = get_template;
var Comment_Flower = (function () {
    function Comment_Flower(element) {
        this.element = element;
    }
    Comment_Flower.prototype.get_element = function () {
        return this.element;
    };
    return Comment_Flower;
}());
exports.Comment_Flower = Comment_Flower;
var List_Flower = (function (_super) {
    __extends(List_Flower, _super);
    function List_Flower(element) {
        _super.call(this, element);
    }
    List_Flower.prototype.add_child = function (child) {
        this.children.push(child);
        this.element.appendChild(child.get_element());
    };
    return List_Flower;
}(Comment_Flower));
exports.List_Flower = List_Flower;
var Indirect_List_Flower = (function (_super) {
    __extends(Indirect_List_Flower, _super);
    function Indirect_List_Flower(element, list_element) {
        _super.call(this, element);
    }
    Indirect_List_Flower.prototype.add_child = function (child) {
        this.children.push(child);
        this.list_element.appendChild(child.get_element());
    };
    return Indirect_List_Flower;
}(Comment_Flower));
exports.Indirect_List_Flower = Indirect_List_Flower;
//# sourceMappingURL=bloom.js.map