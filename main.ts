let strip: neopixel.Strip = null
let t = 0
let range: neopixel.Strip = null
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
    t = 50
    for (let index = 0; index < 4; index++) {
        t += -10
        for (let n = 0; n <= 60; n++) {
            range = strip.range(0, n)
            range.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(t)
            strip.clear()
        }
    }
    t = 50
    for (let index = 0; index < 4; index++) {
        t += -10
        for (let n = 0; n <= 60; n++) {
            range = strip.range(0, n)
            range.showColor(neopixel.colors(NeoPixelColors.Green))
            basic.pause(t)
            strip.clear()
        }
    }
    t = 50
    for (let index = 0; index < 4; index++) {
        t += -10
        for (let n = 0; n <= 60; n++) {
            range = strip.range(0, n)
            range.showColor(neopixel.colors(NeoPixelColors.Blue))
            basic.pause(t)
            strip.clear()
        }
    }
    t = 50
    for (let index = 0; index < 4; index++) {
        t += -10
        for (let n = 0; n <= 60; n++) {
            range = strip.range(0, n)
            range.showColor(neopixel.colors(NeoPixelColors.Yellow))
            basic.pause(t)
            strip.clear()
        }
    }
    t = 50
    for (let index = 0; index < 4; index++) {
        t += -10
        for (let n = 0; n <= 60; n++) {
            range = strip.range(0, n)
            range.showColor(neopixel.colors(NeoPixelColors.Orange))
            basic.pause(t)
            strip.clear()
        }
    }
})
