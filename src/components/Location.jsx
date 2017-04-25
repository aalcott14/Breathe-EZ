class Location extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="location">
        <br/>
        <br/>
        <br/>
        {this.props.location}
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}