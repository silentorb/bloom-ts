export function generate_element(html: string) {
  const div = document.createElement('div')
  div.innerHTML = html
  return div.firstChild
}

export function get_template(name: string) {
  return generate_element(require(name + '.html'))
}

export interface Flower {
  get_element(): HTMLElement
}

export interface Parent {
  add_child(flower: Flower)
}

export class Comment_Flower implements Flower {
  protected element: HTMLElement

  constructor(element: HTMLElement) {
    this.element = element
  }

  get_element(): HTMLElement {
    return this.element
  }
}

export class List_Flower extends Comment_Flower implements Parent {
  children: Flower[]

  constructor(element: HTMLElement) {
    super(element)
  }

  add_child(child: Flower) {
    this.children.push(child)
    this.element.appendChild(child.get_element())
  }
}

export class Indirect_List_Flower extends Comment_Flower implements Parent {
  list_element: HTMLElement
  children: Flower[]

  constructor(element: HTMLElement, list_element: HTMLElement) {
    super(element)
  }

  add_child(child: Flower) {
    this.children.push(child)
    this.list_element.appendChild(child.get_element())
  }
}