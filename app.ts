import { series } from './data.js';

const table: HTMLTableElement = document.getElementById('TableBody') as HTMLTableElement;
const cardDetails: HTMLElement = document.getElementById('cardDetails') as HTMLElement;
const detailsImage: HTMLImageElement = document.getElementById('detailsImage') as HTMLImageElement;
const detailsTitle: HTMLElement = document.getElementById('detailsTitle') as HTMLElement;
const detailsDescription: HTMLElement = document.getElementById('detailsDescription') as HTMLElement;
const detailsLink: HTMLAnchorElement = document.getElementById('detailsLink') as HTMLAnchorElement;


let average = (series.reduce((acc, serie) => acc + serie.seasons, 0) / series.length).toFixed(1);


series.forEach(serie => {
    const row: HTMLTableRowElement = table.insertRow();
    row.innerHTML = `<th scope="row">${serie.id}</th>
                     <td><a href="${serie.website}" class="text-decoration-none">${serie.title}</a></td>
                     <td>${serie.network}</td>
                     <td>${serie.seasons}</td>`;

    row.addEventListener('click', () => {
        detailsImage.src = serie.image;
        detailsImage.alt = 'Portada de ' + serie.title;
        detailsTitle.textContent = serie.title;
        detailsDescription.textContent = serie.description;
        detailsLink.href = serie.website;
        detailsLink.textContent = 'Visit Website';
        cardDetails.style.display = 'block'; 
    });
});

const averageRow: HTMLTableRowElement = table.insertRow();
averageRow.innerHTML = `<td class="table-active" colspan="4">Seasons Average: ${average}</td>`;
averageRow.classList.add('font-weight-bold'); 
