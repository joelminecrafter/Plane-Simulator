/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [];

    this.triggers = [];

    this.vars.xY = 0.000010890137156876559;
    this.vars.xZ = 0.0017476471147082559;
    this.vars.xX = 0.9999984583905153;
    this.vars.yX = 0.0004674055861819644;
    this.vars.yY = 0.961888337222318;
    this.vars.yZ = -0.27344195852958314;
    this.vars.zX = -0.0016840192463874952;
    this.vars.zY = 0.27344231174358935;
    this.vars.zZ = 0.9618869699082119;
    this.vars.rotcamx = -15.869207008539846;
    this.vars.rotcamy = 0.10031022349065427;
    this.vars.xPlane = -2.0327954528235277;
    this.vars.yPlane = 223.18761079771681;
    this.vars.zPlane = 1164.8219368254342;
    this.vars.camx = -1.9882174077478356;
    this.vars.camy = 216.06707021890819;
    this.vars.camz = 1139.3625668361724;
    this.vars.worldSize = 25;
    this.vars.speed = 1.436166790628208;
    this.vars.cameraType = 1;
    this.vars.breakTerrain = 79;
  }
}
