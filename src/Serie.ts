export class Serie {
    id: number;
    titulo: string;
    plataforma: string;
    temporadas: number;
    descripcion: string;
    urlPlataforma: string;
    imagen: string;

    constructor(
        id: number,
        titulo: string,
        plataforma: string,
        temporadas: number,
        descripcion: string,
        urlPlataforma: string,
        imagen: string
    ) {
        this.id = id;
        this.titulo = titulo;
        this.plataforma = plataforma;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.urlPlataforma = urlPlataforma;
        this.imagen = imagen;
    }
}
