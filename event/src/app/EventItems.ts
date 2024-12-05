export interface Event {
    id: number;
    title: string;
    description: string;
    categoryID: number;
    location: string;
    category: {
        id: number;
        name: string;
    }
}