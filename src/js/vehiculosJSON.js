
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
      	var html= '<div class="row">'+
				'<div class="col-md-4">'+
					'<div class="col-md-4 text-center">'+
						'<input type="radio" name="gender" value="male">'+
					'</div>'+
					'<div class="col-md-4 text-center">'+
						'<img src='+this['image']+' class="vehiculo">'+
					'</div>'+
					'<div class="col-md-4 text-center">'+
						'<p>'+this['nombre']+'</p>'+
						'<small>Maximo '+this['max']+' pasajeros</small>'+
					'</div>'+							
				'</div>'+
			'</div>';
    carList.append(html);
  	
  });
  	/****LLAMA A LA FUNCION QUE ASIGNA EL EVENTO CLICK***/
   	//asignaEventoClick();
}
function asignaEventoClick()
{
	var lis=$('.li');
	$.each(lis, function() {$(this).on('click',onLinkClick)});
}
/*******************FUNCION QUE GUARDA DATOS LOCALEMNTE CON UN CLICK*******************/
function onLinkClick(evt)
{
	select=true;
	var srcCar= $(evt.currentTarget).find('.logo').attr('src');
	var type= $(evt.currentTarget).find('.type').text();
	var name= $(evt.currentTarget).find('.name').text();
	var seats = $(evt.currentTarget).find('.seats').text();
	localStorage.setItem('srcImgCar',srcCar);
	localStorage.setItem('nameCar',name);
	localStorage.setItem('typeCar',type);
	localStorage.setItem('seat',seats);
}
/***************************FUNCION QUE VALIDA QUE SELCCIONES UN CARRO Y UN DESTINO*******************/
function setPickup()
{
	var dirInput=$('#pac-input').val();
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
	else
	{
		if(!select)
		{
			swal({
			  title: "¡Por favor, selecciona un vehículo!",
			  text: "No seleccionaste ningun vehiculo",
			  imageUrl: "img/bads.png"
			});
		}
		else
		{
			swal({ 
		  		title: "¡Por favor, selecciona un Destino!",
		  		text: "No seleccionaste ningun destino",
		  		imageUrl: "img/bads.png"
			});	
		}
	}

}
/*****************************************FIN***************************************************/




   