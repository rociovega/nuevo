$(document).ready(function(){
    
    $(".claves").css("border-color","blue");
    
    $("#aceptar").click(function(){
       
        var clave1=$("#clave1").val();
        var clave2=$("#clave2").val();
        var validaClave=/^(?=.{6,}$)(?=.*?[A-Z]).*$/;
        var mensaje="";
        
        if(clave1==""){
            mensaje="Ingrese la clave";
            $("#clave1").css("border-color","red");
		$("#errorClave1").css("color","red");
            $("#errorClave1").html(mensaje);
            return false;
        } else if(!validaClave.test(clave1)) {
            mensaje="La clave debe tener al menos seis caracteres, entre ellos una mayúscula";
            $("#clave1").css("border-color","red");
            $("#errorClave1").html(mensaje);
            return false;
        }
        else {
           $("#clave1").css("border-color","blue");
            mensaje="";
            $("#errorClave1").html(mensaje);
        }
            
        if(clave2==""){
            mensaje="Reingrese la clave";
            $("#clave2").css("border-color","red");
            $("#errorClave2").html(mensaje);
            return false;
        } else if(clave1!=clave2){
            mensaje="La clave reingresada no coincide con la ingresada anteriormente";
            $("#clave2").css("border-color","red");
            $("#errorClave2").html(mensaje);
            return false;
        }
        else {
            $("#clave2").css("border-color","blue");
            mensaje="";
            $("#errorClave2").html(mensaje);
        }
        
        if(clave1==clave2){
            $(".claves").css("border-color","blue");
            alert("Formulario completo");
        }
   //     else {
     //       $(".claves").css("border-color","red");
       // }
        
        
    });
    
});
