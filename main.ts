input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1001)
})
input.onButtonPressed(Button.AB, function () {
    if (Radio_Channel >= 102) {
        Radio_Channel = 101
    } else {
        Radio_Channel = 102
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1002)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (UserID))
})
let UserID = 0
let Radio_Channel = 0
Radio_Channel = 101
UserID = 100
radio.setGroup(Radio_Channel)
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
