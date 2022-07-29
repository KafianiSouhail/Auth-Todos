import { TodoTypes } from "../enums";

export interface TodoPyload{
    title: string;
    content: string;
    type: TodoTypes
}