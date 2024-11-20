function criaCalculadora() {

    return {
        display: document.querySelector('.display'),


        iniciar() {
            this.cliqueBotoes();
            this.pressionaEnter();
            this.display.focus();

        },


        pressionaEnter() {
            this.display.focus();
            this.display.addEventListener('keyup', e => {
                if(e.key=== 13) {
                    this.realizaConta();
                }
            });
        },

        btnClear() {
            this.display.value = '';
        },

        btnDel() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);
                if(!conta) {
                    alert('Conta inválida');
                    return;}
                this.display.value = String(conta);

            }catch (e){
                alert('Conta inválida');
                return;
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', function (e) {
                const el = e.target;

                if (el.classList.contains('btn-num') || el.classList.contains('btn-sym')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.btnClear();
                }

                if (el.classList.contains('btn-del')) {
                    this.btnDel();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                this.display.focus();
            }.bind(this)); //bind(this) para referenciar o this do objeto criado. Arrow function não precisa do bind pois ela não cria um novo this
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    }
}

const calculadora = criaCalculadora();
calculadora.iniciar();




