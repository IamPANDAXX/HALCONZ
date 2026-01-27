window.addEventListener("load",() => {
    const loader = document.getElementById("loader");
    
    setTimeout(() =>{
        loader.classList.add("hide");
        loader.style.filter = "blur(5px)";
    }, 3000);
});