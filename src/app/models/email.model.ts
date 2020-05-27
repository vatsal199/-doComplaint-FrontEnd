export class Email {
    public enrollNo:string;
    public ownerEnrollNo:string;

    constructor(enrollNo:string,ownerEnrollNo:string){

        this.enrollNo = enrollNo;
        this.ownerEnrollNo = ownerEnrollNo; // enrollment of current logged in user

    }
}