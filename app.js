function exchange() {
  // select
  const amount = document.getElementById("amount");
  const to = document.getElementById("to");
  const output = document.getElementById("output");

  // calculation
  let result = amount.valueAsNumber * to.value;

  // output
  output.innerText = result + ' MMK';
}