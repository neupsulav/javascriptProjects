let formSubmit = document.getElementById('formId')
formSubmit.addEventListener('submit', (e) => {
    e.preventDefault()
    let form = document.getElementById('formField')
    var formMessage = form.value

    if (formMessage == '') {
        message.innerHTML = 'No message to show'
        let alertMsg = document.getElementById('alert')
        alertMsg.style.visibility = 'visible'
        setTimeout(() => {
            alertMsg.style.visibility = 'hidden'
        }, 2000);

    } else {
        message.innerHTML = formMessage
    }

})