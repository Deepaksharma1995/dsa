console.log("Hello WOrld");

function onSubmitHandler(e) {
  console.log(e.target.value);
}

let onChangeInput = function (e) {
  //this.style.backgroundColor = "green";
  //console.log("mai yah hu");
  console.log(e.target.value, this);
};

let inputs = document.getElementById("myInput");
console.log(this);

// function av(obj) {

//   console.log('arrraara naka muka ',obj);
// }

//let myOnchange = onChangeInput.bind(inputs);

inputs.addEventListener("input", onChangeInput);
let x = document.getElementById("my_button");
x.addEventListener("click", (e) => onSubmitHandler(e));
