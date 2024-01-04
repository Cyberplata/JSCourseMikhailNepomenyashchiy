function Player(login, score = 100) {   // Старая версия записи
    this.login = login;
    this.score = score;
}

Player.prototype.increaseScore = function(num = 10) {
    this.score += num;
}
Player.prototype.decreaseScore = function(num = 10) {
    this.score -= num;
}

const player3 = new Player('tor');
const player4 = new Player('loki', 200);

class Player {  // Новая версия записи
    constructor(login, score = 100) {
        this.login = login;
        this.score = score;
    }

    increaseScore(num = 10) {
        this.score += num;
    }
    
    decreaseScore(num = 10) {
        this.score -= num;
    }
}



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