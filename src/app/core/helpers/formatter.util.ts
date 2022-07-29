import { map, Observable } from "rxjs";
import { AuthenticatedUserData, AuthenticationResponse } from "src/app/features/auth/models/interfaces";
import { Todo, TodoResponse } from "src/app/features/todos/models";
import { User } from "../models/classes";

export class FormatterUtil{

    static formatAuthResponseToUser(source:Observable<AuthenticationResponse>){
        return  source.pipe(map(authResponse => new User(authResponse)));
    }

    static formatAuthenticatedUserDataToUser(authenticatedUserData:AuthenticatedUserData,jwt:string):User{
        const authresponse: AuthenticationResponse = {
            jwt,
            user:{
                ...authenticatedUserData
            }
        };
        return new User(authresponse);
    }

    static formatTodoResponseToTodo(todoResponse: TodoResponse): Todo{
        return new Todo(todoResponse);
    }

    static formatTodosResponseToTodos(todosResponse:TodoResponse[]): Todo[]{        
        const todos:Todo[] = todosResponse.map(todoResponse => new Todo(todoResponse));
        return todos;
    }
     
}