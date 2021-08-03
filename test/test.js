// import For from '../lib/For'
var useFor = function (initialization, condition, updation, fn) {
    if (condition(initialization)) {
        fn(initialization);
        useFor(updation(initialization), condition, updation, fn);
    }
    return;
};
var useIf = function (condition, fn, catchFn) {
    if (typeof condition === 'function') {
        if (condition()) {
            fn();
        }
        else {
            if (catchFn) {
                catchFn();
            }
        }
    }
    else {
        if (condition) {
            fn();
        }
        else {
            if (catchFn) {
                catchFn();
            }
        }
    }
};
var i = 0;
useFor(i, function (i) { return i < 10; }, function (i) { return ++i; }, function (i) {
    useIf(function () { return i % 2 === 0; }, function () {
        console.log("In 'For' loop: ", i);
    });
});
