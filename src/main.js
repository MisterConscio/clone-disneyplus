document.addEventListener('DOMContentLoaded', function() {
  const btns = document.querySelectorAll('[data-tab-button]')

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
})

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

