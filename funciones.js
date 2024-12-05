function doGet(){
    return HtmlService.createTemplateFromFile('index').evaluate().setTitle('Inicio');
}

function obtenerDatosHtml(nombre){
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}