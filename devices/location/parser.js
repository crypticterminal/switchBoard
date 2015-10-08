/*jslint white: true */
/*global module, console */

/**
 * Copyright (c) 2014 brian@bevey.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

(function(exports){
  'use strict';

  var version = 20151006;

  exports.location = function (deviceId, markup, state, value, fragments) {
    var template   = fragments.item,
        tempMarkup = '',
        i          = 0;

    if((state) && (value)) {
      for(i; i < value.length; i += 1) {
        tempMarkup = tempMarkup + template.split('{{LOCATION_NAME}}').join(value[i].name);
        tempMarkup = tempMarkup.split('{{LOCATION_URL}}').join(value[i].url);
        tempMarkup = tempMarkup.split('{{LOCATION_LATLONG}}').join(value[i].lat + ', ' + value[i].long);
        tempMarkup = tempMarkup.split('{{LOCATION_ALTITUDE}}').join(value[i].alt);
        tempMarkup = tempMarkup.split('{{LOCATION_SPEED}}').join(value[i].speed);
      }
    }

    markup = markup.replace('{{LOCATION_DYNAMIC}}', tempMarkup);

    return markup;
  };
})(typeof exports === 'undefined' ? this.SB.spec.parsers : exports);