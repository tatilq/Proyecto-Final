
var ciudades = '[{"nombre": "arica","distance":"2059"},{"nombre": "iquique","distance":"1789"},{"nombre": "antofagasta","distance":"1368"},'+
				'{"nombre": "copiapo","distance":"1567"},{"nombre": "La serena","distance":"470"},{"nombre": "Valparaiso","distance":"116"},'+
				'{"nombre": "rancagua","distance":"84"},{"nombre": "talca","distance":"257"},{"nombre": "santiago","distance":"0"},'+
				'{"nombre": "coyhaique","distance":"1888"},{"nombre": "Punta Arenas","distance":"848"},{"nombre": "concepcion","distance":"500"},'+
				'{"nombre": "temuco","distance":"690"},{"nombre": "valdivia","distance":"848"},{"nombre": "Puerto Montt","distance":"1032"}]';

/**********************************FUNCION QUE SE EJECUTA CUANDO TERMINE DE CARGAR EL DOCUMENTO***********/
$(document).ready(init);
//--------------------------------------FUNCION QUE LLAMA A ASIGNA EVENTO-----------------------------------//
function init()
{	
	$('#btn-select').click(validarCiudades);
 	var origenList = $('#origen');
 	var destinoList = $('#destino');
    var ciudad = $.parseJSON(ciudades);
   $.each(ciudad, function() 
   {
      	var html= '<option class==".distanciaO" value='+ this['distance']+'>'+this['nombre']+'</option>';

    origenList.append(html);
  	
  });
   $.each(ciudad, function() 
   {
      	var html= '<option class==".distanciaD" value='+ this['distance']+'>'+this['nombre']+'</option>';

    destinoList.append(html);
  	
  });

   //asignaEventoClickOrigen();
  	
}
function asignaEventoClickOrigen()
{
	var opcionOrigen=$('.distanciaO');
	//console.log(opcionOrigen);
	for(var i in opcionOrigen)
	{
		$(this).on('click',onLinkClickOrigen);
	}
	//$.each(opcionOrigen, function() {$(this).on('click',onLinkClickOrigen)});
}
/*******************FUNCION QUE GUARDA DATOS LOCALEMNTE CON UN CLICK*******************/
function onLinkClickOrigen(evt)
{
	/*var srcCar= $(evt.currentTarget).find('.logo').attr('src');*/
	var origenDistancia= $(evt.currentTarget).val();
	//localStorage.setItem('origenKm',origenDistancia);
	console.log(origenDistancia);

}
function asignaEventoClickDestino()
{
	var opcionDestino=$('.opcionDestino');
	$.each(opcionDestino, function() {$(this).on('click',onLinkClickDestino)});
}

/*******************FUNCION QUE GUARDA DATOS LOCALEMNTE CON UN CLICK*******************/
function onLinkClickDestino(evt)
{
	/*var srcCar= $(evt.currentTarget).find('.logo').attr('src');*/
	var destinoDistancia= $(this).find('.span').text();
	localStorage.setItem('destinoKm',destinoDistancia);

}
/***************************FUNCION QUE VALIDA QUE SELCCIONES UN CARRO Y UN DESTINO*******************/
function validarCiudades()
{
	

	    //Se verifica si la opcion del select esta vacia
	    if ($('#origen').val() != '' && $('#destino').val() != '') 
	    {
	    	swal({
		    title: "¡Se selecciono exitosamente!",
		    imageUrl: "src/img/goods.png"
			});
	       
	    } 
	    else {
	    	 swal({
		    title: "¡Debes de seleccionar una ciudad!",
		    imageUrl: "src/img/bads.png"
			});
	    }

}
 

	/*var dirInput=$('#pac-input').val();
	if(dirInput.length>0 && select)
	{
		swal({
		    title: "¡Se selecciono exitosamente!",
		    text: "Vehiculo destino: " + localStorage.getItem('nameCar').toUpperCase()+",  Destino: "+localStorage.getItem('direccion'),
		    imageUrl: "img/goods.png"
		},function(isConfirm){
	      	if (isConfirm)
	      	{
	        	setTimeout(function(){window.location="app_1.html";}, 50);
	        } 
		});
	}
	*/