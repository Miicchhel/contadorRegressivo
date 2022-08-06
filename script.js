const startTimer = (duracao, display) => {
  let tempo = duracao;
  const intervalo = setInterval(() => {
    let min = parseInt(tempo / 60);
    let seg = parseInt(tempo % 60);

    min = min < 10 ? "0" + min : min;
    seg = seg < 10 ? "0" + seg : seg;

    display.textContent = min + ":" + seg;
    
    if (tempo === 0) {
      clearInterval(intervalo)
      const inicio = document.getElementById('inicio')
      inicio.style.display = 'flex';
      display.style.display = 'none';

    } else {
      tempo -= 1;
    }

  }, 1000);
}

window.onload = () => {
  const inicio = document.getElementById('inicio')
  const btnTimer = document.getElementById('btnTimer');
  btnTimer.addEventListener('click', ()=>{
    let inputMinutos = document.getElementById('inputMinutos').value;
    let inputSegundos = document.getElementById('inputSegundos').value;

    if (!inputMinutos) inputMinutos = 0;
    if (!inputSegundos) inputSegundos = 0;

    const tempo = parseInt(inputSegundos) + parseInt(inputMinutos)*60;
    var duracao = tempo; //conversão para segundos
    var display = document.querySelector("#timer");
    inicio.style.display = 'none';
    display.style.display = 'block';
    startTimer(duracao, display);

  });

}