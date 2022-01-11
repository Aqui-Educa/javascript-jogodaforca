var palavra = "Dever de casa"
var limiteDeErros = 6
var lista = []

function encriptarPalavra(){
    
    var result = ""

    for (let index = 0; index < palavra.length; index++) {        
        var char = palavra.substring(index,index+1)
        if (char != " ") {
            result += "_ "
        } else {
            result += "  "
        }        
    }
    document.getElementById("palavra").innerText = result.trim()    
}

function verifica() {
    var char = document.getElementById("char").value

    var palavraEncriptada = document.getElementById("palavra").innerText   

    var erro = true

    for (let index = 0; index < palavra.length; index++) {
        var charPalavra = palavra.substring(index,index+1)

        if (charPalavra.toLowerCase() == char.toLowerCase()){
            erro = false
            
            novoChar = palavra.substring(index,index+1)

            palavraEncriptada = setCharAt(palavraEncriptada,index*2,novoChar)
            palavraEncriptada = palavraEncriptada.trim()
        }
    }    

    if (existeCharDentroDaLista(char) === false){

        if (erro == true) {
            var erroValue = document.getElementById("erro").value
            var erroIncremento = parseInt(erroValue) + 1
    
            if (erroIncremento == limiteDeErros) {
                alert("Você perdeu!")
                location.reload()
            }
    
            document.getElementById("erro").value = erroIncremento
    
            lista.push(char)
        }
    
        var listaDeErros = ""
        lista.forEach(c => {         
            listaDeErros += c + ","
        })
    
        listaDeErros = setCharAt(listaDeErros,listaDeErros.length-1,"")

        document.getElementById("lista").value = listaDeErros

    }

    document.getElementById("palavra").innerText = palavraEncriptada

}

function existeCharDentroDaLista(char){
    var existe = false
    
    lista.forEach(c => {
        if (char.trim() == c.trim()) {
            existe = true
        }
    })

    if (existe)
        return true
    else
        return false
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}