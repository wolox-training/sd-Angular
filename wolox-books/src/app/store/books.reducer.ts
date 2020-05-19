import { Book } from '../models/book';
import * as BookActions from '../store/book.actions';

export function reducer(state: Book[] = [], action: BookActions.Actions) {

	switch(action.type) {
		case BookActions.ADD_BOOK:
			return [...state, action.book];
		case BookActions.REMOVE_BOOK:
			return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
		default:
			return state;
	}
}
