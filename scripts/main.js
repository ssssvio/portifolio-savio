document.addEventListener("DOMContentLoaded", () => {
  const botaoCopiar = document.getElementById("copiar-email");
  const confirmacao = document.getElementById("confirmacao");

  if (botaoCopiar && confirmacao) {
    botaoCopiar.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText("r.savio@proton.me").then(() => {
        confirmacao.style.display = "inline";
        setTimeout(() => {
          confirmacao.style.display = "none";
        }, 2000);
      });
    });
  }
});