const GlobalAuthorData = fetchArgs => WrappedComponent =>
  function WrapComponent(props) {
    const { source, query, filter } = fetchArgs;
    const authorData = useContent({
      source: source,
      query: query,
      filter: filter,
    });

    return (
      <WrappedComponent {...props} authorData={authorData} source={source} />
    );
  };
  
  export default GlobalAuthorData;