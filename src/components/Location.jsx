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
        <canvas id="square" width="20" height="20" style={{border: 1 + 'px solid'}}>
        </canvas>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}