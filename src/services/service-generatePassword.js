export function generatePasswords(long, opciones) {
    let pass = '';
    const cadena = cadenaGenerator(opciones);
    const arr = Array.from(cadena);
    const randomValues = window.crypto.getRandomValues(new Uint32Array(long));

    for (let i = 0; i < long; i++) {
        const pos = randomValues[i] % arr.length;
        pass += arr[pos];
    }
    console.log({pass});
    return pass;
}

function cadenaGenerator(op){
    let c = '';
    const mayus = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const minus = 'abcdefghijklmnñopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '¿:!}[".<#$;^%|°&/()=?¡+*{]-_,>';

    if(op.upper){ c += mayus };
    if(op.lower){ c += minus };
    if(op.numbers){ c += numeros };
    if(op.symbols){ c += simbolos };

    return cadenaRandomizer(c);
}

function cadenaRandomizer(cadena){
    const arr = Array.from(cadena);
    const total = arr.length;
    const setCadena = new Set();

    do {
        const randomValues = window.crypto.getRandomValues(new Uint32Array(1));
        const j = randomValues[0] % total;

        setCadena.add(arr[j]);
    } while (setCadena.size < total);
    return setCadena;
}