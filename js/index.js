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
    let nowScroll = window.pageYOffset;
    for (let i = 0; i < section_section.length; i++) {
        let secStart = section_section[i].offsetTop;
        let secEnd = section_section[i].scrollHeight + section_section[i].offsetTop;
        
        if (nowScroll > secStart && nowScroll < secEnd) {
            let goTo = section_section[i].dataset.link;
            navLink_a.forEach(navLink_a => {
                if (navLink_a.attributes.href.value == goTo ) {
                    //navWrapper_div.scrollLeft = navLink_a.parentElement.offsetLeft; 
                    navLink_a.parentElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    identifier_div.style.left = navLink_a.parentElement.offsetLeft + 'px'; 
                }
            })
        } else {
            continue;
        }
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//navWrapper_div.scrollLeft = item.offsetLeft;
 