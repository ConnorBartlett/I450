export class Comment {

    imageId: Number;
    userName: string;
    commentBody: string;

    constructor(options: any){
        this.imageId = options['imageId']
        this.userName = options['userName']
        this.commentBody = options['commentBody']
    }
}