class Adivinhacao {

    input = document.getElementById('inputDados');
    btnChute = document.getElementById('btnTentar');
    divResposta = document.getElementById('resultado');
    resposta = document.getElementById('p');
    numeroGerado = 0;
    respostaAcerto = "Parabens, voce acertou!";
    respostaErro = "Infelizmente vc errou!";

    constructor() {
        this.ConfigurarEventos();
        this.GerarNumeroAleatorio();
    }

    GerarNumeroAleatorio() {
        this.numeroGerado = Math.floor(Math.random(0, 11) * 10);
    }

    ConfigurarEventos() {
        this.btnChute.addEventListener('click', () => this.VerificarResposta())

        this.input.addEventListener('input', (e) => {
            console.log('entrou');
        
            let texto = e.target.value;
            let numero = parseFloat(texto);
        
            if (isNaN(numero)) {
                e.target.value = "";
            }
        });
    }

    AtualizarNumeroGerado() {

        console.log('entrou 25');
        this.resposta.textContent += `Número gerado: ${this.numeroGerado}`;
    }

    VerificarResposta() {
        console.log("gerado" + this.numeroGerado);
        console.log("chute" + this.input.value);

        let numero = parseInt(this.input.value);

        if (numero === this.numeroGerado) {
            this.divResposta.style.backgroundColor = "green";
            this.resposta.textContent = this.respostaAcerto;
            this.AtualizarNumeroGerado();
            this.GerarNumeroAleatorio();
        }
        else {
            this.divResposta.style.backgroundColor = "red";
            this.resposta.textContent = this.respostaErro;
            this.AtualizarNumeroGerado();
            this.GerarNumeroAleatorio();
            this.input.value = "";
        }
    }
}

window.addEventListener('load', () => new Adivinhacao());
