import { TodoResponse } from "./todo-response.interface";

export interface FetchTodosResponse{
    data: TodoResponse[],
    meta: {
        pagination: {
            page: number,
            pageSize: number,
            pageCount: number,
            total: number
        }
    }
}