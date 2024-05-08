import { Scene } from "phaser";

export class MainMenu extends Scene {
  constructor() {
    super("MainMenu");
  }

  create() {
    this.background = this.add.image(0, 0, "background");
    this.background.setOrigin(0, 0);
    this.background.setScale(1);

    this.titleGame = this.add.image(0, 50, "title");
    this.titleGame.setOrigin(0, 0);
    this.titleGame.setScale(0.98);

    this.titleGame = this.add.image(
      this.game.config.width / 3 + 60,
      this.game.config.height / 2,
      "tutorial"
    );
    this.titleGame.setOrigin(0, 0);
    this.titleGame.setScale(0.6);

    this.titleGame = this.add.image(
      this.game.config.width / 3 + 60,
      this.game.config.height / 2 + 80,
      "iniciar"
    );
    this.titleGame.setOrigin(0, 0);
    this.titleGame.setScale(0.6);

    this.titleGame = this.add.image(
      this.game.config.width / 3 + 60,
      this.game.config.height / 2 + 160,
      "placares"
    );
    this.titleGame.setOrigin(0, 0);
    this.titleGame.setScale(0.6);

    this.titleGame = this.add.image(
      this.game.config.width / 3 + 60,
      this.game.config.height / 2 + 240,
      "creditos"
    );
    this.titleGame.setOrigin(0, 0);
    this.titleGame.setScale(0.6);

    setTimeout(() => {
      this.scene.start("Game");
    }, 5000);
  }
}
