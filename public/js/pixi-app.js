let app, displacementFilter, displacementSprite;


function initPixi() {
  app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
  document.body.appendChild(app.view);

  let image = new PIXI.Sprite.from("images/sunset.jpg");
  image.height = window.innerHeight;
  image.width = window.innerWidth;
  app.stage.addChild(image);

  displacementSprite = new PIXI.Sprite.from("images/clouds.png");
  displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  app.stage.addChild(displacementSprite);
  app.stage.filters = [displacementFilter];

  animate();
}

function animate() {

  displacementSprite.x += (direction * 2);
  displacementSprite.y += (direction * 2);

  requestAnimationFrame(animate);
}

initPixi();