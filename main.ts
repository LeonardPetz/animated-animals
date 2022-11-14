basic.forever(function () {
    basic.showIcon(IconNames.Snake)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        `)
    basic.pause(500)
})
