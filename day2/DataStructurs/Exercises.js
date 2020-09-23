class UniqueArray {
    constructor () {
        this.arr = []
        this.items = {}
    }

    add(item) {
        !this.items[item] ? (this.items[item] = true, this.arr.push(item)) : ''
    }

    showAll() {
        console.log(Object.keys(this.items));
    }

    exists(item) {
        console.log(this.items[item] ? true : false);
    }

    get(index) {
         return this.arr[index] ? this.arr[index] : -1
    }
}


const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"