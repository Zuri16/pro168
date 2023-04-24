AFRAME.registerComponent("marker-handler",{
    init: async function(){
        this.el.addEventListener("markerFound", ()=>{
            console.log("se encontro el marcador")
            this.hadleMarkerFound()
        })
        this.el.addEventListener("markerLost", ()=>{
            console.log("se perdio el marcador")
            this.handleMarkerLost()
        })
    },
    hadleMarkerFound: function(){
        var buttonDiv=document.getElementById("buttom-div")
        buttonDiv.style.display="flex"
        var buttonOrder=document.getElementById("ordenar")
        var buttonCalif=document.getElementById("resumen")
        buttonOrder.addEventListener("click", function(){
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Gracias por tu orden",
                text:"Recibiras tu juguete pronto"
            })
        })
        buttonCalif.addEventListener("click", function(){
            swal({
                icon:"warning",
                title:"Calificar juguete",
                text:"Procesando calificacion"
            })
        })
    },
    handleMarkerLost: function(){
        var butonDiv=document.getElementById("buttom-div")
        butonDiv.style.display="none"
    }
})