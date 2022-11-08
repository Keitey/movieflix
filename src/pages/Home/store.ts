import { makeAutoObservable } from "mobx";
import { PaginatedListShelf } from "@startapp/mobx-utils";
import { HomeItems } from "../../types";
import { getMovies } from "../../api";

export class Store {
	constructor() {
		makeAutoObservable(this);
		this.moviesShelf = new PaginatedListShelf(getMovies);
	}
	public moviesShelf: PaginatedListShelf<HomeItems>;
}
