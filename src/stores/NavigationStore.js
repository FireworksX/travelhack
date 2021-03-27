import { makeAutoObservable } from "mobx"

export class NavigationStore {
    activeStory = 'news'

    setStory(name) {
        this.activeStory = name
    }
    constructor() {
        makeAutoObservable(this)
    }
}

