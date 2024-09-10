// const scroll = new LocomotiveScroll({
//     el: document.querySelector('body'),
//     smooth: true
// });
 var elem=document.querySelector('.elem-container');
 var fix=document.querySelector('.fixed-image');
    elem.addEventListener("mouseenter",()=>{
        fix.style.display="block"
    });
    elem.addEventListener("mouseleave",()=>{
        fix.style.display="none"
    });
   var elems=document.querySelectorAll(".elem")
    elems.forEach(e => {
        e.addEventListener("mouseenter",()=>{
            var image=e.getAttribute("data-image")
            fix.style.backgroundImage=`url(${image})`
        })
    });
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 100,
      });
      var menu=document.querySelector("nav h3")
      var full=document.querySelector(".full-src")
      var naving=document.querySelector("nav img")
      var flag=0
      menu.addEventListener("click",()=>{
        if(flag==0){
            full.style.top=0
            naving.style.opacity=0;
            flag=1
        }
        else{
            full.style.top="-100%"
            naving.style.opacity=1;
            flag=0
        }
      })
      var loader=document.querySelector(".loader")
      setTimeout(()=>{
        loader.style.top="-100%"
        loader.style.transition="all ease 1s"
      },4000)
     