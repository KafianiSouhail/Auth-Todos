import { TodoTypes } from "../enums";

export interface TodoResponse{

    id: number;
    attributes:{
        title: string;
        content: string;
        type: TodoTypes
    }
}