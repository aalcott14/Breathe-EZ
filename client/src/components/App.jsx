const $ = require('jquery');
const google = require('../config/Google');
const breezo = require('../config/BreezoMeter');

const GOOGLE_API_KEY = google.API_KEY;
const BREEZOMETER_API_KEY = breezo.API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      latitude: null,
      longitude: null,
      entries: {},
      text: []
    }
  }

  getCoordinates (city, state) {
    var context = this;
    $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + ',+' + state + '&key=' + GOOGLE_API_KEY, function(data) {
      var lat = data.results[0].geometry.location.lat;
      var lng = data.results[0].geometry.location.lng;
      context.setState({
        latitude: lat,
        longitude: lng
      }, function() {
        this.getAirConditions();
      })
    })
  }

  getLocation () {
    var location = $('#input').val();
    var array = location.split(', ');
    var city = array[0].charAt(0).toUpperCase() + array[0].slice(1);
    var state = array[1].toUpperCase();
    this.setState({
      location: city + ', ' + state
    }, function() {
      this.getCoordinates(city, state);
    });
  }

  getAirConditions () {
    var context = this;
    $.get('https://api.breezometer.com/baqi/?lat=' + context.state.latitude + '&lon=' + context.state.longitude + '&key=' + BREEZOMETER_API_KEY, function(data) {
      if (data.data_valid === false) {
        alert('Data not available in your area');
      } else {
        context.setState({
          entries: data,
          text: [data.dominant_pollutant_text.causes, data.dominant_pollutant_text.effects].join(' ')
        })
        console.log(context.state);
      }
    })
  }


  render() {
    return (
      <div>
        <div className = "search">
          <Search getLocation={this.getLocation.bind(this)}/>
        </div>
        <div className = "location">
          <Location location={this.state.location} color={this.state.entries.breezometer_color}/>
        </div>
        <div className = "entryList">
          <EntryList pollutantInfo={this.state.entries} pollutantText={this.state.text}/>
        </div>
      </div>
    );
  }
}
