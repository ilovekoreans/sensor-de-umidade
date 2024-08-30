input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
let leitura_solo = 0
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.forever(function () {
    leitura_solo = pins.analogReadPin(AnalogPin.P1)
    if (leitura_solo > 1000) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(2000)
    } else if (leitura_solo > 650) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(2000)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        basic.pause(2000)
    }
})
