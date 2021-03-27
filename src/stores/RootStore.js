import { makeObservable, observable } from "mobx"
import { NavigationStore } from "./NavigationStore"

export class RootStore {
  navigation = null
  constructor(value) {
    makeObservable(this, {
        navigation: observable.ref,
    })
    this.navigation = new NavigationStore()
  }
}