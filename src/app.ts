import { series } from './data';

function renderSeriesTable(): void {
    const tableBody = document.querySelector('#seriesTable tbody') as HTMLElement;
    tableBody.innerHTML = ''; // Limpiar cualquier contenido existente

    // Verificar si las series están siendo importadas correctamente
    console.log(series); // Esto debe mostrar las series en la consola del navegador

    series.forEach((serie, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><a href="${serie.urlPlataforma}" target="_blank">${serie.titulo}</a></td>
            <td>${serie.plataforma}</td>
            <td>${serie.temporadas}</td>
        `;
        tableBody.appendChild(row);
    });

    // Calcular el promedio de temporadas
    const averageSeasons = calculateAverageSeasons();
    // Mostrar el promedio debajo de la tabla
    const container = document.querySelector('.container') as HTMLElement;
    const averageText = document.createElement('p');
    averageText.className = "mt-3";
    averageText.textContent = `Seasons average: ${averageSeasons}`;
    container.appendChild(averageText);
}

// Función para calcular el promedio de temporadas
function calculateAverageSeasons(): number {
    const totalSeasons = series.reduce((total, serie) => total + serie.temporadas, 0);
    return Math.round((totalSeasons / series.length) * 100) / 100; // Redondear a dos decimales
}

// Ejecutar la función para poblar la tabla y mostrar el promedio
renderSeriesTable();
