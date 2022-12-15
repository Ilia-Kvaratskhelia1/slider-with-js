const slide = document.querySelector('.slidewrapper');
const menuitem = document.querySelectorAll('.menu-item');

menuitem.forEach((item , index) =>{
    item.addEventListener("click", ()=>{
        slide.style.transform = `translateX(${-100 * index}vw)`
    });
});

