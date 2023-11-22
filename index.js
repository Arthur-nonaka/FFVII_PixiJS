import * as PIXI from 'pixi.js'
import { AnimatedGIF } from '@pixi/gif';

let app = new PIXI.Application({ width: 1180, height: 800 });
document.body.appendChild(app.view);

let sprite = AnimatedGIF.from('./sprites/Cloud_IDLE.gif');

app.stage.addChild(new PIXI.AnimatedSprite(sprite));
let attackButton = PIXI.Sprite.from("./sprites/attack.png")
attackButton.y = app.screen.height - attackButton.height;
attackButton.x = 10;
app.stage.addChild(attackButton);

let elapsed = 0.0;
app.ticker.add((delta) => {
    elapsed += delta;
    sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
});