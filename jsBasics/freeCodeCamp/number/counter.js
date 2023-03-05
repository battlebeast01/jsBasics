const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const count = document.getElementById('count')

addBtn.addEventListener('click', () => {
    count.innerText++
})

subBtn.addEventListener('click', () => {
    count.innerText--
})