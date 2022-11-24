class Load extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("zcar", "assets/images/zcar");
        this.load.image("pcar", "assets/images/pcar");
        this.load.audio("bgmusic", ["assets/audio/music.mp3"]);
    }

    create() {
        this.scene.start("playGame")
    }
}