class Load extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("zcar", "assets/images/zcar.png");
        this.load.image("pcar", "assets/images/pcar.png");
        this.load.audio("bgmusic", ["assets/audio/music.mp3"]);
    }

    create() {
        this.scene.start("playGame")
    }
}