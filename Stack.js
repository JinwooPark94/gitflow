function Stack() {
  let item;
  this.isEmpty = () => {
    return items.length === 0;
  };
  this.size = () => {
    return items.length;
  };
  this.print = () => {
    return console.log(items);
  };
}
