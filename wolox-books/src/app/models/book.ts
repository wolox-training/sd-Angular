export class Book {
	constructor(
		private author :string,
		private title :string,
		private imageUrl :string,
		private editor :string,
		private year :string,
		private genre :string,
		private createdAt :string,
		private updatedAt :string
	) {}

	toJson(){
		return {
			author: this.author,
			title: this.title,
			image_url: this.imageUrl,
			editor: this.editor,
			year: this.year,
			genre: this.genre,
			created_at: this.createdAt,
			updated_at: this.updatedAt
		};
	}
}
