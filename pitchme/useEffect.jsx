function useResource({ url, rootNode = document.body }) {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const insertResource = fetch(url)
            .then(res => res.text())
            .then(text => {
                const target = document.createElement('div');
                target.innerHTML = text;
                target.classList.add(`injected-resource`);
                rootNode.prepend(target);
                setLoaded(true);
                return target;
            });
        return () => {
            insertResource.then(resourceNode => rootNode.removeChild(resourceNode));
        };
    }, []);
    return loaded;
}