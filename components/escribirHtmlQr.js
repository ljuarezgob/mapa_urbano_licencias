 // Obtener los parámetros de la URL
 const urlParams = new URLSearchParams(window.location.search);
 var longitud = urlParams.get('longitud');
 var latitud  = urlParams.get('latitud');
 var impactogiro = urlParams.get('impactogiro');
 var factibilidaduso = urlParams.get('factibilidaduso');
 var girosolicitado = urlParams.get('selectbusqueda');
 let areaPredio = urlParams.get('areapredio');


 let giroSolicitado2 =  urlParams.get('selectbusqueda2');
 let areaPredio2 = urlParams.get('areapredio2');
 var impactogiro2 = urlParams.get('impactogiro2');
 var factibilidaduso2 = urlParams.get('factibilidaduso2');

 var x = urlParams.get('x');
 var y  = urlParams.get('y');
 var urlqr = 'http://10.10.23.178/geomatica/pruebas/mapa_urbano_licencias/?latitud='+latitud+'&longitud='+longitud;

//  console.log(giroSolicitado2);
//  console.log(areaPredio2);
//  console.log(impactogiro2);
//  console.log(factibilidaduso2);
//  console.log("URL del QR:", urlqr);

 

// Función para generar el código QR
function generarQRCode(url) {
 return new Promise((resolve, reject) => {
     var qrcodeContainer = document.createElement("div");  // Crear un contenedor temporal para el QR
     new QRCode(qrcodeContainer, {
         text: url,
         width: 128,  // Tamaño del QR
         height: 128,
         render: 'image'  // Generar como imagen
     });

     // Usamos un setTimeout para esperar un momento a que la imagen sea generada
     setTimeout(() => {
         var qrImage = qrcodeContainer.querySelector("img");  // Buscar la etiqueta <img> dentro del contenedor temporal
         if (qrImage) {
             resolve(qrImage.src);  // Devolver la URL de la imagen (base64)
         } else {
             reject("Error al generar el QR.");
         }
     }, 100);  // Esperar 100ms antes de intentar obtener la imagen
 });
}

// Generar el QR y asignarlo a la imagen en el HTML
generarQRCode(urlqr)
 .then(imagendelqr => {
     // Asignar la imagen generada al src del <img>
     document.getElementById('image-result2').src = imagendelqr;
     console.log("QR generado y asignado correctamente.");
 })
 .catch(error => {
     console.error("Error:", error);
 });








 // Asignar los valores a los elementos
 document.getElementById('longitud-result').textContent = urlParams.get('longitud') ;
 document.getElementById('latitud-result').textContent = urlParams.get('latitud') ;
 document.getElementById('x-result').textContent = urlParams.get('x') ;
 document.getElementById('y-result').textContent = urlParams.get('y') ;

 document.getElementById('planparcial-result').textContent = urlParams.get('planparcial');
 document.getElementById('usosuelo-result').textContent = urlParams.get('claveusosuelo') + ' ' + urlParams.get('usosuelo');
// document.getElementById('entorno-result').textContent = urlParams.get('entorno');
 document.getElementById('image-result').src = urlParams.get('urlimagen');

 // Asignar el valor de impacto de giro
 document.getElementById('impactogiro-result').textContent = impactogiro;
 document.getElementById('factibilidaduso-result').textContent = factibilidaduso;
 document.getElementById('girosolicitado').textContent = girosolicitado;
 document.getElementById('superficiem2-result').textContent = areaPredio;



 document.getElementById('girosolicitado2').textContent = giroSolicitado2;
 document.getElementById('superficiem2-result2').textContent = areaPredio; //se toma el m2 del mismo preio
 document.getElementById('impactogiro-result2').textContent = impactogiro2;
 document.getElementById('factibilidaduso-result2').textContent = factibilidaduso2;