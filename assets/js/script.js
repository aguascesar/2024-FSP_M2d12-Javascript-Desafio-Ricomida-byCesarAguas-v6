


$(document).ready(function(){
    
    $(".tooltip").tooltip();
    //Se muestra una alerta, mediante el evento click
    $("input").click(function(){
        alert("El correo fue enviado correctamente...");
    });
    /* Selectores de etiqueta, en evento doble click
    $("h4").dblclick(function(){
        $(this).css({
            "color": "red",
            "font-size": "2em"
            });
    });
    */
   //Selectores de etiqueta, en metodo "on", y evento doble click
    $("h4").on('dblclick', function() {
        $(this).css({
            "color": "red"
            });
    });
    //Selectores de clase, evento click
    $(".miclase").click(function(){
        alert("El correo fue enviado correctamente...");
    });
});

/*
$( function() {
    $( document ).tooltip();
  } );

  function correo() {
    alert("El correo fue enviado correctamente...");
  }

  $(function(){
    $("input[type='submit']").click(function(){
            alert("El correo fue enviado correctamente...");
        }); 
    });

    */



