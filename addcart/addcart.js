const increase = document.querySelector("#incre");
const decrease = document.querySelector("#decre");
const updatenum = document.querySelector("#Updates");

let updatenu = 0; // Use let to allow the value to be updated

increase.addEventListener("click", () => {
    updatenu++; // Increment the variable
    updatenum.textContent = `${updatenu}`; // Update the text content with the new value
});

decrease.addEventListener("click", () => {
   
   if(updatenu == 1 || updatenu >=1){ updatenu--; // Decrement the variable
    updatenum.textContent = ` ${updatenu}`;
}else{
     updatenum.textContent = "0";
    } // Update the text content with the new value
});
