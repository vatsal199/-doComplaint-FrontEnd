export class Complaint {
    public id:number;
    public timestamp:string;
    public username:string;
    public roomnumber:string;
    public mobilenumber:string;
    public issue:string;
    public status:string;

    constructor(id:number,ts:string,uname:string,roomnumber:string,
        mobilenumber:string,issue:string,status:string){

        this.id = id;
        this.timestamp = ts;
        this.username = uname;
        this.roomnumber = roomnumber;
        this.mobilenumber = mobilenumber;
        this.issue = issue;
        this.status = status;
    }
}