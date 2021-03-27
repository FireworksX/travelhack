class NavigationStore {
    @observable activeStory = 'news'

    @action
    setStory(name) {
        this.activeStory = name
    }
}

