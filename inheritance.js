class Students{
    constructor(name,age,cls){
        this.stname=name;
        this.stage=age;
        this.stclass=cls;
    }
    stdata1(){
        return 'My name'+this.stname+','+'My age'+this.stage+'and My class is'+this.stclass;
    }
}
// let stdata=new Students('Bob',21,'B.tech 2nd year');
// console.log(stdata);
// console.log(stdata.stdata1());


class st1 extends Students{
    constructor(name,age,cls,address){
        super(name,age,cls);
        this.stAddress=address;
    }
    fulldetails(){
        return 'My name is'+this.stname+', My age is'+this.stage+', My class is'+this.stclass+'and My address is'+this.stAddress;
    }
}
let data=new st1('Tom',23,'B.tech 3rd year','USA');
console.log(data);
console.log(data.fulldetails());

