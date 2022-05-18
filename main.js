
let x = document.getElementById("features"),
    y = document.getElementById("company"),
    angleDown = document.getElementById("angle-down"),
    icon2 = document.getElementById("angle-down2"),
    menu1 = document.getElementById("menu1"),
    menu2 = document.getElementById("menu2"),
    menuBtn=document.getElementById("menu-btn"),
    navbarList=document.getElementById("navbar-list")
    signUp=document.getElementById("signup")
    closeMenuBtn=document.getElementById("close-menu-btn");

menuBtn.addEventListener("click",()=>{
    // alert("hamburger clicked")
  
  closeMenuBtn.classList.add("active")
  menuBtn.classList.add("active")
  navbarList.classList.add("active")
  signUp.classList.add("active")
  
  closeMenuBtn.addEventListener("click",()=>{
      menuBtn.classList.remove("active")
      closeMenuBtn.classList.remove("active")
      navbarList.classList.remove("active")
      signUp.classList.remove("active")
  })

})

y.addEventListener("click", () => {
    // console.log("y is clicked")
    icon2.classList.toggle("active")
    menu2.classList.toggle("active")



})
x.addEventListener("click", () => {
    // console.log("x is clicked")

    angleDown.classList.toggle("active")
    menu1.classList.toggle("active")

})
