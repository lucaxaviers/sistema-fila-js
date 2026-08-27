<div align="center">

# 🚶 Sistema de Fila em JavaScript (FIFO / Queue)

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Estrutura-Fila%20FIFO-blue?style=for-the-badge" alt="Fila" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

<p align="center">
  Implementação modular da estrutura de dados fundamental Fila (First In, First Out) em JavaScript ES6+ para simulação de atendimentos.
</p>

---

</div>

## ⚙️ Métodos da Fila

```mermaid
flowchart LR
    A[Novo Item] -->|colocarNaFila| B[Fim da Fila]
    B --> C[Slot 2]
    C --> D[Slot 1]
    D -->|retirarDaFila| E[Elemento Atendido]
```

| Função | Assinatura | Comportamento |
|---|---|---|
| **Criar Fila** | `criarFila(tamanho)` | Cria um array com capacidade estática predefinida |
| **Enfileirar** | `colocarNaFila(fila, item)` | Insere no próximo slot livre ou emite aviso de fila cheia |
| **Desenfileirar** | `retirarDaFila(fila)` | Remove o primeiro item, desloca os restantes e o retorna |
| **Limpar** | `limparFila(fila)` | Reseta todos os slots da fila para vazio |

---

## 🚀 Como Executar

```bash
# Clonar o repositório
git clone https://github.com/lucaxaviers/sistema-fila-js.git

# Acessar a pasta
cd sistema-fila-js

# Executar
node index.js
```

---

<div align="center">
  <sub>Desenvolvido no contexto de Engenharia de Software</sub>
</div>
