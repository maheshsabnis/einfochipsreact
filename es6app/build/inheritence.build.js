"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Base = /*#__PURE__*/function () {
  function Base(v1, v2) {
    _classCallCheck(this, Base);

    this.p1 = v1;
    this.p2 = v2;
  }

  _createClass(Base, [{
    key: "getLength",
    value: function getLength() {
      return this.p1.length;
    }
  }, {
    key: "changeCase",
    value: function changeCase(c) {
      if (c === "U" || c === "u") return this.p1.toUpperCase();
      if (c === "L" || c === "l") return this.p1.toLowerCase();
      return this.p1;
    }
  }]);

  return Base;
}(); // the derive class have access to all public members of the base class
// this members are accessed using 'this.' prefix
// if the derive class wite constructor then it must call the base
// class constructor using 'super()'


var Derive = /*#__PURE__*/function (_Base) {
  _inherits(Derive, _Base);

  var _super = _createSuper(Derive);

  function Derive(a, b) {
    _classCallCheck(this, Derive);

    // values will be passed to base class using super() with paraneters
    return _super.call(this, a, b);
  }

  _createClass(Derive, [{
    key: "concat",
    value: function concat() {
      return "".concat(this.p1, " ").concat(this.p2);
    }
  }]);

  return Derive;
}(Base);

var o2 = new Derive("ES 6 is greate", 'Use it for React');
console.log("Length of string ".concat(o2.getLength()));
console.log("Upper Case ".concat(o2.changeCase("U")));
console.log("Lower Case ".concat(o2.changeCase("L")));
console.log("Concat ".concat(o2.concat())); // can I access derive class functions using Base class instance

var o3 = new Base("value1", "Value2");
o3.concat();
