import { makeAutoObservable, observable } from "mobx";
import { movieDetails } from "../../types";
import { getMovieDetail } from "../../api";
import { FetchModelShelf } from "@startapp/mobx-utils";

export class Store {
  constructor(id?: string) {
    makeAutoObservable(this)
		this.fetchShelf = new FetchModelShelf(
			id,
			getMovieDetail,
		)
  }
  public fetchShelf: FetchModelShelf<movieDetails,string | undefined>
}
