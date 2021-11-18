export class Product {
    public name: string;
    public description: string;
    public price: number;
    public isAvailable: boolean;
    public imageURL: Array<string>;

    constructor(name: string, description: string, price: number, isAvailable: boolean, imageURL: Array<string>) {
        this.name = name
        this.description = description
        this.price = price
        this.isAvailable = isAvailable
        this.imageURL = imageURL
    }

}