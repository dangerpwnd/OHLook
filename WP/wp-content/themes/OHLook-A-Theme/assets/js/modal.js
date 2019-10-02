//variables
const closeB = document.querySelectorAll(".closeButton");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const mClick = document.querySelectorAll(".modalClick");

// Event Listeners

mClick.forEach(function(button){
    button.addEventListener("click", function toggleModal(){
        if(this.classList.contains("mClick1")){
            modal1.classList.toggle("showModal");
        }
        else if(this.classList.contains("mClick2")){
            modal2.classList.toggle("showModal");
        }
        else{
            console.log("Modal not working");
        }
});
})

closeB.forEach(function(close){
    close.addEventListener("click", function toggleModal(){
        if(modal1.classList.contains("showModal")){
            modal1.classList.toggle("showModal");
        }
        else if(modal2.classList.contains("showModal")){
            modal2.classList.toggle("showModal");
        }
        else{
            console.log("Close button not working");
        }
});
})

document.addEventListener("click", function toggleModal(event){
    if(event.target.matches(".showModal")){
        console.log(event.target);
        (event.target).classList.remove('showModal');
    }
});
