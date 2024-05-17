/*
დაწერე ფუნქცია, რომელიც მიიღებს a და b
პარამეტრებს და დააბრუნებს ტექსტს
“ტოლია” თუ a უდრის b-ს, ხოლო
წინააღმდეგ შემთხვევაში, დააბრუნებს “არ
არის ტოლი” გაითვალისწინე, რომ a და b ყოველთვის
ერთი და იგივე ტიპის არ არის


*/

function myFunction(a, b) {
    if (a===b) {
        return "ტოლია"
    }else {
        return "არ არის ტოლი"
    }
}

console.log(myFunction(3, 3));


/*
დაწერე ფუნქცია, რომელიც პარამეტრად
მიიღებს ტემპერატურას ფარენჰეიტებში და
დააბრუნებს ტემპერატურას ცელსიუსში
● თუ პარამეტრი არ არის რიცხვითი მონაცემი
დააბრუნე - false
*/ 

function temperature (Farenheit) {
    if (isNaN(Farenheit)) {
        return false
    }else {
        return (Farenheit - 32) * 5/9  ;
    }

        
}
console.log(temperature(32));


/*
დაწერე ფუნქცია, რომელიც პარამეტრად
მიიღებს a (პირველი რიცხვი), b (მეორე
რიცხვი) და operation (+, -, *, /) და
დააბრუნებს ახალ მნიშვნელობას,
რომელიც მიიღება ამ ორ რიცხვზე operation
ცვლადში განსაზღვრული ოპერაციით
● თუ a და b არ არიან რიცხვები, ან თუ
operation ცვლადში არის უცნობი, ოპერაცია
დააბრუნე - false
*/

function calculate(a, b,) {
    if (isNaN(a, b)) {
        return false
    }

    let operation = a * b;
    return operation;
}

console.log(calculate(10, 4)); 