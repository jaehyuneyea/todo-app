import { FieldValue, serverTimestamp } from "@angular/fire/firestore";

export class Task {

    constructor(
        public createdAt: typeof serverTimestamp | FieldValue,
        public id: string,
        public description: string,
        public isDone: boolean
    ) { }
}