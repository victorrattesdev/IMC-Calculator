const form = document.querySelector("#formulario");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#Peso')
    const inputAltura = e.target.querySelector('#Altura')

    const Peso = Number(inputPeso.value);
    const Altura = Number(inputAltura.value);

    if (!Peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if (!Altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    const imc = getIMC(Peso, Altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true)

    function getIMC(Peso, Altura) {
        const imc = Peso / Altura ** 2;
        return imc.toFixed(2);
    }
    
    function getNivelImc(imc) {
        const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso',
            'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']

        if (imc >= 39.9) return nivel[5];
        if (imc >= 34.9) return nivel[4];
        if (imc >= 29.9) return nivel[3];
        if (imc >= 24.9) return nivel[2];
        if (imc >= 18.5) return nivel[1];
        if (imc < 18.5)  return nivel[0];

    };

    function criaP(className) {
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg, isValid) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';

        const p = criaP();

        if (isValid){
            p.classList.add('paragrafo-resultado');
        } else {
            p.classList.add('paragrafo-resultado-errado');
        }
        p.innerHTML = msg;
        resultado.appendChild(p);
    }
})
