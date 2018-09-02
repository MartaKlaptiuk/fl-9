let taxPercentage = 0.5;
let maxCardCount = 3;
let cardStateRange = 1;
let cardEndRange = 3;
let hundred = 100;

function userCard(index) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];

    function getCardOptions() {
        return {
            key: index,
            balance: balance,
            transactionLimit: transactionLimit,
            historyLogs: historyLogs
        }
    }

    function putCredits(creditsAmount) {
        balance = balance + creditsAmount;
        addToHistoryLog('Received credits', creditsAmount, getCurrentDate());
    }

    function takeCredits(creditsAmount) {
        let isActionAllowed = transactionLimit > creditsAmount && balance > creditsAmount;

        if (isActionAllowed) {
            balance = balance - creditsAmount;
            addToHistoryLog('Withdrawal of credits', creditsAmount, getCurrentDate());
        } else {
            if (transactionLimit < creditsAmount) {
                console.log(`Amount of credits you want to take is bigger than transactionLimit = ${transactionLimit}`);
            } else if (balance < creditsAmount) {
                console.log(`Amount of credits you want to take is bigger than balance = ${balance}`);
            }
        }

        return isActionAllowed;
    }

    function setTransactionLimit(creditsAmount) {
        transactionLimit = creditsAmount;
        addToHistoryLog('Transaction limit change', creditsAmount, getCurrentDate());
    }

    function transferCredits(amountOfCredits, recipientCard) {
        let amountToBeTaxed = amountOfCredits * taxPercentage / hundred;

        if (takeCredits(amountOfCredits + amountToBeTaxed)) {
            recipientCard.putCredits(amountOfCredits);
        }
    }

    function addToHistoryLog(type, creditsAmount, time) {
        historyLogs.push({
            operationType: type,
            credits: creditsAmount,
            operationTime: time
        });
    }

    function getCurrentDate() {
        return new Date().toLocaleString('en-GB');
    }

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }

}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }

    addCard() {
        if (this.cards.length < maxCardCount) {
            let card = userCard(this.cards.length + 1);
            this.cards.push(card);
        } else {
            console.log(`Maximum amount of cards : ${maxCardCount}, has been reached`);
        }
    }

    getCardByKey(number) {
        if (number >= cardStateRange && number <= cardEndRange) {
            return this.cards[number - 1];
        } else {
            console.log(`Wrong card number, choose card from range {${cardStateRange}, ${cardEndRange}}`);
        }
    }
}
