function imgSlider(img){
    const image = document.querySelector('#imgg');
    image.src = `../IMAGES/${img}`;   

}

function changeColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}