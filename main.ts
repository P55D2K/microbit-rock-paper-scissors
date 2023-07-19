input.onButtonPressed(Button.A, function () {
    ascore += 1
    basic.showString("" + (`A${ascore} B${bscore}`))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (`A${ascore} B${bscore} ${ascore > bscore ? "A Wins" : bscore > ascore ? "B Wins" : "Tie"}`))
    basic.showString("Resetting Scores")
    ascore = 0
    bscore = 0
})
input.onButtonPressed(Button.B, function () {
    bscore += 1
    basic.showString("" + (`A${ascore} B${bscore}`))
})
input.onGesture(Gesture.Shake, function () {
    index = randint(1, 3)
    if (index == 0) {
        basic.showIcon(IconNames.Scissors)
    } else if (index == 1) {
        basic.showIcon(IconNames.Square)
    } else if (index == 2) {
        basic.showIcon(IconNames.SmallSquare)
    }
})
let index = 0
let bscore = 0
let ascore = 0
