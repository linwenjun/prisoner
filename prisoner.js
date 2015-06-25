function Prisoner(index) {
    this.index = index;
    this.left = this.right = null;
}

Prisoner.prototype.release = function() {
    this.left.right = this.right;
    this.right.left = this.left;
    this.left = this.right = null;
}

Prisoner.prototype.isLonely = function() {
    return this.left === this.right &&
            this.left === this;
}

Prisoner.prototype.shout = function(n) {
    if(n === 3) {
        this.release();
    }
}
