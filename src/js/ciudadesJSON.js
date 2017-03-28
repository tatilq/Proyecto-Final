
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
	$('#btn-enviar').click(validarEnviar);
	
	$('#info').hide();
 	var origenList = $('#origen');
 	var destinoList = $('#destino');
    var ciudad = $.parseJSON(ciudades);
   $.each(ciudad, function() 
   {
      	var html= '<option class=".origenes" value='+ this['distance']+'>'+this['nombre']+'</option>';
    	origenList.append(html);
   });
   $.each(ciudad, function() 
   {
      	var html= '<option class=".destinos" value='+ this['distance']+'>'+this['nombre']+'</option>';
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
       $('#info').show();
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