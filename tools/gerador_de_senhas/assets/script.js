var butt = document.querySelector('#btncopy');
var range = document.querySelector('#range');
var value = document.querySelector('span');
var valor = 0
var maiusculas = document.querySelector('#maiusculas');
var minusculas = document.querySelector('#minusculas');
var especiais = document.querySelector('#caracteres');
var numeros = document.querySelector('#numeros');
var caracteres = [maiusculas, minusculas, especiais, numeros];

var password = []
var mostrar = document.querySelector('.tamanho');
for (e in caracteres){
    caracteres[e].addEventListener('input',()=>{
        if (verificar()){
        mostrar.classList.add('visivel')
        butt.classList.add('visivel')
        }
        else{
            mostrar.classList.remove('visivel');
            password = [];
            value.textContent = password;
            butt.classList.remove('visivel')
        }
})}
range.addEventListener('input', function() {
    valor = Math.floor(this.value/100*this.maxLength);
    value.textContent = valor;
    password = []
    if (valor<7){
        var card = document.querySelector('.tamanho')
        card.classList.add('red')
        value.style.color = 'red';
    }
    else{
        var card = document.querySelector('.tamanho')
        card.classList.remove('red')
        value.style.color = 'black';
    }
    gerar()

});
function verificar(){
    for (c in caracteres){
        if(caracteres[c].checked){
            return true
        }
    }
    return false
    }

function gerar(){
    var letras = "abcdefghijklmnopqrsopqrstuvwxyz";
    var char = "!@#$%&*()_+?/:;><.,}'";
    var number = "1234567890";
    var permitidos = []
    for (c in caracteres){
        if (caracteres[c].checked){
            if (caracteres[c] == minusculas){
                permitidos.push(letras);
            }
            else if (caracteres[c] == maiusculas){
                permitidos.push(letras.toUpperCase());
            }
            else if (caracteres[c] == especiais){
                permitidos.push(char);
            }
            else if (caracteres[c] == numeros){
                permitidos.push(number);
            }
            
        }
    }
    if (valor>=7 && permitidos.length > 0){
        for (let i = 0; i <=valor;i++){

            var indice_da_lista = Math.floor( Math.random() * (permitidos.length-0)+0);
            var letra = Math.floor(Math.random() * (permitidos[indice_da_lista].length-0)+0)
            password.push(permitidos[indice_da_lista][letra]);
        }
        value.textContent = password.join('')
        butt.classList.add('visivel')

}}
function copiar(){
        let copyText = document.getElementsByTagName("span")[0];
        let input = document.createElement("input");
        input.id = "inp";
        input.value = copyText.textContent;
        copyText.appendChild(input);
        
        let copy = document.getElementById('inp');
        copy.select();
        document.execCommand("Copy");
        alert("O texto copiado foi: " + copy.value);
        
        copyText.removeChild(input);
        }
