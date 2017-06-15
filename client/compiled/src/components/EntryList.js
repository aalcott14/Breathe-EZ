"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EntryList = function (_React$Component) {
  _inherits(EntryList, _React$Component);

  function EntryList(props) {
    _classCallCheck(this, EntryList);

    return _possibleConstructorReturn(this, (EntryList.__proto__ || Object.getPrototypeOf(EntryList)).call(this, props));
  }

  _createClass(EntryList, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "entries" },
        "Overview: ",
        this.props.pollutantInfo.breezometer_description,
        React.createElement("br", null),
        React.createElement("br", null),
        "Dominant Pollutant: ",
        this.props.pollutantInfo.dominant_pollutant_description,
        "  (",
        this.props.pollutantInfo.dominant_pollutant_canonical_name,
        ")",
        React.createElement("br", null),
        React.createElement("br", null),
        "Causes and Effects: ",
        this.props.pollutantText
      );
    }
  }]);

  return EntryList;
}(React.Component);