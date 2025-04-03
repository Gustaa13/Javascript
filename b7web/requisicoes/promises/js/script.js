function pegarTemperatura() {
    return new Promise(function(resolve, reject){
        console.log("pegando temperatura...");

        setTimeout(function(){
            resolve('32 graus celsius');
        }, 2000);
    });
} 

console.log("Antes");

let temperatura = pegarTemperatura();

console.log("Durante");

temperatura.then(function(resultado){
    console.log("Temperatura: " + resultado);
});
temperatura.catch(function(error){
    console.log("Houve um erro!");
})

console.log("Depois");
