let nav_nav = document.querySelector('nav');
let navWrapper_div = document.querySelector('.nav_wrapper');
let navList_ul = document.querySelector('.nav_list');
let navItem_li = document.querySelectorAll('.nav_item');
let navLink_a = document.querySelectorAll('.nav_link');
let section_section = document.querySelectorAll('.content_section');
let identifier_div = document.querySelector('.nav_identifier');
//console.log(identifier_div)
navItem_li.forEach( thisNavItem_li =>{
    thisNavItem_li.addEventListener('click' , ()=>{
        identifier_div.style.left = thisNavItem_li.offsetLeft + 'px';
    });
});
window.addEventListener('scroll', function(){
    setTimeout(function(){
    let nowScroll = window.pageYOffset;
    for (let i = 0; i < section_section.length; i++) {
        let secStart = section_section[i].offsetTop;
        let secEnd = section_section[i].scrollHeight + section_section[i].offsetTop;
        
        if (nowScroll > secStart && nowScroll < secEnd) {
            let goTo = section_section[i].dataset.link;
            navLink_a.forEach(navLink_a => {
                if (navLink_a.attributes.href.value == goTo ) {
                    
                    navWrapper_div.scrollTo({
                        top: 0,
                        left: navLink_a.parentElement.offsetLeft,
                        behavior: 'smooth'
                      }); 
                    identifier_div.style.left = navLink_a.parentElement.offsetLeft + 'px'; 
                }
            })
        } else {
            continue;
        }
    }
}, 10);
});
function SmoothHorizontalScrolling(e, time, amount, start) {
    var eAmt = amount / 100;
    var curTime = 0;
    var scrollCounter = 0;
    while (curTime <= time) {
        window.setTimeout(SHS_B, curTime, e, scrollCounter, eAmt, start);
        curTime += time / 100;
        scrollCounter++;
    }
}

function SHS_B(e, sc, eAmt, start) {
    e.scrollLeft = (eAmt * sc) + start;
}
SmoothHorizontalScrolling(navWrapper_div, 275, "right");
//navWrapper_div.scrollLeft = item.offsetLeft;
 
