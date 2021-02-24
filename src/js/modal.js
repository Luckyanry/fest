;(() => {
  const openModalBtn = document.querySelectorAll('.btn-modal')
  const modal = document.querySelector('[data-modal]')
  const closeModalBtn = document.querySelector('[data-modal-close]')
  const body = document.querySelector('.body')

  openModalBtn.forEach(function(btn) {
    btn.addEventListener('click', () => {
      setTimeout(() => {
        toggleModal()
      }, 1000)
    })
  })

  closeModalBtn.addEventListener('click', toggleModal)

  function toggleModal() {
    modal.classList.toggle('is-hidden')
    // body.classList.toggle('scroll-hidden')
  }
})()
