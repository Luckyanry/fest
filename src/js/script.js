const collapseBtn = document.querySelectorAll('.btn-more')

collapseBtn.forEach(function(_btn) {
  _btn.addEventListener('click', function() {
    this.innerHTML === 'Свернуть'
      ? (this.innerHTML = 'Подробнее о преподавателе')
      : (this.innerHTML = 'Свернуть')

    let content = this.nextElementSibling
    if (content.style.display === 'block') {
      content.style.display = 'none'
    } else {
      content.style.display = 'block'
    }
  })
})
