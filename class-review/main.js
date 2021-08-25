class Student {
    constructor(fname) {
        this.fname = fname
    }

    static greet(instance) {
        console.log(instance.fname)
    }

    sayName() {
        console.log(this.fname)
    }
}

let justin = new Student("Justin");
let austin = new Student("Austin");

class EFAStudent extends Student {
    constructor(fname, badge) {
        super(fname)
        this.badge = badge
    }

    sayBadge() {
        console.log(this.badge)
    }
}

let dustin = new EFAStudent("dustin", "red");

dustin.sayName()
dustin.sayBadge()