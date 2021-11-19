export class PurchaseResponse {
    public buyerName: string;
    public buyerId: string;
    public value: number;
    public productName: string;
    public productId: string;
    public paymentInfo: PaymentInfo;

    constructor(buyerName: string, buyerId: string, value: number, productName: string, productId: string, paymentInfo: PaymentInfo) {
        this.buyerName = buyerName;
        this.buyerId = buyerId;
        this.value = value;
        this.productName = productName;
        this.productId = productId;
        this.paymentInfo = paymentInfo;
    }
}

export class PaymentInfo {
    public status: string;
    public qrbase64: string;
    public qrstring: string;
    public idfatura: string;
    public urlpixae: string;

    constructor(status: string, qrbase64: string, qrstring: string, idfatura: string, urlpixae: string) {
        this.status = status;
        this.qrbase64 = qrbase64;
        this.qrstring = qrstring;
        this.idfatura = idfatura;
        this.urlpixae = urlpixae;
    }
 }