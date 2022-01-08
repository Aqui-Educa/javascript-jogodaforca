var palavra = "dever de casa"
var limiteDeErros = 6

function encriptarPalavra(){
    
    var result = ""

    for (let index = 0; index < palavra.length; index++) {        
        var char = palavra.substring(index,index+1)
        if (char != " ") {
            result += "_"
        } else {
            result += " "
        }        
    }
    document.getElementById("palavra").value = result
}

function verifica() {
    var char = document.getElementById("char").value

    var palavraEncriptada = document.getElementById("palavra").value    

    var erro = true

    for (let index = 0; index < palavra.length; index++) {
        var charPalavra = palavra.substring(index,index+1)

        if (charPalavra == char){
            erro = false
            palavraEncriptada = setCharAt(palavraEncriptada,index,char)
        }
    }

    if (erro == true) {
        var erroValue = document.getElementById("erro").value
        var erroIncremento = parseInt(erroValue) + 1

        if (erroIncremento == limiteDeErros) {
            alert("Você perdeu!")
            location.reload()
        }

        document.getElementById("erro").value = erroIncremento
    }


    document.getElementById("palavra").value = palavraEncriptada
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}