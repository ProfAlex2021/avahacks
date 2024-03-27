// Seleciona todas as tags <textarea> na página
var textareas = document.getElementsByTagName('textarea');

// Itera sobre todas as tags <textarea>
for (var i = 0; i < textareas.length; i++) {
    // Define o valor "Não Fez" para cada tag <textarea>
    textareas[i].value = "Não Fez";
}
