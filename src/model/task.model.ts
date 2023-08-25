export enum Status{
    Open = "Open",
    InWork = "In Work",
    Closed = "Closed"
}

export class Task{

    constructor(public title:string, public assignee?: string, public description?:string, public status?:Status){
        this.status = Status.Open;
    }



}