// 1. Seleciona todas as tags <b> na página

var todasAsTagsB = document.querySelectorAll('.list tr td b');

// 2. Filtra as que contêm ":" no texto
var tagsComDoisPontos = Array.from(todasAsTagsB).filter(b => b.textContent.includes(':'));
tagsComDoisPontos.forEach(e =>{
    texto = e.parentElement.innerText;
    texto = texto.substr(texto.indexOf("(")+1,texto.indexOf(")")-texto.indexOf("(")-1)
    e.parentElement.querySelector('option[value=' + texto + ']').setAttribute("selected", true);
    //console.log('option[value=' + texto + ']');
})

// Seleciona todas as tags <textarea> na página
var textareas = document.getElementsByTagName('textarea');

// Itera sobre todas as tags <textarea>
for (var i = 0; i < textareas.length; i++) {
    // Verifica se a tag <textarea> está vazia
    if (textareas[i].value.trim() === '') {
        // Define o valor "Não Fez" apenas para tags <textarea> vazias
        textareas[i].value = "Não Fez";

        textareas[i].closest("tr").querySelector('option[value=NF]').setAttribute('selected', true);
    }
}