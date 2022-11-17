import { makeAutoObservable } from "mobx";
import { IDetails } from "../../types";
import { getMovieDetail } from "../../api";
import { FetchModelShelf } from "@startapp/mobx-utils";

export class Store {
	constructor(id?: string) {
		makeAutoObservable(this);
		this.fetchShelf = new FetchModelShelf(
			id,
			getMovieDetail,
		);
	}
	public fetchShelf: FetchModelShelf<IDetails,string | undefined>;
}
