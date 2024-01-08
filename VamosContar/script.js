function contador() {
  var start = Number(window.document.getElementById("start").value);
  var end = Number(window.document.getElementById("end").value);
  var skip = Number(window.document.getElementById("skip").value);
  var res = window.document.getElementById("res");

  if (start == "" || end == "") {
    res.innerHTML = "Imposível contar";
  } else {
    if (skip == 0) {
      alert("CONSIDERANDO PASSO 1");
      skip = 1;
    }
    for (var c = start; c < end; c = c + skip) {
      res.innerHTML += `${c} 👉🏾`;
    }
  }

  res.innerHTML += ` 🏁`;
}
