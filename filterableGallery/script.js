let buttons = document.querySelectorAll('.btn')
let productItems = document.querySelectorAll('.productItem')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let datavalue = button.dataset.value

        productItems.forEach((image) => {
            if (datavalue == 'all') {
                image.style.display = ''
            } else {
                if (image.classList.contains(datavalue)) {
                    image.style.display = ''
                } else {
                    image.style.display = 'none'
                }
            }
        })
    })
})