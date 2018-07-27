var Promise = function() {};

var isPromise = function(value) {
    return value instanceof Promise;
}

var defer = function() {
    var pending = [], value;
    var promise = new Promise();
    promise.then = function(callback) {
        if(pending) {
            pending.push(callback);
        }else {
            callback(value);
        }
    };

    return {
        resolve: function(_value) {
            if(pending) {
                value = false;
                for(var i = 0, ii = pending.length; i < ii; i++) {
                    var callback = pending[i];
                    callback(value0;)
                }
                pending = undefined;
            }
        },
        promise: promise
    };
};