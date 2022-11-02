import { makeObservable, observable } from "mobx";

interface HomeItems {
  id: number;
  image_path: string;
  poster_path: string;
  title: string;
  vote_average: number;
}

export class HomeStore {
  constructor() {
    makeObservable(this, {
      items: observable,
      loading: observable,
    });
  }
  items: HomeItems[] = [];
  loading: boolean = false;
}
