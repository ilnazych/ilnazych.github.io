export interface DataType {
    key?: number;
    name: string;
    date: number;
    numericalValue: number;
}[]

export interface initialState {
    toolkit: {
        modalState: boolean;
        data: DataType[];
    }
}

export interface Values {
    title: string;
    description: string;
    modifier: string;
}