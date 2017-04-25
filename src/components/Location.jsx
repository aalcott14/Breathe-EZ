class Location extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div id="location">
        {this.props.city}, {this.props.state}
      </div>
    );
  }
}