
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
      	var html= '<li class="lis"><input type="radio" name="gender" class="radio" value="male" checked>'+
      		'<img src='+this['image']+' class="vehiculo" ><small>'+this['nombre']+'</small> '+
      		'<span class="litros" >'+this['consumo']+'</span></li>';

    carList.append(html);
  	
  });
		$('.lis').on('click',onLinkClick);

}
/*******************FUNCION QUE GUARDA DATOS LOCALEMNTE CON UN CLICK*******************/
function onLinkClick()
{
	var consumo= $(this).find('.litros').text();
	localStorage.setItem('consumo',consumo);
}

   