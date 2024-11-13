import './style.css'
import Phaser from 'phaser'
import { Example } from './game.js'

const container = document.getElementById('renderDiv')
const config = {
    type: Phaser.AUTO,
    parent: 'renderDiv',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    width: 600,
    height: 600,
    pixelArt: true,
    crisp: true,
    scene: Example
}

window.phaserGame = new Phaser.Game(config)