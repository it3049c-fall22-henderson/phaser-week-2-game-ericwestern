class Zcar extends Phaser.GameObjects.Sprite
{
	constructor(scene, x, y, texture)
	{
		super(scene, x, y, texture);
	}

	setTarget(target)
	{
		this.target = target;
	}

	update()
	{
		if (!this.target)
		{
			return;
		}

		const tx = this.target.x;
		const ty = this.target.y;

		const x = this.x;
		const y = this.y;

		const rotation = Phaser.Math.Angle.Between(x, y, tx, ty) + 1.5708;
		this.setRotation(rotation);
	}
}