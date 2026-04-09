export function hoursCLick(){
   const hours =document.querySelectorAll(".hour-available")
   hours.forEach(available => {
   available.addEventListener("click", (selected) => {   

    //remove a classe hour selected de todas as classes nao selecionadas

    hours.forEach(hour => hour.classList.remove("hour-selected"))

    selected.target.classList.add("hour-selected")
   })
})
}
