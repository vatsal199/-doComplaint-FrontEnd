export class Complaint{
    constructor(
        public id:number,
        public timestamp:string,
        public username:string,
        public roomnumber:string,
        public issue:string,
        public status:string,
        public mobilenumber:string
    ){}
}