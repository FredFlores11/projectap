namespace SpriteKind {
    export const value = SpriteKind.create()
    export const HidingSpot = SpriteKind.create()
}
function gamedifficultyplayerswticheasymap (num: number) {
    if (num == 1) {
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 f . f d f 
            . f 2 2 2 2 2 2 b b f f d f 
            . f b d d d d d d b b d b f 
            . f d d d d d b d d f f f . 
            . f d f f f d f f d f . . . 
            . f f . . f f . . f f . . . 
            `, SpriteKind.Player))
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
            . . 4 4 4 . . . . 4 4 4 . . . . 
            . 4 5 5 5 e . . e 5 5 5 4 . . . 
            4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
            4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
            e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
            . e e 5 5 5 5 5 5 5 5 e e . . . 
            . . e 5 f 5 5 5 5 f 5 e . . . . 
            . . f 5 5 5 4 4 5 5 5 f . . f f 
            . . f 4 5 5 f f 5 5 6 f . f 5 f 
            . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
            . . . f 4 5 5 5 5 5 5 4 4 5 f . 
            . . . f 5 5 5 5 5 4 5 5 f f . . 
            . . . f 5 f f f 5 f f 5 f . . . 
            . . . f f . . f f . . f f . . . 
            `, SpriteKind.Enemy))
    } else if (num == 2) {
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
            . . 4 4 4 . . . . 4 4 4 . . . . 
            . 4 5 5 5 e . . e 5 5 5 4 . . . 
            4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
            4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
            e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
            . e e 5 5 5 5 5 5 5 5 e e . . . 
            . . e 5 f 5 5 5 5 f 5 e . . . . 
            . . f 5 5 5 4 4 5 5 5 f . . f f 
            . . f 4 5 5 f f 5 5 6 f . f 5 f 
            . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
            . . . f 4 5 5 5 5 5 5 4 4 5 f . 
            . . . f 5 5 5 5 5 4 5 5 f f . . 
            . . . f 5 f f f 5 f f 5 f . . . 
            . . . f f . . f f . . f f . . . 
            `, SpriteKind.Enemy))
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
            e e e . . . . e e e . . . . 
            c d d c . . c d d c . . . . 
            c b d d f f d d b c . . . . 
            c 3 b d d b d b 3 c . . . . 
            f b 3 d d d d 3 b f . . . . 
            e d d d d d d d d e . . . . 
            e d f d d d d f d e . b f b 
            f d d f d d f d d f . f d f 
            f b d d b b d d 2 f . f d f 
            . f 2 2 2 2 2 2 b b f f d f 
            . f b d d d d d d b b d b f 
            . f d d d d d b d d f f f . 
            . f d f f f d f f d f . . . 
            . f f . . f f . . f f . . . 
            `, SpriteKind.Player))
    }
}
info.onCountdownEnd(function () {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setImage(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HidingSpot, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprite.setImage(otherSprite.image)
        info.startCountdown(10)
    }
})
function Game_Easy () {
    scene.cameraShake(8, 1000)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(17, 25)
    info.setLife(3)
    splitScreen.setSplitScreenEnabled(true)
    splitScreen.setBorderColor(15)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.VerticalLeftHalf)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.VerticalRightHalf)
}
info.onLifeZero(function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    game.splash("You Got found!")
    game.gameOver(false)
})
function Game_hard () {
    scene.cameraShake(8, 1000)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(17, 25)
    splitScreen.setSplitScreenEnabled(true)
    splitScreen.setBorderColor(15)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.VerticalLeftHalf)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.VerticalRightHalf)
}
function gamedificulty (num: number) {
    if (num == 1) {
        game.splash("Easy map")
        Game_Easy()
        tiles.setCurrentTilemap(tilemap`level9`)
    } else if (num == 2) {
        game.splash("Hard map")
        Game_hard()
        tiles.setCurrentTilemap(tilemap`level1`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let Tile_Object_list = [
sprites.create(img`
    ................86..................
    ...........6688867886...............
    ...........8666877688868............
    ............868777767768............
    .........688667777776688............
    ........67767777777778666...........
    .........6776667767666868...........
    ..........866667667677688...........
    .........8666666666667778...........
    ........667766666666666676..........
    .......67766667666776667776.........
    ......886667776676777666688.........
    .....67766777667767777666768........
    ....6776666666777667776666776.......
    .....8667776667766676677776776......
    ......8777666666667776777776688.....
    ....6887766776677677777777776776....
    ..8866666677767777777777766666778...
    .86666666777667767777766666776668...
    ..88677666666777677677666667776668..
    ..86776677666666666666667776666668..
    886666677766667666666776677766668...
    6668666676667766767767766677666668..
    88866666666777677677667666666776668.
    .86668866666766776776666667766666668
    .86688666666666776666667667776666688
    .668866666666666666666677666666688..
    ..8866686666666666677667776666668...
    ...866886666666666677667776666668...
    ...86886668666666667666666666888....
    ....88866886686666666666666668......
    ......86886668666866668666868.......
    ......88866688668866688866888.......
    ........8888888688888ce868..........
    ..............e88e88.ec.8...........
    ...............eeee..e..............
    ...............ceef.ce..............
    ...............ceefcec..............
    ...............feefce...............
    ...............fceeec...............
    ...............ffceec...............
    `, SpriteKind.HidingSpot),
sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.HidingSpot),
sprites.create(img`
    ........................
    ..........bbbb..........
    ........bbddddbb........
    .......bddbbbbddb.......
    ......bdbbddddbbdb......
    .....bdbbdbbbbdbbdb.....
    .....bdbdbddddbdbdb.....
    .....cdbbdbbbbdbbdc.....
    .....cbdbbddddbbdbc.....
    .....efbddbbbbddbce.....
    .....eeffbddddbccee.....
    .....eeeeffcccceee......
    .....ceeeeeeeeeeee......
    .....ceeeeeeeeeeee......
    .....feeeeeeeeeeee......
    .....cceeeeeeeeeee......
    ......feeeeeeeeeee......
    .....6fceeeeeeeeee6.....
    ....6776eeeeeeeee676....
    ...6777666eeee6666776...
    ..67768e67766777667776..
    ...668ee7768867788666...
    ......ee77eeee77ecee....
    ......ee6eeeeee6eef.....
    `, SpriteKind.HidingSpot),
sprites.create(img`
    ......cc66......
    .....c6576c.....
    ....c677576c....
    ....cc677666....
    ...cc6c6667cc...
    ..6c666777cc6c..
    ..c76666766776..
    ..c6777777776c..
    ..cc67777776cc..
    .c67cc76676676c.
    .c777666667777c.
    .c6777777777766.
    .cc7767776776666
    c676cc6766666776
    c777766666677776
    cc7777777777776c
    .c676777677767c.
    ..cc667666766c..
    ...ccc6c66ccc...
    .....cccccc.....
    .......ee.......
    ......eeee......
    .....eeeeee.....
    .......ee.......
    `, SpriteKind.HidingSpot),
sprites.create(img`
    . . . . . b b b b b b . . . . . 
    . . . b b d d d d d d b b . . . 
    . . b b d d b b b b d d b b . . 
    . e d b d b d d d d b d b d e . 
    . f d b d d b b b b d d b d e . 
    . f b d b b d d d d b b d b e . 
    . f e d d d b b b b d d d e e . 
    . f f e b d d d d d d b e e f . 
    . f f e e e e e e e e e e e f . 
    . f f e e e f e e e e e e e f . 
    . f f e f e e e f f e e f e e f 
    . f e e f e f e f e f e f e e e 
    f f e e e e f e e f f e f f e e 
    f e e e e f f e e e e e f f f e 
    e e e e f f f e f e e e e f f f 
    e e e e f f f e f e e e e f f f 
    `, SpriteKind.HidingSpot),
sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ........ccccc...................
    ......ccbbbbbc..................
    ....ccddbbbbbbf.................
    ...cbbbddbbffbf.................
    ....ffffdbbffbff................
    .......fbbbbbbbf................
    .......fbbbbbbbff...............
    ......ffbbbbbbbbfff.............
    ......f6bbbbbb663ddcc...........
    .....cc66bbbb666dddddc..........
    .....cd36666663dddddddc.........
    .....cddd3333dbddddddbcc........
    .....cddddddddbdddddbbddc.......
    .....cddddddddbbdddbbdddbc......
    ......cddddddddbbdbbddddbbccc...
    ......ccddddddddbbbbcccccbbbcc..
    .......ccddddddddddddddbccffff..
    ........cccbddccbddddbbfff......
    ........c333bb333cbbfff.........
    ........c33cc33cc3fff...........
    `, SpriteKind.HidingSpot),
sprites.create(img`
    .....75....757....57..7.....77..
    ..5.55555.577775..755.7..7757...
    ..5.577.565747.766777766775e777.
    ....775.77577667677676776767777.
    55.757.75676777777777767c77667..
    7e5454777777765567776766677677.7
    ..77757777777566667676566777677.
    .5.7657577775777777667677766766.
    .7777674576767777676677677776767
    ..77..77777577777777577757767c67
    ..775755777755777777577777776777
    .55557755.7567777777677777566.66
    .557777ee7677767767767767667677.
    .577.77777777767767e67776767....
    .5577777.775777776776776676777.6
    5..777777.77777777776767767766..
    5.557...77777777776767767667.66.
    ..555.7777.77.756767cc667677676.
    ...7...77777.777676657767776776.
    .....77....7.5577e7665.7...666..
    .....57....77..666767..7.6......
    .....7..........4eeee.6.........
    ................46ee6...........
    ................4eeec...........
    ................4eeec...........
    ...............e4eece...........
    ...............eeeece...........
    ..............44eeecce..........
    ............444eeeeccc..........
    .........eee44ee.ececccec.......
    .......eeee.4ee..ece.cccec......
    ....eee....e......e...eee.ccee..
    `, SpriteKind.HidingSpot),
sprites.create(img`
    . . . . . . c c c c c c . . . . 
    . . . . c c b b d d d d c . . . 
    . . . c c b b d d d d d d c . . 
    . . c b b d b d d d d d d b c . 
    . c b b b d b b d d d d d b c . 
    . c b b b d d b d d d d b b c . 
    c b c b b b d d b b b b b c c . 
    c b c c b b b b d d d b c c c . 
    c b b c c c c c c c c c c c c . 
    c c b b b b b b c c b d d d b c 
    c c c c c c c c c d d d d d d c 
    c c c c c c c b c b d d d d d b 
    c b b b c c c b c c b d d d c b 
    c c b b b c c b b c c c c b b c 
    c c c c c c c c b b b b b b c c 
    c c c c c c c c c c c c c c c c 
    `, SpriteKind.HidingSpot),
sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.HidingSpot),
sprites.create(img`
    . b b b b b b b b b b b b b b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b b b b b b b d d b b b b b b b 
    . b b b b b b c c b b b b b b . 
    b c c c c c b c c b c c c c c b 
    b c c c c c c b b c c c c c c b 
    b c c c c c c c c c c c c c c b 
    b c c c c c c c c c c c c c c b 
    b b b b b b b b b b b b b b b b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.HidingSpot)
]
for (let index = 0; index <= 10; index++) {
    tiles.placeOnRandomTile(Tile_Object_list[index], sprites.castle.tileGrass1)
}
gamedifficultyplayerswticheasymap(game.askForNumber("Who plays first? 1 or 2", 1))
gamedificulty(game.askForNumber("level Difficulty 1-easy 2-hard", 1))
