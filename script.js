let shoppingList =["Milk","Butter"];

function addItem(){ 
    let item = document.querySelector("input").value;
    shoppingList.push(item);
}
function showItem(){
    let listEl = document.querySelector("ul");
    listEl.innerHTML="";
    for (let i = 0; i < shoppingList.length; i++){
        listEl.innerHTML+= "<li>" + shoppingList[i] + "</li>";
    }

}