// var s = skrollr.init({
//   render: function(data) {
//     jQuery('.hero-title').text(Math.round(data.curTop))
//   },
// })

/* Kinetic Typography with Three.js 
to render kinetic 3D typography - start script */

import Type from './kinetic/Type'
import options from './kinetic/options'
class App {
  constructor() {
    this.init()
  }

  init() {
    this.createGl()
  }

  createGl() {
    for (let i = 0; i < options.length; i++) {
      // Position elements in a circle
      let angle = (i / options.length) * (Math.PI * 2) + Math.PI * 1.5 // Offset the turn
      let radius = 50
      let x = radius * Math.cos(angle)
      let z = radius * Math.sin(angle)
      options[i].position.mesh = [x, 0, z]

      // Create kinetic type
      let type = new Type()
      type.init(options[i])
    }
  }
}

new App()

/* Buttom animation */
$('.js-btn--fly').click(function () {
  $(this).toggleClass('clicked')
  $('.js-btn--fly .btn-text').text(function (i, text) {
    return text === 'Забронировано' ? 'Забронировать место' : 'Забронировано'
  })
})
