const scrollDisplay = document.getElementById('imgScroll');
const displayImg = document.getElementById('imgMain');


const images = [
'assets/got1.jpg',
'assets/got2.jpeg',
'assets/got3.jpg',
'assets/got4.webp',
'assets/got5.jpg'
];


for (let i = 0; i < images.length; i++) {
  const newImg = document.createElement('img');
  newImg.src = images[i];
  newImg.alt = 'got' + (i + 1);

 
  newImg.addEventListener('click',() => {
    displayImg.src = newImg.src;
    displayImg.alt = newImg.alt;
  });

  scrollDisplay.appendChild(newImg);
}