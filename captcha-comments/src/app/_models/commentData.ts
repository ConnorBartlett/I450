export class Comment {

    // _id: string;
    userName: string;
    commentBody: string;

    constructor(options: any){
        // this._id = options['_id']
        this.userName = options['userName']
        this.commentBody = options['commentBody']
    }
}