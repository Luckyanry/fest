import shaders from './shaders'
import fontFile from '../../assets/Orbitron-Black.fnt'
import fontAtlas from '../../assets/Orbitron-Black.png'

const options = [
  {
    word: 'IT FEST',
    color: '#1D2F5D',
    fill: '#04102f',
    geometry: new THREE.TorusKnotGeometry(9, 3, 768, 3, 4, 3),
    position: {
      texture: [-0.965, -0.4, 0],
      mesh: [0, 0, 0],
    },
    scale: [0.01, 0.05, 1],
    shaders: {
      vertex: shaders.torusVertex,
      fragment: shaders.torusFragment,
    },
    font: {
      file: fontFile,
      atlas: fontAtlas,
    },
  },
]

export default options
