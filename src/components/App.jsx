class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      state: null,
      coordinates: null,
      entries: []
    }
  }

  // getCoordinates (city, state, callback) {
  //   $.get('https://maps.googleapis.com/maps/api/geocode/json?address=+' + this.state.city + ',+' + this.state.state + '&key=AIzaSyAbq13fsulOoassOY7zxBdIHgY2-sEvyLk', {})
  //   .done(({items}) => {
  //     callback(items, function (data) {
  //       console.log(data);
  //       this.setState({
  //         coordinates: data
  //       })
  //     });
  //   })
  //   .fail(({err}) => {
  //     console.log(err);
  //   })
  // },

  getLocation (input) {
    var array = input.split(', ');
    var city = array[0];
    var state = array[1];
    this.setState({
      city: city,
      state: state
    });
    console.log('CITY ', this.state.city);
    console.log('STATE ', this.state.state);
  }


  render() {
    return (
      <div>
        <div className = "search">
          <Search getLocation={this.getLocation} getCoordinates={this.getCoordinates}/>
        </div>
        <div className = "display">
          <Display />
        </div>
      </div>
    );
  }
}