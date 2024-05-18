const html = document.documentElement
const img = document.querySelector("header img")
const question = document.querySelector("main p")
const answer_1 = document.querySelector("#answer-1")
const answer_2 = document.querySelector("#answer-2")
const answer_3 = document.querySelector("#answer-3")
const answer_4 = document.querySelector("#answer-4")

function showAnswerSun() {
  if (html.classList.contains("light")) {
    answer_2.className = 'answer'
  }
}

function showAnswerMoon() {
  if (!html.classList.contains("light")) {
    answer_4.className = 'answer'
  }
}

function toggleMode() {    
    html.classList.toggle("light")
    answer_2.className = 'notAnswer'
    answer_4.className = 'notAnswer'
  
    if (html.classList.contains("light")) {
      img.setAttribute("src", "img/logo-light.png")
      question.textContent = "Pergunta 2"
      answer_1.textContent = "Resposta 2"
      answer_2.textContent = "Resposta 4"
      answer_3.textContent = "Resposta 6"
      answer_4.textContent = "Resposta 8"

    } else {
      img.setAttribute("src", "img/logo.png")
      question.textContent = "Pergunta 1"
      answer_1.textContent = "Resposta 1"
      answer_2.textContent = "Resposta 2"
      answer_3.textContent = "Resposta 3"
      answer_4.textContent = "Resposta 4"
    }
}
