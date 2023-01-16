// to access the search Element
let productSearch = document.getElementById('productSearch')

// adding event listener to input element 
productSearch.addEventListener('keyup', () => {
    // getting the search value typed by user and converting to uppercase 
    let searchValue = productSearch.value.toUpperCase()
    // accessing the classname productItem to manipulate its display property later 
    let productItem = document.getElementsByClassName('productItem')

    // method 1
    // accessing the product title to perform search function
    // let productTitle = document.getElementsByClassName('productTitle')

    // for (let i = 0; i < productTitle.length; i++) {
    //     let productTitleValues = productTitle[i].innerText.toUpperCase()
    //     if (productTitleValues.indexOf(searchValue) > -1) {
    //         productItem[i].style.display = ''
    //     } else {
    //         productItem[i].style.display = 'none'
    //     }
    // }

    // method-2
    let productTitle = document.querySelectorAll('.productTitle')
    let index = 0
    productTitle.forEach((title) => {
        let productTitleValue = title.innerText.toUpperCase()
        if (productTitleValue.indexOf(searchValue) > -1) {
            productItem[index].style.display = ''
        } else {
            productItem[index].style.display = 'none'
        }
        index++
    })

})