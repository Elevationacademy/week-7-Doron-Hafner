// // ================= Exircise-1 =================
// const printStars = function (num) {
//     while (num > 0) {
//         console.log('*'.repeat(i));
//         num --
//     }
// }
// printStars(5)

// // ================= Exircise-2 =================
// const printBackwardsStars = function (num) {
//     while (num > 0 ) {
//         console.log('*'.repeat(num));
//         num --
//     }
// }
// printBackwardsStars(6)
// // ================= Exircise-3 =================
// const printStarSeries = function (num, count) {
//     if (count > 0) {
//         let i = 1
//         while (i <= num) {
//             console.log('*'.repeat(i));
//             i ++
//         }
//         while (num > 0 ) {
//             console.log('*'.repeat(num-1));
//             num --
//         }
//         console.log('');
//         count --
//         count ? printStarSeries(5, count): ''
//     }
// }
// printStarSeries(5, 3)

// // ================= Exircise-4 =================
// const reverse = function(str){
    
//     let reversed = [... str].reverse().join('')
//     console.log(reversed);
//     return reversed
//   }
  
//   reverse("dog") //should return "god"
//   reverse("race car") //should return "rac ecar"

// // ================= Exircise-5 =================
// const isPalindrom = function (str) {
//     str = str.toLowerCase().replace(' ', '');
//     let len = str.length;
//     for (let i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           console.log('false');
//           return false;
//       }
//     }
//     console.log('true');
//     return true;
// }
// isPalindrom('Taco Cat')
// // ================= Exircise-6 =================
// const encrypt = function (str) {
//     let newStr = ''
//     for (let i in str) {
//         newStr += String.fromCharCode(str.charCodeAt(i)+1)
//     }
//     console.log(newStr);
// }
// encrypt('cat')
// // ================= Exircise-7 =================
// const decrypt = function (str) {
//     let newStr = ''
//     for (let i in str) {
//         newStr += String.fromCharCode(str.charCodeAt(i)-1)
//     }
//     console.log(newStr);
// }
// decrypt('dbu')
// // ================= Exircise-8 =================
// const colors = ["red", "indigo", "white", "teal", "yellow"];
// const foods = ["bread", "cheese", "cucumber"];
// const jumble = function (arr1, arr2) {
//     let jumbledArr = arr1.concat(arr2)
//     for (let i in jumbledArr) {
//         let ran = Math.floor(Math.random() * jumbledArr.length)
//         const val = jumbledArr[i]
//         jumbledArr[i] =  jumbledArr[ran]
//         jumbledArr[ran] = val
//     }
//     console.log(jumbledArr);
//     return jumbledArr
// }
// jumble(colors, foods)
// ================= Exircise-9 =================
// ================= Extension-1 =================
// ================= Extension-2 =================
// ================= Extension-3 =================
// ================= Extension-4 =================