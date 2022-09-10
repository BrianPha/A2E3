function filterCategory(){
    let recipecards = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    //console.log(recipecards)
    for(let listItem of recipecards){
       // console.log(listItem.dataset.author)
       if(listItem.dataset.author === filterselection){
        listItem.style.display = "flex";
        } else {
            listItem.style.display = "none";
        }
    }
}

