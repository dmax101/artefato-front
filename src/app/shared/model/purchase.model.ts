export class Purchase {
    public buyerId: string;
    public productId: string;
    
    constructor(buyerId: string, productId: string) {
        this.buyerId = buyerId;
        this.productId = productId;
    }
}