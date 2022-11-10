const gifts = ["Spider-man toy", "peppa pig", "bluey towel", "flowers"]

function showGifts(event){

    const unorderedList = event.target.parentNode.children[1]

    gifts.map(eachGift => {
        const listItem = document.createElement("li")
        listItem.innerHTML = eachGift
        unorderedList.appendChild(listItem)
    })

    // for (let i = 0; i < gifts.length; i++){
    //     let listItem = document.createElement("li")
    //     listItem.innerHTML = gifts[i]
    //     unorderedList.appendChild(listItem)
    // }
}
