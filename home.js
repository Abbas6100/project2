const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-Btn')];
const preBtn = [...document.querySelectorAll('.pre-Btn')];

productContainers.forEach((item,i) => {
    let containerDimenstion = item.getBoundingClientRect();
    let containerWidh = containerDimenstion.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidh;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidh;
    })
})