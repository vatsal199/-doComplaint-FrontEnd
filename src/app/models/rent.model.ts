export class Rent {
    public id:number;
    public title:string;
    public shortDesc:string;
    public description:string;
    public imgUrl:string;
    public rent:number;
    public enrollNo:string;
    public mobilenumber: string;

    constructor(id:number,title:string,shortDesc:string,desc:string,imgUrl:string,rent:number,
        enrollNo:string,mobilenumber:string){

        this.id = id;
        this.title = title;
        this.shortDesc = shortDesc;
        this.description = desc;
        this.imgUrl = imgUrl;
        this.rent = rent;
        this.enrollNo = enrollNo;
        this.mobilenumber = mobilenumber;
    }
}