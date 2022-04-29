function creo_rahetta_destra () {
    rachetta_verde_2 = sprites.create(img`
        1 1 1 1 
        1 3 3 1 
        1 3 3 1 
        1 3 3 1 
        1 3 3 1 
        1 3 3 1 
        1 3 3 1 
        1 3 3 1 
        1 3 3 1 
        1 3 3 1 
        1 3 3 1 
        1 3 3 1 
        1 3 3 1 
        1 3 3 1 
        1 3 3 1 
        1 1 1 1 
        `, SpriteKind.Player)
    rachetta_verde_2.setPosition(150, 60)
}
function creo_rachetta_sinistra () {
    rachetta_verde = sprites.create(img`
        1 1 1 1 
        1 7 7 1 
        1 7 7 1 
        1 7 7 1 
        1 7 7 1 
        1 7 7 1 
        1 7 7 1 
        1 7 7 1 
        1 7 7 1 
        1 7 7 1 
        1 7 7 1 
        1 7 7 1 
        1 7 7 1 
        1 7 7 1 
        1 7 7 1 
        1 1 1 1 
        `, SpriteKind.Player)
    rachetta_verde.setPosition(10, 60)
    controller.moveSprite(rachetta_verde, 0, 150)
    rachetta_verde.setStayInScreen(true)
}
let rachetta_verde: Sprite = null
let rachetta_verde_2: Sprite = null
creo_rachetta_sinistra()
