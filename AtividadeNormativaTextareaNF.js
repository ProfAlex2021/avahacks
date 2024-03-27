// Seleciona todas as tags <textarea> na página
var textareas = document.getElementsByTagName('textarea');

// Itera sobre todas as tags <textarea>
for (var i = 0; i < textareas.length; i++) {
    // Verifica se a tag <textarea> está vazia
    if (textareas[i].value.trim() === '') {
        // Define o valor "Não Fez" apenas para tags <textarea> vazias
        textareas[i].value = "Não Fez";
    }
}
