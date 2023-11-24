let app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  antialias: true,
});
app.renderer.backgroundColor = 0x23395d;

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

// const rectangle = new Graphics();
// rectangle
//   .beginFill(0xaa33bb)
//   .lineStyle(4, 0xffea00, 1)
//   .drawRect(200, 200, 100, 120)
//   .endFill();
// app.stage.addChild(rectangle);

// const poly = new Graphics();
// poly
//   .beginFill(0xff66ff)
//   .drawPolygon([600, 50, 800, 150, 900, 300, 400, 400])
//   .endFill();

// app.stage.addChild(poly);

// const circle = new Graphics();
// circle.beginFill(0x22aacc).drawCircle(440, 200, 80).endFill();

// app.stage.addChild(circle);

// const line = new Graphics();
// line.lineStyle(5, 0xffea00, 1).moveTo(1500, 100).lineTo(1500, 800);

// app.stage.addChild(line);

// const torus = new Graphics();
// torus
//   .beginFill(0xfffddd)
//   .drawTorus(150, 600, 80, 100, 0, Math.PI / 2)
//   .endFill();

// app.stage.addChild(torus);

// const star = new Graphics();
// star.beginFill(0xadadad).drawStar(900, 700, 30, 80).endFill();

// app.stage.addChild(star);

// const style = new PIXI.TextStyle({
//   fontFamily: "Montserrat",
//   fontSize: 48,
//   fill: "deepskyblue",
//   stroke: "#ffffff",
//   strokeThickness: 4,
//   dropShadow: true,
//   dropShadowDistance: 10,
//   dropShadowAngle: Math.PI / 2,
//   dropShadowBlur: 4,
//   dropShadowColor: "#000000",
// });

// const myText = new PIXI.Text("Hello World!", style);

// app.stage.addChild(myText);

// app.ticker.add((delta) => loop(delta));

// function loop(delta) {
//   const rectangle = new Graphics();
//   rectangle
//     .beginFill(0xFFaabb)
//     .drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 10, 10)
//     .endFill();
//   app.stage.addChild(rectangle);
// }

// const cloudTexture = PIXI.Texture.from('./sprites/Cloud_IDLE.gif');
// const cloudSprite = new PIXI.Sprite(cloudTexture);

// const cloudSprite = PIXI.Sprite.from('./sprites/Cloud_IDLE.gif');

// app.stage.addChild(cloudSprite);

let cloud;
var animations = {
  "cloud": {
    "idle": [],
    "attack": []
  }
}

PIXI.Assets.load("./JSON/cloudSheetData.json").then(() => {
  for (let i = 1; i < 5; i++) {
    const texture = PIXI.Texture.from(`idle (${i}).png`);
    animations.cloud.idle.push(texture);
  }

  for (let i = 1; i < 13; i++) {
    const texture = PIXI.Texture.from(`attack (${i}).png`);
    animations.cloud.attack.push(texture);
  }

  cloud = new PIXI.AnimatedSprite(animations.cloud.idle);

  cloud.position.set(200, 200);
  cloud.anchor.x = 0.5;
  cloud.anchor.y = 0.5;
  cloud.scale.set(-1,1);
  app.stage.addChild(cloud);
  cloud.play();
  cloud.animationSpeed = 0.1;
});

setTimeout(() => {
  cloud.currentFrame = 0;
  console.log(cloud.currentFrame)
  console.log(cloud.totalFrames)
  cloud.textures = new PIXI.AnimatedSprite(animations.cloud.attack);
  console.log("batata")
},7000)


// async function setup() {
//    const cloudJSON = await PIXI.Assets.load('./JSON/cloudSheetData.json');
//    const cloudSprite = new PIXI.Sprite(cloudTexture);

//   const textures = [];
//   for (let i = 1; i < 5; i++) {
//     const texture = PIXI.Texture.from(`idle (${i}).png`);
//     textures.push(texture);
//   }

//   cloud = new PIXI.AnimatedSprite(textures);

//   cloud.position.set(200, 200);
//   app.stage.addChild(cloud);
//   cloud.play();
//   cloud.animationSpeed = 0.1;
// }


// let animations = {
//   cloud: {
//     attack: "",
//     idle: "",
//     move: "",
//   },
// };

// async function init() {
//   let res = await fetch("./JSON/cloudSheetData.json");
//   let json = await res.json();
//   let cloud;

//   const cloudSheet = new PIXI.Spritesheet(
//     PIXI.BaseTexture.from(json.meta.image),
//     json
//   );
//   await cloudSheet.parse();

//   cloud = new PIXI.AnimatedSprite(cloudSheet.animations.idle);
//   cloud.animationSpeed = 0.1;
//   cloud.play();
//   cloud.scale.x *= -1;
//   cloud.anchor.set(0.5);
//   cloud.y = app.screen.height / 2;
//   cloud.x = cloud.width / 2 + 10;
//   app.stage.addChild(cloud);

//   animations.cloud.attack = new PIXI.AnimatedSprite(
//     cloudSheet.animations.attack
//   );
//   animations.cloud.idle = new PIXI.AnimatedSprite(cloudSheet.animations.idle);
// }

// let cloud;
// let cloudSheet;

// async function loadAnimation() {
//     let response = await fetch('./JSON/cloudSheetData.json');
//     let json = await response.json();

//     let cloudSheet = new PIXI.Spritesheet(
//         PIXI.BaseTexture.from(json.meta.image), json
//     );
//     await cloudSheet.parse();
// animations.cloud.attack = new PIXI.AnimatedSprite(cloudSheet.animations.attacks);
//     animations.cloud.idle = new PIXI.AnimatedSprite(cloudSheet.animations.idle);
// };

// let attackButton = PIXI.Sprite.from("./sprites/attack.png");
// attackButton.y = app.screen.height - attackButton.height;
// attackButton.x = 10;
// attackButton.on("pointerdown", (event) => {
//   cloud.textures = animations.cloud.attack;
//   cloud.play();
//   console.log("bas");
// });
// attackButton.eventMode = "static";

// cloud = animations.cloud.idle;
// cloud.animationSpeed = 0.1;
// cloud.play();
// cloud.scale.x *= -1;
// cloud.anchor.set(0.5);
// cloud.y = app.screen.height / 2;
// cloud.x = cloud.width / 2 + 10;
// app.stage.addChild(cloud);
// app.stage.addChild(attackButton);

// loadAnimation();
// init();
