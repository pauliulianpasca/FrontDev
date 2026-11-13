function verifica(nume, varsta) {
    const status = varsta >= 18 ? 'Adult' : 'Minor';
    console.log(nume, "=", varsta, status);
}

verifica("Andrei", 25);