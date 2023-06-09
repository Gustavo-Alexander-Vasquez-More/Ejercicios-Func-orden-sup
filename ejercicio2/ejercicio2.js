let nivelBaseDeAlcohol= 7.4;
const cervezasMasAlcoholicas= (beers, nivelBaseDeAlcohol)=>{
    let nuevoArray=beers.filter(cerveza=> cerveza.abv > nivelBaseDeAlcohol).map(cerveza=>{
        return {
            Nombre: cerveza.name,
            Alcohol: cerveza.abv,
        }
    });
console.log("Las 10 cervezas mas alcoholicas son:");
console.log(nuevoArray);
}
cervezasMasAlcoholicas(beers, nivelBaseDeAlcohol);