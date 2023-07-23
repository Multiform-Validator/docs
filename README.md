# CPF and CNPJ Generator / Gerador de CPF e CNPJ

[![npm version](https://badge.fury.io/js/cpf_and_cnpj-generator.svg)](https://badge.fury.io/js/cpf_and_cnpj-generator)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## English

This npm package provides JavaScript functions to generate valid Brazilian CPF (Cadastro de Pessoas Físicas) and CNPJ (Cadastro Nacional da Pessoa Jurídica) numbers.

### Installation

You can install this package using npm:

```bash
npm install cpf_and_cnpj-generator
```

How to Use
After installing the package, you can use it in your JavaScript project:


```javascript
// Using import
import generator from 'cpf_and_cnpj-generator';

console.log(generator.cnpjGerador);
console.log(generator.cpfGerador);

// Or
import { cnpjGerador, cpfGerador } from 'cpf_and_cnpj-generator';

console.log(cnpjGerador);
console.log(cpfGerador);

// Using require
const generator = require('cpf_and_cnpj-generator');

console.log('CPF Gerado:', generator.cnpjGerador);
console.log('CNPJ Gerado:', generator.cpfGerador);

// Or
const { cpfGerador, cnpjGerador } = require('cpf_and_cnpj-generator');

console.log('CPF Gerado:', cnpjGerador);
console.log('CNPJ Gerado:', cpfGerador);
```

Keep in mind that the code to import or require depends on the JavaScript environment you're running the package in (for example, Node.js with or without ES module support). Therefore, choose the import or require option that suits your environment.

####################################

Português

Este pacote npm fornece funções em JavaScript para gerar números válidos de CPF (Cadastro de Pessoas Físicas) e CNPJ (Cadastro Nacional da Pessoa Jurídica) para o Brasil.

Instalação
Você pode instalar este pacote usando npm:

```bash
npm install cpf_and_cnpj-generator
```

Como Usar
Após instalar o pacote, você pode utilizá-lo em seu projeto JavaScript:

```javascript
// Usando import
import gerador from 'cpf_and_cnpj-generator';

console.log(gerador.cnpjGerador);
console.log(gerador.cpfGerador);

// Ou
import { cnpjGerador, cpfGerador } from 'cpf_and_cnpj-generator';

console.log(cnpjGerador);
console.log(cpfGerador);

// Usando require
const gerador = require('cpf_and_cnpj-generator');

console.log('CPF Gerado:', gerador.cnpjGerador);
console.log('CNPJ Gerado:', gerador.cpfGerador);

// Ou
const { cpfGerador, cnpjGerador } = require('cpf_and_cnpj-generator');

console.log('CPF Gerado:', cnpjGerador);
console.log('CNPJ Gerado:', cpfGerador);
```

Lembre-se de que o código de importação ou require depende do ambiente JavaScript em que você está executando o pacote (por exemplo, Node.js com suporte a módulos ES ou sem suporte). Portanto, escolha a opção de importação ou require adequada ao seu ambiente.