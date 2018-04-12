import { BaseEntity, User } from './../../shared';

export class Article implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public content?: any,
        public date?: any,
        public user?: User,
    ) {
    }
}
