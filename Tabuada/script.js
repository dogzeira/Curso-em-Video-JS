function generator() {
  var number = document.getElementById(`number`);
  var res = document.getElementById(`res`);

  if (number.value == "") {
    alert("Digite um número válido!!");
  } else {
    let n = Number(number.value);
    res.innerHTML = "";
    for (let c = 1; c <= 10; c++) {
      let item = document.createElement("p");
      item.innerHTML = `${n} x ${c} = ${n * c}`;
      res.appendChild(item);
    }
  }
}
