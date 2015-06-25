function PrisonerCircle(count) {
    this.count = count;
    this.lastPrisonerIndex = 0;

    this.prisoners = [];

    for(var i=0; i<this.count; i++) {
        this.prisoners.push(new Prisoner(i+1));
    }
}

PrisonerCircle.prototype.startQueue = function() {
    var prisoners = this.prisoners;

    prisoners.forEach(function(val, key) {
        if(0 === key) {
            val.left = prisoners[prisoners.length - 1];
        } else {
            val.left = prisoners[key - 1];
        }

        if(prisoners.length - 1 === key) {
            val.right = prisoners[0];
        } else {
            val.right = prisoners[key + 1];
        }
    })
}

PrisonerCircle.prototype.startShout = function() {
    var currentPrisoner = this.prisoners[0];
    var number = 0;

    while (!currentPrisoner.isLonely()) {
        var next = currentPrisoner.right;
        currentPrisoner.shout(number % 3 + 1);
        currentPrisoner = next;
        number++;
    }

    this.lastPrisonerIndex = currentPrisoner.index;
}

PrisonerCircle.prototype.getLastIndex = function() {
    return this.lastPrisonerIndex;
}
