import { makeAutoObservable, makeObservable, observable, action } from "mobx"

export class NavigationStore {
    activeStory = 'feed'

    setStory = (name) => {
        this.activeStory = name
    }
    constructor() {
        makeObservable(this, {
            activeStory: observable,
            setStory: action
        })
    }
}

