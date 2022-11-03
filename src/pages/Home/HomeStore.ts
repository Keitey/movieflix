import { makeObservable, observable } from "mobx";
import { HomeItems } from "../../types";

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
