
var MinStack = function() {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val); 

     if(this.minStack.length === 0){
       this.minStack.push(val);  
    }else{
        let lastMin = this.minStack[this. minStack.length - 1];
        this.minStack.push(Math.min(val, lastMin)); 
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
     this.stack.pop();
    this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
        return this.minStack[this.minStack.length - 1];

};
