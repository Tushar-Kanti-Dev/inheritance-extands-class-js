class teamMember {
    name;
    address;
    sub = 'React Developer';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class support extends teamMember {
    counsilingHour;
    designation;
    constructor(name, address, designation, counsilingHour) {
        super(name, address);
        this.designation = designation;
        this.counsilingHour = counsilingHour;
    }
    startSession() {
        console.log(this.name, 'Start new session');
    }
};


class studentCare extends teamMember {

    giveRutine(student) {
        this.student = student;
        console.log(this.name, 'Build a rutine for ', this.student);
    }
}
class helloSuperStar extends teamMember {

    releaseApp(developer) {
        this.developer = developer;
        console.log(this.name, 'New version available 5.2.2.1', this.developer);
    }
}

// support 
const krish = new support('Krish', 'India', 'React web Suppoter', '11am');
const robinsun = new support('Robinsun', 'Bangladesh', 'Js web Suppoter', '12am');
console.log(krish, robinsun);
// studentCare
const santo = new studentCare('Santo', 'Dhaka');
const musfique = new studentCare('Musfique', 'Barisal');
// studentCare
const masrafiBoss = new studentCare('Masrafi', 'Noyakhali');
// helloSuperStar 
const sham = new helloSuperStar('Sham', 'Singapur');
console.log(sham);
// console.log(musfique, masrafiBoss);
// santo.giveRutine('syman');
// masrafiBoss.giveRutine();
// sham.releaseApp('Amiiii');