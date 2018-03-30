function Stack ( ) {
  let items = [];

  this.push = (el) => {
    items.push(el);
  }

  this.pop = () => {
    return items.pop();
  }

  this.peek = () => {
    return items[items.length - 1];
  }
}