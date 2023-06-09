/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [
      new Sound(
        "Missile Sound Effects (HQ).mp3",
        "./Sprite1/sounds/Missile Sound Effects (HQ).mp3.wav"
      ),
      new Sound("nagranie1", "./Sprite1/sounds/nagranie1.wav"),
      new Sound("plunge", "./Sprite1/sounds/plunge.wav"),
      new Sound("splash.ogg", "./Sprite1/sounds/splash.ogg.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "f" }, this.whenKeyFPressed)
    ];

    this.vars.store = 0;
    this.vars.sinx = -0.2734423018;
    this.vars.siny = 0.0017507428;
    this.vars.cosx = 0.961888407;
    this.vars.cosy = 0.9999984674;
    this.vars.zRotation = 2.4819616516633657e-35;
    this.vars.cos = 0.1780647913600487;
    this.vars.xRotation = 7.548228210149647e-29;
    this.vars.yRotation = 3.5512262672573275e-43;
    this.vars.r = 250;
    this.vars.g = 100;
    this.vars.b = 100;
    this.vars.storeXRotation = 164.13079302222633;
    this.vars.storeYRotation = -179.8996897765806;
    this.vars.storeZRotation = 179.9993998218016;
    this.vars.shadow = 0;
    this.vars.xVel = -0.002476849948747802;
    this.vars.yVel = 0.2842556049686899;
    this.vars.zVel = 1.4117879281383547;
    this.vars.power = 0.03000000000000002;
    this.vars.store2 = 0;
    this.vars.counter = 2;
    this.vars.groundCotrol = -0.008453087061485398;
    this.vars.leftRight = 0;
    this.vars.frontBack = 1.9843928563618783e-31;
    this.vars.backWing = 0;
    this.vars.broken = 0;
    this.vars.xAcc = -0.002476849948747802;
    this.vars.zAcc = 1.4117879281383547;
    this.vars.slopeX = 0;
    this.vars.slopeZ = 0;
    this.vars.actualZRotation = -179.99937604109357;
    this.vars.actualXRotation = -164.13079302160622;
    this.vars.resistance = 0.02;
    this.vars.wheels = -2;
    this.vars.wheelsState = 0;
    this.vars.yPlaneOrder = -0.0008564397889867319;
    this.vars.x1 = -0.04457061753438547;
    this.vars.x2 = -0.03285544502554058;
    this.vars.x0 = -0.032856189144567914;
    this.vars.y0 = 0.029158554739849414;
    this.vars.y1 = -0.04958624267141836;
    this.vars.y2 = -0.03655273736399128;
    this.vars.zPlaneOrder = 0.004317974062610613;
    this.vars.xPlaneOrder = 0.000769828821254883;
    this.vars.xPlnOrd = 0.000769828821254883;
    this.vars.rocketX = -6.03325669197177;
    this.vars.rocketY = 222.22567889994588;
    this.vars.rocketZ = 1165.0883881955049;
    this.vars.rocketVelX = -0.0016840192463874952;
    this.vars.rocketVelY = 0.27344231174358935;
    this.vars.rocketVelZ = 0.9618869699082119;
    this.vars.rocketFire = 0;
    this.vars.xx = 0.9482028273251386;
    this.vars.xy = -0.05339810586742777;
    this.vars.xz = 0.313145398405228;
    this.vars.yx = 0.023480334886075958;
    this.vars.yy = 0.9948554310774704;
    this.vars.yz = 0.09854615735406094;
    this.vars.zx = -0.31679657846359255;
    this.vars.zy = -0.08608898620256256;
    this.vars.zz = 0.9445785379354811;
    this.vars.zInside = 2.5046131147381114;
    this.vars.xInside = -4.7767388695552084e-11;
    this.vars.yInside = 0.000003648996566304421;
    this.vars.lx = 1.7558822612177303e-7;
    this.vars.ly = 0.018524069528255527;
    this.vars.lz = 1.436166790628208;
    this.vars.rcx = -0.002476849948747802;
    this.vars.rcy = 0.2842556049686899;
    this.vars.rcz = 1.4117879281383547;
    this.vars.x = 1045.784498426014;
    this.vars.xx2 = -38.186119984995315;
    this.vars.y = -195.31061757008592;
    this.vars.yy2 = -169.6516978409329;
    this.vars.z = -11.62317193132884;
    this.vars.zz2 = -25.08494173681177;
    this.vars.x3 = -18.22116549299532;
    this.vars.y3 = -184.3729420651931;
    this.vars.z2 = -50.09864919172202;
    this.vars.lena = 258.0413043529263;
    this.vars.lenb = 7085.0145225632605;
    this.vars.lenc = 7255.715138925315;
    this.vars.peri = 0.00006849891226055316;
    this.vars.incx = -1890.123646923552;
    this.vars.incy = -19377.965800087008;
    this.vars.ind = 190.06107695700405;
    this.vars.aox = -746.0008568126752;
    this.vars.aoy = -7002.358351934585;
    this.vars.box = -74.79145978145971;
    this.vars.boy = 222.24406775378156;
    this.vars.cox = 99.56282587553892;
    this.vars.coy = 32.01815515195631;
    this.vars.td = 0.007103714838337611;
    this.vars.rate = 0.4932525736061061;
    this.vars.rep = 7;
    this.vars.xxx = -18.221262728844792;
    this.vars.yyy = -186.31024336438105;
    this.vars.zzz = -21.94156422973999;
    this.vars.dot = 0;
    this.vars.terrain = [
      -2,
      -2,
      -2,
      -2,
      -2,
      -2,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      25,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      -2,
      12,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      17,
      0,
      0,
      0,
      0,
      19,
      0,
      0,
      0,
      0,
      0,
      10,
      0,
      0,
      0,
      -1,
      -1,
      -1,
      -1,
      0,
      11,
      0,
      0,
      0,
      0,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      21,
      0,
      0,
      -1,
      -1,
      16,
      0,
      0,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      -1,
      -1,
      -1,
      -1,
      -1,
      -1,
      0,
      23,
      0,
      0,
      0,
      0,
      10,
      0,
      0,
      0,
      0,
      23,
      0,
      0,
      0,
      0,
      10,
      0,
      0,
      0,
      0,
      0,
      14,
      0,
      0,
      0,
      14,
      0,
      0,
      0,
      0,
      13,
      0,
      0,
      0,
      0,
      21,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      13,
      0,
      21,
      0,
      0,
      0,
      0,
      0,
      12,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      14,
      0,
      0,
      21,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      0,
      13,
      0,
      0,
      0,
      0,
      0,
      25,
      0,
      0,
      0,
      0,
      21,
      0,
      0,
      14,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      21,
      18,
      0,
      0,
      0,
      0,
      13,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      21,
      0,
      0,
      0,
      18,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      16,
      0,
      0,
      0,
      0,
      0,
      25,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      19,
      0,
      0,
      0,
      0,
      13,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      10,
      0,
      13,
      0,
      0,
      0,
      0,
      0,
      0,
      17,
      0,
      0,
      20,
      0,
      0,
      0,
      0,
      18,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      19,
      0,
      0,
      0,
      0,
      0,
      0,
      13,
      0,
      0,
      0,
      13,
      0,
      0,
      0,
      23,
      0,
      0,
      0,
      0,
      13,
      0,
      0,
      0,
      0,
      10,
      0,
      0,
      0,
      0,
      0,
      14,
      0,
      0,
      0,
      21,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      25,
      0,
      0,
      0,
      19,
      0,
      0,
      0,
      0,
      22,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      10,
      0,
      0,
      0,
      23,
      0,
      0,
      0,
      0,
      17,
      0,
      0,
      0,
      0,
      23,
      0,
      0,
      0,
      0,
      17,
      0,
      0,
      0,
      23,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      0,
      0,
      11,
      0,
      0,
      0,
      0,
      0,
      0,
      21,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      15,
      12,
      0,
      0,
      0,
      0,
      0,
      0,
      10,
      0,
      0,
      17,
      0,
      0,
      0,
      0,
      17,
      0,
      0,
      0,
      0,
      11,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      18,
      0,
      23,
      0,
      0,
      0,
      21,
      0,
      0,
      0,
      0,
      18,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      14,
      15,
      0,
      0,
      11,
      0,
      0,
      0,
      0,
      17,
      0,
      0,
      0,
      0,
      0,
      16,
      0,
      0,
      0,
      11,
      0,
      0,
      0,
      0,
      0,
      11,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      22,
      0,
      0,
      0,
      0,
      17,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      13,
      10,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      23,
      23,
      0,
      0,
      0,
      0,
      12,
      0,
      0,
      0,
      0,
      25,
      0,
      0,
      0,
      0,
      0,
      23,
      0,
      0,
      0,
      23,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      13,
      0,
      0,
      0,
      22,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      10,
      22,
      0,
      0,
      0,
      0,
      14,
      0,
      0,
      0,
      0,
      13,
      0,
      0,
      0,
      0,
      13,
      0,
      0,
      0,
      0,
      23,
      0,
      0,
      0,
      0,
      15,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      21,
      0,
      23,
      0,
      11,
      0,
      0,
      0,
      0,
      0,
      20,
      0,
      0,
      0,
      22,
      0,
      0,
      0,
      0,
      0,
      22,
      0,
      0,
      0
    ];
  }

  *whenGreenFlagClicked() {
    this.restartTimer();
    yield* this.initPlane();
    yield* this.initCamera();
    this.stage.vars.worldSize = 35;
    yield* this.generateWorld();
    this.stage.vars.cameraType = 1;
    while (true) {
      yield* this.planePhysics();
      yield* this.cameraControl();
      yield* this.renderWorld();
      yield* this.renderOther();
      this.broadcast("tick");
      if (this.compare(2, this.vars.counter) < 0) {
        this.broadcast("snd");
        this.vars.counter = 0;
      } else {
        this.vars.counter++;
      }
      this.restartTimer();
      yield;
    }
  }

  *xVectorRotate(sin, cos) {
    this.vars.store =
      this.toNumber(this.stage.vars.xY) * this.toNumber(cos) +
      this.toNumber(this.stage.vars.xZ) * this.toNumber(sin);
    this.stage.vars.xZ =
      this.toNumber(this.stage.vars.xZ) * this.toNumber(cos) -
      this.toNumber(this.stage.vars.xY) * this.toNumber(sin);
    this.stage.vars.xY = this.vars.store;
    this.vars.store =
      this.toNumber(this.stage.vars.yY) * this.toNumber(cos) +
      this.toNumber(this.stage.vars.yZ) * this.toNumber(sin);
    this.stage.vars.yZ =
      this.toNumber(this.stage.vars.yZ) * this.toNumber(cos) -
      this.toNumber(this.stage.vars.yY) * this.toNumber(sin);
    this.stage.vars.yY = this.vars.store;
    this.vars.store =
      this.toNumber(this.stage.vars.zY) * this.toNumber(cos) +
      this.toNumber(this.stage.vars.zZ) * this.toNumber(sin);
    this.stage.vars.zZ =
      this.toNumber(this.stage.vars.zZ) * this.toNumber(cos) -
      this.toNumber(this.stage.vars.zY) * this.toNumber(sin);
    this.stage.vars.zY = this.vars.store;
  }

  *yVectorRotate(sin, cos) {
    this.vars.store =
      this.toNumber(this.stage.vars.xX) * this.toNumber(cos) +
      this.toNumber(this.stage.vars.xZ) * this.toNumber(sin);
    this.stage.vars.xZ =
      this.toNumber(this.stage.vars.xZ) * this.toNumber(cos) -
      this.toNumber(this.stage.vars.xX) * this.toNumber(sin);
    this.stage.vars.xX = this.vars.store;
    this.vars.store =
      this.toNumber(this.stage.vars.yX) * this.toNumber(cos) +
      this.toNumber(this.stage.vars.yZ) * this.toNumber(sin);
    this.stage.vars.yZ =
      this.toNumber(this.stage.vars.yZ) * this.toNumber(cos) -
      this.toNumber(this.stage.vars.yX) * this.toNumber(sin);
    this.stage.vars.yX = this.vars.store;
    this.vars.store =
      this.toNumber(this.stage.vars.zX) * this.toNumber(cos) +
      this.toNumber(this.stage.vars.zZ) * this.toNumber(sin);
    this.stage.vars.zZ =
      this.toNumber(this.stage.vars.zZ) * this.toNumber(cos) -
      this.toNumber(this.stage.vars.zX) * this.toNumber(sin);
    this.stage.vars.zX = this.vars.store;
  }

  *zVectorRotate(sin, cos) {
    this.vars.store =
      this.toNumber(this.stage.vars.xX) * this.toNumber(cos) +
      this.toNumber(this.stage.vars.xY) * this.toNumber(sin);
    this.stage.vars.xY =
      this.toNumber(this.stage.vars.xY) * this.toNumber(cos) -
      this.toNumber(this.stage.vars.xX) * this.toNumber(sin);
    this.stage.vars.xX = this.vars.store;
    this.vars.store =
      this.toNumber(this.stage.vars.yX) * this.toNumber(cos) +
      this.toNumber(this.stage.vars.yY) * this.toNumber(sin);
    this.stage.vars.yY =
      this.toNumber(this.stage.vars.yY) * this.toNumber(cos) -
      this.toNumber(this.stage.vars.yX) * this.toNumber(sin);
    this.stage.vars.yX = this.vars.store;
    this.vars.store =
      this.toNumber(this.stage.vars.zX) * this.toNumber(cos) +
      this.toNumber(this.stage.vars.zY) * this.toNumber(sin);
    this.stage.vars.zY =
      this.toNumber(this.stage.vars.zY) * this.toNumber(cos) -
      this.toNumber(this.stage.vars.zX) * this.toNumber(sin);
    this.stage.vars.zX = this.vars.store;
  }

  *renderBackground() {
    this.penSize = 181;
    if (this.compare(this.stage.vars.zY, -0.97) < 0) {
      /* TODO: Implement pen_setPenHueToNumber */ null;
      /* TODO: Implement pen_setPenShadeToNumber */ null;
      this.goto(-240, 90);
      this.penDown = true;
      this.x = 240;
      this.penDown = false;
      this.y -= 180;
      this.penDown = true;
      this.x = -240;
    } else {
      /* TODO: Implement pen_setPenHueToNumber */ null;
      /* TODO: Implement pen_setPenShadeToNumber */ null;
      this.goto(-240, 90);
      this.penDown = true;
      this.x = 240;
      this.penDown = false;
      this.y -= 180;
      this.penDown = true;
      this.x = -240;
      this.vars.r = 255;
      this.vars.g = 255;
      this.vars.b = 250;
      this.warp(this.otherRotateStageY)(1, 2, 2, 1.01, 2, 2);
      this.vars.r = "cloud";
      this.vars.g = "cloud";
      this.vars.b = "cloud";
      this.warp(this.otherRotateStageY)(4, 2.5, 5, 5, 2, 3.5);
      this.warp(this.otherRotateStageY)(-3.5, 2.5, 4.5, -5, 2.7, 4.2);
      this.warp(this.otherRotateStageY)(3.4, 2.7, -4.9, 5.1, 3.5, -3.5);
      this.warp(this.otherRotateStageY)(-3.5, 2.4, -4.5, -5.2, 2.5, -3.3);
      this.warp(this.otherRotateStageY)(0.4, 2.5, 9, 2, 2.5, 8);
      this.warp(this.otherRotateStageY)(-3.5, 1.7, 10, -5, 2, 9);
      this.warp(this.otherRotateStageY)(1.5, 2.2, -10, 4, 2.7, -8.5);
      this.warp(this.otherRotateStageY)(-3.5, 3, -9, -1, 2.7, -8);
      this.warp(this.otherRotateStageY)(8, 2.5, 2, 4, 1.5, -1.5);
      this.warp(this.otherRotateStageY)(-9, 3, -2, -9, 3, 1);
      this.warp(this.otherRotateStageY)(-1.5, 4.5, 4.5, 1, 4.3, 3.7);
      this.warp(this.otherRotateStageY)(5, 4.5, 1, 4, 4.5, -2);
      this.penDown = false;
      if (this.toNumber(this.stage.vars.cameraType) === 1) {
        this.penSize = 181;
        /* TODO: Implement pen_setPenHueToNumber */ null;
        /* TODO: Implement pen_setPenShadeToNumber */ null;
        this.penDown = false;
        if (this.compare(0, this.vars.cosx) < 0) {
          if (
            this.compare(
              180,
              200 *
                (this.toNumber(this.vars.sinx) / this.toNumber(this.vars.cosx))
            ) > 0
          ) {
            this.goto(
              -240,
              200 *
                (this.toNumber(this.vars.sinx) /
                  this.toNumber(this.vars.cosx)) -
                90
            );
            this.penDown = true;
            this.x = 240;
            this.penDown = false;
            this.y -= 180;
            this.penDown = true;
            this.x = -240;
          } else {
            this.goto(-240, 90);
            this.penDown = true;
            this.x = 240;
            this.penDown = false;
            this.y -= 180;
            this.penDown = true;
            this.x = -240;
          }
        } else {
          if (
            this.compare(
              -180,
              200 *
                (this.toNumber(this.vars.sinx) / this.toNumber(this.vars.cosx))
            ) < 0
          ) {
            this.goto(
              -240,
              200 *
                (this.toNumber(this.vars.sinx) /
                  this.toNumber(this.vars.cosx)) +
                90
            );
            this.penDown = true;
            this.x = 240;
            this.penDown = false;
            this.y += 180;
            this.penDown = true;
            this.x = -240;
          } else {
            this.goto(-240, -90);
            this.penDown = true;
            this.x = 240;
            this.penDown = false;
            this.y += 180;
            this.penDown = true;
            this.x = -240;
          }
        }
      } else {
        if (this.compare(this.stage.vars.zY, 0.99) < 0) {
          this.penSize = 200;
          this.vars.x0 = "grass";
          this.warp(this.otherRotateStageY)(
            100 *
              Math.sin(
                this.degToRad(this.toNumber(this.vars.storeYRotation) - 1)
              ),
            0,
            -100 *
              Math.cos(
                this.degToRad(this.toNumber(this.vars.storeYRotation) - 1)
              ),
            100 *
              Math.sin(
                this.degToRad(this.toNumber(this.vars.storeYRotation) + 1)
              ),
            0,
            -100 *
              Math.cos(
                this.degToRad(this.toNumber(this.vars.storeYRotation) + 1)
              )
          );
          /* TODO: Implement pen_setPenHueToNumber */ null;
          /* TODO: Implement pen_setPenShadeToNumber */ null;
          this.goto(
            (this.toNumber(this.vars.x1) + this.toNumber(this.vars.x2)) / 2,
            (this.toNumber(this.vars.y1) + this.toNumber(this.vars.y2)) / 2
          );
          if (this.compare(250, this.y) < 0) {
            this.y = 250;
          } else {
            if (this.compare(-250, this.y) > 0) {
              this.y = -250;
            }
          }
          this.direction =
            this.radToDeg(
              Math.atan(
                (this.toNumber(this.vars.x1) - this.toNumber(this.vars.x2)) /
                  (this.toNumber(this.vars.y1) - this.toNumber(this.vars.y2))
              )
            ) +
            (180 * this.toNumber(this.compare(this.vars.y1, this.vars.y2) > 0) -
              90);
          this.vars.actualZRotation = this.direction;
          this.move(100);
          this.direction += 90;
          this.move(-350);
          this.penDown = true;
          this.move(700);
          this.direction -= 90;
          this.move(100);
          this.direction += 90;
          this.move(-700);
          this.direction -= 90;
          this.move(100);
          this.direction += 90;
          this.move(700);
          this.direction -= 90;
          this.move(100);
          this.direction += 90;
          this.move(-700);
        }
      }
    }
  }

  *renderThrottle() {
    this.penDown = false;
    this.penSize = 5;
    this.penColor = Color.rgb(109, 110, 113);
    this.goto(-210, -160);
    this.penDown = true;
    this.y = -100;
    this.penDown = false;
    this.y = this.toNumber(this.vars.power) * 2000 - 160;
    this.penSize = 3;
    /* TODO: Implement pen_setPenShadeToNumber */ null;
    /* TODO: Implement pen_setPenHueToNumber */ null;
    this.penDown = true;
    this.y = -160;
    this.y = this.toNumber(this.vars.power) * 2000 - 160;
    this.penColor = Color.rgb(121, 121, 121);
    this.penSize = 6;
    this.x -= 5;
    this.x += 10;
  }

  *hill(x, z, h) {
    if (
      this.compare(
        this.toNumber(this.stage.vars.camz) +
          this.toNumber(this.stage.vars.camy) * (20 / this.toNumber(h)),
        this.toNumber(z) + 20
      ) > 0
    ) {
      this.vars.r = 110;
      this.warp(this.moveMountain)(
        this.toNumber(x) + 20,
        0,
        this.toNumber(z) + 20,
        this.toNumber(x) - 20,
        0,
        this.toNumber(z) + 20,
        x,
        h,
        z
      );
    }
    if (
      this.compare(
        this.toNumber(this.stage.vars.camx) -
          this.toNumber(this.stage.vars.camy) * (20 / this.toNumber(h)),
        this.toNumber(x) - 20
      ) < 0
    ) {
      this.vars.r = 90;
      this.warp(this.moveMountain)(
        this.toNumber(x) - 20,
        0,
        this.toNumber(z) - 20,
        this.toNumber(x) - 20,
        0,
        this.toNumber(z) + 20,
        x,
        h,
        z
      );
    }
    if (
      this.compare(
        this.toNumber(this.stage.vars.camx) +
          this.toNumber(this.stage.vars.camy) * (20 / this.toNumber(h)),
        this.toNumber(x) + 20
      ) > 0
    ) {
      this.vars.r = 100;
      this.warp(this.moveMountain)(
        this.toNumber(x) + 20,
        0,
        this.toNumber(z) + 20,
        this.toNumber(x) + 20,
        0,
        this.toNumber(z) - 20,
        x,
        h,
        z
      );
    }
    if (
      this.compare(
        this.toNumber(this.stage.vars.camz) -
          this.toNumber(this.stage.vars.camy) * (20 / this.toNumber(h)),
        this.toNumber(z) - 20
      ) < 0
    ) {
      this.vars.r = 80;
      this.warp(this.moveMountain)(
        this.toNumber(x) - 20,
        0,
        this.toNumber(z) - 20,
        this.toNumber(x) + 20,
        0,
        this.toNumber(z) - 20,
        x,
        h,
        z
      );
    }
  }

  *initCamera() {
    this.stage.vars.camx = this.stage.vars.xPlane;
    this.stage.vars.camy = this.stage.vars.yPlane;
    this.stage.vars.camz = this.stage.vars.zPlane;
    this.stage.vars.rotcamx = 0;
    this.stage.vars.rotcamy = 0;
  }

  *renderPlane() {
    if (
      this.compare(0, this.vars.yPlaneOrder) > 0 ||
      this.toNumber(this.stage.vars.cameraType) === 2
    ) {
      this.warp(this.wheels)();
      this.warp(this.other)();
    } else {
      this.warp(this.other)();
      this.warp(this.wheels)();
    }
  }

  *renderRunwayHills() {
    this.vars.r = 99;
    this.vars.g = 99;
    this.vars.b = 99;
    this.warp(this.worldElementSorted)(-4, -2);
    this.warp(this.worldElementSorted)(4, -2);
    this.warp(this.worldElementSorted)(-2, -4);
    this.warp(this.worldElementSorted)(-2, 4);
    this.warp(this.worldElementSorted)(-4, 2);
    this.warp(this.worldElementSorted)(4, 2);
    this.warp(this.worldElementSorted)(2, -4);
    this.warp(this.worldElementSorted)(2, 4);
    this.warp(this.worldElementSorted)(-4, -1);
    this.warp(this.worldElementSorted)(4, -1);
    this.warp(this.worldElementSorted)(-1, -4);
    this.warp(this.worldElementSorted)(-1, 4);
    this.warp(this.worldElementSorted)(-4, 1);
    this.warp(this.worldElementSorted)(4, 1);
    this.warp(this.worldElementSorted)(1, -4);
    this.warp(this.worldElementSorted)(1, 4);
    this.warp(this.worldElementSorted)(-4, 0);
    this.warp(this.worldElementSorted)(4, 0);
    this.warp(this.worldElementSorted)(0, -4);
    this.warp(this.worldElementSorted)(0, 4);
    this.warp(this.worldElementSorted)(3, -3);
    this.warp(this.worldElementSorted)(-3, -3);
    this.warp(this.worldElementSorted)(3, 3);
    this.warp(this.worldElementSorted)(-3, 3);
    this.warp(this.worldElementSorted)(-3, -2);
    this.warp(this.worldElementSorted)(-2, -3);
    this.warp(this.worldElementSorted)(-3, 2);
    this.warp(this.worldElementSorted)(2, -3);
    this.warp(this.worldElementSorted)(3, -2);
    this.warp(this.worldElementSorted)(-2, 3);
    this.warp(this.worldElementSorted)(3, 2);
    this.warp(this.worldElementSorted)(2, 3);
    this.warp(this.worldElementSorted)(-3, -1);
    this.warp(this.worldElementSorted)(-1, -3);
    this.warp(this.worldElementSorted)(-3, 1);
    this.warp(this.worldElementSorted)(1, -3);
    this.warp(this.worldElementSorted)(3, -1);
    this.warp(this.worldElementSorted)(-1, 3);
    this.warp(this.worldElementSorted)(3, 1);
    this.warp(this.worldElementSorted)(1, 3);
    this.warp(this.worldElementSorted)(-3, 0);
    this.warp(this.worldElementSorted)(3, 0);
    this.warp(this.worldElementSorted)(0, -3);
    this.warp(this.worldElementSorted)(0, 3);
    this.warp(this.worldElementSorted)(-2, -2);
    this.warp(this.worldElementSorted)(-2, 2);
    this.warp(this.worldElementSorted)(2, -2);
    this.warp(this.worldElementSorted)(2, 2);
    this.warp(this.worldElementSorted)(-2, -1);
    this.warp(this.worldElementSorted)(-1, -2);
    this.warp(this.worldElementSorted)(-2, 1);
    this.warp(this.worldElementSorted)(1, -2);
    this.warp(this.worldElementSorted)(2, -1);
    this.warp(this.worldElementSorted)(-1, 2);
    this.warp(this.worldElementSorted)(2, 1);
    this.warp(this.worldElementSorted)(1, 2);
    this.warp(this.worldElementSorted)(0, -2);
    this.warp(this.worldElementSorted)(-2, 0);
    this.warp(this.worldElementSorted)(0, 2);
    this.warp(this.worldElementSorted)(2, 0);
    this.warp(this.worldElementSorted)(-1, -1);
    this.warp(this.worldElementSorted)(-1, 1);
    this.warp(this.worldElementSorted)(1, -1);
    this.warp(this.worldElementSorted)(1, 1);
    this.warp(this.worldElementSorted)(0, -1);
    this.warp(this.worldElementSorted)(-1, 0);
    this.warp(this.worldElementSorted)(0, 1);
    this.warp(this.worldElementSorted)(1, 0);
    this.warp(this.worldElementSorted)(0, 0);
  }

  *initPlane() {
    this.vars.xInside = 0;
    this.vars.yInside = 0;
    this.vars.zInside = 2;
    this.vars.lx = 0;
    this.vars.ly = 0;
    this.vars.lz = 0;
    this.stage.vars.xX = 1;
    this.stage.vars.xY = 0;
    this.stage.vars.xZ = 0;
    this.stage.vars.yX = 0;
    this.stage.vars.yY = 1;
    this.stage.vars.yZ = 0;
    this.stage.vars.zX = 0;
    this.stage.vars.zY = 0;
    this.stage.vars.zZ = 1;
    this.vars.xVel = 0;
    this.vars.yVel = 0;
    this.vars.zVel = 0;
    this.vars.power = 0;
    this.vars.xRotation = 0.01;
    this.vars.yRotation = 0.01;
    this.vars.zRotation = 0.01;
    this.vars.broken = 0;
    this.stage.vars.xPlane = 0;
    this.stage.vars.yPlane = 2;
    this.stage.vars.zPlane = 5;
    this.vars.wheels = -2;
    this.vars.wheelsState = 0;
    this.vars.resistance = 0.02;
    this.stage.vars.speed = 0;
    this.vars.rocketX = 0;
    this.vars.rocketY = 0;
    this.vars.rocketZ = 0;
    this.vars.rocketVelX = "e";
    this.vars.rocketVelY = "e";
    this.vars.rocketVelZ = "e";
    this.vars.frontBack = 0;
    this.vars.backWing = 0;
    this.vars.leftRight = 0;
    this.vars.xAcc = 0;
    this.vars.zAcc = 0;
  }

  *_6() {
    this.vars.r = 200;
    this.vars.g = 100;
    this.vars.b = 100;
    yield* this.plane3dObject(0, 1, -9.5, -1, -1, -4);
    yield* this.plane3dObject(0, 1, -9.5, -1, 1, -4);
    yield* this.plane3dObject(0, 1, -9.5, 1, 1, -4);
    yield* this.plane3dObject(0, 1, -9.5, 1, -1, -4);
  }

  *rocket() {
    if (this.toNumber(this.vars.rocketFire) === 0) {
      this.vars.rocketX =
        this.toNumber(this.stage.vars.xPlane) -
        4 * this.toNumber(this.stage.vars.xX) -
        this.toNumber(this.stage.vars.yX);
      this.vars.rocketY =
        this.toNumber(this.stage.vars.yPlane) -
        4 * this.toNumber(this.stage.vars.xY) -
        this.toNumber(this.stage.vars.yY);
      this.vars.rocketZ =
        this.toNumber(this.stage.vars.zPlane) -
        4 * this.toNumber(this.stage.vars.xZ) -
        this.toNumber(this.stage.vars.yZ);
      this.vars.rocketVelX = this.stage.vars.zX;
      this.vars.rocketVelY = this.stage.vars.zY;
      this.vars.rocketVelZ = this.stage.vars.zZ;
      this.vars.rcx = this.vars.xVel;
      this.vars.rcy = this.vars.yVel;
      this.vars.rcz = this.vars.zVel;
      if (this.keyPressed("r") && this.toNumber(this.vars.broken) === 0) {
        this.vars.rocketFire = 1;
        yield* this.startSound("nagranie1");
      }
    } else {
      this.vars.rocketFire++;
      if (this.compare(100, this.vars.rocketFire) > 0) {
        yield* this.getWorldHeight(this.vars.rocketX, this.vars.rocketZ, !null);
        if (
          this.compare(this.vars.rocketY, this.vars.store) < 0 ||
          99 === this.toNumber(this.vars.rocketFire)
        ) {
          if (this.compare(this.vars.rocketY, this.vars.store) < 0) {
            yield* this.startSound("Missile Sound Effects (HQ).mp3");
            this.vars.rocketFire = 100;
          } else {
            this.vars.rocketFire = 0;
          }
        } else {
          this.vars.store =
            this.radToDeg(Math.atan(this.toNumber(this.vars.rocketFire) / 50)) /
            90;
          this.vars.rocketX +=
            this.toNumber(this.vars.rocketVelX) *
              5 *
              this.toNumber(this.vars.store) +
            this.toNumber(this.vars.rcx) * (1 - this.toNumber(this.vars.store));
          this.vars.rocketY +=
            this.toNumber(this.vars.rocketVelY) *
              5 *
              this.toNumber(this.vars.store) +
            (this.toNumber(this.vars.rcy) - 0.2) *
              (1 - this.toNumber(this.vars.store));
          this.vars.rocketZ +=
            this.toNumber(this.vars.rocketVelZ) *
              5 *
              this.toNumber(this.vars.store) +
            this.toNumber(this.vars.rcz) * (1 - this.toNumber(this.vars.store));
        }
      } else {
        if (
          !(
            -1 ===
            this.toNumber(
              this.itemOf(this.vars.terrain, this.stage.vars.breakTerrain - 1)
            )
          )
        ) {
          if (
            this.compare(
              2,
              this.itemOf(this.vars.terrain, this.stage.vars.breakTerrain - 1)
            ) < 0
          ) {
            this.vars.terrain.splice(
              this.stage.vars.breakTerrain - 1,
              1,
              this.toNumber(
                this.itemOf(this.vars.terrain, this.stage.vars.breakTerrain - 1)
              ) - 2
            );
          } else {
            this.vars.terrain.splice(this.stage.vars.breakTerrain - 1, 1, 0);
          }
        }
      }
    }
  }

  *applyRotation() {
    this.vars.storeXRotation =
      this.radToDeg(
        Math.atan(
          this.toNumber(this.stage.vars.yZ) / this.toNumber(this.stage.vars.yY)
        )
      ) +
      180 * this.toNumber(this.compare(0, this.stage.vars.yY) > 0);
    this.warp(this.xVectorRotate)(
      Math.sin(this.degToRad(this.toNumber(this.vars.storeXRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeXRotation)))
    );
    this.vars.storeYRotation =
      this.radToDeg(
        Math.atan(
          this.toNumber(this.stage.vars.xZ) / this.toNumber(this.stage.vars.xX)
        )
      ) +
      180 * this.toNumber(this.compare(0, this.stage.vars.xX) > 0);
    this.warp(this.yVectorRotate)(
      Math.sin(this.degToRad(this.toNumber(this.vars.storeYRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeYRotation)))
    );
    this.vars.storeZRotation =
      this.radToDeg(
        Math.atan(
          this.toNumber(this.stage.vars.xY) / this.toNumber(this.stage.vars.xX)
        )
      ) +
      180 * this.toNumber(this.compare(0, this.stage.vars.xX) > 0);
    this.warp(this.zVectorRotate)(
      Math.sin(this.degToRad(this.toNumber(this.vars.storeZRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeZRotation)))
    );
    this.warp(this.xVectorRotate)(
      Math.sin(this.degToRad(this.toNumber(this.vars.xRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.xRotation)))
    );
    this.warp(this.zVectorRotate)(
      Math.sin(this.degToRad(0 - this.toNumber(this.vars.storeZRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeZRotation)))
    );
    this.warp(this.yVectorRotate)(
      Math.sin(this.degToRad(0 - this.toNumber(this.vars.storeYRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeYRotation)))
    );
    this.warp(this.xVectorRotate)(
      Math.sin(this.degToRad(0 - this.toNumber(this.vars.storeXRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeXRotation)))
    );
    this.vars.storeZRotation =
      this.radToDeg(
        Math.atan(
          this.toNumber(this.stage.vars.xY) / this.toNumber(this.stage.vars.xX)
        )
      ) +
      180 * this.toNumber(this.compare(0, this.stage.vars.xX) > 0);
    this.warp(this.zVectorRotate)(
      Math.sin(this.degToRad(this.toNumber(this.vars.storeZRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeZRotation)))
    );
    this.vars.storeYRotation =
      this.radToDeg(
        Math.atan(
          this.toNumber(this.stage.vars.xZ) / this.toNumber(this.stage.vars.xX)
        )
      ) +
      180 * this.toNumber(this.compare(0, this.stage.vars.xX) > 0);
    this.warp(this.yVectorRotate)(
      Math.sin(this.degToRad(this.toNumber(this.vars.storeYRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeYRotation)))
    );
    this.vars.storeXRotation =
      this.radToDeg(
        Math.atan(
          this.toNumber(this.stage.vars.yZ) / this.toNumber(this.stage.vars.yY)
        )
      ) +
      180 * this.toNumber(this.compare(0, this.stage.vars.yY) > 0);
    this.warp(this.xVectorRotate)(
      Math.sin(this.degToRad(this.toNumber(this.vars.storeXRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeXRotation)))
    );
    this.warp(this.zVectorRotate)(
      Math.sin(this.degToRad(this.toNumber(this.vars.zRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.zRotation)))
    );
    this.warp(this.xVectorRotate)(
      Math.sin(this.degToRad(0 - this.toNumber(this.vars.storeXRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeXRotation)))
    );
    this.warp(this.yVectorRotate)(
      Math.sin(this.degToRad(0 - this.toNumber(this.vars.storeYRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeYRotation)))
    );
    this.warp(this.zVectorRotate)(
      Math.sin(this.degToRad(0 - this.toNumber(this.vars.storeZRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeZRotation)))
    );
    this.vars.storeYRotation =
      this.radToDeg(
        Math.atan(
          this.toNumber(this.stage.vars.xZ) / this.toNumber(this.stage.vars.xX)
        )
      ) +
      180 * this.toNumber(this.compare(0, this.stage.vars.xX) < 0);
    this.warp(this.yVectorRotate)(
      Math.sin(this.degToRad(this.toNumber(this.vars.storeYRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeYRotation)))
    );
    if (
      this.compare(
        0,
        this.toNumber(this.stage.vars.zY) * this.toNumber(this.stage.vars.yY)
      ) > 0
    ) {
      this.vars.actualXRotation =
        90 +
        this.radToDeg(
          Math.atan(
            this.toNumber(this.stage.vars.zZ) /
              this.toNumber(this.stage.vars.zY)
          )
        );
    } else {
      this.vars.actualXRotation =
        this.radToDeg(
          Math.atan(
            this.toNumber(this.stage.vars.zZ) /
              this.toNumber(this.stage.vars.zY)
          )
        ) - 90;
    }
    if (
      this.compare(
        0,
        this.toNumber(this.stage.vars.xY) * this.toNumber(this.stage.vars.yY)
      ) > 0
    ) {
      this.vars.actualZRotation =
        90 +
        this.radToDeg(
          Math.atan(
            this.toNumber(this.stage.vars.xX) /
              this.toNumber(this.stage.vars.xY)
          )
        );
    } else {
      this.vars.actualZRotation =
        this.radToDeg(
          Math.atan(
            this.toNumber(this.stage.vars.xX) /
              this.toNumber(this.stage.vars.xY)
          )
        ) - 90;
    }
    this.vars.storeXRotation =
      this.radToDeg(
        Math.atan(
          this.toNumber(this.stage.vars.yZ) / this.toNumber(this.stage.vars.yY)
        )
      ) +
      180 * this.toNumber(this.compare(0, this.stage.vars.yY) > 0);
    this.warp(this.xVectorRotate)(
      Math.sin(this.degToRad(this.toNumber(this.vars.storeXRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeXRotation)))
    );
    this.vars.storeZRotation =
      this.radToDeg(
        Math.atan(
          this.toNumber(this.stage.vars.xY) / this.toNumber(this.stage.vars.xX)
        )
      ) +
      180 * this.toNumber(this.compare(0, this.stage.vars.xX) > 0);
    this.warp(this.zVectorRotate)(
      Math.sin(this.degToRad(this.toNumber(this.vars.storeZRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeZRotation)))
    );
    this.warp(this.yVectorRotate)(
      Math.sin(this.degToRad(this.toNumber(this.vars.yRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.yRotation)))
    );
    this.warp(this.zVectorRotate)(
      Math.sin(this.degToRad(0 - this.toNumber(this.vars.storeZRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeZRotation)))
    );
    this.warp(this.xVectorRotate)(
      Math.sin(this.degToRad(0 - this.toNumber(this.vars.storeXRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeXRotation)))
    );
    this.warp(this.yVectorRotate)(
      Math.sin(this.degToRad(0 - this.toNumber(this.vars.storeYRotation))),
      Math.cos(this.degToRad(this.toNumber(this.vars.storeYRotation)))
    );
    if (this.toNumber(this.stage.vars.cameraType) === 2) {
      this.vars.xx =
        this.toNumber(this.stage.vars.yY) * this.toNumber(this.stage.vars.zZ) -
        this.toNumber(this.stage.vars.yZ) * this.toNumber(this.stage.vars.zY);
      this.vars.yx =
        this.toNumber(this.stage.vars.yZ) * this.toNumber(this.stage.vars.zX) -
        this.toNumber(this.stage.vars.yX) * this.toNumber(this.stage.vars.zZ);
      this.vars.zx =
        this.toNumber(this.stage.vars.yX) * this.toNumber(this.stage.vars.zY) -
        this.toNumber(this.stage.vars.yY) * this.toNumber(this.stage.vars.zX);
      this.vars.xy =
        this.toNumber(this.stage.vars.xZ) * this.toNumber(this.stage.vars.zY) -
        this.toNumber(this.stage.vars.xY) * this.toNumber(this.stage.vars.zZ);
      this.vars.yy =
        this.toNumber(this.stage.vars.xX) * this.toNumber(this.stage.vars.zZ) -
        this.toNumber(this.stage.vars.xZ) * this.toNumber(this.stage.vars.zX);
      this.vars.zy =
        this.toNumber(this.stage.vars.xY) * this.toNumber(this.stage.vars.zX) -
        this.toNumber(this.stage.vars.xX) * this.toNumber(this.stage.vars.zY);
      this.vars.xz =
        this.toNumber(this.stage.vars.xY) * this.toNumber(this.stage.vars.yZ) -
        this.toNumber(this.stage.vars.xZ) * this.toNumber(this.stage.vars.yY);
      this.vars.yz =
        this.toNumber(this.stage.vars.xZ) * this.toNumber(this.stage.vars.yX) -
        this.toNumber(this.stage.vars.xX) * this.toNumber(this.stage.vars.yZ);
      this.vars.zz =
        this.toNumber(this.stage.vars.xX) * this.toNumber(this.stage.vars.yY) -
        this.toNumber(this.stage.vars.xY) * this.toNumber(this.stage.vars.yX);
    }
  }

  *_3GetOrder() {
    this.vars.r = 200;
    this.vars.g = 100;
    this.vars.b = 100;
    this.vars.x1 = "e";
    yield* this.plane3dObject(-1, -1, 4, 1, -1, 4);
    this.vars.x0 = "e";
    yield* this.plane3dObject(-1, -1, -4, 1, -1, -4);
    if (this.toNumber(this.vars.shadow) === 0) {
      this.vars.yPlaneOrder =
        (this.toNumber(this.vars.x1) - this.toNumber(this.vars.x0)) *
          (this.toNumber(this.vars.y2) - this.toNumber(this.vars.y0)) -
        (this.toNumber(this.vars.x2) - this.toNumber(this.vars.x0)) *
          (this.toNumber(this.vars.y1) - this.toNumber(this.vars.y0));
    }
    this.vars.x0 = "e";
    yield* this.plane3dObject(-1, 1, 4, -1, 1, -4);
    if (this.toNumber(this.vars.shadow) === 0) {
      this.vars.zPlaneOrder =
        (this.toNumber(this.vars.x1) - this.toNumber(this.vars.x0)) *
          (this.toNumber(this.vars.y2) - this.toNumber(this.vars.y0)) -
        (this.toNumber(this.vars.x2) - this.toNumber(this.vars.x0)) *
          (this.toNumber(this.vars.y1) - this.toNumber(this.vars.y0));
    }
    this.vars.x1 = "e";
    yield* this.plane3dObject(-1, -1, -4, -1, -1, 4);
    if (this.toNumber(this.vars.shadow) === 0) {
      this.vars.xPlnOrd =
        (this.toNumber(this.vars.x1) - this.toNumber(this.vars.x0)) *
          (this.toNumber(this.vars.y2) - this.toNumber(this.vars.y0)) -
        (this.toNumber(this.vars.x2) - this.toNumber(this.vars.x0)) *
          (this.toNumber(this.vars.y1) - this.toNumber(this.vars.y0));
    }
    yield* this.plane3dObject(1, 1, -4, 1, 1, 4);
    yield* this.plane3dObject(1, -1, -4, 1, -1, 4);
  }

  *_2(n) {
    if (
      this.compare(
        this.toNumber(this.vars.xPlaneOrder) * this.toNumber(n),
        0.005
      ) < 0
    ) {
      this.vars.r = 200;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(-1, 0, 3, -10, 0, -1);
      yield* this.plane3dObject(-1, 0, 0, -10, 0, -1);
      this.vars.r = 250;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(
        -2,
        this.vars.leftRight,
        -0.8,
        -9,
        this.vars.leftRight,
        -1.5
      );
    } else {
      this.vars.r = 200;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(1, 0, 3, 10, 0, -1);
      yield* this.plane3dObject(1, 0, 0, 10, 0, -1);
      this.vars.r = 250;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(
        2,
        0 - this.toNumber(this.vars.leftRight),
        -0.8,
        9,
        0 - this.toNumber(this.vars.leftRight),
        -1.5
      );
    }
  }

  *_5(n) {
    if (
      this.compare(
        this.toNumber(this.vars.xPlaneOrder) * this.toNumber(n),
        0.005
      ) < 0
    ) {
      this.vars.r = 200;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(1, 0.5, -6, 3, 0.5, -8.5);
      yield* this.plane3dObject(1, 0.5, -8.5, 3, 0.5, -8.5);
      this.vars.r = 250;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(
        1,
        this.toNumber(this.vars.frontBack) + 0.5,
        -9,
        2.5,
        this.toNumber(this.vars.frontBack) + 0.5,
        -9
      );
    } else {
      this.vars.r = 200;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(-1, 0.5, -6, -3, 0.5, -8.5);
      yield* this.plane3dObject(-1, 0.5, -8.5, -3, 0.5, -8.5);
      this.vars.r = 250;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(
        -1,
        this.toNumber(this.vars.frontBack) + 0.5,
        -9,
        -2.5,
        this.toNumber(this.vars.frontBack) + 0.5,
        -9
      );
    }
  }

  *_7(n) {
    if (
      this.compare(
        this.toNumber(this.vars.xPlaneOrder) * this.toNumber(n),
        0.005
      ) < 0
    ) {
      this.vars.r = 200;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(-1, 0.5, -6, -3, 0.5, -8.5);
      yield* this.plane3dObject(-1, 0.5, -8.5, -3, 0.5, -8.5);
      this.vars.r = 250;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(
        -1,
        this.toNumber(this.vars.frontBack) + 0.5,
        -9,
        -2.5,
        this.toNumber(this.vars.frontBack) + 0.5,
        -9
      );
    } else {
      this.vars.r = 200;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(1, 0.5, -6, 3, 0.5, -8.5);
      yield* this.plane3dObject(1, 0.5, -8.5, 3, 0.5, -8.5);
      this.vars.r = 250;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(
        1,
        this.toNumber(this.vars.frontBack) + 0.5,
        -9,
        2.5,
        this.toNumber(this.vars.frontBack) + 0.5,
        -9
      );
    }
    this.vars.r = 200;
    this.vars.g = 100;
    this.vars.b = 100;
    yield* this.plane3dObject(0, 1, -6, 0, 3, -10);
    yield* this.plane3dObject(0, 1, -9.5, 0, 3, -10);
    this.vars.r = 250;
    this.vars.g = 100;
    this.vars.b = 100;
    yield* this.plane3dObject(
      this.vars.backWing,
      1,
      -10.2,
      this.vars.backWing,
      2.5,
      -10.5
    );
  }

  *_1() {
    this.vars.r = 0;
    this.vars.g = 150;
    this.vars.b = 254;
    yield* this.plane3dObject(0, -1, 9, -1, -1, 4);
    yield* this.plane3dObject(0, -1, 9, -1, 1, 4);
    yield* this.plane3dObject(0, -1, 9, 1, 1, 4);
    yield* this.plane3dObject(0, -1, 9, 1, -1, 4);
    yield* this.plane3dObject(1, 1, 4, 1, -1, 4);
    yield* this.plane3dObject(-1, 1, 4, -1, -1, 4);
    yield* this.plane3dObject(-1, 1, 4, 1, 1, 4);
  }

  *other() {
    if (this.toNumber(this.stage.vars.cameraType) === 2) {
      this.warp(this._3GetOrder)();
      this.warp(this._1)();
      this.warp(this._2)(-1);
      this.warp(this._4)(-1);
      this.warp(this._5)(1);
      this.warp(this._6)();
      this.warp(this._7)(1);
    } else {
      if (this.compare(0, this.vars.zPlaneOrder) < 0) {
        this.warp(this._1)();
        this.warp(this._2)(-1);
        this.warp(this._3GetOrder)();
        this.warp(this._4)(-1);
        this.warp(this._5)(1);
        this.warp(this._6)();
        this.warp(this._7)(1);
      } else {
        this.warp(this._7)(-1);
        this.warp(this._6)();
        this.warp(this._5)(-1);
        this.warp(this._4)(1);
        this.warp(this._3GetOrder)();
        this.warp(this._2)(1);
        this.warp(this._1)();
      }
      if (this.toNumber(this.vars.shadow) === 0) {
        this.vars.xPlaneOrder = this.vars.xPlnOrd;
      }
    }
  }

  *_4(n) {
    if (
      this.toNumber(this.vars.broken) *
        (1 - this.toNumber(this.vars.shadow)) ===
      1
    ) {
      yield* this.renderFire();
    }
    if (
      this.compare(
        this.toNumber(this.vars.xPlaneOrder) * this.toNumber(n),
        0.005
      ) < 0
    ) {
      this.vars.r = 200;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(1, 0, 3, 10, 0, -1);
      yield* this.plane3dObject(1, 0, 0, 10, 0, -1);
      this.vars.r = 250;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(
        2,
        0 - this.toNumber(this.vars.leftRight),
        -0.8,
        9,
        0 - this.toNumber(this.vars.leftRight),
        -1.5
      );
    } else {
      this.vars.r = 200;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(-1, 0, 3, -10, 0, -1);
      yield* this.plane3dObject(-1, 0, 0, -10, 0, -1);
      this.vars.r = 250;
      this.vars.g = 100;
      this.vars.b = 100;
      yield* this.plane3dObject(
        -2,
        this.vars.leftRight,
        -0.8,
        -9,
        this.vars.leftRight,
        -1.5
      );
    }
  }

  *rotateStageX(x1, y1, z1, x2, y2, z2) {
    this.warp(this.displayLine)(
      x1,
      this.toNumber(y1) * this.toNumber(this.vars.cosx) +
        this.toNumber(z1) * this.toNumber(this.vars.sinx),
      this.toNumber(z1) * this.toNumber(this.vars.cosx) -
        this.toNumber(y1) * this.toNumber(this.vars.sinx),
      x2,
      this.toNumber(y2) * this.toNumber(this.vars.cosx) +
        this.toNumber(z2) * this.toNumber(this.vars.sinx),
      this.toNumber(z2) * this.toNumber(this.vars.cosx) -
        this.toNumber(y2) * this.toNumber(this.vars.sinx)
    );
  }

  *plane3dObject(x1, y1, z1, x2, y2, z2) {
    this.warp(this.moveStage)(
      this.toNumber(x1) * this.toNumber(this.stage.vars.xX) +
        this.toNumber(y1) * this.toNumber(this.stage.vars.yX) +
        this.toNumber(z1) * this.toNumber(this.stage.vars.zX) +
        this.toNumber(this.stage.vars.xPlane),
      this.toNumber(x1) * this.toNumber(this.stage.vars.xY) +
        this.toNumber(y1) * this.toNumber(this.stage.vars.yY) +
        this.toNumber(z1) * this.toNumber(this.stage.vars.zY) +
        this.toNumber(this.stage.vars.yPlane),
      this.toNumber(x1) * this.toNumber(this.stage.vars.xZ) +
        this.toNumber(y1) * this.toNumber(this.stage.vars.yZ) +
        this.toNumber(z1) * this.toNumber(this.stage.vars.zZ) +
        this.toNumber(this.stage.vars.zPlane),
      this.toNumber(x2) * this.toNumber(this.stage.vars.xX) +
        this.toNumber(y2) * this.toNumber(this.stage.vars.yX) +
        this.toNumber(z2) * this.toNumber(this.stage.vars.zX) +
        this.toNumber(this.stage.vars.xPlane),
      this.toNumber(x2) * this.toNumber(this.stage.vars.xY) +
        this.toNumber(y2) * this.toNumber(this.stage.vars.yY) +
        this.toNumber(z2) * this.toNumber(this.stage.vars.zY) +
        this.toNumber(this.stage.vars.yPlane),
      this.toNumber(x2) * this.toNumber(this.stage.vars.xZ) +
        this.toNumber(y2) * this.toNumber(this.stage.vars.yZ) +
        this.toNumber(z2) * this.toNumber(this.stage.vars.zZ) +
        this.toNumber(this.stage.vars.zPlane)
    );
  }

  *displayLine(x1, y1, z1, x2, y2, z2) {
    if (this.toString(this.vars.x0) === "grass") {
      this.vars.x1 = 200 * (this.toNumber(x1) / this.toNumber(z1));
      this.vars.y1 = 200 * (this.toNumber(y1) / this.toNumber(z1));
      this.vars.x2 = 200 * (this.toNumber(x2) / this.toNumber(z2));
      this.vars.y2 = 200 * (this.toNumber(y2) / this.toNumber(z2));
    } else {
      if (this.compare(0.999, z1) < 0) {
        if (this.compare(0.999, z2) < 0) {
          this.penDown = false;
          this.goto(
            200 * (this.toNumber(x1) / this.toNumber(z1)),
            200 * (this.toNumber(y1) / this.toNumber(z1))
          );
          this.penSize = 1;
          this.penDown = true;
          if (this.toNumber(this.vars.b) === 70) {
            this.penSize = 300 / (this.toNumber(z1) + this.toNumber(z2));
          } else {
            this.penSize = 200 / (this.toNumber(z1) + this.toNumber(z2));
          }
          this.goto(
            200 * (this.toNumber(x2) / this.toNumber(z2)),
            200 * (this.toNumber(y2) / this.toNumber(z2))
          );
          if (this.toNumber(this.vars.shadow) === 0) {
            if (this.toString(this.vars.x0) === "e") {
              this.vars.x0 = this.toNumber(x1) / this.toNumber(z1);
              this.vars.y0 = this.toNumber(y1) / this.toNumber(z1);
            }
            if (this.toString(this.vars.x1) === "e") {
              this.vars.x1 = this.toNumber(x1) / this.toNumber(z1);
              this.vars.y1 = this.toNumber(y1) / this.toNumber(z1);
              this.vars.x2 = this.toNumber(x2) / this.toNumber(z2);
              this.vars.y2 = this.toNumber(y2) / this.toNumber(z2);
            }
          }
        } else {
          this.vars.store =
            (this.toNumber(z1) - 1) / (this.toNumber(z1) - this.toNumber(z2));
          this.warp(this.displayLine)(
            x1,
            y1,
            z1,
            this.toNumber(x2) * this.toNumber(this.vars.store) +
              this.toNumber(x1) * (1 - this.toNumber(this.vars.store)),
            this.toNumber(y2) * this.toNumber(this.vars.store) +
              this.toNumber(y1) * (1 - this.toNumber(this.vars.store)),
            1
          );
        }
      } else {
        if (this.compare(1, z2) < 0) {
          this.vars.store =
            (this.toNumber(z2) - 1) / (this.toNumber(z2) - this.toNumber(z1));
          this.warp(this.displayLine)(
            this.toNumber(x1) * this.toNumber(this.vars.store) +
              this.toNumber(x2) * (1 - this.toNumber(this.vars.store)),
            this.toNumber(y1) * this.toNumber(this.vars.store) +
              this.toNumber(y2) * (1 - this.toNumber(this.vars.store)),
            1,
            x2,
            y2,
            z2
          );
        }
      }
    }
  }

  *setColor(a, r, g, b) {
    if (this.toNumber(this.vars.shadow) === 1) {
      this.penColor = Color.num(Math.round(this.toNumber(a) / 4) * 16777216);
    } else {
      this.penColor = Color.num(
        ((this.toNumber(a) * 256 + this.toNumber(r)) * 256 + this.toNumber(g)) *
          256 +
          this.toNumber(b)
      );
    }
  }

  *minimap(x, z) {
    this.penDown = false;
    this.goto(
      ((this.toNumber(x) - this.toNumber(this.stage.vars.xPlane)) *
        this.toNumber(this.vars.cosy) +
        (this.toNumber(z) - this.toNumber(this.stage.vars.zPlane)) *
          this.toNumber(this.vars.siny)) *
        0.05,
      ((this.toNumber(z) - this.toNumber(this.stage.vars.zPlane)) *
        this.toNumber(this.vars.cosy) -
        (this.toNumber(x) - this.toNumber(this.stage.vars.xPlane)) *
          this.toNumber(this.vars.siny)) *
        0.05 -
        150
    );
    if (
      this.compare(Math.abs(this.x), 20) < 0 &&
      this.compare(Math.abs(this.y + 150), 20) < 0
    ) {
      this.penDown = true;
    }
  }

  *wheels() {
    if (this.compare(this.vars.wheels, -0.99) < 0) {
      this.vars.r = 70;
      this.vars.g = 70;
      this.vars.b = 70;
      this.warp(this.plane3dObject)(
        -1,
        this.vars.wheels,
        -3,
        -0.5,
        this.vars.wheels,
        -3
      );
      this.warp(this.plane3dObject)(
        0.5,
        this.vars.wheels,
        -3,
        1,
        this.vars.wheels,
        -3
      );
      this.warp(this.plane3dObject)(
        0.25,
        this.vars.wheels,
        5,
        -0.25,
        this.vars.wheels,
        5
      );
    }
  }

  *staticValues() {
    this.vars.siny = Math.sin(
      this.degToRad(this.toNumber(this.stage.vars.rotcamy))
    );
    this.vars.cosy = Math.cos(
      this.degToRad(this.toNumber(this.stage.vars.rotcamy))
    );
    if (this.toNumber(this.stage.vars.cameraType) === 1) {
      this.vars.sinx = Math.sin(
        this.degToRad(this.toNumber(this.stage.vars.rotcamx))
      );
      this.vars.cosx = Math.cos(
        this.degToRad(this.toNumber(this.stage.vars.rotcamx))
      );
    }
  }

  *drawTriangle(x, y, z, x2, y2, z2, xx, yy, zz) {
    this.vars.x = x;
    this.vars.y = y;
    this.vars.z = z;
    this.vars.x3 = x2;
    this.vars.y3 = y2;
    this.vars.z2 = z2;
    this.vars.xx2 = xx;
    this.vars.yy2 = yy;
    this.vars.zz2 = zz;
    if (
      this.compare(2, this.vars.z) < 0 ||
      this.compare(2, this.vars.z2) < 0 || this.compare(2, this.vars.zz2) < 0
    ) {
      if (
        this.compare(2, this.vars.z) < 0 &&
        this.compare(2, this.vars.z2) < 0 && this.compare(2, this.vars.zz2) > 0
      ) {
        this.vars.xxx = this.vars.xx2;
        this.vars.yyy = this.vars.yy2;
        this.vars.zzz = this.vars.zz2;
        this.vars.dot =
          (this.toNumber(this.vars.z) - 2) /
          (this.toNumber(this.vars.z) - this.toNumber(this.vars.zzz));
        this.vars.xx2 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.xxx) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x);
        this.vars.yy2 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.yyy) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y);
        this.vars.zz2 = 2;
        this.warp(this.tri)(
          (200 * this.toNumber(this.vars.x)) / this.toNumber(this.vars.z),
          (200 * this.toNumber(this.vars.y)) / this.toNumber(this.vars.z),
          (200 * this.toNumber(this.vars.x3)) / this.toNumber(this.vars.z2),
          (200 * this.toNumber(this.vars.y3)) / this.toNumber(this.vars.z2),
          (200 * this.toNumber(this.vars.xx2)) / this.toNumber(this.vars.zz2),
          (200 * this.toNumber(this.vars.yy2)) / this.toNumber(this.vars.zz2)
        );
        this.vars.dot =
          (this.toNumber(this.vars.z2) - 2) /
          (this.toNumber(this.vars.z2) - this.toNumber(this.vars.zzz));
        this.vars.x =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.xxx) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x3);
        this.vars.y =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.yyy) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y3);
        this.vars.z = 2;
      }
      if (
        this.compare(2, this.vars.z) < 0 &&
        this.compare(2, this.vars.z2) > 0 && this.compare(2, this.vars.zz2) < 0
      ) {
        this.vars.xxx = this.vars.x3;
        this.vars.yyy = this.vars.y3;
        this.vars.zzz = this.vars.z2;
        this.vars.dot =
          (this.toNumber(this.vars.zz2) - 2) /
          (this.toNumber(this.vars.zz2) - this.toNumber(this.vars.zzz));
        this.vars.x3 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.xxx) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.xx2);
        this.vars.y3 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.yyy) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.yy2);
        this.vars.z2 = 2;
        this.warp(this.tri)(
          (200 * this.toNumber(this.vars.x)) / this.toNumber(this.vars.z),
          (200 * this.toNumber(this.vars.y)) / this.toNumber(this.vars.z),
          (200 * this.toNumber(this.vars.x3)) / this.toNumber(this.vars.z2),
          (200 * this.toNumber(this.vars.y3)) / this.toNumber(this.vars.z2),
          (200 * this.toNumber(this.vars.xx2)) / this.toNumber(this.vars.zz2),
          (200 * this.toNumber(this.vars.yy2)) / this.toNumber(this.vars.zz2)
        );
        this.vars.dot =
          (this.toNumber(this.vars.z) - 2) /
          (this.toNumber(this.vars.z) - this.toNumber(this.vars.zzz));
        this.vars.xx2 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.xxx) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x);
        this.vars.yy2 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.yyy) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y);
        this.vars.zz2 = 2;
      }
      if (
        this.compare(2, this.vars.z) > 0 &&
        this.compare(2, this.vars.z2) < 0 && this.compare(2, this.vars.zz2) < 0
      ) {
        this.vars.xxx = this.vars.x;
        this.vars.yyy = this.vars.y;
        this.vars.zzz = this.vars.z;
        this.vars.dot =
          (this.toNumber(this.vars.z2) - 2) /
          (this.toNumber(this.vars.z2) - this.toNumber(this.vars.zzz));
        this.vars.x =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.xxx) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x3);
        this.vars.y =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.yyy) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y3);
        this.vars.z = 2;
        this.warp(this.tri)(
          (200 * this.toNumber(this.vars.x)) / this.toNumber(this.vars.z),
          (200 * this.toNumber(this.vars.y)) / this.toNumber(this.vars.z),
          (200 * this.toNumber(this.vars.x3)) / this.toNumber(this.vars.z2),
          (200 * this.toNumber(this.vars.y3)) / this.toNumber(this.vars.z2),
          (200 * this.toNumber(this.vars.xx2)) / this.toNumber(this.vars.zz2),
          (200 * this.toNumber(this.vars.yy2)) / this.toNumber(this.vars.zz2)
        );
        this.vars.dot =
          (this.toNumber(this.vars.zz2) - 2) /
          (this.toNumber(this.vars.zz2) - this.toNumber(this.vars.zzz));
        this.vars.x3 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.xxx) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.xx2);
        this.vars.y3 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.yyy) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.yy2);
        this.vars.z2 = 2;
      }
      if (
        this.compare(2, this.vars.z) < 0 &&
        this.compare(2, this.vars.z2) > 0 && this.compare(2, this.vars.zz2) > 0
      ) {
        this.vars.dot =
          (this.toNumber(this.vars.z) - 2) /
          (this.toNumber(this.vars.z) - this.toNumber(this.vars.zz2));
        this.vars.xx2 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.xx2) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x);
        this.vars.yy2 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.yy2) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y);
        this.vars.zz2 = 2;
        this.vars.dot =
          (this.toNumber(this.vars.z) - 2) /
          (this.toNumber(this.vars.z) - this.toNumber(this.vars.z2));
        this.vars.x3 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.x3) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x);
        this.vars.y3 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.y3) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y);
        this.vars.z2 = 2;
      }
      if (
        this.compare(2, this.vars.z) > 0 &&
        this.compare(2, this.vars.z2) > 0 && this.compare(2, this.vars.zz2) < 0
      ) {
        this.vars.dot =
          (this.toNumber(this.vars.zz2) - 2) /
          (this.toNumber(this.vars.zz2) - this.toNumber(this.vars.z));
        this.vars.x =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.x) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.xx2);
        this.vars.y =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.y) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.yy2);
        this.vars.z = 2;
        this.vars.dot =
          (this.toNumber(this.vars.zz2) - 2) /
          (this.toNumber(this.vars.zz2) - this.toNumber(this.vars.z2));
        this.vars.x3 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.x3) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.xx2);
        this.vars.y3 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.y3) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.yy2);
        this.vars.z2 = 2;
      }
      if (
        this.compare(2, this.vars.z) > 0 &&
        this.compare(2, this.vars.z2) < 0 && this.compare(2, this.vars.zz2) > 0
      ) {
        this.vars.dot =
          (this.toNumber(this.vars.z2) - 2) /
          (this.toNumber(this.vars.z2) - this.toNumber(this.vars.z));
        this.vars.x =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.x) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x3);
        this.vars.y =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.y) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y3);
        this.vars.z = 2;
        this.vars.dot =
          (this.toNumber(this.vars.z2) - 2) /
          (this.toNumber(this.vars.z2) - this.toNumber(this.vars.zz2));
        this.vars.xx2 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.xx2) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.x3);
        this.vars.yy2 =
          this.toNumber(this.vars.dot) * this.toNumber(this.vars.yy2) +
          (1 - this.toNumber(this.vars.dot)) * this.toNumber(this.vars.y3);
        this.vars.zz2 = 2;
      }
      this.warp(this.tri)(
        (200 * this.toNumber(this.vars.x)) / this.toNumber(this.vars.z),
        (200 * this.toNumber(this.vars.y)) / this.toNumber(this.vars.z),
        (200 * this.toNumber(this.vars.x3)) / this.toNumber(this.vars.z2),
        (200 * this.toNumber(this.vars.y3)) / this.toNumber(this.vars.z2),
        (200 * this.toNumber(this.vars.xx2)) / this.toNumber(this.vars.zz2),
        (200 * this.toNumber(this.vars.yy2)) / this.toNumber(this.vars.zz2)
      );
    }
  }

  *tri(ax, ay, bx, by, cx, cy) {
    this.penDown = false;
    this.vars.lena = Math.sqrt(
      (this.toNumber(bx) - this.toNumber(cx)) *
        (this.toNumber(bx) - this.toNumber(cx)) +
        (this.toNumber(by) - this.toNumber(cy)) *
          (this.toNumber(by) - this.toNumber(cy))
    );
    this.vars.lenb = Math.sqrt(
      (this.toNumber(ax) - this.toNumber(cx)) *
        (this.toNumber(ax) - this.toNumber(cx)) +
        (this.toNumber(ay) - this.toNumber(cy)) *
          (this.toNumber(ay) - this.toNumber(cy))
    );
    this.vars.lenc = Math.sqrt(
      (this.toNumber(ax) - this.toNumber(bx)) *
        (this.toNumber(ax) - this.toNumber(bx)) +
        (this.toNumber(ay) - this.toNumber(by)) *
          (this.toNumber(ay) - this.toNumber(by))
    );
    this.vars.peri =
      1 /
      (0.001 +
        (this.toNumber(this.vars.lena) +
          this.toNumber(this.vars.lenb) +
          this.toNumber(this.vars.lenc)));
    this.vars.incx =
      (this.toNumber(this.vars.lena) * this.toNumber(ax) +
        this.toNumber(this.vars.lenb) * this.toNumber(bx) +
        this.toNumber(this.vars.lenc) * this.toNumber(cx)) *
      this.toNumber(this.vars.peri);
    this.vars.incy =
      (this.toNumber(this.vars.lena) * this.toNumber(ay) +
        this.toNumber(this.vars.lenb) * this.toNumber(by) +
        this.toNumber(this.vars.lenc) * this.toNumber(cy)) *
      this.toNumber(this.vars.peri);
    this.vars.ind =
      0.001 +
      Math.sqrt(
        (this.toNumber(this.vars.lenb) +
          this.toNumber(this.vars.lenc) -
          this.toNumber(this.vars.lena)) *
          (this.toNumber(this.vars.lenc) +
            this.toNumber(this.vars.lena) -
            this.toNumber(this.vars.lenb)) *
          (this.toNumber(this.vars.lena) +
            this.toNumber(this.vars.lenb) -
            this.toNumber(this.vars.lenc)) *
          this.toNumber(this.vars.peri)
      );
    this.vars.aox = this.toNumber(this.vars.incx) - this.toNumber(ax);
    this.vars.aoy = this.toNumber(this.vars.incy) - this.toNumber(ay);
    this.vars.box = this.toNumber(this.vars.incx) - this.toNumber(bx);
    this.vars.boy = this.toNumber(this.vars.incy) - this.toNumber(by);
    this.vars.cox = this.toNumber(this.vars.incx) - this.toNumber(cx);
    this.vars.coy = this.toNumber(this.vars.incy) - this.toNumber(cy);
    if (
      this.compare(this.vars.lena, this.vars.lenb) < 0 &&
      this.compare(this.vars.lena, this.vars.lenc) < 0
    ) {
      this.vars.td = Math.sqrt(
        this.toNumber(this.vars.aox) * this.toNumber(this.vars.aox) +
          this.toNumber(this.vars.aoy) * this.toNumber(this.vars.aoy)
      );
    } else {
      if (
        !(
          this.compare(this.vars.lenb, this.vars.lena) > 0 ||
          this.compare(this.vars.lenb, this.vars.lenc) > 0
        )
      ) {
        this.vars.td = Math.sqrt(
          this.toNumber(this.vars.box) * this.toNumber(this.vars.box) +
            this.toNumber(this.vars.boy) * this.toNumber(this.vars.boy)
        );
      } else {
        this.vars.td = Math.sqrt(
          this.toNumber(this.vars.cox) * this.toNumber(this.vars.cox) +
            this.toNumber(this.vars.coy) * this.toNumber(this.vars.coy)
        );
      }
    }
    this.vars.rate =
      (this.toNumber(this.vars.td) * 2 - this.toNumber(this.vars.ind)) /
      (this.toNumber(this.vars.td) * 4);
    this.goto(
      Math.round(this.toNumber(this.vars.incx)),
      Math.round(this.toNumber(this.vars.incy))
    );
    this.penSize = this.toNumber(this.vars.ind);
    this.penDown = true;
    this.penDown = false;
    this.vars.td = 1 + 0;
    this.vars.rep = Math.ceil(
      Math.log10(2 / this.toNumber(this.vars.ind)) /
        Math.log10(this.toNumber(this.vars.rate))
    );
    if (this.compare(this.vars.rep, 4) < 0) {
      this.vars.rep = 4;
    }
    for (let i = 0; i < this.toNumber(this.vars.rep); i++) {
      this.vars.td =
        this.toNumber(this.vars.rate) * this.toNumber(this.vars.td);
      this.penSize =
        1 + this.toNumber(this.vars.td) * this.toNumber(this.vars.ind);
      this.penDown = false;
      this.goto(
        this.toNumber(this.vars.aox) * this.toNumber(this.vars.td) +
          this.toNumber(ax),
        this.toNumber(this.vars.aoy) * this.toNumber(this.vars.td) +
          this.toNumber(ay)
      );
      this.penDown = true;
      this.goto(
        this.toNumber(this.vars.box) * this.toNumber(this.vars.td) +
          this.toNumber(bx),
        this.toNumber(this.vars.boy) * this.toNumber(this.vars.td) +
          this.toNumber(by)
      );
      this.goto(
        this.toNumber(this.vars.cox) * this.toNumber(this.vars.td) +
          this.toNumber(cx),
        this.toNumber(this.vars.coy) * this.toNumber(this.vars.td) +
          this.toNumber(cy)
      );
      this.goto(
        this.toNumber(this.vars.aox) * this.toNumber(this.vars.td) +
          this.toNumber(ax),
        this.toNumber(this.vars.aoy) * this.toNumber(this.vars.td) +
          this.toNumber(ay)
      );
    }
  }

  *plane3dRotatedByXz(x1, y1, z1, x2, y2, z2) {
    this.warp(this.moveStage)(
      this.toNumber(x1) * this.toNumber(this.stage.vars.xX) +
        this.toNumber(z1) * this.toNumber(this.stage.vars.zX) +
        this.toNumber(this.stage.vars.xPlane),
      this.toNumber(x1) * this.toNumber(this.stage.vars.xY) +
        this.toNumber(y1) +
        this.toNumber(z1) * this.toNumber(this.stage.vars.zY) +
        this.toNumber(this.stage.vars.yPlane),
      this.toNumber(x1) * this.toNumber(this.stage.vars.xZ) +
        this.toNumber(z1) * this.toNumber(this.stage.vars.zZ) +
        this.toNumber(this.stage.vars.zPlane),
      this.toNumber(x2) * this.toNumber(this.stage.vars.xX) +
        this.toNumber(z2) * this.toNumber(this.stage.vars.zX) +
        this.toNumber(this.stage.vars.xPlane),
      this.toNumber(x2) * this.toNumber(this.stage.vars.xY) +
        this.toNumber(y2) +
        this.toNumber(z2) * this.toNumber(this.stage.vars.zY) +
        this.toNumber(this.stage.vars.yPlane),
      this.toNumber(x2) * this.toNumber(this.stage.vars.xZ) +
        this.toNumber(z2) * this.toNumber(this.stage.vars.zZ) +
        this.toNumber(this.stage.vars.zPlane)
    );
  }

  *rotateMountainX(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
    this.warp(this.drawTriangle)(
      x1,
      this.toNumber(y1) * this.toNumber(this.vars.cosx) +
        this.toNumber(z1) * this.toNumber(this.vars.sinx),
      this.toNumber(z1) * this.toNumber(this.vars.cosx) -
        this.toNumber(y1) * this.toNumber(this.vars.sinx),
      x2,
      this.toNumber(y2) * this.toNumber(this.vars.cosx) +
        this.toNumber(z2) * this.toNumber(this.vars.sinx),
      this.toNumber(z2) * this.toNumber(this.vars.cosx) -
        this.toNumber(y2) * this.toNumber(this.vars.sinx),
      x3,
      this.toNumber(y3) * this.toNumber(this.vars.cosx) +
        this.toNumber(z3) * this.toNumber(this.vars.sinx),
      this.toNumber(z3) * this.toNumber(this.vars.cosx) -
        this.toNumber(y3) * this.toNumber(this.vars.sinx)
    );
  }

  *planePhysics() {
    this.warp(this.applyRotation)();
    if (
      this.keyPressed("s") &&
      this.compare(this.vars.power, 0.0295) < 0 &&
      this.toNumber(this.vars.broken) === 0
    ) {
      this.vars.power += 0.001;
    }
    if (this.keyPressed("space") || this.toNumber(this.vars.broken) === 1) {
      if (this.compare(this.vars.power, 0.0005) > 0) {
        this.vars.power -= 0.001;
      } else {
        if (this.compare(this.vars.power, -0.0005) < 0) {
          this.vars.power += 0.001;
        }
      }
    }
    if (this.keyPressed("x") && this.compare(this.vars.power, -0.0055) > 0) {
      this.vars.power -= 0.001;
    }
    this.stage.vars.speed =
      this.toNumber(this.vars.xVel) * this.toNumber(this.stage.vars.zX) +
      (this.toNumber(this.vars.yVel) * this.toNumber(this.stage.vars.zY) +
        this.toNumber(this.vars.zVel) * this.toNumber(this.stage.vars.zZ));
    this.vars.cos = Math.abs(
      this.radToDeg(Math.atan(this.toNumber(this.stage.vars.speed) / 5)) / 90
    );
    this.vars.y2 =
      0.75 -
      this.radToDeg(
        Math.atan((this.toNumber(this.stage.vars.yPlane) + 100) / 500)
      ) /
        120;
    this.vars.b =
      1 +
      1.2 *
        (this.toNumber(this.vars.power) *
          this.toNumber(this.compare(this.vars.power, 0) < 0)) -
      (0.1 *
        (this.toNumber(this.vars.resistance) *
          Math.abs(this.toNumber(this.stage.vars.speed))) +
        Math.abs(this.toNumber(this.vars.power) * 0.15));
    this.vars.g =
      (this.toNumber(this.vars.xVel) * this.toNumber(this.stage.vars.yX) +
        (this.toNumber(this.vars.yVel) * this.toNumber(this.stage.vars.yY) +
          this.toNumber(this.vars.zVel) * this.toNumber(this.stage.vars.yZ)) -
        Math.abs(this.toNumber(this.stage.vars.speed)) * 0.1) *
      (-0.01 - this.toNumber(this.vars.cos) * 0.35);
    this.vars.r = Math.sqrt(
      this.toNumber(this.vars.xVel) * this.toNumber(this.vars.xVel) +
        this.toNumber(this.vars.yVel) * this.toNumber(this.vars.yVel) +
        this.toNumber(this.vars.zVel) * this.toNumber(this.vars.zVel)
    );
    this.vars.store2 =
      (this.toNumber(this.vars.xVel) * this.toNumber(this.stage.vars.xX) +
        (this.toNumber(this.vars.yVel) * this.toNumber(this.stage.vars.xY) +
          this.toNumber(this.vars.zVel) * this.toNumber(this.stage.vars.xZ))) *
      (-0.005 - this.toNumber(this.vars.cos) * 0.125);
    this.vars.xInside =
      0.9 * this.toNumber(this.vars.xInside) +
      (this.toNumber(this.vars.lx) - this.toNumber(this.vars.store2));
    this.vars.yInside =
      0.9 * this.toNumber(this.vars.yInside) +
      (this.toNumber(this.vars.ly) - this.toNumber(this.vars.g));
    this.vars.zInside =
      0.9 * this.toNumber(this.vars.zInside) +
      (this.toNumber(this.vars.lz) -
        this.toNumber(this.stage.vars.speed) +
        0.25);
    this.vars.lx = this.vars.store2;
    this.vars.ly = this.vars.g;
    this.vars.lz = this.stage.vars.speed;
    this.vars.xVel +=
      this.toNumber(this.stage.vars.yX) * this.toNumber(this.vars.g) +
      this.toNumber(this.stage.vars.xX) * this.toNumber(this.vars.store2);
    this.vars.yVel +=
      this.toNumber(this.stage.vars.yY) * this.toNumber(this.vars.g) +
      this.toNumber(this.stage.vars.xY) * this.toNumber(this.vars.store2);
    this.vars.zVel +=
      this.toNumber(this.stage.vars.yZ) * this.toNumber(this.vars.g) +
      this.toNumber(this.stage.vars.xZ) * this.toNumber(this.vars.store2);
    if (this.toNumber(this.vars.broken) === 0) {
      this.vars.b =
        (this.toNumber(this.vars.b) * this.toNumber(this.vars.r)) /
        Math.sqrt(
          this.toNumber(this.vars.xVel) * this.toNumber(this.vars.xVel) +
            this.toNumber(this.vars.yVel) * this.toNumber(this.vars.yVel) +
            this.toNumber(this.vars.zVel) * this.toNumber(this.vars.zVel)
        );
      this.vars.xVel =
        this.toNumber(this.vars.power) *
          (this.toNumber(this.stage.vars.zX) * this.toNumber(this.vars.y2)) +
        this.toNumber(this.vars.xVel) * this.toNumber(this.vars.b);
      this.vars.yVel =
        this.toNumber(this.vars.power) *
          (this.toNumber(this.stage.vars.zY) * this.toNumber(this.vars.y2)) +
        (this.toNumber(this.vars.yVel) * this.toNumber(this.vars.b) - 0.02);
      this.vars.zVel =
        this.toNumber(this.vars.power) *
          (this.toNumber(this.stage.vars.zZ) * this.toNumber(this.vars.y2)) +
        this.toNumber(this.vars.zVel) * this.toNumber(this.vars.b);
      if (this.keyPressed("down arrow")) {
        this.vars.frontBack += 0.05;
      }
      if (this.keyPressed("up arrow")) {
        this.vars.frontBack -= 0.05;
      }
      if (this.keyPressed("left arrow")) {
        this.vars.leftRight += 0.05;
      }
      if (this.keyPressed("right arrow")) {
        this.vars.leftRight -= 0.05;
      }
      if (this.keyPressed("a")) {
        this.vars.backWing -= 0.05;
      }
      if (this.keyPressed("d")) {
        this.vars.backWing += 0.05;
      }
    } else {
      this.vars.yVel -= 0.02;
    }
    this.vars.leftRight = this.toNumber(this.vars.leftRight) * 0.9;
    this.vars.frontBack = this.toNumber(this.vars.frontBack) * 0.9;
    this.vars.backWing = this.toNumber(this.vars.backWing) * 0.9;
    this.vars.xRotation = this.toNumber(this.vars.xRotation) * 0.9;
    this.vars.zRotation = this.toNumber(this.vars.zRotation) * 0.9;
    this.vars.xRotation +=
      3 * this.toNumber(this.vars.frontBack) * this.toNumber(this.vars.cos);
    this.vars.zRotation +=
      -3 * this.toNumber(this.vars.leftRight) * this.toNumber(this.vars.cos);
    this.warp(this.getWorldHeight)(
      this.stage.vars.xPlane,
      this.stage.vars.zPlane,
      0
    );
    this.vars.b =
      this.toNumber(this.vars.store) +
      (0.5 - this.toNumber(this.vars.wheels)) -
      (this.toNumber(this.stage.vars.yPlane) + this.toNumber(this.vars.yVel));
    if (this.compare(0, this.vars.b) < 0) {
      if (this.compare(0, this.stage.vars.yY) < 0) {
        if (this.compare(0, this.stage.vars.speed) < 0) {
          this.vars.yRotation =
            this.toNumber(this.vars.yRotation) * 0.9 -
            3 *
              (this.toNumber(this.vars.backWing) *
                this.toNumber(this.vars.cos));
        } else {
          this.vars.yRotation =
            this.toNumber(this.vars.yRotation) * 0.9 +
            3 *
              (this.toNumber(this.vars.backWing) *
                this.toNumber(this.vars.cos));
        }
        if (this.compare(this.vars.yVel, -0.5) < 0) {
          yield* this.startSound("plunge");
        }
        this.vars.groundCotrol =
          this.toNumber(this.stage.vars.yPlane) -
          (this.toNumber(this.vars.store) +
            (0.5 - this.toNumber(this.vars.wheels)));
        this.vars.xRotation =
          this.toNumber(this.vars.xRotation) * 0.9 +
          -15 *
            this.toNumber(this.vars.groundCotrol) *
            Math.sin(
              this.degToRad(
                this.toNumber(this.vars.actualXRotation) +
                  (this.toNumber(this.vars.slopeZ) *
                    Math.cos(
                      this.degToRad(this.toNumber(this.vars.storeYRotation))
                    ) -
                    this.toNumber(this.vars.slopeX) *
                      Math.sin(
                        this.degToRad(this.toNumber(this.vars.storeYRotation))
                      ))
              )
            );
        this.vars.zRotation =
          this.toNumber(this.vars.zRotation) * 0.9 +
          15 *
            this.toNumber(this.vars.groundCotrol) *
            Math.sin(
              this.degToRad(
                this.toNumber(this.vars.actualZRotation) +
                  (this.toNumber(this.vars.slopeX) *
                    Math.cos(
                      this.degToRad(this.toNumber(this.vars.storeYRotation))
                    ) +
                    this.toNumber(this.vars.slopeZ) *
                      Math.sin(
                        this.degToRad(this.toNumber(this.vars.storeYRotation))
                      ))
              )
            );
        this.vars.store2 =
          0.995 +
          this.radToDeg(
            Math.atan(
              this.toNumber(this.vars.groundCotrol) -
                Math.abs(
                  this.toNumber(this.vars.xVel) *
                    this.toNumber(this.stage.vars.xY) +
                    (this.toNumber(this.vars.yVel) *
                      this.toNumber(this.stage.vars.yY) +
                      this.toNumber(this.vars.zVel) *
                        this.toNumber(this.stage.vars.zX))
                )
            )
          ) /
            1500;
        this.vars.xVel =
          this.toNumber(this.vars.xVel) * this.toNumber(this.vars.store2) +
          -0.05 *
            (Math.sin(this.degToRad(this.toNumber(this.vars.slopeX))) *
              this.toNumber(this.vars.b));
        this.vars.zVel =
          this.toNumber(this.vars.zVel) * this.toNumber(this.vars.store2) +
          -0.05 *
            (Math.sin(this.degToRad(this.toNumber(this.vars.slopeZ))) *
              this.toNumber(this.vars.b));
        if (
          this.toNumber(this.vars.slopeX) * this.toNumber(this.vars.slopeZ) ===
          0
        ) {
          this.vars.yVel =
            this.toNumber(this.vars.yVel) * 0.9 +
            0.1 *
              (Math.cos(this.degToRad(this.toNumber(this.vars.slopeX))) *
                Math.cos(this.degToRad(this.toNumber(this.vars.slopeZ))) *
                this.toNumber(this.vars.b));
        } else {
          this.vars.yVel =
            this.toNumber(this.vars.yVel) * this.toNumber(this.vars.store2) +
            0.05 *
              (Math.cos(this.degToRad(this.toNumber(this.vars.slopeX))) *
                Math.cos(this.degToRad(this.toNumber(this.vars.slopeZ))) *
                this.toNumber(this.vars.b));
        }
        if (
          this.compare(this.vars.wheels, -2) > 0 ||
          this.compare(this.vars.yVel, -1.5) < 0
        ) {
          if (this.toNumber(this.vars.broken) === 0) {
            this.vars.broken = 1;
            this.broadcast("restart");
            yield* this.startSound("plunge");
            this.vars.xRotation =
              this.toNumber(this.vars.xRotation) * 0.8 +
              5 *
                Math.sin(
                  this.degToRad(this.toNumber(this.vars.actualXRotation))
                );
            this.vars.zRotation =
              this.toNumber(this.vars.zRotation) * 0.8 +
              -5 *
                Math.sin(
                  this.degToRad(this.toNumber(this.vars.actualZRotation))
                );
          }
        }
        this.warp(this.xVectorRotate)(
          Math.sin(
            this.degToRad(
              5 *
                (this.toNumber(this.vars.zVel) - this.toNumber(this.vars.zAcc))
            )
          ),
          Math.cos(
            this.degToRad(
              5 *
                (this.toNumber(this.vars.zVel) - this.toNumber(this.vars.zAcc))
            )
          )
        );
        this.warp(this.zVectorRotate)(
          Math.sin(
            this.degToRad(
              5 *
                (this.toNumber(this.vars.xVel) - this.toNumber(this.vars.xAcc))
            )
          ),
          Math.cos(
            this.degToRad(
              5 *
                (this.toNumber(this.vars.xVel) - this.toNumber(this.vars.xAcc))
            )
          )
        );
      }
    } else {
      this.vars.yRotation =
        this.toNumber(this.vars.yRotation) * 0.9 -
        this.toNumber(this.vars.backWing) * this.toNumber(this.vars.cos);
      if (this.toNumber(this.vars.broken) === 0) {
        if (this.compare(this.vars.wheels, -0.99) > 0) {
          if (this.keyPressed("w")) {
            this.vars.resistance = 0.02;
            this.vars.wheelsState = -0.1;
            this.vars.wheels -= 0.1;
            this.broadcast("costume");
          }
        } else {
          if (this.compare(this.vars.wheels, -1.99) < 0) {
            if (this.keyPressed("w")) {
              this.vars.resistance = 0.01;
              this.vars.wheelsState = 0.1;
              this.vars.wheels += 0.1;
              this.broadcast("costume");
            }
          } else {
            this.vars.wheels += this.toNumber(this.vars.wheelsState);
          }
        }
      }
    }
    this.vars.xAcc = this.vars.xVel;
    this.vars.zAcc = this.vars.zVel;
    this.stage.vars.xPlane += this.toNumber(this.vars.xVel);
    this.stage.vars.yPlane += this.toNumber(this.vars.yVel);
    this.stage.vars.zPlane += this.toNumber(this.vars.zVel);
    this.warp(this.rocket)();
  }

  *moveStage(x1, y1, z1, x2, y2, z2) {
    if (this.toNumber(this.vars.shadow) === 1) {
      this.warp(this.getWorldHeight)(x1, z1, 0);
      this.vars.store2 = this.vars.store;
      this.warp(this.getWorldHeight)(x2, z2, 0);
      if (this.toNumber(this.stage.vars.cameraType) === 1) {
        this.warp(this.otherRotateStageY)(
          this.toNumber(x1) - this.toNumber(this.stage.vars.camx),
          this.toNumber(this.vars.store2) - this.toNumber(this.stage.vars.camy),
          this.toNumber(z1) - this.toNumber(this.stage.vars.camz),
          this.toNumber(x2) - this.toNumber(this.stage.vars.camx),
          this.toNumber(this.vars.store) - this.toNumber(this.stage.vars.camy),
          this.toNumber(z2) - this.toNumber(this.stage.vars.camz)
        );
      } else {
        this.warp(this.otherRotateStageY)(
          this.toNumber(x1) - this.toNumber(this.stage.vars.xPlane),
          this.toNumber(this.vars.store2) -
            this.toNumber(this.stage.vars.yPlane),
          this.toNumber(z1) - this.toNumber(this.stage.vars.zPlane),
          this.toNumber(x2) - this.toNumber(this.stage.vars.xPlane),
          this.toNumber(this.vars.store) -
            this.toNumber(this.stage.vars.yPlane),
          this.toNumber(z2) - this.toNumber(this.stage.vars.zPlane)
        );
      }
      if (
        !(
          this.toNumber(this.vars.b) === 70 || this.toNumber(this.vars.b) === 50
        )
      ) {
        if (
          this.compare(
            this.toNumber(y1) + this.toNumber(this.vars.yVel),
            this.vars.store2
          ) < 0
        ) {
          this.warp(this.wingHitsGround)(
            x1,
            this.toNumber(this.vars.store2) -
              (this.toNumber(y1) + this.toNumber(this.vars.yVel)),
            z1,
            0.1,
            0.985
          );
        } else {
          if (
            this.compare(
              this.toNumber(y2) + this.toNumber(this.vars.yVel),
              this.vars.store
            ) < 0
          ) {
            this.warp(this.wingHitsGround)(
              x2,
              this.toNumber(this.vars.store) -
                (this.toNumber(y2) + this.toNumber(this.vars.yVel)),
              z2,
              0.1,
              0.985
            );
          } else {
            if (this.compare(y1, 0) < 0) {
              this.warp(this.wingHitsGround)(
                x1,
                0 - (this.toNumber(y1) + this.toNumber(this.vars.yVel)),
                z1,
                0.0015,
                0.97
              );
            } else {
              if (this.compare(y2, 0) < 0) {
                this.warp(this.wingHitsGround)(
                  x2,
                  0 - (this.toNumber(y2) + this.toNumber(this.vars.yVel)),
                  z2,
                  0.0015,
                  0.97
                );
              }
            }
          }
        }
      }
    } else {
      if (this.toNumber(this.stage.vars.cameraType) === 1) {
        this.warp(this.otherRotateStageY)(
          this.toNumber(x1) - this.toNumber(this.stage.vars.camx),
          this.toNumber(y1) - this.toNumber(this.stage.vars.camy),
          this.toNumber(z1) - this.toNumber(this.stage.vars.camz),
          this.toNumber(x2) - this.toNumber(this.stage.vars.camx),
          this.toNumber(y2) - this.toNumber(this.stage.vars.camy),
          this.toNumber(z2) - this.toNumber(this.stage.vars.camz)
        );
      } else {
        this.warp(this.otherRotateStageY)(
          this.toNumber(x1) - this.toNumber(this.stage.vars.xPlane),
          this.toNumber(y1) - this.toNumber(this.stage.vars.yPlane),
          this.toNumber(z1) - this.toNumber(this.stage.vars.zPlane),
          this.toNumber(x2) - this.toNumber(this.stage.vars.xPlane),
          this.toNumber(y2) - this.toNumber(this.stage.vars.yPlane),
          this.toNumber(z2) - this.toNumber(this.stage.vars.zPlane)
        );
      }
    }
  }

  *wingHitsGround(x1, y1, z1, power, slow) {
    if (this.toNumber(this.vars.broken) === 0) {
      yield* this.startSound("plunge");
      if (this.toNumber(power) === 0.0015) {
        yield* this.startSound("splash.ogg");
      }
      this.vars.broken = 1;
      this.broadcast("restart");
    }
    if (this.compare(0, this.stage.vars.yY) < 0) {
      this.vars.xRotation =
        this.toNumber(this.vars.xRotation) * this.toNumber(slow) +
        this.toNumber(y1) *
          this.toNumber(power) *
          ((this.toNumber(x1) - this.toNumber(this.stage.vars.xPlane)) *
            Math.sin(this.degToRad(this.toNumber(this.vars.storeYRotation))) -
            (this.toNumber(z1) - this.toNumber(this.stage.vars.zPlane)) *
              Math.cos(this.degToRad(this.toNumber(this.vars.storeYRotation))));
    } else {
      this.vars.xRotation =
        this.toNumber(this.vars.xRotation) * this.toNumber(slow) -
        this.toNumber(y1) *
          this.toNumber(power) *
          ((this.toNumber(x1) - this.toNumber(this.stage.vars.xPlane)) *
            Math.sin(this.degToRad(this.toNumber(this.vars.storeYRotation))) -
            (this.toNumber(z1) - this.toNumber(this.stage.vars.zPlane)) *
              Math.cos(this.degToRad(this.toNumber(this.vars.storeYRotation))));
    }
    this.vars.zRotation =
      this.toNumber(this.vars.zRotation) * this.toNumber(slow) +
      this.toNumber(y1) *
        this.toNumber(power) *
        ((this.toNumber(x1) - this.toNumber(this.stage.vars.xPlane)) *
          Math.cos(this.degToRad(this.toNumber(this.vars.storeYRotation))) +
          (this.toNumber(z1) - this.toNumber(this.stage.vars.zPlane)) *
            Math.sin(this.degToRad(this.toNumber(this.vars.storeYRotation))));
    this.vars.xVel =
      this.toNumber(this.vars.xVel) * this.toNumber(slow) +
      this.toNumber(y1) *
        Math.sin(this.degToRad(this.toNumber(this.vars.slopeX))) *
        (this.toNumber(power) * 0.3);
    this.vars.yVel =
      this.toNumber(this.vars.yVel) * this.toNumber(slow) +
      this.toNumber(y1) *
        Math.cos(this.degToRad(this.toNumber(this.vars.slopeZ))) *
        Math.cos(this.degToRad(this.toNumber(this.vars.slopeX))) *
        (this.toNumber(power) * 0.3);
    this.vars.zVel =
      this.toNumber(this.vars.zVel) * this.toNumber(slow) +
      this.toNumber(y1) *
        Math.sin(this.degToRad(this.toNumber(this.vars.slopeZ))) *
        (this.toNumber(power) * 0.3);
    this.warp(this.xVectorRotate)(
      Math.sin(
        this.degToRad(
          2 * (this.toNumber(this.vars.zVel) - this.toNumber(this.vars.zAcc))
        )
      ),
      Math.cos(
        this.degToRad(
          2 * (this.toNumber(this.vars.zVel) - this.toNumber(this.vars.zAcc))
        )
      )
    );
    this.warp(this.zVectorRotate)(
      Math.sin(
        this.degToRad(
          2 * (this.toNumber(this.vars.xVel) - this.toNumber(this.vars.xAcc))
        )
      ),
      Math.cos(
        this.degToRad(
          2 * (this.toNumber(this.vars.xVel) - this.toNumber(this.vars.xAcc))
        )
      )
    );
  }

  *cameraControl() {
    if (this.compare(0, this.stage.vars.zY) < 0) {
      this.vars.storeXRotation =
        90 +
        this.radToDeg(
          Math.atan(
            Math.sqrt(
              this.toNumber(this.stage.vars.zX) *
                this.toNumber(this.stage.vars.zX) +
                this.toNumber(this.stage.vars.zZ) *
                  this.toNumber(this.stage.vars.zZ)
            ) / this.toNumber(this.stage.vars.zY)
          )
        );
    } else {
      this.vars.storeXRotation =
        this.radToDeg(
          Math.atan(
            Math.sqrt(
              this.toNumber(this.stage.vars.zX) *
                this.toNumber(this.stage.vars.zX) +
                this.toNumber(this.stage.vars.zZ) *
                  this.toNumber(this.stage.vars.zZ)
            ) / this.toNumber(this.stage.vars.zY)
          )
        ) - 90;
    }
    if (this.toNumber(this.stage.vars.zX) === 0) {
      if (this.compare(0, this.stage.vars.xZ) < 0) {
        this.vars.storeYRotation =
          90 +
          this.radToDeg(
            Math.atan(
              this.toNumber(this.stage.vars.xX) /
                this.toNumber(this.stage.vars.xZ)
            )
          );
      } else {
        this.vars.storeYRotation =
          this.radToDeg(
            Math.atan(
              this.toNumber(this.stage.vars.xX) /
                this.toNumber(this.stage.vars.xZ)
            )
          ) - 90;
      }
    } else {
      if (this.compare(0, this.stage.vars.zX) < 0) {
        this.vars.storeYRotation =
          90 +
          this.radToDeg(
            Math.atan(
              this.toNumber(this.stage.vars.zZ) /
                this.toNumber(this.stage.vars.zX)
            )
          );
      } else {
        this.vars.storeYRotation =
          this.radToDeg(
            Math.atan(
              this.toNumber(this.stage.vars.zZ) /
                this.toNumber(this.stage.vars.zX)
            )
          ) - 90;
      }
    }
    if (
      Math.round(this.toNumber(this.stage.vars.xPlane)) === 0 &&
      Math.round(this.toNumber(this.stage.vars.zPlane)) === 5
    ) {
      this.stage.vars.rotcamx += 2;
      this.stage.vars.rotcamy += 15;
    }
    if (this.toNumber(this.stage.vars.cameraType) === 1) {
      this.stage.vars.rotcamx +=
        (((this.toNumber(this.vars.storeXRotation) -
          (this.toNumber(this.stage.vars.rotcamx) +
            this.mouse.y *
              this.toNumber(
                this.mouse.down &&
                  this.compare(Math.abs(this.mouse.x), 240) < 0 &&
                    this.compare(Math.abs(this.mouse.y), 180) < 0
              ))) %
          360) -
          180) *
        0.1;
      this.stage.vars.rotcamy +=
        (((this.toNumber(this.vars.storeYRotation) -
          (this.toNumber(this.stage.vars.rotcamy) +
            this.mouse.x *
              this.toNumber(
                this.mouse.down &&
                  this.compare(Math.abs(this.mouse.x), 240) < 0 &&
                    this.compare(Math.abs(this.mouse.y), 180) < 0
              ))) %
          360) -
          180) *
        0.1;
      this.stage.vars.camx =
        (this.toNumber(this.stage.vars.camx) +
          (this.toNumber(this.stage.vars.xPlane) +
            25 *
              (this.toNumber(this.vars.cosx) *
                this.toNumber(this.vars.siny)))) *
        0.5;
      this.warp(this.getWorldHeight)(
        this.stage.vars.camx,
        this.stage.vars.camz,
        0
      );
      if (this.compare(this.vars.store, 1) < 0) {
        this.vars.store = 1;
      }
      if (
        this.compare(
          (this.toNumber(this.stage.vars.camy) +
            (this.toNumber(this.stage.vars.yPlane) +
              25 * this.toNumber(this.vars.sinx))) *
            0.5,
          2 + this.toNumber(this.vars.store)
        ) < 0
      ) {
        this.stage.vars.camy =
          (this.toNumber(this.stage.vars.camy) +
            (2 + this.toNumber(this.vars.store))) *
          0.5;
      } else {
        this.stage.vars.camy =
          (this.toNumber(this.stage.vars.camy) +
            (this.toNumber(this.stage.vars.yPlane) +
              25 * this.toNumber(this.vars.sinx))) *
          0.5;
      }
      this.stage.vars.camz =
        (this.toNumber(this.stage.vars.camz) +
          (this.toNumber(this.stage.vars.zPlane) -
            25 *
              (this.toNumber(this.vars.cosx) *
                this.toNumber(this.vars.cosy)))) *
        0.5;
    } else {
      this.stage.vars.camx = this.stage.vars.xPlane;
      this.stage.vars.camy = this.stage.vars.yPlane;
      this.stage.vars.camz = this.stage.vars.zPlane;
      this.stage.vars.rotcamy = 180 + this.toNumber(this.vars.storeYRotation);
    }
  }

  *water(x, z) {
    this.vars.r = "water";
    this.warp(this.moveMountain)(
      this.toNumber(x) - 20,
      0,
      this.toNumber(z) - 20,
      this.toNumber(x) + 20,
      0,
      this.toNumber(z) - 20,
      this.toNumber(x) + 20,
      0,
      this.toNumber(z) + 20
    );
    this.warp(this.moveMountain)(
      this.toNumber(x) - 20,
      0,
      this.toNumber(z) - 20,
      this.toNumber(x) - 20,
      0,
      this.toNumber(z) + 20,
      this.toNumber(x) + 20,
      0,
      this.toNumber(z) + 20
    );
  }

  *generateWorld() {
    this.vars.store = 0;
    this.vars.terrain = [];
    for (
      let i = 0;
      i <
      this.toNumber(this.stage.vars.worldSize) *
        this.toNumber(this.stage.vars.worldSize);
      i++
    ) {
      if (
        this.compare(
          this.toNumber(this.vars.store) / this.vars.terrain.length,
          0.1
        ) < 0
      ) {
        this.vars.terrain.push(this.random(5, 25));
      } else {
        if (
          this.compare(
            this.toNumber(this.vars.store) / this.vars.terrain.length,
            0.2
          ) > 0
        ) {
          this.vars.terrain.push(0);
        } else {
          this.vars.terrain.push(
            this.random(10, 25) * Math.round(this.random(0, 1))
          );
        }
      }
      this.vars.store +=
        0 +
        this.toNumber(
          this.compare(
            0,
            this.itemOf(this.vars.terrain, this.vars.terrain.length - 1)
          ) < 0
        );
    }
    this.vars.terrain.splice(0, 1, -2);
    this.vars.terrain.splice(1, 1, -2);
    this.vars.terrain.splice(2, 1, -2);
    this.vars.terrain.splice(3, 1, -2);
    this.vars.terrain.splice(4, 1, -2);
    this.vars.terrain.splice(5, 1, -2);
    this.vars.terrain.splice(6, 1, 0);
    this.vars.terrain.splice(this.stage.vars.worldSize - 1, 1, -2);
    this.vars.terrain.splice(
      this.toNumber(this.stage.vars.worldSize) - 2,
      1,
      0
    );
    this.vars.store = 0;
    this.vars.dot = 3;
    this.vars.counter = 2;
    for (let i = 0; i < this.toNumber(this.stage.vars.worldSize); i++) {
      if (this.compare(this.vars.dot, 1) < 0) {
        this.vars.dot = this.random(7, 2);
        if (this.toNumber(this.vars.counter) === 2) {
          this.vars.terrain.splice(
            this.toNumber(this.vars.counter) *
              this.toNumber(this.stage.vars.worldSize) +
              (this.toNumber(this.vars.store) + 1) -
              1,
            1,
            -1
          );
          this.vars.counter = 3;
        } else {
          this.vars.terrain.splice(
            this.toNumber(this.vars.counter) *
              this.toNumber(this.stage.vars.worldSize) +
              (this.toNumber(this.vars.store) + 1) -
              1,
            1,
            -1
          );
          this.vars.counter = 2;
        }
      } else {
        this.vars.dot--;
      }
      this.vars.terrain.splice(
        this.toNumber(this.vars.counter) *
          this.toNumber(this.stage.vars.worldSize) +
          (this.toNumber(this.vars.store) + 1) -
          1,
        1,
        -1
      );
      this.vars.store++;
    }
  }

  *renderOther() {
    this.penColor = Color.rgb(11, 125, 87);
    this.penDown = false;
    this.goto(0, -150);
    this.penSize = 45;
    this.penDown = true;
    this.penColor = Color.rgb(150, 210, 190);
    this.penSize = 2;
    this.warp(this.minimap)(0, 0);
    this.warp(this.minimap)(0, 50);
    this.warp(this.minimap)(0, 100);
    this.warp(this.minimap)(0, this.toNumber(this.stage.vars.worldSize) * 40);
    this.warp(this.minimap)(
      0,
      this.toNumber(this.stage.vars.worldSize) * 40 + 50
    );
    this.warp(this.minimap)(
      0,
      this.toNumber(this.stage.vars.worldSize) * 40 + 100
    );
    this.penDown = false;
    this.goto(-20, -130);
    this.penSize = 7;
    this.penColor = Color.rgb(0, 0, 0);
    this.penDown = true;
    this.goto(-20, -170);
    this.goto(20, -170);
    this.goto(20, -130);
    this.goto(-20, -130);
  }

  *renderWorld() {
    this.clearPen();
    this.warp(this.staticValues)();
    this.warp(this.renderBackground)();
    this.vars.shadow = 0;
    this.warp(this.renderRunwayHills)();
    this.vars.shadow = 1;
    this.warp(this.renderRocket)();
    this.warp(this.renderPlane)();
    this.vars.shadow = 0;
    this.warp(this.renderRocket)();
    this.warp(this.renderPlane)();
    this.warp(this.renderThrottle)();
  }

  *renderRocket() {
    this.vars.r = 70;
    this.vars.g = 70;
    this.vars.b = 70;
    yield* this.moveStage(
      this.vars.rocketX,
      this.vars.rocketY,
      this.vars.rocketZ,
      this.toNumber(this.vars.rocketX) + this.toNumber(this.vars.rocketVelX),
      this.toNumber(this.vars.rocketY) + this.toNumber(this.vars.rocketVelY),
      this.toNumber(this.vars.rocketZ) + this.toNumber(this.vars.rocketVelZ)
    );
    this.vars.r = 255;
    this.vars.g = 255;
    this.vars.b = 50;
    if (this.compare(100, this.vars.rocketFire) < 0) {
      if (this.compare(120, this.vars.rocketFire) < 0) {
        this.vars.rocketFire = 0;
      }
      yield* this.moveStage(
        this.toNumber(this.vars.rocketX) +
          2 *
            this.random(
              Math.sin(
                this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * -9)
              ),
              0.01 +
                Math.sin(
                  this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * 9)
                )
            ),
        this.toNumber(this.vars.rocketY) +
          2 *
            this.random(
              Math.sin(
                this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * -9)
              ),
              0.01 +
                Math.sin(
                  this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * 9)
                )
            ),
        this.toNumber(this.vars.rocketZ) +
          2 *
            this.random(
              Math.sin(
                this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * -9)
              ),
              0.01 +
                Math.sin(
                  this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * 9)
                )
            ),
        this.toNumber(this.vars.rocketX) +
          2 *
            this.random(
              Math.sin(
                this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * -9)
              ),
              0.01 +
                Math.sin(
                  this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * 9)
                )
            ),
        this.toNumber(this.vars.rocketY) +
          2 *
            this.random(
              Math.sin(
                this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * -9)
              ),
              0.01 +
                Math.sin(
                  this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * 9)
                )
            ),
        this.toNumber(this.vars.rocketZ) +
          2 *
            this.random(
              Math.sin(
                this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * -9)
              ),
              0.01 +
                Math.sin(
                  this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * 9)
                )
            )
      );
      yield* this.moveStage(
        this.toNumber(this.vars.rocketX) +
          2 *
            this.random(
              Math.sin(
                this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * -9)
              ),
              0.01 +
                Math.sin(
                  this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * 9)
                )
            ),
        this.toNumber(this.vars.rocketY) +
          2 *
            this.random(
              Math.sin(
                this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * -9)
              ),
              0.01 +
                Math.sin(
                  this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * 9)
                )
            ),
        this.toNumber(this.vars.rocketZ) +
          2 *
            this.random(
              Math.sin(
                this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * -9)
              ),
              0.01 +
                Math.sin(
                  this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * 9)
                )
            ),
        this.toNumber(this.vars.rocketX) +
          2 *
            this.random(
              Math.sin(
                this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * -9)
              ),
              0.01 +
                Math.sin(
                  this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * 9)
                )
            ),
        this.toNumber(this.vars.rocketY) +
          2 *
            this.random(
              Math.sin(
                this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * -9)
              ),
              0.01 +
                Math.sin(
                  this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * 9)
                )
            ),
        this.toNumber(this.vars.rocketZ) +
          2 *
            this.random(
              Math.sin(
                this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * -9)
              ),
              0.01 +
                Math.sin(
                  this.degToRad((this.toNumber(this.vars.rocketFire) - 100) * 9)
                )
            )
      );
    } else {
      if (this.compare(0, this.vars.rocketFire) < 0) {
        yield* this.moveStage(
          this.vars.rocketX,
          this.vars.rocketY,
          this.vars.rocketZ,
          this.toNumber(this.vars.rocketX) -
            this.toNumber(this.vars.rocketVelX) +
            this.random(-1, 1),
          this.toNumber(this.vars.rocketY) -
            this.toNumber(this.vars.rocketVelY) +
            this.random(-1, 1),
          this.toNumber(this.vars.rocketZ) -
            this.toNumber(this.vars.rocketVelZ) +
            this.random(-1, 1)
        );
        yield* this.moveStage(
          this.vars.rocketX,
          this.vars.rocketY,
          this.vars.rocketZ,
          this.toNumber(this.vars.rocketX) -
            this.toNumber(this.vars.rocketVelX) +
            this.random(-1, 1),
          this.toNumber(this.vars.rocketY) -
            this.toNumber(this.vars.rocketVelY) +
            this.random(-1, 1),
          this.toNumber(this.vars.rocketZ) -
            this.toNumber(this.vars.rocketVelZ) +
            this.random(-1, 1)
        );
      }
    }
  }

  *moveMountain(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
    if (this.toNumber(this.stage.vars.cameraType) === 1) {
      yield* this.mountainRotateStageY(
        this.toNumber(x1) - this.toNumber(this.stage.vars.camx),
        this.toNumber(y1) - this.toNumber(this.stage.vars.camy),
        this.toNumber(z1) - this.toNumber(this.stage.vars.camz),
        this.toNumber(x2) - this.toNumber(this.stage.vars.camx),
        this.toNumber(y2) - this.toNumber(this.stage.vars.camy),
        this.toNumber(z2) - this.toNumber(this.stage.vars.camz),
        this.toNumber(x3) - this.toNumber(this.stage.vars.camx),
        this.toNumber(y3) - this.toNumber(this.stage.vars.camy),
        this.toNumber(z3) - this.toNumber(this.stage.vars.camz)
      );
    } else {
      yield* this.mountainRotateStageY(
        this.toNumber(x1) - this.toNumber(this.stage.vars.xPlane),
        this.toNumber(y1) - this.toNumber(this.stage.vars.yPlane),
        this.toNumber(z1) - this.toNumber(this.stage.vars.zPlane),
        this.toNumber(x2) - this.toNumber(this.stage.vars.xPlane),
        this.toNumber(y2) - this.toNumber(this.stage.vars.yPlane),
        this.toNumber(z2) - this.toNumber(this.stage.vars.zPlane),
        this.toNumber(x3) - this.toNumber(this.stage.vars.xPlane),
        this.toNumber(y3) - this.toNumber(this.stage.vars.yPlane),
        this.toNumber(z3) - this.toNumber(this.stage.vars.zPlane)
      );
    }
  }

  *getWorldHeight(xp, zp, break2) {
    if (break2) {
      this.stage.vars.breakTerrain =
        (Math.round(this.toNumber(xp) / 40) %
          this.toNumber(this.stage.vars.worldSize)) *
          this.toNumber(this.stage.vars.worldSize) +
        ((Math.round(this.toNumber(zp) / 40) %
          this.toNumber(this.stage.vars.worldSize)) +
          1);
      this.vars.store = this.itemOf(
        this.vars.terrain,
        this.stage.vars.breakTerrain - 1
      );
    } else {
      this.vars.store = this.itemOf(
        this.vars.terrain,
        (Math.round(this.toNumber(xp) / 40) %
          this.toNumber(this.stage.vars.worldSize)) *
          this.toNumber(this.stage.vars.worldSize) +
          ((Math.round(this.toNumber(zp) / 40) %
            this.toNumber(this.stage.vars.worldSize)) +
            1) -
          1
      );
    }
    if (this.compare(0, this.vars.store) < 0) {
      this.warp(this.determineHeightForHill)(
        xp,
        zp,
        Math.round(this.toNumber(xp) / 40) * 40,
        Math.round(this.toNumber(zp) / 40) * 40,
        this.vars.store
      );
    } else {
      if (-1 === this.toNumber(this.vars.store)) {
        this.warp(this.determineHeightForRiver)(
          xp,
          zp,
          Math.round(this.toNumber(xp) / 40) * 40,
          Math.round(this.toNumber(zp) / 40) * 40
        );
      } else {
        this.vars.store = 0;
      }
      this.vars.slopeX = 0;
      this.vars.slopeZ = 0;
    }
  }

  *determineHeightForRiver(x, z, xp, zp) {
    this.vars.x1 = this.itemOf(
      this.vars.terrain,
      (Math.round(this.toNumber(xp) / 40 - 1) %
        this.toNumber(this.stage.vars.worldSize)) *
        this.toNumber(this.stage.vars.worldSize) +
        ((Math.round(this.toNumber(zp) / 40) %
          this.toNumber(this.stage.vars.worldSize)) +
          1) -
        1
    );
    this.vars.x2 = this.itemOf(
      this.vars.terrain,
      (Math.round(this.toNumber(xp) / 40 + 1) %
        this.toNumber(this.stage.vars.worldSize)) *
        this.toNumber(this.stage.vars.worldSize) +
        ((Math.round(this.toNumber(zp) / 40) %
          this.toNumber(this.stage.vars.worldSize)) +
          1) -
        1
    );
    this.vars.y1 = this.itemOf(
      this.vars.terrain,
      (Math.round(this.toNumber(xp) / 40) %
        this.toNumber(this.stage.vars.worldSize)) *
        this.toNumber(this.stage.vars.worldSize) +
        ((Math.round(this.toNumber(zp) / 40 - 1) %
          this.toNumber(this.stage.vars.worldSize)) +
          1) -
        1
    );
    this.vars.y2 = this.itemOf(
      this.vars.terrain,
      (Math.round(this.toNumber(xp) / 40) %
        this.toNumber(this.stage.vars.worldSize)) *
        this.toNumber(this.stage.vars.worldSize) +
        ((Math.round(this.toNumber(zp) / 40 + 1) %
          this.toNumber(this.stage.vars.worldSize)) +
          1) -
        1
    );
    if (
      this.compare(
        Math.abs(this.toNumber(x) - this.toNumber(xp)),
        Math.abs(this.toNumber(z) - this.toNumber(zp))
      ) > 0
    ) {
      if (this.compare(x, xp) > 0) {
        if (this.compare(-1, this.vars.x2) < 0) {
          this.vars.store =
            (20 - Math.abs(this.toNumber(x) - this.toNumber(xp))) * -0.25;
          this.vars.slopeX = this.radToDeg(Math.atan(-0.25));
          this.vars.slopeZ = 0;
        } else {
          if (this.compare(z, zp) > 0) {
            this.vars.store =
              (20 - Math.abs(this.toNumber(z) - this.toNumber(zp))) * -0.25;
            this.vars.slopeZ = this.radToDeg(Math.atan(-0.25));
          } else {
            this.vars.store =
              (20 - Math.abs(this.toNumber(z) - this.toNumber(zp))) * -0.25;
            this.vars.slopeZ = this.radToDeg(Math.atan(0.25));
          }
          this.vars.slopeX = 0;
        }
      } else {
        if (this.compare(-1, this.vars.x1) < 0) {
          this.vars.store =
            (20 - Math.abs(this.toNumber(x) - this.toNumber(xp))) * -0.25;
          this.vars.slopeX = this.radToDeg(Math.atan(0.25));
          this.vars.slopeZ = 0;
        } else {
          if (this.compare(z, zp) > 0) {
            this.vars.store =
              (20 - Math.abs(this.toNumber(z) - this.toNumber(zp))) * -0.25;
            this.vars.slopeZ = this.radToDeg(Math.atan(-0.25));
          } else {
            this.vars.store =
              (20 - Math.abs(this.toNumber(z) - this.toNumber(zp))) * -0.25;
            this.vars.slopeZ = this.radToDeg(Math.atan(0.25));
          }
          this.vars.slopeX = 0;
        }
      }
    } else {
      if (this.compare(z, zp) > 0) {
        if (this.compare(-1, this.vars.y2) < 0) {
          this.vars.store =
            (20 - Math.abs(this.toNumber(z) - this.toNumber(zp))) * -0.25;
          this.vars.slopeZ = this.radToDeg(Math.atan(-0.25));
          this.vars.slopeX = 0;
        } else {
          if (this.compare(z, zp) > 0) {
            this.vars.store =
              (20 - Math.abs(this.toNumber(x) - this.toNumber(xp))) * -0.25;
            this.vars.slopeX = this.radToDeg(Math.atan(-0.25));
          } else {
            this.vars.store =
              (20 - Math.abs(this.toNumber(x) - this.toNumber(xp))) * -0.25;
            this.vars.slopeX = this.radToDeg(Math.atan(0.25));
          }
          this.vars.slopeZ = 0;
        }
      } else {
        if (this.compare(-1, this.vars.y1) < 0) {
          this.vars.store =
            (20 - Math.abs(this.toNumber(z) - this.toNumber(zp))) * -0.25;
          this.vars.slopeZ = this.radToDeg(Math.atan(0.25));
          this.vars.slopeX = 0;
        } else {
          if (this.compare(z, zp) > 0) {
            this.vars.store =
              (20 - Math.abs(this.toNumber(x) - this.toNumber(xp))) * -0.25;
            this.vars.slopeX = this.radToDeg(Math.atan(-0.25));
          } else {
            this.vars.store =
              (20 - Math.abs(this.toNumber(x) - this.toNumber(xp))) * -0.25;
            this.vars.slopeX = this.radToDeg(Math.atan(0.25));
          }
          this.vars.slopeZ = 0;
        }
      }
    }
  }

  *otherRotateStageY(x1, y1, z1, x2, y2, z2) {
    if (!(this.toString(this.vars.x0) === "grass")) {
      if (this.toNumber(this.vars.b) === 254) {
        this.warp(this.setColor)(200, 50, 200, 255);
      } else {
        if (this.toString(this.vars.b) === "cloud") {
          this.warp(this.setColor)(50, 255, 255, 255);
        } else {
          this.vars.x =
            (this.toNumber(x1) + this.toNumber(x2)) *
              (this.toNumber(x1) + this.toNumber(x2)) +
            ((this.toNumber(y1) + this.toNumber(y2)) *
              (this.toNumber(y1) + this.toNumber(y2)) +
              (this.toNumber(z1) + this.toNumber(z2)) *
                (this.toNumber(z1) + this.toNumber(z2)));
          if (this.compare(80000, this.vars.x) < 0) {
            if (this.compare(140000, this.vars.x) > 0) {
              this.warp(this.setColor)(
                Math.round(
                  255 * ((80000 - this.toNumber(this.vars.x)) / 60000)
                ),
                this.vars.r,
                this.vars.g,
                this.vars.b
              );
            } else {
              return;
            }
          } else {
            if (
              this.compare(
                -0.0001,
                this.toNumber(y1) +
                  this.toNumber(y2) +
                  this.toNumber(this.stage.vars.camy) * 2
              ) < 0
            ) {
              this.vars.dot = 0;
            } else {
              if (
                this.compare(
                  -1,
                  this.toNumber(y1) +
                    this.toNumber(y2) +
                    this.toNumber(this.stage.vars.camy) * 2
                ) > 0
              ) {
                this.vars.dot = 1;
              } else {
                this.vars.dot =
                  -1 *
                  (this.toNumber(y1) +
                    this.toNumber(y2) +
                    this.toNumber(this.stage.vars.camy) * 2);
              }
            }
            this.warp(this.setColor)(
              255,
              Math.round(
                64 * this.toNumber(this.vars.dot) +
                  (1 - this.toNumber(this.vars.dot)) *
                    this.toNumber(this.vars.r)
              ),
              Math.round(
                123 * this.toNumber(this.vars.dot) +
                  (1 - this.toNumber(this.vars.dot)) *
                    this.toNumber(this.vars.g)
              ),
              Math.round(
                123 * this.toNumber(this.vars.dot) +
                  (1 - this.toNumber(this.vars.dot)) *
                    this.toNumber(this.vars.b)
              )
            );
          }
        }
      }
    }
    if (this.toNumber(this.stage.vars.cameraType) === 1) {
      this.warp(this.rotateStageX)(
        this.toNumber(x1) * this.toNumber(this.vars.cosy) +
          this.toNumber(z1) * this.toNumber(this.vars.siny),
        y1,
        this.toNumber(z1) * this.toNumber(this.vars.cosy) -
          this.toNumber(x1) * this.toNumber(this.vars.siny),
        this.toNumber(x2) * this.toNumber(this.vars.cosy) +
          this.toNumber(z2) * this.toNumber(this.vars.siny),
        y2,
        this.toNumber(z2) * this.toNumber(this.vars.cosy) -
          this.toNumber(x2) * this.toNumber(this.vars.siny)
      );
    } else {
      if (
        this.toNumber(this.vars.b) === 250 ||
        this.toString(this.vars.g) === "cloud"
      ) {
        this.warp(this.displayLine)(
          this.toNumber(x1) * this.toNumber(this.vars.xx) +
            this.toNumber(y1) * this.toNumber(this.vars.yx) +
            this.toNumber(z1) * this.toNumber(this.vars.zx),
          this.toNumber(x1) * this.toNumber(this.vars.xy) +
            this.toNumber(y1) * this.toNumber(this.vars.yy) +
            this.toNumber(z1) * this.toNumber(this.vars.zy),
          this.toNumber(x1) * this.toNumber(this.vars.xz) +
            this.toNumber(y1) * this.toNumber(this.vars.yz) +
            this.toNumber(z1) * this.toNumber(this.vars.zz),
          this.toNumber(x2) * this.toNumber(this.vars.xx) +
            this.toNumber(y2) * this.toNumber(this.vars.yx) +
            this.toNumber(z2) * this.toNumber(this.vars.zx),
          this.toNumber(x2) * this.toNumber(this.vars.xy) +
            this.toNumber(y2) * this.toNumber(this.vars.yy) +
            this.toNumber(z2) * this.toNumber(this.vars.zy),
          this.toNumber(x2) * this.toNumber(this.vars.xz) +
            this.toNumber(y2) * this.toNumber(this.vars.yz) +
            this.toNumber(z2) * this.toNumber(this.vars.zz)
        );
      } else {
        this.warp(this.displayLine)(
          this.toNumber(x1) * this.toNumber(this.vars.xx) +
            this.toNumber(y1) * this.toNumber(this.vars.yx) +
            (this.toNumber(z1) * this.toNumber(this.vars.zx) -
              this.toNumber(this.vars.xInside)),
          this.toNumber(x1) * this.toNumber(this.vars.xy) +
            this.toNumber(y1) * this.toNumber(this.vars.yy) +
            (this.toNumber(z1) * this.toNumber(this.vars.zy) -
              this.toNumber(this.vars.yInside)),
          this.toNumber(x1) * this.toNumber(this.vars.xz) +
            this.toNumber(y1) * this.toNumber(this.vars.yz) +
            (this.toNumber(z1) * this.toNumber(this.vars.zz) -
              this.toNumber(this.vars.zInside)),
          this.toNumber(x2) * this.toNumber(this.vars.xx) +
            this.toNumber(y2) * this.toNumber(this.vars.yx) +
            (this.toNumber(z2) * this.toNumber(this.vars.zx) -
              this.toNumber(this.vars.xInside)),
          this.toNumber(x2) * this.toNumber(this.vars.xy) +
            this.toNumber(y2) * this.toNumber(this.vars.yy) +
            (this.toNumber(z2) * this.toNumber(this.vars.zy) -
              this.toNumber(this.vars.yInside)),
          this.toNumber(x2) * this.toNumber(this.vars.xz) +
            this.toNumber(y2) * this.toNumber(this.vars.yz) +
            (this.toNumber(z2) * this.toNumber(this.vars.zz) -
              this.toNumber(this.vars.zInside))
        );
      }
    }
  }

  *determineHeightForHill(x, z, xp, zp, h) {
    if (
      this.compare(Math.abs(this.toNumber(x) - this.toNumber(xp)), 20) < 0 &&
      this.compare(Math.abs(this.toNumber(z) - this.toNumber(zp)), 20) < 0
    ) {
      if (
        this.compare(
          Math.abs(this.toNumber(x) - this.toNumber(xp)),
          Math.abs(this.toNumber(z) - this.toNumber(zp))
        ) > 0
      ) {
        this.vars.store =
          (20 - Math.abs(this.toNumber(x) - this.toNumber(xp))) *
          (this.toNumber(h) / 20);
        if (this.compare(x, xp) > 0) {
          this.vars.slopeX = this.radToDeg(Math.atan(this.toNumber(h) / -20));
        } else {
          this.vars.slopeX = this.radToDeg(Math.atan(this.toNumber(h) / 20));
        }
        this.vars.slopeZ = 0;
      } else {
        this.vars.store =
          (20 - Math.abs(this.toNumber(z) - this.toNumber(zp))) *
          (this.toNumber(h) / 20);
        if (this.compare(z, zp) > 0) {
          this.vars.slopeZ = this.radToDeg(Math.atan(this.toNumber(h) / -20));
        } else {
          this.vars.slopeZ = this.radToDeg(Math.atan(this.toNumber(h) / 20));
        }
        this.vars.slopeX = 0;
      }
    } else {
      this.vars.store = 0;
      this.vars.slopeX = 0;
      this.vars.slopeZ = 0;
    }
  }

  *fire(x1, x2, x3, y, z1, z2, z3) {
    this.vars.r = 255;
    this.vars.g = this.random(200, 255);
    this.vars.b = 50;
    this.warp(this.plane3dRotatedByXz)(
      x1,
      this.random(-0.5, 0.5),
      z1,
      x3,
      y,
      z3
    );
    this.warp(this.plane3dRotatedByXz)(
      x2,
      this.random(-0.5, 0.5),
      z2,
      x3,
      y,
      z3
    );
  }

  *renderFire() {
    yield* this.fire(
      this.random(0.5, 1.5),
      this.random(2.5, 3.5),
      Math.sin(this.degToRad(this.timer * 230)) + this.random(1.5, 2.5),
      this.random(2.5, 4.5),
      this.random(1.5, 0.5),
      this.random(1.5, 0.5),
      Math.sin(this.degToRad(this.timer * 230)) + this.random(1.5, 2.5)
    );
    yield* this.fire(
      this.random(-0.5, -1.5),
      this.random(-2.5, -3.5),
      Math.sin(this.degToRad(this.timer * 220 + 30)) + this.random(-1.5, -2.5),
      this.random(2.5, 4.5),
      this.random(1.5, 0.5),
      this.random(1.5, 0.5),
      Math.sin(this.degToRad(this.timer * 220 + 30)) + this.random(1.5, 2.5)
    );
    yield* this.fire(
      this.random(-0.5, 0.5),
      this.random(-0.5, 0.5),
      Math.sin(this.degToRad(this.timer * 200 + 190)) + this.random(-0.5, 0.5),
      this.random(2.5, 4.5),
      this.random(-3.5, -4.5),
      this.random(-3.5, -4.5),
      Math.sin(this.degToRad(this.timer * 200 + 190)) + this.random(-3.5, -4.5)
    );
    yield* this.fire(
      this.random(-0.5, 0.5),
      this.random(-0.5, 0.5),
      Math.sin(this.degToRad(this.timer * 210 + 190)) + this.random(-0.5, 0.5),
      this.random(2.5, 4.5),
      this.random(3.5, 4.5),
      this.random(3.5, 4.5),
      Math.sin(this.degToRad(this.timer * 210 + 190)) + this.random(3.5, 4.5)
    );
  }

  *worldElementSorted(x, z) {
    this.vars.store = this.itemOf(
      this.vars.terrain,
      (Math.round(
        this.toNumber(x) + this.toNumber(this.stage.vars.xPlane) / 40
      ) %
        this.toNumber(this.stage.vars.worldSize)) *
        this.toNumber(this.stage.vars.worldSize) +
        ((Math.round(
          this.toNumber(z) + this.toNumber(this.stage.vars.zPlane) / 40
        ) %
          this.toNumber(this.stage.vars.worldSize)) +
          1) -
        1
    );
    if (this.compare(0, this.vars.store) < 0) {
      this.warp(this.hill)(
        this.toNumber(x) * 40 +
          Math.round(this.toNumber(this.stage.vars.xPlane) / 40) * 40,
        this.toNumber(z) * 40 +
          Math.round(this.toNumber(this.stage.vars.zPlane) / 40) * 40,
        this.vars.store
      );
    } else {
      if (-1 === this.toNumber(this.vars.store)) {
        this.warp(this.water)(
          this.toNumber(x) * 40 +
            Math.round(this.toNumber(this.stage.vars.xPlane) / 40) * 40,
          this.toNumber(z) * 40 +
            Math.round(this.toNumber(this.stage.vars.zPlane) / 40) * 40
        );
      } else {
        if (-2 === this.toNumber(this.vars.store)) {
          this.warp(this.airstrip)(
            this.toNumber(x) * 40 +
              Math.round(this.toNumber(this.stage.vars.xPlane) / 40) * 40,
            this.toNumber(z) * 40 +
              Math.round(this.toNumber(this.stage.vars.zPlane) / 40) * 40
          );
        }
      }
    }
  }

  *airstrip(x, z) {
    this.vars.r = "airstrip";
    yield* this.moveMountain(
      this.toNumber(x) - 20,
      0,
      this.toNumber(z) - 20,
      this.toNumber(x) + 20,
      0,
      this.toNumber(z) - 20,
      this.toNumber(x) + 20,
      0,
      this.toNumber(z) + 20
    );
    yield* this.moveMountain(
      this.toNumber(x) - 20,
      0,
      this.toNumber(z) - 20,
      this.toNumber(x) - 20,
      0,
      this.toNumber(z) + 20,
      this.toNumber(x) + 20,
      0,
      this.toNumber(z) + 20
    );
  }

  *mountainRotateStageY(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
    this.vars.store =
      (this.toNumber(x1) + (this.toNumber(x2) + this.toNumber(x3))) *
        (this.toNumber(x1) + (this.toNumber(x2) + this.toNumber(x3))) +
      ((this.toNumber(y1) + (this.toNumber(y2) + this.toNumber(y3))) *
        (this.toNumber(y1) + (this.toNumber(y2) + this.toNumber(y3))) +
        (this.toNumber(z1) + (this.toNumber(z2) + this.toNumber(z3))) *
          (this.toNumber(z1) + (this.toNumber(z2) + this.toNumber(z3))));
    if (this.compare(180000, this.vars.store) < 0) {
      if (this.compare(315000, this.vars.store) > 0) {
        if (this.toString(this.vars.r) === "airstrip") {
          this.warp(this.setColor)(
            Math.round(
              255 * ((180000 - this.toNumber(this.vars.store)) / 135000)
            ),
            40,
            30,
            40
          );
        } else {
          if (this.toString(this.vars.r) === "water") {
            this.warp(this.setColor)(
              Math.round(
                255 * ((180000 - this.toNumber(this.vars.store)) / 135000)
              ),
              64,
              123,
              223
            );
          } else {
            this.warp(this.setColor)(
              Math.round(
                255 * ((180000 - this.toNumber(this.vars.store)) / 135000)
              ),
              this.vars.r,
              this.vars.r,
              this.vars.r
            );
          }
        }
      } else {
        return;
      }
    } else {
      if (this.toString(this.vars.r) === "airstrip") {
        this.warp(this.setColor)(255, 40, 30, 40);
      } else {
        if (this.toString(this.vars.r) === "water") {
          this.warp(this.setColor)(255, 64, 123, 223);
        } else {
          this.warp(this.setColor)(255, this.vars.r, this.vars.r, this.vars.r);
        }
      }
    }
    if (this.toNumber(this.stage.vars.cameraType) === 1) {
      this.warp(this.rotateMountainX)(
        this.toNumber(x1) * this.toNumber(this.vars.cosy) +
          this.toNumber(z1) * this.toNumber(this.vars.siny),
        y1,
        this.toNumber(z1) * this.toNumber(this.vars.cosy) -
          this.toNumber(x1) * this.toNumber(this.vars.siny),
        this.toNumber(x2) * this.toNumber(this.vars.cosy) +
          this.toNumber(z2) * this.toNumber(this.vars.siny),
        y2,
        this.toNumber(z2) * this.toNumber(this.vars.cosy) -
          this.toNumber(x2) * this.toNumber(this.vars.siny),
        this.toNumber(x3) * this.toNumber(this.vars.cosy) +
          this.toNumber(z3) * this.toNumber(this.vars.siny),
        y3,
        this.toNumber(z3) * this.toNumber(this.vars.cosy) -
          this.toNumber(x3) * this.toNumber(this.vars.siny)
      );
    } else {
      this.warp(this.drawTriangle)(
        this.toNumber(x1) * this.toNumber(this.vars.xx) +
          this.toNumber(y1) * this.toNumber(this.vars.yx) +
          (this.toNumber(z1) * this.toNumber(this.vars.zx) -
            this.toNumber(this.vars.xInside)),
        this.toNumber(x1) * this.toNumber(this.vars.xy) +
          this.toNumber(y1) * this.toNumber(this.vars.yy) +
          (this.toNumber(z1) * this.toNumber(this.vars.zy) -
            this.toNumber(this.vars.yInside)),
        this.toNumber(x1) * this.toNumber(this.vars.xz) +
          this.toNumber(y1) * this.toNumber(this.vars.yz) +
          (this.toNumber(z1) * this.toNumber(this.vars.zz) -
            this.toNumber(this.vars.zInside)),
        this.toNumber(x2) * this.toNumber(this.vars.xx) +
          this.toNumber(y2) * this.toNumber(this.vars.yx) +
          (this.toNumber(z2) * this.toNumber(this.vars.zx) -
            this.toNumber(this.vars.xInside)),
        this.toNumber(x2) * this.toNumber(this.vars.xy) +
          this.toNumber(y2) * this.toNumber(this.vars.yy) +
          (this.toNumber(z2) * this.toNumber(this.vars.zy) -
            this.toNumber(this.vars.yInside)),
        this.toNumber(x2) * this.toNumber(this.vars.xz) +
          this.toNumber(y2) * this.toNumber(this.vars.yz) +
          (this.toNumber(z2) * this.toNumber(this.vars.zz) -
            this.toNumber(this.vars.zInside)),
        this.toNumber(x3) * this.toNumber(this.vars.xx) +
          this.toNumber(y3) * this.toNumber(this.vars.yx) +
          (this.toNumber(z3) * this.toNumber(this.vars.zx) -
            this.toNumber(this.vars.xInside)),
        this.toNumber(x3) * this.toNumber(this.vars.xy) +
          this.toNumber(y3) * this.toNumber(this.vars.yy) +
          (this.toNumber(z3) * this.toNumber(this.vars.zy) -
            this.toNumber(this.vars.yInside)),
        this.toNumber(x3) * this.toNumber(this.vars.xz) +
          this.toNumber(y3) * this.toNumber(this.vars.yz) +
          (this.toNumber(z3) * this.toNumber(this.vars.zz) -
            this.toNumber(this.vars.zInside))
      );
    }
  }

  *whenKeyFPressed() {
    this.restartTimer();
    yield* this.initPlane();
    yield* this.initCamera();
    this.stage.vars.worldSize = 35;
    yield* this.generateWorld();
    this.stage.vars.cameraType = 1;
  }
}
