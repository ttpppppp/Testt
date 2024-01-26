let up = document.querySelector(".up");
let listLi = document.querySelectorAll(".item");
document.addEventListener('scroll' , function(){
    if(scrollY > 50){
        up.classList.add("up-animation");
    }else{
        up.classList.remove("up-animation");
    }
})
listLi.forEach(item => {
    item.addEventListener('click', function() {
        listLi.forEach(otherItem => {
            otherItem.classList.remove("active");
        });
        item.classList.add("active");
    });
});
