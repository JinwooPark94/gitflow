function Queue(){
  let inArray = [];

  this.enqueue = function(number){
    inArray.push(number);
    console.log(inArray);
  }

  this.dequeue = function () {
    let temp = [];

    function pushData(){
      temp.push(inArray.pop());
      if (inArray.length === 1) {
        console.log(inArray[0]);
        inArray = [];
        return rePutData();
      }
      return pushData();
    }

    function rePutData(){
      inArray.push(temp.pop());
      if (temp.length === 0) {
        return console.log(inArray);
      }
      return rePutData();
    }
    return pushData();
  }
}


let asdf = new Queue();

// asdf.dequeue();
asdf.enqueue(1); asdf.enqueue(2); asdf.enqueue(3);
asdf.dequeue();