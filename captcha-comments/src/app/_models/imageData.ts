export class Image {

    _id: string;
    photographer: string;
    url: string;

    constructor(options: any){
        this._id = options['_id']
        this.photographer = options['photographer']
        this.url = options['url']
    }
}