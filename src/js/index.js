const buttonYes = document.querySelector('.button-yes')
const buttonNo = document.querySelector('.button-no')
const sectionQuestion = document.querySelector('.question-section')
const sectionResponse = document.querySelector('.response-section')

buttonNo.addEventListener('mouseover', () =>{
    buttonNo.style.position = "absolute"
    buttonNo.style.top = Math.random()*90 + "vh"
    buttonNo.style.right = Math.random()*90 + "vw"
})

buttonYes.addEventListener('click', () =>{
    sectionQuestion.classList.add('none')
    sectionResponse.classList.remove('none')
})