let soilMoisture = 0
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    soilMoisture = pins.analogReadPin(AnalogPin.P0)
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(soilMoisture)
    }
    if (soilMoisture <= 300) {
        basic.showArrow(ArrowNames.West)
    } else if (soilMoisture >= 900) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
