const liquidificador = document.getElementById("liquidificador");
const btOn = document.getElementById("on");
const btOff = document.getElementById("off");

function ligou() {
  if (!clicouImg()) {
   liquidificador.src = "./image/liq_ligado.gif";
  }
}
function desligou() {
  if (!clicouImg()) {
    liquidificador.src = "./image/liq_desligado.PNG";
  }
}
const meuGit = () => (liquidificador.src = "./image/meu_git.png");

const clicouImg = () => {
  return liquidificador.src.indexOf("meu_git") > -1;
};

btOn.addEventListener("click", ligou);

btOff.addEventListener("click", desligou);

liquidificador.addEventListener("mouseout", desligou);

liquidificador.addEventListener("mouseover", ligou);

liquidificador.addEventListener("dblclick", meuGit);
