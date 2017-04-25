class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      state: null,
      latitude: null,
      longitude: null,
      entries: []
    }
  }

  getCoordinates (city, state) {
    $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + ',+' + state + '&key=AIzaSyAbq13fsulOoassOY7zxBdIHgY2-sEvyLk', function(data) {
      var lat = data.results[0].geometry.location.lat;
      var lng = data.results[0].geometry.location.lng;
      console.log('lat', lat);
      console.log('lng', lng);
      this.setState({
        latitude: lat,
        longitude: lng
      })
      // this.setState({
      //     coordinates: data
      //   }, function() {
      //     console.log(this.state.coordinates);
      //   })
    })
    // .done((items) => {
    //   callback(items, function (data) {
    //     console.log(data);
    //     this.setState({
    //       coordinates: data
    //     }, function() {
    //       console.log(this.state.coordinates);
    //     })
    //   });
    // })
    // .fail((err) => {
    //   console.log(err);
    // })
  }

  getLocation () {
    var location = $('#input').val();
    var array = location.split(', ');
    var city = array[0];
    var state = array[1];
    this.setState({
      city: city,
      state: state
    }, function() {
      this.getCoordinates(city, state)
    });
    
  }


  render() {
    return (
      <div>
        <div className = "search">
          <Search getLocation={this.getLocation.bind(this)}/>
        </div>
        <div className = "display">
          <Display />
        </div>
      </div>
    );
  }
}