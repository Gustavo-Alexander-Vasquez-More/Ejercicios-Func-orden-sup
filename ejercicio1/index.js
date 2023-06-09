let nivelEtilicoMaximo= 5.4;
const cervezas= (beers, nivelEtilicoMaximo)=>{
//Pimero filtramos el array beers, para cada cerveza el filter se va a fijar que su proiedad 
//abv no exeda el nivel que yo le di, una vez que se filtraron hago un mapeo;
//para que me guarde el resultado del filtro en un nuevo array, luego retorno,
//al nuevo array(porque es una funcion dentro de otra función), abriendo las llavea,
//le digo que cada onjeto va a tener esas propiedades, luego le hago un console.log
//y al final llamo a la funcion padre para que el codigo se ejecute.
let nuevoArray=beers.filter((cerveza=> cerveza.abv <= nivelEtilicoMaximo)).map(cerveza=>{
return {
    Nombre:cerveza.name,
    Alcohol: cerveza.abv,
    Amargor: cerveza.ibu,
  }  
});
console.log(nuevoArray);
}
cervezas(beers,nivelEtilicoMaximo);