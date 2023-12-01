import { FieldValue, serverTimestamp } from "@angular/fire/firestore";

export class Task {

    constructor(
        public id: string,
        public createdAt: typeof serverTimestamp | FieldValue,
        public description: string,
        public isDone: boolean
    ) { }
}