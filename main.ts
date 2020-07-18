radio.onReceivedValue(function (name, value) {
    if (name == "ping") {
        Lounge = input.temperature()
    }
    if (name == "hl") {
        Hall_Lower = value
    }
    if (name == "l") {
        Lounge = value
    }
    if (name == "k") {
        Kitchen = value
    }
    if (name == "hu") {
        Hall_Upper = value
    }
    radio.sendValue("ping", 0)
    radio.sendValue("hl", Hall_Lower)
    radio.sendValue("l", Lounge)
    radio.sendValue("k", Kitchen)
    radio.sendValue("hu", Hall_Upper)
    if (Lounge >= 18 && Lounge <= 20) {
        basic.showIcon(IconNames.Happy)
    } else if (false) {
        if (Lounge < 18) {
            basic.showString("C")
        }
    } else if (Lounge > 20) {
        basic.showString("H")
    }
})
let Hall_Lower = 0
let Kitchen = 0
let Lounge = 0
let Hall_Upper = 0
radio.setGroup(6)
Hall_Upper = 0
Lounge = input.temperature()
Kitchen = 0
Hall_Lower = 0
