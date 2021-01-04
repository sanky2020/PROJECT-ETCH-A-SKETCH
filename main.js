const grid = document.querySelector(".container");
let size =0;
//function to load a 16X16 grid initially when the page opens. 
initialGrid = () => {
    for(let j=1; j<=256; j++){
        const div = document.createElement("div");
        div.classList.add("initial");
        grid.appendChild(div);
        grid.style.setProperty("grid-template-columns",`repeat(16,1fr)`);
        grid.style.setProperty("grid-template-rows",`repeat(16,1fr)`);    
    }
}
//function to generate new grid after taking user input via prompt after doing reset
newgrid = () =>{
    grid.innerHTML="";
    grid.style.setProperty("grid-template-columns",`repeat(${size},1fr)`);
    grid.style.setProperty("grid-template-rows",`repeat(${size},1fr)`);

    if (size<=100){

        for(let i=0;i<=size*size;i++){
        const div =document.createElement("div");
        div.classList.add("initial");
        grid.appendChild(div);
    }console.log(size);
    }

    else{
        alert("Value Entered for Grid size is more than 100 kindly enter any decimal value ranging between 1 to 100.");
        initialGrid();
    }
};

reset.addEventListener("click", function(){
    size = prompt("Enter the new Grid Size. Kindly note max grid size is 100X100");
    newgrid();
});

grey.addEventListener("click", function(){
    grid.addEventListener("mouseover",function(event){
        event.target.style.backgroundColor = "grey";
    })  
});

black.addEventListener("click", function(){
    grid.addEventListener("mouseover",function(event){
        event.target.style.backgroundColor = "black";
    })  
});

//function to generate random Color
    function randomcolor(){
        let multiColor = "#"+Math.floor(Math.random()*16777215).toString(16);
        return multiColor;
    };

multicolor.addEventListener("click",function(){
    grid.addEventListener("mouseover",function(event){
        event.target.style.backgroundColor = randomcolor();
    })
})
initialGrid();
