const selectionButtons = document.querySelectorAll('[data-selection')
const finalColumn = document.querySelector('[data-final-column')
const computerScoreSpan = document.querySelector('[data-cpu-score')
const yourScoreSpan = document.querySelector('[data-you-score]')

const SELECTIONS = [
    {
        name:'rock',
        romaji:'GUU',
        beats:'scissors'
    },
    {
        name:'paper',
        romaji:'PAA',
        beats:'rock',
    },
    {
        name:'scissors',
        romaji:'CHOKI',
        beats:'paper'
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const youWin = isWinner(selection, computerSelection)
    const cpuWin = isWinner(computerSelection, selection)
    console.log(computerSelection)

        addSelectionResult(computerSelection, cpuWin)
        addSelectionResult(selection, youWin)

        if (youWin) incrementScore(yourScoreSpan)
        if (cpuWin) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.romaji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)

}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}