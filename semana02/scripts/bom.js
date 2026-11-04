const input = document.querySelector('#capfav');
const botao = document.querySelector('#btnAdicionar');
const lista = document.querySelector('ul');

botao.addEventListener('click', function () {
    if (input.value.trim() !== "") {
        const li = document.createElement('li');
        const botaoExcluir = document.createElement('button');

        li.textContent = input.value;
        botaoExcluir.textContent = '❌';

        botaoExcluir.addEventListener('click', function () {
            lista.removeChild(li);
        });

        li.append(botaoExcluir);
        lista.append(li);

        input.value = '';
        input.focus();
    }
});

