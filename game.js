var config = {
    width: 512,
    height: 512,
    backgroundColor: 0x000000,
    scene: [Load, TrackScene],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}

window.onload = function() {
    var game = new Phaser.Game(config);
}