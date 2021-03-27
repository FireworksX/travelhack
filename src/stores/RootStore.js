import { makeObservable, observable } from "mobx"
import { NavigationStore } from "./NavigationStore"

export class RootStore {
  constructor(value) {
    makeObservable(this, {
        navigation: observable.ref,
    })
    this.navigation = new NavigationStore()
  }
}