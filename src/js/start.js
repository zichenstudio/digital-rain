// MIT License

// Copyright (c) 2023 ZiChenStudio Official

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

function $(id) {
	return document.getElementById(id);
};
var mywindow = window.screen;
var div = $("div");
div.width = mywindow.width;
div.height = mywindow.height;
var str = "0123456789abcdefghijklmnopqrstuvwxyz&$#";
str = str.split("");
alert('11 < it < 49 !');
sizeNumber = prompt("FontSize?","12");
console.log(sizeNumber);

var size = sizeNumber;
var col = div.width / size;
var drops = [];
for (var i = 0; i < col; i++) {
	drops[i] = 1;
}
var ctx = div.getContext("2d");
jQuery.getScript('./js/run.js');
