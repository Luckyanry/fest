;(() => {
  const refs = {
    openContactsBtn: document.querySelector('[data-contacts-open]'),
    modalContacts: document.querySelector('#modalContacts'),
    openModalBtn: document.querySelectorAll('.btn'),
    modalRequest: document.querySelector('#modalRequest'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
  }

  refs.openModalBtn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      modalRequest.classList.add('is-open')
    })
  })

  refs.openContactsBtn.addEventListener('click', function() {
    modalContacts.classList.add('is-open')
  })

  refs.closeModalBtn.forEach(function(btnClose) {
    btnClose.addEventListener('click', function(e) {
      closeModal()
    })
  })

  function closeModal() {
    modalRequest.classList.remove('is-open')
    modalContacts.classList.remove('is-open')
  }
})()
