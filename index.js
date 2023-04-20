import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite10 from "./Sprite10/Sprite10.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: -20,
    y: -130,
    direction: -88.64797001564364,
    costumeNumber: 1,
    size: 10000,
    visible: false,
    layerOrder: 8
  }),
  Sprite2: new Sprite2({
    x: -1.5441928966946707e-15,
    y: 25.218583803424757,
    direction: 90,
    costumeNumber: 7,
    size: 50,
    visible: false,
    layerOrder: 1
  }),
  Sprite3: new Sprite3({
    x: 195,
    y: -135,
    direction: -144.5749814057688,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Sprite4: new Sprite4({
    x: 195,
    y: -135,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Sprite5: new Sprite5({
    x: 108,
    y: -142,
    direction: 74.13079302222633,
    costumeNumber: 2,
    size: 50,
    visible: true,
    layerOrder: 5
  }),
  Sprite6: new Sprite6({
    x: 108,
    y: -142,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Sprite7: new Sprite7({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 200,
    visible: true,
    layerOrder: 9
  }),
  Sprite8: new Sprite8({
    x: 0,
    y: -150,
    direction: 90.10031022349065,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 6
  }),
  Sprite9: new Sprite9({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Sprite10: new Sprite10({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
