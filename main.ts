input.onButtonPressed(Button.A, function () {
    Rewards += 1
    basic.showString("you have" + Rewards + "rewards well well do")
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showString("you have" + Rewards + "rewards well well do")
    if (Rewards >= 25) {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("you have" + (Rewards - Sanctions) + "total rewards")
})
input.onButtonPressed(Button.B, function () {
    Sanctions += 1
    basic.showString("you have" + Sanctions + "that's not very good")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("you have" + Sanctions + "that's not very good")
})
let Rewards = 0
let Sanctions = 0
basic.showString("Hello!")
Sanctions = 0
Rewards = 0
basic.showString("press a to add 1 reward")
basic.pause(500)
basic.showString("press b to add 1 sanction")
basic.pause(500)
basic.showString("press a + b to get total ")
basic.pause(500)
basic.showString("shake to show sanction")
basic.pause(500)
basic.showString("point sceen up to show rewards")
basic.pause(500)
basic.showString("have fun")
basic.showIcon(IconNames.Heart)
