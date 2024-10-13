let HTMLTag = document.querySelector("html")



// dark mode

let darkModeBtn = document.getElementById("darkmode")
let darkModeBtn2 = document.getElementById("darkmode-2")
let darkMode = true


darkModeBtn.addEventListener("click", function() {
    if (darkMode === false){
        HTMLTag.classList.add("dark")
        darkMode = true
    } else {
        HTMLTag.classList.remove("dark")
        darkMode = false
    }
})
darkModeBtn2.addEventListener("click", function() {
    if (darkMode === false){
        HTMLTag.classList.add("dark")
        darkMode = true
    } else {
        HTMLTag.classList.remove("dark")
        darkMode = false
    }
})

// shop max width 768px

let liShopItem = document.getElementById("shop-md")
let liShopBoolian = false



liShopItem.addEventListener("click", function () {
    if(liShopBoolian){
        liShopItem.nextElementSibling.classList.add("hidden")
        liShopItem.nextElementSibling.classList.add("opacity-0")
        liShopBoolian = false
    } else {
        liShopItem.nextElementSibling.classList.remove("hidden")
        liShopItem.nextElementSibling.classList.remove("opacity-0")
        liShopBoolian = true
    }
})

//  right nav in mobile

let bar3 = document.getElementById("div-bar-3")
let xMarkMenu = document.getElementById("x-mark-click")
let menuState = false // hidden


bar3.addEventListener("click", function () {
    bar3.nextElementSibling.classList.remove("right-[-512px]")
    bar3.nextElementSibling.classList.add("right-0")
})

xMarkMenu.addEventListener("click", function() {
    bar3.nextElementSibling.classList.add("right-[-512px]")
    bar3.nextElementSibling.classList.remove("right-0")
})


// basket in mobile

let mobileBasket = document.getElementById("basket-div")
let basketXMark = document.getElementById("basket-x-mark")

mobileBasket.addEventListener("click", function() {
    mobileBasket.nextElementSibling.classList.remove("left-[-512px]")
    mobileBasket.nextElementSibling.classList.add("left-0")
})
basketXMark.addEventListener("click", function() {
    mobileBasket.nextElementSibling.classList.remove("left-0")
    mobileBasket.nextElementSibling.classList.add("left-[-512px]")
})



