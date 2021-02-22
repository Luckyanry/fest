;(() => {
  const openMenuBtn = document.querySelector('[data-modal-btn]')
  const mobileMenu = document.querySelector('[data-menu]')

  openMenuBtn.addEventListener('click', () => {
    const expanded = openMenuBtn.getAttribute('aria-expanded') === 'true' || false

    openMenuBtn.classList.toggle('is-active')
    openMenuBtn.setAttribute('aria-expanded', !expanded)

    mobileMenu.classList.toggle('is-open')
  })
})()
