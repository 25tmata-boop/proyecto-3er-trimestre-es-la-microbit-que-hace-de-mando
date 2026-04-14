input.onButtonPressed(Button.A, function () {
    radio.sendString("delante")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("derecha")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("izquiera")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("atras")
})
radio.setGroup(2)
