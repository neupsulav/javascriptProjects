let btnLeft = document.getElementById('btn-left')
let btnRight = document.getElementById('btn-right')
let slider = document.getElementById('slider')
let imgArray = ['1', '2', '3']

let count = 0

// function for automatic slider 
const sliderCarousel = () => {
    setInterval(() => {
        count++
        if (count == imgArray.length) {
            count = 0
        }
        slider.style.background = `url('images/${imgArray[count]}.jpg') center/cover no-repeat fixed`
        slider.style.transition = '2s'
    }, 3000);
}

sliderCarousel()

// functions for manually changing the images 
btnLeft.addEventListener('click', () => {
    count--
    if (count < 0) {
        count = imgArray.length - 1
    }
    slider.style.background = `url('images/${imgArray[count]}.jpg') center/cover no-repeat fixed`


})

btnRight.addEventListener('click', () => {
    count++
    if (count == imgArray.length) {
        count = 0
    }
    slider.style.background = `url('images/${imgArray[count]}.jpg') center/cover no-repeat fixed`


})