const cards = [
    "🍕",
    "🍕",
    "🍔",
    "🍔",
    "🍟",
    "🍟",
    "🌭",
    "🌭",
    "🍿",
    "🍿",
    "🥓",
    "🥓",
    "🍖",
    "🍖",
    "🍣",
    "🍣",
    "🍦",
    "🍦",
    "🍉",
    "🍉",
]

let openCards = []

let shuffleCards = cards.sort(() => (Math.random() > 0.5 ? 2 : -1))

for (let i = 0; i < cards.length; i++) {
    let card = document.createElement('div')
    card.className = 'item'
    card.innerHTML = shuffleCards[i]
    card.onclick = handleClick
    document.querySelector(".game").appendChild(card);
}

function handleClick(){
    if(openCards.length < 2){
        this.classList.add('cardOpen')
        openCards.push(this)
    }

    if(openCards.length == 2){
        setTimeout(checkCards, 500)
    }
}

function checkCards(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add('cardMatch')
        openCards[1].classList.add('cardMatch')
    }else{
        openCards[0].classList.remove('cardOpen')
        openCards[1].classList.remove('cardOpen')
    }

    if(document.querySelectorAll('.cardMatch').length === cards.length){
        alert('Parabens você encontrou todas as comidinhas e ganhou!')
    }

    openCards = []


}

function restartGame(){
    window.location.reload()
}