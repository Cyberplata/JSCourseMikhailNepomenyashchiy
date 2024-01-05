class Player {
    static totalPlayers = 0;
    #score;

    constructor(login, firstName, lastName, score = 100) {
        this.login = login;
        this.firstName = firstName;
        this.lastName = lastName;
        // this.fullName = this.firstName + ' ' + this.lastName; - будет вычисляться каждый раз в независимости поменялось имя или нет
        this.#score = score;
        Player.totalPlayers++;
    }

    get fullName() {    // так намного лучше, позволяет высчитать динамический свойство
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(name) {    // позволяет изменить свойство динамический
        const [f, l] = name.split(' ');
        this.firstName = f;
        this.lastName = l;
    }

    get score() {
        return this.#score;
    }

    #getScore() {
        return this.#score;
    }

    // set score(num) {
    //     this.increaseScore(num);
    // }
    
    increaseScore(num = 10) {
        this.#score = this.#getScore() + num;
    }
    
    decreaseScore(num = 10) {
        this.#score -= num;
    }

    static create(login) {
        return new Player(login, 250);
    }

    static sortByScore(a, b) {
        return a._score - b._score;
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