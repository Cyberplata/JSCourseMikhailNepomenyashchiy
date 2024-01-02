// DRY don't repeat yourself

const player1 = {
    login: 'monster',
    score: 100,
    increaseScore(num = 10) {
        this.score += num;
    },
    decreaseScore(num = 10) {
        this.score -= num;
    }
}

const player2 = {
    login: 'user',
    score: 150,
    increaseScore(num = 10) {
        this.score += num;
    },
    decreaseScore(num = 10) {
        this.score -= num;
    }
}