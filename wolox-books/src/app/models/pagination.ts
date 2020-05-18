
export class Pagination<T> {
	constructor(
    private _count: number,
    private _total_pages: number,
    private _total_count: number,
    private _current_page: number,
		private _next_age: number,
		private _page: T[]
	){}

	get page() {
		return this._page;
	}
}
