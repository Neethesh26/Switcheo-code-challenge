var sum_to_n_a = function (n) {
    //check for if n is negative then return sum as n
    if (n < 0) {
        return n;
    }
    //for loop to calculate sum to n
    var sum = 0;
    for (let i = 1; i < n + 1; i++) {
        sum += i;
    }
    return sum;
};

var sum_to_n_b = function (n) {
    //check for if n is negative then return sum as n
    if (n < 0) {
        return n;
    }
    //formula for calculating sum to n
    return (n * (n + 1)) / 2;
};

var sum_to_n_c = function (n) {
    //recursion to calculate sum to n
    if (n <= 1) {
        return n;
    } else {
        return n + sum_to_n_c(n - 1);
    }
};