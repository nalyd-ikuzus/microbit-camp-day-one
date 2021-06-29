input.onPinPressed(TouchPin.P0, function () {
    if (new_var) {
        basic.showLeds(`
            . . . . .
            # . # . .
            . . . . .
            . . . . .
            . # # # .
            `)
    }
})
function _2 () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showString("really?")
}
input.onButtonPressed(Button.A, function () {
    if (new_var) {
        timer = 0
        eat()
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(5000)
        timer = 0
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (new_var) {
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . . .
            . . . . .
            . # # # .
            `)
    }
})
function _3 () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showString("hi")
}
input.onButtonPressed(Button.B, function () {
    if (new_var) {
        timer = 0
        eat()
        eat()
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.pause(5000)
        timer = -5
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (new_var) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            `)
    }
})
function _0 () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.showString("stop it!")
}
function eat () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            `)
        basic.pause(100)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (new_var) {
        random += randint(0, 3)
        if (random == 0) {
            _0()
        }
        if (random == 1) {
            _1()
        }
        if (random == 2) {
            _2()
        }
        if (random == 3) {
            _3()
        }
    }
})
function _1 () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . . . . .
        . # # # .
        `)
    basic.showString("don't do that")
}
let random = 0
let new_var = false
let timer = 0
basic.showString("Hello! My name is Dylan")
timer = 0
new_var = true
basic.showLeds(`
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (new_var) {
        timer += 1
        basic.pause(1000)
        if (timer >= 10) {
            basic.showLeds(`
                . # . # .
                . . . . .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
        if (timer < 10) {
            basic.showLeds(`
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                . # # # .
                `)
        }
    }
    if (timer >= 30) {
        basic.showLeds(`
            # # # # #
            # . # . #
            # # # # #
            . # # # .
            . # # # .
            `)
        new_var = false
    }
})
