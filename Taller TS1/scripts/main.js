import * as dataObject from "./data.js";
var datosSeries = dataObject.series;
var bodyTablaTV = document.getElementById("bodyTablaTV");
/**
 * Función para mostrar la información de las series.
 * @param data
 * @param body
 */
function mostrarDatos(data, body) {
    var htmlVar = "";
    var promedio = 0;
    for (var i = 0; i < data.length; i++) {
        htmlVar += "\n        <tr>\n            <th scope=\"row\">".concat(data[i].id, "</th>\n            <td>").concat(data[i].name, "</td>\n            <td>").concat(data[i].channel, "</td>\n            <td>").concat(data[i].seasons, "</td>\n        </tr>");
        promedio += data[i].seasons;
    }
    htmlVar += "\n    <tr id = \"promedio\"><h3>Seasons Average: ".concat(promedio / data.length, "</h3></tr>");
    body.innerHTML = htmlVar;
}
mostrarDatos(datosSeries, bodyTablaTV);