import { AuthenticationResponse } from "src/app/features/auth/models/interfaces";

export class User{
    private _id:number;
    private _accessToken:string;
    private _username:string;
    private _email:string;
    private _firstName:string;
    private _lastName:string;

    constructor(authResponse:AuthenticationResponse){
        this.id = authResponse.user.id;
        this.username = authResponse.user.username;
        this.email = authResponse.user.email;
        this.firstName = authResponse.user.firstName;
        this.lastName = authResponse.user.lastName;
        this.accessToken = authResponse.jwt;
    }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter accessToken
     * @return {string}
     */
	public get accessToken(): string {
		return this._accessToken;
	}

    /**
     * Getter username
     * @return {string}
     */
	public get username(): string {
		return this._username;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Getter firstName
     * @return {string}
     */
	public get firstName(): string {
		return this._firstName;
	}

    /**
     * Getter lastName
     * @return {string}
     */
	public get lastName(): string {
		return this._lastName;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter accessToken
     * @param {string} value
     */
	public set accessToken(value: string) {
		this._accessToken = value;
	}

    /**
     * Setter username
     * @param {string} value
     */
	public set username(value: string) {
		this._username = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Setter firstName
     * @param {string} value
     */
	public set firstName(value: string) {
		this._firstName = value;
	}

    /**
     * Setter lastName
     * @param {string} value
     */
	public set lastName(value: string) {
		this._lastName = value;
	}

}