const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombres').value;
        let apellido = document.getElementById('apellidos').value;
        let mensaje = document.getElementById('mensaje').value;
        let numero= 50587427199;
var win= window.open(`https://wa.me/${numero}?text=Hola%20vengo%20de%20*FitLife*!%0D%0A%0D%0A*Pedido:*%0D%0A-%20Ensalada%20Cesar%20de%20la%20casa%20(C$%20220)%0D%0A%0D%0A*Nombre:*%0D%0A-%20${nombre}%20${apellido}.%0D%0A%0D%0A*Dirección de entrega:*%0D%0A-%20${mensaje}%0D%0A%0D%0A*Envía este mensaje para crear tu pedido.*`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)