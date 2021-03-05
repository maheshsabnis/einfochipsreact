"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MyClass = /*#__PURE__*/function () {
  // parameterized constructor (ctor)
  function MyClass(x, y) {
    _classCallCheck(this, MyClass);

    this.num1 = x;
    this.num2 = y;
    this.val = 0;
  }

  _createClass(MyClass, [{
    key: "sum",
    value: function sum() {
      return this.num1 + this.num2;
    } // properties

  }, {
    key: "Val",
    get: function get() {
      return this.val;
    },
    set: function set(v) {
      this.val = v;
    }
  }, {
    key: "additon",
    value: function additon() {
      var sum = 0;

      for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
        value[_key] = arguments[_key];
      }

      if (value.length > 0) {
        value.forEach(function (v, i) {
          sum += v;
        });
      }

      return sum;
    }
  }]);

  return MyClass;
}();

var o1 = new MyClass(10, 20);
console.log("Sum = ".concat(o1.sum()));
o1.Val = 100;
console.log("val = ".concat(o1.Val));
console.log("Add 2 ".concat(o1.additon(2, 3))); // arguments with 2 parameters

console.log("Add 3 ".concat(o1.additon(2, 3, 4))); // arguments with 3 parameters

console.log("Add 4 ".concat(o1.additon(2, 3, 4, 5))); // arguments with 4 parameters

console.log("Add 5 ".concat(o1.additon(2, 3, 4, 5, 6))); // arguments with 5 parameters

var arr = [10, 20];
console.log(arr);
var newarr = [].concat(_toConsumableArray(arr), [30, 40, 50, 60]); // deep copy or speard of arr with additional values into newarr object

console.log("New Array after spread into arr ".concat(newarr));
arr = [].concat(_toConsumableArray(arr), [100, 200, 300, 400]);
console.log("Same arr after apread ".concat(arr));
