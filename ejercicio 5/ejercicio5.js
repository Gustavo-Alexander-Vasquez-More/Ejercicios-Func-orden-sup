let renderizar = (beers) => {
    let filasTbody = document.getElementById("filas-tbody");
    let contenidoTabla = '';
    beers.forEach((cerveza) => {
      // Acceder a los datos de cada cerveza en el array beers
        let name = cerveza.name;
        let abv = cerveza.abv;
        let ibu = cerveza.ibu;
// Crear una fila con las celdas correspondientes
    let fila = `
        <tr>
        <td>${name}</td>
        <td>${abv}</td>
        <td>${ibu}</td>
        </tr>`;
    
        contenidoTabla += fila;
    });
// Crear el template completo de la tabla
    let tablaCompleta = `
    <table>
        <thead></thead>
        <tbody>
        ${contenidoTabla}
        </tbody>
    </table>`;

    filasTbody.innerHTML += tablaCompleta;
};
renderizar(beers);