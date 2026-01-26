const conti = document.querySelector(".conti")
const login = document.querySelector(".login")
const app = document.querySelector(".app")

conti.addEventListener("click",function(){
    login.classList.toggle("hidden");
    app.classList.toggle("hidden");
})