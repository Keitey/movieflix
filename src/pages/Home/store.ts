import { makeAutoObservable } from "mobx";
import { PaginatedListShelf } from "@startapp/mobx-utils";
import { HomeItems } from "../../types";
import { getMovies, getShows } from "../../api";

export class Store {
	constructor() {
		makeAutoObservable(this);
		this.moviesShelf = new PaginatedListShelf(getMovies);
		this.tvShelf = new PaginatedListShelf(getShows);
	}
	public moviesShelf: PaginatedListShelf<HomeItems>;
	public tvShelf: PaginatedListShelf<HomeItems>;
}
