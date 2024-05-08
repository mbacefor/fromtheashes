import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }
  arrayNiveis = [0, 1, 2];
  arrayEasy = [0, 1, 2, 3, 4];
  arrayMedium = [0, 1, 2, 3, 4];
  arrayHard = [0, 1, 2, 3, 4];

  create() {
    this.timerEvent = this.time.addEvent({ delay: 15000 });
    this.graphics = this.add.graphics({ x: 0, y: 0 });

    this.acabou = false;

    //this.scale_passado_labirinto = 0

    this.flag;

    this.timer = this.add.image(this.game.config.width - 150, 100, "tempo");
    this.timer.setScale(0.6);

    this.button = this.add.image(
      this.game.config.width / 2,
      this.game.config.height - 80,
      "botao"
    );
    this.button.setScale(0.6);

    console.log("----------------------");

    const niveis = new Array(3);

    console.log(niveis);

    const easy_0 = {
      Full_matriz: [
        [1, 0, 1, 0, 1],
        [0, 1, 0, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 0, 1],
        [1, 0, 1, 0, 0],
      ],

      linhaI: 1,
      colunaI: 0,
      linhaF: 4,
      colunaF: 4,

      posicao_saida_w: 4 * 120 + this.game.config.width / 3 - 79.5,
      posicao_saida_h: 4 * 120 + 0.5,

      scale_saida_e_jogador: 0.2,
      posicao_jogadorr_w: 0 * 120 + this.game.config.width / 3 - 79.5,
      posicao_jogadorr_h: 1 * 120 + 0.5,

      scale_passado_labirinto: 2,
    };

    const easy_1 = {
      Full_matriz: [
        [0, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0],
      ],

      linhaI: 4,
      colunaI: 4,
      linhaF: 0,
      colunaF: 0,

      posicao_saida_w: 0 * 120 + this.game.config.width / 3 - 79.5,
      posicao_saida_h: 0 * 120 + 0.5,

      scale_saida_e_jogador: 0.2,
      posicao_jogadorr_w: 4 * 120 + this.game.config.width / 3 - 79.5,
      posicao_jogadorr_h: 4 * 120 + 0.5,

      scale_passado_labirinto: 2,
    };

    const easy_2 = {
      Full_matriz: [
        [1, 0, 1, 0, 1],
        [0, 0, 1, 1, 1],
        [0, 1, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
      ],

      linhaI: 2,
      colunaI: 2,
      linhaF: 0,
      colunaF: 1,

      posicao_saida_w: 1 * 120 + this.game.config.width / 3 - 79.5,
      posicao_saida_h: 0 * 120 + 0.5,

      scale_saida_e_jogador: 0.2,
      posicao_jogadorr_w: 2 * 120 + this.game.config.width / 3 - 79.5,
      posicao_jogadorr_h: 2 * 120 + 0.5,

      scale_passado_labirinto: 2,
    };

    const easy_3 = {
      Full_matriz: [
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
      ],

      linhaI: 0,
      colunaI: 1,
      linhaF: 2,
      colunaF: 2,

      posicao_saida_w: 2 * 120 + this.game.config.width / 3 - 79.5,
      posicao_saida_h: 2 * 120 + 0.5,

      scale_saida_e_jogador: 0.2,
      posicao_jogadorr_w: 1 * 120 + this.game.config.width / 3 - 79.5,
      posicao_jogadorr_h: 0 * 120 + 0.5,

      scale_passado_labirinto: 2,
    };

    const easy_4 = {
      Full_matriz: [
        [1, 0, 1, 0, 1],
        [0, 0, 0, 1, 0],
        [1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0],
        [1, 0, 1, 0, 1],
      ],

      linhaI: 3,
      colunaI: 3,
      linhaF: 0,
      colunaF: 1,

      posicao_saida_w: 1 * 120 + this.game.config.width / 3 - 79.5,
      posicao_saida_h: 0 * 120 + 0.5,

      scale_saida_e_jogador: 0.2,
      posicao_jogadorr_w: 3 * 120 + this.game.config.width / 3 - 79.5,
      posicao_jogadorr_h: 3 * 120 + 0.5,

      scale_passado_labirinto: 2,
    };

    niveis[0] = [easy_0, easy_1, easy_2, easy_3, easy_4];

    const medium_0 = {
      Full_matriz: [
        [0, 1, 0, 1, 0, 0, 0, 1, 1, 0],
        [1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 0, 1, 1, 0],
        [1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
        [0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 1, 1, 0, 0, 0],
      ],

      linhaI: 6,
      colunaI: 1,
      linhaF: 1,
      colunaF: 8,

      posicao_saida_w: 8 * 60 + this.game.config.width / 3 - 78.5,
      posicao_saida_h: 1 * 60 + 0.5,

      scale_saida_e_jogador: 0.1,
      posicao_jogadorr_w: 1 * 60 + this.game.config.width / 3 - 78.5,
      posicao_jogadorr_h: 6 * 60 + 0.5,

      scale_passado_labirinto: 1,
    };

    const medium_1 = {
      Full_matriz: [
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 1, 1],
        [1, 1, 0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 1, 1, 1, 0],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      ],

      linhaI: 0,
      colunaI: 1,
      linhaF: 6,
      colunaF: 1,

      posicao_saida_w: 1 * 60 + this.game.config.width / 3 - 78.5,
      posicao_saida_h: 6 * 60 + 0.5,

      scale_saida_e_jogador: 0.1,
      posicao_jogadorr_w: 1 * 60 + this.game.config.width / 3 - 78.5,
      posicao_jogadorr_h: 0 * 60 + 0.5,

      scale_passado_labirinto: 1,
    };

    const medium_2 = {
      Full_matriz: [
        [0, 1, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 1, 1, 1],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 1, 1, 1, 0],
        [1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
      ],

      linhaI: 2,
      colunaI: 2,
      linhaF: 3,
      colunaF: 0,

      posicao_saida_w: 0 * 60 + this.game.config.width / 3 - 78.5,
      posicao_saida_h: 3 * 60 + 0.5,

      scale_saida_e_jogador: 0.1,
      posicao_jogadorr_w: 2 * 60 + this.game.config.width / 3 - 78.5,
      posicao_jogadorr_h: 2 * 60 + 0.5,

      scale_passado_labirinto: 1,
    };

    const medium_3 = {
      Full_matriz: [
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 1, 1, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 0, 0, 1, 0, 1], //
        [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],

      linhaI: 5,
      colunaI: 2,
      linhaF: 6,
      colunaF: 9,

      posicao_saida_w: 9 * 60 + this.game.config.width / 3 - 78.5,
      posicao_saida_h: 6 * 60 + 0.5,

      scale_saida_e_jogador: 0.1,
      posicao_jogadorr_w: 2 * 60 + this.game.config.width / 3 - 78.5,
      posicao_jogadorr_h: 5 * 60 + 0.5,

      scale_passado_labirinto: 1,
    };

    const medium_4 = {
      Full_matriz: [
        [0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
        [0, 1, 1, 1, 0, 1, 0, 1, 1, 1],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
        [1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 0, 1, 1],
      ],

      linhaI: 9,
      colunaI: 7,
      linhaF: 0,
      colunaF: 1,

      posicao_saida_w: 1 * 60 + this.game.config.width / 3 - 78.5,
      posicao_saida_h: 0 * 60 + 0.5,

      scale_saida_e_jogador: 0.1,
      posicao_jogadorr_w: 7 * 60 + this.game.config.width / 3 - 78.5,
      posicao_jogadorr_h: 9 * 60 + 0.5,

      scale_passado_labirinto: 1,
    };

    niveis[1] = [medium_0, medium_1, medium_2, medium_3, medium_4];

    const hard_0 = {
      Full_matriz: [
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
        [1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
      ],

      linhaI: 0,
      colunaI: 0,
      linhaF: 19,
      colunaF: 0,

      posicao_saida_w: 0 * 30 + this.game.config.width / 3 - 80,
      posicao_saida_h: 19 * 30,

      scale_saida_e_jogador: 0.05,
      posicao_jogadorr_w: 0 * 30 + this.game.config.width / 3 - 80,
      posicao_jogadorr_h: 0 * 30,

      scale_passado_labirinto: 0.4,
    };

    const hard_1 = {
      Full_matriz: [
        [0, 0, , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      ],

      linhaI: 17,
      colunaI: 18,
      linhaF: 0,
      colunaF: 0,

      posicao_saida_w: 0 * 30 + this.game.config.width / 3 - 80,
      posicao_saida_h: 0 * 30,

      scale_saida_e_jogador: 0.05,
      posicao_jogadorr_w: 18 * 30 + this.game.config.width / 3 - 80,
      posicao_jogadorr_h: 17 * 30,

      scale_passado_labirinto: 0.4,
    };

    const hard_2 = {
      Full_matriz: [
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
      ],

      linhaI: 19,
      colunaI: 18,
      linhaF: 0,
      colunaF: 0,

      posicao_saida_w: 0 * 30 + this.game.config.width / 3 - 80,
      posicao_saida_h: 0 * 30,

      scale_saida_e_jogador: 0.05,
      posicao_jogadorr_w: 18 * 30 + this.game.config.width / 3 - 80,
      posicao_jogadorr_h: 19 * 30,

      scale_passado_labirinto: 0.4,
    };

    const hard_3 = {
      Full_matriz: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
        [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
        [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
        [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
        [0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ],

      linhaI: 19,
      colunaI: 10,
      linhaF: 0,
      colunaF: 19,

      posicao_saida_w: 19 * 30 + this.game.config.width / 3 - 80,
      posicao_saida_h: 0 * 30,

      scale_saida_e_jogador: 0.05,
      posicao_jogadorr_w: 10 * 30 + this.game.config.width / 3 - 80,
      posicao_jogadorr_h: 19 * 30,

      scale_passado_labirinto: 0.4,
    };

    const hard_4 = {
      Full_matriz: [
        [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1],
      ],

      linhaI: 19,
      colunaI: 1,
      linhaF: 0,
      colunaF: 19,

      posicao_saida_w: 19 * 30 + this.game.config.width / 3 - 80,
      posicao_saida_h: 0 * 30,

      scale_saida_e_jogador: 0.05,
      posicao_jogadorr_w: 1 * 30 + this.game.config.width / 3 - 80,
      posicao_jogadorr_h: 19 * 30,

      scale_passado_labirinto: 0.4,
    };

    niveis[2] = [hard_0, hard_1, hard_2, hard_3, hard_4];

    let random_nivel = Math.floor(Math.random() * this.arrayNiveis.length); //  random

    let nivel_escolhido = this.arrayNiveis[random_nivel];

    this.flag = nivel_escolhido;

    console.log("nivel escolhido");
    console.log(nivel_escolhido);

    this.arrayNiveis.splice(this.random_nivel, 1);
    console.log(this.arrayNiveis);

    let random_labirinto;

    let elemento_escolhido;
    //    dependendo de qual nivel foi escolhido eu tenho que acessar o elemento de diferentes arrays
    if (nivel_escolhido === 0) {
      // se o nivel escolhido foi Easy eu tenho que escolher um elemento do arrayEasy que ainda n foi escolhido
      random_labirinto = Math.floor(Math.random() * this.arrayEasy.length); // 4
      elemento_escolhido = this.arrayEasy[random_labirinto];

      console.log(`apagado`);
      console.log(this.arrayEasy[random_labirinto]);
      this.arrayEasy.splice(random_labirinto, 1);

      console.log(`arrayEasy`);
      console.log(this.arrayEasy);
    } else if (nivel_escolhido === 1) {
      // se o nivel escolhido foi Medium eu tenho que escolher um elemento do arrayMedium que ainda n foi escolhido
      random_labirinto = Math.floor(Math.random() * this.arrayMedium.length); //3
      elemento_escolhido = this.arrayMedium[random_labirinto];

      console.log(`apagado ->`);
      console.log(this.arrayMedium[random_labirinto]);
      this.arrayMedium.splice(random_labirinto, 1);

      console.log(`arrayMedium`);
      console.log(this.arrayMedium);
    } else {
      // se o nivel escolhido foi Hard eu tenho que escolher um elemento do arrayHard que ainda n foi escolhido
      random_labirinto = Math.floor(Math.random() * this.arrayHard.length); // 2
      elemento_escolhido = this.arrayHard[random_labirinto];

      console.log(`apagado ->`);
      console.log(this.arrayHard[random_labirinto]);
      this.arrayHard.splice(random_labirinto, 1);

      console.log(`arrayHard`);
      console.log(this.arrayHard);
    }

    let indice_labirinto_escolhido = elemento_escolhido;

    const matriz = niveis[nivel_escolhido][indice_labirinto_escolhido];

    this.scale_passado_labirinto = matriz.scale_passado_labirinto;

    console.log(matriz);
    console.log(this.scale_passado_labirinto);
    this.todos_blocos_parede = this.physics.add.staticGroup();
    this.todos_blocos_chao_espaco = this.physics.add.staticGroup();

    for (let linha = 0; linha < matriz.Full_matriz.length; linha++) {
      // quando eu for transformar este pedaço de código em uma função na hora de mudar a cor
      //é so eu trocar o objeto de colisão e mudar ordem que passarei os parametros (pareide, espaço) (espaço , pareide) chamando a mesma função
      // e para o jogador não ultrapassar o limete do labirinto eu pego a posição eixo(x,y) da primeira e ultima coluna , da primeira e ultima linha e arrodeio de blocos pareide
      for (
        let coluna = 0;
        coluna < matriz.Full_matriz[linha].length;
        coluna++
      ) {
        //console.log(` linha ${linha} coluna ${coluna}`)
        if (matriz.Full_matriz[linha][coluna] === 1) {
          //tamanho de cada bloco + metade da tela horizontalmente

          if (nivel_escolhido === 0) {
            this.todos_blocos_parede
              .create(
                coluna * 120 + this.game.config.width / 3 - 80,
                linha * 120,
                "pareide"
              )
              .setOrigin(0, 0)
              .setScale(3)
              .refreshBody();
          } else if (nivel_escolhido === 1) {
            this.todos_blocos_parede
              .create(
                coluna * 60 + this.game.config.width / 4 + 35,
                linha * 60,
                "pareide"
              )
              .setOrigin(0, 0)
              .setScale(1.5)
              .refreshBody();
          } else if (nivel_escolhido === 2) {
            this.todos_blocos_parede
              .create(
                coluna * 30 + this.game.config.width / 3 - 80,
                linha * 30,
                "pareide"
              )
              .setOrigin(0, 0)
              .setScale(0.75)
              .refreshBody();
          }
        } else {
          if (nivel_escolhido === 0) {
            this.chao = this.add.image(
              coluna * 120 + this.game.config.width / 3 - 80,
              linha * 120,
              "chao"
            ); // se  colocar 80 vai ficar sem as linhas
            this.chao.setOrigin(0, 0);
            this.chao.setScale(3);
          } else if (nivel_escolhido === 1) {
            this.chao = this.add.image(
              coluna * 60 + this.game.config.width / 4 + 35,
              linha * 60,
              "chao"
            ); // se  colocar 80 vai ficar sem as linhas
            this.chao.setOrigin(0, 0);
            this.chao.setScale(1.5);
          } else if (nivel_escolhido === 2) {
            this.chao = this.add.image(
              coluna * 30 + this.game.config.width / 3 - 80,
              linha * 30,
              "chao"
            ); // se  colocar 80 vai ficar sem as linhas
            this.chao.setOrigin(0, 0);
            this.chao.setScale(0.75);
          }
          /*
              if(nivel_escolhido=== 0){
                this.chao = this.add.image(coluna * 120+(this.game.config.width / 3) - 80 , linha * 120, "chao") // se  colocar 80 vai ficar sem as linhas 
                this.chao.setOrigin(0, 0)
                this.chao.setScale(3)
    
              }else if(nivel_escolhido===1){
                this.chao = this.add.image(coluna * 60 + (this.game.config.width/4) + 35 , linha * 60, "chao") // se  colocar 80 vai ficar sem as linhas 
                this.chao.setOrigin(0, 0)
                this.chao.setScale(1.5)
    
              }else if(nivel_escolhido===2){
                this.chao = this.add.image(coluna * 30 + (this.game.config.width/3) - 80 , linha * 30, "chao") // se  colocar 80 vai ficar sem as linhas 
                this.chao.setOrigin(0, 0)
                this.chao.setScale(0.75)
    
              }
    */
        }
      }
    }
    this.todos_blocos_parede
      .create(this.game.config.width / 3 - 80 - 10, 0, "borda_left")
      .setOrigin(0, 0)
      .refreshBody();
    this.todos_blocos_parede
      .create(5 * 120 + this.game.config.width / 3 - 80, 0, "borda_right")
      .setOrigin(0, 0)
      .refreshBody();
    this.todos_blocos_parede
      .create(this.game.config.width / 3 - 80, 5 * 120, "borda_bottom")
      .setOrigin(0, 0)
      .refreshBody();

    this.saida = this.physics.add
      .sprite(matriz.posicao_saida_w, matriz.posicao_saida_h, "saidaa")
      .setOrigin(0, 0)
      .setScale(matriz.scale_saida_e_jogador)
      .refreshBody();

    this.anims.create({
      key: "saidaa_anims",

      frames: this.anims.generateFrameNumbers("saidaa"),

      frameRate: 4,

      repeat: -1,
    });

    this.saida.anims.play("saidaa_anims", true);

    this.jogadorr = this.physics.add
      .sprite(matriz.posicao_jogadorr_w, matriz.posicao_jogadorr_h, "jogador")
      .setOrigin(0, 0)
      .setScale(matriz.scale_saida_e_jogador)
      .refreshBody()
      .setCollideWorldBounds(true);

    this.anims.create({
      key: "jogador_anims",
      frames: this.anims.generateFrameNumbers("jogador"),
      frameRate: 15,
      repeat: -1,
    });

    this.jogadorr.anims.play("jogador_anims", true);

    this.physics.add.collider(this.jogadorr, this.todos_blocos_parede);

    this.physics.add.collider(this.saida, this.todos_blocos_parede);

    //this.physics.add.collider(this.saiu_do_labirinto, this.todos_blocos_parede);

    this.physics.add.overlap(
      this.jogadorr,
      this.saida,
      this.saiuDoLabirinto,
      null,
      this
    );

    this.cursors = this.input.keyboard.createCursorKeys();

    //setTimeout(() => { this.scene.start("GameEasy") }, 10000)
  }

  update() {
    this.graphics.clear();
    this.drawClock(100, 100, this.timerEvent);

    setTimeout(() => {
      this.trocarChaoParede(this.todos_blocos_parede, this.chao);
    }, 5000);

    if (!this.acabou) {
      // feito evitar que o jogador consiga se movimentar depois que acontecer o overlap

      if (this.flag === 2) {
        if (this.cursors.left.isDown) {
          this.jogadorr.setVelocityX(-195);
        } else if (this.cursors.right.isDown) {
          this.jogadorr.setVelocityX(195);
        } else {
          this.jogadorr.setVelocityX(0);
        }

        if (this.cursors.up.isDown) {
          this.jogadorr.setVelocityY(-195);
        } else if (this.cursors.down.isDown) {
          this.jogadorr.setVelocityY(195);
        } else {
          this.jogadorr.setVelocityY(0);
        }
      } else {
        if (this.cursors.left.isDown) {
          this.jogadorr.setVelocityX(-700);
        } else if (this.cursors.right.isDown) {
          this.jogadorr.setVelocityX(700);
        } else {
          this.jogadorr.setVelocityX(0);
        }

        if (this.cursors.up.isDown) {
          this.jogadorr.setVelocityY(-700);
        } else if (this.cursors.down.isDown) {
          this.jogadorr.setVelocityY(700);
        } else {
          this.jogadorr.setVelocityY(0);
        }
      }
      /*
      if (arrayEasy.length === 0) {
        arrayEasy = [0, 1, 2, 3, 4]
      }
*/
      if (this.arrayNiveis.length === 0) {
        this.arrayNiveis = [1, 2];
      }
    }
  }

  trocarChaoParede(grupo_parede, grupo_espaco) {
    grupo_parede.getChildren().forEach((elemento) => {
      elemento.setTint(0xffffff);
    });

    grupo_espaco.setTint(0x000000);

    console.log("entrou");
  }

  destrocarChaoParede(grupo_parede, grupo_espaco) {
    grupo_parede.getChildren().forEach((elemento) => {
      elemento.setTint(0x000000);
    });

    grupo_espaco.setTint(0xffffff);
  }

  saiuDoLabirinto(jogadorr, saida) {
    let x = saida.x;
    let y = saida.y;

    this.jogadorr.destroy();
    this.saida.destroy();

    //this.saiu_do_labirinto = this.physics.add.sprite( colunaF * 120 + (config.width/3) - 79.5  , ( linhaF * 120 ) + 0.5,"saiuDoLabirinto").setOrigin(0,0).setScale(0.2).refreshBody();

    if (this.flag === 2) {
      // quando for adicionar este sprite no labirinto dificil ele vai encaixar dentro do bloco espaço
      this.saiu_do_labirinto = this.physics.add
        .sprite(x, y, "saiuDoLabirinto")
        .setScale(this.scale_passado_labirinto)
        .refreshBody();
    } else {
      // quando for adicionar este sprite no labirinto facil e medio vai encaixar dentro do bloco espaço
      this.saiu_do_labirinto = this.physics.add
        .sprite(x, y, "saiuDoLabirinto")
        .setOrigin(0, 0)
        .setScale(this.scale_passado_labirinto)
        .refreshBody();
    }

    this.physics.add.collider(this.saiu_do_labirinto, this.todos_blocos_parede);

    this.anims.create({
      key: "saiuDoLabirinto_anims",
      frames: this.anims.generateFrameNumbers("saiuDoLabirinto"),
      frameRate: 15,
      repeat: -1,
    });

    this.saiu_do_labirinto.anims.play("saiuDoLabirinto_anims", true);

    // executar a funcao que mostra que a pessoa passou de fase
    this.acabou = true;

    setTimeout(() => {
      this.scene.start("Game");
    }, 1500); // aqui em vez de restartar toda esta cena eu apenas chamo de novo a função que vai montar outro labirinto
  }

  drawClock(x, y, timer) {
    //  Progress is between 0 and 1, where 0 = the hand pointing up and then rotating clockwise a full 360

    //  The frame
    this.graphics.lineStyle(6, 0xffffff, 1);
    this.graphics.strokeCircle(x, y, this.clockSize);

    let angle;
    let dest;
    let p1;
    let p2;
    let size;

    //  The current iteration hand
    size = this.clockSize * 0.95;

    angle = 360 * timer.getProgress() - 90;
    dest = Phaser.Math.RotateAroundDistance(
      { x: x, y: y },
      x,
      y,
      Phaser.Math.DegToRad(angle),
      size
    );

    this.graphics.lineStyle(2, 0xffffff, 1);

    this.graphics.beginPath();

    this.graphics.moveTo(x, y);

    p1 = Phaser.Math.RotateAroundDistance(
      { x: x, y: y },
      x,
      y,
      Phaser.Math.DegToRad(angle - 5),
      size * 0.7
    );

    this.graphics.lineTo(p1.x, p1.y);
    this.graphics.lineTo(dest.x, dest.y);

    this.graphics.moveTo(x, y);

    p2 = Phaser.Math.RotateAroundDistance(
      { x: x, y: y },
      x,
      y,
      Phaser.Math.DegToRad(angle + 5),
      size * 0.7
    );

    this.graphics.lineTo(p2.x, p2.y);
    this.graphics.lineTo(dest.x, dest.y);

    this.graphics.strokePath();
    this.graphics.closePath();
  }

  // create ()
  // {
  //     this.cameras.main.setBackgroundColor(0x00ff00);

  //     this.add.image(512, 384, 'background').setAlpha(0.5);

  //     this.add.text(512, 384, 'Make something fun!\nand share it with us:\nsupport@phaser.io', {
  //         fontFamily: 'Arial Black', fontSize: 38, color: '#ffffff',
  //         stroke: '#000000', strokeThickness: 8,
  //         align: 'center'
  //     }).setOrigin(0.5);

  //     this.input.once('pointerdown', () => {

  //         this.scene.start('GameOver');

  //     });
  // }
}
