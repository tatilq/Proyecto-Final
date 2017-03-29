
var ciudades = '[{"nombre": "Arica","distance":"2059"},{"nombre": "Iquique","distance":"1789"},{"nombre": "Antofagasta","distance":"1368"},'+
				'{"nombre": "Copiapo","distance":"1567"},{"nombre": "La serena","distance":"470"},{"nombre": "Valparaiso","distance":"116"},'+
				'{"nombre": "Rancagua","distance":"84"},{"nombre": "Talca","distance":"257"},{"nombre": "Santiago","distance":"0"},'+
				'{"nombre": "Coyhaique","distance":"1888"},{"nombre": "Punta Arenas","distance":"848"},{"nombre": "Concepcion","distance":"500"},'+
				'{"nombre": "Temuco","distance":"690"},{"nombre": "Valdivia","distance":"848"},{"nombre": "Puerto Montt","distance":"1032"}]';

/**********************************FUNCION QUE SE EJECUTA CUANDO TERMINE DE CARGAR EL DOCUMENTO***********/
$(document).ready(init);
//--------------------------------------FUNCION QUE LLAMA A ASIGNA EVENTO-----------------------------------//
function init()
{	
	$('#buscar').click(validarCiudades);
	$('#btn-enviar').click(validarEnviar);
	$('.vehiculos').hide();

 	var origenList = $('#origen');
 	var destinoList = $('#destino');
    var ciudad = $.parseJSON(ciudades);
   $.each(ciudad, function() 
   {
      	var html= '<option  value='+ this['distance']+'>'+this['nombre']+'</option>';
    	origenList.append(html);
   });
   $.each(ciudad, function() 
   {
      	var html= '<option value='+ this['distance']+'>'+this['nombre']+'</option>';
		destinoList.append(html);	
   });

  $('#origen').on('change',onClickOrigen);
  $('#destino').on('change',onClickDestino);	
}

/*******************FUNCION QUE GUARDA DATOS LOCALEMNTE CON UN CLICK*******************/
function onClickOrigen()
{
	var kmOrigen= $(this).val();
	localStorage.setItem('kmOrigen',kmOrigen);
}
/*******************FUNCION QUE GUARDA DATOS LOCALEMNTE CON UN CLICK*******************/
function onClickDestino()
{
	var kmDestino= $(this).val();
	localStorage.setItem('kmDestino',kmDestino);
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
        $('.vehiculos').show();
    } 
    else {
    	 swal({
	    title: "¡Debes de seleccionar una ciudad!",
	    imageUrl: "src/img/bads.png"
		});
    }

}
 
function validarEnviar()
 {
 	var kmLitros=localStorage.getItem('consumo');
 	var kmDestino=localStorage.getItem('kmDestino');
 	var kmOrigen=localStorage.getItem('kmOrigen');
 	var pasajero=localStorage.getItem('pasajero');
 	var ruta=localStorage.getItem('ruta');
 
 	var costo=(-1*((((kmDestino-kmOrigen)*kmLitros))/pasajero));

 	swal({
	    title: "¡El costo es ! "+costo,
	    imageUrl: ruta
		});
   
   
 }

