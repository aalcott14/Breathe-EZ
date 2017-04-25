class Search extends React.Component {
  render() {
    return (
      <form id="searchForm">
        <input className="search-input" type="text" name="locationSearch" placeholder="City, State"/>
        <input className="search-submit" type="submit" value="GO"/>
      </form>
    );
  }
}
