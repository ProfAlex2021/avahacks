// Seleciona todas as tags <select> na página
var selects = document.getElementsByTagName('select');

// Itera sobre todas as tags <select>
for (var i = 0; i < selects.length; i++) {
    var options = selects[i].getElementsByTagName('option');
    
    // Verifica se há opções dentro da tag <select>
    if (options.length > 0) {
        // Obtém a última opção dentro da tag <select>
        var ultimaOpcao = options[options.length - 1];
        
        // Marca a última opção como selecionada
        ultimaOpcao.selected = true;
    }
}
