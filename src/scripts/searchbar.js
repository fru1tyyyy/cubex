window.searchGames = function(){
    const input = document.getElementById("searchInput");
    const filter = input.value.toUpperCase();
    const items = document.getElementsByClassName("deal-item");

    for(let i = 0; i < items.length; i++){
        const itemText = items[i].innerText.toUpperCase();
        if(itemText.indexOf(filter) > -1){
            items[i].style.display = "";
        }
        else{
            items[i].style.display = 'none';
        }
    }
};
