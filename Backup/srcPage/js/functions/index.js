// Seleciona todos os elementos <pre>
const preElements = document.querySelectorAll('pre');

// Itera sobre os elementos <pre>
preElements.forEach(pre => {
	// Seleciona os elementos <code> dentro do <pre>
	const codeElements = pre.querySelectorAll('code');

	// Adiciona a classe "language-javascript" aos elementos <code>
	codeElements.forEach(code => {
		code.classList.add('language-javascript');
	});
});
