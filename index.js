export function criarFila(tamanho = 2) {
  return [...new Array(tamanho)];
}

export function colocarNaFila(fila = [], item) {
  if (fila.includes(undefined)) {
    const index = fila.indexOf(undefined);
    fila[index] = item;
    console.log(`✅ [${item}] adicionado na posição ${index} da fila.`);
    return true;
  }
  console.log(`⚠️ Não cabe na fila: capacidade máxima atingida para inserir "${item}".`);
  return false;
}

export function retirarDaFila(fila = []) {
  if (fila[0] === undefined) {
    console.log("⚠️ A fila está vazia. Nenhum item para retirar.");
    return undefined;
  }
  const primeiroLugar = fila[0];
  for (let i = 0; i < fila.length - 1; i++) {
    fila[i] = fila[i + 1];
  }
  fila[fila.length - 1] = undefined;
  console.log(`🏃 Atendido / Retirado da fila: ${primeiroLugar}`);
  return primeiroLugar;
}

export function limparFila(fila = []) {
  if (fila[0] === undefined) {
    console.log("ℹ️ A fila já está vazia.");
    return;
  }
  for (let i = 0; i < fila.length; i++) {
    fila[i] = undefined;
  }
  console.log("🧹 Fila resetada e limpa com sucesso.");
}

// Demonstração de uso
console.log("=== DEMONSTRAÇÃO DO SISTEMA DE FILA (FIFO) ===");
const filaAtendimento = criarFila(3);
console.log("Fila criada:", filaAtendimento);

colocarNaFila(filaAtendimento, "Lucas");
colocarNaFila(filaAtendimento, "Mariana");
colocarNaFila(filaAtendimento, "Carlos");
colocarNaFila(filaAtendimento, "Tentativa Extra"); // Deve avisar que está cheia

console.log("Fila atual:", filaAtendimento);
retirarDaFila(filaAtendimento); // Remove Lucas
console.log("Fila após primeiro atendimento:", filaAtendimento);
colocarNaFila(filaAtendimento, "João"); // Insere no slot liberado
console.log("Fila atualizada:", filaAtendimento);
