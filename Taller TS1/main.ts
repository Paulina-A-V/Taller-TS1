import { Serie } from "./serie.js";
import * as dataObject from "./data.js";

var datosSeries = dataObject.series;

let bodyTablaTV: HTMLElement = document.getElementById("bodyTablaTV")!;

/**
 * Función para mostrar la información de las series.
 * @param data 
 * @param body 
 */
function mostrarDatos(data: Serie[], body: HTMLElement): void {
    let htmlVar = "";
    let promedio = 0;
    for (let i = 0; i < data.length; i++) {
        htmlVar += `
        <tr>
            <th scope=\"row\">${data[i].id}</th>
            <td>${data[i].name}</td>
            <td>${data[i].channel}</td>
            <td>${data[i].seasons}</td>
        </tr>`
        promedio += data[i].seasons;
    }
    htmlVar += `
    <tr id = \"promedio\"><h3>Seasons Average: ${promedio / data.length}</h3></tr>`;
    body.innerHTML = htmlVar;
}

mostrarDatos(datosSeries, bodyTablaTV)