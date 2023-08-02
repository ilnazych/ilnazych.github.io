export interface DataType {
    key: string;
    name: string;
    date: string;
    numericalValue: number;
}

export interface InitialState {
    toolkit: {
        modalState: boolean;
        modalData: DataType;
        filtredData: DataType[];
        data: DataType[];
    }
}

export interface Values {
    title: string;
    description: string;
    modifier: string;
}

