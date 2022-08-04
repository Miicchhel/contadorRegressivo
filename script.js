const startTimer = (duracao, display) => {
  let tempo = duracao;
  const intervalo = setInterval(() => {
    console.log('entrou');
    let min = parseInt(tempo / 60);
    let seg = parseInt(tempo % 60);

    min = min < 10 ? "0" + min : min;
    seg = seg < 10 ? "0" + seg : seg;

    display.textContent = min + ":" + seg;
    
    (tempo === 0) ? clearInterval(intervalo) : tempo -= 1;

  }, 1000);
}

window.onload = () => {
  var duracao = 60; //conversão para segundos
  var display = document.querySelector("#timer");
  startTimer(duracao, display);
}