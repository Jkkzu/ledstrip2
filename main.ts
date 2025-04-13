let t = 0
let strip: neopixel.Strip = null
let range = 0
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
    t = 110
})
