export class Product {
    public id: string;
    public name: string;
    public description: string;
    public price: number;
    public isAvailable: boolean;
    public imageURL: Array<string>;

    constructor(id: string, name: string, description: string, price: number, isAvailable: boolean, imageURL: Array<string>) {
        this.id = id;
        this.name = name
        this.description = description
        this.price = price
        this.isAvailable = isAvailable
        this.imageURL = imageURL
    }

}