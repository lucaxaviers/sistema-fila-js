# 🚶 Sistema de Fila em JavaScript (Queue / FIFO)

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Data Structure](https://img.shields.io/badge/Estrutura-Fila%20(FIFO)-blue?style=for-the-badge)](https://developer.mozilla.org/)
[![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](LICENSE)

Implementação modular da estrutura de dados fundamental **Fila (Queue)** em **JavaScript ES6+**, baseada no princípio **FIFO (First In, First Out)** para gerenciamento e simulação de filas de atendimento.

---

## ⚙️ Métodos Implementados

O módulo `index.js` exporta as operações essenciais de manipulação de fila:

| Função | Parâmetros | Descrição |
|---|---|---|
| `criarFila(tamanho)` | `tamanho` (padrão: 2) | Instancia uma nova fila com capacidade estática predefinida. |
| `colocarNaFila(fila, item)` | `fila`, `item` | Insere um novo elemento no final da fila (**Enqueue**). Avisa caso a capacidade esteja esgotada (*overflow*). |
| `retirarDaFila(fila)` | `fila` | Remove e retorna o elemento da frente da fila (**Dequeue**), deslocando os itens subsequentes para as posições anteriores. |
| `limparFila(fila)` | `fila` | Reseta todas as posições da fila, limpando seu conteúdo. |

---

## 💻 Exemplo de Uso

```javascript
import { criarFila, colocarNaFila, retirarDaFila, limparFila } from './index.js';

// 1. Cria uma fila com capacidade para 3 pessoas
const filaAtendimento = criarFila(3);

// 2. Insere clientes na fila
colocarNaFila(filaAtendimento, "Carlos");
colocarNaFila(filaAtendimento, "Mariana");
colocarNaFila(filaAtendimento, "João");

// 3. Atende o primeiro da fila (Carlos)
const atendido = retirarDaFila(filaAtendimento);
console.log(`Cliente atendido: ${atendido}`);

// 4. Limpa a fila
limparFila(filaAtendimento);
```

---

## 🚀 Como Executar

```bash
# Clonar o repositório
git clone https://github.com/lucaxaviers/sistema-fila-js.git

# Acessar a pasta
cd sistema-fila-js

# Executar com Node.js
node index.js
```

---

> **Desenvolvido por Lucas Rodrigues Xavier**  
> *Projeto acadêmico com foco em estruturas de dados e algoritmos fundamentais.*
