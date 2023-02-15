document.addEventListener('DOMContentLoaded', function() {
  const btns = document.querySelectorAll('[data-tab-button]')
  const questions = document.querySelectorAll('[data-faq-question]')

  const heroSection = document.querySelector('.hero')
  const heroHeight = heroSection.clientHeight

  window.addEventListener('scroll', function() {
    const currentPos = window.scrollY

    if (currentPos < heroHeight) {
      hideElemHeader("hide")
    } else {
      hideElemHeader("show")
    }
  })

  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(button) {
      const tab_target = button.target.dataset.tabButton
      const tab_element = document.querySelector(`[data-tab-id=${tab_target}]`)
      hideAllTabs()
      tab_element.classList.add('show__list--active')
      removeActiveBtn()
      button.target.classList.add('show__tabs__btn--active')
    })
  }

  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', openCloseAcordeon)
  }
})

function hideElemHeader(action) {
  const header = document.querySelector('header')

  if (action == "show") {
    header.classList.remove('header--hidden')
  } else if (action == "hide") {
    header.classList.add('header--hidden')
  }
}

function openCloseAcordeon(element) {
  const openClass = "faq__questions__item--is-open"
  const parentElement = element.target.parentNode

  parentElement.classList.toggle(openClass)
}

function removeActiveBtn() {
  const btns = document.querySelectorAll('[data-tab-button]')

  for (let i = 0; i < btns.length; i++) {
    btns[i].classList.remove('show__tabs__btn--active')
  }
}

function hideAllTabs() {
  const tab_container = document.querySelectorAll('[data-tab-id]')

  for (let i = 0; i < tab_container.length; i++) {
    tab_container[i].classList.remove('show__list--active')
  }
}

