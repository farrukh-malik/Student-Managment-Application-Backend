declare const connection: any;
declare const tables: any;
declare function createUser(user: any): Promise<unknown>;
declare function approveUser(user: any): Promise<unknown>;
declare function getAllUser(): Promise<unknown>;
declare function deleteUser(userId: any): Promise<unknown>;
