 class TrackScene extends Phaser.Scene
{
    constructor() {
        super("playGame");
    }

	create() {
        this.music  = this.sound.add("bgmusic");
        this.music.play();

		this.player = this.physics.add.image(config.width / 2, config.height / 2, "pcar");
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);
        
        this.zombies = this.add.group({
			classType: Zcar,
			runChildUpdate: true
		})

		this.zombies.get(16, config.height - 32, 'zcar')
		this.zombies.get(16, 32, 'zcar')
		this.zombies.get(config.width - 16, config.height - 32, 'zcar')
		this.zombies.get(config.width - 16, 32, 'zcar')

		this.zombies.children.each(child => {
			child.setTarget(this.player)
		})
	}

    movePlayerManager() {
        if (this.cursorKeys.left.isDown) {
            this.player.setVelocityX(-200);
        } else if (this.cursorKeys.right.isDown) {
            this.player.setVelocityX(200);
        } else {
            this.player.setVelocityX(0);
        }

        if (this.cursorKeys.up.isDown) {
            this.player.setVelocityY(-200);
        } else if (this.cursorKeys.down.isDown) {
            this.player.setVelocityY(200);
        } else {
            this.player.setVelocityY(0);
        }
    }

    update() {
        this.movePlayerManager();
    }
    
}