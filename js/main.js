'use strict';
const itemsContainer = document.querySelector('.items');


// const imagesArray = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const pathImages = 'img/'

const images = [
    {
        title: 'Lake Braies',
        description: 'In summer, lake Lago di Braies in South Tyrol reflects colours in all shades from green to blue, in winter Lago di Braies is covered with ice and snow. In winter and summer this jewel is the starting point for hikes, ski tours, snowshoe hikes and walks. ',
        img:'01.jpg',
    },
    {
        title: 'Lake Garda',
        description: 'The largest lake in Italy, with a mainly flat landscape behind the shoreline with some interesting history and lovely wine-producing areas.',
        img:'02.jpg',
    },
    {
        title: 'London',
        description: 'An unmissable destination for travellers, London is a melting pot of history, culture, green spaces and an international crowd that spills into every delicious corner of its cuisine.',
        img:'03.jpg',
    },
    {
        title: 'Prague',
        description: 'Prague is home to a number of well-known cultural attractions, many of which survived the violence and destruction of 20th-century Europe.',
        img:'04.jpg',
    },
    {
        title: 'Maldives',
        description: 'The Maldives is irresistible with its white beaches, turquoise sea, blue lagoons, colourful marine life and many palm trees.',
        img:'05.jpg',
    }
];


let currentSlide = 0;

let slideElement = '';
for(let i = 0; i < images.length; i++){
    const element = images[i];
    if(i === 0){
        // uso l'array di oggetti letterali per popolare il carosello
        slideElement += `
        <div class="item active">

        <img src="${pathImages}/${element.img}" alt="City ${i}" />

        <div class="content">
            <h3>${element.title}</h3>
            <p>${element.description}</p>
        </div>

        </div>`;
    }else{
        slideElement += `
        <div class="item">
        
        <img src="${pathImages}/${element.img}" alt="City ${i}" />
        <div class="content">
            <h3>${element.title}</h3>
            <p>${element.description}</p>
        </div>
        
        </div>`;
    }
}
itemsContainer.innerHTML += slideElement;

let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let start = document.getElementById('start');
let stop = document.getElementById('stop');


const domSlides = document.querySelectorAll('.item');

// Funzioni next/prev
function nextFunction(){
    domSlides[currentSlide].classList.remove('active');
    
    if (currentSlide === domSlides.length - 1){
        currentSlide = 0;
    }else{
        currentSlide++;
    }
       
    domSlides[currentSlide].classList.add('active');
}

function prevFunction(){
    domSlides[currentSlide].classList.remove('active');
    
    if (currentSlide === 0){
        currentSlide = domSlides.length - 1;
    }else{
        currentSlide--;
    }
    
    domSlides[currentSlide].classList.add('active');
}

// Click su prev e next
next.addEventListener('click', nextFunction);
prev.addEventListener('click', prevFunction);

// Funzione autoplay
// let autoplayFunction = setInterval(nextFunction, 3_000);

let autoplayFunction;
start.addEventListener('click', function(){
    console.log('start');
    autoplayFunction =  setInterval(nextFunction, 3_000);
});

stop.addEventListener('click', function(){
    console.log('stop');
    clearInterval(autoplayFunction);
})
   