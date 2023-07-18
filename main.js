const sum = document.querySelector('#button-add')
const subt = document.querySelector('#button-subtract')
let pValue = document.querySelector('#counter') 

sum.addEventListener('click', sumCounter)
subt.addEventListener('click', subtCounter )

let portion =  +pValue.textContent  
function sumCounter() {      
    portion++ 
    pValue.textContent = portion.toString().padStart(2, 0)
}
function subtCounter() {
    if(portion < 2) {
        } else {
        portion--
        pValue.textContent = portion.toString().padStart(2 ,0)
    }
}