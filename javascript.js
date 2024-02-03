const iniciar = document.querySelector("#iniciar");
const parar = document.querySelector("#parar");
const estilo = document.querySelector(".container");
const inicio = document.querySelector("#inicio");

let miliseconds = 0;
let seconds = 0;
let hours = 0;
let cron;

function handleinit() {
  cron = setTimeout(function update() {
    miliseconds++;

    const formathours = hours < 10 ? `0${hours}` : hours;
    const formatseconds = seconds < 10 ? `0${seconds}` : seconds;
    const formattedMiliseconds =
      miliseconds < 10 ? `0${miliseconds}` : miliseconds;

    estilo.style.setProperty(
      "--after-content",
      `"${formathours}:${formatseconds}:${formattedMiliseconds}"`
    );

    if (miliseconds === 60) {
      miliseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      hours++;
    }
    if (hours === 24) {
      hours = 0;
    }

    // Agende a próxima atualização após um segundo
    cron = setTimeout(update, 1000);
  }, 1000);
}

function handleStop() {
  // Limpe o timeout para parar as atualizações
  clearTimeout(cron);
}

function handleReset() {
  miliseconds = 0;
  seconds = 0;
  hours = 0;
  estilo.style.setProperty("--after-content", '"00:00:00"');
  clearTimeout(cron);
}

parar.addEventListener("click", handleStop);
iniciar.addEventListener("click", handleinit);
inicio.addEventListener("click", handleReset); // Corrigido o nome da função para handleReset
