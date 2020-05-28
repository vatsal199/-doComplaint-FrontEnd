export class Email {
    public enrollNo:string;
    public ownerEnrollNo:string;
    public itemId:number;

    constructor(enrollNo:string,ownerEnrollNo:string,itemId:number){

        this.enrollNo = enrollNo;
        this.ownerEnrollNo = ownerEnrollNo; // enrollment of current logged in user
        this.itemId = itemId;

    }
}