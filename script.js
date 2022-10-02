const accordion = document.querySelectorAll(".accordion")

let rotate = document.querySelectorAll(".arrow")



accordion.forEach(acc => {
    acc.addEventListener('click', () =>{
        let filho = acc.lastElementChild

        filho.classList.toggle('active')

    })
})
