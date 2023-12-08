const botao = document.querySelector('#botaodialogo')
const dialogobubble = document.querySelector('#dialogobubble')
let contador = 0

botao.addEventListener('click', function() {
    if (contador == 0) {
        contador++;
        dialogobubble.style.display = 'flex';
        console.log(contador);
    }
    else {
        contador--;
        dialogobubble.style.display = 'none';
        console.log(contador);
    } 
})

