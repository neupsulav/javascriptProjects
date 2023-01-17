let customerImg = document.getElementById('customerImg')
let customerName = document.getElementById('customerName')
let customerTestimonial = document.getElementById('customerTestimonial')
let customerRating = document.getElementById('customerRating')
let leftBtn = document.getElementById('leftBtn')
let rightBtn = document.getElementById('rightBtn')

let data = [
    {
        'img': 1,
        'name': 'King Tchalla',
        'rating': '<i class="star fas fa-star"></i><i i class= "star fas fa-star" ></i><i class="star fas fa-star"></i><i class="star fas fa-star"></i><i class="star fas fa-star-half"></i>',
        'testimonial': 'Such an amazing experience using your product. This completely changed my way of living. After using your product I went directly to heaven to meet Tchalla'
    },
    {
        'img': 2,
        'name': 'Wanda Maximoff',
        'rating': '<i class="star fas fa-star"></i><i i class= "star fas fa-star" ></i><i class="star fas fa-star"></i><i class="star fas fa-star"></i>',
        'testimonial': 'Wow what an experience. Such amazing products and such amazing service you provide. Just loved it in my first try. This is really amazing'
    },
    {
        'img': 3,
        'name': 'Dr.Strange',
        'rating': '<i class="star fas fa-star"></i><i i class= "star fas fa-star" ></i><i class="star fas fa-star"></i><i class="star fas fa-star"></i><i class="star fas fa-star"></i>',
        'testimonial': 'Just loved it. I dont have enough words to describe how good your product is. The packaging and the ingredients used is also top-notch. I am loving it'
    },
]

let count = 0;
leftBtn.addEventListener('click', () => {
    count--
    if (count < 0) {
        count = data.length - 1
    }

    customerImg.src = `images/${data[count].img}.jpg`
    customerName.innerText = `${data[count].name}`
    customerRating.innerHTML = `${data[count].rating}`
    customerTestimonial.innerText = `${data[count].testimonial}`

})


rightBtn.addEventListener('click', () => {
    count++
    if (count == data.length) {
        count = 0
    }

    customerImg.src = `images/${data[count].img}.jpg`
    customerName.innerText = `${data[count].name}`
    customerRating.innerHTML = `${data[count].rating}`
    customerTestimonial.innerText = `${data[count].testimonial}`

})

// for dark mode 
let darkModeBtn = document.getElementById('dark')
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('darkMode')
    document.body.style.transition = '1s'
    if (darkModeBtn.innerText == 'Dark Mode') {
        darkModeBtn.innerText = 'Light Mode'
    } else {
        darkModeBtn.innerText = 'Dark Mode'
    }
})