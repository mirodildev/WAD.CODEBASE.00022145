export interface Event {
    id: number;
    name: string;
    description: string;
    categoryID: number;
    location: string;
    category: {
        id: number;
        name: string;
    }
}