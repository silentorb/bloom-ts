export declare function generate_element(html: string): Element;
export interface Flower {
    get_element(): Element;
}
export interface Parent {
    add_child(flower: Flower): any;
}
export declare class Common_Flower implements Flower {
    protected element: Element;
    constructor(element: Element);
    get_element(): Element;
    find_one(selector: string): Element;
}
export declare class List_Flower<T extends Flower> extends Common_Flower implements Parent {
    children: T[];
    constructor(element: Element);
    add_child(child: T): void;
}
export declare class Indirect_List_Flower<T extends Flower> extends Common_Flower implements Parent {
    list_element: Element;
    children: T[];
    constructor(element: Element, list_selector: string);
    add_child(child: T): void;
}
