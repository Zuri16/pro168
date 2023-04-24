AFRAME.registerComponent("botones", {
    init: function(){
        var butom1=document.createElement("button")
        butom1.innerHTML="Calificar"
        butom1.setAttribute("id", "resumen")
        butom1.setAttribute("class", "btn btn-warning")

        var butom2=document.createElement("button")
        butom2.innerHTML="Ordenar"
        butom2.setAttribute("id", "ordenar")
        butom2.setAttribute("class", "btn btn-warning")

        var divs = document.getElementById("buttom-div")
        divs.appendChild(butom1)
        divs.appendChild(butom2)
    }
})
