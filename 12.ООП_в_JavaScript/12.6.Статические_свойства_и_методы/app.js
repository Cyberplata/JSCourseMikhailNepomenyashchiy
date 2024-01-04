class Player {
    static totalPlayers = 0;

    constructor(login, score = 100) {
        this.login = login;
        this.score = score;
        Player.totalPlayers++;
    }
    
    increaseScore(num = 10) {
        this.score += num;
    }
    
    decreaseScore(num = 10) {
        this.score -= num;
    }

    static create(login) {
        return new Player(login, 250);
    }

    static sortByScore(a, b) {
        return a.score - b.score;
    }
}

class PaidPlayer extends Player {
    static totalPlayers = 0;

    constructor(login, score = 100, accBalance = 1000) {
        super(login, score);
        this.accBalance = accBalance;
        PaidPlayer.totalPlayers++;
    }
    
    increaseBalance(amount = 0) {
        this.accBalance += amount;
    }

    static create(login) {
        return new PaidPlayer(login, 250, 1200);
    }
}

const player3 = new Player('tor');
const player4 = new Player('loki', 200);
const pp1 = new PaidPlayer('stark', 200, 100000); 