var misProductos = [];
var currency = [];

fetch("https://jsonblob.com/api/jsonBlob/1294298279851188224")
   .then(response => response.json())
   .then(catalogo => {
    cargarCarrito(catalogo);
    }); 

document.addEventListener('DOMContentLoaded', function(event){
    misProductos.forEach(product => {
      
    });
})