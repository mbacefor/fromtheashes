import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    //  We loaded this image in our Boot Scene, so we can display it here
    this.add.image(512, 384, "background");

    //  A simple progress bar. This is the outline of the bar.
    this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

    //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
    const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

    //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
    this.load.on("progress", (progress) => {
      //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
      bar.width = 4 + 460 * progress;
    });
  }

  preload() {
    //  Load the assets for the game - Replace with your own assets
    this.load.setPath("assets");

    this.load.image("logo", "logo.png");
    this.load.image("chao", "bloco-espaco-40px.png");
    this.load.image("pareide", "bloco-pareide-40px.png");
    this.load.image("tempo", "cronometro.png");
    this.load.image("botao", "voltar.png");

    this.load.image("background", "background_1440px-1024px.png");
    this.load.image("title", "logo_preta_1.png");
    this.load.image("tutorial", "Tutorial.png");
    this.load.image("iniciar", "Iniciar.png");
    this.load.image("placares", "Placares.png");
    this.load.image("creditos", "creditos.png");

    this.load.image("borda_left", "borda_l.png");
    this.load.image("borda_right", "borda_r.png");
    this.load.image("borda_bottom", "borda_b.png");

    this.load.spritesheet("saidaa", "teste.png", {
      frameWidth: 398,
      frameHeight: 398,
    }); // escolhi este
    this.load.spritesheet("jogador", "jogador.png", {
      frameWidth: 398,
      frameHeight: 398,
    });
    this.load.spritesheet("frame1", "Frame1.png", {
      frameWidth: 40,
      frameHeight: 40,
    });

    this.load.spritesheet("saiuDoLabirinto", "saiuDoLabirinto.png", {
      frameWidth: 40,
      frameHeight: 40,
    });
  }

  create() {
    //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
    //  For example, you can define global animations here, so we can use them in other scenes.

    //  Move to the MainMenu. You could also swap this for a Scene Transition, such as a camera fade.
    this.add.text(500, 500, "carregando jogo ... ", {
      font: "50px Arial",
      fill: "white",
    });

    //this.paredes = this.physics.add.group();

    setTimeout(() => {
      this.scene.start("MainMenu");
    }, 1000);
    //this.scene.start("MainMenu");
  }
}
