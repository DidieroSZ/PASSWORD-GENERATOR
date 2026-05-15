export function generatePasswords(long, opciones) {
    let pass = '';
    const cadena = cadenaGenerator(opciones);
    const arr = Array.from(cadena);
    const randomValues = window.crypto.getRandomValues(new Uint32Array(long));

    for (let i = 0; i < long; i++) {
        const pos = randomValues[i] % arr.length;
        pass += arr[pos];
    }

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
    let i = arr.length;

    while (i > 0) {
        const rand = crypto.getRandomValues(new Uint32Array(1))[0];
        const j = rand % i;

        i--;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr.join('');
}