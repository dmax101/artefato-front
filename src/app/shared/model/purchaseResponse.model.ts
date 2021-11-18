export class PurchaseResponse {
    public buyerName:  string;
    public buyerId:  string;
    public value:  number;
    public productName:  string;
    public productId:  string;
    public paymentInfo: Object;

    constructor(buyerName: string, buyerId: string, value: number, productName: string, productId: string, paymentInfo: Object) {
        this.buyerName = buyerName;
        this.buyerId = buyerId;
        this.value = value;
        this.productName = productName;
        this.productId = productId;
        this.paymentInfo = paymentInfo;
    }
    
}