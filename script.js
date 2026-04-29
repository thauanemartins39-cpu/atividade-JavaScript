// 1. Usando FOR
for (let i = 1; i <= 20; i++) {
    if (i === 13) continue;
    console.log(i);
}

// 2. Usando WHILE
let contador = 1;
while (contador <= 20) {
    if (contador !== 13) console.log(contador);
    contador++;
}

// 3. Usando DO...WHILE
let c = 1;
do {
    if (c !== 13) console.log(c);
    c++;
} while (c <= 20);

// 4. DECRESCENTE (Desafio)
for (let i = 20; i >= 1; i--) {
    if (i === 13) continue;
    console.log(i);
}