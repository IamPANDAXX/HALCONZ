const minimenu = document.getElementById("mmbutton");

//click boton toggle
minimenu.addEventListener("click", (e) =>{
    minimenu.classList.toggle("expandido");

});

//click fuera del menu e target
document.addEventListener("click", (e) =>{
    if(!minimenu.contains(e.target)){
        minimenu.classList.remove("expandido");
    }
});
