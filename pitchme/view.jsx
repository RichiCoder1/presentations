// Somewhere down the dependency tree
function Feed () {
    const { feed } = useContext(DataContext);
    return feed.map(item => /*...*/);
}