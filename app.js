const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const content = document.querySelector(".content");


plus.addEventListener("click", function(){
    content.classList.remove("hidden");
    minus.classList.add("show");
    plus.classList.add("hidden")
});

minus.addEventListener("click", function(){
    content.classList.add("hidden");
    minus.classList.remove("show");
    plus.classList.remove("hidden")
});

