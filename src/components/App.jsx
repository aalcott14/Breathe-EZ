class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      entries: []
    };
  }
  render() {
    return (
      <div className = "nav">
        <Nav />
      </div>
    );
  }
}