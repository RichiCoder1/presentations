function App () {
    const [loading, [articles, feed], error] = 
        useQuery([GetArticlesQuery, GetFeedQuery]);

    return (loading 
        ? <Spinner /> 
        : <DataProvider value={{articles, feed}}>
            <SomeView />
          </DataProvider>
    );
}