// var amount, rate, prinPeriod, prinDate, interPeriod, interDate, loanPeriod;
// var loanBeginDate = new Date();
// var loanEndDate = new Date();
// var prinRepayDate = new Date();
// var interRepayDate = new Date();
// var testDate = new Date();
//等额本金--equality corpus
//贷款日期：发放日--disbursement date  起息日=贷款起日--interest date--loanBeginDate
//贷款发放日暂不考虑
// var allDate = [];

// loanBeginDate = new Date(2013, 1, 20);
// loanPeriod = 1; //贷款的有效时间loan_period划定为:贷款起息日到贷款止日,默认为年
// loanEndDate = new Date(loanBeginDate.getFullYear() + loanPeriod, loanBeginDate.getMonth(), loanBeginDate.getDate());
// console.log(loanBeginDate);
// console.log(loanEndDate);
// for (testDate = loanBeginDate; testDate <= loanEndDate; testDate += loanEndDate.dateAdd(1)) {
//     allDate.push(testDate);
// }
// console.log(allDate);

// prinPeriod = 2; // 贷款还本间隔,默认为月
// prinDate = 14; //贷款还款日指定
// interPeriod = 1; //贷款还息间隔,默认为月
// interDate = 23; //贷款还息日指定
// var terms; //贷款期数
/*本金分段：第一期和最后一期应当特殊处理
第一期：loanBeginDate(20130120)---(20130314)loanBeginDate+prinPeriod+prinDate
*/
// if (prinDate < loanBeginDate.getDate()) {
//     terms =
// }

// var s1 = new Date("2013-10-27 ");
// var s2 = new Date("2013-11-24 ");
// var s3 = new Date("2013-11-27 ");
// var s3 = new Date("2013-11-14");
// console.log(s1.getTime(), s2.getTime(), s3.getTime());
// var s4 = s3.getTime() - s1.getTime();
// var tianshu1 = s4 / (24 * 60 * 60 * 1000);
// console.log(tianshu1);
// var s4 = s2.getTime() - s1.getTime();
// var tianshu2 = s4 / (24 * 60 * 60 * 1000);
// console.log(tianshu2);
// var s4 = s3.getTime() - s2.getTime();
// var tianshu3 = s4 / (24 * 60 * 60 * 1000);
// console.log(tianshu3);
// console.log((tianshu2 * 861538.48 + tianshu3 * 753846.15) * 4 / 36000);


// var s1 = new Date("2013-09-27 ");
// var s2 = new Date("2013-10-27 ");
// var s3 = s2.getTime() - s1.getTime();
// var tianshu = s3 / (24 * 60 * 60 * 1000);
// console.log(tianshu);
// console.log(tianshu * 861538.48 * 4 / 36000);

function sortNumber(a, b) {
    return a - b
}
var a = [1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26, 28, 29, 31, 32, 34, 35, 36];
var b = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, , 30, 33, 36]; //
var m = a.concat(b).sort(sortNumber);
console.log(m);
var d = [];
var e = [];

console.log(b, '++++', a);
b.map(function(x, i) {
    d.push(m.indexOf(x) + 1);
    m[m.indexOf(x)] = null;

});
console.log(d);
// console.log(m);
a.map(function(x, i) {
    e.push(m.indexOf(x) + 1);
    m[m.indexOf(x)] = null;
});
console.log(e);