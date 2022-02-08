// const button = document.querySelector('button')
let h1 = document.querySelector('h1')
// console.log("original h1: ", h1)
// button.addEventListener('click', function () {

//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
//     console.log("newColor h1: ", h1)
// })
const makeRandColor = () => {
    // const r = Math.floor(Math.random() * 256)
    const r = 50
    const g = Math.floor(Math.random() * (200 - 100) + 100)
    const b = Math.floor(Math.random() * (200 - 100) + 100)
    return `rgb(${r},${g},${b})`;
}
const buttons = document.querySelectorAll('button')
for (let button of buttons) {
    button.addEventListener('click', function () {
        button.style.backgroundColor = makeRandColor();
    })
}
