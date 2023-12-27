function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas...`;
  if (hora >= 0 && hora < 12) {
    img.src = "./imgs/dia.jpg";
    document.body.style.background = "#94b7d6";
  } else if (hora >= 12 && hora < 18) {
    img.src = "./imgs/tarde.jpg";
    document.body.style.background = "#e67541";
  } else {
    img.src = "./imgs/noite.jpg";
    document.body.style.background = "#0a1d36";
  }
}
