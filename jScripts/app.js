import { series } from './data.js';
const table = document.getElementById('rows');

let average = (series.reduce((acc, serie) => acc + serie.seasons, 0) / series.length).toFixed(1);

series.forEach(serie => {
    const row = table.insertRow();
    row.innerHTML = `
        <th scope="row">${serie.id}</th>
        <td><a href="${serie.website}" class="text-decoration-none">${serie.title}</a></td>
        <td>${serie.network}</td>
        <td>${serie.seasons}</td>
    `;
});

const averageRow = table.insertRow();
averageRow.innerHTML = `<td class="table-active" colspan="4">Seasons Average: ${average}</td>`;
averageRow.classList.add('font-weight-bold');
