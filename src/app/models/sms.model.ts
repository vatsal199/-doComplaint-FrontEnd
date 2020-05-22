export class SMS {
    public senderEnroll:string;
    public senderName:string;
    public senderMobileNo:string;

    public recipientEnroll:string;
    public recipientMoNo:string;
    public itemTitle:string;
    public itemSDesc:string;

    constructor(senderId:string,senderName:string,senderMobileNo:string,recipientId:string,
        recipientMoNo:string,itemTitle:string,itemSDesc:string){

        this.senderEnroll = senderId;
        this.senderName = senderName;
        this.senderMobileNo = senderMobileNo;
        
        this.recipientEnroll = recipientId;
        this.recipientMoNo = recipientMoNo;
        this.itemTitle = itemTitle;
        this.itemSDesc = itemSDesc;
    }
}