import { makeAutoObservable } from "mobx";
import { PaginatedListShelf } from "@startapp/mobx-utils";
import { HomeItems } from "../../types";
import { getMovies, getTopMovies } from "../../api";

export class Store {
	constructor() {
		makeAutoObservable(this);
		this.moviesShelf = new PaginatedListShelf(getMovies);
		this.topShelf = new PaginatedListShelf(getTopMovies);
	}
	public moviesShelf: PaginatedListShelf<HomeItems>;
	public topShelf: PaginatedListShelf<HomeItems>;
}
