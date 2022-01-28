console.log(document.getElementsByClassName("burger")[0])
const burger = document.getElementsByClassName("burger")[0]

burger.addEventListener('click', function () {
    // alert('burger clicked')
    const menuLayer = document.getElementsByClassName("menu-layer")[0]
    console.log(menuLayer)
    menuLayer.style.transition = "0.8s ease-in"

    menuLayer.style.width = "80%"
    menuLayer.style.position = "absolute"
    menuLayer.style.display = "revert"
})

const closeMenuButton = document.getElementById("close-menu")
closeMenuButton.addEventListener('click', function () {
    const menuLayer = document.getElementsByClassName("menu-layer")[0]
    menuLayer.style.width = "0px"
    // alert('close me')

})