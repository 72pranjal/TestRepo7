class car{
    constructor(name,year){
        this.myCarname=name;
        this.myCaryear=year;
    }
    age(x){
        let date=new Date();
        return date.getFullYear() - x;
    }
}
let mycar1=new car('XUV',2000);
let mycar2=new car('Thar',2015);
console.log(mycar1.myCarname);
console.log(mycar2.myCaryear);
let a=mycar1.age(mycar1.myCaryear);
console.log(a);

