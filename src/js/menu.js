;(() => {
  const openMenuBtn = document.querySelector('[data-menu-btn]')
  const mobileMenu = document.querySelector('[data-menu]')
  const body = document.querySelector('.body')

  openMenuBtn.addEventListener('click', () => {
    const expanded = openMenuBtn.getAttribute('aria-expanded') === 'true' || false

    openMenuBtn.classList.toggle('is-active')
    openMenuBtn.setAttribute('aria-expanded', !expanded)

    mobileMenu.classList.toggle('is-open')
    body.classList.toggle('scroll-hidden')
  })
})()
