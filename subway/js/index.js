'use strict';
const gallery = document.querySelector('.gallery');
const galleryUl = gallery.querySelector('ul');
const galleryUlLi = galleryUl.querySelectorAll('li');

const items = document.querySelector('.items');
const itemsUl = items.querySelector('ul');
const itemsUlLi = itemsUl.querySelectorAll('li');

const centerBtn = document.querySelector('.center-btn');
const Arrows = centerBtn.querySelectorAll('span.arrow');



const arrBg = [];

// section1 Gallery
for (let i = 0; i < galleryUlLi.length; i++) {
    arrBg.push(`url(img/sec1_${i}.jpg) no-repeat 50%/cover`)
    galleryUlLi[i].style.background = arrBg[i];
}

function autoGo(num){
    let gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;
    let goto = (-gap * i) + 'px';
    gallery.style.left = goto;
    gallery.style.transition = 'all 0.3s';
}
function autoAdd(num){
    itemsUlLi.forEach((el, idx) => {
        if (idx === i) {
            el.classList.add('on');
        } else {
            el.classList.remove('on')
        }
    });
}


let i = -1;

function autogallery() {
    // autogallery
    i++;

    autoGo(i);

    autoAdd(i);

    if(i>=galleryUlLi.length-1) i=-1;
}

let setIn = setInterval(autogallery, 5000);

centerBtn.addEventListener('mouseover', (e) => {
    const eTarget = e.target;
    Arrows.forEach(el => {
        if (el === eTarget) {
            clearInterval(setIn);
        }
    })
});
centerBtn.addEventListener('mouseout', (e) => {
    const eTarget = e.target;
    Arrows.forEach(el => {
        if (el === eTarget) {
            setIn = setInterval(autogallery, 5000);
        }
    })
});
itemsUl.addEventListener('mouseover', (e) => {
    const eTarget = e.target;
    itemsUlLi.forEach(el => {
        if (el === eTarget) {
            clearInterval(setIn);
        }
    })
});
itemsUl.addEventListener('mouseout', (e) => {
    const eTarget = e.target;
    itemsUlLi.forEach(el => {
        if (el === eTarget) {
            setIn = setInterval(autogallery, 5000);
        }
    })
});

centerBtn.addEventListener('click',(e)=>{
    const eTarget=e.target;
    Arrows.forEach((el,idx)=>{
        if(el==eTarget){
            if(idx==0){
                if(i<=0) i=galleryUlLi.length;
                i--;
                autoGo(i);
                autoAdd(i);
            }else if(idx==1){
                if(i>=galleryUlLi.length-1) i=-1
                i++;
                autoGo(i);
                autoAdd(i);
            }
        }
    });
});

itemsUl.addEventListener('click',(e)=>{
    const eTarget=e.target;
    itemsUlLi.forEach((el,idx)=>{
        if(el==eTarget){
            i=idx;
            autoGo(i);
            el.classList.add('on');
        }else{
            el.classList.remove('on');
        }
    });
});

(() => {
    autogallery();
})();

// section3 Event

const spanLeftBtn=document.querySelector('span.left-Arrow');
const spanRightBtn=document.querySelector('span.right-Arrow');
const bannerEventCon=document.querySelector('.banner-eventCon');
const bannerEventConUl=bannerEventCon.querySelector('ul');
const bannerEventConUlLi=bannerEventConUl.querySelectorAll('li');


spanLeftBtn.addEventListener('click',()=>{

    const firstLi=bannerEventConUl.firstElementChild;
    bannerEventConUl.appendChild(firstLi);
    bannerEventCon.style.transition-'all 0.3s';
});
spanRightBtn.addEventListener('click',()=>{

    const lastLi=bannerEventConUl.lastElementChild;
    bannerEventConUl.prepend(lastLi);
    bannerEventCon.style.transition-'all 0.3s';
});