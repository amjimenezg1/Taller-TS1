import { series } from './data.js';


function renderSeriesTable() {
    var tableBody = document.querySelector('#seriesTable tbody');
    tableBody.innerHTML = ''; // Limpiar cualquier contenido existente
    
    series.forEach(function (serie, index) {
        console.log(serie)
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(index + 1, "</td>\n            <td><a href=\"").concat(serie.urlPlataforma, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.plataforma, "</td>\n            <td>").concat(serie.temporadas, "</td>\n        ");
        tableBody.appendChild(row);
    });
    // Calcular el promedio de temporadas
    var averageSeasons = calculateAverageSeasons();
    // Mostrar el promedio debajo de la tabla
    var container = document.querySelector('.container');
    var averageText = document.createElement('p');
    averageText.className = "mt-3";
    averageText.textContent = "Seasons average: ".concat(averageSeasons);
    container.appendChild(averageText);
}
// Función para calcular el promedio de temporadas
function calculateAverageSeasons() {
    var totalSeasons = series.reduce(function (total, series) { return total + series.temporadas; }, 0);
    return Math.round((totalSeasons / series.length) * 100) / 100; // Redondear a dos decimales
    
}
// Ejecutar la función para poblar la tabla y mostrar el promedio
renderSeriesTable();