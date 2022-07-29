import { TodoTypes } from "../enums";

export interface TodoType{
    id: number,
    icon: string,
    title: string,
    type: TodoTypes
}