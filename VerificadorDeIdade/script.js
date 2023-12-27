function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert("ERRO, Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsexo");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.src = "./imgs/bb-mas.jpg";
      } else if (idade < 21) {
        img.src = "./imgs/jovem-mas.jpg";
      } else if (idade < 50) {
        img.src = "./imgs/adulto-mas.jpg";
      } else {
        img.src = "./imgs/idoso-mas.jpg";
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.src = "./imgs/bb-fem.jpg";
      } else if (idade < 21) {
        img.src = "./imgs/jovem-fem.jpg";
      } else if (idade < 50) {
        img.src = "./imgs/adulta-fem.jpg";
      } else {
        img.src = "./imgs/idosa-fem.jpg";
      }
    }
    
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img)
   
  }
}
