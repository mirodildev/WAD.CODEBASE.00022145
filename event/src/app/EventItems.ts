export interface Event {
    ID: number;
    Title: string;
    Description: string;
    CategoryID: number;
    Location: string;
    Category: {
        ID: number;
        Name: string;
    }
}