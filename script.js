function mensajeenviado(){
    Swal.fire({
        title: 'Gracias!',
        text: 'Mensaje enviado',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
}

function enviarmail(){
	/**
	 * Método que envía un e-mail a través del cliente que tenga por defecto
	 * @param  {String} insTextoComp Texto que aparecerá dentro del mensaje
	 */
	function enviarCorreo(insTextoComp) {
    var name = document.getElementById('').value
    var email = document.getElementById('').value
    var asunto = document.getElementById('').value
    var mensaje = document.getElementById('').value
			var sLink = "mailto:" + escape(sEmail)
			 + "?subject=" + escape("Te han compartirdo el siguente texto")
			 + "&body=" + insTextoComp;
			window.location.href = sLink;
	}
}