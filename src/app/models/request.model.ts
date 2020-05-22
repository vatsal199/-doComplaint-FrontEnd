export class Request {
    public id:number;
    public title:string;
    public shortDesc:string;
    public imgUrl:string;
    public enrollNo:string;
    public mobilenumber: string;

    constructor(id:number,title:string,shortDesc:string,imgUrl:string,
        enrollNo:string,mobilenumber:string){

        this.id = id;
        this.title = title;
        this.shortDesc = shortDesc;
        this.imgUrl = imgUrl;
        this.enrollNo = enrollNo;
        this.mobilenumber = mobilenumber;
    }
}