let nivelDeAmargor=42;
let cervezasMenosAmargas= (beers, nivelDeAmargor)=>{
let nuevoArray=beers.filter(cerveza=> cerveza.ibu < nivelDeAmargor).map(cerveza=>{
return {
    nombre:cerveza.name,
    amargor:cerveza.ibu
}
});
console.log(nuevoArray);
}
cervezasMenosAmargas(beers, nivelDeAmargor);