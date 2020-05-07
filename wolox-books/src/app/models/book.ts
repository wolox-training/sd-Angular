export class Book {
	constructor(
		private _author :string,
		private _title :string,
		private _imageUrl :string,
		private _editor :string,
		private _year :string,
		private _genre :string,
		private _createdAt :string,
		private _updatedAt :string
	) {}

	get author(){
		return this._author;
	}

	get title(){
		return this._title;
	}

	get genre(){
		return this._genre;
	}

	get year(){
		return this._year;
	}

	get editor(){
		return this._editor;
	}

	toJson(){
		return {
			author: this._author,
			title: this._title,
			image_url: this._imageUrl,
			editor: this._editor,
			year: this._year,
			genre: this._genre,
			created_at: this._createdAt,
			updated_at: this._updatedAt
		};
	}
}
