class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form id="searchForm">
        <input id="input" type="text" name="locationSearch" placeholder="City, ST"/>
        <input className="button" type="button" value="GO" onClick={this.props.getLocation}/>
      </form>
    );
  }
}
