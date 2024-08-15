function encriptar() {
    console.log('encripta');
    let texto = document.getElementById("ingresar_texto").value;

    if(texto != '') {
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        document.getElementById("salida_texto").innerHTML = textoEncriptado;
        document.getElementById("info_sin_texto").style.display = 'none';
        document.getElementById("image_1").style.display = 'none';
        document.getElementById("copiar_btn").style.display = 'block';
    
        limpiarInput();
    }else {
        document.getElementById("salida_texto").innerHTML = 'Ningún mensaje fue encontrado';
        document.getElementById("image_1").style.display = 'block';
        document.getElementById("info_sin_texto").style.display = 'block';

    }
}

function desencriptar() {
    console.log('desencripta');

    let textoEncriptado = document.getElementById("ingresar_texto").value;
    
    if(textoEncriptado != '') {
        let texto = textoEncriptado
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        document.getElementById("salida_texto").innerHTML  = texto;
        limpiarInput();
    } else {
        document.getElementById("salida_texto").innerHTML = 'Ningún mensaje fue encontrado';
        document.getElementById("image_1").style.display = 'block';
        document.getElementById("info_sin_texto").style.display = 'block';

    }
}

function limpiarInput() {
    var input_texto = document.getElementById('ingresar_texto');
    input_texto.value = '';
}

const copiarContenido = async () => {
    let textoCopiar = document.getElementById("salida_texto").innerText;
    try {
        await navigator.clipboard.writeText(textoCopiar);
        alert('Texto copiado corretamente')
    } catch (err) {
        alert('Error al copiar')
        console.error('Error al copiar: ', err);
    }
}
