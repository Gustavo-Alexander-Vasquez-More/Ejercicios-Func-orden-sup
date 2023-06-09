let propiedad= "ibu";
valor= true;
let ordenarCervezas=(beers, propiedad, valor)=>{
let nuevoArray=beers.filter(cerveza=> cerveza.hasOwnProperty(propiedad)).sort((a,b)=>{
if(valor){
return a[propiedad] - b[propiedad];}
else{
    return b[propiedad] - a[propiedad];
}
})
console.log(nuevoArray);
}
ordenarCervezas(beers, propiedad, valor)