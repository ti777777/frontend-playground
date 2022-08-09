export const createElement = (
  tag: string,
  children?: Array<Node>,
  text?: string
): HTMLElement => {
  const element = document.createElement(tag);

  if (text) {
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
  }

  if (children && children.length > 0) {
    children.forEach((child) => {
      element.appendChild(child);
    });
  }

  return element;
};

export const createTextNode =(text: string): Text =>{
    return document.createTextNode(text)
}