export default new (class {
  constructor() {
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
    })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.5))
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setClearColor(0x04102f, 1)

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)

    this.camera.position.z = 1
    this.scene = new THREE.Scene()
    this.clock = new THREE.Clock()

    this.init()
  }

  render() {
    this.renderer.render(this.scene, this.camera)
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this))

    for (let i = 0; i < this.scene.children.length; i++) {
      const obj = this.scene.children[i]
      obj.updateTime(this.clock.getElapsedTime())
    }

    this.render()
  }

  addEvents() {
    window.addEventListener('resize', this.resize.bind(this))
  }

  init() {
    this.addToDom()
    this.animate()
    this.addEvents()
  }

  addToDom() {
    const canvas = this.renderer.domElement
    const container = document.querySelector('#webgl')
    container.appendChild(canvas)
    console.log(canvas)
  }

  resize() {
    let width = window.innerWidth
    let height = window.innerHeight

    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
  }
})()
