export interface AuthenticationResponse{
    jwt:string;
    user:{
        id:number;
        username:string;
        email:string;
        firstName:string;
        lastName:string;
    }
}