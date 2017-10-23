//Definir la función que nos quitara
var removerDuplicados = function (molde){
  var arregloNuevo =[];
  for (var i = 0; i < molde.length; i++) {
    if (arregloNuevo.indexOf(molde[i])=== -1){
    console.log("no esta el número " + molde [i]);
    console.log(molde[i]);
    arregloNuevo.push(molde[i]);
    }
  }
  return arregloNuevo;
}

var enviararreglo = [4,7,9,4,0,7];
document.write(removerDuplicados(enviararreglo));
