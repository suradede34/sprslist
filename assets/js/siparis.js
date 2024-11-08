const siparisList = document.querySelector('.siparisList');
const Btns = document.querySelectorAll('.siparisBtn');
const siparisSayisi = {};

function handleClick() {
    siparisList.innerText += this.innerText
}

for(const Btn of Btns) {
    Btn.addEventListener('click', handleClick)
}

