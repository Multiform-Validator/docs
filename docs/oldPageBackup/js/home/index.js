const npm_install = document.querySelector('#npm_install');
const button = npm_install.querySelector('button');
const pre = npm_install.querySelector('pre');
const temporarySpan = document.querySelector('#temporary_span');

button.addEventListener('click', () => {
  const content = pre.innerText;

  // Copia o conteúdo para a área de transferência usando o Clipboard API
  navigator.clipboard.writeText(content)
    .then(() => {
      console.log('Conteúdo copiado com sucesso!');

      // Exibe o span temporário
      temporarySpan.textContent = 'Copied!';
      temporarySpan.style.opacity = 1;

      // Define um tempo para que o span temporário desapareça
      setTimeout(() => {
        temporarySpan.style.opacity = 0;
      }, 1500); // 1000ms = 1 segundo (ajuste conforme necessário)
    })
    .catch((err) => {
      console.error('Falha ao copiar o conteúdo:', err);
    });
});
