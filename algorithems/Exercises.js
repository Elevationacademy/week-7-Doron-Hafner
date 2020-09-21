// ================= Exircise-1 =================
const printStars = function (num) {
    while (num > 0) {
        console.log('*'.repeat(i));
        num --
    }
}
printStars(5)

// ================= Exircise-2 =================
const printBackwardsStars = function (num) {
    while (num > 0 ) {
        console.log('*'.repeat(num));
        num --
    }
}
printBackwardsStars(6)
// ================= Exircise-3 =================
const printStarSeries = function (num, count) {
    if (count > 0) {
        let i = 1
        while (i <= num) {
            console.log('*'.repeat(i));
            i ++
        }
        while (num > 0 ) {
            console.log('*'.repeat(num-1));
            num --
        }
        console.log('');
        count --
        count ? printStarSeries(5, count): ''
    }
}
printStarSeries(5, 3)

// ================= Exircise-4 =================
const reverse = function(str){
    
    let reversed = [... str].reverse().join('')
    console.log(reversed);
    return reversed
  }
  
  reverse("dog") //should return "god"
  reverse("race car") //should return "rac ecar"

// ================= Exircise-5 =================
const isPalindrom = function (str) {
    str = str.toLowerCase().replace(' ', '');
    let len = str.length;
    for (let i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          console.log('false');
          return false;
      }
    }
    console.log('true');
    return true;
}
isPalindrom('Taco Cat')