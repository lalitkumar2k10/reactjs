'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SuggestionApp = function (_React$Component) {
  _inherits(SuggestionApp, _React$Component);

  function SuggestionApp(props) {
    _classCallCheck(this, SuggestionApp);

    var _this = _possibleConstructorReturn(this, (SuggestionApp.__proto__ || Object.getPrototypeOf(SuggestionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {
      options: [] //since reading from local storage hence no this.props required
    };
    return _this;
  }

  _createClass(SuggestionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('fetching data!');
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);
        if (options) this.setState(function () {
          return { options: options };
        });
      } catch (e) {
        // do nothing
        // never occur
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // may need on multiple page switch
      if (prevState.options.length !== this.state.options.length) {
        console.log('saving data!');
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('componentWillUnmount!');
      // try below code in console
      // ReactDOM.render(React.createElement('p'), document.getElementById('app'))
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function (prevState) {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handleDeleteOption',
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {

      var option = Math.floor(Math.random() * this.state.options.length);
      alert('We Should meet near ' + this.state.options[option] + ' location.');
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) return 'Enter valid item';else if (this.state.options.indexOf(option) > -1) return 'This option already exits';

      // this.setState((prevState)=>{
      //   return {
      //     options: prevState.options.concat([option])
      //   }
      // });

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var subtitle = "Get Nearby Meeting Locations";

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick }),
        React.createElement(Options, { options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return SuggestionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: "Meet App"
};

// class Header extends React.Component{
//   render(){
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//       );
//   }
// }

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handlePick,
        disabled: !props.hasOptions },
      'Where to meet?'
    )
  );
};

// class Action extends React.Component{

//   render(){
//     return (
//       <div>
//         <button onClick={this.props.handlePick} 
//         disabled={!this.props.hasOptions}>
//           What should i do?
//         </button>

//       </div>
//       );
//   }
// }

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All'
    ),
    !props.options.length && React.createElement(
      'p',
      null,
      'Please add option to get started!'
    ),
    //key can not be accessed as this.props.key thats why optionText
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption });
    })
  );
};

// class Options extends React.Component{

//   render(){
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions} >Remove All</button>
//         {//key can not be accessed as this.props.key thats why optionText
//           this.props.options.map((option)=><Option key={option} optionText={option} />)
//         }
//         <Option />
//       </div>
//       );
//   }
// }
var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.optionText,
    React.createElement(
      'button',
      { onClick: function onClick(e) {
          props.handleDeleteOption(props.optionText);
        } },
      'Remove'
    )
  );
};

// class Option extends React.Component{
//   render(){
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//       );
//   }
// }

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleOnSubmit = _this2.handleOnSubmit.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleOnSubmit',
    value: function handleOnSubmit(e) {
      e.preventDefault();

      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);

      this.setState(function () {
        return {
          error: error
        };
      });

      // or
      this.setState(function () {
        return { error: error };
      });

      // not wipe every time
      if (!error) {
        e.target.elements.option.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleOnSubmit },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add People'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);
// // stateless functional component
// const User = (props)=>{
//   return (
//     <div>
//       name {props.name}
//     </div>
//     );
// };

// ReactDOM.render(<User name="Lalit" />,  document.getElementById('app'));


ReactDOM.render(React.createElement(SuggestionApp, null), document.getElementById('app'));
