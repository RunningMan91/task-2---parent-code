input.onButtonPressed(Button.A, function () {
    Radio_Channel = 101
    radio.sendNumber(1001)
})
input.onButtonPressed(Button.B, function () {
    Radio_Channel = 102
    radio.sendNumber(1002)
})
let Radio_Channel = 0
radio.setGroup(Radio_Channel)
Radio_Channel = 0
let UserID = 100
basic.showString("" + (UserID))
basic.forever(function () {
    if (Radio_Channel == 101) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (Radio_Channel == 102) {
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
