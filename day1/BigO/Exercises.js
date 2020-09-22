// ===================== Exercise-1 =====================
const getBalance = function (bankOperations) {
    let balance = 0                         
    for (let op of bankOperations) { //O(n) n=6
        balance += op
    }
    return balance
}

getBalance([-27, -43, -2400, -700, 15000, 58])

// ===================== Exercise-2 =====================
const printSome = function (complaints) {
    for (let i = 1; i < complaints.length; i = i * 2) //O(log(n))
        console.log(complaints[i].text);
}

// ===================== Exercise-3 =====================
const allSides = [
    { a: 3, b: 4 },
    { a: 15, b: 21 },
    { a: 41, b: 8 },
    { a: 12, b: 6 }
]

const relevantSides = allSides.filter(s => s.a % 3 == 0)
for (let sides of relevantSides) { 
    console.log(getHype(sides))
}

const getHype = function (sides) { //O(1)
    let a = sides.a
    let b = sides.b
    let sumOfSquares = a * a + b * b
    return Math.sqrt(sumOfSquares)
}

// ===================== Exercise-4 =====================
const studentAnswers = {
    brBlds: {
        1: "a",
        2: "a",
        3: "c"
    },
    dvOna: {
        1: "a",
        2: "c",
        3: "c"
    },
    nmPrz: {
        1: "a",
        2: "b",
        3: "a"
    }
}
const studentGithubs = ["brBlds", "dvOna", "nmPrz"]

const distributions = {
    1: {},
    2: {},
    3: {}
}

const getDistributions = function (studentAnswers) {//O(nm)
    studentGithubs.forEach(sg => {
        let answers = studentAnswers[sg]

        Object.keys(answers).forEach(questionNumber => {
            let letterAnswer = answers[questionNumber]

            distributions[questionNumber][letterAnswer] ?
                distributions[questionNumber][letterAnswer]++ :
                distributions[questionNumber][letterAnswer] = 1
        })
    })

    return distributions
}

getDistributions(studentAnswers)

// ===================== Exercise-5 =====================
const sendEmails = (email, recepients) => recepients.forEach(r => r.sendEmail(email))//O(n)

const emailManager = function () {//O(n)
    let email = generateEmail()

    $.get('/recepients', function (recepients) {
        sendEmails(email, recepients)
    })
}

// ===================== Exercise-6 =====================
const findDuplicates = function (ages) {
    for (let i = 0; i < ages.length; i++) {

        for (let j = i + 1; j < ages.length; j++) {
            if (ages[i] === ages[j]) {
                console.log(`${ages[i]} has a duplicate`)
            }
        }
        //note that this *entire* inner loop runs for each iteration of i
    }
}

// ===================== Exercise-7 =====================
// ===================== Exercise-8 =====================
// ===================== Exercise-9=====================
``