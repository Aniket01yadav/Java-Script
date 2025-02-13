const changeColor = document.getElementById("changeColor");
changeColor.addEventListener("click",()=>{
    const randomValues = "0123456789ABCDEF";
    let color ="";
    for(let i=0;i<6;i++){
        const randomIndex = Math.floor(Math.random()*randomValues.length);
        color+=randomValues[randomIndex]; 
    }
    // console.log(color);
    document.body.style.backgroundColor = `#${color}`
})