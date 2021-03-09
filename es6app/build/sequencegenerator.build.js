"use strict";

var _marked = /*#__PURE__*/regeneratorRuntime.mark(makeRangeIteratorGenerator);

// in ES 6 function* is symbol for self-iteration
// this means that the function will read collection and
// produce each record (means yield) from collection and the funciton 
// will return
// each record first and then move to next record
function makeRangeIteratorGenerator() {
  var start,
      end,
      step,
      iterationCount,
      i,
      _args = arguments;
  return regeneratorRuntime.wrap(function makeRangeIteratorGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          start = _args.length > 0 && _args[0] !== undefined ? _args[0] : 0;
          end = _args.length > 1 && _args[1] !== undefined ? _args[1] : 100;
          step = _args.length > 2 && _args[2] !== undefined ? _args[2] : 1;
          iterationCount = 0;
          i = start;

        case 5:
          if (!(i <= end)) {
            _context.next = 12;
            break;
          }

          iterationCount++;
          _context.next = 9;
          return i;

        case 9:
          i += step;
          _context.next = 5;
          break;

        case 12:
          return _context.abrupt("return", iterationCount);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

var iterator = makeRangeIteratorGenerator(1, 20, 1); // the 'next()' is a Generator function of ES6
// set the counter for the first record in the collection or sequence
// and start generating values from it and yield it

var result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}
