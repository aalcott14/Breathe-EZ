'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      location: null,
      latitude: null,
      longitude: null,
      entries: {},
      text: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'getCoordinates',
    value: function getCoordinates(city, state) {
      var context = this;
      $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + ',+' + state + '&key=AIzaSyAbq13fsulOoassOY7zxBdIHgY2-sEvyLk', function (data) {
        var lat = data.results[0].geometry.location.lat;
        var lng = data.results[0].geometry.location.lng;
        context.setState({
          latitude: lat,
          longitude: lng
        }, function () {
          this.getAirConditions();
        });
      });
    }
  }, {
    key: 'getLocation',
    value: function getLocation() {
      var location = $('#input').val();
      var array = location.split(', ');
      var city = array[0].charAt(0).toUpperCase() + array[0].slice(1);
      var state = array[1].toUpperCase();
      this.setState({
        location: city + ', ' + state
      }, function () {
        this.getCoordinates(city, state);
      });
    }
  }, {
    key: 'getAirConditions',
    value: function getAirConditions() {
      var context = this;
      $.get('https://api.breezometer.com/baqi/?lat=' + context.state.latitude + '&lon=' + context.state.longitude + '&key=79b4fa25d91f4be3aac9c17bab707d7d', function (data) {
        if (data.data_valid === false) {
          alert('Data not available in your area');
        } else {
          context.setState({
            entries: data,
            text: [data.dominant_pollutant_text.causes, data.dominant_pollutant_text.effects].join(' ')
          });
          console.log(context.state);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'search' },
          React.createElement(Search, { getLocation: this.getLocation.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'location' },
          React.createElement(Location, { location: this.state.location, color: this.state.entries.breezometer_color })
        ),
        React.createElement(
          'div',
          { className: 'entryList' },
          React.createElement(EntryList, { pollutantInfo: this.state.entries, pollutantText: this.state.text })
        )
      );
    }
  }]);

  return App;
}(React.Component);