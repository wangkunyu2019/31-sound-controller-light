input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showNumber(0)
    basic.clearScreen()
    basic.showNumber(input.soundLevel())
})
basic.forever(function () {
    if (input.soundLevel() > 170) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(5000)
        basic.clearScreen()
    }
})
