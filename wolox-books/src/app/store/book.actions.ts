import { Action } from '@ngrx/store'
import { Book } from '../models/book'

export const ADD_BOOK       = '[BOOK] Add'
export const REMOVE_BOOK    = '[BOOK] Remove'

export class AddBook implements Action {
	readonly type = ADD_BOOK

	constructor(public book: Book) {}
}

export class RemoveBook implements Action {
	readonly type = REMOVE_BOOK

	constructor(public index: number) {}
}

export type Actions = AddBook | RemoveBook
