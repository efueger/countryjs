// Copyright (c) 2015, Trent Oswald <trentoswald@therebelrobot.com
//
// Permission to use, copy, modify, and/or distribute this software for any purpose
// with or without fee is hereby granted, provided that the above copyright notice
// and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED 'AS IS' AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
// REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT,
// OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE,
// DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS
// ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

var glob = require('glob')
var _ = require('lodash')

module.exports = function () {
  var totalList = []
  var fileList = glob.sync(__dirname + '/*.json')
  _.forEach(fileList, function (file) {
    file = file.split('/')
    file = file[file.length - 1]
    file = require('./' + file)
    file.ISO[2] = file.ISO.alpha2
    file.ISO[3] = file.ISO.alpha3
    totalList.push(file)
  })
  return totalList
}
