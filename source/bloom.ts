// Bloom JS
// Version 0.1.1
// By Christopher W. Johnson

export function generate_element(html: string):Element {
  const div = document.createElement('div')
  div.innerHTML = html
  return <Element>div.firstChild
}

export interface Flower {
  get_element(): Element
}

export interface Parent {
  add_child(flower: Flower)
}

export class Common_Flower implements Flower {
  protected element: Element

  constructor(element: Element) {
    this.element = element
  }

  get_element(): Element {
    return this.element
  }

  find_one(selector: string): Element {
    return this.element.querySelector(selector)
  }
}

export class List_Flower<T extends Flower> extends Common_Flower implements Parent {
  children: T[] = []

  constructor(element: Element) {
    super(element)
  }

  add_child(child: T) {
    this.children.push(child)
    this.element.appendChild(child.get_element())
  }
}

export class Indirect_List_Flower<T extends Flower> extends Common_Flower implements Parent {
  list_element: Element
  children: T[] = []

  constructor(element: Element, list_selector: string) {
    super(element)
    this.list_element = this.element.querySelector(list_selector)
  }

  add_child(child: T) {
    this.children.push(<T>child)
    this.list_element.appendChild(child.get_element())
  }
}