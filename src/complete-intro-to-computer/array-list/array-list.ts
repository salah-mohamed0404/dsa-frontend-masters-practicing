export class ArrayList<T> {
	private data: Record<number, T> = {};
	public length: number = 0;

	constructor() {
		this.data = {};
		this.length = 0;
	}

	push(item: T) {
		this.data[this.length] = item;
		this.length++;
	}

	pop() {
		return this.delete(this.length - 1);
	}

	get(index: number) {
		return this.data[index];
	}

	delete(index: number) {
		if (index < 0 || index >= this.length) return undefined;

		const deletedItem = this.data[index];
		this.#collapceTo(index);

		return deletedItem;
	}

	#collapceTo(index: number) {
		for (let i = index; i < this.length - 1; i++)
			this.data[i] = this.data[i + 1];

		delete this.data[this.length - 1];
		this.length--;
	}
}
