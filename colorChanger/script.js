let btn = document.getElementsByTagName('button')[0]
let colors = ['red', 'green', 'yellow', 'grey', 'purple']

const clickFunc = () => {
    let colorIndex = (Math.floor(Math.random() * colors.length))
    document.body.style.backgroundColor = colors[colorIndex]
}
btn.addEventListener('click', clickFunc)