export class Image {

    imageId: Number;
    photographer: string;
    url: string;

    constructor(options: any){
        this.imageId = options['imageId']
        this.photographer = options['photographer']
        this.url = options['url']
    }
}