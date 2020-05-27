export class Profile {
    public enrollNo:string;
    public name:string;
    public imgUrl:string;
    public roomNo:string;
    public mobilenumber: string;

    constructor(enrollNo:string,name:string,imgUrl:string,roomNo:string,
        mobilenumber:string,gender:string){
        
        this.enrollNo = enrollNo;
        this.name = name;
        this.imgUrl = imgUrl;
        this.roomNo = roomNo;
        this.mobilenumber = mobilenumber;
    }
}