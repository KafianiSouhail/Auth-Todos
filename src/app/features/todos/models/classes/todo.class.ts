import { TodoTypes } from "../enums";
import { TodoResponse } from "../interfaces";

export class Todo{
    private _id: number;
    private _title: string;
    private _content: string;
    private _type: TodoTypes;

    constructor(todo:TodoResponse){
        this.title = todo.attributes.title;
        this.content = todo.attributes.content;
        this.type = todo.attributes.type;
        this.id = todo.id;
    }


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter title
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Getter content
     * @return {string}
     */
	public get content(): string {
		return this._content;
	}

    /**
     * Getter type
     * @return {TodoTypes}
     */
	public get type(): TodoTypes {
		return this._type;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter title
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}

    /**
     * Setter content
     * @param {string} value
     */
	public set content(value: string) {
		this._content = value;
	}

    /**
     * Setter type
     * @param {TodoTypes} value
     */
	public set type(value: TodoTypes) {
		this._type = value;
	}


    


}