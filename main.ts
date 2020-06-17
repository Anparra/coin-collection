namespace SpriteKind {
    export const objective = SpriteKind.create()
    export const ray = SpriteKind.create()
    export const rayE = SpriteKind.create()
    export const rayNE = SpriteKind.create()
    export const raySE = SpriteKind.create()
    export const rayS = SpriteKind.create()
    export const rayN = SpriteKind.create()
    export const rayNW = SpriteKind.create()
    export const rayW = SpriteKind.create()
    export const raySW = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.rayN, SpriteKind.objective, function (sprite, otherSprite) {
    coinPositionX_N = coin.x
    coinPositionY_N = coin.y
})
sprites.onOverlap(SpriteKind.rayS, SpriteKind.objective, function (sprite, otherSprite) {
    coinPositionX_S = coin.x
    coinPositionY_S = coin.y
})
sprites.onOverlap(SpriteKind.raySE, SpriteKind.objective, function (sprite, otherSprite) {
    coinPositionX_SE = coin.x
    coinPositionY_SE = coin.y
})
function background () {
    scene.setTile(7, img`
. . . . . . . c c . . . . . . . 
. . . . c c c 6 5 c 6 6 . . . . 
. . . . c 6 c 5 5 c 7 6 . . . . 
. . . 6 c c 7 5 5 7 c 6 6 . . . 
. . c c 7 7 7 7 7 5 7 7 c 6 . . 
. 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
. c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
. c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
. c c c c 7 7 6 f 7 7 c c c c . 
. . . . c 7 c f f c 7 c . . . . 
. . . . . 6 f e e e c . . . . . 
. . . . . e e e e e e . . . . . 
. . . . e e . e e . e e . . . . 
. . . . . . . e e . . . . . . . 
`, true)
    scene.setTile(15, img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b d d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
`, true)
    scene.setTile(9, img`
5 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 
7 7 7 5 7 5 5 7 7 7 7 7 5 7 7 7 
7 7 6 5 5 7 5 7 5 5 7 7 7 7 7 7 
7 7 7 6 5 7 7 5 5 6 7 7 7 7 7 7 
7 7 7 7 6 7 7 5 6 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 5 5 7 7 7 
7 7 7 7 7 7 7 7 7 7 5 5 6 7 7 7 
7 7 7 7 7 7 7 7 5 5 7 6 7 7 7 7 
7 7 7 7 7 7 7 7 7 5 5 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 5 
`, true)
}
sprites.onOverlap(SpriteKind.raySW, SpriteKind.objective, function (sprite, otherSprite) {
    coinPositionX_SW = coin.x
    coinPositionY_SW = coin.y
})
sprites.onOverlap(SpriteKind.rayNE, SpriteKind.objective, function (sprite, otherSprite) {
    coinPositionX_NE = coin.x
    coinPositionY_NE = coin.y
})
sprites.onOverlap(SpriteKind.rayE, SpriteKind.objective, function (sprite, otherSprite) {
    coinPositionX_E = coin.x
    coinPositionY_NE = coin.y
})
sprites.onOverlap(SpriteKind.rayW, SpriteKind.objective, function (sprite, otherSprite) {
    coinPositionX_W = coin.x
    coinPositionY_W = coin.y
})
function calculateDistance () {
    distanceCoin = Math.sqrt((mySprite.x - 0) ** 2 + (mySprite.y - 0) ** 2)
}
sprites.onOverlap(SpriteKind.rayNW, SpriteKind.objective, function (sprite, otherSprite) {
    coinPositionX_NW = coin.x
    coinPositionY_NW = coin.y
})
let raySW: Sprite = null
let rayW: Sprite = null
let rayNW: Sprite = null
let rayN: Sprite = null
let rayS: Sprite = null
let raySE: Sprite = null
let rayNE: Sprite = null
let rayE: Sprite = null
let coinPositionY_NW = 0
let coinPositionX_NW = 0
let distanceCoin = 0
let coinPositionY_W = 0
let coinPositionX_W = 0
let coinPositionX_E = 0
let coinPositionY_NE = 0
let coinPositionX_NE = 0
let coinPositionY_SW = 0
let coinPositionX_SW = 0
let coinPositionY_SE = 0
let coinPositionX_SE = 0
let coinPositionY_S = 0
let coinPositionX_S = 0
let coinPositionY_N = 0
let coin: Sprite = null
let coinPositionX_N = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f 3 3 f f e e e e f f 3 3 f . 
. f b b f b f e e f b f b b f . 
. f b b e 1 f 4 4 f 1 e b b f . 
f f b b f 4 4 4 4 4 4 f b b f f 
f b b f f f e e e e f f f b b f 
. f e e f b d d d d b f e e f . 
. . e 4 c d d d d d d c 4 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
mySprite.setPosition(8, 296)
mySprite.setVelocity(50, 0)
scene.setTileMap(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
7 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 8 
9 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 8 
9 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 8 
9 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 8 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
scene.cameraFollowSprite(mySprite)
background()
game.onUpdateInterval(100, function () {
    coin = sprites.create(img`
. . b b b b . . 
. b 5 5 5 5 b . 
b 5 d 3 3 d 5 b 
b 5 3 5 5 1 5 b 
c 5 3 5 5 1 d c 
c d d 1 1 d d c 
. f d d d d f . 
. . f f f f . . 
`, SpriteKind.objective)
    coin.y = Math.randomRange(10, 600)
    coin.x = Math.randomRange(10, 600)
})
game.onUpdateInterval(500, function () {
    rayE = sprites.createProjectileFromSprite(img`
. . . . d d d d . . . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . d d d d . . . . . . . . 
`, mySprite, 300, 0)
    rayE.setKind(SpriteKind.rayE)
    rayNE = sprites.createProjectileFromSprite(img`
. . . . d d d d . . . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . d d d d . . . . . . . . 
`, mySprite, 350, -300)
    rayNE.setKind(SpriteKind.rayNE)
    raySE = sprites.createProjectileFromSprite(img`
. . . . d d d d . . . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . d d d d . . . . . . . . 
`, mySprite, 350, 300)
    raySE.setKind(SpriteKind.raySE)
    rayS = sprites.createProjectileFromSprite(img`
. . . . d d d d . . . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . d d d d . . . . . . . . 
`, mySprite, 50, 300)
    rayS.setKind(SpriteKind.rayS)
    rayN = sprites.createProjectileFromSprite(img`
. . . . d d d d . . . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . d d d d . . . . . . . . 
`, mySprite, 50, -300)
    rayN.setKind(SpriteKind.rayN)
    rayNW = sprites.createProjectileFromSprite(img`
. . . . d d d d . . . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . d d d d . . . . . . . . 
`, mySprite, -350, -300)
    rayNW.setKind(SpriteKind.rayNW)
    rayW = sprites.createProjectileFromSprite(img`
. . . . d d d d . . . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . d d d d . . . . . . . . 
`, mySprite, -350, 0)
    rayW.setKind(SpriteKind.rayW)
    raySW = sprites.createProjectileFromSprite(img`
. . . . d d d d . . . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . . d . . . 
. . . . . . . . . . . d . . . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . d . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . d d d d . . . . . . . . 
`, mySprite, -350, 300)
    raySW.setKind(SpriteKind.raySW)
})
