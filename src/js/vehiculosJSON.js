
var cars = '[{"nombre": "Auto","max":"5", "consumo":"12", "image":"src/img/auto.jpg"},'+
	'{"nombre": "Moto","max":"2", "consumo":"21", "image":"src/img/moto.jpg"},'+
	'{"nombre": "Mini Van","max":"8", "consumo":"7", "image":"src/img/van.jpg"},'+
	'{"nombre": "Camión","max":"3", "consumo":"6", "image":"src/img/camion.jpg"}]';

/**********************************FUNCION QUE SE EJECUTA CUANDO TERMINE DE CARGAR EL DOCUMENTO***********/
$(document).ready(init);
//--------------------------------------FUNCION QUE LLAMA A ASIGNA EVENTO-----------------------------------//
function init()
{	
 	var carList = $('#list_carros');
    var carros = $.parseJSON(cars);
   $.each(carros, function() 
   {
      	var html =  '<li class="row lis">'+
		   		 		'<div class="radio col-xs-1 text-center">'+
		   		 			'<label><input id="radio2" type="radio" name="optradio" value="2"></label>'+
		   		 		'</div>'+
		   		 		'<div class="col-xs-2"><img src='+ this['image']+' alt="" class="img-responsive car "></div>'+
		   		 			'<div class="col-xs-6"><strong>'+this['nombre']+'</strong> <br> <span>Máximo </span><span style="font-size: 10px" class="pasajero">'+this['max']+'</span><span> pasajeros</span>'+
		   		 			'<span style="display:none;" class="litros">'+this['consumo']+'</span>'+
		   		 			'</div>'+
		   		 		'<div class="precioCa col-xs-2 text-center">'+
		   		 			'<p id="precioTotal">$<p>'+
		   		 		'</div>'+
			   		'</li>';
    	carList.append(html);
  	
  });

	$('.lis').on('click',onLinkClick);

}
/*******************FUNCION QUE GUARDA DATOS LOCALEMNTE CON UN CLICK*******************/
function onLinkClick()
{
	var consumo= $(this).find('.litros').text();
	var ruta= $(this).find('.car').attr('src');
	var pasajero=$(this).find('.pasajero').text();
	localStorage.setItem('consumo',consumo);
	localStorage.setItem('pasajero',pasajero);
	localStorage.setItem('ruta',ruta);

}

   