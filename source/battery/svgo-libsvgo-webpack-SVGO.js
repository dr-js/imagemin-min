/* eslint-disable */
/* libsvgo@1.3.2 */
e="undefined"!=typeof self?self:this,t=function(){return function(e){var t={}
function r(n){if(t[n])return t[n].exports
var a=t[n]={i:n,l:!1,exports:{}}
e[n].call(a.exports,a,a.exports,r)
a.l=!0
return a.exports}r.m=e
r.c=t
r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})}
r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
Object.defineProperty(e,"__esModule",{value:!0})}
r.t=function(e,t){1&t&&(e=r(e))
if(8&t)return e
if(4&t&&"object"==typeof e&&e&&e.__esModule)return e
var n=Object.create(null)
r.r(n)
Object.defineProperty(n,"default",{enumerable:!0,value:e})
if(2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a))
return n}
r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:()=>e
r.d(t,"a",t)
return t}
r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
r.p=""
return r(r.s=227)}([function(e,t,r){var n=r(15)
var a=r(51)
var i=r(16)
var o=i.TYPE
var s=r(49)
var l=s.isNewline
var c=s.isName
var u=s.isValidEscape
var f=s.isNumberStart
var h=s.isIdentifierStart
var d=s.charCodeCategory
var p=s.isBOM
var m=r(10)
var g=m.cmpStr
var v=m.getNewlineLength
var b=m.findWhiteSpaceEnd
var y=m.consumeEscaped
var x=m.consumeName
var k=m.consumeNumber
var w=m.consumeBadUrlRemnants
function S(e,t){function r(t){return t<S?e.charCodeAt(t):0}function i(){P=k(e,P)
if(h(r(P),r(P+1),r(P+2))){R=o.Dimension
P=x(e,P)}else if(37!==r(P))R=o.Number
else{R=o.Percentage
P++}}function s(){const t=P
P=x(e,P)
if(g(e,t,P,"url")&&40===r(P)){if(34===r(P=b(e,P+1))||39===r(P)){R=o.Function
P=t+4
return}!function(){R=o.Url
P=b(e,P)
for(;P<e.length;P++){var t=e.charCodeAt(P)
switch(d(t)){case 41:P++
return
case d.Eof:return
case d.WhiteSpace:if(41===r(P=b(e,P))||P>=e.length){P<e.length&&P++
return}P=w(e,P)
R=o.BadUrl
return
case 34:case 39:case 40:case d.NonPrintable:P=w(e,P)
R=o.BadUrl
return
case 92:if(u(t,r(P+1))){P=y(e,P)-1
break}P=w(e,P)
R=o.BadUrl
return}}}()}else if(40!==r(P))R=o.Ident
else{R=o.Function
P++}}function m(t){t||(t=r(P++))
R=o.String
for(;P<e.length;P++){var n=e.charCodeAt(P)
switch(d(n)){case t:P++
return
case d.Eof:return
case d.WhiteSpace:if(l(n)){P+=v(e,P,n)
R=o.BadString
return}break
case 92:if(P===e.length-1)break
var a=r(P+1)
l(a)?P+=v(e,P+1,a):u(n,a)&&(P=y(e,P)-1)}}}t||(t=new n)
var S=(e=String(e||"")).length
var A=a(t.offsetAndType,S+1)
var E=a(t.balance,S+1)
var C=0
var T=p(r(0))
var P=T
var L=0
var O=0
var _=0
for(;P<S;){var N=e.charCodeAt(P)
var R=0
E[C]=S
switch(d(N)){case d.WhiteSpace:R=o.WhiteSpace
P=b(e,P+1)
break
case 34:m()
break
case 35:if(c(r(P+1))||u(r(P+1),r(P+2))){R=o.Hash
P=x(e,P+1)}else{R=o.Delim
P++}break
case 39:m()
break
case 40:R=o.LeftParenthesis
P++
break
case 41:R=o.RightParenthesis
P++
break
case 43:if(f(N,r(P+1),r(P+2)))i()
else{R=o.Delim
P++}break
case 44:R=o.Comma
P++
break
case 45:if(f(N,r(P+1),r(P+2)))i()
else if(45===r(P+1)&&62===r(P+2)){R=o.CDC
P+=3}else if(h(N,r(P+1),r(P+2)))s()
else{R=o.Delim
P++}break
case 46:if(f(N,r(P+1),r(P+2)))i()
else{R=o.Delim
P++}break
case 47:if(42===r(P+1)){R=o.Comment
1===(P=e.indexOf("*/",P+2)+2)&&(P=e.length)}else{R=o.Delim
P++}break
case 58:R=o.Colon
P++
break
case 59:R=o.Semicolon
P++
break
case 60:if(33===r(P+1)&&45===r(P+2)&&45===r(P+3)){R=o.CDO
P+=4}else{R=o.Delim
P++}break
case 64:if(h(r(P+1),r(P+2),r(P+3))){R=o.AtKeyword
P=x(e,P+1)}else{R=o.Delim
P++}break
case 91:R=o.LeftSquareBracket
P++
break
case 92:if(u(N,r(P+1)))s()
else{R=o.Delim
P++}break
case 93:R=o.RightSquareBracket
P++
break
case 123:R=o.LeftCurlyBracket
P++
break
case 125:R=o.RightCurlyBracket
P++
break
case d.Digit:i()
break
case d.NameStart:s()
break
case d.Eof:break
default:R=o.Delim
P++}switch(R){case L:L=(O=E[_=16777215&O])>>24
E[C]=_
E[_++]=C
for(;_<C;_++)E[_]===S&&(E[_]=C)
break
case o.LeftParenthesis:case o.Function:E[C]=O
O=(L=o.RightParenthesis)<<24|C
break
case o.LeftSquareBracket:E[C]=O
O=(L=o.RightSquareBracket)<<24|C
break
case o.LeftCurlyBracket:E[C]=O
O=(L=o.RightCurlyBracket)<<24|C}A[C++]=R<<24|P}A[C]=o.EOF<<24|P
E[C]=S
E[S]=S
for(;0!==O;){O=E[_=16777215&O]
E[_]=S}t.source=e
t.firstCharOffset=T
t.offsetAndType=A
t.tokenCount=C
t.balance=E
t.reset()
t.next()
return t}Object.keys(i).forEach((function(e){S[e]=i[e]}))
Object.keys(s).forEach((function(e){S[e]=s[e]}))
Object.keys(m).forEach((function(e){S[e]=m[e]}))
e.exports=S},function(e,t,r){e.exports=r(100)},function(e,t,r){"use strict";(function(e){r.d(t,"b",()=>n)
r.d(t,"a",()=>a)
r.d(t,"c",()=>i)
const n=function(t,r){const n="data:image/svg+xml"
r&&"base64"!==r?"enc"===r?t=n+","+encodeURIComponent(t):"unenc"===r&&(t=n+","+t):t=n+";base64,"+e.from(t).toString("base64")
return t}
const a=function(e,t,r){let n=""
let a
let o
e.forEach((function(e,s){a=" "
0===s&&(a="")
if(t.noSpaceAfterFlags&&("A"===r||"a"===r)){const e=s%7
4!==e&&5!==e||(a="")}t.leadingZero&&(e=i(e))
t.negativeExtraSpace&&""!==a&&(e<0||46===String(e).charCodeAt(0)&&o%1!=0)&&(a="")
o=e
n+=a+e}))
return n}
const i=function(e){let t=e.toString()
e>0&&e<1&&48===t.charCodeAt(0)?t=t.slice(1):e>-1&&e<0&&48===t.charCodeAt(1)&&(t=t.charAt(0)+t.slice(2))
return t}}).call(this,r(11).Buffer)},function(e,t,r){"use strict"
var n=r(13)
var a=Object.keys||function(e){var t=[]
for(var r in e)t.push(r)
return t}
e.exports=f
var i=Object.create(r(8))
i.inherits=r(6)
var o=r(36)
var s=r(23)
i.inherits(f,o)
var l=a(s.prototype)
for(var c=0;c<l.length;c++){var u=l[c]
f.prototype[u]||(f.prototype[u]=s.prototype[u])}function f(e){if(!(this instanceof f))return new f(e)
o.call(this,e)
s.call(this,e)
e&&!1===e.readable&&(this.readable=!1)
e&&!1===e.writable&&(this.writable=!1)
this.allowHalfOpen=!0
e&&!1===e.allowHalfOpen&&(this.allowHalfOpen=!1)
this.once("end",h)}Object.defineProperty(f.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}})
function h(){this.allowHalfOpen||this._writableState.ended||n.nextTick(d,this)}function d(e){e.end()}Object.defineProperty(f.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(e){if(void 0!==this._readableState&&void 0!==this._writableState){this._readableState.destroyed=e
this._writableState.destroyed=e}}})
f.prototype._destroy=function(e,t){this.push(null)
this.end()
n.nextTick(t,e)}},function(e,t,r){var n=r(0).TYPE
var a=n.WhiteSpace
var i=n.Semicolon
var o=n.LeftCurlyBracket
var s=n.Delim
function l(){return this.scanner.tokenIndex>0&&this.scanner.lookupType(-1)===a?this.scanner.tokenIndex>1?this.scanner.getTokenStart(this.scanner.tokenIndex-1):this.scanner.firstCharOffset:this.scanner.tokenStart}function c(){return 0}e.exports={name:"Raw",structure:{value:String},parse:function(e,t,r){var n=this.scanner.getTokenStart(e)
var a
this.scanner.skip(this.scanner.getRawLength(e,t||c))
a=r&&this.scanner.tokenStart>n?l.call(this):this.scanner.tokenStart
return{type:"Raw",loc:this.getLocation(n,a),value:this.scanner.source.substring(n,a)}},generate:function(e){this.chunk(e.value)},mode:{default:c,leftCurlyBracket:function(e){return e===o?1:0},leftCurlyBracketOrSemicolon:function(e){return e===o||e===i?1:0},exclamationMarkOrSemicolon:function(e,t,r){return e===s&&33===t.charCodeAt(r)||e===i?1:0},semicolonIncluded:function(e){return e===i?2:0}}}},function(e,t){var r
r=function(){return this}()
try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){"function"==typeof Object.create?e.exports=function(e,t){if(t){e.super_=t
e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}}:e.exports=function(e,t){if(t){e.super_=t
var r=function(){}
r.prototype=t.prototype
e.prototype=new r
e.prototype.constructor=e}}},function(e,t){function r(e){return{prev:null,next:null,data:e}}function n(e,t,r){var n
if(null!==i){n=i
i=i.cursor
n.prev=t
n.next=r
n.cursor=e.cursor}else n={prev:t,next:r,cursor:e.cursor}
e.cursor=n
return n}function a(e){var t=e.cursor
e.cursor=t.cursor
t.prev=null
t.next=null
t.cursor=i
i=t}var i=null
var o=function(){this.cursor=null
this.head=null
this.tail=null}
o.createItem=r
o.prototype.createItem=r
o.prototype.updateCursors=function(e,t,r,n){var a=this.cursor
for(;null!==a;){a.prev===e&&(a.prev=t)
a.next===r&&(a.next=n)
a=a.cursor}}
o.prototype.getSize=function(){var e=0
var t=this.head
for(;t;){e++
t=t.next}return e}
o.prototype.fromArray=function(e){var t=null
this.head=null
for(var n=0;n<e.length;n++){var a=r(e[n])
null!==t?t.next=a:this.head=a
a.prev=t
t=a}this.tail=t
return this}
o.prototype.toArray=function(){var e=this.head
var t=[]
for(;e;){t.push(e.data)
e=e.next}return t}
o.prototype.toJSON=o.prototype.toArray
o.prototype.isEmpty=function(){return null===this.head}
o.prototype.first=function(){return this.head&&this.head.data}
o.prototype.last=function(){return this.tail&&this.tail.data}
o.prototype.each=function(e,t){var r
void 0===t&&(t=this)
var i=n(this,null,this.head)
for(;null!==i.next;){r=i.next
i.next=r.next
e.call(t,r.data,r,this)}a(this)}
o.prototype.forEach=o.prototype.each
o.prototype.eachRight=function(e,t){var r
void 0===t&&(t=this)
var i=n(this,this.tail,null)
for(;null!==i.prev;){r=i.prev
i.prev=r.prev
e.call(t,r.data,r,this)}a(this)}
o.prototype.forEachRight=o.prototype.eachRight
o.prototype.nextUntil=function(e,t,r){if(null!==e){var i
void 0===r&&(r=this)
var o=n(this,null,e)
for(;null!==o.next;){i=o.next
o.next=i.next
if(t.call(r,i.data,i,this))break}a(this)}}
o.prototype.prevUntil=function(e,t,r){if(null!==e){var i
void 0===r&&(r=this)
var o=n(this,e,null)
for(;null!==o.prev;){i=o.prev
o.prev=i.prev
if(t.call(r,i.data,i,this))break}a(this)}}
o.prototype.some=function(e,t){var r=this.head
void 0===t&&(t=this)
for(;null!==r;){if(e.call(t,r.data,r,this))return!0
r=r.next}return!1}
o.prototype.map=function(e,t){var r=new o
var n=this.head
void 0===t&&(t=this)
for(;null!==n;){r.appendData(e.call(t,n.data,n,this))
n=n.next}return r}
o.prototype.filter=function(e,t){var r=new o
var n=this.head
void 0===t&&(t=this)
for(;null!==n;){e.call(t,n.data,n,this)&&r.appendData(n.data)
n=n.next}return r}
o.prototype.clear=function(){this.head=null
this.tail=null}
o.prototype.copy=function(){var e=new o
var t=this.head
for(;null!==t;){e.insert(r(t.data))
t=t.next}return e}
o.prototype.prepend=function(e){this.updateCursors(null,e,this.head,e)
if(null!==this.head){this.head.prev=e
e.next=this.head}else this.tail=e
this.head=e
return this}
o.prototype.prependData=function(e){return this.prepend(r(e))}
o.prototype.append=function(e){return this.insert(e)}
o.prototype.appendData=function(e){return this.insert(r(e))}
o.prototype.insert=function(e,t){if(null!=t){this.updateCursors(t.prev,e,t,e)
if(null===t.prev){if(this.head!==t)throw new Error("before doesn't belong to list")
this.head=e
t.prev=e
e.next=t
this.updateCursors(null,e)}else{t.prev.next=e
e.prev=t.prev
t.prev=e
e.next=t}}else{this.updateCursors(this.tail,e,null,e)
if(null!==this.tail){this.tail.next=e
e.prev=this.tail}else this.head=e
this.tail=e}return this}
o.prototype.insertData=function(e,t){return this.insert(r(e),t)}
o.prototype.remove=function(e){this.updateCursors(e,e.prev,e,e.next)
if(null!==e.prev)e.prev.next=e.next
else{if(this.head!==e)throw new Error("item doesn't belong to list")
this.head=e.next}if(null!==e.next)e.next.prev=e.prev
else{if(this.tail!==e)throw new Error("item doesn't belong to list")
this.tail=e.prev}e.prev=null
e.next=null
return e}
o.prototype.push=function(e){this.insert(r(e))}
o.prototype.pop=function(){if(null!==this.tail)return this.remove(this.tail)}
o.prototype.unshift=function(e){this.prepend(r(e))}
o.prototype.shift=function(){if(null!==this.head)return this.remove(this.head)}
o.prototype.prependList=function(e){return this.insertList(e,this.head)}
o.prototype.appendList=function(e){return this.insertList(e)}
o.prototype.insertList=function(e,t){if(null===e.head)return this
if(null!=t){this.updateCursors(t.prev,e.tail,t,e.head)
if(null!==t.prev){t.prev.next=e.head
e.head.prev=t.prev}else this.head=e.head
t.prev=e.tail
e.tail.next=t}else{this.updateCursors(this.tail,e.tail,null,e.head)
if(null!==this.tail){this.tail.next=e.head
e.head.prev=this.tail}else this.head=e.head
this.tail=e.tail}e.head=null
e.tail=null
return this}
o.prototype.replace=function(e,t){"head"in t?this.insertList(t,e):this.insert(t,e)
this.remove(e)}
e.exports=o},function(e,t,r){(function(e){t.isArray=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===r(e)}
t.isBoolean=function(e){return"boolean"==typeof e}
t.isNull=function(e){return null===e}
t.isNullOrUndefined=function(e){return null==e}
t.isNumber=function(e){return"number"==typeof e}
t.isString=function(e){return"string"==typeof e}
t.isSymbol=function(e){return"symbol"==typeof e}
t.isUndefined=function(e){return void 0===e}
t.isRegExp=function(e){return"[object RegExp]"===r(e)}
t.isObject=function(e){return"object"==typeof e&&null!==e}
t.isDate=function(e){return"[object Date]"===r(e)}
t.isError=function(e){return"[object Error]"===r(e)||e instanceof Error}
t.isFunction=function(e){return"function"==typeof e}
t.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}
t.isBuffer=e.isBuffer
function r(e){return Object.prototype.toString.call(e)}}).call(this,r(11).Buffer)},function(e,t){e.exports={trueFunc:function(){return!0},falseFunc:function(){return!1}}},function(e,t,r){var n=r(49)
var a=n.isDigit
var i=n.isHexDigit
var o=n.isUppercaseLetter
var s=n.isName
var l=n.isWhiteSpace
var c=n.isValidEscape
function u(e,t){return t<e.length?e.charCodeAt(t):0}function f(e,t,r){return 13===r&&10===u(e,t+1)?2:1}function h(e,t,r){var n=e.charCodeAt(t)
o(n)&&(n|=32)
return n===r}function d(e,t){for(;t<e.length&&a(e.charCodeAt(t));t++);return t}function p(e,t){if(i(u(e,(t+=2)-1))){for(var r=Math.min(e.length,t+5);t<r&&i(u(e,t));t++);var n=u(e,t)
l(n)&&(t+=f(e,t,n))}return t}e.exports={consumeEscaped:p,consumeName:function(e,t){for(;t<e.length;t++){var r=e.charCodeAt(t)
if(!s(r)){if(!c(r,u(e,t+1)))break
t=p(e,t)-1}}return t},consumeNumber:function(e,t){var r=e.charCodeAt(t)
43!==r&&45!==r||(r=e.charCodeAt(t+=1))
if(a(r)){t=d(e,t+1)
r=e.charCodeAt(t)}if(46===r&&a(e.charCodeAt(t+1))){r=e.charCodeAt(t+=2)
t=d(e,t)}if(h(e,t,101)){var n=0
if(45===(r=e.charCodeAt(t+1))||43===r){n=1
r=e.charCodeAt(t+2)}a(r)&&(t=d(e,t+1+n+1))}return t},consumeBadUrlRemnants:function(e,t){for(;t<e.length;t++){var r=e.charCodeAt(t)
if(41===r){t++
break}c(r,u(e,t+1))&&(t=p(e,t))}return t},cmpChar:h,cmpStr:function(e,t,r,n){if(r-t!==n.length)return!1
if(t<0||r>e.length)return!1
for(var a=t;a<r;a++){var i=e.charCodeAt(a)
var s=n.charCodeAt(a-t)
o(i)&&(i|=32)
if(i!==s)return!1}return!0},getNewlineLength:f,findWhiteSpaceStart:function(e,t){for(;t>=0&&l(e.charCodeAt(t));t--);return t+1},findWhiteSpaceEnd:function(e,t){for(;t<e.length&&l(e.charCodeAt(t));t++);return t}}},function(e,t,r){"use strict";(function(e){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var n=r(64)
var a=r(65)
var i=r(35)
t.Buffer=l
t.SlowBuffer=function(e){+e!=e&&(e=0)
return l.alloc(+e)}
t.INSPECT_MAX_BYTES=50
l.TYPED_ARRAY_SUPPORT=void 0!==e.TYPED_ARRAY_SUPPORT?e.TYPED_ARRAY_SUPPORT:function(){try{var e=new Uint8Array(1)
e.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}}
return 42===e.foo()&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(e){return!1}}()
t.kMaxLength=o()
function o(){return l.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(e,t){if(o()<t)throw new RangeError("Invalid typed array length")
if(l.TYPED_ARRAY_SUPPORT)(e=new Uint8Array(t)).__proto__=l.prototype
else{null===e&&(e=new l(t))
e.length=t}return e}function l(e,t,r){if(!(l.TYPED_ARRAY_SUPPORT||this instanceof l))return new l(e,t,r)
if("number"==typeof e){if("string"==typeof t)throw new Error("If encoding is specified then the first argument must be a string")
return f(this,e)}return c(this,e,t,r)}l.poolSize=8192
l._augment=function(e){e.__proto__=l.prototype
return e}
function c(e,t,r,n){if("number"==typeof t)throw new TypeError('"value" argument must not be a number')
return"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?function(e,t,r,n){t.byteLength
if(r<0||t.byteLength<r)throw new RangeError("'offset' is out of bounds")
if(t.byteLength<r+(n||0))throw new RangeError("'length' is out of bounds")
t=void 0===r&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,r):new Uint8Array(t,r,n)
l.TYPED_ARRAY_SUPPORT?(e=t).__proto__=l.prototype:e=h(e,t)
return e}(e,t,r,n):"string"==typeof t?function(e,t,r){"string"==typeof r&&""!==r||(r="utf8")
if(!l.isEncoding(r))throw new TypeError('"encoding" must be a valid string encoding')
var n=0|p(t,r)
var a=(e=s(e,n)).write(t,r)
a!==n&&(e=e.slice(0,a))
return e}(e,t,r):function(e,t){if(l.isBuffer(t)){var r=0|d(t.length)
if(0===(e=s(e,r)).length)return e
t.copy(e,0,0,r)
return e}if(t){if("undefined"!=typeof ArrayBuffer&&t.buffer instanceof ArrayBuffer||"length"in t)return"number"!=typeof t.length||(n=t.length)!=n?s(e,0):h(e,t)
if("Buffer"===t.type&&i(t.data))return h(e,t.data)}var n
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(e,t)}l.from=function(e,t,r){return c(null,e,t,r)}
if(l.TYPED_ARRAY_SUPPORT){l.prototype.__proto__=Uint8Array.prototype
l.__proto__=Uint8Array
"undefined"!=typeof Symbol&&Symbol.species&&l[Symbol.species]===l&&Object.defineProperty(l,Symbol.species,{value:null,configurable:!0})}function u(e){if("number"!=typeof e)throw new TypeError('"size" argument must be a number')
if(e<0)throw new RangeError('"size" argument must not be negative')}l.alloc=function(e,t,r){return function(e,t,r,n){u(t)
return t<=0?s(e,t):void 0!==r?"string"==typeof n?s(e,t).fill(r,n):s(e,t).fill(r):s(e,t)}(null,e,t,r)}
function f(e,t){u(t)
e=s(e,t<0?0:0|d(t))
if(!l.TYPED_ARRAY_SUPPORT)for(var r=0;r<t;++r)e[r]=0
return e}l.allocUnsafe=function(e){return f(null,e)}
l.allocUnsafeSlow=function(e){return f(null,e)}
function h(e,t){var r=t.length<0?0:0|d(t.length)
e=s(e,r)
for(var n=0;n<r;n+=1)e[n]=255&t[n]
return e}function d(e){if(e>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes")
return 0|e}l.isBuffer=function(e){return!(null==e||!e._isBuffer)}
l.compare=function(e,t){if(!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError("Arguments must be Buffers")
if(e===t)return 0
var r=e.length
var n=t.length
for(var a=0,i=Math.min(r,n);a<i;++a)if(e[a]!==t[a]){r=e[a]
n=t[a]
break}return r<n?-1:n<r?1:0}
l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}}
l.concat=function(e,t){if(!i(e))throw new TypeError('"list" argument must be an Array of Buffers')
if(0===e.length)return l.alloc(0)
var r
if(void 0===t){t=0
for(r=0;r<e.length;++r)t+=e[r].length}var n=l.allocUnsafe(t)
var a=0
for(r=0;r<e.length;++r){var o=e[r]
if(!l.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers')
o.copy(n,a)
a+=o.length}return n}
function p(e,t){if(l.isBuffer(e))return e.length
if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(e)||e instanceof ArrayBuffer))return e.byteLength
"string"!=typeof e&&(e=""+e)
var r=e.length
if(0===r)return 0
var n=!1
for(;;)switch(t){case"ascii":case"latin1":case"binary":return r
case"utf8":case"utf-8":case void 0:return z(e).length
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r
case"hex":return r>>>1
case"base64":return j(e).length
default:if(n)return z(e).length
t=(""+t).toLowerCase()
n=!0}}l.byteLength=p
function m(e,t,r){var n=!1;(void 0===t||t<0)&&(t=0)
if(t>this.length)return"";(void 0===r||r>this.length)&&(r=this.length)
if(r<=0)return""
if((r>>>=0)<=(t>>>=0))return""
e||(e="utf8")
for(;;)switch(e){case"hex":return L(this,t,r)
case"utf8":case"utf-8":return C(this,t,r)
case"ascii":return T(this,t,r)
case"latin1":case"binary":return P(this,t,r)
case"base64":return E(this,t,r)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,t,r)
default:if(n)throw new TypeError("Unknown encoding: "+e)
e=(e+"").toLowerCase()
n=!0}}l.prototype._isBuffer=!0
function g(e,t,r){var n=e[t]
e[t]=e[r]
e[r]=n}l.prototype.swap16=function(){var e=this.length
if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits")
for(var t=0;t<e;t+=2)g(this,t,t+1)
return this}
l.prototype.swap32=function(){var e=this.length
if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits")
for(var t=0;t<e;t+=4){g(this,t,t+3)
g(this,t+1,t+2)}return this}
l.prototype.swap64=function(){var e=this.length
if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits")
for(var t=0;t<e;t+=8){g(this,t,t+7)
g(this,t+1,t+6)
g(this,t+2,t+5)
g(this,t+3,t+4)}return this}
l.prototype.toString=function(){var e=0|this.length
return 0===e?"":0===arguments.length?C(this,0,e):m.apply(this,arguments)}
l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer")
return this===e||0===l.compare(this,e)}
l.prototype.inspect=function(){var e=""
var r=t.INSPECT_MAX_BYTES
if(this.length>0){e=this.toString("hex",0,r).match(/.{2}/g).join(" ")
this.length>r&&(e+=" ... ")}return"<Buffer "+e+">"}
l.prototype.compare=function(e,t,r,n,a){if(!l.isBuffer(e))throw new TypeError("Argument must be a Buffer")
void 0===t&&(t=0)
void 0===r&&(r=e?e.length:0)
void 0===n&&(n=0)
void 0===a&&(a=this.length)
if(t<0||r>e.length||n<0||a>this.length)throw new RangeError("out of range index")
if(n>=a&&t>=r)return 0
if(n>=a)return-1
if(t>=r)return 1
if(this===e)return 0
var i=(a>>>=0)-(n>>>=0)
var o=(r>>>=0)-(t>>>=0)
var s=Math.min(i,o)
var c=this.slice(n,a)
var u=e.slice(t,r)
for(var f=0;f<s;++f)if(c[f]!==u[f]){i=c[f]
o=u[f]
break}return i<o?-1:o<i?1:0}
function v(e,t,r,n,a){if(0===e.length)return-1
if("string"==typeof r){n=r
r=0}else r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648)
r=+r
isNaN(r)&&(r=a?0:e.length-1)
r<0&&(r=e.length+r)
if(r>=e.length){if(a)return-1
r=e.length-1}else if(r<0){if(!a)return-1
r=0}"string"==typeof t&&(t=l.from(t,n))
if(l.isBuffer(t))return 0===t.length?-1:b(e,t,r,n,a)
if("number"==typeof t){t&=255
return l.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?a?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):b(e,[t],r,n,a)}throw new TypeError("val must be string, number or Buffer")}function b(e,t,r,n,a){var i=1
var o=e.length
var s=t.length
if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1
i=2
o/=2
s/=2
r/=2}function l(e,t){return 1===i?e[t]:e.readUInt16BE(t*i)}var c
if(a){var u=-1
for(c=r;c<o;c++)if(l(e,c)===l(t,-1===u?0:c-u)){-1===u&&(u=c)
if(c-u+1===s)return u*i}else{-1!==u&&(c-=c-u)
u=-1}}else{r+s>o&&(r=o-s)
for(c=r;c>=0;c--){var f=!0
for(var h=0;h<s;h++)if(l(e,c+h)!==l(t,h)){f=!1
break}if(f)return c}}return-1}l.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)}
l.prototype.indexOf=function(e,t,r){return v(this,e,t,r,!0)}
l.prototype.lastIndexOf=function(e,t,r){return v(this,e,t,r,!1)}
function y(e,t,r,n){r=Number(r)||0
var a=e.length-r
n?(n=Number(n))>a&&(n=a):n=a
var i=t.length
if(i%2!=0)throw new TypeError("Invalid hex string")
n>i/2&&(n=i/2)
for(var o=0;o<n;++o){var s=parseInt(t.substr(2*o,2),16)
if(isNaN(s))return o
e[r+o]=s}return o}function x(e,t,r,n){return U(z(t,e.length-r),e,r,n)}function k(e,t,r,n){return U(function(e){var t=[]
for(var r=0;r<e.length;++r)t.push(255&e.charCodeAt(r))
return t}(t),e,r,n)}function w(e,t,r,n){return k(e,t,r,n)}function S(e,t,r,n){return U(j(t),e,r,n)}function A(e,t,r,n){return U(function(e,t){var r,n,a
var i=[]
for(var o=0;o<e.length&&!((t-=2)<0);++o){n=(r=e.charCodeAt(o))>>8
a=r%256
i.push(a)
i.push(n)}return i}(t,e.length-r),e,r,n)}l.prototype.write=function(e,t,r,n){if(void 0===t){n="utf8"
r=this.length
t=0}else if(void 0===r&&"string"==typeof t){n=t
r=this.length
t=0}else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")
t|=0
if(isFinite(r)){r|=0
void 0===n&&(n="utf8")}else{n=r
r=void 0}}var a=this.length-t;(void 0===r||r>a)&&(r=a)
if(e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds")
n||(n="utf8")
var i=!1
for(;;)switch(n){case"hex":return y(this,e,t,r)
case"utf8":case"utf-8":return x(this,e,t,r)
case"ascii":return k(this,e,t,r)
case"latin1":case"binary":return w(this,e,t,r)
case"base64":return S(this,e,t,r)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A(this,e,t,r)
default:if(i)throw new TypeError("Unknown encoding: "+n)
n=(""+n).toLowerCase()
i=!0}}
l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}}
function E(e,t,r){return 0===t&&r===e.length?n.fromByteArray(e):n.fromByteArray(e.slice(t,r))}function C(e,t,r){r=Math.min(e.length,r)
var n=[]
var a=t
for(;a<r;){var i=e[a]
var o=null
var s=i>239?4:i>223?3:i>191?2:1
if(a+s<=r){var l,c,u,f
switch(s){case 1:i<128&&(o=i)
break
case 2:128==(192&(l=e[a+1]))&&(f=(31&i)<<6|63&l)>127&&(o=f)
break
case 3:l=e[a+1]
c=e[a+2]
128==(192&l)&&128==(192&c)&&(f=(15&i)<<12|(63&l)<<6|63&c)>2047&&(f<55296||f>57343)&&(o=f)
break
case 4:l=e[a+1]
c=e[a+2]
u=e[a+3]
128==(192&l)&&128==(192&c)&&128==(192&u)&&(f=(15&i)<<18|(63&l)<<12|(63&c)<<6|63&u)>65535&&f<1114112&&(o=f)}}if(null===o){o=65533
s=1}else if(o>65535){o-=65536
n.push(o>>>10&1023|55296)
o=56320|1023&o}n.push(o)
a+=s}return function(e){var t=e.length
if(t<=4096)return String.fromCharCode.apply(String,e)
var r=""
var n=0
for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096))
return r}(n)}function T(e,t,r){var n=""
r=Math.min(e.length,r)
for(var a=t;a<r;++a)n+=String.fromCharCode(127&e[a])
return n}function P(e,t,r){var n=""
r=Math.min(e.length,r)
for(var a=t;a<r;++a)n+=String.fromCharCode(e[a])
return n}function L(e,t,r){var n=e.length;(!t||t<0)&&(t=0);(!r||r<0||r>n)&&(r=n)
var a=""
for(var i=t;i<r;++i)a+=(o=e[i])<16?"0"+o.toString(16):o.toString(16)
var o
return a}function O(e,t,r){var n=e.slice(t,r)
var a=""
for(var i=0;i<n.length;i+=2)a+=String.fromCharCode(n[i]+256*n[i+1])
return a}l.prototype.slice=function(e,t){var r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r);(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r)
t<e&&(t=e)
var n
if(l.TYPED_ARRAY_SUPPORT)(n=this.subarray(e,t)).__proto__=l.prototype
else{var a=t-e
n=new l(a,void 0)
for(var i=0;i<a;++i)n[i]=this[i+e]}return n}
function _(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint")
if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}l.prototype.readUIntLE=function(e,t,r){e|=0
t|=0
r||_(e,t,this.length)
var n=this[e]
var a=1
var i=0
for(;++i<t&&(a*=256);)n+=this[e+i]*a
return n}
l.prototype.readUIntBE=function(e,t,r){e|=0
t|=0
r||_(e,t,this.length)
var n=this[e+--t]
var a=1
for(;t>0&&(a*=256);)n+=this[e+--t]*a
return n}
l.prototype.readUInt8=function(e,t){t||_(e,1,this.length)
return this[e]}
l.prototype.readUInt16LE=function(e,t){t||_(e,2,this.length)
return this[e]|this[e+1]<<8}
l.prototype.readUInt16BE=function(e,t){t||_(e,2,this.length)
return this[e]<<8|this[e+1]}
l.prototype.readUInt32LE=function(e,t){t||_(e,4,this.length)
return(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]}
l.prototype.readUInt32BE=function(e,t){t||_(e,4,this.length)
return 16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])}
l.prototype.readIntLE=function(e,t,r){e|=0
t|=0
r||_(e,t,this.length)
var n=this[e]
var a=1
var i=0
for(;++i<t&&(a*=256);)n+=this[e+i]*a
n>=(a*=128)&&(n-=Math.pow(2,8*t))
return n}
l.prototype.readIntBE=function(e,t,r){e|=0
t|=0
r||_(e,t,this.length)
var n=t
var a=1
var i=this[e+--n]
for(;n>0&&(a*=256);)i+=this[e+--n]*a
i>=(a*=128)&&(i-=Math.pow(2,8*t))
return i}
l.prototype.readInt8=function(e,t){t||_(e,1,this.length)
return 128&this[e]?-1*(255-this[e]+1):this[e]}
l.prototype.readInt16LE=function(e,t){t||_(e,2,this.length)
var r=this[e]|this[e+1]<<8
return 32768&r?4294901760|r:r}
l.prototype.readInt16BE=function(e,t){t||_(e,2,this.length)
var r=this[e+1]|this[e]<<8
return 32768&r?4294901760|r:r}
l.prototype.readInt32LE=function(e,t){t||_(e,4,this.length)
return this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24}
l.prototype.readInt32BE=function(e,t){t||_(e,4,this.length)
return this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]}
l.prototype.readFloatLE=function(e,t){t||_(e,4,this.length)
return a.read(this,e,!0,23,4)}
l.prototype.readFloatBE=function(e,t){t||_(e,4,this.length)
return a.read(this,e,!1,23,4)}
l.prototype.readDoubleLE=function(e,t){t||_(e,8,this.length)
return a.read(this,e,!0,52,8)}
l.prototype.readDoubleBE=function(e,t){t||_(e,8,this.length)
return a.read(this,e,!1,52,8)}
function N(e,t,r,n,a,i){if(!l.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance')
if(t>a||t<i)throw new RangeError('"value" argument is out of bounds')
if(r+n>e.length)throw new RangeError("Index out of range")}l.prototype.writeUIntLE=function(e,t,r,n){e=+e
t|=0
r|=0
n||N(this,e,t,r,Math.pow(2,8*r)-1,0)
var a=1
var i=0
this[t]=255&e
for(;++i<r&&(a*=256);)this[t+i]=e/a&255
return t+r}
l.prototype.writeUIntBE=function(e,t,r,n){e=+e
t|=0
r|=0
n||N(this,e,t,r,Math.pow(2,8*r)-1,0)
var a=r-1
var i=1
this[t+a]=255&e
for(;--a>=0&&(i*=256);)this[t+a]=e/i&255
return t+r}
l.prototype.writeUInt8=function(e,t,r){e=+e
t|=0
r||N(this,e,t,1,255,0)
l.TYPED_ARRAY_SUPPORT||(e=Math.floor(e))
this[t]=255&e
return t+1}
function R(e,t,r,n){t<0&&(t=65535+t+1)
for(var a=0,i=Math.min(e.length-r,2);a<i;++a)e[r+a]=(t&255<<8*(n?a:1-a))>>>8*(n?a:1-a)}l.prototype.writeUInt16LE=function(e,t,r){e=+e
t|=0
r||N(this,e,t,2,65535,0)
if(l.TYPED_ARRAY_SUPPORT){this[t]=255&e
this[t+1]=e>>>8}else R(this,e,t,!0)
return t+2}
l.prototype.writeUInt16BE=function(e,t,r){e=+e
t|=0
r||N(this,e,t,2,65535,0)
if(l.TYPED_ARRAY_SUPPORT){this[t]=e>>>8
this[t+1]=255&e}else R(this,e,t,!1)
return t+2}
function D(e,t,r,n){t<0&&(t=4294967295+t+1)
for(var a=0,i=Math.min(e.length-r,4);a<i;++a)e[r+a]=t>>>8*(n?a:3-a)&255}l.prototype.writeUInt32LE=function(e,t,r){e=+e
t|=0
r||N(this,e,t,4,4294967295,0)
if(l.TYPED_ARRAY_SUPPORT){this[t+3]=e>>>24
this[t+2]=e>>>16
this[t+1]=e>>>8
this[t]=255&e}else D(this,e,t,!0)
return t+4}
l.prototype.writeUInt32BE=function(e,t,r){e=+e
t|=0
r||N(this,e,t,4,4294967295,0)
if(l.TYPED_ARRAY_SUPPORT){this[t]=e>>>24
this[t+1]=e>>>16
this[t+2]=e>>>8
this[t+3]=255&e}else D(this,e,t,!1)
return t+4}
l.prototype.writeIntLE=function(e,t,r,n){e=+e
t|=0
if(!n){var a=Math.pow(2,8*r-1)
N(this,e,t,r,a-1,-a)}var i=0
var o=1
var s=0
this[t]=255&e
for(;++i<r&&(o*=256);){e<0&&0===s&&0!==this[t+i-1]&&(s=1)
this[t+i]=(e/o>>0)-s&255}return t+r}
l.prototype.writeIntBE=function(e,t,r,n){e=+e
t|=0
if(!n){var a=Math.pow(2,8*r-1)
N(this,e,t,r,a-1,-a)}var i=r-1
var o=1
var s=0
this[t+i]=255&e
for(;--i>=0&&(o*=256);){e<0&&0===s&&0!==this[t+i+1]&&(s=1)
this[t+i]=(e/o>>0)-s&255}return t+r}
l.prototype.writeInt8=function(e,t,r){e=+e
t|=0
r||N(this,e,t,1,127,-128)
l.TYPED_ARRAY_SUPPORT||(e=Math.floor(e))
e<0&&(e=255+e+1)
this[t]=255&e
return t+1}
l.prototype.writeInt16LE=function(e,t,r){e=+e
t|=0
r||N(this,e,t,2,32767,-32768)
if(l.TYPED_ARRAY_SUPPORT){this[t]=255&e
this[t+1]=e>>>8}else R(this,e,t,!0)
return t+2}
l.prototype.writeInt16BE=function(e,t,r){e=+e
t|=0
r||N(this,e,t,2,32767,-32768)
if(l.TYPED_ARRAY_SUPPORT){this[t]=e>>>8
this[t+1]=255&e}else R(this,e,t,!1)
return t+2}
l.prototype.writeInt32LE=function(e,t,r){e=+e
t|=0
r||N(this,e,t,4,2147483647,-2147483648)
if(l.TYPED_ARRAY_SUPPORT){this[t]=255&e
this[t+1]=e>>>8
this[t+2]=e>>>16
this[t+3]=e>>>24}else D(this,e,t,!0)
return t+4}
l.prototype.writeInt32BE=function(e,t,r){e=+e
t|=0
r||N(this,e,t,4,2147483647,-2147483648)
e<0&&(e=4294967295+e+1)
if(l.TYPED_ARRAY_SUPPORT){this[t]=e>>>24
this[t+1]=e>>>16
this[t+2]=e>>>8
this[t+3]=255&e}else D(this,e,t,!1)
return t+4}
function M(e,t,r,n,a,i){if(r+n>e.length)throw new RangeError("Index out of range")
if(r<0)throw new RangeError("Index out of range")}function I(e,t,r,n,i){i||M(e,0,r,4)
a.write(e,t,r,n,23,4)
return r+4}l.prototype.writeFloatLE=function(e,t,r){return I(this,e,t,!0,r)}
l.prototype.writeFloatBE=function(e,t,r){return I(this,e,t,!1,r)}
function q(e,t,r,n,i){i||M(e,0,r,8)
a.write(e,t,r,n,52,8)
return r+8}l.prototype.writeDoubleLE=function(e,t,r){return q(this,e,t,!0,r)}
l.prototype.writeDoubleBE=function(e,t,r){return q(this,e,t,!1,r)}
l.prototype.copy=function(e,t,r,n){r||(r=0)
n||0===n||(n=this.length)
t>=e.length&&(t=e.length)
t||(t=0)
n>0&&n<r&&(n=r)
if(n===r)return 0
if(0===e.length||0===this.length)return 0
if(t<0)throw new RangeError("targetStart out of bounds")
if(r<0||r>=this.length)throw new RangeError("sourceStart out of bounds")
if(n<0)throw new RangeError("sourceEnd out of bounds")
n>this.length&&(n=this.length)
e.length-t<n-r&&(n=e.length-t+r)
var a=n-r
var i
if(this===e&&r<t&&t<n)for(i=a-1;i>=0;--i)e[i+t]=this[i+r]
else if(a<1e3||!l.TYPED_ARRAY_SUPPORT)for(i=0;i<a;++i)e[i+t]=this[i+r]
else Uint8Array.prototype.set.call(e,this.subarray(r,r+a),t)
return a}
l.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t){n=t
t=0
r=this.length}else if("string"==typeof r){n=r
r=this.length}if(1===e.length){var a=e.charCodeAt(0)
a<256&&(e=a)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string")
if("string"==typeof n&&!l.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof e&&(e&=255)
if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index")
if(r<=t)return this
t>>>=0
r=void 0===r?this.length:r>>>0
e||(e=0)
var i
if("number"==typeof e)for(i=t;i<r;++i)this[i]=e
else{var o=l.isBuffer(e)?e:z(new l(e,n).toString())
var s=o.length
for(i=0;i<r-t;++i)this[i+t]=o[i%s]}return this}
var B=/[^+\/0-9A-Za-z-_]/g
function z(e,t){t=t||1/0
var r
var n=e.length
var a=null
var i=[]
for(var o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!a){if(r>56319){(t-=3)>-1&&i.push(239,191,189)
continue}if(o+1===n){(t-=3)>-1&&i.push(239,191,189)
continue}a=r
continue}if(r<56320){(t-=3)>-1&&i.push(239,191,189)
a=r
continue}r=65536+(a-55296<<10|r-56320)}else a&&(t-=3)>-1&&i.push(239,191,189)
a=null
if(r<128){if((t-=1)<0)break
i.push(r)}else if(r<2048){if((t-=2)<0)break
i.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break
i.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point")
if((t-=4)<0)break
i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return i}function j(e){return n.toByteArray(function(e){if((e=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}(e).replace(B,"")).length<2)return""
for(;e.length%4!=0;)e+="="
return e}(e))}function U(e,t,r,n){for(var a=0;a<n&&!(a+r>=t.length||a>=e.length);++a)t[a+r]=e[a]
return a}}).call(this,r(5))},function(e,t){var r=e.exports={}
var n
var a
function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}()
function s(e){if(n===setTimeout)return setTimeout(e,0)
if((n===i||!n)&&setTimeout){n=setTimeout
return setTimeout(e,0)}try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}var l=[]
var c=!1
var u
var f=-1
function h(){if(c&&u){c=!1
u.length?l=u.concat(l):f=-1
l.length&&d()}}function d(){if(!c){var e=s(h)
c=!0
var t=l.length
for(;t;){u=l
l=[]
for(;++f<t;)u&&u[f].run()
f=-1
t=l.length}u=null
c=!1
!function(e){if(a===clearTimeout)return clearTimeout(e)
if((a===o||!a)&&clearTimeout){a=clearTimeout
return clearTimeout(e)}try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}r.nextTick=function(e){var t=new Array(arguments.length-1)
if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r]
l.push(new p(e,t))
1!==l.length||c||s(d)}
function p(e,t){this.fun=e
this.array=t}p.prototype.run=function(){this.fun.apply(null,this.array)}
r.title="browser"
r.browser=!0
r.env={}
r.argv=[]
r.version=""
r.versions={}
function m(){}r.on=m
r.addListener=m
r.once=m
r.off=m
r.removeListener=m
r.removeAllListeners=m
r.emit=m
r.prependListener=m
r.prependOnceListener=m
r.listeners=function(e){return[]}
r.binding=function(e){throw new Error("process.binding is not supported")}
r.cwd=function(){return"/"}
r.chdir=function(e){throw new Error("process.chdir is not supported")}
r.umask=function(){return 0}},function(e,t,r){"use strict";(function(t){void 0===t||!t.version||0===t.version.indexOf("v0.")||0===t.version.indexOf("v1.")&&0!==t.version.indexOf("v1.8.")?e.exports={nextTick:function(e,r,n,a){if("function"!=typeof e)throw new TypeError('"callback" argument must be a function')
var i=arguments.length
var o,s
switch(i){case 0:case 1:return t.nextTick(e)
case 2:return t.nextTick((function(){e.call(null,r)}))
case 3:return t.nextTick((function(){e.call(null,r,n)}))
case 4:return t.nextTick((function(){e.call(null,r,n,a)}))
default:o=new Array(i-1)
s=0
for(;s<o.length;)o[s++]=arguments[s]
return t.nextTick((function(){e.apply(null,o)}))}}}:e.exports=t}).call(this,r(12))},function(e,t,r){var n=r(11)
var a=n.Buffer
function i(e,t){for(var r in e)t[r]=e[r]}if(a.from&&a.alloc&&a.allocUnsafe&&a.allocUnsafeSlow)e.exports=n
else{i(n,t)
t.Buffer=o}function o(e,t,r){return a(e,t,r)}i(a,o)
o.from=function(e,t,r){if("number"==typeof e)throw new TypeError("Argument must not be a number")
return a(e,t,r)}
o.alloc=function(e,t,r){if("number"!=typeof e)throw new TypeError("Argument must be a number")
var n=a(e)
void 0!==t?"string"==typeof r?n.fill(t,r):n.fill(t):n.fill(0)
return n}
o.allocUnsafe=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number")
return a(e)}
o.allocUnsafeSlow=function(e){if("number"!=typeof e)throw new TypeError("Argument must be a number")
return n.SlowBuffer(e)}},function(e,t,r){var n=r(16)
var a=n.TYPE
var i=n.NAME
var o=r(10).cmpStr
var s=a.EOF
var l=a.WhiteSpace
var c=a.Comment
var u=function(){this.offsetAndType=null
this.balance=null
this.reset()}
u.prototype={reset:function(){this.eof=!1
this.tokenIndex=-1
this.tokenType=0
this.tokenStart=this.firstCharOffset
this.tokenEnd=this.firstCharOffset},lookupType:function(e){return(e+=this.tokenIndex)<this.tokenCount?this.offsetAndType[e]>>24:s},lookupOffset:function(e){return(e+=this.tokenIndex)<this.tokenCount?16777215&this.offsetAndType[e-1]:this.source.length},lookupValue:function(e,t){return(e+=this.tokenIndex)<this.tokenCount&&o(this.source,16777215&this.offsetAndType[e-1],16777215&this.offsetAndType[e],t)},getTokenStart:function(e){return e===this.tokenIndex?this.tokenStart:e>0?e<this.tokenCount?16777215&this.offsetAndType[e-1]:16777215&this.offsetAndType[this.tokenCount]:this.firstCharOffset},getRawLength:function(e,t){var r=e
var n
var a=16777215&this.offsetAndType[Math.max(r-1,0)]
e:for(;r<this.tokenCount&&!((n=this.balance[r])<e);r++)switch(t(this.offsetAndType[r]>>24,this.source,a)){case 1:break e
case 2:r++
break e
default:a=16777215&this.offsetAndType[r]
this.balance[n]===r&&(r=n)}return r-this.tokenIndex},isBalanceEdge:function(e){return this.balance[this.tokenIndex]<e},isDelim:function(e,t){return t?this.lookupType(t)===a.Delim&&this.source.charCodeAt(this.lookupOffset(t))===e:this.tokenType===a.Delim&&this.source.charCodeAt(this.tokenStart)===e},getTokenValue:function(){return this.source.substring(this.tokenStart,this.tokenEnd)},getTokenLength:function(){return this.tokenEnd-this.tokenStart},substrToCursor:function(e){return this.source.substring(e,this.tokenStart)},skipWS:function(){for(var e=this.tokenIndex,t=0;e<this.tokenCount&&this.offsetAndType[e]>>24===l;e++,t++);t>0&&this.skip(t)},skipSC:function(){for(;this.tokenType===l||this.tokenType===c;)this.next()},skip:function(e){var t=this.tokenIndex+e
if(t<this.tokenCount){this.tokenIndex=t
this.tokenStart=16777215&this.offsetAndType[t-1]
t=this.offsetAndType[t]
this.tokenType=t>>24
this.tokenEnd=16777215&t}else{this.tokenIndex=this.tokenCount
this.next()}},next:function(){var e=this.tokenIndex+1
if(e<this.tokenCount){this.tokenIndex=e
this.tokenStart=this.tokenEnd
e=this.offsetAndType[e]
this.tokenType=e>>24
this.tokenEnd=16777215&e}else{this.tokenIndex=this.tokenCount
this.eof=!0
this.tokenType=s
this.tokenStart=this.tokenEnd=this.source.length}},dump:function(){var e=this.firstCharOffset
return Array.prototype.slice.call(this.offsetAndType,0,this.tokenCount).map((function(t,r){var n=e
var a=16777215&t
e=a
return{idx:r,type:i[t>>24],chunk:this.source.substring(n,a),balance:this.balance[r]}}),this)}}
e.exports=u},function(e,t){var r={EOF:0,Ident:1,Function:2,AtKeyword:3,Hash:4,String:5,BadString:6,Url:7,BadUrl:8,Delim:9,Number:10,Percentage:11,Dimension:12,WhiteSpace:13,CDO:14,CDC:15,Colon:16,Semicolon:17,Comma:18,LeftSquareBracket:19,RightSquareBracket:20,LeftParenthesis:21,RightParenthesis:22,LeftCurlyBracket:23,RightCurlyBracket:24,Comment:25}
var n=Object.keys(r).reduce((function(e,t){e[r[t]]=t
return e}),{})
e.exports={TYPE:r,NAME:n}},function(e,t){e.exports={hasNoChildren:function(e){return!e||!e.children||e.children.isEmpty()},isNodeChildrenList:function(e,t){return null!==e&&e.children===t}}},function(e,t){var r=/^(?:\+|(-))?0*(\d*)(?:\.0*|(\.\d*?)0*)?$/
var n=/^([\+\-])?0*(\d*)(?:\.0*|(\.\d*?)0*)?$/
var a={Dimension:!0,HexColor:!0,Identifier:!0,Number:!0,Raw:!0,UnicodeRange:!0}
function i(e,t){var i=t&&null!==t.prev&&a.hasOwnProperty(t.prev.data.type)?n:r
""!==(e=String(e).replace(i,"$1$2$3"))&&"-"!==e||(e="0")
return e}e.exports=function(e,t){e.value=i(e.value,t)}
e.exports.pack=i},function(e,t){e.exports=function(e){var t=0
var r=0
var n=0
e.children.each((function e(a){switch(a.type){case"SelectorList":case"Selector":a.children.each(e)
break
case"IdSelector":t++
break
case"ClassSelector":case"AttributeSelector":r++
break
case"PseudoClassSelector":switch(a.name.toLowerCase()){case"not":a.children.each(e)
break
case"before":case"after":case"first-line":case"first-letter":n++
break
default:r++}break
case"PseudoElementSelector":n++
break
case"TypeSelector":"*"!==a.name.charAt(a.name.length-1)&&n++}}))
return[t,r,n]}},function(e,t,r){"use strict"
e.exports=d
var n=r(78)
var a=r(9).falseFunc
var i=r(92)
function o(e){return function(t,r,a){(r=r||{}).adapter=r.adapter||n
return e(t,r,a)}}var s=o(i)
var l=o(i.compileUnsafe)
function c(e){return function(t,r,a){(a=a||{}).adapter=a.adapter||n
"function"!=typeof t&&(t=l(t,a,r))
t.shouldTestNextSiblings&&(r=function(e,t){Array.isArray(e)||(e=[e])
var r=e.slice(0)
for(var n=0,a=e.length;n<a;n++){var i=u(r[n],t)
r.push.apply(r,i)}return r}(a&&a.context||r,a.adapter))
r=Array.isArray(r)?a.adapter.removeSubsets(r):a.adapter.getChildren(r)
return e(t,r,a)}}function u(e,t){var r=t.getSiblings(e)
if(!Array.isArray(r))return[]
r=r.slice(0)
for(;r.shift()!==e;);return r}var f=c((function(e,t,r){return e!==a&&t&&0!==t.length?r.adapter.findAll(e,t):[]}))
var h=c((function(e,t,r){return e!==a&&t&&0!==t.length?r.adapter.findOne(e,t):null}))
function d(e,t,r){return f(e,t,r)}d.compile=s
d.filters=i.Pseudos.filters
d.pseudos=i.Pseudos.pseudos
d.selectAll=f
d.selectOne=h
d.is=function(e,t,r){(r=r||{}).adapter=r.adapter||n
return("function"==typeof t?t:s(t,r))(e)}
d.parse=s
d.iterate=f
d._compileUnsafe=l
d._compileToken=i.compileToken},function(e,t,r){"use strict"
var n="object"==typeof Reflect?Reflect:null
var a=n&&"function"==typeof n.apply?n.apply:function(e,t,r){return Function.prototype.apply.call(e,t,r)}
var i
i=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)}
var o=Number.isNaN||function(e){return e!=e}
function s(){s.init.call(this)}e.exports=s
s.EventEmitter=s
s.prototype._events=void 0
s.prototype._eventsCount=0
s.prototype._maxListeners=void 0
var l=10
function c(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return l},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".")
l=e}})
s.init=function(){if(void 0===this._events||this._events===Object.getPrototypeOf(this)._events){this._events=Object.create(null)
this._eventsCount=0}this._maxListeners=this._maxListeners||void 0}
s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".")
this._maxListeners=e
return this}
function u(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}s.prototype.getMaxListeners=function(){return u(this)}
s.prototype.emit=function(e){var t=[]
for(var r=1;r<arguments.length;r++)t.push(arguments[r])
var n="error"===e
var i=this._events
if(void 0!==i)n=n&&void 0===i.error
else if(!n)return!1
if(n){var o
t.length>0&&(o=t[0])
if(o instanceof Error)throw o
var s=new Error("Unhandled error."+(o?" ("+o.message+")":""))
s.context=o
throw s}var l=i[e]
if(void 0===l)return!1
if("function"==typeof l)a(l,this,t)
else{var c=l.length
var u=g(l,c)
for(r=0;r<c;++r)a(u[r],this,t)}return!0}
function f(e,t,r,n){var a
var i
var o
c(r)
if(void 0===(i=e._events)){i=e._events=Object.create(null)
e._eventsCount=0}else{if(void 0!==i.newListener){e.emit("newListener",t,r.listener?r.listener:r)
i=e._events}o=i[t]}if(void 0===o){o=i[t]=r;++e._eventsCount}else{"function"==typeof o?o=i[t]=n?[r,o]:[o,r]:n?o.unshift(r):o.push(r)
if((a=u(e))>0&&o.length>a&&!o.warned){o.warned=!0
var s=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit")
s.name="MaxListenersExceededWarning"
s.emitter=e
s.type=t
s.count=o.length
l=s,console&&console.warn&&console.warn(l)}}var l
return e}s.prototype.addListener=function(e,t){return f(this,e,t,!1)}
s.prototype.on=s.prototype.addListener
s.prototype.prependListener=function(e,t){return f(this,e,t,!0)}
function h(){if(!this.fired){this.target.removeListener(this.type,this.wrapFn)
this.fired=!0
return 0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}}function d(e,t,r){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:r}
var a=h.bind(n)
a.listener=r
n.wrapFn=a
return a}s.prototype.once=function(e,t){c(t)
this.on(e,d(this,e,t))
return this}
s.prototype.prependOnceListener=function(e,t){c(t)
this.prependListener(e,d(this,e,t))
return this}
s.prototype.removeListener=function(e,t){var r,n,a,i,o
c(t)
if(void 0===(n=this._events))return this
if(void 0===(r=n[e]))return this
if(r===t||r.listener===t)if(0==--this._eventsCount)this._events=Object.create(null)
else{delete n[e]
n.removeListener&&this.emit("removeListener",e,r.listener||t)}else if("function"!=typeof r){a=-1
for(i=r.length-1;i>=0;i--)if(r[i]===t||r[i].listener===t){o=r[i].listener
a=i
break}if(a<0)return this
0===a?r.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1]
e.pop()}(r,a)
1===r.length&&(n[e]=r[0])
void 0!==n.removeListener&&this.emit("removeListener",e,o||t)}return this}
s.prototype.off=s.prototype.removeListener
s.prototype.removeAllListeners=function(e){var t,r,n
if(void 0===(r=this._events))return this
if(void 0===r.removeListener){if(0===arguments.length){this._events=Object.create(null)
this._eventsCount=0}else void 0!==r[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[e])
return this}if(0===arguments.length){var a=Object.keys(r)
var i
for(n=0;n<a.length;++n)"removeListener"!==(i=a[n])&&this.removeAllListeners(i)
this.removeAllListeners("removeListener")
this._events=Object.create(null)
this._eventsCount=0
return this}if("function"==typeof(t=r[e]))this.removeListener(e,t)
else if(void 0!==t)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n])
return this}
function p(e,t,r){var n=e._events
if(void 0===n)return[]
var a=n[t]
return void 0===a?[]:"function"==typeof a?r?[a.listener||a]:[a]:r?function(e){var t=new Array(e.length)
for(var r=0;r<t.length;++r)t[r]=e[r].listener||e[r]
return t}(a):g(a,a.length)}s.prototype.listeners=function(e){return p(this,e,!0)}
s.prototype.rawListeners=function(e){return p(this,e,!1)}
s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):m.call(e,t)}
s.prototype.listenerCount=m
function m(e){var t=this._events
if(void 0!==t){var r=t[e]
if("function"==typeof r)return 1
if(void 0!==r)return r.length}return 0}s.prototype.eventNames=function(){return this._eventsCount>0?i(this._events):[]}
function g(e,t){var r=new Array(t)
for(var n=0;n<t;++n)r[n]=e[n]
return r}},function(e,t,r){(t=e.exports=r(36)).Stream=t
t.Readable=t
t.Writable=r(23)
t.Duplex=r(3)
t.Transform=r(39)
t.PassThrough=r(73)},function(e,t,r){"use strict";(function(t,n,a){var i=r(13)
e.exports=b
function o(e){var t=this
this.next=null
this.entry=null
this.finish=function(){!function(e,t,r){var n=e.entry
e.entry=null
for(;n;){var a=n.callback
t.pendingcb--
a(void 0)
n=n.next}t.corkedRequestsFree?t.corkedRequestsFree.next=e:t.corkedRequestsFree=e}(t,e)}}var s=!t.browser&&["v0.10","v0.9."].indexOf(t.version.slice(0,5))>-1?n:i.nextTick
var l
b.WritableState=g
var c=Object.create(r(8))
c.inherits=r(6)
var u={deprecate:r(72)}
var f=r(37)
var h=r(14).Buffer
var d=a.Uint8Array||function(){}
var p=r(38)
c.inherits(b,f)
function m(){}function g(e,t){l=l||r(3)
e=e||{}
var n=t instanceof l
this.objectMode=!!e.objectMode
n&&(this.objectMode=this.objectMode||!!e.writableObjectMode)
var a=e.highWaterMark
var c=e.writableHighWaterMark
var u=this.objectMode?16:16384
this.highWaterMark=a||0===a?a:n&&(c||0===c)?c:u
this.highWaterMark=Math.floor(this.highWaterMark)
this.finalCalled=!1
this.needDrain=!1
this.ending=!1
this.ended=!1
this.finished=!1
this.destroyed=!1
var f=!1===e.decodeStrings
this.decodeStrings=!f
this.defaultEncoding=e.defaultEncoding||"utf8"
this.length=0
this.writing=!1
this.corked=0
this.sync=!0
this.bufferProcessing=!1
this.onwrite=function(e){!function(e,t){var r=e._writableState
var n=r.sync
var a=r.writecb
!function(e){e.writing=!1
e.writecb=null
e.length-=e.writelen
e.writelen=0}(r)
if(t)!function(e,t,r,n,a){--t.pendingcb
if(r){i.nextTick(a,n)
i.nextTick(A,e,t)
e._writableState.errorEmitted=!0
e.emit("error",n)}else{a(n)
e._writableState.errorEmitted=!0
e.emit("error",n)
A(e,t)}}(e,r,n,t,a)
else{var o=w(r)
o||r.corked||r.bufferProcessing||!r.bufferedRequest||k(e,r)
n?s(x,e,r,o,a):x(e,r,o,a)}}(t,e)}
this.writecb=null
this.writelen=0
this.bufferedRequest=null
this.lastBufferedRequest=null
this.pendingcb=0
this.prefinished=!1
this.errorEmitted=!1
this.bufferedRequestCount=0
this.corkedRequestsFree=new o(this)}g.prototype.getBuffer=function(){var e=this.bufferedRequest
var t=[]
for(;e;){t.push(e)
e=e.next}return t}
!function(){try{Object.defineProperty(g.prototype,"buffer",{get:u.deprecate((function(){return this.getBuffer()}),"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(e){}}()
var v
if("function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]){v=Function.prototype[Symbol.hasInstance]
Object.defineProperty(b,Symbol.hasInstance,{value:function(e){return!!v.call(this,e)||this===b&&e&&e._writableState instanceof g}})}else v=function(e){return e instanceof this}
function b(e){l=l||r(3)
if(!(v.call(b,this)||this instanceof l))return new b(e)
this._writableState=new g(e,this)
this.writable=!0
if(e){"function"==typeof e.write&&(this._write=e.write)
"function"==typeof e.writev&&(this._writev=e.writev)
"function"==typeof e.destroy&&(this._destroy=e.destroy)
"function"==typeof e.final&&(this._final=e.final)}f.call(this)}b.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))}
b.prototype.write=function(e,t,r){var n=this._writableState
var a=!1
var o=!n.objectMode&&(s=e,h.isBuffer(s)||s instanceof d)
var s
o&&!h.isBuffer(e)&&(e=function(e){return h.from(e)}(e))
if("function"==typeof t){r=t
t=null}o?t="buffer":t||(t=n.defaultEncoding)
"function"!=typeof r&&(r=m)
if(n.ended)!function(e,t){var r=new Error("write after end")
e.emit("error",r)
i.nextTick(t,r)}(this,r)
else if(o||function(e,t,r,n){var a=!0
var o=!1
null===r?o=new TypeError("May not write null values to stream"):"string"==typeof r||void 0===r||t.objectMode||(o=new TypeError("Invalid non-string/buffer chunk"))
if(o){e.emit("error",o)
i.nextTick(n,o)
a=!1}return a}(this,n,e,r)){n.pendingcb++
a=function(e,t,r,n,a,i){if(!r){var o=function(e,t,r){e.objectMode||!1===e.decodeStrings||"string"!=typeof t||(t=h.from(t,r))
return t}(t,n,a)
if(n!==o){r=!0
a="buffer"
n=o}}var s=t.objectMode?1:n.length
t.length+=s
var l=t.length<t.highWaterMark
l||(t.needDrain=!0)
if(t.writing||t.corked){var c=t.lastBufferedRequest
t.lastBufferedRequest={chunk:n,encoding:a,isBuf:r,callback:i,next:null}
c?c.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest
t.bufferedRequestCount+=1}else y(e,t,!1,s,n,a,i)
return l}(this,n,o,e,t,r)}return a}
b.prototype.cork=function(){this._writableState.corked++}
b.prototype.uncork=function(){var e=this._writableState
if(e.corked){e.corked--
e.writing||e.corked||e.finished||e.bufferProcessing||!e.bufferedRequest||k(this,e)}}
b.prototype.setDefaultEncoding=function(e){"string"==typeof e&&(e=e.toLowerCase())
if(!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+e)
this._writableState.defaultEncoding=e
return this}
Object.defineProperty(b.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}})
function y(e,t,r,n,a,i,o){t.writelen=n
t.writecb=o
t.writing=!0
t.sync=!0
r?e._writev(a,t.onwrite):e._write(a,i,t.onwrite)
t.sync=!1}function x(e,t,r,n){r||function(e,t){if(0===t.length&&t.needDrain){t.needDrain=!1
e.emit("drain")}}(e,t)
t.pendingcb--
n()
A(e,t)}function k(e,t){t.bufferProcessing=!0
var r=t.bufferedRequest
if(e._writev&&r&&r.next){var n=t.bufferedRequestCount
var a=new Array(n)
var i=t.corkedRequestsFree
i.entry=r
var s=0
var l=!0
for(;r;){a[s]=r
r.isBuf||(l=!1)
r=r.next
s+=1}a.allBuffers=l
y(e,t,!0,t.length,a,"",i.finish)
t.pendingcb++
t.lastBufferedRequest=null
if(i.next){t.corkedRequestsFree=i.next
i.next=null}else t.corkedRequestsFree=new o(t)
t.bufferedRequestCount=0}else{for(;r;){var c=r.chunk
var u=r.encoding
var f=r.callback
y(e,t,!1,t.objectMode?1:c.length,c,u,f)
r=r.next
t.bufferedRequestCount--
if(t.writing)break}null===r&&(t.lastBufferedRequest=null)}t.bufferedRequest=r
t.bufferProcessing=!1}b.prototype._write=function(e,t,r){r(new Error("_write() is not implemented"))}
b.prototype._writev=null
b.prototype.end=function(e,t,r){var n=this._writableState
if("function"==typeof e){r=e
e=null
t=null}else if("function"==typeof t){r=t
t=null}null!=e&&this.write(e,t)
if(n.corked){n.corked=1
this.uncork()}n.ending||n.finished||function(e,t,r){t.ending=!0
A(e,t)
r&&(t.finished?i.nextTick(r):e.once("finish",r))
t.ended=!0
e.writable=!1}(this,n,r)}
function w(e){return e.ending&&0===e.length&&null===e.bufferedRequest&&!e.finished&&!e.writing}function S(e,t){e._final((function(r){t.pendingcb--
r&&e.emit("error",r)
t.prefinished=!0
e.emit("prefinish")
A(e,t)}))}function A(e,t){var r=w(t)
if(r){!function(e,t){if(!t.prefinished&&!t.finalCalled)if("function"==typeof e._final){t.pendingcb++
t.finalCalled=!0
i.nextTick(S,e,t)}else{t.prefinished=!0
e.emit("prefinish")}}(e,t)
if(0===t.pendingcb){t.finished=!0
e.emit("finish")}}return r}Object.defineProperty(b.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}})
b.prototype.destroy=p.destroy
b.prototype._undestroy=p.undestroy
b.prototype._destroy=function(e,t){this.end()
t(e)}}).call(this,r(12),r(70).setImmediate,r(5))},function(e,t,r){"use strict"
var n=r(14).Buffer
var a=n.isEncoding||function(e){switch((e=""+e)&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0
default:return!1}}
t.StringDecoder=i
function i(e){this.encoding=function(e){var t=function(e){if(!e)return"utf8"
var t
for(;;)switch(e){case"utf8":case"utf-8":return"utf8"
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le"
case"latin1":case"binary":return"latin1"
case"base64":case"ascii":case"hex":return e
default:if(t)return
e=(""+e).toLowerCase()
t=!0}}(e)
if("string"!=typeof t&&(n.isEncoding===a||!a(e)))throw new Error("Unknown encoding: "+e)
return t||e}(e)
var t
switch(this.encoding){case"utf16le":this.text=l
this.end=c
t=4
break
case"utf8":this.fillLast=s
t=4
break
case"base64":this.text=u
this.end=f
t=3
break
default:this.write=h
this.end=d
return}this.lastNeed=0
this.lastTotal=0
this.lastChar=n.allocUnsafe(t)}i.prototype.write=function(e){if(0===e.length)return""
var t
var r
if(this.lastNeed){if(void 0===(t=this.fillLast(e)))return""
r=this.lastNeed
this.lastNeed=0}else r=0
return r<e.length?t?t+this.text(e,r):this.text(e,r):t||""}
i.prototype.end=function(e){var t=e&&e.length?this.write(e):""
return this.lastNeed?t+"�":t}
i.prototype.text=function(e,t){var r=function(e,t,r){var n=t.length-1
if(n<r)return 0
var a=o(t[n])
if(a>=0){a>0&&(e.lastNeed=a-1)
return a}if(--n<r||-2===a)return 0
if((a=o(t[n]))>=0){a>0&&(e.lastNeed=a-2)
return a}if(--n<r||-2===a)return 0
if((a=o(t[n]))>=0){a>0&&(2===a?a=0:e.lastNeed=a-3)
return a}return 0}(this,e,t)
if(!this.lastNeed)return e.toString("utf8",t)
this.lastTotal=r
var n=e.length-(r-this.lastNeed)
e.copy(this.lastChar,0,n)
return e.toString("utf8",t,n)}
i.prototype.fillLast=function(e){if(this.lastNeed<=e.length){e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed)
return this.lastChar.toString(this.encoding,0,this.lastTotal)}e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length)
this.lastNeed-=e.length}
function o(e){return e<=127?0:e>>5==6?2:e>>4==14?3:e>>3==30?4:e>>6==2?-1:-2}function s(e){var t=this.lastTotal-this.lastNeed
var r=function(e,t,r){if(128!=(192&t[0])){e.lastNeed=0
return"�"}if(e.lastNeed>1&&t.length>1){if(128!=(192&t[1])){e.lastNeed=1
return"�"}if(e.lastNeed>2&&t.length>2&&128!=(192&t[2])){e.lastNeed=2
return"�"}}}(this,e)
if(void 0!==r)return r
if(this.lastNeed<=e.length){e.copy(this.lastChar,t,0,this.lastNeed)
return this.lastChar.toString(this.encoding,0,this.lastTotal)}e.copy(this.lastChar,t,0,e.length)
this.lastNeed-=e.length}function l(e,t){if((e.length-t)%2==0){var r=e.toString("utf16le",t)
if(r){var n=r.charCodeAt(r.length-1)
if(n>=55296&&n<=56319){this.lastNeed=2
this.lastTotal=4
this.lastChar[0]=e[e.length-2]
this.lastChar[1]=e[e.length-1]
return r.slice(0,-1)}}return r}this.lastNeed=1
this.lastTotal=2
this.lastChar[0]=e[e.length-1]
return e.toString("utf16le",t,e.length-1)}function c(e){var t=e&&e.length?this.write(e):""
if(this.lastNeed){var r=this.lastTotal-this.lastNeed
return t+this.lastChar.toString("utf16le",0,r)}return t}function u(e,t){var r=(e.length-t)%3
if(0===r)return e.toString("base64",t)
this.lastNeed=3-r
this.lastTotal=3
if(1===r)this.lastChar[0]=e[e.length-1]
else{this.lastChar[0]=e[e.length-2]
this.lastChar[1]=e[e.length-1]}return e.toString("base64",t,e.length-r)}function f(e){var t=e&&e.length?this.write(e):""
return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}function h(e){return e.toString(this.encoding)}function d(e){return e&&e.length?this.write(e):""}},function(e,t){e.exports={Text:"text",Directive:"directive",Comment:"comment",Script:"script",Style:"style",Tag:"tag",CDATA:"cdata",Doctype:"doctype",isTag:function(e){return"tag"===e.type||"script"===e.type||"style"===e.type}}},function(e,t){e.exports=function(e,t){var r=Object.create(SyntaxError.prototype)
var n=new Error
r.name=e
r.message=t
Object.defineProperty(r,"stack",{get:function(){return(n.stack||"").replace(/^(.+\n){1,3}/,e+": "+t+"\n")}})
return r}},function(e,t){function r(e){return e}e.exports=function(e,t){var n=r
var a=!1
var i=!1
if("function"==typeof t)n=t
else if(t){a=Boolean(t.forceBraces)
i=Boolean(t.compact)
"function"==typeof t.decorate&&(n=t.decorate)}return function e(t,r,n,a){var i
switch(t.type){case"Group":i=function(t,r,n,a){var i=" "===t.combinator||a?t.combinator:" "+t.combinator+" "
var o=t.terms.map((function(t){return e(t,r,n,a)})).join(i);(t.explicit||n)&&(o=(a||","===o[0]?"[":"[ ")+o+(a?"]":" ]"))
return o}(t,r,n,a)+(t.disallowEmpty?"!":"")
break
case"Multiplier":return e(t.term,r,n,a)+r(0===(o=t).min&&0===o.max?"*":0===o.min&&1===o.max?"?":1===o.min&&0===o.max?o.comma?"#":"+":1===o.min&&1===o.max?"":(o.comma?"#":"")+(o.min===o.max?"{"+o.min+"}":"{"+o.min+","+(0!==o.max?o.max:"")+"}"),t)
case"Type":i="<"+t.name+(t.opts?r(function(e){switch(e.type){case"Range":return" ["+(null===e.min?"-∞":e.min)+","+(null===e.max?"∞":e.max)+"]"
default:throw new Error("Unknown node type `"+e.type+"`")}}(t.opts),t.opts):"")+">"
break
case"Property":i="<'"+t.name+"'>"
break
case"Keyword":i=t.name
break
case"AtKeyword":i="@"+t.name
break
case"Function":i=t.name+"("
break
case"String":case"Token":i=t.value
break
case"Comma":i=","
break
default:throw new Error("Unknown node type `"+t.type+"`")}var o
return r(i,t)}(e,n,a,i)}},function(e,t){var r=Object.prototype.hasOwnProperty
var n=Object.create(null)
var a=Object.create(null)
function i(e,t){t=t||0
return e.length-t>=2&&45===e.charCodeAt(t)&&45===e.charCodeAt(t+1)}function o(e,t){t=t||0
if(e.length-t>=3&&45===e.charCodeAt(t)&&45!==e.charCodeAt(t+1)){var r=e.indexOf("-",t+2)
if(-1!==r)return e.substring(t,r+1)}return""}e.exports={keyword:function(e){if(r.call(n,e))return n[e]
var t=e.toLowerCase()
if(r.call(n,t))return n[e]=n[t]
var a=i(t,0)
var s=a?"":o(t,0)
return n[e]=Object.freeze({basename:t.substr(s.length),name:t,vendor:s,prefix:s,custom:a})},property:function(e){if(r.call(a,e))return a[e]
var t=e
var n=e[0]
"/"===n?n="/"===e[1]?"//":"/":"_"!==n&&"*"!==n&&"$"!==n&&"#"!==n&&"+"!==n&&"&"!==n&&(n="")
var s=i(t,n.length)
if(!s){t=t.toLowerCase()
if(r.call(a,t))return a[e]=a[t]}var l=s?"":o(t,n.length)
var c=t.substr(0,n.length+l.length)
return a[e]=Object.freeze({basename:t.substr(c.length),name:t.substr(n.length),hack:n,vendor:l,prefix:c,custom:s})},isCustomProperty:i,vendorPrefix:o}},function(e,t,r){var n=r(106)
var a=function(e){var t="function"==typeof Uint32Array?new Uint32Array(128):new Array(128)
for(var r=0;r<128;r++)t[r]=e(String.fromCharCode(r))?1:0
return t}((function(e){return/[a-zA-Z0-9\-]/.test(e)}))
var i={" ":1,"&&":2,"||":3,"|":4}
function o(e){return e.substringToPos(e.findWsEnd(e.pos))}function s(e){var t=e.pos
for(;t<e.str.length;t++){var r=e.str.charCodeAt(t)
if(r>=128||0===a[r])break}e.pos===t&&e.error("Expect a keyword")
return e.substringToPos(t)}function l(e){var t=e.pos
for(;t<e.str.length;t++){var r=e.str.charCodeAt(t)
if(r<48||r>57)break}e.pos===t&&e.error("Expect a number")
return e.substringToPos(t)}function c(e){var t=e.str.indexOf("'",e.pos+1)
if(-1===t){e.pos=e.str.length
e.error("Expect an apostrophe")}return e.substringToPos(t+1)}function u(e){var t
var r=null
e.eat(123)
t=l(e)
if(44===e.charCode()){e.pos++
125!==e.charCode()&&(r=l(e))}else r=t
e.eat(125)
return{min:Number(t),max:r?Number(r):0}}function f(e,t){var r=function(e){var t=null
var r=!1
switch(e.charCode()){case 42:e.pos++
t={min:0,max:0}
break
case 43:e.pos++
t={min:1,max:0}
break
case 63:e.pos++
t={min:0,max:1}
break
case 35:e.pos++
r=!0
t=123===e.charCode()?u(e):{min:1,max:0}
break
case 123:t=u(e)
break
default:return null}return{type:"Multiplier",comma:r,min:t.min,max:t.max,term:null}}(e)
if(null!==r){r.term=t
return r}return t}function h(e){var t=e.peek()
return""===t?null:{type:"Token",value:t}}function d(e,t){function r(e,t){return{type:"Group",terms:e,combinator:t,disallowEmpty:!1,explicit:!1}}t=Object.keys(t).sort((function(e,t){return i[e]-i[t]}))
for(;t.length>0;){var n=t.shift()
for(var a=0,o=0;a<e.length;a++){var s=e[a]
if("Combinator"===s.type)if(s.value===n){-1===o&&(o=a-1)
e.splice(a,1)
a--}else{if(-1!==o&&a-o>1){e.splice(o,a-o,r(e.slice(o,a),n))
a=o+1}o=-1}}-1!==o&&t.length&&e.splice(o,a-o,r(e.slice(o,a),n))}return n}function p(e){var t=[]
var r={}
var n
var a=null
var i=e.pos
for(;n=m(e);)if("Spaces"!==n.type){if("Combinator"===n.type){if(null===a||"Combinator"===a.type){e.pos=i
e.error("Unexpected combinator")}r[n.value]=!0}else if(null!==a&&"Combinator"!==a.type){r[" "]=!0
t.push({type:"Combinator",value:" "})}t.push(n)
a=n
i=e.pos}if(null!==a&&"Combinator"===a.type){e.pos-=i
e.error("Unexpected combinator")}return{type:"Group",terms:t,combinator:d(t,r)||" ",disallowEmpty:!1,explicit:!1}}function m(e){var t=e.charCode()
if(t<128&&1===a[t])return function(e){var t
t=s(e)
if(40===e.charCode()){e.pos++
return{type:"Function",name:t}}return f(e,{type:"Keyword",name:t})}(e)
switch(t){case 93:break
case 91:return f(e,function(e){var t
e.eat(91)
t=p(e)
e.eat(93)
t.explicit=!0
if(33===e.charCode()){e.pos++
t.disallowEmpty=!0}return t}(e))
case 60:return 39===e.nextCharCode()?function(e){var t
e.eat(60)
e.eat(39)
t=s(e)
e.eat(39)
e.eat(62)
return f(e,{type:"Property",name:t})}(e):function(e){var t
var r=null
e.eat(60)
t=s(e)
if(40===e.charCode()&&41===e.nextCharCode()){e.pos+=2
t+="()"}if(91===e.charCodeAt(e.findWsEnd(e.pos))){o(e)
r=function(e){var t=null
var r=null
var n=1
e.eat(91)
if(45===e.charCode()){e.peek()
n=-1}-1==n&&8734===e.charCode()?e.peek():t=n*Number(l(e))
o(e)
e.eat(44)
o(e)
if(8734===e.charCode())e.peek()
else{n=1
if(45===e.charCode()){e.peek()
n=-1}r=n*Number(l(e))}e.eat(93)
return null===t&&null===r?null:{type:"Range",min:t,max:r}}(e)}e.eat(62)
return f(e,{type:"Type",name:t,opts:r})}(e)
case 124:return{type:"Combinator",value:e.substringToPos(124===e.nextCharCode()?e.pos+2:e.pos+1)}
case 38:e.pos++
e.eat(38)
return{type:"Combinator",value:"&&"}
case 44:e.pos++
return{type:"Comma"}
case 39:return f(e,{type:"String",value:c(e)})
case 32:case 9:case 10:case 13:case 12:return{type:"Spaces",value:o(e)}
case 64:if((t=e.nextCharCode())<128&&1===a[t]){e.pos++
return{type:"AtKeyword",name:s(e)}}return h(e)
case 42:case 43:case 63:case 35:case 33:break
case 123:if((t=e.nextCharCode())<48||t>57)return h(e)
break
default:return h(e)}}function g(e){var t=new n(e)
var r=p(t)
t.pos!==e.length&&t.error("Unexpected input")
1===r.terms.length&&"Group"===r.terms[0].type&&(r=r.terms[0])
return r}g("[a&&<b>#|<'c'>*||e() f{2} /,(% g#{1,2} h{2,})]!")
e.exports=g},function(e,t){t.getArg=function(e,t,r){if(t in e)return e[t]
if(3===arguments.length)return r
throw new Error('"'+t+'" is a required argument.')}
var r=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/
var n=/^data:.+\,.+$/
function a(e){var t=e.match(r)
return t?{scheme:t[1],auth:t[2],host:t[3],port:t[4],path:t[5]}:null}t.urlParse=a
function i(e){var t=""
e.scheme&&(t+=e.scheme+":")
t+="//"
e.auth&&(t+=e.auth+"@")
e.host&&(t+=e.host)
e.port&&(t+=":"+e.port)
e.path&&(t+=e.path)
return t}t.urlGenerate=i
function o(e){var r=e
var n=a(e)
if(n){if(!n.path)return e
r=n.path}var o=t.isAbsolute(r)
var s=r.split(/\/+/)
for(var l,c=0,u=s.length-1;u>=0;u--)if("."===(l=s[u]))s.splice(u,1)
else if(".."===l)c++
else if(c>0)if(""===l){s.splice(u+1,c)
c=0}else{s.splice(u,2)
c--}""===(r=s.join("/"))&&(r=o?"/":".")
if(n){n.path=r
return i(n)}return r}t.normalize=o
function s(e,t){""===e&&(e=".")
""===t&&(t=".")
var r=a(t)
var s=a(e)
s&&(e=s.path||"/")
if(r&&!r.scheme){s&&(r.scheme=s.scheme)
return i(r)}if(r||t.match(n))return t
if(s&&!s.host&&!s.path){s.host=t
return i(s)}var l="/"===t.charAt(0)?t:o(e.replace(/\/+$/,"")+"/"+t)
if(s){s.path=l
return i(s)}return l}t.join=s
t.isAbsolute=function(e){return"/"===e.charAt(0)||r.test(e)}
t.relative=function(e,t){""===e&&(e=".")
e=e.replace(/\/$/,"")
var r=0
for(;0!==t.indexOf(e+"/");){var n=e.lastIndexOf("/")
if(n<0)return t
if((e=e.slice(0,n)).match(/^([^\/]+:\/)?\/*$/))return t;++r}return Array(r+1).join("../")+t.substr(e.length+1)}
var l=!("__proto__"in Object.create(null))
function c(e){return e}t.toSetString=l?c:function(e){return u(e)?"$"+e:e}
t.fromSetString=l?c:function(e){return u(e)?e.slice(1):e}
function u(e){if(!e)return!1
var t=e.length
if(t<9)return!1
if(95!==e.charCodeAt(t-1)||95!==e.charCodeAt(t-2)||111!==e.charCodeAt(t-3)||116!==e.charCodeAt(t-4)||111!==e.charCodeAt(t-5)||114!==e.charCodeAt(t-6)||112!==e.charCodeAt(t-7)||95!==e.charCodeAt(t-8)||95!==e.charCodeAt(t-9))return!1
for(var r=t-10;r>=0;r--)if(36!==e.charCodeAt(r))return!1
return!0}t.compareByOriginalPositions=function(e,t,r){var n=f(e.source,t.source)
return 0!==n||0!=(n=e.originalLine-t.originalLine)||0!=(n=e.originalColumn-t.originalColumn)||r||0!=(n=e.generatedColumn-t.generatedColumn)||0!=(n=e.generatedLine-t.generatedLine)?n:f(e.name,t.name)}
t.compareByGeneratedPositionsDeflated=function(e,t,r){var n=e.generatedLine-t.generatedLine
return 0!==n||0!=(n=e.generatedColumn-t.generatedColumn)||r||0!==(n=f(e.source,t.source))||0!=(n=e.originalLine-t.originalLine)||0!=(n=e.originalColumn-t.originalColumn)?n:f(e.name,t.name)}
function f(e,t){return e===t?0:null===e?1:null===t?-1:e>t?1:-1}t.compareByGeneratedPositionsInflated=function(e,t){var r=e.generatedLine-t.generatedLine
return 0!==r||0!=(r=e.generatedColumn-t.generatedColumn)||0!==(r=f(e.source,t.source))||0!=(r=e.originalLine-t.originalLine)||0!=(r=e.originalColumn-t.originalColumn)?r:f(e.name,t.name)}
t.parseSourceMapInput=function(e){return JSON.parse(e.replace(/^\)]}'[^\n]*\n/,""))}
t.computeSourceURL=function(e,t,r){t=t||""
if(e){"/"!==e[e.length-1]&&"/"!==t[0]&&(e+="/")
t=e+t}if(r){var n=a(r)
if(!n)throw new Error("sourceMapURL could not be parsed")
if(n.path){var l=n.path.lastIndexOf("/")
l>=0&&(n.path=n.path.substring(0,l+1))}t=s(i(n),t)}return o(t)}},function(e,t,r){e.exports={AnPlusB:r(129),Atrule:r(130),AtrulePrelude:r(131),AttributeSelector:r(132),Block:r(133),Brackets:r(134),CDC:r(135),CDO:r(136),ClassSelector:r(137),Combinator:r(138),Comment:r(139),Declaration:r(140),DeclarationList:r(141),Dimension:r(142),Function:r(143),HexColor:r(144),Identifier:r(145),IdSelector:r(146),MediaFeature:r(147),MediaQuery:r(148),MediaQueryList:r(149),Nth:r(150),Number:r(151),Operator:r(152),Parentheses:r(153),Percentage:r(154),PseudoClassSelector:r(155),PseudoElementSelector:r(156),Ratio:r(157),Raw:r(4),Rule:r(158),Selector:r(159),SelectorList:r(160),String:r(161),StyleSheet:r(162),TypeSelector:r(163),UnicodeRange:r(164),Url:r(165),Value:r(166),WhiteSpace:r(167)}},function(e,t,r){var n=r(1).lexer
var a=r(18).pack
var i={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgrey:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",grey:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"}
var o={8e5:"maroon",800080:"purple",808e3:"olive",808080:"gray","00ffff":"cyan",f0ffff:"azure",f5f5dc:"beige",ffe4c4:"bisque","000000":"black","0000ff":"blue",a52a2a:"brown",ff7f50:"coral",ffd700:"gold","008000":"green","4b0082":"indigo",fffff0:"ivory",f0e68c:"khaki","00ff00":"lime",faf0e6:"linen","000080":"navy",ffa500:"orange",da70d6:"orchid",cd853f:"peru",ffc0cb:"pink",dda0dd:"plum",f00:"red",ff0000:"red",fa8072:"salmon",a0522d:"sienna",c0c0c0:"silver",fffafa:"snow",d2b48c:"tan","008080":"teal",ff6347:"tomato",ee82ee:"violet",f5deb3:"wheat",ffffff:"white",ffff00:"yellow"}
function s(e,t,r){r<0&&(r+=1)
r>1&&(r-=1)
return r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function l(e,t,r,n){var a
var i
var o
if(0===t)a=i=o=r
else{var l=r<.5?r*(1+t):r+t-r*t
var c=2*r-l
a=s(c,l,e+1/3)
i=s(c,l,e)
o=s(c,l,e-1/3)}return[Math.round(255*a),Math.round(255*i),Math.round(255*o),n]}function c(e){return 1===(e=e.toString(16)).length?"0"+e:e}function u(e,t,r){var n=e.head
var a=[]
var i=!1
for(;null!==n;){var o=n.data
var s=o.type
switch(s){case"Number":case"Percentage":if(i)return
i=!0
a.push({type:s,value:Number(o.value)})
break
case"Operator":if(","===o.value){if(!i)return
i=!1}else if(i||"+"!==o.value)return
break
default:return}n=n.next}if(a.length===t){if(4===a.length){if("Number"!==a[3].type)return
a[3].type="Alpha"}if(r){if(a[0].type!==a[1].type||a[0].type!==a[2].type)return}else{if("Number"!==a[0].type||"Percentage"!==a[1].type||"Percentage"!==a[2].type)return
a[0].type="Angle"}return a.map((function(e){var t=Math.max(0,e.value)
switch(e.type){case"Number":t=Math.min(t,255)
break
case"Percentage":t=Math.min(t,100)/100
if(!r)return t
t*=255
break
case"Angle":return(t%360+360)%360/360
case"Alpha":return Math.min(t,1)}return Math.round(t)}))}}function f(e,t){var r=e.value.toLowerCase()
6===r.length&&r[0]===r[1]&&r[2]===r[3]&&r[4]===r[5]&&(r=r[0]+r[2]+r[4])
o[r]?t.data={type:"Identifier",loc:e.loc,name:o[r]}:e.value=r}e.exports={compressFunction:function(e,t,r){var n=e.name
var i
if("rgba"===n||"hsla"===n){if(!(i=u(e.children,4,"rgba"===n)))return
if("hsla"===n){i=l.apply(null,i)
e.name="rgba"}if(0===i[3]){var o=this.function&&this.function.name
if(0===i[0]&&0===i[1]&&0===i[2]||!/^(?:to|from|color-stop)$|gradient$/i.test(o)){t.data={type:"Identifier",loc:e.loc,name:"transparent"}
return}}if(1!==i[3]){e.children.each((function(e,t,r){"Operator"!==e.type?t.data={type:"Number",loc:e.loc,value:a(i.shift(),null)}:","!==e.value&&r.remove(t)}))
return}n="rgb"}if("hsl"===n){if(!(i=i||u(e.children,3,!1)))return
i=l.apply(null,i)
n="rgb"}if("rgb"===n){if(!(i=i||u(e.children,3,!0)))return
var s=t.next
s&&"WhiteSpace"!==s.data.type&&r.insert(r.createItem({type:"WhiteSpace",value:" "}),s)
t.data={type:"HexColor",loc:e.loc,value:c(i[0])+c(i[1])+c(i[2])}
f(t.data,t)}},compressIdent:function(e,t){if(null!==this.declaration){var r=e.name.toLowerCase()
if(i.hasOwnProperty(r)&&n.matchDeclaration(this.declaration).isType(e,"color")){var a=i[r]
if(a.length+1<=r.length)t.data={type:"HexColor",loc:e.loc,value:a}
else{"grey"===r&&(r="gray")
e.name=r}}}},compressHex:f}},function(e,t){var r=Object.prototype.hasOwnProperty
function n(e,t){var r=e.head
for(;null!==r;){var n=t.head
for(;null!==n;){if(r.data.compareMarker===n.data.compareMarker)return!0
n=n.next}r=r.next}return!1}e.exports={isEqualSelectors:function(e,t){var r=e.head
var n=t.head
for(;null!==r&&null!==n&&r.data.id===n.data.id;){r=r.next
n=n.next}return null===r&&null===n},isEqualDeclarations:function(e,t){var r=e.head
var n=t.head
for(;null!==r&&null!==n&&r.data.id===n.data.id;){r=r.next
n=n.next}return null===r&&null===n},compareDeclarations:function(e,t){var n={eq:[],ne1:[],ne2:[],ne2overrided:[]}
var a=Object.create(null)
var i=Object.create(null)
for(var o=t.head;o;o=o.next)i[o.data.id]=!0
for(o=e.head;o;o=o.next){(s=o.data).fingerprint&&(a[s.fingerprint]=s.important)
if(i[s.id]){i[s.id]=!1
n.eq.push(s)}else n.ne1.push(s)}for(o=t.head;o;o=o.next){var s
if(i[(s=o.data).id]){(!r.call(a,s.fingerprint)||!a[s.fingerprint]&&s.important)&&n.ne2.push(s)
n.ne2overrided.push(s)}}return n},addSelectors:function(e,t){t.each((function(t){var r=t.id
var n=e.head
for(;n;){var a=n.data.id
if(a===r)return
if(a>r)break
n=n.next}e.insert(e.createItem(t),n)}))
return e},hasSimilarSelectors:n,unsafeToSkipNode:function e(t){switch(t.type){case"Rule":return n(t.prelude.children,this)
case"Atrule":if(t.block)return t.block.children.some(e,this)
break
case"Declaration":return!1}return!0}}},function(e,t,r){var n=r(1)
var a=n.parse
var i=r(193)
var o=n.generate
function s(e,t,r,n){t.debug&&console.error("## "+e+" done in %d ms\n",Date.now()-r)
return n}function l(e,t,r){Array.isArray(r)||(r=[r])
r.forEach((function(r){r(e,t)}))}function c(e,t,r){var n=(r=r||{}).filename||"<unknown>"
var c=s("parsing",r,Date.now(),a(t,{context:e,filename:n,positions:Boolean(r.sourceMap)}))
r.beforeCompress&&s("beforeCompress",r,Date.now(),l(c,r,r.beforeCompress))
var u=s("compress",r,Date.now(),i(c,function(e){"function"!=typeof(e=function(e){var t={}
for(var r in e)t[r]=e[r]
return t}(e)).logger&&e.debug&&(e.logger=(t=e.debug,function(e,n){var a=e
n&&(a="["+((Date.now()-r)/1e3).toFixed(3)+"s] "+a)
if(t>1&&n){var i=o(n)
2===t&&i.length>256&&(i=i.substr(0,256)+"...")
a+="\n  "+i+"\n"}console.error(a)
r=Date.now()}))
var t,r
return e}(r)))
r.afterCompress&&s("afterCompress",r,Date.now(),l(u,r,r.afterCompress))
return r.sourceMap?s("generate(sourceMap: true)",r,Date.now(),function(){var e=o(u.ast,{sourceMap:!0})
e.map._file=n
e.map.setSourceContent(n,t)
return e}()):s("generate",r,Date.now(),{css:o(u.ast),map:null})}e.exports={version:r(226).version,minify:function(e,t){return c("stylesheet",e,t)},minifyBlock:function(e,t){return c("declarationList",e,t)},syntax:Object.assign({compress:i},n)}},function(e,t){var r={}.toString
e.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},function(e,t,r){"use strict";(function(t,n){var a=r(13)
e.exports=y
var i=r(35)
var o
y.ReadableState=b
r(21).EventEmitter
var s=function(e,t){return e.listeners(t).length}
var l=r(37)
var c=r(14).Buffer
var u=t.Uint8Array||function(){}
var f=Object.create(r(8))
f.inherits=r(6)
var h=r(67)
var d=void 0
d=h&&h.debuglog?h.debuglog("stream"):function(){}
var p=r(68)
var m=r(38)
var g
f.inherits(y,l)
var v=["error","close","destroy","pause","resume"]
function b(e,t){e=e||{}
var n=t instanceof(o=o||r(3))
this.objectMode=!!e.objectMode
n&&(this.objectMode=this.objectMode||!!e.readableObjectMode)
var a=e.highWaterMark
var i=e.readableHighWaterMark
var s=this.objectMode?16:16384
this.highWaterMark=a||0===a?a:n&&(i||0===i)?i:s
this.highWaterMark=Math.floor(this.highWaterMark)
this.buffer=new p
this.length=0
this.pipes=null
this.pipesCount=0
this.flowing=null
this.ended=!1
this.endEmitted=!1
this.reading=!1
this.sync=!0
this.needReadable=!1
this.emittedReadable=!1
this.readableListening=!1
this.resumeScheduled=!1
this.destroyed=!1
this.defaultEncoding=e.defaultEncoding||"utf8"
this.awaitDrain=0
this.readingMore=!1
this.decoder=null
this.encoding=null
if(e.encoding){g||(g=r(24).StringDecoder)
this.decoder=new g(e.encoding)
this.encoding=e.encoding}}function y(e){o=o||r(3)
if(!(this instanceof y))return new y(e)
this._readableState=new b(e,this)
this.readable=!0
if(e){"function"==typeof e.read&&(this._read=e.read)
"function"==typeof e.destroy&&(this._destroy=e.destroy)}l.call(this)}Object.defineProperty(y.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}})
y.prototype.destroy=m.destroy
y.prototype._undestroy=m.undestroy
y.prototype._destroy=function(e,t){this.push(null)
t(e)}
y.prototype.push=function(e,t){var r=this._readableState
var n
if(r.objectMode)n=!0
else if("string"==typeof e){if((t=t||r.defaultEncoding)!==r.encoding){e=c.from(e,t)
t=""}n=!0}return x(this,e,t,!1,n)}
y.prototype.unshift=function(e){return x(this,e,null,!0,!1)}
function x(e,t,r,n,a){var i=e._readableState
if(null===t){i.reading=!1
!function(e,t){if(!t.ended){if(t.decoder){var r=t.decoder.end()
if(r&&r.length){t.buffer.push(r)
t.length+=t.objectMode?1:r.length}}t.ended=!0
S(e)}}(e,i)}else{var o
a||(o=function(e,t){var r;(n=t,c.isBuffer(n)||n instanceof u)||"string"==typeof t||void 0===t||e.objectMode||(r=new TypeError("Invalid non-string/buffer chunk"))
var n
return r}(i,t))
if(o)e.emit("error",o)
else if(i.objectMode||t&&t.length>0){"string"==typeof t||i.objectMode||Object.getPrototypeOf(t)===c.prototype||(t=function(e){return c.from(e)}(t))
if(n)i.endEmitted?e.emit("error",new Error("stream.unshift() after end event")):k(e,i,t,!0)
else if(i.ended)e.emit("error",new Error("stream.push() after EOF"))
else{i.reading=!1
if(i.decoder&&!r){t=i.decoder.write(t)
i.objectMode||0!==t.length?k(e,i,t,!1):E(e,i)}else k(e,i,t,!1)}}else n||(i.reading=!1)}return function(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||0===e.length)}(i)}function k(e,t,r,n){if(t.flowing&&0===t.length&&!t.sync){e.emit("data",r)
e.read(0)}else{t.length+=t.objectMode?1:r.length
n?t.buffer.unshift(r):t.buffer.push(r)
t.needReadable&&S(e)}E(e,t)}y.prototype.isPaused=function(){return!1===this._readableState.flowing}
y.prototype.setEncoding=function(e){g||(g=r(24).StringDecoder)
this._readableState.decoder=new g(e)
this._readableState.encoding=e
return this}
function w(e,t){if(e<=0||0===t.length&&t.ended)return 0
if(t.objectMode)return 1
if(e!=e)return t.flowing&&t.length?t.buffer.head.data.length:t.length
e>t.highWaterMark&&(t.highWaterMark=function(e){if(e>=8388608)e=8388608
else{e--
e|=e>>>1
e|=e>>>2
e|=e>>>4
e|=e>>>8
e|=e>>>16
e++}return e}(e))
if(e<=t.length)return e
if(!t.ended){t.needReadable=!0
return 0}return t.length}y.prototype.read=function(e){d("read",e)
e=parseInt(e,10)
var t=this._readableState
var r=e
0!==e&&(t.emittedReadable=!1)
if(0===e&&t.needReadable&&(t.length>=t.highWaterMark||t.ended)){d("read: emitReadable",t.length,t.ended)
0===t.length&&t.ended?_(this):S(this)
return null}if(0===(e=w(e,t))&&t.ended){0===t.length&&_(this)
return null}var n=t.needReadable
d("need readable",n);(0===t.length||t.length-e<t.highWaterMark)&&d("length less than watermark",n=!0)
if(t.ended||t.reading)d("reading or ended",n=!1)
else if(n){d("do read")
t.reading=!0
t.sync=!0
0===t.length&&(t.needReadable=!0)
this._read(t.highWaterMark)
t.sync=!1
t.reading||(e=w(r,t))}var a
if(null===(a=e>0?O(e,t):null)){t.needReadable=!0
e=0}else t.length-=e
if(0===t.length){t.ended||(t.needReadable=!0)
r!==e&&t.ended&&_(this)}null!==a&&this.emit("data",a)
return a}
function S(e){var t=e._readableState
t.needReadable=!1
if(!t.emittedReadable){d("emitReadable",t.flowing)
t.emittedReadable=!0
t.sync?a.nextTick(A,e):A(e)}}function A(e){d("emit readable")
e.emit("readable")
L(e)}function E(e,t){if(!t.readingMore){t.readingMore=!0
a.nextTick(C,e,t)}}function C(e,t){var r=t.length
for(;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark;){d("maybeReadMore read 0")
e.read(0)
if(r===t.length)break
r=t.length}t.readingMore=!1}y.prototype._read=function(e){this.emit("error",new Error("_read() is not implemented"))}
y.prototype.pipe=function(e,t){var r=this
var o=this._readableState
switch(o.pipesCount){case 0:o.pipes=e
break
case 1:o.pipes=[o.pipes,e]
break
default:o.pipes.push(e)}o.pipesCount+=1
d("pipe count=%d opts=%j",o.pipesCount,t)
var l=t&&!1===t.end||e===n.stdout||e===n.stderr?b:c
o.endEmitted?a.nextTick(l):r.once("end",l)
e.on("unpipe",(function t(n,a){d("onunpipe")
if(n===r&&a&&!1===a.hasUnpiped){a.hasUnpiped=!0
!function(){d("cleanup")
e.removeListener("close",g)
e.removeListener("finish",v)
e.removeListener("drain",u)
e.removeListener("error",m)
e.removeListener("unpipe",t)
r.removeListener("end",c)
r.removeListener("end",b)
r.removeListener("data",p)
f=!0
!o.awaitDrain||e._writableState&&!e._writableState.needDrain||u()}()}}))
function c(){d("onend")
e.end()}var u=function(e){return function(){var t=e._readableState
d("pipeOnDrain",t.awaitDrain)
t.awaitDrain&&t.awaitDrain--
if(0===t.awaitDrain&&s(e,"data")){t.flowing=!0
L(e)}}}(r)
e.on("drain",u)
var f=!1
var h=!1
r.on("data",p)
function p(t){d("ondata")
h=!1
if(!1===e.write(t)&&!h){if((1===o.pipesCount&&o.pipes===e||o.pipesCount>1&&-1!==R(o.pipes,e))&&!f){d("false write response, pause",r._readableState.awaitDrain)
r._readableState.awaitDrain++
h=!0}r.pause()}}function m(t){d("onerror",t)
b()
e.removeListener("error",m)
0===s(e,"error")&&e.emit("error",t)}!function(e,t,r){if("function"==typeof e.prependListener)return e.prependListener(t,r)
e._events&&e._events[t]?i(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]:e.on(t,r)}(e,"error",m)
function g(){e.removeListener("finish",v)
b()}e.once("close",g)
function v(){d("onfinish")
e.removeListener("close",g)
b()}e.once("finish",v)
function b(){d("unpipe")
r.unpipe(e)}e.emit("pipe",r)
if(!o.flowing){d("pipe resume")
r.resume()}return e}
y.prototype.unpipe=function(e){var t=this._readableState
var r={hasUnpiped:!1}
if(0===t.pipesCount)return this
if(1===t.pipesCount){if(e&&e!==t.pipes)return this
e||(e=t.pipes)
t.pipes=null
t.pipesCount=0
t.flowing=!1
e&&e.emit("unpipe",this,r)
return this}if(!e){var n=t.pipes
var a=t.pipesCount
t.pipes=null
t.pipesCount=0
t.flowing=!1
for(var i=0;i<a;i++)n[i].emit("unpipe",this,r)
return this}var o=R(t.pipes,e)
if(-1===o)return this
t.pipes.splice(o,1)
t.pipesCount-=1
1===t.pipesCount&&(t.pipes=t.pipes[0])
e.emit("unpipe",this,r)
return this}
y.prototype.on=function(e,t){var r=l.prototype.on.call(this,e,t)
if("data"===e)!1!==this._readableState.flowing&&this.resume()
else if("readable"===e){var n=this._readableState
if(!n.endEmitted&&!n.readableListening){n.readableListening=n.needReadable=!0
n.emittedReadable=!1
n.reading?n.length&&S(this):a.nextTick(T,this)}}return r}
y.prototype.addListener=y.prototype.on
function T(e){d("readable nexttick read 0")
e.read(0)}y.prototype.resume=function(){var e=this._readableState
if(!e.flowing){d("resume")
e.flowing=!0
!function(e,t){if(!t.resumeScheduled){t.resumeScheduled=!0
a.nextTick(P,e,t)}}(this,e)}return this}
function P(e,t){if(!t.reading){d("resume read 0")
e.read(0)}t.resumeScheduled=!1
t.awaitDrain=0
e.emit("resume")
L(e)
t.flowing&&!t.reading&&e.read(0)}y.prototype.pause=function(){d("call pause flowing=%j",this._readableState.flowing)
if(!1!==this._readableState.flowing){d("pause")
this._readableState.flowing=!1
this.emit("pause")}return this}
function L(e){var t=e._readableState
d("flow",t.flowing)
for(;t.flowing&&null!==e.read(););}y.prototype.wrap=function(e){var t=this
var r=this._readableState
var n=!1
e.on("end",(function(){d("wrapped end")
if(r.decoder&&!r.ended){var e=r.decoder.end()
e&&e.length&&t.push(e)}t.push(null)}))
e.on("data",(function(a){d("wrapped data")
r.decoder&&(a=r.decoder.write(a))
if((!r.objectMode||null!=a)&&(r.objectMode||a&&a.length)&&!t.push(a)){n=!0
e.pause()}}))
for(var a in e)void 0===this[a]&&"function"==typeof e[a]&&(this[a]=function(t){return function(){return e[t].apply(e,arguments)}}(a))
for(var i=0;i<v.length;i++)e.on(v[i],this.emit.bind(this,v[i]))
this._read=function(t){d("wrapped _read",t)
if(n){n=!1
e.resume()}}
return this}
Object.defineProperty(y.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}})
y._fromList=O
function O(e,t){if(0===t.length)return null
var r
if(t.objectMode)r=t.buffer.shift()
else if(!e||e>=t.length){r=t.decoder?t.buffer.join(""):1===t.buffer.length?t.buffer.head.data:t.buffer.concat(t.length)
t.buffer.clear()}else r=function(e,t,r){var n
if(e<t.head.data.length){n=t.head.data.slice(0,e)
t.head.data=t.head.data.slice(e)}else n=e===t.head.data.length?t.shift():r?function(e,t){var r=t.head
var n=1
var a=r.data
e-=a.length
for(;r=r.next;){var i=r.data
var o=e>i.length?i.length:e
o===i.length?a+=i:a+=i.slice(0,e)
if(0==(e-=o)){if(o===i.length){++n
r.next?t.head=r.next:t.head=t.tail=null}else{t.head=r
r.data=i.slice(o)}break}++n}t.length-=n
return a}(e,t):function(e,t){var r=c.allocUnsafe(e)
var n=t.head
var a=1
n.data.copy(r)
e-=n.data.length
for(;n=n.next;){var i=n.data
var o=e>i.length?i.length:e
i.copy(r,r.length-e,0,o)
if(0==(e-=o)){if(o===i.length){++a
n.next?t.head=n.next:t.head=t.tail=null}else{t.head=n
n.data=i.slice(o)}break}++a}t.length-=a
return r}(e,t)
return n}(e,t.buffer,t.decoder)
return r}function _(e){var t=e._readableState
if(t.length>0)throw new Error('"endReadable()" called on non-empty stream')
if(!t.endEmitted){t.ended=!0
a.nextTick(N,t,e)}}function N(e,t){if(!e.endEmitted&&0===e.length){e.endEmitted=!0
t.readable=!1
t.emit("end")}}function R(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r
return-1}}).call(this,r(5),r(12))},function(e,t,r){e.exports=r(21).EventEmitter},function(e,t,r){"use strict"
var n=r(13)
function a(e,t){e.emit("error",t)}e.exports={destroy:function(e,t){var r=this
var i=this._readableState&&this._readableState.destroyed
var o=this._writableState&&this._writableState.destroyed
if(i||o){t?t(e):!e||this._writableState&&this._writableState.errorEmitted||n.nextTick(a,this,e)
return this}this._readableState&&(this._readableState.destroyed=!0)
this._writableState&&(this._writableState.destroyed=!0)
this._destroy(e||null,(function(e){if(!t&&e){n.nextTick(a,r,e)
r._writableState&&(r._writableState.errorEmitted=!0)}else t&&t(e)}))
return this},undestroy:function(){if(this._readableState){this._readableState.destroyed=!1
this._readableState.reading=!1
this._readableState.ended=!1
this._readableState.endEmitted=!1}if(this._writableState){this._writableState.destroyed=!1
this._writableState.ended=!1
this._writableState.ending=!1
this._writableState.finished=!1
this._writableState.errorEmitted=!1}}}},function(e,t,r){"use strict"
e.exports=o
var n=r(3)
var a=Object.create(r(8))
a.inherits=r(6)
a.inherits(o,n)
function i(e,t){var r=this._transformState
r.transforming=!1
var n=r.writecb
if(!n)return this.emit("error",new Error("write callback called multiple times"))
r.writechunk=null
r.writecb=null
null!=t&&this.push(t)
n(e)
var a=this._readableState
a.reading=!1;(a.needReadable||a.length<a.highWaterMark)&&this._read(a.highWaterMark)}function o(e){if(!(this instanceof o))return new o(e)
n.call(this,e)
this._transformState={afterTransform:i.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null}
this._readableState.needReadable=!0
this._readableState.sync=!1
if(e){"function"==typeof e.transform&&(this._transform=e.transform)
"function"==typeof e.flush&&(this._flush=e.flush)}this.on("prefinish",s)}function s(){var e=this
"function"==typeof this._flush?this._flush((function(t,r){l(e,t,r)})):l(this,null,null)}o.prototype.push=function(e,t){this._transformState.needTransform=!1
return n.prototype.push.call(this,e,t)}
o.prototype._transform=function(e,t,r){throw new Error("_transform() is not implemented")}
o.prototype._write=function(e,t,r){var n=this._transformState
n.writecb=r
n.writechunk=e
n.writeencoding=t
if(!n.transforming){var a=this._readableState;(n.needTransform||a.needReadable||a.length<a.highWaterMark)&&this._read(a.highWaterMark)}}
o.prototype._read=function(e){var t=this._transformState
if(null!==t.writechunk&&t.writecb&&!t.transforming){t.transforming=!0
this._transform(t.writechunk,t.writeencoding,t.afterTransform)}else t.needTransform=!0}
o.prototype._destroy=function(e,t){var r=this
n.prototype._destroy.call(this,e,(function(e){t(e)
r.emit("close")}))}
function l(e,t,r){if(t)return e.emit("error",t)
null!=r&&e.push(r)
if(e._writableState.length)throw new Error("Calling transform done when ws.length != 0")
if(e._transformState.transforming)throw new Error("Calling transform done when still transforming")
return e.push(null)}},function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
var a=n(r(41))
var i=n(r(83))
var o=n(r(42))
var s=n(r(84))
t.decodeXML=l(o.default)
t.decodeHTMLStrict=l(a.default)
function l(e){var t=Object.keys(e).join("|")
var r=u(e)
var n=new RegExp("&(?:"+(t+="|#[xX][\\da-fA-F]+|#\\d+")+");","g")
return function(e){return String(e).replace(n,r)}}var c=function(e,t){return e<t?1:-1}
t.decodeHTML=function(){var e=Object.keys(i.default).sort(c)
var t=Object.keys(a.default).sort(c)
for(var r=0,n=0;r<t.length;r++)if(e[n]===t[r]){t[r]+=";?"
n++}else t[r]+=";"
var o=new RegExp("&(?:"+t.join("|")+"|#[xX][\\da-fA-F]+;?|#\\d+;?)","g")
var s=u(a.default)
function l(e){";"!==e.substr(-1)&&(e+=";")
return s(e)}return function(e){return String(e).replace(o,l)}}()
function u(e){return function(t){return"#"===t.charAt(1)?"X"===t.charAt(2)||"x"===t.charAt(2)?s.default(parseInt(t.substr(3),16)):s.default(parseInt(t.substr(2),10)):e[t.slice(1,-1)]}}},function(e){e.exports=JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}')},function(e){e.exports=JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}')},function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
var a=l(n(r(42)).default)
var i=c(a)
t.encodeXML=p(a,i)
var o=l(n(r(41)).default)
var s=c(o)
t.encodeHTML=p(o,s)
function l(e){return Object.keys(e).sort().reduce((function(t,r){t[e[r]]="&"+r+";"
return t}),{})}function c(e){var t=[]
var r=[]
Object.keys(e).forEach((function(e){return 1===e.length?t.push("\\"+e):r.push(e)}))
r.unshift("["+t.join("")+"]")
return new RegExp(r.join("|"),"g")}var u=/[^\0-\x7F]/g
var f=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g
function h(e){return"&#x"+e.charCodeAt(0).toString(16).toUpperCase()+";"}function d(e,t){return"&#x"+(1024*(e.charCodeAt(0)-55296)+e.charCodeAt(1)-56320+65536).toString(16).toUpperCase()+";"}function p(e,t){return function(r){return r.replace(t,(function(t){return e[t]})).replace(f,d).replace(u,h)}}var m=c(a)
t.escape=function(e){return e.replace(m,h).replace(f,d).replace(u,h)}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.default=function(e,t){var r=[]
if(""!==(e=function e(t,r,a){var h=[],g=!1
function v(){var e=r.match(n)
if(!e)throw new Error("Expected name, found "+r)
var t=e[0]
r=r.substr(t.length)
return d(t)}function b(e){for(;p(r.charAt(e));)e++
r=r.substr(e)}function y(e){var t=0
for(;"\\"===r.charAt(--e);)t++
return 1==(1&t)}b(0)
for(;""!==r;){var x=r.charAt(0)
if(p(x)){g=!0
b(1)}else if(x in s){h.push({type:s[x]})
g=!1
b(1)}else if(","===x){if(0===h.length)throw new Error("Empty sub-selector")
t.push(h)
h=[]
g=!1
b(1)}else{if(g){h.length>0&&h.push({type:"descendant"})
g=!1}if("*"===x){r=r.substr(1)
h.push({type:"universal"})}else if(x in l){var k=l[x],w=k[0],S=k[1]
r=r.substr(1)
h.push({type:"attribute",name:w,action:S,value:v(),ignoreCase:!1})}else if("["===x){if(!(C=(r=r.substr(1)).match(i)))throw new Error("Malformed attribute selector: "+r)
r=r.substr(C[0].length)
var A=d(C[1])
a&&("lowerCaseAttributeNames"in a?!a.lowerCaseAttributeNames:a.xmlMode)||(A=A.toLowerCase())
h.push({type:"attribute",name:A,action:o[C[2]],value:d(C[4]||C[5]||""),ignoreCase:!!C[6]})}else if(":"===x){if(":"===r.charAt(1)){r=r.substr(2)
h.push({type:"pseudo-element",name:v().toLowerCase()})
continue}r=r.substr(1)
var E=v().toLowerCase()
var C=null
if("("===r.charAt(0))if(c.has(E)){var T=r.charAt(1)
var P=f.has(T)
r=e(C=[],r=r.substr(P?2:1),a)
if(P){if(r.charAt(0)!==T)throw new Error("Unmatched quotes in :"+E)
r=r.substr(1)}if(")"!==r.charAt(0))throw new Error("Missing closing parenthesis in :"+E+" ("+r+")")
r=r.substr(1)}else{var L=1,O=1
for(;O>0&&L<r.length;L++)"("!==r.charAt(L)||y(L)?")"!==r.charAt(L)||y(L)||O--:O++
if(O)throw new Error("Parenthesis not matched")
C=r.substr(1,L-2)
r=r.substr(L)
if(u.has(E)){(T=C.charAt(0))===C.slice(-1)&&f.has(T)&&(C=C.slice(1,-1))
C=d(C)}}h.push({type:"pseudo",name:E,data:C})}else{if(!n.test(r)){h.length&&"descendant"===h[h.length-1].type&&h.pop()
m(t,h)
return r}var _=v()
a&&("lowerCaseTags"in a?!a.lowerCaseTags:a.xmlMode)||(_=_.toLowerCase())
h.push({type:"tag",name:_})}}}m(t,h)
return r}(r,e+"",t)))throw new Error("Unmatched selector: "+e)
return r}
var n=/^(?:\\([\da-f]{1,6}\s?|(\s)|.)|[\w\-\u00b0-\uFFFF])+/,a=/\\([\da-f]{1,6}\s?|(\s)|.)/gi,i=/^\s*((?:\\.|[\w\u00b0-\uFFFF-])+)\s*(?:(\S?)=\s*(?:(['"])([^]*?)\3|(#?(?:\\.|[\w\u00b0-\uFFFF-])*)|)|)\s*(i)?\]/
var o={undefined:"exists","":"equals","~":"element","^":"start",$:"end","*":"any","!":"not","|":"hyphen"}
var s={">":"child","<":"parent","~":"sibling","+":"adjacent"}
var l={"#":["id","equals"],".":["class","element"]}
var c=new Set(["has","not","matches"])
var u=new Set(["contains","icontains"])
var f=new Set(['"',"'"])
function h(e,t,r){var n=parseInt(t,16)-65536
return n!=n||r?t:n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320)}function d(e){return e.replace(a,h)}function p(e){return" "===e||"\n"===e||"\t"===e||"\f"===e||"\r"===e}function m(e,t){if(e.length>0&&0===t.length)throw new Error("Empty sub-selector")
e.push(t)}},function(e){e.exports=JSON.parse('{"universal":50,"tag":30,"attribute":1,"pseudo":0,"descendant":-1,"child":-1,"parent":-1,"sibling":-1,"adjacent":-1}')},function(e,t,r){var n=r(9).falseFunc
var a=/[-[\]{}()*+?.,\\^$|#\s]/g
var i={__proto__:null,equals:function(e,t,r){var n=t.name
var a=t.value
var i=r.adapter
if(t.ignoreCase){a=a.toLowerCase()
return function(t){var r=i.getAttributeValue(t,n)
return null!=r&&r.toLowerCase()===a&&e(t)}}return function(t){return i.getAttributeValue(t,n)===a&&e(t)}},hyphen:function(e,t,r){var n=t.name
var a=t.value
var i=a.length
var o=r.adapter
if(t.ignoreCase){a=a.toLowerCase()
return function(t){var r=o.getAttributeValue(t,n)
return null!=r&&(r.length===i||"-"===r.charAt(i))&&r.substr(0,i).toLowerCase()===a&&e(t)}}return function(t){var r=o.getAttributeValue(t,n)
return null!=r&&r.substr(0,i)===a&&(r.length===i||"-"===r.charAt(i))&&e(t)}},element:function(e,t,r){var i=t.name
var o=t.value
var s=r.adapter
if(/\s/.test(o))return n
var l="(?:^|\\s)"+(o=o.replace(a,"\\$&"))+"(?:$|\\s)",c=t.ignoreCase?"i":"",u=new RegExp(l,c)
return function(t){var r=s.getAttributeValue(t,i)
return null!=r&&u.test(r)&&e(t)}},exists:function(e,t,r){var n=t.name
var a=r.adapter
return function(t){return a.hasAttrib(t,n)&&e(t)}},start:function(e,t,r){var a=t.name
var i=t.value
var o=i.length
var s=r.adapter
if(0===o)return n
if(t.ignoreCase){i=i.toLowerCase()
return function(t){var r=s.getAttributeValue(t,a)
return null!=r&&r.substr(0,o).toLowerCase()===i&&e(t)}}return function(t){var r=s.getAttributeValue(t,a)
return null!=r&&r.substr(0,o)===i&&e(t)}},end:function(e,t,r){var a=t.name
var i=t.value
var o=-i.length
var s=r.adapter
if(0===o)return n
if(t.ignoreCase){i=i.toLowerCase()
return function(t){var r=s.getAttributeValue(t,a)
return null!=r&&r.substr(o).toLowerCase()===i&&e(t)}}return function(t){var r=s.getAttributeValue(t,a)
return null!=r&&r.substr(o)===i&&e(t)}},any:function(e,t,r){var i=t.name
var o=t.value
var s=r.adapter
if(""===o)return n
if(t.ignoreCase){var l=new RegExp(o.replace(a,"\\$&"),"i")
return function(t){var r=s.getAttributeValue(t,i)
return null!=r&&l.test(r)&&e(t)}}return function(t){var r=s.getAttributeValue(t,i)
return null!=r&&r.indexOf(o)>=0&&e(t)}},not:function(e,t,r){var n=t.name
var a=t.value
var i=r.adapter
if(""===a)return function(t){return!!i.getAttributeValue(t,n)&&e(t)}
if(t.ignoreCase){a=a.toLowerCase()
return function(t){var r=i.getAttributeValue(t,n)
return null!=r&&r.toLowerCase()!==a&&e(t)}}return function(t){return i.getAttributeValue(t,n)!==a&&e(t)}}}
e.exports={compile:function(e,t,r){if(r&&r.strict&&(t.ignoreCase||"not"===t.action))throw new Error("Unsupported attribute selector")
return i[t.action](e,t,r)},rules:i}},function(e,t,r){var n=r(97)
var a=r(9)
var i=r(46)
var o=a.trueFunc
var s=a.falseFunc
var l=i.rules.equals
function c(e,t){var r={name:e,value:t}
return function(e,t,n){return l(e,r,n)}}function u(e,t){return function(r){return!!t.getParent(r)&&e(r)}}var f={contains:function(e,t,r){var n=r.adapter
return function(r){return e(r)&&n.getText(r).indexOf(t)>=0}},icontains:function(e,t,r){var n=t.toLowerCase()
var a=r.adapter
return function(t){return e(t)&&a.getText(t).toLowerCase().indexOf(n)>=0}},"nth-child":function(e,t,r){var a=n(t)
var i=r.adapter
return a===s?a:a===o?u(e,i):function(t){var r=i.getSiblings(t)
for(var n=0,o=0;n<r.length;n++)if(i.isTag(r[n])){if(r[n]===t)break
o++}return a(o)&&e(t)}},"nth-last-child":function(e,t,r){var a=n(t)
var i=r.adapter
return a===s?a:a===o?u(e,i):function(t){var r=i.getSiblings(t)
for(var n=0,o=r.length-1;o>=0;o--)if(i.isTag(r[o])){if(r[o]===t)break
n++}return a(n)&&e(t)}},"nth-of-type":function(e,t,r){var a=n(t)
var i=r.adapter
return a===s?a:a===o?u(e,i):function(t){var r=i.getSiblings(t)
for(var n=0,o=0;o<r.length;o++)if(i.isTag(r[o])){if(r[o]===t)break
i.getName(r[o])===i.getName(t)&&n++}return a(n)&&e(t)}},"nth-last-of-type":function(e,t,r){var a=n(t)
var i=r.adapter
return a===s?a:a===o?u(e,i):function(t){var r=i.getSiblings(t)
for(var n=0,o=r.length-1;o>=0;o--)if(i.isTag(r[o])){if(r[o]===t)break
i.getName(r[o])===i.getName(t)&&n++}return a(n)&&e(t)}},root:function(e,t,r){var n=r.adapter
return function(t){return!n.getParent(t)&&e(t)}},scope:function(e,t,r,n){var a=r.adapter
return n&&0!==n.length?1===n.length?function(t){return(r=n[0],i=t,"function"==typeof a.equals?a.equals(r,i):r===i)&&e(t)
var r,i}:function(t){return n.indexOf(t)>=0&&e(t)}:f.root(e,t,r)},checkbox:c("type","checkbox"),file:c("type","file"),password:c("type","password"),radio:c("type","radio"),reset:c("type","reset"),image:c("type","image"),submit:c("type","submit"),hover:function(e,t,r){var n=r.adapter
return"function"==typeof n.isHovered?function(t){return e(t)&&n.isHovered(t)}:s},visited:function(e,t,r){var n=r.adapter
return"function"==typeof n.isVisited?function(t){return e(t)&&n.isVisited(t)}:s},active:function(e,t,r){var n=r.adapter
return"function"==typeof n.isActive?function(t){return e(t)&&n.isActive(t)}:s}}
var h={empty:function(e,t){return!t.getChildren(e).some((function(e){return t.isTag(e)||"text"===e.type}))},"first-child":function(e,t){return function(e,t){for(var r=0;e&&r<e.length;r++)if(t.isTag(e[r]))return e[r]}(t.getSiblings(e),t)===e},"last-child":function(e,t){var r=t.getSiblings(e)
for(var n=r.length-1;n>=0;n--){if(r[n]===e)return!0
if(t.isTag(r[n]))break}return!1},"first-of-type":function(e,t){var r=t.getSiblings(e)
for(var n=0;n<r.length;n++)if(t.isTag(r[n])){if(r[n]===e)return!0
if(t.getName(r[n])===t.getName(e))break}return!1},"last-of-type":function(e,t){var r=t.getSiblings(e)
for(var n=r.length-1;n>=0;n--)if(t.isTag(r[n])){if(r[n]===e)return!0
if(t.getName(r[n])===t.getName(e))break}return!1},"only-of-type":function(e,t){var r=t.getSiblings(e)
for(var n=0,a=r.length;n<a;n++)if(t.isTag(r[n])){if(r[n]===e)continue
if(t.getName(r[n])===t.getName(e))return!1}return!0},"only-child":function(e,t){var r=t.getSiblings(e)
for(var n=0;n<r.length;n++)if(t.isTag(r[n])&&r[n]!==e)return!1
return!0},link:function(e,t){return t.hasAttrib(e,"href")},selected:function(e,t){if(t.hasAttrib(e,"selected"))return!0
if("option"!==t.getName(e))return!1
var r=t.getParent(e)
if(!r||"select"!==t.getName(r)||t.hasAttrib(r,"multiple"))return!1
var n=t.getChildren(r)
var a=!1
for(var i=0;i<n.length;i++)if(t.isTag(n[i]))if(n[i]===e)a=!0
else{if(!a)return!1
if(t.hasAttrib(n[i],"selected"))return!1}return a},disabled:function(e,t){return t.hasAttrib(e,"disabled")},enabled:function(e,t){return!t.hasAttrib(e,"disabled")},checked:function(e,t){return t.hasAttrib(e,"checked")||h.selected(e,t)},required:function(e,t){return t.hasAttrib(e,"required")},optional:function(e,t){return!t.hasAttrib(e,"required")},parent:function(e,t){return!h.empty(e,t)},header:d(["h1","h2","h3","h4","h5","h6"]),button:function(e,t){var r=t.getName(e)
return"button"===r||"input"===r&&"button"===t.getAttributeValue(e,"type")},input:d(["input","textarea","select","button"]),text:function(e,t){var r
return"input"===t.getName(e)&&(!(r=t.getAttributeValue(e,"type"))||"text"===r.toLowerCase())}}
function d(e){if("undefined"!=typeof Set){var t=new Set(e)
return function(e,r){return t.has(r.getName(e))}}return function(t,r){return e.indexOf(r.getName(t))>=0}}var p=/^(?:(?:nth|last|first|only)-(?:child|of-type)|root|empty|(?:en|dis)abled|checked|not)$/
e.exports={compile:function(e,t,r,n){var a=t.name
var i=t.data
var l=r.adapter
if(r&&r.strict&&!p.test(a))throw new Error(":"+a+" isn't part of CSS3")
if("function"==typeof f[a])return f[a](e,i,r,n)
if("function"==typeof h[a]){var c=h[a]
!function(e,t,r){if(null===r){if(e.length>2&&"scope"!==t)throw new Error("pseudo-selector :"+t+" requires an argument")}else if(2===e.length)throw new Error("pseudo-selector :"+t+" doesn't have any arguments")}(c,a,i)
return c===s?c:e===o?function(e){return c(e,l,i)}:function(t){return c(t,l,i)&&e(t)}}throw new Error("unmatched pseudo-class :"+a)},filters:f,pseudos:h}},function(e,t,r){var n=r(26)
function a(e,t){function r(e,t){return n.slice(e,t).map((function(t,r){var n=String(e+r+1)
for(;n.length<l;)n=" "+n
return n+" |"+t})).join("\n")}var n=e.source.split(/\r\n?|\n|\f/)
var a=e.line
var i=e.column
var o=Math.max(1,a-t)-1
var s=Math.min(a+t,n.length+1)
var l=Math.max(4,String(s).length)+1
var c=0
if((i+=("    ".length-1)*(n[a-1].substr(0,i-1).match(/\t/g)||[]).length)>100){c=i-60+3
i=58}for(var u=o;u<=s;u++)if(u>=0&&u<n.length){n[u]=n[u].replace(/\t/g,"    ")
n[u]=(c>0&&n[u].length>c?"…":"")+n[u].substr(c,98)+(n[u].length>c+100-1?"…":"")}return[r(o,a),new Array(i+l+2).join("-")+"^",r(a,s)].filter(Boolean).join("\n")}e.exports=function(e,t,r,i,o){var s=n("SyntaxError",e)
s.source=t
s.offset=r
s.line=i
s.column=o
s.sourceFragment=function(e){return a(s,isNaN(e)?0:e)}
Object.defineProperty(s,"formattedMessage",{get:function(){return"Parse error: "+s.message+"\n"+a(s,2)}})
s.parseError={offset:r,line:i,column:o}
return s}},function(e,t){function r(e){return e>=48&&e<=57}function n(e){return e>=65&&e<=90}function a(e){return e>=97&&e<=122}function i(e){return n(e)||a(e)}function o(e){return e>=128}function s(e){return i(e)||o(e)||95===e}function l(e){return e>=0&&e<=8||11===e||e>=14&&e<=31||127===e}function c(e){return 10===e||13===e||12===e}function u(e){return c(e)||32===e||9===e}function f(e,t){return 92===e&&!c(t)&&0!==t}var h=new Array(128)
p.Eof=128
p.WhiteSpace=130
p.Digit=131
p.NameStart=132
p.NonPrintable=133
for(var d=0;d<h.length;d++)switch(!0){case u(d):h[d]=p.WhiteSpace
break
case r(d):h[d]=p.Digit
break
case s(d):h[d]=p.NameStart
break
case l(d):h[d]=p.NonPrintable
break
default:h[d]=d||p.Eof}function p(e){return e<128?h[e]:p.NameStart}e.exports={isDigit:r,isHexDigit:function(e){return r(e)||e>=65&&e<=70||e>=97&&e<=102},isUppercaseLetter:n,isLowercaseLetter:a,isLetter:i,isNonAscii:o,isNameStart:s,isName:function(e){return s(e)||r(e)||45===e},isNonPrintable:l,isNewline:c,isWhiteSpace:u,isValidEscape:f,isIdentifierStart:function(e,t,r){return 45===e?s(t)||45===t||f(t,r):!!s(e)||92===e&&f(e,t)},isNumberStart:function(e,t,n){return 43===e||45===e?r(t)?2:46===t&&r(n)?3:0:46===e?r(t)?2:0:r(e)?1:0},isBOM:function(e){return 65279===e||65534===e?1:0},charCodeCategory:p}},function(e,t,r){var n=r(26)
var a=r(27)
function i(e,t){var r=e&&e.loc&&e.loc[t]
return r?{offset:r.offset,line:r.line,column:r.column}:null}e.exports={SyntaxReferenceError:function(e,t){var r=n("SyntaxReferenceError",e+(t?" `"+t+"`":""))
r.reference=t
return r},MatchError:function(e,t,r,o){var s=n("SyntaxMatchError",e)
var l=function(e){var t=e.tokens
var r=e.longestMatch
var n=r<t.length?t[r].node:null
var a=-1
var i=0
var o=""
for(var s=0;s<t.length;s++){s===r&&(a=o.length)
null!==n&&t[s].node===n&&(s<=r?i++:i=0)
o+=t[s].value}return{node:n,css:o,mismatchOffset:-1===a?o.length:a,last:null===n||i>1}}(o)
var c=l.mismatchOffset||0
var u=l.node||r
var f=i(u,"end")
var h=l.last?f:i(u,"start")
var d=l.css
s.rawMessage=e
s.syntax=t?a(t):"<generic>"
s.css=d
s.mismatchOffset=c
s.loc={source:u&&u.loc&&u.loc.source||"<unknown>",start:h,end:f}
s.line=h?h.line:void 0
s.column=h?h.column:void 0
s.offset=h?h.offset:void 0
s.message=e+"\n  syntax: "+s.syntax+"\n   value: "+(s.css||"<empty string>")+"\n  --------"+new Array(s.mismatchOffset+1).join("-")+"^"
return s}}},function(e,t){var r="undefined"!=typeof Uint32Array?Uint32Array:Array
e.exports=function(e,t){return null===e||e.length<t?new r(Math.max(t+1024,16384)):e}},function(e,t,r){var n=r(26)
e.exports=function(e,t,r){var a=n("SyntaxError",e)
a.input=t
a.offset=r
a.rawMessage=e
a.message=a.rawMessage+"\n  "+a.input+"\n--"+new Array((a.offset||a.input.length)+1).join("-")+"^"
return a}},function(e,t){var r=function(){}
function n(e){return"function"==typeof e?e:r}e.exports=function(e,t,a){var i=r
var o=r
if("function"==typeof t)i=t
else if(t){i=n(t.enter)
o=n(t.leave)}if(i===r&&o===r)throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function")
!function e(t){i.call(a,t)
switch(t.type){case"Group":t.terms.forEach(e)
break
case"Multiplier":e(t.term)
break
case"Type":case"Property":case"Keyword":case"AtKeyword":case"Function":case"String":case"Token":case"Comma":break
default:throw new Error("Unknown type: "+t.type)}o.call(a,t)}(e)}},function(e,t,r){var n=r(29)
var a={type:"Match"}
var i={type:"Mismatch"}
var o={type:"DisallowEmpty"}
function s(e,t,r){if(t===a&&r===i)return e
if(e===a&&t===a&&r===a)return e
if("If"===e.type&&e.else===i&&t===a){t=e.then
e=e.match}return{type:"If",match:e,then:t,else:r}}function l(e){return e.length>2&&40===e.charCodeAt(e.length-2)&&41===e.charCodeAt(e.length-1)}function c(e){return"Keyword"===e.type||"AtKeyword"===e.type||"Function"===e.type||"Type"===e.type&&l(e.name)}function u(e){if("function"==typeof e)return{type:"Generic",fn:e}
switch(e.type){case"Group":var t=function e(t,r,n){switch(t){case" ":var o=a
for(var u=r.length-1;u>=0;u--)o=s(d=r[u],o,i)
return o
case"|":o=i
var f=null
for(u=r.length-1;u>=0;u--){if(c(d=r[u])){null===f&&u>0&&c(r[u-1])&&(o=s({type:"Enum",map:f=Object.create(null)},a,o))
if(null!==f){var h=(l(d.name)?d.name.slice(0,-1):d.name).toLowerCase()
if(h in f==0){f[h]=d
continue}}}f=null
o=s(d,a,o)}return o
case"&&":if(r.length>5)return{type:"MatchOnce",terms:r,all:!0}
o=i
for(u=r.length-1;u>=0;u--){var d=r[u]
p=r.length>1?e(t,r.filter((function(e){return e!==d})),!1):a
o=s(d,p,o)}return o
case"||":if(r.length>5)return{type:"MatchOnce",terms:r,all:!1}
o=n?a:i
for(u=r.length-1;u>=0;u--){d=r[u]
var p
p=r.length>1?e(t,r.filter((function(e){return e!==d})),!0):a
o=s(d,p,o)}return o}}(e.combinator,e.terms.map(u),!1)
e.disallowEmpty&&(t=s(t,o,i))
return t
case"Multiplier":return function(e){var t=a
var r=u(e.term)
if(0===e.max){r=s(r,o,i);(t=s(r,null,i)).then=s(a,a,t)
e.comma&&(t.then.else=s({type:"Comma",syntax:e},t,i))}else for(var n=e.min||1;n<=e.max;n++){e.comma&&t!==a&&(t=s({type:"Comma",syntax:e},t,i))
t=s(r,s(a,a,t),i)}if(0===e.min)t=s(a,a,t)
else for(n=0;n<e.min-1;n++){e.comma&&t!==a&&(t=s({type:"Comma",syntax:e},t,i))
t=s(r,t,i)}return t}(e)
case"Type":case"Property":return{type:e.type,name:e.name,syntax:e}
case"Keyword":return{type:e.type,name:e.name.toLowerCase(),syntax:e}
case"AtKeyword":return{type:e.type,name:"@"+e.name.toLowerCase(),syntax:e}
case"Function":return{type:e.type,name:e.name.toLowerCase()+"(",syntax:e}
case"String":return 3===e.value.length?{type:"Token",value:e.value.charAt(1),syntax:e}:{type:e.type,value:e.value.substr(1,e.value.length-2).replace(/\\'/g,"'"),syntax:e}
case"Token":return{type:e.type,value:e.value,syntax:e}
case"Comma":return{type:e.type,syntax:e}
default:throw new Error("Unknown node type:",e.type)}}e.exports={MATCH:a,MISMATCH:i,DISALLOW_EMPTY:o,buildMatchGraph:function(e,t){"string"==typeof e&&(e=n(e))
return{type:"MatchGraph",match:u(e),syntax:t||null,source:e}}}},function(e,t,r){var n=r(0).cmpChar
var a=r(0).cmpStr
var i=r(0).TYPE
var o=i.Ident
var s=i.String
var l=i.Number
var c=i.Function
var u=i.Url
var f=i.Hash
var h=i.Dimension
var d=i.Percentage
var p=i.LeftParenthesis
var m=i.LeftSquareBracket
var g=i.Comma
var v=i.Delim
e.exports=function(e){switch(this.scanner.tokenType){case f:return this.HexColor()
case g:e.space=null
e.ignoreWSAfter=!0
return this.Operator()
case p:return this.Parentheses(this.readSequence,e.recognizer)
case m:return this.Brackets(this.readSequence,e.recognizer)
case s:return this.String()
case h:return this.Dimension()
case d:return this.Percentage()
case l:return this.Number()
case c:return a(this.scanner.source,this.scanner.tokenStart,this.scanner.tokenEnd,"url(")?this.Url():this.Function(this.readSequence,e.recognizer)
case u:return this.Url()
case o:return n(this.scanner.source,this.scanner.tokenStart,117)&&n(this.scanner.source,this.scanner.tokenStart+1,43)?this.UnicodeRange():this.Identifier()
case v:var t=this.scanner.source.charCodeAt(this.scanner.tokenStart)
if(47===t||42===t||43===t||45===t)return this.Operator()
35===t&&this.error("Hex or identifier is expected",this.scanner.tokenStart+1)}}},function(e,t){e.exports=function(){this.scanner.skipSC()
var e=this.createSingleNodeList(this.IdSelector())
this.scanner.skipSC()
return e}},function(e,t){e.exports={parse:function(){return this.createSingleNodeList(this.SelectorList())}}},function(e,t){e.exports={parse:function(){return this.createSingleNodeList(this.Nth(!0))}}},function(e,t){e.exports={parse:function(){return this.createSingleNodeList(this.Nth(!1))}}},function(e,t){e.exports=function(e){e.children.each((function(e,t,r){"Identifier"===e.type&&"none"===e.name.toLowerCase()&&(r.head===r.tail?t.data={type:"Number",loc:e.loc,value:"0"}:function(e,t){var r=t.prev
var n=t.next
null!==n?"WhiteSpace"!==n.data.type||null!==r&&"WhiteSpace"!==r.data.type||e.remove(n):null!==r&&"WhiteSpace"===r.data.type&&e.remove(r)
e.remove(t)}(r,t))}))}},function(e,t,r){(function(e){!function(t){t.parser=function(e,t){return new a(e,t)}
t.SAXParser=a
t.SAXStream=s
t.createStream=function(e,t){return new s(e,t)}
t.MAX_BUFFER_LENGTH=65536
var n=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"]
t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"]
function a(e,r){if(!(this instanceof a))return new a(e,r)
!function(e){for(var t=0,r=n.length;t<r;t++)e[n[t]]=""}(this)
this.q=this.c=""
this.bufferCheckPosition=t.MAX_BUFFER_LENGTH
this.opt=r||{}
this.opt.lowercase=this.opt.lowercase||this.opt.lowercasetags
this.looseCase=this.opt.lowercase?"toLowerCase":"toUpperCase"
this.tags=[]
this.closed=this.closedRoot=this.sawRoot=!1
this.tag=this.error=null
this.strict=!!e
this.noscript=!(!e&&!this.opt.noscript)
this.state=y.BEGIN
this.strictEntities=this.opt.strictEntities
this.ENTITIES=this.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES)
this.attribList=[]
this.opt.xmlns&&(this.ns=Object.create(c))
this.trackPosition=!1!==this.opt.position
this.trackPosition&&(this.position=this.line=this.column=0)
k(this,"onready")}Object.create||(Object.create=function(e){function t(){}t.prototype=e
return new t})
Object.keys||(Object.keys=function(e){var t=[]
for(var r in e)e.hasOwnProperty(r)&&t.push(r)
return t})
a.prototype={end:function(){C(this)},write:function(e){if(this.error)throw this.error
if(this.closed)return E(this,"Cannot write after close. Assign an onready handler.")
if(null===e)return C(this)
"object"==typeof e&&(e=e.toString())
var r=0
var a=""
for(;;){a=M(e,r++)
this.c=a
if(!a)break
if(this.trackPosition){this.position++
if("\n"===a){this.line++
this.column=0}else this.column++}switch(this.state){case y.BEGIN:this.state=y.BEGIN_WHITESPACE
if("\ufeff"===a)continue
D(this,a)
continue
case y.BEGIN_WHITESPACE:D(this,a)
continue
case y.TEXT:if(this.sawRoot&&!this.closedRoot){var i=r-1
for(;a&&"<"!==a&&"&"!==a;)if((a=M(e,r++))&&this.trackPosition){this.position++
if("\n"===a){this.line++
this.column=0}else this.column++}this.textNode+=e.substring(i,r-1)}if("<"!==a||this.sawRoot&&this.closedRoot&&!this.strict){p(a)||this.sawRoot&&!this.closedRoot||T(this,"Text data outside of root node.")
"&"===a?this.state=y.TEXT_ENTITY:this.textNode+=a}else{this.state=y.OPEN_WAKA
this.startTagPosition=this.position}continue
case y.SCRIPT:"<"===a?this.state=y.SCRIPT_ENDING:this.script+=a
continue
case y.SCRIPT_ENDING:if("/"===a)this.state=y.CLOSE_TAG
else{this.script+="<"+a
this.state=y.SCRIPT}continue
case y.OPEN_WAKA:if("!"===a){this.state=y.SGML_DECL
this.sgmlDecl=""}else if(p(a));else if(v(u,a)){this.state=y.OPEN_TAG
this.tagName=a}else if("/"===a){this.state=y.CLOSE_TAG
this.tagName=""}else if("?"===a){this.state=y.PROC_INST
this.procInstName=this.procInstBody=""}else{T(this,"Unencoded <")
if(this.startTagPosition+1<this.position){var o=this.position-this.startTagPosition
a=new Array(o).join(" ")+a}this.textNode+="<"+a
this.state=y.TEXT}continue
case y.SGML_DECL:if("[CDATA["===(this.sgmlDecl+a).toUpperCase()){w(this,"onopencdata")
this.state=y.CDATA
this.sgmlDecl=""
this.cdata=""}else if(this.sgmlDecl+a==="--"){this.state=y.COMMENT
this.comment=""
this.sgmlDecl=""}else if("DOCTYPE"===(this.sgmlDecl+a).toUpperCase()){this.state=y.DOCTYPE;(this.doctype||this.sawRoot)&&T(this,"Inappropriately located doctype declaration")
this.doctype=""
this.sgmlDecl=""}else if(">"===a){w(this,"onsgmldeclaration",this.sgmlDecl)
this.sgmlDecl=""
this.state=y.TEXT}else if(m(a)){this.state=y.SGML_DECL_QUOTED
this.sgmlDecl+=a}else this.sgmlDecl+=a
continue
case y.SGML_DECL_QUOTED:if(a===this.q){this.state=y.SGML_DECL
this.q=""}this.sgmlDecl+=a
continue
case y.DOCTYPE:if(">"===a){this.state=y.TEXT
w(this,"ondoctype",this.doctype)
this.doctype=!0}else{this.doctype+=a
if("["===a)this.state=y.DOCTYPE_DTD
else if(m(a)){this.state=y.DOCTYPE_QUOTED
this.q=a}}continue
case y.DOCTYPE_QUOTED:this.doctype+=a
if(a===this.q){this.q=""
this.state=y.DOCTYPE}continue
case y.DOCTYPE_DTD:this.doctype+=a
if("]"===a)this.state=y.DOCTYPE
else if(m(a)){this.state=y.DOCTYPE_DTD_QUOTED
this.q=a}continue
case y.DOCTYPE_DTD_QUOTED:this.doctype+=a
if(a===this.q){this.state=y.DOCTYPE_DTD
this.q=""}continue
case y.COMMENT:"-"===a?this.state=y.COMMENT_ENDING:this.comment+=a
continue
case y.COMMENT_ENDING:if("-"===a){this.state=y.COMMENT_ENDED
this.comment=A(this.opt,this.comment)
this.comment&&w(this,"oncomment",this.comment)
this.comment=""}else{this.comment+="-"+a
this.state=y.COMMENT}continue
case y.COMMENT_ENDED:if(">"!==a){T(this,"Malformed comment")
this.comment+="--"+a
this.state=y.COMMENT}else this.state=y.TEXT
continue
case y.CDATA:"]"===a?this.state=y.CDATA_ENDING:this.cdata+=a
continue
case y.CDATA_ENDING:if("]"===a)this.state=y.CDATA_ENDING_2
else{this.cdata+="]"+a
this.state=y.CDATA}continue
case y.CDATA_ENDING_2:if(">"===a){this.cdata&&w(this,"oncdata",this.cdata)
w(this,"onclosecdata")
this.cdata=""
this.state=y.TEXT}else if("]"===a)this.cdata+="]"
else{this.cdata+="]]"+a
this.state=y.CDATA}continue
case y.PROC_INST:"?"===a?this.state=y.PROC_INST_ENDING:p(a)?this.state=y.PROC_INST_BODY:this.procInstName+=a
continue
case y.PROC_INST_BODY:if(!this.procInstBody&&p(a))continue
"?"===a?this.state=y.PROC_INST_ENDING:this.procInstBody+=a
continue
case y.PROC_INST_ENDING:if(">"===a){w(this,"onprocessinginstruction",{name:this.procInstName,body:this.procInstBody})
this.procInstName=this.procInstBody=""
this.state=y.TEXT}else{this.procInstBody+="?"+a
this.state=y.PROC_INST_BODY}continue
case y.OPEN_TAG:if(v(f,a))this.tagName+=a
else{P(this)
if(">"===a)_(this)
else if("/"===a)this.state=y.OPEN_TAG_SLASH
else{p(a)||T(this,"Invalid character in tag name")
this.state=y.ATTRIB}}continue
case y.OPEN_TAG_SLASH:if(">"===a){_(this,!0)
N(this)}else{T(this,"Forward-slash in opening tag not followed by >")
this.state=y.ATTRIB}continue
case y.ATTRIB:if(p(a))continue
if(">"===a)_(this)
else if("/"===a)this.state=y.OPEN_TAG_SLASH
else if(v(u,a)){this.attribName=a
this.attribValue=""
this.state=y.ATTRIB_NAME}else T(this,"Invalid attribute name")
continue
case y.ATTRIB_NAME:if("="===a)this.state=y.ATTRIB_VALUE
else if(">"===a){T(this,"Attribute without value")
this.attribValue=this.attribName
O(this)
_(this)}else p(a)?this.state=y.ATTRIB_NAME_SAW_WHITE:v(f,a)?this.attribName+=a:T(this,"Invalid attribute name")
continue
case y.ATTRIB_NAME_SAW_WHITE:if("="===a)this.state=y.ATTRIB_VALUE
else{if(p(a))continue
T(this,"Attribute without value")
this.tag.attributes[this.attribName]=""
this.attribValue=""
w(this,"onattribute",{name:this.attribName,value:""})
this.attribName=""
if(">"===a)_(this)
else if(v(u,a)){this.attribName=a
this.state=y.ATTRIB_NAME}else{T(this,"Invalid attribute name")
this.state=y.ATTRIB}}continue
case y.ATTRIB_VALUE:if(p(a))continue
if(m(a)){this.q=a
this.state=y.ATTRIB_VALUE_QUOTED}else{T(this,"Unquoted attribute value")
this.state=y.ATTRIB_VALUE_UNQUOTED
this.attribValue=a}continue
case y.ATTRIB_VALUE_QUOTED:if(a!==this.q){"&"===a?this.state=y.ATTRIB_VALUE_ENTITY_Q:this.attribValue+=a
continue}O(this)
this.q=""
this.state=y.ATTRIB_VALUE_CLOSED
continue
case y.ATTRIB_VALUE_CLOSED:if(p(a))this.state=y.ATTRIB
else if(">"===a)_(this)
else if("/"===a)this.state=y.OPEN_TAG_SLASH
else if(v(u,a)){T(this,"No whitespace between attributes")
this.attribName=a
this.attribValue=""
this.state=y.ATTRIB_NAME}else T(this,"Invalid attribute name")
continue
case y.ATTRIB_VALUE_UNQUOTED:if(!g(a)){"&"===a?this.state=y.ATTRIB_VALUE_ENTITY_U:this.attribValue+=a
continue}O(this)
">"===a?_(this):this.state=y.ATTRIB
continue
case y.CLOSE_TAG:if(this.tagName)if(">"===a)N(this)
else if(v(f,a))this.tagName+=a
else if(this.script){this.script+="</"+this.tagName
this.tagName=""
this.state=y.SCRIPT}else{p(a)||T(this,"Invalid tagname in closing tag")
this.state=y.CLOSE_TAG_SAW_WHITE}else{if(p(a))continue
if(b(u,a))if(this.script){this.script+="</"+a
this.state=y.SCRIPT}else T(this,"Invalid tagname in closing tag.")
else this.tagName=a}continue
case y.CLOSE_TAG_SAW_WHITE:if(p(a))continue
">"===a?N(this):T(this,"Invalid characters in closing tag")
continue
case y.TEXT_ENTITY:case y.ATTRIB_VALUE_ENTITY_Q:case y.ATTRIB_VALUE_ENTITY_U:var s
var l
switch(this.state){case y.TEXT_ENTITY:s=y.TEXT
l="textNode"
break
case y.ATTRIB_VALUE_ENTITY_Q:s=y.ATTRIB_VALUE_QUOTED
l="attribValue"
break
case y.ATTRIB_VALUE_ENTITY_U:s=y.ATTRIB_VALUE_UNQUOTED
l="attribValue"}if(";"===a){this[l]+=R(this)
this.entity=""
this.state=s}else if(v(this.entity.length?d:h,a))this.entity+=a
else{T(this,"Invalid character in entity name")
this[l]+="&"+this.entity+a
this.entity=""
this.state=s}continue
default:throw new Error(this,"Unknown state: "+this.state)}}this.position>=this.bufferCheckPosition&&function(e){var r=Math.max(t.MAX_BUFFER_LENGTH,10)
var a=0
for(var i=0,o=n.length;i<o;i++){var s=e[n[i]].length
if(s>r)switch(n[i]){case"textNode":S(e)
break
case"cdata":w(e,"oncdata",e.cdata)
e.cdata=""
break
case"script":w(e,"onscript",e.script)
e.script=""
break
default:E(e,"Max buffer length exceeded: "+n[i])}a=Math.max(a,s)}var l=t.MAX_BUFFER_LENGTH-a
e.bufferCheckPosition=l+e.position}(this)
return this}
/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */,resume:function(){this.error=null
return this},close:function(){return this.write(null)},flush:function(){!function(e){S(e)
if(""!==e.cdata){w(e,"oncdata",e.cdata)
e.cdata=""}if(""!==e.script){w(e,"onscript",e.script)
e.script=""}}(this)}}
var i
try{i=r(66).Stream}catch(e){i=function(){}}var o=t.EVENTS.filter((function(e){return"error"!==e&&"end"!==e}))
function s(e,t){if(!(this instanceof s))return new s(e,t)
i.apply(this)
this._parser=new a(e,t)
this.writable=!0
this.readable=!0
var r=this
this._parser.onend=function(){r.emit("end")}
this._parser.onerror=function(e){r.emit("error",e)
r._parser.error=null}
this._decoder=null
o.forEach((function(e){Object.defineProperty(r,"on"+e,{get:function(){return r._parser["on"+e]},set:function(t){if(!t){r.removeAllListeners(e)
r._parser["on"+e]=t
return t}r.on(e,t)},enumerable:!0,configurable:!1})}))}s.prototype=Object.create(i.prototype,{constructor:{value:s}})
s.prototype.write=function(t){if("function"==typeof e&&"function"==typeof e.isBuffer&&e.isBuffer(t)){if(!this._decoder){var n=r(24).StringDecoder
this._decoder=new n("utf8")}t=this._decoder.write(t)}this._parser.write(t.toString())
this.emit("data",t)
return!0}
s.prototype.end=function(e){e&&e.length&&this.write(e)
this._parser.end()
return!0}
s.prototype.on=function(e,t){var r=this
r._parser["on"+e]||-1===o.indexOf(e)||(r._parser["on"+e]=function(){var t=1===arguments.length?[arguments[0]]:Array.apply(null,arguments)
t.splice(0,0,e)
r.emit.apply(r,t)})
return i.prototype.on.call(r,e,t)}
var l="http://www.w3.org/XML/1998/namespace"
var c={xml:l,xmlns:"http://www.w3.org/2000/xmlns/"}
var u=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
var f=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/
var h=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
var d=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/
function p(e){return" "===e||"\n"===e||"\r"===e||"\t"===e}function m(e){return'"'===e||"'"===e}function g(e){return">"===e||p(e)}function v(e,t){return e.test(t)}function b(e,t){return!v(e,t)}var y=0
t.STATE={BEGIN:y++,BEGIN_WHITESPACE:y++,TEXT:y++,TEXT_ENTITY:y++,OPEN_WAKA:y++,SGML_DECL:y++,SGML_DECL_QUOTED:y++,DOCTYPE:y++,DOCTYPE_QUOTED:y++,DOCTYPE_DTD:y++,DOCTYPE_DTD_QUOTED:y++,COMMENT_STARTING:y++,COMMENT:y++,COMMENT_ENDING:y++,COMMENT_ENDED:y++,CDATA:y++,CDATA_ENDING:y++,CDATA_ENDING_2:y++,PROC_INST:y++,PROC_INST_BODY:y++,PROC_INST_ENDING:y++,OPEN_TAG:y++,OPEN_TAG_SLASH:y++,ATTRIB:y++,ATTRIB_NAME:y++,ATTRIB_NAME_SAW_WHITE:y++,ATTRIB_VALUE:y++,ATTRIB_VALUE_QUOTED:y++,ATTRIB_VALUE_CLOSED:y++,ATTRIB_VALUE_UNQUOTED:y++,ATTRIB_VALUE_ENTITY_Q:y++,ATTRIB_VALUE_ENTITY_U:y++,CLOSE_TAG:y++,CLOSE_TAG_SAW_WHITE:y++,SCRIPT:y++,SCRIPT_ENDING:y++}
t.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"}
t.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830}
Object.keys(t.ENTITIES).forEach((function(e){var r=t.ENTITIES[e]
var n="number"==typeof r?String.fromCharCode(r):r
t.ENTITIES[e]=n}))
for(var x in t.STATE)t.STATE[t.STATE[x]]=x
y=t.STATE
function k(e,t,r){e[t]&&e[t](r)}function w(e,t,r){e.textNode&&S(e)
k(e,t,r)}function S(e){e.textNode=A(e.opt,e.textNode)
e.textNode&&k(e,"ontext",e.textNode)
e.textNode=""}function A(e,t){e.trim&&(t=t.trim())
e.normalize&&(t=t.replace(/\s+/g," "))
return t}function E(e,t){S(e)
e.trackPosition&&(t+="\nLine: "+e.line+"\nColumn: "+e.column+"\nChar: "+e.c)
t=new Error(t)
e.error=t
k(e,"onerror",t)
return e}function C(e){e.sawRoot&&!e.closedRoot&&T(e,"Unclosed root tag")
e.state!==y.BEGIN&&e.state!==y.BEGIN_WHITESPACE&&e.state!==y.TEXT&&E(e,"Unexpected end")
S(e)
e.c=""
e.closed=!0
k(e,"onend")
a.call(e,e.strict,e.opt)
return e}function T(e,t){if("object"!=typeof e||!(e instanceof a))throw new Error("bad call to strictFail")
e.strict&&E(e,t)}function P(e){e.strict||(e.tagName=e.tagName[e.looseCase]())
var t=e.tags[e.tags.length-1]||e
var r=e.tag={name:e.tagName,attributes:{}}
e.opt.xmlns&&(r.ns=t.ns)
e.attribList.length=0
w(e,"onopentagstart",r)}function L(e,t){var r=e.indexOf(":")<0?["",e]:e.split(":")
var n=r[0]
var a=r[1]
if(t&&"xmlns"===e){n="xmlns"
a=""}return{prefix:n,local:a}}function O(e){e.strict||(e.attribName=e.attribName[e.looseCase]())
if(-1!==e.attribList.indexOf(e.attribName)||e.tag.attributes.hasOwnProperty(e.attribName))e.attribName=e.attribValue=""
else{if(e.opt.xmlns){var t=L(e.attribName,!0)
var r=t.prefix
var n=t.local
if("xmlns"===r)if("xml"===n&&e.attribValue!==l)T(e,"xml: prefix must be bound to "+l+"\nActual: "+e.attribValue)
else if("xmlns"===n&&"http://www.w3.org/2000/xmlns/"!==e.attribValue)T(e,"xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: "+e.attribValue)
else{var a=e.tag
var i=e.tags[e.tags.length-1]||e
a.ns===i.ns&&(a.ns=Object.create(i.ns))
a.ns[n]=e.attribValue}e.attribList.push([e.attribName,e.attribValue])}else{e.tag.attributes[e.attribName]=e.attribValue
w(e,"onattribute",{name:e.attribName,value:e.attribValue})}e.attribName=e.attribValue=""}}function _(e,t){if(e.opt.xmlns){var r=e.tag
var n=L(e.tagName)
r.prefix=n.prefix
r.local=n.local
r.uri=r.ns[n.prefix]||""
if(r.prefix&&!r.uri){T(e,"Unbound namespace prefix: "+JSON.stringify(e.tagName))
r.uri=n.prefix}var a=e.tags[e.tags.length-1]||e
r.ns&&a.ns!==r.ns&&Object.keys(r.ns).forEach((function(t){w(e,"onopennamespace",{prefix:t,uri:r.ns[t]})}))
for(var i=0,o=e.attribList.length;i<o;i++){var s=e.attribList[i]
var l=s[0]
var c=s[1]
var u=L(l,!0)
var f=u.prefix
var h=u.local
var d=""===f?"":r.ns[f]||""
var p={name:l,value:c,prefix:f,local:h,uri:d}
if(f&&"xmlns"!==f&&!d){T(e,"Unbound namespace prefix: "+JSON.stringify(f))
p.uri=f}e.tag.attributes[l]=p
w(e,"onattribute",p)}e.attribList.length=0}e.tag.isSelfClosing=!!t
e.sawRoot=!0
e.tags.push(e.tag)
w(e,"onopentag",e.tag)
if(!t){e.noscript||"script"!==e.tagName.toLowerCase()?e.state=y.TEXT:e.state=y.SCRIPT
e.tag=null
e.tagName=""}e.attribName=e.attribValue=""
e.attribList.length=0}function N(e){if(e.tagName){if(e.script){if("script"!==e.tagName){e.script+="</"+e.tagName+">"
e.tagName=""
e.state=y.SCRIPT
return}w(e,"onscript",e.script)
e.script=""}var t=e.tags.length
var r=e.tagName
e.strict||(r=r[e.looseCase]())
var n=r
for(;t--&&e.tags[t].name!==n;)T(e,"Unexpected close tag")
if(t<0){T(e,"Unmatched closing tag: "+e.tagName)
e.textNode+="</"+e.tagName+">"
e.state=y.TEXT}else{e.tagName=r
var a=e.tags.length
for(;a-- >t;){var i=e.tag=e.tags.pop()
e.tagName=e.tag.name
w(e,"onclosetag",e.tagName)
var o={}
for(var s in i.ns)o[s]=i.ns[s]
var l=e.tags[e.tags.length-1]||e
e.opt.xmlns&&i.ns!==l.ns&&Object.keys(i.ns).forEach((function(t){var r=i.ns[t]
w(e,"onclosenamespace",{prefix:t,uri:r})}))}0===t&&(e.closedRoot=!0)
e.tagName=e.attribValue=e.attribName=""
e.attribList.length=0
e.state=y.TEXT}}else{T(e,"Weird empty close tag.")
e.textNode+="</>"
e.state=y.TEXT}}function R(e){var t=e.entity
var r=t.toLowerCase()
var n
var a=""
if(e.ENTITIES[t])return e.ENTITIES[t]
if(e.ENTITIES[r])return e.ENTITIES[r]
if("#"===(t=r).charAt(0))if("x"===t.charAt(1)){t=t.slice(2)
a=(n=parseInt(t,16)).toString(16)}else{t=t.slice(1)
a=(n=parseInt(t,10)).toString(10)}t=t.replace(/^0+/,"")
if(isNaN(n)||a.toLowerCase()!==t){T(e,"Invalid character entity")
return"&"+e.entity+";"}return String.fromCodePoint(n)}function D(e,t){if("<"===t){e.state=y.OPEN_WAKA
e.startTagPosition=e.position}else if(!p(t)){T(e,"Non-whitespace before first tag.")
e.textNode=t
e.state=y.TEXT}}function M(e,t){var r=""
t<e.length&&(r=e.charAt(t))
return r}String.fromCodePoint||(I=String.fromCharCode,q=Math.floor,B=function(){var e=16384
var t=[]
var r
var n
var a=-1
var i=arguments.length
if(!i)return""
var o=""
for(;++a<i;){var s=Number(arguments[a])
if(!isFinite(s)||s<0||s>1114111||q(s)!==s)throw RangeError("Invalid code point: "+s)
if(s<=65535)t.push(s)
else{r=55296+((s-=65536)>>10)
n=s%1024+56320
t.push(r,n)}if(a+1===i||t.length>e){o+=I.apply(null,t)
t.length=0}}return o},Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:B,configurable:!0,writable:!0}):String.fromCodePoint=B)
var I,q,B}(t)}).call(this,r(11).Buffer)},function(e,t,r){"use strict"
e.exports=function(e){!function(e){if(!e)throw new TypeError("Expected implementation")
var t=n.filter((function(t){return"function"!=typeof e[t]}))
if(t.length){var r="("+t.join(", ")+")"
throw new Error("Expected functions "+r+" to be implemented")}}(e)
var t={}
var r={removeSubsets:function(e){return function(e,t){var r,n,a,i=t.length
for(;--i>-1;){r=n=t[i]
t[i]=null
a=!0
for(;n;){if(t.indexOf(n)>-1){a=!1
t.splice(i,1)
break}n=e.getParent(n)}a&&(t[i]=r)}return t}(t,e)},existsOne:function(e,r){return function(e,t,r){return r.some((function(r){return!!e.isTag(r)&&(t(r)||e.existsOne(t,e.getChildren(r)))}))}(t,e,r)},getSiblings:function(e){return function(e,t){var r=e.getParent(t)
return r&&e.getChildren(r)}(t,e)},hasAttrib:function(e,r){return function(e,t,r){return void 0!==e.getAttributeValue(t,r)}(t,e,r)},findOne:function(e,r){return function(e,t,r){var n=null
for(var a=0,i=r.length;a<i&&!n;a++)if(t(r[a]))n=r[a]
else{var o=e.getChildren(r[a])
o&&o.length>0&&(n=e.findOne(t,o))}return n}(t,e,r)},findAll:function(e,r){return function(e,t,r){var n=[]
for(var a=0,i=r.length;a<i;a++)if(e.isTag(r[a])){t(r[a])&&n.push(r[a])
var o=e.getChildren(r[a])
o&&(n=n.concat(e.findAll(t,o)))}return n}(t,e,r)}}
Object.assign(t,r,e)
return t}
var n=["isTag","getAttributeValue","getChildren","getName","getParent","getText"]},function(e,t,r){
//! stable.js 0.1.8, https://github.com/Two-Screen/stable
//! © 2018 Angry Bytes and contributors. MIT licensed.
e.exports=function(){"use strict"
var e=function(e,r){return t(e.slice(),r)}
e.inplace=function(e,n){var a=t(e,n)
a!==e&&r(a,null,e.length,e)
return e}
function t(e,t){"function"!=typeof t&&(t=function(e,t){return String(e).localeCompare(t)})
var n=e.length
if(n<=1)return e
var a=new Array(n)
for(var i=1;i<n;i*=2){r(e,t,i,a)
var o=e
e=a
a=o}return e}var r=function(e,t,r,n){var a=e.length
var i=0
var o=2*r
var s,l,c
var u,f
for(s=0;s<a;s+=o){c=(l=s+r)+r
l>a&&(l=a)
c>a&&(c=a)
u=s
f=l
for(;;)if(u<l&&f<c)t(e[u],e[f])<=0?n[i++]=e[u++]:n[i++]=e[f++]
else if(u<l)n[i++]=e[u++]
else{if(!(f<c))break
n[i++]=e[f++]}}}
return e}()},function(e,t,r){"use strict"
t.byteLength=function(e){var t=c(e)
var r=t[0]
var n=t[1]
return 3*(r+n)/4-n}
t.toByteArray=function(e){var t
var r=c(e)
var n=r[0]
var o=r[1]
var s=new i(function(e,t,r){return 3*(t+r)/4-r}(0,n,o))
var l=0
var u=o>0?n-4:n
var f
for(f=0;f<u;f+=4){t=a[e.charCodeAt(f)]<<18|a[e.charCodeAt(f+1)]<<12|a[e.charCodeAt(f+2)]<<6|a[e.charCodeAt(f+3)]
s[l++]=t>>16&255
s[l++]=t>>8&255
s[l++]=255&t}if(2===o){t=a[e.charCodeAt(f)]<<2|a[e.charCodeAt(f+1)]>>4
s[l++]=255&t}if(1===o){t=a[e.charCodeAt(f)]<<10|a[e.charCodeAt(f+1)]<<4|a[e.charCodeAt(f+2)]>>2
s[l++]=t>>8&255
s[l++]=255&t}return s}
t.fromByteArray=function(e){var t
var r=e.length
var a=r%3
var i=[]
for(var o=0,s=r-a;o<s;o+=16383)i.push(u(e,o,o+16383>s?s:o+16383))
if(1===a){t=e[r-1]
i.push(n[t>>2]+n[t<<4&63]+"==")}else if(2===a){t=(e[r-2]<<8)+e[r-1]
i.push(n[t>>10]+n[t>>4&63]+n[t<<2&63]+"=")}return i.join("")}
var n=[]
var a=[]
var i="undefined"!=typeof Uint8Array?Uint8Array:Array
var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
for(var s=0,l=o.length;s<l;++s){n[s]=o[s]
a[o.charCodeAt(s)]=s}a["-".charCodeAt(0)]=62
a["_".charCodeAt(0)]=63
function c(e){var t=e.length
if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4")
var r=e.indexOf("=");-1===r&&(r=t)
return[r,r===t?0:4-r%4]}function u(e,t,r){var a
var i=[]
for(var o=t;o<r;o+=3){a=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2])
i.push(n[(s=a)>>18&63]+n[s>>12&63]+n[s>>6&63]+n[63&s])}var s
return i.join("")}},function(e,t){t.read=function(e,t,r,n,a){var i,o
var s=8*a-n-1
var l=(1<<s)-1
var c=l>>1
var u=-7
var f=r?a-1:0
var h=r?-1:1
var d=e[t+f]
f+=h
i=d&(1<<-u)-1
d>>=-u
u+=s
for(;u>0;i=256*i+e[t+f],f+=h,u-=8);o=i&(1<<-u)-1
i>>=-u
u+=n
for(;u>0;o=256*o+e[t+f],f+=h,u-=8);if(0===i)i=1-c
else{if(i===l)return o?NaN:1/0*(d?-1:1)
o+=Math.pow(2,n)
i-=c}return(d?-1:1)*o*Math.pow(2,i-n)}
t.write=function(e,t,r,n,a,i){var o,s,l
var c=8*i-a-1
var u=(1<<c)-1
var f=u>>1
var h=23===a?Math.pow(2,-24)-Math.pow(2,-77):0
var d=n?0:i-1
var p=n?1:-1
var m=t<0||0===t&&1/t<0?1:0
t=Math.abs(t)
if(isNaN(t)||t===1/0){s=isNaN(t)?1:0
o=u}else{o=Math.floor(Math.log(t)/Math.LN2)
if(t*(l=Math.pow(2,-o))<1){o--
l*=2}if((t+=o+f>=1?h/l:h*Math.pow(2,1-f))*l>=2){o++
l/=2}if(o+f>=u){s=0
o=u}else if(o+f>=1){s=(t*l-1)*Math.pow(2,a)
o+=f}else{s=t*Math.pow(2,f-1)*Math.pow(2,a)
o=0}}for(;a>=8;e[r+d]=255&s,d+=p,s/=256,a-=8);o=o<<a|s
c+=a
for(;c>0;e[r+d]=255&o,d+=p,o/=256,c-=8);e[r+d-p]|=128*m}},function(e,t,r){e.exports=a
var n=r(21).EventEmitter
r(6)(a,n)
a.Readable=r(22)
a.Writable=r(74)
a.Duplex=r(75)
a.Transform=r(76)
a.PassThrough=r(77)
a.Stream=a
function a(){n.call(this)}a.prototype.pipe=function(e,t){var r=this
function a(t){e.writable&&!1===e.write(t)&&r.pause&&r.pause()}r.on("data",a)
function i(){r.readable&&r.resume&&r.resume()}e.on("drain",i)
if(!(e._isStdio||t&&!1===t.end)){r.on("end",s)
r.on("close",l)}var o=!1
function s(){if(!o){o=!0
e.end()}}function l(){if(!o){o=!0
"function"==typeof e.destroy&&e.destroy()}}function c(e){u()
if(0===n.listenerCount(this,"error"))throw e}r.on("error",c)
e.on("error",c)
function u(){r.removeListener("data",a)
e.removeListener("drain",i)
r.removeListener("end",s)
r.removeListener("close",l)
r.removeListener("error",c)
e.removeListener("error",c)
r.removeListener("end",u)
r.removeListener("close",u)
e.removeListener("close",u)}r.on("end",u)
r.on("close",u)
e.on("close",u)
e.emit("pipe",r)
return e}},function(e,t){},function(e,t,r){"use strict"
var n=r(14).Buffer
var a=r(69)
e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)
this.head=null
this.tail=null
this.length=0}e.prototype.push=function(e){var t={data:e,next:null}
this.length>0?this.tail.next=t:this.head=t
this.tail=t;++this.length}
e.prototype.unshift=function(e){var t={data:e,next:this.head}
0===this.length&&(this.tail=t)
this.head=t;++this.length}
e.prototype.shift=function(){if(0!==this.length){var e=this.head.data
1===this.length?this.head=this.tail=null:this.head=this.head.next;--this.length
return e}}
e.prototype.clear=function(){this.head=this.tail=null
this.length=0}
e.prototype.join=function(e){if(0===this.length)return""
var t=this.head
var r=""+t.data
for(;t=t.next;)r+=e+t.data
return r}
e.prototype.concat=function(e){if(0===this.length)return n.alloc(0)
if(1===this.length)return this.head.data
var t=n.allocUnsafe(e>>>0)
var r=this.head
var a=0
for(;r;){i=t,o=a,r.data.copy(i,o)
a+=r.data.length
r=r.next}var i,o
return t}
return e}()
a&&a.inspect&&a.inspect.custom&&(e.exports.prototype[a.inspect.custom]=function(){var e=a.inspect({length:this.length})
return this.constructor.name+" "+e})},function(e,t){},function(e,t,r){(function(e){var n=void 0!==e&&e||"undefined"!=typeof self&&self||window
var a=Function.prototype.apply
t.setTimeout=function(){return new i(a.call(setTimeout,n,arguments),clearTimeout)}
t.setInterval=function(){return new i(a.call(setInterval,n,arguments),clearInterval)}
t.clearTimeout=t.clearInterval=function(e){e&&e.close()}
function i(e,t){this._id=e
this._clearFn=t}i.prototype.unref=i.prototype.ref=function(){}
i.prototype.close=function(){this._clearFn.call(n,this._id)}
t.enroll=function(e,t){clearTimeout(e._idleTimeoutId)
e._idleTimeout=t}
t.unenroll=function(e){clearTimeout(e._idleTimeoutId)
e._idleTimeout=-1}
t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId)
var t=e._idleTimeout
t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))}
r(71)
t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate
t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,r(5))},function(e,t,r){(function(e,t){!function(e,r){"use strict"
if(!e.setImmediate){var n=1
var a={}
var i=!1
var o=e.document
var s
var l=Object.getPrototypeOf&&Object.getPrototypeOf(e)
l=l&&l.setTimeout?l:e
"[object process]"==={}.toString.call(e.process)?s=function(e){t.nextTick((function(){f(e)}))}:function(){if(e.postMessage&&!e.importScripts){var t=!0
var r=e.onmessage
e.onmessage=function(){t=!1}
e.postMessage("","*")
e.onmessage=r
return t}}()?function(){var t="setImmediate$"+Math.random()+"$"
var r=function(r){r.source===e&&"string"==typeof r.data&&0===r.data.indexOf(t)&&f(+r.data.slice(t.length))}
e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r)
s=function(r){e.postMessage(t+r,"*")}}():e.MessageChannel?function(){var e=new MessageChannel
e.port1.onmessage=function(e){f(e.data)}
s=function(t){e.port2.postMessage(t)}}():o&&"onreadystatechange"in o.createElement("script")?(c=o.documentElement,s=function(e){var t=o.createElement("script")
t.onreadystatechange=function(){f(e)
t.onreadystatechange=null
c.removeChild(t)
t=null}
c.appendChild(t)}):s=function(e){setTimeout(f,0,e)}
var c
l.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e))
var t=new Array(arguments.length-1)
for(var r=0;r<t.length;r++)t[r]=arguments[r+1]
var i={callback:e,args:t}
a[n]=i
s(n)
return n++}
l.clearImmediate=u}function u(e){delete a[e]}function f(e){if(i)setTimeout(f,0,e)
else{var t=a[e]
if(t){i=!0
try{!function(e){var t=e.callback
var r=e.args
switch(r.length){case 0:t()
break
case 1:t(r[0])
break
case 2:t(r[0],r[1])
break
case 3:t(r[0],r[1],r[2])
break
default:t.apply(void 0,r)}}(t)}finally{u(e)
i=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,r(5),r(12))},function(e,t,r){(function(t){e.exports=function(e,t){if(r("noDeprecation"))return e
var n=!1
return function(){if(!n){if(r("throwDeprecation"))throw new Error(t)
r("traceDeprecation")?console.trace(t):console.warn(t)
n=!0}return e.apply(this,arguments)}}
function r(e){try{if(!t.localStorage)return!1}catch(e){return!1}var r=t.localStorage[e]
return null!=r&&"true"===String(r).toLowerCase()}}).call(this,r(5))},function(e,t,r){"use strict"
e.exports=i
var n=r(39)
var a=Object.create(r(8))
a.inherits=r(6)
a.inherits(i,n)
function i(e){if(!(this instanceof i))return new i(e)
n.call(this,e)}i.prototype._transform=function(e,t,r){r(null,e)}},function(e,t,r){e.exports=r(23)},function(e,t,r){e.exports=r(3)},function(e,t,r){e.exports=r(22).Transform},function(e,t,r){e.exports=r(22).PassThrough},function(e,t,r){var n=e.exports;[r(79),r(87),r(88),r(89),r(90),r(91)].forEach((function(e){Object.keys(e).forEach((function(t){n[t]=e[t].bind(n)}))}))},function(e,t,r){var n=r(25),a=r(80),i=n.isTag
e.exports={getInnerHTML:function(e,t){return e.children?e.children.map((function(e){return a(e,t)})).join(""):""},getOuterHTML:a,getText:function e(t){return Array.isArray(t)?t.map(e).join(""):i(t)?"br"===t.name?"\n":e(t.children):t.type===n.CDATA?e(t.children):t.type===n.Text?t.data:""}}},function(e,t,r){var n=r(81)
var a=r(82)
var i=r(86)
i.elementNames.__proto__=null
i.attributeNames.__proto__=null
var o={__proto__:null,style:!0,script:!0,xmp:!0,iframe:!0,noembed:!0,noframes:!0,plaintext:!0,noscript:!0}
var s={__proto__:null,area:!0,base:!0,basefont:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}
var l=e.exports=function(e,t){Array.isArray(e)||e.cheerio||(e=[e])
t=t||{}
var r=""
for(var a=0;a<e.length;a++){var i=e[a]
"root"===i.type?r+=l(i.children,t):n.isTag(i)?r+=u(i,t):i.type===n.Directive?r+=f(i):i.type===n.Comment?r+=p(i):i.type===n.CDATA?r+=d(i):r+=h(i,t)}return r}
var c=["mi","mo","mn","ms","mtext","annotation-xml","foreignObject","desc","title"]
function u(e,t){if("foreign"===t.xmlMode){e.name=i.elementNames[e.name]||e.name
e.parent&&c.indexOf(e.parent.name)>=0&&(t=Object.assign({},t,{xmlMode:!1}))}!t.xmlMode&&["svg","math"].indexOf(e.name)>=0&&(t=Object.assign({},t,{xmlMode:"foreign"}))
var r="<"+e.name
var n=function(e,t){if(e){var r=""
var n
for(var o in e){n=e[o]
r&&(r+=" ")
"foreign"===t.xmlMode&&(o=i.attributeNames[o]||o)
r+=o;(null!==n&&""!==n||t.xmlMode)&&(r+='="'+(t.decodeEntities?a.encodeXML(n):n.replace(/\"/g,"&quot;"))+'"')}return r}}(e.attribs,t)
n&&(r+=" "+n)
if(!t.xmlMode||e.children&&0!==e.children.length){r+=">"
e.children&&(r+=l(e.children,t))
s[e.name]&&!t.xmlMode||(r+="</"+e.name+">")}else r+="/>"
return r}function f(e){return"<"+e.data+">"}function h(e,t){var r=e.data||""
!t.decodeEntities||e.parent&&e.parent.name in o||(r=a.encodeXML(r))
return r}function d(e){return"<![CDATA["+e.children[0].data+"]]>"}function p(e){return"\x3c!--"+e.data+"--\x3e"}},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
t.isTag=function(e){return"tag"===e.type||"script"===e.type||"style"===e.type}
t.Text="text"
t.Directive="directive"
t.Comment="comment"
t.Script="script"
t.Style="style"
t.Tag="tag"
t.CDATA="cdata"
t.Doctype="doctype"},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n=r(40)
var a=r(43)
t.decode=function(e,t){return(!t||t<=0?n.decodeXML:n.decodeHTML)(e)}
t.decodeStrict=function(e,t){return(!t||t<=0?n.decodeXML:n.decodeHTMLStrict)(e)}
t.encode=function(e,t){return(!t||t<=0?a.encodeXML:a.encodeHTML)(e)}
var i=r(43)
t.encodeXML=i.encodeXML
t.encodeHTML=i.encodeHTML
t.escape=i.escape
t.encodeHTML4=i.encodeHTML
t.encodeHTML5=i.encodeHTML
var o=r(40)
t.decodeXML=o.decodeXML
t.decodeHTML=o.decodeHTML
t.decodeHTMLStrict=o.decodeHTMLStrict
t.decodeHTML4=o.decodeHTML
t.decodeHTML5=o.decodeHTML
t.decodeHTML4Strict=o.decodeHTMLStrict
t.decodeHTML5Strict=o.decodeHTMLStrict
t.decodeXMLStrict=o.decodeXML},function(e){e.exports=JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}')},function(e,t,r){"use strict"
var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}}
Object.defineProperty(t,"__esModule",{value:!0})
var a=n(r(85))
t.default=function(e){if(e>=55296&&e<=57343||e>1114111)return"�"
e in a.default&&(e=a.default[e])
var t=""
if(e>65535){e-=65536
t+=String.fromCharCode(e>>>10&1023|55296)
e=56320|1023&e}return t+String.fromCharCode(e)}},function(e){e.exports=JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}')},function(e){e.exports=JSON.parse('{"elementNames":{"altglyph":"altGlyph","altglyphdef":"altGlyphDef","altglyphitem":"altGlyphItem","animatecolor":"animateColor","animatemotion":"animateMotion","animatetransform":"animateTransform","clippath":"clipPath","feblend":"feBlend","fecolormatrix":"feColorMatrix","fecomponenttransfer":"feComponentTransfer","fecomposite":"feComposite","feconvolvematrix":"feConvolveMatrix","fediffuselighting":"feDiffuseLighting","fedisplacementmap":"feDisplacementMap","fedistantlight":"feDistantLight","fedropshadow":"feDropShadow","feflood":"feFlood","fefunca":"feFuncA","fefuncb":"feFuncB","fefuncg":"feFuncG","fefuncr":"feFuncR","fegaussianblur":"feGaussianBlur","feimage":"feImage","femerge":"feMerge","femergenode":"feMergeNode","femorphology":"feMorphology","feoffset":"feOffset","fepointlight":"fePointLight","fespecularlighting":"feSpecularLighting","fespotlight":"feSpotLight","fetile":"feTile","feturbulence":"feTurbulence","foreignobject":"foreignObject","glyphref":"glyphRef","lineargradient":"linearGradient","radialgradient":"radialGradient","textpath":"textPath"},"attributeNames":{"definitionurl":"definitionURL","attributename":"attributeName","attributetype":"attributeType","basefrequency":"baseFrequency","baseprofile":"baseProfile","calcmode":"calcMode","clippathunits":"clipPathUnits","diffuseconstant":"diffuseConstant","edgemode":"edgeMode","filterunits":"filterUnits","glyphref":"glyphRef","gradienttransform":"gradientTransform","gradientunits":"gradientUnits","kernelmatrix":"kernelMatrix","kernelunitlength":"kernelUnitLength","keypoints":"keyPoints","keysplines":"keySplines","keytimes":"keyTimes","lengthadjust":"lengthAdjust","limitingconeangle":"limitingConeAngle","markerheight":"markerHeight","markerunits":"markerUnits","markerwidth":"markerWidth","maskcontentunits":"maskContentUnits","maskunits":"maskUnits","numoctaves":"numOctaves","pathlength":"pathLength","patterncontentunits":"patternContentUnits","patterntransform":"patternTransform","patternunits":"patternUnits","pointsatx":"pointsAtX","pointsaty":"pointsAtY","pointsatz":"pointsAtZ","preservealpha":"preserveAlpha","preserveaspectratio":"preserveAspectRatio","primitiveunits":"primitiveUnits","refx":"refX","refy":"refY","repeatcount":"repeatCount","repeatdur":"repeatDur","requiredextensions":"requiredExtensions","requiredfeatures":"requiredFeatures","specularconstant":"specularConstant","specularexponent":"specularExponent","spreadmethod":"spreadMethod","startoffset":"startOffset","stddeviation":"stdDeviation","stitchtiles":"stitchTiles","surfacescale":"surfaceScale","systemlanguage":"systemLanguage","tablevalues":"tableValues","targetx":"targetX","targety":"targetY","textlength":"textLength","viewbox":"viewBox","viewtarget":"viewTarget","xchannelselector":"xChannelSelector","ychannelselector":"yChannelSelector","zoomandpan":"zoomAndPan"}}')},function(e,t){var r=t.getChildren=function(e){return e.children}
var n=t.getParent=function(e){return e.parent}
t.getSiblings=function(e){var t=n(e)
return t?r(t):[e]}
t.getAttributeValue=function(e,t){return e.attribs&&e.attribs[t]}
t.hasAttrib=function(e,t){return!!e.attribs&&hasOwnProperty.call(e.attribs,t)}
t.getName=function(e){return e.name}},function(e,t){t.removeElement=function(e){e.prev&&(e.prev.next=e.next)
e.next&&(e.next.prev=e.prev)
if(e.parent){var t=e.parent.children
t.splice(t.lastIndexOf(e),1)}}
t.replaceElement=function(e,t){var r=t.prev=e.prev
r&&(r.next=t)
var n=t.next=e.next
n&&(n.prev=t)
var a=t.parent=e.parent
if(a){var i=a.children
i[i.lastIndexOf(e)]=t}}
t.appendChild=function(e,t){t.parent=e
if(1!==e.children.push(t)){var r=e.children[e.children.length-2]
r.next=t
t.prev=r
t.next=null}}
t.append=function(e,t){var r=e.parent,n=e.next
t.next=n
t.prev=e
e.next=t
t.parent=r
if(n){n.prev=t
if(r){var a=r.children
a.splice(a.lastIndexOf(n),0,t)}}else r&&r.children.push(t)}
t.prepend=function(e,t){var r=e.parent
if(r){var n=r.children
n.splice(n.lastIndexOf(e),0,t)}e.prev&&(e.prev.next=t)
t.parent=r
t.prev=e.prev
t.next=e
e.prev=t}},function(e,t,r){var n=r(25).isTag
e.exports={filter:function(e,t,r,n){Array.isArray(t)||(t=[t])
"number"==typeof n&&isFinite(n)||(n=1/0)
return a(e,t,!1!==r,n)},find:a,findOneChild:function(e,t){for(var r=0,n=t.length;r<n;r++)if(e(t[r]))return t[r]
return null},findOne:function e(t,r){var a=null
for(var i=0,o=r.length;i<o&&!a;i++)n(r[i])&&(t(r[i])?a=r[i]:r[i].children.length>0&&(a=e(t,r[i].children)))
return a},existsOne:function e(t,r){for(var a=0,i=r.length;a<i;a++)if(n(r[a])&&(t(r[a])||r[a].children.length>0&&e(t,r[a].children)))return!0
return!1},findAll:function(e,t){var r=[]
var a=t.slice()
for(;a.length;){var i=a.shift()
if(n(i)){i.children&&i.children.length>0&&a.unshift.apply(a,i.children)
e(i)&&r.push(i)}}return r}}
function a(e,t,r,n){var i,o=[]
for(var s=0,l=t.length;s<l;s++){if(e(t[s])){o.push(t[s])
if(--n<=0)break}i=t[s].children
if(r&&i&&i.length>0){i=a(e,i,r,n)
o=o.concat(i)
if((n-=i.length)<=0)break}}return o}},function(e,t,r){var n=r(25)
var a=t.isTag=n.isTag
t.testElement=function(e,t){for(var r in e)if(e.hasOwnProperty(r))if("tag_name"===r){if(!a(t)||!e.tag_name(t.name))return!1}else if("tag_type"===r){if(!e.tag_type(t.type))return!1}else if("tag_contains"===r){if(a(t)||!e.tag_contains(t.data))return!1}else if(!t.attribs||!e[r](t.attribs[r]))return!1
return!0}
var i={tag_name:function(e){return"function"==typeof e?function(t){return a(t)&&e(t.name)}:"*"===e?a:function(t){return a(t)&&t.name===e}},tag_type:function(e){return"function"==typeof e?function(t){return e(t.type)}:function(t){return t.type===e}},tag_contains:function(e){return"function"==typeof e?function(t){return!a(t)&&e(t.data)}:function(t){return!a(t)&&t.data===e}}}
function o(e,t){return"function"==typeof t?function(r){return r.attribs&&t(r.attribs[e])}:function(r){return r.attribs&&r.attribs[e]===t}}function s(e,t){return function(r){return e(r)||t(r)}}t.getElements=function(e,t,r,n){var a=Object.keys(e).map((function(t){var r=e[t]
return t in i?i[t](r):o(t,r)}))
return 0===a.length?[]:this.filter(a.reduce(s),t,r,n)}
t.getElementById=function(e,t,r){Array.isArray(t)||(t=[t])
return this.findOne(o("id",e),t,!1!==r)}
t.getElementsByTagName=function(e,t,r,n){return this.filter(i.tag_name(e),t,r,n)}
t.getElementsByTagType=function(e,t,r,n){return this.filter(i.tag_type(e),t,r,n)}},function(e,t){t.removeSubsets=function(e){var t,r,n,a=e.length
for(;--a>-1;){t=r=e[a]
e[a]=null
n=!0
for(;r;){if(e.indexOf(r)>-1){n=!1
e.splice(a,1)
break}r=r.parent}n&&(e[a]=t)}return e}
var r=t.compareDocumentPosition=function(e,t){var r=[]
var n=[]
var a,i,o,s,l,c
if(e===t)return 0
a=e
for(;a;){r.unshift(a)
a=a.parent}a=t
for(;a;){n.unshift(a)
a=a.parent}c=0
for(;r[c]===n[c];)c++
if(0===c)return 1
o=(i=r[c-1]).children
s=r[c]
l=n[c]
return o.indexOf(s)>o.indexOf(l)?i===t?20:4:i===e?10:2}
t.uniqueSort=function(e){var t,n,a=e.length
e=e.slice()
for(;--a>-1;){t=e[a];(n=e.indexOf(t))>-1&&n<a&&e.splice(a,1)}e.sort((function(e,t){var n=r(e,t)
return 2&n?-1:4&n?1:0}))
return e}},function(e,t,r){e.exports=h
var n=r(93).parse
var a=r(9)
var i=r(95)
var o=r(45)
var s=r(96)
var l=r(47)
var c=a.trueFunc
var u=a.falseFunc
var f=l.filters
function h(e,t,r){return d(p(e,t,r),t)}function d(e,t){var r=t.adapter
return function(t){return r.isTag(t)&&e(t)}}function p(e,t,r){return x(n(e,t),t,r)}function m(e){return"pseudo"===e.type&&("scope"===e.name||Array.isArray(e.data)&&e.data.some((function(e){return e.some(m)})))}var g={type:"descendant"}
var v={type:"_flexibleDescendant"}
var b={type:"pseudo",name:"scope"}
var y={}
function x(e,t,r){(e=e.filter((function(e){return e.length>0}))).forEach(i)
var n=Array.isArray(r);(r=t&&t.context||r)&&!n&&(r=[r])
!function(e,t,r){var n=t.adapter
var a=!!r&&!!r.length&&r.every((function(e){return e===y||!!n.getParent(e)}))
e.forEach((function(e){if(e.length>0&&k(e[0])&&"descendant"!==e[0].type);else{if(!a||(Array.isArray(e)?e.some(m):m(e)))return
e.unshift(g)}e.unshift(b)}))}(e,t,r)
var a=!1
var o=e.map((function(e){if(e[0]&&e[1]&&"scope"===e[0].name){var i=e[1].type
n&&"descendant"===i?e[1]=v:"adjacent"!==i&&"sibling"!==i||(a=!0)}return function(e,t,r){return e.reduce((function(e,n){if(e===u)return e
if(!(n.type in s))throw new Error("Rule type "+n.type+" is not supported by css-select")
return s[n.type](e,n,t,r)}),t&&t.rootFunc||c)}(e,t,r)})).reduce(w,u)
o.shouldTestNextSiblings=a
return o}function k(e){return o[e.type]<0}function w(e,t){return t===u||e===c?e:e===u||t===c?t:function(r){return e(r)||t(r)}}function S(e){return e.some(k)}f.not=function(e,t,r,n){var a={xmlMode:!(!r||!r.xmlMode),strict:!(!r||!r.strict),adapter:r.adapter}
if(a.strict&&(t.length>1||t.some(S)))throw new Error("complex selectors in :not aren't allowed in strict mode")
var i=x(t,a,n)
return i===u?e:i===c?u:function(t){return!i(t)&&e(t)}}
f.has=function(e,t,r){var n=r.adapter
var a={xmlMode:!(!r||!r.xmlMode),strict:!(!r||!r.strict),adapter:n}
var i=t.some(S)?[y]:null
var o=x(t,a,i)
if(o===u)return u
if(o===c)return function(t){return n.getChildren(t).some(n.isTag)&&e(t)}
o=d(o,r)
return i?function(t){return e(t)&&(i[0]=t,n.existsOne(o,n.getChildren(t)))}:function(t){return e(t)&&n.existsOne(o,n.getChildren(t))}}
f.matches=function(e,t,r,n){return x(t,{xmlMode:!(!r||!r.xmlMode),strict:!(!r||!r.strict),rootFunc:e,adapter:r.adapter},n)}
h.compileToken=x
h.compileUnsafe=p
h.Pseudos=l},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
!function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(44))
var n=r(44)
t.parse=n.default
var a=r(94)
t.stringify=a.default},function(e,t,r){"use strict"
Object.defineProperty(t,"__esModule",{value:!0})
var n={equals:"",element:"~",start:"^",end:"$",any:"*",not:"!",hyphen:"|"}
var a={child:" > ",parent:" < ",sibling:" ~ ",adjacent:" + ",descendant:" ",universal:"*"}
function i(e){return e.map(o).join(", ")}t.default=i
function o(e){return e.map(s).join("")}function s(e){if(e.type in a)return a[e.type]
if("tag"===e.type)return e.name
if("pseudo-element"===e.type)return"::"+e.name
if("attribute"===e.type)return"exists"===e.action?"["+e.name+"]":"id"!==e.name||"equals"!==e.action||e.ignoreCase?"class"!==e.name||"element"!==e.action||e.ignoreCase?"["+e.name+n[e.action]+"='"+e.value+"'"+(e.ignoreCase?"i":"")+"]":"."+e.value:"#"+e.value
if("pseudo"===e.type)return null===e.data?":"+e.name:"string"==typeof e.data?":"+e.name+"("+e.data+")":":"+e.name+"("+i(e.data)+")"
throw new Error("Unknown type")}},function(e,t,r){e.exports=function(e){var t=e.map(i)
for(var r=1;r<e.length;r++){var n=t[r]
if(!(n<0))for(var a=r-1;a>=0&&n<t[a];a--){var o=e[a+1]
e[a+1]=e[a]
e[a]=o
t[a+1]=t[a]
t[a]=n}}}
var n=r(45)
var a={__proto__:null,exists:10,equals:8,not:7,start:6,end:6,any:5,hyphen:4,element:4}
function i(e){var t=n[e.type]
if(t===n.attribute){(t=a[e.action])===a.equals&&"id"===e.name&&(t=9)
e.ignoreCase&&(t>>=1)}else if(t===n.pseudo)if(e.data)if("has"===e.name||"contains"===e.name)t=0
else if("matches"===e.name||"not"===e.name){t=0
for(var r=0;r<e.data.length;r++)if(1===e.data[r].length){var o=i(e.data[r][0])
if(0===o){t=0
break}o>t&&(t=o)}e.data.length>1&&t>0&&(t-=1)}else t=1
else t=3
return t}},function(e,t,r){var n=r(46)
var a=r(47)
e.exports={__proto__:null,attribute:n.compile,pseudo:a.compile,tag:function(e,t,r){var n=t.name
var a=r.adapter
return function(t){return a.getName(t)===n&&e(t)}},descendant:function(e,t,r){var n="undefined"!=typeof WeakSet?new WeakSet:null
var a=r.adapter
return function(t){var r=!1
for(;!r&&(t=a.getParent(t));)n&&n.has(t)||!(r=e(t))&&n&&n.add(t)
return r}},_flexibleDescendant:function(e,t,r){var n=r.adapter
return function(t){var r=e(t)
for(;!r&&(t=n.getParent(t));)r=e(t)
return r}},parent:function(e,t,r){if(r&&r.strict)throw new Error("Parent selector isn't part of CSS3")
var n=r.adapter
return function(e){return n.getChildren(e).some(a)}
function a(t){return n.isTag(t)&&e(t)}},child:function(e,t,r){var n=r.adapter
return function(t){var r=n.getParent(t)
return!!r&&e(r)}},sibling:function(e,t,r){var n=r.adapter
return function(t){var r=n.getSiblings(t)
for(var a=0;a<r.length;a++)if(n.isTag(r[a])){if(r[a]===t)break
if(e(r[a]))return!0}return!1}},adjacent:function(e,t,r){var n=r.adapter
return function(t){var r,a=n.getSiblings(t)
for(var i=0;i<a.length;i++)if(n.isTag(a[i])){if(a[i]===t)break
r=a[i]}return!!r&&e(r)}},universal:function(e){return e}}},function(e,t,r){var n=r(98),a=r(99)
e.exports=function(e){return a(n(e))}
e.exports.parse=n
e.exports.compile=a},function(e,t){e.exports=function(e){if("even"===(e=e.trim().toLowerCase()))return[2,0]
if("odd"===e)return[2,1]
var t=e.match(r)
if(!t)throw new SyntaxError("n-th rule couldn't be parsed ('"+e+"')")
var n
if(t[1]){n=parseInt(t[1],10)
isNaN(n)&&(n="-"===t[1].charAt(0)?-1:1)}else n=0
return[n,t[3]?parseInt((t[2]||"")+t[3],10):0]}
var r=/^([+\-]?\d*n)?\s*(?:([+\-]?)\s*(\d+))?$/},function(e,t,r){e.exports=function(e){var t=e[0],r=e[1]-1
if(r<0&&t<=0)return i
if(-1===t)return function(e){return e<=r}
if(0===t)return function(e){return e===r}
if(1===t)return r<0?a:function(e){return e>=r}
var n=r%t
n<0&&(n+=t)
if(t>1)return function(e){return e>=r&&e%t===n}
t*=-1
return function(e){return e<=r&&e%t===n}}
var n=r(9),a=n.trueFunc,i=n.falseFunc},function(e,t,r){e.exports=r(101).create(function(){var e={}
for(var t=0;t<arguments.length;t++){var r=arguments[t]
for(var n in r)e[n]=r[n]}return e}(r(127),r(168),r(192)))},function(e,t,r){var n=r(7)
var a=r(48)
var i=r(15)
var o=r(102)
var s=r(112)
var l=r(0)
var c=r(113)
var u=r(116)
var f=r(123)
var h=r(124)
var d=r(125)
var p=r(28)
var m=r(126)
t.create=function(e){return function e(t){var r=c(t)
var g=h(t)
var v=u(t)
var b=f(g)
var y={List:n,SyntaxError:a,TokenStream:i,Lexer:o,vendorPrefix:p.vendorPrefix,keyword:p.keyword,property:p.property,isCustomProperty:p.isCustomProperty,definitionSyntax:s,lexer:null,createLexer:function(e){return new o(e,y,y.lexer.structure)},tokenize:l,parse:r,walk:g,generate:v,find:g.find,findLast:g.findLast,findAll:g.findAll,clone:d,fromPlainObject:b.fromPlainObject,toPlainObject:b.toPlainObject,createSyntax:function(t){return e(m({},t))},fork:function(r){var n=m({},t)
return e("function"==typeof r?r(n,Object.assign):m(n,r))}}
y.lexer=new o({generic:!0,types:t.types,atrules:t.atrules,properties:t.properties,node:t.node},y)
return y}(m({},e))}},function(e,t,r){var n=r(50).SyntaxReferenceError
var a=r(50).MatchError
var i=r(28)
var o=r(103)
var s=r(29)
var l=r(27)
var c=r(53)
var u=r(107)
var f=r(54).buildMatchGraph
var h=r(108).matchAsTree
var d=r(109)
var p=r(110)
var m=r(111).getStructureFromConfig
var g=f("inherit | initial | unset")
var v=f("inherit | initial | unset | <-ms-legacy-expression>")
function b(e,t,r){var n={}
for(var a in e)e[a].syntax&&(n[a]=r?e[a].syntax:l(e[a].syntax,{compact:t}))
return n}function y(e,t,r){return{matched:e,iterations:r,error:t,getTrace:d.getTrace,isType:d.isType,isProperty:d.isProperty,isKeyword:d.isKeyword}}function x(e,t,r,n){var i=u(r,e.syntax)
var o
if(function(e){for(var t=0;t<e.length;t++)if("var("===e[t].value.toLowerCase())return!0
return!1}(i))return y(null,new Error("Matching for a tree with var() is not supported"))
n&&(o=h(i,e.valueCommonSyntax,e))
return n&&o.match||(o=h(i,t.match,e)).match?y(o.match,null,o.iterations):y(null,new a(o.reason,t.syntax,r,o),o.iterations)}var k=function(e,t,r){this.valueCommonSyntax=g
this.syntax=t
this.generic=!1
this.atrules={}
this.properties={}
this.types={}
this.structure=r||m(e)
if(e){if(e.types)for(var n in e.types)this.addType_(n,e.types[n])
if(e.generic){this.generic=!0
for(var n in o)this.addType_(n,o[n])}if(e.atrules)for(var n in e.atrules)this.addAtrule_(n,e.atrules[n])
if(e.properties)for(var n in e.properties)this.addProperty_(n,e.properties[n])}}
k.prototype={structure:{},checkStructure:function(e){function t(e,t){n.push({node:e,message:t})}var r=this.structure
var n=[]
this.syntax.walk(e,(function(e){r.hasOwnProperty(e.type)?r[e.type].check(e,t):t(e,"Unknown node type `"+e.type+"`")}))
return!!n.length&&n},createDescriptor:function(e,t,r){var n={type:t,name:r}
var a={type:t,name:r,syntax:null,match:null}
if("function"==typeof e)a.match=f(e,n)
else{"string"==typeof e?Object.defineProperty(a,"syntax",{get:function(){Object.defineProperty(a,"syntax",{value:s(e)})
return a.syntax}}):a.syntax=e
Object.defineProperty(a,"match",{get:function(){Object.defineProperty(a,"match",{value:f(a.syntax,n)})
return a.match}})}return a},addAtrule_:function(e,t){this.atrules[e]={prelude:t.prelude?this.createDescriptor(t.prelude,"AtrulePrelude",e):null,descriptors:t.descriptors?Object.keys(t.descriptors).reduce((e,r)=>{e[r]=this.createDescriptor(t.descriptors[r],"AtruleDescriptor",r)
return e},{}):null}},addProperty_:function(e,t){this.properties[e]=this.createDescriptor(t,"Property",e)},addType_:function(e,t){this.types[e]=this.createDescriptor(t,"Type",e)
t===o["-ms-legacy-expression"]&&(this.valueCommonSyntax=v)},matchAtrulePrelude:function(e,t){var r=i.keyword(e)
var a=r.vendor?this.getAtrulePrelude(r.name)||this.getAtrulePrelude(r.basename):this.getAtrulePrelude(r.name)
return a?x(this,a,t,!0):r.basename in this.atrules?y(null,new Error("At-rule `"+e+"` should not contain a prelude")):y(null,new n("Unknown at-rule",e))},matchAtruleDescriptor:function(e,t,r){var a=i.keyword(e)
var o=i.keyword(t)
var s=a.vendor?this.atrules[a.name]||this.atrules[a.basename]:this.atrules[a.name]
if(!s)return y(null,new n("Unknown at-rule",e))
if(!s.descriptors)return y(null,new Error("At-rule `"+e+"` has no known descriptors"))
var l=o.vendor?s.descriptors[o.name]||s.descriptors[o.basename]:s.descriptors[o.name]
return l?x(this,l,r,!0):y(null,new n("Unknown at-rule descriptor",t))},matchDeclaration:function(e){return"Declaration"!==e.type?y(null,new Error("Not a Declaration node")):this.matchProperty(e.property,e.value)},matchProperty:function(e,t){var r=i.property(e)
if(r.custom)return y(null,new Error("Lexer matching doesn't applicable for custom properties"))
var a=r.vendor?this.getProperty(r.name)||this.getProperty(r.basename):this.getProperty(r.name)
return a?x(this,a,t,!0):y(null,new n("Unknown property",e))},matchType:function(e,t){var r=this.getType(e)
return r?x(this,r,t,!1):y(null,new n("Unknown type",e))},match:function(e,t){if(!("string"==typeof e||e&&e.type))return y(null,new n("Bad syntax"))
"string"!=typeof e&&e.match||(e=this.createDescriptor(e,"Type","anonymous"))
return x(this,e,t,!1)},findValueFragments:function(e,t,r,n){return p.matchFragments(this,t,this.matchProperty(e,t),r,n)},findDeclarationValueFragments:function(e,t,r){return p.matchFragments(this,e.value,this.matchDeclaration(e),t,r)},findAllFragments:function(e,t,r){var n=[]
this.syntax.walk(e,{visit:"Declaration",enter:function(e){n.push.apply(n,this.findDeclarationValueFragments(e,t,r))}.bind(this)})
return n},getAtrulePrelude:function(e){return this.atrules.hasOwnProperty(e)?this.atrules[e].prelude:null},getAtruleDescriptor:function(e,t){return this.atrules.hasOwnProperty(e)&&this.atrules.declarators&&this.atrules[e].declarators[t]||null},getProperty:function(e){return this.properties.hasOwnProperty(e)?this.properties[e]:null},getType:function(e){return this.types.hasOwnProperty(e)?this.types[e]:null},validate:function(){function e(n,a,i,o){if(i.hasOwnProperty(a))return i[a]
i[a]=!1
null!==o.syntax&&c(o.syntax,(function(o){if("Type"===o.type||"Property"===o.type){var s="Type"===o.type?n.types:n.properties
var l="Type"===o.type?t:r
s.hasOwnProperty(o.name)&&!e(n,o.name,l,s[o.name])||(i[a]=!0)}}),this)}var t={}
var r={}
for(var n in this.types)e(this,n,t,this.types[n])
for(var n in this.properties)e(this,n,r,this.properties[n])
t=Object.keys(t).filter((function(e){return t[e]}))
r=Object.keys(r).filter((function(e){return r[e]}))
return t.length||r.length?{types:t,properties:r}:null},dump:function(e,t){return{generic:this.generic,types:b(this.types,!t,e),properties:b(this.properties,!t,e)}},toString:function(){return JSON.stringify(this.dump())}}
e.exports=k},function(e,t,r){var n=r(0)
var a=n.isIdentifierStart
var i=n.isHexDigit
var o=n.isDigit
var s=n.cmpStr
var l=n.consumeNumber
var c=n.TYPE
var u=r(104)
var f=r(105)
var h=["unset","initial","inherit"]
var d=["calc(","-moz-calc(","-webkit-calc("]
function p(e,t){return t<e.length?e.charCodeAt(t):0}function m(e,t){return s(e,0,e.length,t)}function g(e,t){for(var r=0;r<t.length;r++)if(m(e,t[r]))return!0
return!1}function v(e,t){return t===e.length-2&&92===e.charCodeAt(t)&&o(e.charCodeAt(t+1))}function b(e,t,r){if(e&&"Range"===e.type){var n=Number(void 0!==r&&r!==t.length?t.substr(0,r):t)
if(isNaN(n))return!0
if(null!==e.min&&n<e.min)return!0
if(null!==e.max&&n>e.max)return!0}return!1}function y(e,t){var r=e.index
var n=0
do{n++
if(e.balance<=r)break}while(e=t(n))
return n}function x(e){return function(t,r,n){return null===t?0:t.type===c.Function&&g(t.value,d)?y(t,r):e(t,r,n)}}function k(e){return function(t){return null===t||t.type!==e?0:1}}function w(e){return function(t,r,n){if(null===t||t.type!==c.Dimension)return 0
var a=l(t.value,0)
if(null!==e){var i=t.value.indexOf("\\",a)
var o=-1!==i&&v(t.value,i)?t.value.substring(a,i):t.value.substr(a)
if(!1===e.hasOwnProperty(o.toLowerCase()))return 0}return b(n,t.value,a)?0:1}}function S(e){"function"!=typeof e&&(e=()=>0)
return function(t,r,n){return null!==t&&t.type===c.Number&&0===Number(t.value)?1:e(t,r,n)}}e.exports={"ident-token":k(c.Ident),"function-token":k(c.Function),"at-keyword-token":k(c.AtKeyword),"hash-token":k(c.Hash),"string-token":k(c.String),"bad-string-token":k(c.BadString),"url-token":k(c.Url),"bad-url-token":k(c.BadUrl),"delim-token":k(c.Delim),"number-token":k(c.Number),"percentage-token":k(c.Percentage),"dimension-token":k(c.Dimension),"whitespace-token":k(c.WhiteSpace),"CDO-token":k(c.CDO),"CDC-token":k(c.CDC),"colon-token":k(c.Colon),"semicolon-token":k(c.Semicolon),"comma-token":k(c.Comma),"[-token":k(c.LeftSquareBracket),"]-token":k(c.RightSquareBracket),"(-token":k(c.LeftParenthesis),")-token":k(c.RightParenthesis),"{-token":k(c.LeftCurlyBracket),"}-token":k(c.RightCurlyBracket),string:k(c.String),ident:k(c.Ident),"custom-ident":function(e){if(null===e||e.type!==c.Ident)return 0
var t=e.value.toLowerCase()
return g(t,h)||m(t,"default")?0:1},"custom-property-name":function(e){return null===e||e.type!==c.Ident||45!==p(e.value,0)||45!==p(e.value,1)?0:1},"hex-color":function(e){if(null===e||e.type!==c.Hash)return 0
var t=e.value.length
if(4!==t&&5!==t&&7!==t&&9!==t)return 0
for(var r=1;r<t;r++)if(!i(e.value.charCodeAt(r)))return 0
return 1},"id-selector":function(e){return null===e||e.type!==c.Hash?0:a(p(e.value,1),p(e.value,2),p(e.value,3))?1:0},"an-plus-b":u,urange:f,"declaration-value":function(e,t){if(!e)return 0
var r=0
var n=0
var a=e.index
e:do{switch(e.type){case c.BadString:case c.BadUrl:break e
case c.RightCurlyBracket:case c.RightParenthesis:case c.RightSquareBracket:if(e.balance>e.index||e.balance<a)break e
n--
break
case c.Semicolon:if(0===n)break e
break
case c.Delim:if("!"===e.value&&0===n)break e
break
case c.Function:case c.LeftParenthesis:case c.LeftSquareBracket:case c.LeftCurlyBracket:n++}r++
if(e.balance<=a)break}while(e=t(r))
return r},"any-value":function(e,t){if(!e)return 0
var r=e.index
var n=0
e:do{switch(e.type){case c.BadString:case c.BadUrl:break e
case c.RightCurlyBracket:case c.RightParenthesis:case c.RightSquareBracket:if(e.balance>e.index||e.balance<r)break e}n++
if(e.balance<=r)break}while(e=t(n))
return n},dimension:x(w(null)),angle:x(w({deg:!0,grad:!0,rad:!0,turn:!0})),decibel:x(w({db:!0})),frequency:x(w({hz:!0,khz:!0})),flex:x(w({fr:!0})),length:x(S(w({px:!0,mm:!0,cm:!0,in:!0,pt:!0,pc:!0,q:!0,em:!0,ex:!0,ch:!0,rem:!0,vh:!0,vw:!0,vmin:!0,vmax:!0,vm:!0}))),resolution:x(w({dpi:!0,dpcm:!0,dppx:!0,x:!0})),semitones:x(w({st:!0})),time:x(w({s:!0,ms:!0})),percentage:x((function(e,t,r){return null===e||e.type!==c.Percentage||b(r,e.value,e.value.length-1)?0:1})),zero:S(),number:x((function(e,t,r){if(null===e)return 0
var n=l(e.value,0)
return n===e.value.length||v(e.value,n)?b(r,e.value,n)?0:1:0})),integer:x((function(e,t,r){if(null===e||e.type!==c.Number)return 0
var n=43===e.value.charCodeAt(0)||45===e.value.charCodeAt(0)?1:0
for(;n<e.value.length;n++)if(!o(e.value.charCodeAt(n)))return 0
return b(r,e.value,n)?0:1})),"-ms-legacy-expression":function(e){;"("
return function(e,t){return null!==e&&m(e.value,"expression(")?y(e,t):0}}()}},function(e,t,r){var n=r(0).isDigit
var a=r(0).cmpChar
var i=r(0).TYPE
var o=i.Delim
var s=i.WhiteSpace
var l=i.Comment
var c=i.Ident
var u=i.Number
var f=i.Dimension
function h(e,t){return null!==e&&e.type===o&&e.value.charCodeAt(0)===t}function d(e,t,r){for(;null!==e&&(e.type===s||e.type===l);)e=r(++t)
return t}function p(e,t,r,a){if(!e)return 0
var i=e.value.charCodeAt(t)
if(43===i||45===i){if(r)return 0
t++}for(;t<e.value.length;t++)if(!n(e.value.charCodeAt(t)))return 0
return a+1}function m(e,t,r){var n=!1
var a=d(e,t,r)
if(null===(e=r(a)))return t
if(e.type!==u){if(!h(e,43)&&!h(e,45))return t
n=!0
a=d(r(++a),a,r)
if(null===(e=r(a))&&e.type!==u)return 0}if(!n){var i=e.value.charCodeAt(0)
if(43!==i&&45!==i)return 0}return p(e,n?0:1,n,a)}e.exports=function(e,t){var r=0
if(!e)return 0
if(e.type===u)return p(e,0,!1,r)
if(e.type===c&&45===e.value.charCodeAt(0)){if(!a(e.value,1,110))return 0
switch(e.value.length){case 2:return m(t(++r),r,t)
case 3:if(45!==e.value.charCodeAt(2))return 0
r=d(t(++r),r,t)
return p(e=t(r),0,!0,r)
default:return 45!==e.value.charCodeAt(2)?0:p(e,3,!0,r)}}else if(e.type===c||h(e,43)&&t(r+1).type===c){e.type!==c&&(e=t(++r))
if(null===e||!a(e.value,0,110))return 0
switch(e.value.length){case 1:return m(t(++r),r,t)
case 2:if(45!==e.value.charCodeAt(1))return 0
r=d(t(++r),r,t)
return p(e=t(r),0,!0,r)
default:return 45!==e.value.charCodeAt(1)?0:p(e,2,!0,r)}}else if(e.type===f){var i=e.value.charCodeAt(0)
var o=43===i||45===i?1:0
for(var s=o;s<e.value.length&&n(e.value.charCodeAt(s));s++);if(s===o)return 0
if(!a(e.value,s,110))return 0
if(s+1===e.value.length)return m(t(++r),r,t)
if(45!==e.value.charCodeAt(s+1))return 0
if(s+2===e.value.length){r=d(t(++r),r,t)
return p(e=t(r),0,!0,r)}return p(e,s+2,!0,r)}return 0}},function(e,t,r){var n=r(0).isHexDigit
var a=r(0).cmpChar
var i=r(0).TYPE
var o=i.Ident
var s=i.Delim
var l=i.Number
var c=i.Dimension
function u(e,t){return null!==e&&e.type===s&&e.value.charCodeAt(0)===t}function f(e,t){return e.value.charCodeAt(0)===t}function h(e,t,r){for(var a=t,i=0;a<e.value.length;a++){var o=e.value.charCodeAt(a)
if(45===o&&r&&0!==i)return h(e,t+i+1,!1)>0?6:0
if(!n(o))return 0
if(++i>6)return 0}return i}function d(e,t,r){if(!e)return 0
for(;u(r(t),63);){if(++e>6)return 0
t++}return t}e.exports=function(e,t){var r=0
if(null===e||e.type!==o||!a(e.value,0,117))return 0
if(null===(e=t(++r)))return 0
if(u(e,43))return null===(e=t(++r))?0:e.type===o?d(h(e,0,!0),++r,t):u(e,63)?d(1,++r,t):0
if(e.type===l){if(!f(e,43))return 0
var n=h(e,1,!0)
return 0===n?0:null===(e=t(++r))?r:e.type===c||e.type===l?f(e,45)&&h(e,1,!1)?r+1:0:d(n,r,t)}return e.type===c&&f(e,43)?d(h(e,1,!0),++r,t):0}},function(e,t,r){var n=r(52)
var a=function(e){this.str=e
this.pos=0}
a.prototype={charCodeAt:function(e){return e<this.str.length?this.str.charCodeAt(e):0},charCode:function(){return this.charCodeAt(this.pos)},nextCharCode:function(){return this.charCodeAt(this.pos+1)},nextNonWsCode:function(e){return this.charCodeAt(this.findWsEnd(e))},findWsEnd:function(e){for(;e<this.str.length;e++){var t=this.str.charCodeAt(e)
if(13!==t&&10!==t&&12!==t&&32!==t&&9!==t)break}return e},substringToPos:function(e){return this.str.substring(this.pos,this.pos=e)},eat:function(e){this.charCode()!==e&&this.error("Expect `"+String.fromCharCode(e)+"`")
this.pos++},peek:function(){return this.pos<this.str.length?this.str.charAt(this.pos++):""},error:function(e){throw new n(e,this.str,this.pos)}}
e.exports=a},function(e,t,r){var n=r(0)
var a=new(r(15))
var i={decorator:function(e){var t=null
var r={len:0,node:null}
var n=[r]
var a=""
return{children:e.children,node:function(r){var n=t
t=r
e.node.call(this,r)
t=n},chunk:function(e){a+=e
r.node!==t?n.push({len:e.length,node:t}):r.len+=e.length},result:function(){return o(a,n)}}}}
function o(e,t){var r=[]
var i=0
var o=0
var s=t?t[o].node:null
n(e,a)
for(;!a.eof;){if(t)for(;o<t.length&&i+t[o].len<=a.tokenStart;){i+=t[o++].len
s=t[o].node}r.push({type:a.tokenType,value:a.getTokenValue(),index:a.tokenIndex,balance:a.balance[a.tokenIndex],node:s})
a.next()}return r}e.exports=function(e,t){return"string"==typeof e?o(e,null):t.generate(e,i)}},function(e,t,r){var n=Object.prototype.hasOwnProperty
var a=r(54)
var i=a.MATCH
var o=a.MISMATCH
var s=a.DISALLOW_EMPTY
var l=r(16).TYPE
var c=0
function u(e){var t=null
var r=null
var n=e
for(;null!==n;){r=n.prev
n.prev=t
t=n
n=r}return t}function f(e,t){if(e.length!==t.length)return!1
for(var r=0;r<e.length;r++){var n=e.charCodeAt(r)
n>=65&&n<=90&&(n|=32)
if(n!==t.charCodeAt(r))return!1}return!0}function h(e){return null===e||e.type===l.Comma||e.type===l.Function||e.type===l.LeftParenthesis||e.type===l.LeftSquareBracket||e.type===l.LeftCurlyBracket||e.type===l.Delim}function d(e){return null===e||e.type===l.RightParenthesis||e.type===l.RightSquareBracket||e.type===l.RightCurlyBracket||e.type===l.Delim}function p(e,t,r){function a(){do{T++
C=T<e.length?e[T]:null}while(null!==C&&(C.type===l.WhiteSpace||C.type===l.Comment))}function u(t){var r=T+t
return r<e.length?e[r]:null}function p(e,t){return{nextState:e,matchStack:L,syntaxStack:x,thenStack:k,tokenIndex:T,prev:t}}function m(e){k={nextState:e,matchStack:L,syntaxStack:x,prev:k}}function g(e){w=p(e,w)}function v(){L={type:1,syntax:t.syntax,token:C,prev:L}
a()
S=null
T>P&&(P=T)}function b(){x={syntax:t.syntax,opts:t.syntax.opts||null!==x&&x.opts||null,prev:x}
L={type:2,syntax:t.syntax,token:L.token,prev:L}}function y(){L=2===L.type?L.prev:{type:3,syntax:x.syntax,token:L.token,prev:L}
x=x.prev}var x=null
var k=null
var w=null
var S=null
var A=0
var E=null
var C=null
var T=-1
var P=0
var L={type:0,syntax:null,token:null,prev:null}
a()
for(;null===E&&++A<15e3;)switch(t.type){case"Match":if(null===k){if(null!==C&&(T!==e.length-1||"\\0"!==C.value&&"\\9"!==C.value)){t=o
break}E="Match"
break}if((t=k.nextState)===s){if(k.matchStack===L){t=o
break}t=i}for(;k.syntaxStack!==x;)y()
k=k.prev
break
case"Mismatch":if(null!==S&&!1!==S){if(null===w||T>w.tokenIndex){w=S
S=!1}}else if(null===w){E="Mismatch"
break}t=w.nextState
k=w.thenStack
x=w.syntaxStack
L=w.matchStack
T=w.tokenIndex
C=T<e.length?e[T]:null
w=w.prev
break
case"MatchGraph":t=t.match
break
case"If":t.else!==o&&g(t.else)
t.then!==i&&m(t.then)
t=t.match
break
case"MatchOnce":t={type:"MatchOnceBuffer",syntax:t,index:0,mask:0}
break
case"MatchOnceBuffer":var O=t.syntax.terms
if(t.index===O.length){if(0===t.mask||t.syntax.all){t=o
break}t=i
break}if(t.mask===(1<<O.length)-1){t=i
break}for(;t.index<O.length;t.index++){var _=1<<t.index
if(0==(t.mask&_)){g(t)
m({type:"AddMatchOnce",syntax:t.syntax,mask:t.mask|_})
t=O[t.index++]
break}}break
case"AddMatchOnce":t={type:"MatchOnceBuffer",syntax:t.syntax,index:0,mask:t.mask}
break
case"Enum":if(null!==C){-1!==(I=C.value.toLowerCase()).indexOf("\\")&&(I=I.replace(/\\[09].*$/,""))
if(n.call(t.map,I)){t=t.map[I]
break}}t=o
break
case"Generic":var N=null!==x?x.opts:null
var R=T+Math.floor(t.fn(C,u,N))
if(!isNaN(R)&&R>T){for(;T<R;)v()
t=i}else t=o
break
case"Type":case"Property":var D="Type"===t.type?"types":"properties"
var M=n.call(r,D)?r[D][t.name]:null
if(!M||!M.match)throw new Error("Bad syntax reference: "+("Type"===t.type?"<"+t.name+">":"<'"+t.name+"'>"))
if(!1!==S&&null!==C&&"Type"===t.type&&("custom-ident"===t.name&&C.type===l.Ident||"length"===t.name&&"0"===C.value)){null===S&&(S=p(t,w))
t=o
break}b()
t=M.match
break
case"Keyword":var I=t.name
if(null!==C){var q=C.value;-1!==q.indexOf("\\")&&(q=q.replace(/\\[09].*$/,""))
if(f(q,I)){v()
t=i
break}}t=o
break
case"AtKeyword":case"Function":if(null!==C&&f(C.value,t.name)){v()
t=i
break}t=o
break
case"Token":if(null!==C&&C.value===t.value){v()
t=i
break}t=o
break
case"Comma":if(null!==C&&C.type===l.Comma)if(h(L.token))t=o
else{v()
t=d(C)?o:i}else t=h(L.token)||d(C)?i:o
break
case"String":var B=""
for(R=T;R<e.length&&B.length<t.value.length;R++)B+=e[R].value
if(f(B,t.value)){for(;T<R;)v()
t=i}else t=o
break
default:throw new Error("Unknown node type: "+t.type)}c+=A
switch(E){case null:console.warn("[csstree-match] BREAK after 15000 iterations")
E="Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)"
L=null
break
case"Match":for(;null!==x;)y()
break
default:L=null}return{tokens:e,reason:E,iterations:A,match:L,longestMatch:P}}e.exports={matchAsList:function(e,t,r){var n=p(e,t,r||{})
if(null!==n.match){var a=u(n.match).prev
n.match=[]
for(;null!==a;){switch(a.type){case 0:break
case 2:case 3:n.match.push({type:a.type,syntax:a.syntax})
break
default:n.match.push({token:a.token.value,node:a.token.node})}a=a.prev}}return n},matchAsTree:function(e,t,r){var n=p(e,t,r||{})
if(null===n.match)return n
var a=n.match
var i=n.match={syntax:t.syntax||null,match:[]}
var o=[i]
a=u(a).prev
for(;null!==a;){switch(a.type){case 2:i.match.push(i={syntax:a.syntax,match:[]})
o.push(i)
break
case 3:o.pop()
i=o[o.length-1]
break
default:i.match.push({syntax:a.syntax||null,token:a.token.value,node:a.token.node})}a=a.prev}return n},getTotalIterationCount:function(){return c}}},function(e,t){function r(e){function t(e){return null!==e&&("Type"===e.type||"Property"===e.type||"Keyword"===e.type)}var r=null
null!==this.matched&&function n(a){if(Array.isArray(a.match)){for(var i=0;i<a.match.length;i++)if(n(a.match[i])){t(a.syntax)&&r.unshift(a.syntax)
return!0}}else if(a.node===e){r=t(a.syntax)?[a.syntax]:[]
return!0}return!1}(this.matched)
return r}function n(e,t,n){var a=r.call(e,t)
return null!==a&&a.some(n)}e.exports={getTrace:r,isType:function(e,t){return n(this,e,(function(e){return"Type"===e.type&&e.name===t}))},isProperty:function(e,t){return n(this,e,(function(e){return"Property"===e.type&&e.name===t}))},isKeyword:function(e){return n(this,e,(function(e){return"Keyword"===e.type}))}}},function(e,t,r){var n=r(7)
e.exports={matchFragments:function(e,t,r,a,i){var o=[]
null!==r.matched&&function r(s){if(null!==s.syntax&&s.syntax.type===a&&s.syntax.name===i){var l=function e(t){return"node"in t?t.node:e(t.match[0])}(s)
var c=function e(t){return"node"in t?t.node:e(t.match[t.match.length-1])}(s)
e.syntax.walk(t,(function(e,t,r){if(e===l){var a=new n
do{a.appendData(t.data)
if(t.data===c)break
t=t.next}while(null!==t)
o.push({parent:r,nodes:a})}}))}Array.isArray(s.match)&&s.match.forEach(r)}(r.matched)
return o}}},function(e,t,r){var n=r(7)
var a=Object.prototype.hasOwnProperty
function i(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e&&e>=0}function o(e){return Boolean(e)&&i(e.offset)&&i(e.line)&&i(e.column)}function s(e,t){return function(r,i){if(!r||r.constructor!==Object)return i(r,"Type of node should be an Object")
for(var s in r){var l=!0
if(!1!==a.call(r,s)){if("type"===s)r.type!==e&&i(r,"Wrong node type `"+r.type+"`, expected `"+e+"`")
else if("loc"===s){if(null===r.loc)continue
if(r.loc&&r.loc.constructor===Object)if("string"!=typeof r.loc.source)s+=".source"
else if(o(r.loc.start)){if(o(r.loc.end))continue
s+=".end"}else s+=".start"
l=!1}else if(t.hasOwnProperty(s)){var c=0
for(l=!1;!l&&c<t[s].length;c++){var u=t[s][c]
switch(u){case String:l="string"==typeof r[s]
break
case Boolean:l="boolean"==typeof r[s]
break
case null:l=null===r[s]
break
default:"string"==typeof u?l=r[s]&&r[s].type===u:Array.isArray(u)&&(l=r[s]instanceof n)}}}else i(r,"Unknown field `"+s+"` for "+e+" node type")
l||i(r,"Bad value for `"+e+"."+s+"`")}}for(var s in t)a.call(t,s)&&!1===a.call(r,s)&&i(r,"Field `"+e+"."+s+"` is missed")}}function l(e,t){var r=t.structure
var n={type:String,loc:!0}
var i={type:'"'+e+'"'}
for(var o in r)if(!1!==a.call(r,o)){var l=[]
var c=n[o]=Array.isArray(r[o])?r[o].slice():[r[o]]
for(var u=0;u<c.length;u++){var f=c[u]
if(f===String||f===Boolean)l.push(f.name)
else if(null===f)l.push("null")
else if("string"==typeof f)l.push("<"+f+">")
else{if(!Array.isArray(f))throw new Error("Wrong value `"+f+"` in `"+e+"."+o+"` structure definition")
l.push("List")}}i[o]=l.join(" | ")}return{docs:i,check:s(e,n)}}e.exports={getStructureFromConfig:function(e){var t={}
if(e.node)for(var r in e.node)if(a.call(e.node,r)){var n=e.node[r]
if(!n.structure)throw new Error("Missed `structure` field in `"+r+"` node type definition")
t[r]=l(r,n)}return t}}},function(e,t,r){e.exports={SyntaxError:r(52),parse:r(29),generate:r(27),walk:r(53)}},function(e,t,r){var n=r(114)
var a=r(48)
var i=r(15)
var o=r(7)
var s=r(0)
var l=r(16)
var c=r(10).findWhiteSpaceStart
var u=r(115)
var f=function(){}
var h=l.TYPE
var d=l.NAME
var p=h.WhiteSpace
var m=h.Ident
var g=h.Function
var v=h.Url
var b=h.Hash
var y=h.Percentage
var x=h.Number
function k(e){return function(){return this[e]()}}e.exports=function(e){var t={scanner:new i,locationMap:new n,filename:"<unknown>",needPositions:!1,onParseError:f,onParseErrorThrow:!1,parseAtrulePrelude:!0,parseRulePrelude:!0,parseValue:!0,parseCustomProperty:!1,readSequence:u,createList:function(){return new o},createSingleNodeList:function(e){return(new o).appendData(e)},getFirstListNode:function(e){return e&&e.first()},getLastListNode:function(e){return e.last()},parseWithFallback:function(e,t){var r=this.scanner.tokenIndex
try{return e.call(this)}catch(e){if(this.onParseErrorThrow)throw e
var n=t.call(this,r)
this.onParseErrorThrow=!0
this.onParseError(e,n)
this.onParseErrorThrow=!1
return n}},lookupNonWSType:function(e){do{var t=this.scanner.lookupType(e++)
if(t!==p)return t}while(0!==t)
return 0},eat:function(e){if(this.scanner.tokenType!==e){var t=this.scanner.tokenStart
var r=d[e]+" is expected"
switch(e){case m:if(this.scanner.tokenType===g||this.scanner.tokenType===v){t=this.scanner.tokenEnd-1
r="Identifier is expected but function found"}else r="Identifier is expected"
break
case b:if(this.scanner.isDelim(35)){this.scanner.next()
t++
r="Name is expected"}break
case y:if(this.scanner.tokenType===x){t=this.scanner.tokenEnd
r="Percent sign is expected"}break
default:this.scanner.source.charCodeAt(this.scanner.tokenStart)===e&&(t+=1)}this.error(r,t)}this.scanner.next()},consume:function(e){var t=this.scanner.getTokenValue()
this.eat(e)
return t},consumeFunctionName:function(){var e=this.scanner.source.substring(this.scanner.tokenStart,this.scanner.tokenEnd-1)
this.eat(g)
return e},getLocation:function(e,t){return this.needPositions?this.locationMap.getLocationRange(e,t,this.filename):null},getLocationFromList:function(e){if(this.needPositions){var t=this.getFirstListNode(e)
var r=this.getLastListNode(e)
return this.locationMap.getLocationRange(null!==t?t.loc.start.offset-this.locationMap.startOffset:this.scanner.tokenStart,null!==r?r.loc.end.offset-this.locationMap.startOffset:this.scanner.tokenStart,this.filename)}return null},error:function(e,t){var r=void 0!==t&&t<this.scanner.source.length?this.locationMap.getLocation(t):this.scanner.eof?this.locationMap.getLocation(c(this.scanner.source,this.scanner.source.length-1)):this.locationMap.getLocation(this.scanner.tokenStart)
throw new a(e||"Unexpected input",this.scanner.source,r.offset,r.line,r.column)}}
e=function(e){var t={context:{},scope:{},atrule:{},pseudo:{}}
if(e.parseContext)for(var r in e.parseContext)switch(typeof e.parseContext[r]){case"function":t.context[r]=e.parseContext[r]
break
case"string":t.context[r]=k(e.parseContext[r])}if(e.scope)for(var r in e.scope)t.scope[r]=e.scope[r]
if(e.atrule)for(var r in e.atrule){var n=e.atrule[r]
n.parse&&(t.atrule[r]=n.parse)}if(e.pseudo)for(var r in e.pseudo){var a=e.pseudo[r]
a.parse&&(t.pseudo[r]=a.parse)}if(e.node)for(var r in e.node)t[r]=e.node[r].parse
return t}(e||{})
for(var r in e)t[r]=e[r]
return function(e,r){var n=(r=r||{}).context||"default"
var a
s(e,t.scanner)
t.locationMap.setSource(e,r.offset,r.line,r.column)
t.filename=r.filename||"<unknown>"
t.needPositions=Boolean(r.positions)
t.onParseError="function"==typeof r.onParseError?r.onParseError:f
t.onParseErrorThrow=!1
t.parseAtrulePrelude=!("parseAtrulePrelude"in r)||Boolean(r.parseAtrulePrelude)
t.parseRulePrelude=!("parseRulePrelude"in r)||Boolean(r.parseRulePrelude)
t.parseValue=!("parseValue"in r)||Boolean(r.parseValue)
t.parseCustomProperty="parseCustomProperty"in r&&Boolean(r.parseCustomProperty)
if(!t.context.hasOwnProperty(n))throw new Error("Unknown context `"+n+"`")
a=t.context[n].call(t,r)
t.scanner.eof||t.error()
return a}}},function(e,t,r){var n=r(51)
var a=r(0).isBOM
var i=function(){this.lines=null
this.columns=null
this.linesAndColumnsComputed=!1}
i.prototype={setSource:function(e,t,r,n){this.source=e
this.startOffset=void 0===t?0:t
this.startLine=void 0===r?1:r
this.startColumn=void 0===n?1:n
this.linesAndColumnsComputed=!1},ensureLinesAndColumnsComputed:function(){if(!this.linesAndColumnsComputed){!function(e,t){var r=t.length
var i=n(e.lines,r)
var o=e.startLine
var s=n(e.columns,r)
var l=e.startColumn
for(var c=t.length>0?a(t.charCodeAt(0)):0;c<r;c++){var u=t.charCodeAt(c)
i[c]=o
s[c]=l++
if(10===u||13===u||12===u){if(13===u&&c+1<r&&10===t.charCodeAt(c+1)){i[++c]=o
s[c]=l}o++
l=1}}i[c]=o
s[c]=l
e.lines=i
e.columns=s}(this,this.source)
this.linesAndColumnsComputed=!0}},getLocation:function(e,t){this.ensureLinesAndColumnsComputed()
return{source:t,offset:this.startOffset+e,line:this.lines[e],column:this.columns[e]}},getLocationRange:function(e,t,r){this.ensureLinesAndColumnsComputed()
return{source:r,start:{offset:this.startOffset+e,line:this.lines[e],column:this.columns[e]},end:{offset:this.startOffset+t,line:this.lines[t],column:this.columns[t]}}}}
e.exports=i},function(e,t,r){var n=r(0).TYPE
var a=n.WhiteSpace
var i=n.Comment
e.exports=function(e){var t=this.createList()
var r=null
var n={recognizer:e,space:null,ignoreWS:!1,ignoreWSAfter:!1}
this.scanner.skipSC()
for(;!this.scanner.eof;){switch(this.scanner.tokenType){case i:this.scanner.next()
continue
case a:n.ignoreWS?this.scanner.next():n.space=this.WhiteSpace()
continue}if(void 0===(r=e.getNode.call(this,n)))break
if(null!==n.space){t.push(n.space)
n.space=null}t.push(r)
if(n.ignoreWSAfter){n.ignoreWSAfter=!1
n.ignoreWS=!0}else n.ignoreWS=!1}return t}},function(e,t,r){var n=r(117)
var a=Object.prototype.hasOwnProperty
function i(e,t){var r=e.children
var n=null
"function"!=typeof t?r.forEach(this.node,this):r.forEach((function(e){null!==n&&t.call(this,n)
this.node(e)
n=e}),this)}e.exports=function(e){function t(e){if(!a.call(r,e.type))throw new Error("Unknown node type: "+e.type)
r[e.type].call(this,e)}var r={}
if(e.node)for(var o in e.node)r[o]=e.node[o].generate
return function(e,r){var a=""
var o={children:i,node:t,chunk:function(e){a+=e},result:function(){return a}}
if(r){"function"==typeof r.decorator&&(o=r.decorator(o))
r.sourceMap&&(o=n(o))}o.node(e)
return o.result()}}},function(e,t,r){var n=r(118).SourceMapGenerator
var a={Atrule:!0,Selector:!0,Declaration:!0}
e.exports=function(e){var t=new n
var r=1
var i=0
var o={line:1,column:0}
var s={line:0,column:0}
var l=!1
var c={line:1,column:0}
var u={generated:c}
var f=e.node
e.node=function(e){if(e.loc&&e.loc.start&&a.hasOwnProperty(e.type)){var n=e.loc.start.line
var h=e.loc.start.column-1
if(s.line!==n||s.column!==h){s.line=n
s.column=h
o.line=r
o.column=i
if(l){l=!1
o.line===c.line&&o.column===c.column||t.addMapping(u)}l=!0
t.addMapping({source:e.loc.source,original:s,generated:o})}}f.call(this,e)
if(l&&a.hasOwnProperty(e.type)){c.line=r
c.column=i}}
var h=e.chunk
e.chunk=function(e){for(var t=0;t<e.length;t++)if(10===e.charCodeAt(t)){r++
i=0}else i++
h(e)}
var d=e.result
e.result=function(){l&&t.addMapping(u)
return{css:d(),map:t}}
return e}},function(e,t,r){var n=r(119)
var a=r(30)
var i=r(121).ArraySet
var o=r(122).MappingList
function s(e){e||(e={})
this._file=a.getArg(e,"file",null)
this._sourceRoot=a.getArg(e,"sourceRoot",null)
this._skipValidation=a.getArg(e,"skipValidation",!1)
this._sources=new i
this._names=new i
this._mappings=new o
this._sourcesContents=null}s.prototype._version=3
s.fromSourceMap=function(e){var t=e.sourceRoot
var r=new s({file:e.file,sourceRoot:t})
e.eachMapping((function(e){var n={generated:{line:e.generatedLine,column:e.generatedColumn}}
if(null!=e.source){n.source=e.source
null!=t&&(n.source=a.relative(t,n.source))
n.original={line:e.originalLine,column:e.originalColumn}
null!=e.name&&(n.name=e.name)}r.addMapping(n)}))
e.sources.forEach((function(n){var i=n
null!==t&&(i=a.relative(t,n))
r._sources.has(i)||r._sources.add(i)
var o=e.sourceContentFor(n)
null!=o&&r.setSourceContent(n,o)}))
return r}
s.prototype.addMapping=function(e){var t=a.getArg(e,"generated")
var r=a.getArg(e,"original",null)
var n=a.getArg(e,"source",null)
var i=a.getArg(e,"name",null)
this._skipValidation||this._validateMapping(t,r,n,i)
if(null!=n){n=String(n)
this._sources.has(n)||this._sources.add(n)}if(null!=i){i=String(i)
this._names.has(i)||this._names.add(i)}this._mappings.add({generatedLine:t.line,generatedColumn:t.column,originalLine:null!=r&&r.line,originalColumn:null!=r&&r.column,source:n,name:i})}
s.prototype.setSourceContent=function(e,t){var r=e
null!=this._sourceRoot&&(r=a.relative(this._sourceRoot,r))
if(null!=t){this._sourcesContents||(this._sourcesContents=Object.create(null))
this._sourcesContents[a.toSetString(r)]=t}else if(this._sourcesContents){delete this._sourcesContents[a.toSetString(r)]
0===Object.keys(this._sourcesContents).length&&(this._sourcesContents=null)}}
s.prototype.applySourceMap=function(e,t,r){var n=t
if(null==t){if(null==e.file)throw new Error('SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map\'s "file" property. Both were omitted.')
n=e.file}var o=this._sourceRoot
null!=o&&(n=a.relative(o,n))
var s=new i
var l=new i
this._mappings.unsortedForEach((function(t){if(t.source===n&&null!=t.originalLine){var i=e.originalPositionFor({line:t.originalLine,column:t.originalColumn})
if(null!=i.source){t.source=i.source
null!=r&&(t.source=a.join(r,t.source))
null!=o&&(t.source=a.relative(o,t.source))
t.originalLine=i.line
t.originalColumn=i.column
null!=i.name&&(t.name=i.name)}}var c=t.source
null==c||s.has(c)||s.add(c)
var u=t.name
null==u||l.has(u)||l.add(u)}),this)
this._sources=s
this._names=l
e.sources.forEach((function(t){var n=e.sourceContentFor(t)
if(null!=n){null!=r&&(t=a.join(r,t))
null!=o&&(t=a.relative(o,t))
this.setSourceContent(t,n)}}),this)}
s.prototype._validateMapping=function(e,t,r,n){if(t&&"number"!=typeof t.line&&"number"!=typeof t.column)throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.")
if((!(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0)||t||r||n)&&!(e&&"line"in e&&"column"in e&&t&&"line"in t&&"column"in t&&e.line>0&&e.column>=0&&t.line>0&&t.column>=0&&r))throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:r,original:t,name:n}))}
s.prototype._serializeMappings=function(){var e=0
var t=1
var r=0
var i=0
var o=0
var s=0
var l=""
var c
var u
var f
var h
var d=this._mappings.toArray()
for(var p=0,m=d.length;p<m;p++){c=""
if((u=d[p]).generatedLine!==t){e=0
for(;u.generatedLine!==t;){c+=";"
t++}}else if(p>0){if(!a.compareByGeneratedPositionsInflated(u,d[p-1]))continue
c+=","}c+=n.encode(u.generatedColumn-e)
e=u.generatedColumn
if(null!=u.source){h=this._sources.indexOf(u.source)
c+=n.encode(h-s)
s=h
c+=n.encode(u.originalLine-1-i)
i=u.originalLine-1
c+=n.encode(u.originalColumn-r)
r=u.originalColumn
if(null!=u.name){f=this._names.indexOf(u.name)
c+=n.encode(f-o)
o=f}}l+=c}return l}
s.prototype._generateSourcesContent=function(e,t){return e.map((function(e){if(!this._sourcesContents)return null
null!=t&&(e=a.relative(t,e))
var r=a.toSetString(e)
return Object.prototype.hasOwnProperty.call(this._sourcesContents,r)?this._sourcesContents[r]:null}),this)}
s.prototype.toJSON=function(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()}
null!=this._file&&(e.file=this._file)
null!=this._sourceRoot&&(e.sourceRoot=this._sourceRoot)
this._sourcesContents&&(e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot))
return e}
s.prototype.toString=function(){return JSON.stringify(this.toJSON())}
t.SourceMapGenerator=s},function(e,t,r){var n=r(120)
t.encode=function(e){var t=""
var r
var a=function(e){return e<0?1+(-e<<1):0+(e<<1)}(e)
do{r=31&a;(a>>>=5)>0&&(r|=32)
t+=n.encode(r)}while(a>0)
return t}
t.decode=function(e,t,r){var a=e.length
var i=0
var o=0
var s,l
do{if(t>=a)throw new Error("Expected more digits in base 64 VLQ value.")
if(-1===(l=n.decode(e.charCodeAt(t++))))throw new Error("Invalid base64 digit: "+e.charAt(t-1))
s=!!(32&l)
i+=(l&=31)<<o
o+=5}while(s)
r.value=(u=(c=i)>>1,1==(1&c)?-u:u)
var c,u
r.rest=t}},function(e,t){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")
t.encode=function(e){if(0<=e&&e<r.length)return r[e]
throw new TypeError("Must be between 0 and 63: "+e)}
t.decode=function(e){return 65<=e&&e<=90?e-65:97<=e&&e<=122?e-97+26:48<=e&&e<=57?e-48+52:43==e?62:47==e?63:-1}},function(e,t,r){var n=r(30)
var a=Object.prototype.hasOwnProperty
var i="undefined"!=typeof Map
function o(){this._array=[]
this._set=i?new Map:Object.create(null)}o.fromArray=function(e,t){var r=new o
for(var n=0,a=e.length;n<a;n++)r.add(e[n],t)
return r}
o.prototype.size=function(){return i?this._set.size:Object.getOwnPropertyNames(this._set).length}
o.prototype.add=function(e,t){var r=i?e:n.toSetString(e)
var o=i?this.has(e):a.call(this._set,r)
var s=this._array.length
o&&!t||this._array.push(e)
o||(i?this._set.set(e,s):this._set[r]=s)}
o.prototype.has=function(e){if(i)return this._set.has(e)
var t=n.toSetString(e)
return a.call(this._set,t)}
o.prototype.indexOf=function(e){if(i){var t=this._set.get(e)
if(t>=0)return t}else{var r=n.toSetString(e)
if(a.call(this._set,r))return this._set[r]}throw new Error('"'+e+'" is not in the set.')}
o.prototype.at=function(e){if(e>=0&&e<this._array.length)return this._array[e]
throw new Error("No element indexed by "+e)}
o.prototype.toArray=function(){return this._array.slice()}
t.ArraySet=o},function(e,t,r){var n=r(30)
function a(){this._array=[]
this._sorted=!0
this._last={generatedLine:-1,generatedColumn:0}}a.prototype.unsortedForEach=function(e,t){this._array.forEach(e,t)}
a.prototype.add=function(e){if(r=e,a=(t=this._last).generatedLine,i=r.generatedLine,o=t.generatedColumn,s=r.generatedColumn,i>a||i==a&&s>=o||n.compareByGeneratedPositionsInflated(t,r)<=0){this._last=e
this._array.push(e)}else{this._sorted=!1
this._array.push(e)}var t,r,a,i,o,s}
a.prototype.toArray=function(){if(!this._sorted){this._array.sort(n.compareByGeneratedPositionsInflated)
this._sorted=!0}return this._array}
t.MappingList=a},function(e,t,r){var n=r(7)
e.exports=function(e){return{fromPlainObject:function(t){e(t,{enter:function(e){e.children&&e.children instanceof n==0&&(e.children=(new n).fromArray(e.children))}})
return t},toPlainObject:function(t){e(t,{leave:function(e){e.children&&e.children instanceof n&&(e.children=e.children.toArray())}})
return t}}}},function(e,t){var r=Object.prototype.hasOwnProperty
var n=function(){}
function a(e){return"function"==typeof e?e:n}function i(e,t){return function(r,n,a){r.type===t&&e.call(this,r,n,a)}}function o(e,t){var n=t.structure
var a=[]
for(var i in n)if(!1!==r.call(n,i)){var o=n[i]
var s={name:i,type:!1,nullable:!1}
Array.isArray(n[i])||(o=[n[i]])
for(var l=0;l<o.length;l++){var c=o[l]
null===c?s.nullable=!0:"string"==typeof c?s.type="node":Array.isArray(c)&&(s.type="list")}s.type&&a.push(s)}return a.length?{context:t.walkContext,fields:a}:null}function s(e,t){var r=e.fields.slice()
var n=e.context
var a="string"==typeof n
t&&r.reverse()
return function(e,i,o){var s
if(a){s=i[n]
i[n]=e}for(var l=0;l<r.length;l++){var c=r[l]
var u=e[c.name]
c.nullable&&!u||("list"===c.type?t?u.forEachRight(o):u.forEach(o):o(u))}a&&(i[n]=s)}}function l(e){return{Atrule:{StyleSheet:e.StyleSheet,Atrule:e.Atrule,Rule:e.Rule,Block:e.Block},Rule:{StyleSheet:e.StyleSheet,Atrule:e.Atrule,Rule:e.Rule,Block:e.Block},Declaration:{StyleSheet:e.StyleSheet,Atrule:e.Atrule,Rule:e.Rule,Block:e.Block,DeclarationList:e.DeclarationList}}}e.exports=function(e){var t=function(e){var t={}
for(var n in e.node)if(r.call(e.node,n)){var a=e.node[n]
if(!a.structure)throw new Error("Missed `structure` field in `"+n+"` node type definition")
t[n]=o(0,a)}return t}(e)
var c={}
var u={}
for(var f in t)if(r.call(t,f)&&null!==t[f]){c[f]=s(t[f],!1)
u[f]=s(t[f],!0)}var h=l(c)
var d=l(u)
var p=function(e,r){var o=n
var s=n
var l=c
var f={root:e,stylesheet:null,atrule:null,atrulePrelude:null,rule:null,selector:null,block:null,declaration:null,function:null}
if("function"==typeof r)o=r
else if(r){o=a(r.enter)
s=a(r.leave)
r.reverse&&(l=u)
if(r.visit){if(h.hasOwnProperty(r.visit))l=r.reverse?d[r.visit]:h[r.visit]
else if(!t.hasOwnProperty(r.visit))throw new Error("Bad value `"+r.visit+"` for `visit` option (should be: "+Object.keys(t).join(", ")+")")
o=i(o,r.visit)
s=i(s,r.visit)}}if(o===n&&s===n)throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function")
if(r.reverse){var p=o
o=s
s=p}!function e(t,r,n){o.call(f,t,r,n)
l.hasOwnProperty(t.type)&&l[t.type](t,f,e)
s.call(f,t,r,n)}(e)}
p.find=function(e,t){var r=null
p(e,(function(e,n,a){null===r&&t.call(this,e,n,a)&&(r=e)}))
return r}
p.findLast=function(e,t){var r=null
p(e,{reverse:!0,enter:function(e,n,a){null===r&&t.call(this,e,n,a)&&(r=e)}})
return r}
p.findAll=function(e,t){var r=[]
p(e,(function(e,n,a){t.call(this,e,n,a)&&r.push(e)}))
return r}
return p}},function(e,t,r){var n=r(7)
e.exports=function e(t){var r={}
for(var a in t){var i=t[a]
i&&(Array.isArray(i)||i instanceof n?i=i.map(e):i.constructor===Object&&(i=e(i)))
r[a]=i}return r}},function(e,t){var r=Object.prototype.hasOwnProperty
var n={generic:!0,types:{},atrules:{},properties:{},parseContext:{},scope:{},atrule:["parse"],pseudo:["parse"],node:["name","structure","parse","generate","walkContext"]}
function a(e){return e&&e.constructor===Object}function i(e){return a(e)?Object.assign({},e):e}function o(e,t){for(var n in t)r.call(t,n)&&(a(e[n])?o(e[n],i(t[n])):e[n]=i(t[n]))}e.exports=function(e,t){return function e(t,n,s){for(var l in s)if(!1!==r.call(s,l))if(!0===s[l])l in n&&r.call(n,l)&&(t[l]=i(n[l]))
else if(s[l])if(a(s[l])){o(c={},t[l])
o(c,n[l])
t[l]=c}else if(Array.isArray(s[l])){var c={}
var u=s[l].reduce((function(e,t){e[t]=!0
return e}),{})
for(var f in t[l])if(r.call(t[l],f)){c[f]={}
t[l]&&t[l][f]&&e(c[f],t[l][f],u)}for(var f in n[l])if(r.call(n[l],f)){c[f]||(c[f]={})
n[l]&&n[l][f]&&e(c[f],n[l][f],u)}t[l]=c}return t}(e,t,n)}},function(e,t,r){var n=r(128)
e.exports={generic:!0,types:n.types,atrules:n.atrules,properties:n.properties,node:r(31)}},function(e){e.exports=JSON.parse('{"generic":true,"types":{"absolute-size":"xx-small|x-small|small|medium|large|x-large|xx-large","alpha-value":"<number>|<percentage>","angle-percentage":"<angle>|<percentage>","angular-color-hint":"<angle-percentage>","angular-color-stop":"<color>&&<color-stop-angle>?","angular-color-stop-list":"[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>","animateable-feature":"scroll-position|contents|<custom-ident>","attachment":"scroll|fixed|local","attr()":"attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )","attr-matcher":"[\'~\'|\'|\'|\'^\'|\'$\'|\'*\']? \'=\'","attr-modifier":"i|s","attribute-selector":"\'[\' <wq-name> \']\'|\'[\' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? \']\'","auto-repeat":"repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )","auto-track-list":"[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?","baseline-position":"[first|last]? baseline","basic-shape":"<inset()>|<circle()>|<ellipse()>|<polygon()>","bg-image":"none|<image>","bg-layer":"<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>","bg-position":"[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]","bg-size":"[<length-percentage>|auto]{1,2}|cover|contain","blur()":"blur( <length> )","blend-mode":"normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity","box":"border-box|padding-box|content-box","brightness()":"brightness( <number-percentage> )","calc()":"calc( <calc-sum> )","calc-sum":"<calc-product> [[\'+\'|\'-\'] <calc-product>]*","calc-product":"<calc-value> [\'*\' <calc-value>|\'/\' <number>]*","calc-value":"<number>|<dimension>|<percentage>|( <calc-sum> )","cf-final-image":"<image>|<color>","cf-mixing-image":"<percentage>?&&<image>","circle()":"circle( [<shape-radius>]? [at <position>]? )","clamp()":"clamp( <calc-sum>#{3} )","class-selector":"\'.\' <ident-token>","clip-source":"<url>","color":"<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>","color-stop":"<color-stop-length>|<color-stop-angle>","color-stop-angle":"<angle-percentage>{1,2}","color-stop-length":"<length-percentage>{1,2}","color-stop-list":"[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>","combinator":"\'>\'|\'+\'|\'~\'|[\'||\']","common-lig-values":"[common-ligatures|no-common-ligatures]","compat":"searchfield|textarea|push-button|button-bevel|slider-horizontal|checkbox|radio|square-button|menulist|menulist-button|listbox|meter|progress-bar","composite-style":"clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor","compositing-operator":"add|subtract|intersect|exclude","compound-selector":"[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!","compound-selector-list":"<compound-selector>#","complex-selector":"<compound-selector> [<combinator>? <compound-selector>]*","complex-selector-list":"<complex-selector>#","conic-gradient()":"conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )","contextual-alt-values":"[contextual|no-contextual]","content-distribution":"space-between|space-around|space-evenly|stretch","content-list":"[<string>|contents|<url>|<quote>|<attr()>|counter( <ident> , <\'list-style-type\'>? )]+","content-position":"center|start|end|flex-start|flex-end","content-replacement":"<image>","contrast()":"contrast( [<number-percentage>] )","counter()":"counter( <custom-ident> , [<counter-style>|none]? )","counter-style":"<counter-style-name>|symbols( )","counter-style-name":"<custom-ident>","counters()":"counters( <custom-ident> , <string> , [<counter-style>|none]? )","cross-fade()":"cross-fade( <cf-mixing-image> , <cf-final-image>? )","cubic-bezier-timing-function":"ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number> , <number> , <number> , <number> )","deprecated-system-color":"ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText","discretionary-lig-values":"[discretionary-ligatures|no-discretionary-ligatures]","display-box":"contents|none","display-inside":"flow|flow-root|table|flex|grid|ruby","display-internal":"table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container","display-legacy":"inline-block|inline-list-item|inline-table|inline-flex|inline-grid","display-listitem":"<display-outside>?&&[flow|flow-root]?&&list-item","display-outside":"block|inline|run-in","drop-shadow()":"drop-shadow( <length>{2,3} <color>? )","east-asian-variant-values":"[jis78|jis83|jis90|jis04|simplified|traditional]","east-asian-width-values":"[full-width|proportional-width]","element()":"element( <id-selector> )","ellipse()":"ellipse( [<shape-radius>{2}]? [at <position>]? )","ending-shape":"circle|ellipse","env()":"env( <custom-ident> , <declaration-value>? )","explicit-track-list":"[<line-names>? <track-size>]+ <line-names>?","family-name":"<string>|<custom-ident>+","feature-tag-value":"<string> [<integer>|on|off]?","feature-type":"@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation","feature-value-block":"<feature-type> \'{\' <feature-value-declaration-list> \'}\'","feature-value-block-list":"<feature-value-block>+","feature-value-declaration":"<custom-ident> : <integer>+ ;","feature-value-declaration-list":"<feature-value-declaration>","feature-value-name":"<custom-ident>","fill-rule":"nonzero|evenodd","filter-function":"<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>","filter-function-list":"[<filter-function>|<url>]+","final-bg-layer":"<\'background-color\'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>","fit-content()":"fit-content( [<length>|<percentage>] )","fixed-breadth":"<length-percentage>","fixed-repeat":"repeat( [<positive-integer>] , [<line-names>? <fixed-size>]+ <line-names>? )","fixed-size":"<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )","font-stretch-absolute":"normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>","font-variant-css21":"[normal|small-caps]","font-weight-absolute":"normal|bold|<number>","frequency-percentage":"<frequency>|<percentage>","general-enclosed":"[<function-token> <any-value> )]|( <ident> <any-value> )","generic-family":"serif|sans-serif|cursive|fantasy|monospace|-apple-system","generic-name":"serif|sans-serif|cursive|fantasy|monospace","geometry-box":"<shape-box>|fill-box|stroke-box|view-box","gradient":"<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<-legacy-gradient>","grayscale()":"grayscale( <number-percentage> )","grid-line":"auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]","historical-lig-values":"[historical-ligatures|no-historical-ligatures]","hsl()":"hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )","hsla()":"hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )","hue":"<number>|<angle>","hue-rotate()":"hue-rotate( <angle> )","image":"<url>|<image()>|<image-set()>|<element()>|<cross-fade()>|<gradient>","image()":"image( <image-tags>? [<image-src>? , <color>?]! )","image-set()":"image-set( <image-set-option># )","image-set-option":"[<image>|<string>] <resolution>","image-src":"<url>|<string>","image-tags":"ltr|rtl","inflexible-breadth":"<length>|<percentage>|min-content|max-content|auto","inset()":"inset( <length-percentage>{1,4} [round <\'border-radius\'>]? )","invert()":"invert( <number-percentage> )","keyframes-name":"<custom-ident>|<string>","keyframe-block":"<keyframe-selector># { <declaration-list> }","keyframe-block-list":"<keyframe-block>+","keyframe-selector":"from|to|<percentage>","leader()":"leader( <leader-type> )","leader-type":"dotted|solid|space|<string>","length-percentage":"<length>|<percentage>","line-names":"\'[\' <custom-ident>* \']\'","line-name-list":"[<line-names>|<name-repeat>]+","line-style":"none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset","line-width":"<length>|thin|medium|thick","linear-color-hint":"<length-percentage>","linear-color-stop":"<color> <color-stop-length>?","linear-gradient()":"linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )","mask-layer":"<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>","mask-position":"[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?","mask-reference":"none|<image>|<mask-source>","mask-source":"<url>","masking-mode":"alpha|luminance|match-source","matrix()":"matrix( <number>#{6} )","matrix3d()":"matrix3d( <number>#{16} )","max()":"max( <calc-sum># )","media-and":"<media-in-parens> [and <media-in-parens>]+","media-condition":"<media-not>|<media-and>|<media-or>|<media-in-parens>","media-condition-without-or":"<media-not>|<media-and>|<media-in-parens>","media-feature":"( [<mf-plain>|<mf-boolean>|<mf-range>] )","media-in-parens":"( <media-condition> )|<media-feature>|<general-enclosed>","media-not":"not <media-in-parens>","media-or":"<media-in-parens> [or <media-in-parens>]+","media-query":"<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?","media-query-list":"<media-query>#","media-type":"<ident>","mf-boolean":"<mf-name>","mf-name":"<ident>","mf-plain":"<mf-name> : <mf-value>","mf-range":"<mf-name> [\'<\'|\'>\']? \'=\'? <mf-value>|<mf-value> [\'<\'|\'>\']? \'=\'? <mf-name>|<mf-value> \'<\' \'=\'? <mf-name> \'<\' \'=\'? <mf-value>|<mf-value> \'>\' \'=\'? <mf-name> \'>\' \'=\'? <mf-value>","mf-value":"<number>|<dimension>|<ident>|<ratio>","min()":"min( <calc-sum># )","minmax()":"minmax( [<length>|<percentage>|<flex>|min-content|max-content|auto] , [<length>|<percentage>|<flex>|min-content|max-content|auto] )","named-color":"transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>","namespace-prefix":"<ident>","ns-prefix":"[<ident-token>|\'*\']? \'|\'","number-percentage":"<number>|<percentage>","numeric-figure-values":"[lining-nums|oldstyle-nums]","numeric-fraction-values":"[diagonal-fractions|stacked-fractions]","numeric-spacing-values":"[proportional-nums|tabular-nums]","nth":"<an-plus-b>|even|odd","opacity()":"opacity( [<number-percentage>] )","overflow-position":"unsafe|safe","outline-radius":"<length>|<percentage>","page-body":"<declaration>? [; <page-body>]?|<page-margin-box> <page-body>","page-margin-box":"<page-margin-box-type> \'{\' <declaration-list> \'}\'","page-margin-box-type":"@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom","page-selector-list":"[<page-selector>#]?","page-selector":"<pseudo-page>+|<ident> <pseudo-page>*","perspective()":"perspective( <length> )","polygon()":"polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )","position":"[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]","pseudo-class-selector":"\':\' <ident-token>|\':\' <function-token> <any-value> \')\'","pseudo-element-selector":"\':\' <pseudo-class-selector>","pseudo-page":": [left|right|first|blank]","quote":"open-quote|close-quote|no-open-quote|no-close-quote","radial-gradient()":"radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )","relative-selector":"<combinator>? <complex-selector>","relative-selector-list":"<relative-selector>#","relative-size":"larger|smaller","repeat-style":"repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}","repeating-linear-gradient()":"repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )","repeating-radial-gradient()":"repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )","rgb()":"rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )","rgba()":"rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )","rotate()":"rotate( [<angle>|<zero>] )","rotate3d()":"rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )","rotateX()":"rotateX( [<angle>|<zero>] )","rotateY()":"rotateY( [<angle>|<zero>] )","rotateZ()":"rotateZ( [<angle>|<zero>] )","saturate()":"saturate( <number-percentage> )","scale()":"scale( <number> , <number>? )","scale3d()":"scale3d( <number> , <number> , <number> )","scaleX()":"scaleX( <number> )","scaleY()":"scaleY( <number> )","scaleZ()":"scaleZ( <number> )","self-position":"center|start|end|self-start|self-end|flex-start|flex-end","shape-radius":"<length-percentage>|closest-side|farthest-side","skew()":"skew( [<angle>|<zero>] , [<angle>|<zero>]? )","skewX()":"skewX( [<angle>|<zero>] )","skewY()":"skewY( [<angle>|<zero>] )","sepia()":"sepia( <number-percentage> )","shadow":"inset?&&<length>{2,4}&&<color>?","shadow-t":"[<length>{2,3}&&<color>?]","shape":"rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )","shape-box":"<box>|margin-box","side-or-corner":"[left|right]||[top|bottom]","single-animation":"<time>||<timing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]","single-animation-direction":"normal|reverse|alternate|alternate-reverse","single-animation-fill-mode":"none|forwards|backwards|both","single-animation-iteration-count":"infinite|<number>","single-animation-play-state":"running|paused","single-transition":"[none|<single-transition-property>]||<time>||<timing-function>||<time>","single-transition-property":"all|<custom-ident>","size":"closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}","step-position":"jump-start|jump-end|jump-none|jump-both|start|end","step-timing-function":"step-start|step-end|steps( <integer> [, <step-position>]? )","subclass-selector":"<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>","supports-condition":"not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*","supports-in-parens":"( <supports-condition> )|<supports-feature>|<general-enclosed>","supports-feature":"<supports-decl>|<supports-selector-fn>","supports-decl":"( <declaration> )","supports-selector-fn":"selector( <complex-selector> )","symbol":"<string>|<image>|<custom-ident>","target":"<target-counter()>|<target-counters()>|<target-text()>","target-counter()":"target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )","target-counters()":"target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )","target-text()":"target-text( [<string>|<url>] , [content|before|after|first-letter]? )","time-percentage":"<time>|<percentage>","timing-function":"linear|<cubic-bezier-timing-function>|<step-timing-function>","track-breadth":"<length-percentage>|<flex>|min-content|max-content|auto","track-list":"[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?","track-repeat":"repeat( [<positive-integer>] , [<line-names>? <track-size>]+ <line-names>? )","track-size":"<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( [<length>|<percentage>] )","transform-function":"<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>","transform-list":"<transform-function>+","translate()":"translate( <length-percentage> , <length-percentage>? )","translate3d()":"translate3d( <length-percentage> , <length-percentage> , <length> )","translateX()":"translateX( <length-percentage> )","translateY()":"translateY( <length-percentage> )","translateZ()":"translateZ( <length> )","type-or-unit":"string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%","type-selector":"<wq-name>|<ns-prefix>? \'*\'","var()":"var( <custom-property-name> , <declaration-value>? )","viewport-length":"auto|<length-percentage>","wq-name":"<ns-prefix>? <ident-token>","-legacy-gradient":"<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>","-legacy-linear-gradient":"-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )","-legacy-repeating-linear-gradient":"-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )","-legacy-linear-gradient-arguments":"[<angle>|<side-or-corner>]? , <color-stop-list>","-legacy-radial-gradient":"-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )","-legacy-repeating-radial-gradient":"-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )","-legacy-radial-gradient-arguments":"[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>","-legacy-radial-gradient-size":"closest-side|closest-corner|farthest-side|farthest-corner|contain|cover","-legacy-radial-gradient-shape":"circle|ellipse","-non-standard-font":"-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body","-non-standard-color":"-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text","-non-standard-image-rendering":"optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast","-non-standard-overflow":"-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable","-non-standard-width":"min-intrinsic|intrinsic|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content","-webkit-gradient()":"-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )","-webkit-gradient-color-stop":"from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )","-webkit-gradient-point":"[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]","-webkit-gradient-radius":"<length>|<percentage>","-webkit-gradient-type":"linear|radial","-webkit-mask-box-repeat":"repeat|stretch|round","-webkit-mask-clip-style":"border|border-box|padding|padding-box|content|content-box|text","-ms-filter-function-list":"<-ms-filter-function>+","-ms-filter-function":"<-ms-filter-function-progid>|<-ms-filter-function-legacy>","-ms-filter-function-progid":"\'progid:\' [<ident-token> \'.\']* [<ident-token>|<function-token> <any-value>? )]","-ms-filter-function-legacy":"<ident-token>|<function-token> <any-value>? )","-ms-filter":"<string>","age":"child|young|old","attr-name":"<wq-name>","attr-fallback":"<any-value>","border-radius":"<length-percentage>{1,2}","bottom":"<length>|auto","generic-voice":"[<age>? <gender> <integer>?]","gender":"male|female|neutral","left":"<length>|auto","mask-image":"<mask-reference>#","name-repeat":"repeat( [<positive-integer>|auto-fill] , <line-names>+ )","paint":"none|<color>|<url> [none|<color>]?|context-fill|context-stroke","path()":"path( <string> )","ratio":"<integer> / <integer>","right":"<length>|auto","svg-length":"<percentage>|<length>|<number>","svg-writing-mode":"lr-tb|rl-tb|tb-rl|lr|rl|tb","top":"<length>|auto","track-group":"\'(\' [<string>* <track-minmax> <string>*]+ \')\' [\'[\' <positive-integer> \']\']?|<track-minmax>","track-list-v0":"[<string>* <track-group> <string>*]+|none","track-minmax":"minmax( <track-breadth> , <track-breadth> )|auto|<track-breadth>|fit-content","x":"<number>","y":"<number>","declaration":"<ident-token> : <declaration-value>? [\'!\' important]?","declaration-list":"[<declaration>? \';\']* <declaration>?","url":"url( <string> <url-modifier>* )|<url-token>","url-modifier":"<ident>|<function-token> <any-value> )","number-zero-one":"<number [0,1]>","number-one-or-greater":"<number [1,∞]>","positive-integer":"<integer [0,∞]>"},"properties":{"--*":"<declaration-value>","-ms-accelerator":"false|true","-ms-block-progression":"tb|rl|bt|lr","-ms-content-zoom-chaining":"none|chained","-ms-content-zooming":"none|zoom","-ms-content-zoom-limit":"<\'-ms-content-zoom-limit-min\'> <\'-ms-content-zoom-limit-max\'>","-ms-content-zoom-limit-max":"<percentage>","-ms-content-zoom-limit-min":"<percentage>","-ms-content-zoom-snap":"<\'-ms-content-zoom-snap-type\'>||<\'-ms-content-zoom-snap-points\'>","-ms-content-zoom-snap-points":"snapInterval( <percentage> , <percentage> )|snapList( <percentage># )","-ms-content-zoom-snap-type":"none|proximity|mandatory","-ms-filter":"<string>","-ms-flow-from":"[none|<custom-ident>]#","-ms-flow-into":"[none|<custom-ident>]#","-ms-high-contrast-adjust":"auto|none","-ms-hyphenate-limit-chars":"auto|<integer>{1,3}","-ms-hyphenate-limit-lines":"no-limit|<integer>","-ms-hyphenate-limit-zone":"<percentage>|<length>","-ms-ime-align":"auto|after","-ms-overflow-style":"auto|none|scrollbar|-ms-autohiding-scrollbar","-ms-scrollbar-3dlight-color":"<color>","-ms-scrollbar-arrow-color":"<color>","-ms-scrollbar-base-color":"<color>","-ms-scrollbar-darkshadow-color":"<color>","-ms-scrollbar-face-color":"<color>","-ms-scrollbar-highlight-color":"<color>","-ms-scrollbar-shadow-color":"<color>","-ms-scrollbar-track-color":"<color>","-ms-scroll-chaining":"chained|none","-ms-scroll-limit":"<\'-ms-scroll-limit-x-min\'> <\'-ms-scroll-limit-y-min\'> <\'-ms-scroll-limit-x-max\'> <\'-ms-scroll-limit-y-max\'>","-ms-scroll-limit-x-max":"auto|<length>","-ms-scroll-limit-x-min":"<length>","-ms-scroll-limit-y-max":"auto|<length>","-ms-scroll-limit-y-min":"<length>","-ms-scroll-rails":"none|railed","-ms-scroll-snap-points-x":"snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )","-ms-scroll-snap-points-y":"snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )","-ms-scroll-snap-type":"none|proximity|mandatory","-ms-scroll-snap-x":"<\'-ms-scroll-snap-type\'> <\'-ms-scroll-snap-points-x\'>","-ms-scroll-snap-y":"<\'-ms-scroll-snap-type\'> <\'-ms-scroll-snap-points-y\'>","-ms-scroll-translation":"none|vertical-to-horizontal","-ms-text-autospace":"none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space","-ms-touch-select":"grippers|none","-ms-user-select":"none|element|text","-ms-wrap-flow":"auto|both|start|end|maximum|clear","-ms-wrap-margin":"<length>","-ms-wrap-through":"wrap|none","-moz-appearance":"none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized","-moz-binding":"<url>|none","-moz-border-bottom-colors":"<color>+|none","-moz-border-left-colors":"<color>+|none","-moz-border-right-colors":"<color>+|none","-moz-border-top-colors":"<color>+|none","-moz-context-properties":"none|[fill|fill-opacity|stroke|stroke-opacity]#","-moz-float-edge":"border-box|content-box|margin-box|padding-box","-moz-force-broken-image-icon":"<integer>","-moz-image-region":"<shape>|auto","-moz-orient":"inline|block|horizontal|vertical","-moz-outline-radius":"<outline-radius>{1,4} [/ <outline-radius>{1,4}]?","-moz-outline-radius-bottomleft":"<outline-radius>","-moz-outline-radius-bottomright":"<outline-radius>","-moz-outline-radius-topleft":"<outline-radius>","-moz-outline-radius-topright":"<outline-radius>","-moz-stack-sizing":"ignore|stretch-to-fit","-moz-text-blink":"none|blink","-moz-user-focus":"ignore|normal|select-after|select-before|select-menu|select-same|select-all|none","-moz-user-input":"auto|none|enabled|disabled","-moz-user-modify":"read-only|read-write|write-only","-moz-window-dragging":"drag|no-drag","-moz-window-shadow":"default|menu|tooltip|sheet|none","-webkit-appearance":"none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|listbox|listitem|media-fullscreen-button|media-mute-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield","-webkit-border-before":"<\'border-width\'>||<\'border-style\'>||<\'color\'>","-webkit-border-before-color":"<\'color\'>","-webkit-border-before-style":"<\'border-style\'>","-webkit-border-before-width":"<\'border-width\'>","-webkit-box-reflect":"[above|below|right|left]? <length>? <image>?","-webkit-line-clamp":"none|<integer>","-webkit-mask":"[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#","-webkit-mask-attachment":"<attachment>#","-webkit-mask-clip":"[<box>|border|padding|content|text]#","-webkit-mask-composite":"<composite-style>#","-webkit-mask-image":"<mask-reference>#","-webkit-mask-origin":"[<box>|border|padding|content]#","-webkit-mask-position":"<position>#","-webkit-mask-position-x":"[<length-percentage>|left|center|right]#","-webkit-mask-position-y":"[<length-percentage>|top|center|bottom]#","-webkit-mask-repeat":"<repeat-style>#","-webkit-mask-repeat-x":"repeat|no-repeat|space|round","-webkit-mask-repeat-y":"repeat|no-repeat|space|round","-webkit-mask-size":"<bg-size>#","-webkit-overflow-scrolling":"auto|touch","-webkit-tap-highlight-color":"<color>","-webkit-text-fill-color":"<color>","-webkit-text-stroke":"<length>||<color>","-webkit-text-stroke-color":"<color>","-webkit-text-stroke-width":"<length>","-webkit-touch-callout":"default|none","-webkit-user-modify":"read-only|read-write|read-write-plaintext-only","align-content":"normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>","align-items":"normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]","align-self":"auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>","all":"initial|inherit|unset|revert","animation":"<single-animation>#","animation-delay":"<time>#","animation-direction":"<single-animation-direction>#","animation-duration":"<time>#","animation-fill-mode":"<single-animation-fill-mode>#","animation-iteration-count":"<single-animation-iteration-count>#","animation-name":"[none|<keyframes-name>]#","animation-play-state":"<single-animation-play-state>#","animation-timing-function":"<timing-function>#","appearance":"none|auto|button|textfield|<compat>","azimuth":"<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards","backdrop-filter":"none|<filter-function-list>","backface-visibility":"visible|hidden","background":"[<bg-layer> ,]* <final-bg-layer>","background-attachment":"<attachment>#","background-blend-mode":"<blend-mode>#","background-clip":"<box>#","background-color":"<color>","background-image":"<bg-image>#","background-origin":"<box>#","background-position":"<bg-position>#","background-position-x":"[center|[left|right|x-start|x-end]? <length-percentage>?]#","background-position-y":"[center|[top|bottom|y-start|y-end]? <length-percentage>?]#","background-repeat":"<repeat-style>#","background-size":"<bg-size>#","block-overflow":"clip|ellipsis|<string>","block-size":"<\'width\'>","border":"<line-width>||<line-style>||<color>","border-block":"<\'border-top-width\'>||<\'border-top-style\'>||<\'color\'>","border-block-color":"<\'border-top-color\'>{1,2}","border-block-style":"<\'border-top-style\'>","border-block-width":"<\'border-top-width\'>","border-block-end":"<\'border-top-width\'>||<\'border-top-style\'>||<\'color\'>","border-block-end-color":"<\'border-top-color\'>","border-block-end-style":"<\'border-top-style\'>","border-block-end-width":"<\'border-top-width\'>","border-block-start":"<\'border-top-width\'>||<\'border-top-style\'>||<\'color\'>","border-block-start-color":"<\'border-top-color\'>","border-block-start-style":"<\'border-top-style\'>","border-block-start-width":"<\'border-top-width\'>","border-bottom":"<line-width>||<line-style>||<color>","border-bottom-color":"<\'border-top-color\'>","border-bottom-left-radius":"<length-percentage>{1,2}","border-bottom-right-radius":"<length-percentage>{1,2}","border-bottom-style":"<line-style>","border-bottom-width":"<line-width>","border-collapse":"collapse|separate","border-color":"<color>{1,4}","border-end-end-radius":"<length-percentage>{1,2}","border-end-start-radius":"<length-percentage>{1,2}","border-image":"<\'border-image-source\'>||<\'border-image-slice\'> [/ <\'border-image-width\'>|/ <\'border-image-width\'>? / <\'border-image-outset\'>]?||<\'border-image-repeat\'>","border-image-outset":"[<length>|<number>]{1,4}","border-image-repeat":"[stretch|repeat|round|space]{1,2}","border-image-slice":"<number-percentage>{1,4}&&fill?","border-image-source":"none|<image>","border-image-width":"[<length-percentage>|<number>|auto]{1,4}","border-inline":"<\'border-top-width\'>||<\'border-top-style\'>||<\'color\'>","border-inline-end":"<\'border-top-width\'>||<\'border-top-style\'>||<\'color\'>","border-inline-color":"<\'border-top-color\'>{1,2}","border-inline-style":"<\'border-top-style\'>","border-inline-width":"<\'border-top-width\'>","border-inline-end-color":"<\'border-top-color\'>","border-inline-end-style":"<\'border-top-style\'>","border-inline-end-width":"<\'border-top-width\'>","border-inline-start":"<\'border-top-width\'>||<\'border-top-style\'>||<\'color\'>","border-inline-start-color":"<\'border-top-color\'>","border-inline-start-style":"<\'border-top-style\'>","border-inline-start-width":"<\'border-top-width\'>","border-left":"<line-width>||<line-style>||<color>","border-left-color":"<color>","border-left-style":"<line-style>","border-left-width":"<line-width>","border-radius":"<length-percentage>{1,4} [/ <length-percentage>{1,4}]?","border-right":"<line-width>||<line-style>||<color>","border-right-color":"<color>","border-right-style":"<line-style>","border-right-width":"<line-width>","border-spacing":"<length> <length>?","border-start-end-radius":"<length-percentage>{1,2}","border-start-start-radius":"<length-percentage>{1,2}","border-style":"<line-style>{1,4}","border-top":"<line-width>||<line-style>||<color>","border-top-color":"<color>","border-top-left-radius":"<length-percentage>{1,2}","border-top-right-radius":"<length-percentage>{1,2}","border-top-style":"<line-style>","border-top-width":"<line-width>","border-width":"<line-width>{1,4}","bottom":"<length>|<percentage>|auto","box-align":"start|center|end|baseline|stretch","box-decoration-break":"slice|clone","box-direction":"normal|reverse|inherit","box-flex":"<number>","box-flex-group":"<integer>","box-lines":"single|multiple","box-ordinal-group":"<integer>","box-orient":"horizontal|vertical|inline-axis|block-axis|inherit","box-pack":"start|center|end|justify","box-shadow":"none|<shadow>#","box-sizing":"content-box|border-box","break-after":"auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region","break-before":"auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region","break-inside":"auto|avoid|avoid-page|avoid-column|avoid-region","caption-side":"top|bottom|block-start|block-end|inline-start|inline-end","caret-color":"auto|<color>","clear":"none|left|right|both|inline-start|inline-end","clip":"<shape>|auto","clip-path":"<clip-source>|[<basic-shape>||<geometry-box>]|none","color":"<color>","color-adjust":"economy|exact","column-count":"<integer>|auto","column-fill":"auto|balance|balance-all","column-gap":"normal|<length-percentage>","column-rule":"<\'column-rule-width\'>||<\'column-rule-style\'>||<\'column-rule-color\'>","column-rule-color":"<color>","column-rule-style":"<\'border-style\'>","column-rule-width":"<\'border-width\'>","column-span":"none|all","column-width":"<length>|auto","columns":"<\'column-width\'>||<\'column-count\'>","contain":"none|strict|content|[size||layout||style||paint]","content":"normal|none|[<content-replacement>|<content-list>] [/ <string>]?","counter-increment":"[<custom-ident> <integer>?]+|none","counter-reset":"[<custom-ident> <integer>?]+|none","counter-set":"[<custom-ident> <integer>?]+|none","cursor":"[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]","direction":"ltr|rtl","display":"block|contents|flex|flow|flow-root|grid|inline|inline-block|inline-flex|inline-grid|inline-list-item|inline-table|list-item|none|ruby|ruby-base|ruby-base-container|ruby-text|ruby-text-container|run-in|table|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row|table-row-group|-ms-flexbox|-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box","empty-cells":"show|hide","filter":"none|<filter-function-list>|<-ms-filter-function-list>","flex":"none|[<\'flex-grow\'> <\'flex-shrink\'>?||<\'flex-basis\'>]","flex-basis":"content|<\'width\'>","flex-direction":"row|row-reverse|column|column-reverse","flex-flow":"<\'flex-direction\'>||<\'flex-wrap\'>","flex-grow":"<number>","flex-shrink":"<number>","flex-wrap":"nowrap|wrap|wrap-reverse","float":"left|right|none|inline-start|inline-end","font":"[[<\'font-style\'>||<font-variant-css21>||<\'font-weight\'>||<\'font-stretch\'>]? <\'font-size\'> [/ <\'line-height\'>]? <\'font-family\'>]|caption|icon|menu|message-box|small-caption|status-bar","font-family":"[<family-name>|<generic-family>]#","font-feature-settings":"normal|<feature-tag-value>#","font-kerning":"auto|normal|none","font-language-override":"normal|<string>","font-optical-sizing":"auto|none","font-variation-settings":"normal|[<string> <number>]#","font-size":"<absolute-size>|<relative-size>|<length-percentage>","font-size-adjust":"none|<number>","font-stretch":"<font-stretch-absolute>","font-style":"normal|italic|oblique <angle>?","font-synthesis":"none|[weight||style]","font-variant":"normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]","font-variant-alternates":"normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]","font-variant-caps":"normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps","font-variant-east-asian":"normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]","font-variant-ligatures":"normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]","font-variant-numeric":"normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]","font-variant-position":"normal|sub|super","font-weight":"<font-weight-absolute>|bolder|lighter","gap":"<\'row-gap\'> <\'column-gap\'>?","grid":"<\'grid-template\'>|<\'grid-template-rows\'> / [auto-flow&&dense?] <\'grid-auto-columns\'>?|[auto-flow&&dense?] <\'grid-auto-rows\'>? / <\'grid-template-columns\'>","grid-area":"<grid-line> [/ <grid-line>]{0,3}","grid-auto-columns":"<track-size>+","grid-auto-flow":"[row|column]||dense","grid-auto-rows":"<track-size>+","grid-column":"<grid-line> [/ <grid-line>]?","grid-column-end":"<grid-line>","grid-column-gap":"<length-percentage>","grid-column-start":"<grid-line>","grid-gap":"<\'grid-row-gap\'> <\'grid-column-gap\'>?","grid-row":"<grid-line> [/ <grid-line>]?","grid-row-end":"<grid-line>","grid-row-gap":"<length-percentage>","grid-row-start":"<grid-line>","grid-template":"none|[<\'grid-template-rows\'> / <\'grid-template-columns\'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?","grid-template-areas":"none|<string>+","grid-template-columns":"none|<track-list>|<auto-track-list>","grid-template-rows":"none|<track-list>|<auto-track-list>","hanging-punctuation":"none|[first||[force-end|allow-end]||last]","height":"[<length>|<percentage>]&&[border-box|content-box]?|available|min-content|max-content|fit-content|auto","hyphens":"none|manual|auto","image-orientation":"from-image|<angle>|[<angle>? flip]","image-rendering":"auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>","image-resolution":"[from-image||<resolution>]&&snap?","ime-mode":"auto|normal|active|inactive|disabled","initial-letter":"normal|[<number> <integer>?]","initial-letter-align":"[auto|alphabetic|hanging|ideographic]","inline-size":"<\'width\'>","inset":"<\'top\'>{1,4}","inset-block":"<\'top\'>{1,2}","inset-block-end":"<\'top\'>","inset-block-start":"<\'top\'>","inset-inline":"<\'top\'>{1,2}","inset-inline-end":"<\'top\'>","inset-inline-start":"<\'top\'>","isolation":"auto|isolate","justify-content":"normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]","justify-items":"normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]","justify-self":"auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]","left":"<length>|<percentage>|auto","letter-spacing":"normal|<length-percentage>","line-break":"auto|loose|normal|strict","line-clamp":"none|<integer>","line-height":"normal|<number>|<length>|<percentage>","line-height-step":"<length>","list-style":"<\'list-style-type\'>||<\'list-style-position\'>||<\'list-style-image\'>","list-style-image":"<url>|none","list-style-position":"inside|outside","list-style-type":"<counter-style>|<string>|none","margin":"[<length>|<percentage>|auto]{1,4}","margin-block":"<\'margin-left\'>{1,2}","margin-block-end":"<\'margin-left\'>","margin-block-start":"<\'margin-left\'>","margin-bottom":"<length>|<percentage>|auto","margin-inline":"<\'margin-left\'>{1,2}","margin-inline-end":"<\'margin-left\'>","margin-inline-start":"<\'margin-left\'>","margin-left":"<length>|<percentage>|auto","margin-right":"<length>|<percentage>|auto","margin-top":"<length>|<percentage>|auto","mask":"<mask-layer>#","mask-border":"<\'mask-border-source\'>||<\'mask-border-slice\'> [/ <\'mask-border-width\'>? [/ <\'mask-border-outset\'>]?]?||<\'mask-border-repeat\'>||<\'mask-border-mode\'>","mask-border-mode":"luminance|alpha","mask-border-outset":"[<length>|<number>]{1,4}","mask-border-repeat":"[stretch|repeat|round|space]{1,2}","mask-border-slice":"<number-percentage>{1,4} fill?","mask-border-source":"none|<image>","mask-border-width":"[<length-percentage>|<number>|auto]{1,4}","mask-clip":"[<geometry-box>|no-clip]#","mask-composite":"<compositing-operator>#","mask-image":"<mask-reference>#","mask-mode":"<masking-mode>#","mask-origin":"<geometry-box>#","mask-position":"<position>#","mask-repeat":"<repeat-style>#","mask-size":"<bg-size>#","mask-type":"luminance|alpha","max-block-size":"<\'max-width\'>","max-height":"<length>|<percentage>|none|max-content|min-content|fit-content|fill-available","max-inline-size":"<\'max-width\'>","max-lines":"none|<integer>","max-width":"<length>|<percentage>|none|max-content|min-content|fit-content|fill-available|<-non-standard-width>","min-block-size":"<\'min-width\'>","min-height":"<length>|<percentage>|auto|max-content|min-content|fit-content|fill-available","min-inline-size":"<\'min-width\'>","min-width":"<length>|<percentage>|auto|max-content|min-content|fit-content|fill-available|<-non-standard-width>","mix-blend-mode":"<blend-mode>","object-fit":"fill|contain|cover|none|scale-down","object-position":"<position>","offset":"[<\'offset-position\'>? [<\'offset-path\'> [<\'offset-distance\'>||<\'offset-rotate\'>]?]?]! [/ <\'offset-anchor\'>]?","offset-anchor":"auto|<position>","offset-distance":"<length-percentage>","offset-path":"none|ray( [<angle>&&<size>?&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]","offset-position":"auto|<position>","offset-rotate":"[auto|reverse]||<angle>","opacity":"<number-zero-one>","order":"<integer>","orphans":"<integer>","outline":"[<\'outline-color\'>||<\'outline-style\'>||<\'outline-width\'>]","outline-color":"<color>|invert","outline-offset":"<length>","outline-style":"auto|<\'border-style\'>","outline-width":"<line-width>","overflow":"[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>","overflow-anchor":"auto|none","overflow-block":"visible|hidden|clip|scroll|auto","overflow-clip-box":"padding-box|content-box","overflow-inline":"visible|hidden|clip|scroll|auto","overflow-wrap":"normal|break-word|anywhere","overflow-x":"visible|hidden|clip|scroll|auto","overflow-y":"visible|hidden|clip|scroll|auto","overscroll-behavior":"[contain|none|auto]{1,2}","overscroll-behavior-x":"contain|none|auto","overscroll-behavior-y":"contain|none|auto","padding":"[<length>|<percentage>]{1,4}","padding-block":"<\'padding-left\'>{1,2}","padding-block-end":"<\'padding-left\'>","padding-block-start":"<\'padding-left\'>","padding-bottom":"<length>|<percentage>","padding-inline":"<\'padding-left\'>{1,2}","padding-inline-end":"<\'padding-left\'>","padding-inline-start":"<\'padding-left\'>","padding-left":"<length>|<percentage>","padding-right":"<length>|<percentage>","padding-top":"<length>|<percentage>","page-break-after":"auto|always|avoid|left|right|recto|verso","page-break-before":"auto|always|avoid|left|right|recto|verso","page-break-inside":"auto|avoid","paint-order":"normal|[fill||stroke||markers]","perspective":"none|<length>","perspective-origin":"<position>","place-content":"<\'align-content\'> <\'justify-content\'>?","place-items":"<\'align-items\'> <\'justify-items\'>?","place-self":"<\'align-self\'> <\'justify-self\'>?","pointer-events":"auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit","position":"static|relative|absolute|sticky|fixed|-webkit-sticky","quotes":"none|[<string> <string>]+","resize":"none|both|horizontal|vertical|block|inline","right":"<length>|<percentage>|auto","rotate":"none|<angle>|[x|y|z|<number>{3}]&&<angle>","row-gap":"normal|<length-percentage>","ruby-align":"start|center|space-between|space-around","ruby-merge":"separate|collapse|auto","ruby-position":"over|under|inter-character","scale":"none|<number>{1,3}","scrollbar-color":"auto|dark|light|<color>{2}","scrollbar-width":"auto|thin|none","scroll-behavior":"auto|smooth","scroll-margin":"<length>{1,4}","scroll-margin-block":"<length>{1,2}","scroll-margin-block-start":"<length>","scroll-margin-block-end":"<length>","scroll-margin-bottom":"<length>","scroll-margin-inline":"<length>{1,2}","scroll-margin-inline-start":"<length>","scroll-margin-inline-end":"<length>","scroll-margin-left":"<length>","scroll-margin-right":"<length>","scroll-margin-top":"<length>","scroll-padding":"[auto|<length-percentage>]{1,4}","scroll-padding-block":"[auto|<length-percentage>]{1,2}","scroll-padding-block-start":"auto|<length-percentage>","scroll-padding-block-end":"auto|<length-percentage>","scroll-padding-bottom":"auto|<length-percentage>","scroll-padding-inline":"[auto|<length-percentage>]{1,2}","scroll-padding-inline-start":"auto|<length-percentage>","scroll-padding-inline-end":"auto|<length-percentage>","scroll-padding-left":"auto|<length-percentage>","scroll-padding-right":"auto|<length-percentage>","scroll-padding-top":"auto|<length-percentage>","scroll-snap-align":"[none|start|end|center]{1,2}","scroll-snap-coordinate":"none|<position>#","scroll-snap-destination":"<position>","scroll-snap-points-x":"none|repeat( <length-percentage> )","scroll-snap-points-y":"none|repeat( <length-percentage> )","scroll-snap-stop":"normal|always","scroll-snap-type":"none|[x|y|block|inline|both] [mandatory|proximity]?","scroll-snap-type-x":"none|mandatory|proximity","scroll-snap-type-y":"none|mandatory|proximity","shape-image-threshold":"<number>","shape-margin":"<length-percentage>","shape-outside":"none|<shape-box>||<basic-shape>|<image>","tab-size":"<integer>|<length>","table-layout":"auto|fixed","text-align":"start|end|left|right|center|justify|match-parent","text-align-last":"auto|start|end|left|right|center|justify","text-combine-upright":"none|all|[digits <integer>?]","text-decoration":"<\'text-decoration-line\'>||<\'text-decoration-style\'>||<\'text-decoration-color\'>","text-decoration-color":"<color>","text-decoration-line":"none|[underline||overline||line-through||blink]","text-decoration-skip":"none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]","text-decoration-skip-ink":"auto|none","text-decoration-style":"solid|double|dotted|dashed|wavy","text-emphasis":"<\'text-emphasis-style\'>||<\'text-emphasis-color\'>","text-emphasis-color":"<color>","text-emphasis-position":"[over|under]&&[right|left]","text-emphasis-style":"none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>","text-indent":"<length-percentage>&&hanging?&&each-line?","text-justify":"auto|inter-character|inter-word|none","text-orientation":"mixed|upright|sideways","text-overflow":"[clip|ellipsis|<string>]{1,2}","text-rendering":"auto|optimizeSpeed|optimizeLegibility|geometricPrecision","text-shadow":"none|<shadow-t>#","text-size-adjust":"none|auto|<percentage>","text-transform":"none|capitalize|uppercase|lowercase|full-width|full-size-kana","text-underline-position":"auto|[under||[left|right]]","top":"<length>|<percentage>|auto","touch-action":"auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation","transform":"none|<transform-list>","transform-box":"border-box|fill-box|view-box","transform-origin":"[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?","transform-style":"flat|preserve-3d","transition":"<single-transition>#","transition-delay":"<time>#","transition-duration":"<time>#","transition-property":"none|<single-transition-property>#","transition-timing-function":"<timing-function>#","translate":"none|<length-percentage> [<length-percentage> <length>?]?","unicode-bidi":"normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate","user-select":"auto|text|none|contain|all","vertical-align":"baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>","visibility":"visible|hidden|collapse","white-space":"normal|pre|nowrap|pre-wrap|pre-line","widows":"<integer>","width":"[<length>|<percentage>]&&[border-box|content-box]?|available|min-content|max-content|fit-content|auto","will-change":"auto|<animateable-feature>#","word-break":"normal|break-all|keep-all|break-word","word-spacing":"normal|<length-percentage>","word-wrap":"normal|break-word","writing-mode":"horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>","z-index":"auto|<integer>","zoom":"normal|reset|<number>|<percentage>","-moz-background-clip":"padding|border","-moz-border-radius-bottomleft":"<\'border-bottom-left-radius\'>","-moz-border-radius-bottomright":"<\'border-bottom-right-radius\'>","-moz-border-radius-topleft":"<\'border-top-left-radius\'>","-moz-border-radius-topright":"<\'border-bottom-right-radius\'>","-moz-control-character-visibility":"visible|hidden","-moz-osx-font-smoothing":"auto|grayscale","-moz-user-select":"none|text|all|-moz-none","-ms-flex-align":"start|end|center|baseline|stretch","-ms-flex-item-align":"auto|start|end|center|baseline|stretch","-ms-flex-line-pack":"start|end|center|justify|distribute|stretch","-ms-flex-negative":"<\'flex-shrink\'>","-ms-flex-pack":"start|end|center|justify|distribute","-ms-flex-order":"<integer>","-ms-flex-positive":"<\'flex-grow\'>","-ms-flex-preferred-size":"<\'flex-basis\'>","-ms-interpolation-mode":"nearest-neighbor|bicubic","-ms-grid-column-align":"start|end|center|stretch","-ms-grid-columns":"<track-list-v0>","-ms-grid-row-align":"start|end|center|stretch","-ms-grid-rows":"<track-list-v0>","-ms-hyphenate-limit-last":"none|always|column|page|spread","-webkit-background-clip":"[<box>|border|padding|content|text]#","-webkit-column-break-after":"always|auto|avoid","-webkit-column-break-before":"always|auto|avoid","-webkit-column-break-inside":"always|auto|avoid","-webkit-font-smoothing":"auto|none|antialiased|subpixel-antialiased","-webkit-mask-box-image":"[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?","-webkit-print-color-adjust":"economy|exact","-webkit-text-security":"none|circle|disc|square","-webkit-user-drag":"none|element|auto","-webkit-user-select":"auto|none|text|all","alignment-baseline":"auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical","baseline-shift":"baseline|sub|super|<svg-length>","behavior":"<url>+","clip-rule":"nonzero|evenodd","cue":"<\'cue-before\'> <\'cue-after\'>?","cue-after":"<url> <decibel>?|none","cue-before":"<url> <decibel>?|none","dominant-baseline":"auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge","fill":"<paint>","fill-opacity":"<number-zero-one>","fill-rule":"nonzero|evenodd","glyph-orientation-horizontal":"<angle>","glyph-orientation-vertical":"<angle>","kerning":"auto|<svg-length>","marker":"none|<url>","marker-end":"none|<url>","marker-mid":"none|<url>","marker-start":"none|<url>","pause":"<\'pause-before\'> <\'pause-after\'>?","pause-after":"<time>|none|x-weak|weak|medium|strong|x-strong","pause-before":"<time>|none|x-weak|weak|medium|strong|x-strong","rest":"<\'rest-before\'> <\'rest-after\'>?","rest-after":"<time>|none|x-weak|weak|medium|strong|x-strong","rest-before":"<time>|none|x-weak|weak|medium|strong|x-strong","shape-rendering":"auto|optimizeSpeed|crispEdges|geometricPrecision","src":"[<url> [format( <string># )]?|local( <family-name> )]#","speak":"auto|none|normal","speak-as":"normal|spell-out||digits||[literal-punctuation|no-punctuation]","stroke":"<paint>","stroke-dasharray":"none|[<svg-length>+]#","stroke-dashoffset":"<svg-length>","stroke-linecap":"butt|round|square","stroke-linejoin":"miter|round|bevel","stroke-miterlimit":"<number-one-or-greater>","stroke-opacity":"<number-zero-one>","stroke-width":"<svg-length>","text-anchor":"start|middle|end","unicode-range":"<urange>#","voice-balance":"<number>|left|center|right|leftwards|rightwards","voice-duration":"auto|<time>","voice-family":"[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve","voice-pitch":"<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]","voice-range":"<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]","voice-rate":"[normal|x-slow|slow|medium|fast|x-fast]||<percentage>","voice-stress":"normal|strong|moderate|none|reduced","voice-volume":"silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]"}}')},function(e,t,r){var n=r(0).cmpChar
var a=r(0).isDigit
var i=r(0).TYPE
var o=i.WhiteSpace
var s=i.Comment
var l=i.Ident
var c=i.Number
var u=i.Dimension
var f=110
function h(e,t){var r=this.scanner.tokenStart+e
var n=this.scanner.source.charCodeAt(r)
if(43===n||45===n){t&&this.error("Number sign is not allowed")
r++}for(;r<this.scanner.tokenEnd;r++)a(this.scanner.source.charCodeAt(r))||this.error("Integer is expected",r)}function d(e){return h.call(this,0,e)}function p(e,t){if(!n(this.scanner.source,this.scanner.tokenStart+e,t)){var r=""
switch(t){case f:r="N is expected"
break
case 45:r="HyphenMinus is expected"}this.error(r,this.scanner.tokenStart+e)}}function m(){var e=0
var t=0
var r=this.scanner.tokenType
for(;r===o||r===s;)r=this.scanner.lookupType(++e)
if(r!==c){if(!this.scanner.isDelim(43,e)&&!this.scanner.isDelim(45,e))return null
t=this.scanner.isDelim(43,e)?43:45
do{r=this.scanner.lookupType(++e)}while(r===o||r===s)
if(r!==c){this.scanner.skip(e)
d.call(this,!0)}}e>0&&this.scanner.skip(e)
0===t&&43!==(r=this.scanner.source.charCodeAt(this.scanner.tokenStart))&&45!==r&&this.error("Number sign is expected")
d.call(this,0!==t)
return 45===t?"-"+this.consume(c):this.consume(c)}e.exports={name:"AnPlusB",structure:{a:[String,null],b:[String,null]},parse:function(){var e=this.scanner.tokenStart
var t=null
var r=null
if(this.scanner.tokenType===c){d.call(this,!1)
r=this.consume(c)}else if(this.scanner.tokenType===l&&n(this.scanner.source,this.scanner.tokenStart,45)){t="-1"
p.call(this,1,f)
switch(this.scanner.getTokenLength()){case 2:this.scanner.next()
r=m.call(this)
break
case 3:p.call(this,2,45)
this.scanner.next()
this.scanner.skipSC()
d.call(this,!0)
r="-"+this.consume(c)
break
default:p.call(this,2,45)
h.call(this,3,!0)
this.scanner.next()
r=this.scanner.substrToCursor(e+2)}}else if(this.scanner.tokenType===l||this.scanner.isDelim(43)&&this.scanner.lookupType(1)===l){var i=0
t="1"
if(this.scanner.isDelim(43)){i=1
this.scanner.next()}p.call(this,0,f)
switch(this.scanner.getTokenLength()){case 1:this.scanner.next()
r=m.call(this)
break
case 2:p.call(this,1,45)
this.scanner.next()
this.scanner.skipSC()
d.call(this,!0)
r="-"+this.consume(c)
break
default:p.call(this,1,45)
h.call(this,2,!0)
this.scanner.next()
r=this.scanner.substrToCursor(e+i+1)}}else if(this.scanner.tokenType===u){var o=this.scanner.source.charCodeAt(this.scanner.tokenStart)
i=43===o||45===o
for(var s=this.scanner.tokenStart+i;s<this.scanner.tokenEnd&&a(this.scanner.source.charCodeAt(s));s++);s===this.scanner.tokenStart+i&&this.error("Integer is expected",this.scanner.tokenStart+i)
p.call(this,s-this.scanner.tokenStart,f)
t=this.scanner.source.substring(e,s)
if(s+1===this.scanner.tokenEnd){this.scanner.next()
r=m.call(this)}else{p.call(this,s-this.scanner.tokenStart+1,45)
if(s+2===this.scanner.tokenEnd){this.scanner.next()
this.scanner.skipSC()
d.call(this,!0)
r="-"+this.consume(c)}else{h.call(this,s-this.scanner.tokenStart+2,!0)
this.scanner.next()
r=this.scanner.substrToCursor(s+1)}}}else this.error()
null!==t&&43===t.charCodeAt(0)&&(t=t.substr(1))
null!==r&&43===r.charCodeAt(0)&&(r=r.substr(1))
return{type:"AnPlusB",loc:this.getLocation(e,this.scanner.tokenStart),a:t,b:r}},generate:function(e){var t=null!==e.a&&void 0!==e.a
var r=null!==e.b&&void 0!==e.b
if(t){this.chunk("+1"===e.a?"+n":"1"===e.a?"n":"-1"===e.a?"-n":e.a+"n")
if(r)if("-"===(r=String(e.b)).charAt(0)||"+"===r.charAt(0)){this.chunk(r.charAt(0))
this.chunk(r.substr(1))}else{this.chunk("+")
this.chunk(r)}}else this.chunk(String(e.b))}}},function(e,t,r){var n=r(0).TYPE
var a=r(4).mode
var i=n.AtKeyword
var o=n.Semicolon
var s=n.LeftCurlyBracket
var l=n.RightCurlyBracket
function c(e){return this.Raw(e,a.leftCurlyBracketOrSemicolon,!0)}function u(){for(var e,t=1;e=this.scanner.lookupType(t);t++){if(e===l)return!0
if(e===s||e===i)return!1}return!1}e.exports={name:"Atrule",structure:{name:String,prelude:["AtrulePrelude","Raw",null],block:["Block",null]},parse:function(){var e=this.scanner.tokenStart
var t
var r
var n=null
var a=null
this.eat(i)
r=(t=this.scanner.substrToCursor(e+1)).toLowerCase()
this.scanner.skipSC()
if(!1===this.scanner.eof&&this.scanner.tokenType!==s&&this.scanner.tokenType!==o){this.parseAtrulePrelude?"AtrulePrelude"===(n=this.parseWithFallback(this.AtrulePrelude.bind(this,t),c)).type&&null===n.children.head&&(n=null):n=c.call(this,this.scanner.tokenIndex)
this.scanner.skipSC()}switch(this.scanner.tokenType){case o:this.scanner.next()
break
case s:a=this.atrule.hasOwnProperty(r)&&"function"==typeof this.atrule[r].block?this.atrule[r].block.call(this):this.Block(u.call(this))}return{type:"Atrule",loc:this.getLocation(e,this.scanner.tokenStart),name:t,prelude:n,block:a}},generate:function(e){this.chunk("@")
this.chunk(e.name)
if(null!==e.prelude){this.chunk(" ")
this.node(e.prelude)}e.block?this.node(e.block):this.chunk(";")},walkContext:"atrule"}},function(e,t,r){var n=r(0).TYPE
var a=n.Semicolon
var i=n.LeftCurlyBracket
e.exports={name:"AtrulePrelude",structure:{children:[[]]},parse:function(e){var t=null
null!==e&&(e=e.toLowerCase())
this.scanner.skipSC()
t=this.atrule.hasOwnProperty(e)&&"function"==typeof this.atrule[e].prelude?this.atrule[e].prelude.call(this):this.readSequence(this.scope.AtrulePrelude)
this.scanner.skipSC()
!0!==this.scanner.eof&&this.scanner.tokenType!==i&&this.scanner.tokenType!==a&&this.error("Semicolon or block is expected")
null===t&&(t=this.createList())
return{type:"AtrulePrelude",loc:this.getLocationFromList(t),children:t}},generate:function(e){this.children(e)},walkContext:"atrulePrelude"}},function(e,t,r){var n=r(0).TYPE
var a=n.Ident
var i=n.String
var o=n.Colon
var s=n.LeftSquareBracket
var l=n.RightSquareBracket
function c(){this.scanner.eof&&this.error("Unexpected end of input")
var e=this.scanner.tokenStart
var t=!1
var r=!0
if(this.scanner.isDelim(42)){t=!0
r=!1
this.scanner.next()}else this.scanner.isDelim(124)||this.eat(a)
if(this.scanner.isDelim(124))if(61!==this.scanner.source.charCodeAt(this.scanner.tokenStart+1)){this.scanner.next()
this.eat(a)}else t&&this.error("Identifier is expected",this.scanner.tokenEnd)
else t&&this.error("Vertical line is expected")
if(r&&this.scanner.tokenType===o){this.scanner.next()
this.eat(a)}return{type:"Identifier",loc:this.getLocation(e,this.scanner.tokenStart),name:this.scanner.substrToCursor(e)}}function u(){var e=this.scanner.tokenStart
var t=this.scanner.source.charCodeAt(e)
61!==t&&126!==t&&94!==t&&36!==t&&42!==t&&124!==t&&this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected")
this.scanner.next()
if(61!==t){this.scanner.isDelim(61)||this.error("Equal sign is expected")
this.scanner.next()}return this.scanner.substrToCursor(e)}e.exports={name:"AttributeSelector",structure:{name:"Identifier",matcher:[String,null],value:["String","Identifier",null],flags:[String,null]},parse:function(){var e=this.scanner.tokenStart
var t
var r=null
var n=null
var o=null
this.eat(s)
this.scanner.skipSC()
t=c.call(this)
this.scanner.skipSC()
if(this.scanner.tokenType!==l){if(this.scanner.tokenType!==a){r=u.call(this)
this.scanner.skipSC()
n=this.scanner.tokenType===i?this.String():this.Identifier()
this.scanner.skipSC()}if(this.scanner.tokenType===a){o=this.scanner.getTokenValue()
this.scanner.next()
this.scanner.skipSC()}}this.eat(l)
return{type:"AttributeSelector",loc:this.getLocation(e,this.scanner.tokenStart),name:t,matcher:r,value:n,flags:o}},generate:function(e){var t=" "
this.chunk("[")
this.node(e.name)
if(null!==e.matcher){this.chunk(e.matcher)
if(null!==e.value){this.node(e.value)
"String"===e.value.type&&(t="")}}if(null!==e.flags){this.chunk(t)
this.chunk(e.flags)}this.chunk("]")}}},function(e,t,r){var n=r(0).TYPE
var a=r(4).mode
var i=n.WhiteSpace
var o=n.Comment
var s=n.Semicolon
var l=n.AtKeyword
var c=n.LeftCurlyBracket
var u=n.RightCurlyBracket
function f(e){return this.Raw(e,null,!0)}function h(){return this.parseWithFallback(this.Rule,f)}function d(e){return this.Raw(e,a.semicolonIncluded,!0)}function p(){if(this.scanner.tokenType===s)return d.call(this,this.scanner.tokenIndex)
var e=this.parseWithFallback(this.Declaration,d)
this.scanner.tokenType===s&&this.scanner.next()
return e}e.exports={name:"Block",structure:{children:[["Atrule","Rule","Declaration"]]},parse:function(e){var t=e?p:h
var r=this.scanner.tokenStart
var n=this.createList()
this.eat(c)
e:for(;!this.scanner.eof;)switch(this.scanner.tokenType){case u:break e
case i:case o:this.scanner.next()
break
case l:n.push(this.parseWithFallback(this.Atrule,f))
break
default:n.push(t.call(this))}this.scanner.eof||this.eat(u)
return{type:"Block",loc:this.getLocation(r,this.scanner.tokenStart),children:n}},generate:function(e){this.chunk("{")
this.children(e,(function(e){"Declaration"===e.type&&this.chunk(";")}))
this.chunk("}")},walkContext:"block"}},function(e,t,r){var n=r(0).TYPE
var a=n.LeftSquareBracket
var i=n.RightSquareBracket
e.exports={name:"Brackets",structure:{children:[[]]},parse:function(e,t){var r=this.scanner.tokenStart
var n
this.eat(a)
n=e.call(this,t)
this.scanner.eof||this.eat(i)
return{type:"Brackets",loc:this.getLocation(r,this.scanner.tokenStart),children:n}},generate:function(e){this.chunk("[")
this.children(e)
this.chunk("]")}}},function(e,t,r){var n=r(0).TYPE.CDC
e.exports={name:"CDC",structure:[],parse:function(){var e=this.scanner.tokenStart
this.eat(n)
return{type:"CDC",loc:this.getLocation(e,this.scanner.tokenStart)}},generate:function(){this.chunk("--\x3e")}}},function(e,t,r){var n=r(0).TYPE.CDO
e.exports={name:"CDO",structure:[],parse:function(){var e=this.scanner.tokenStart
this.eat(n)
return{type:"CDO",loc:this.getLocation(e,this.scanner.tokenStart)}},generate:function(){this.chunk("\x3c!--")}}},function(e,t,r){var n=r(0).TYPE.Ident
e.exports={name:"ClassSelector",structure:{name:String},parse:function(){this.scanner.isDelim(46)||this.error("Full stop is expected")
this.scanner.next()
return{type:"ClassSelector",loc:this.getLocation(this.scanner.tokenStart-1,this.scanner.tokenEnd),name:this.consume(n)}},generate:function(e){this.chunk(".")
this.chunk(e.name)}}},function(e,t,r){var n=r(0).TYPE.Ident
e.exports={name:"Combinator",structure:{name:String},parse:function(){var e=this.scanner.tokenStart
switch(this.scanner.source.charCodeAt(this.scanner.tokenStart)){case 62:case 43:case 126:this.scanner.next()
break
case 47:this.scanner.next()
this.scanner.tokenType===n&&!1!==this.scanner.lookupValue(0,"deep")||this.error("Identifier `deep` is expected")
this.scanner.next()
this.scanner.isDelim(47)||this.error("Solidus is expected")
this.scanner.next()
break
default:this.error("Combinator is expected")}return{type:"Combinator",loc:this.getLocation(e,this.scanner.tokenStart),name:this.scanner.substrToCursor(e)}},generate:function(e){this.chunk(e.name)}}},function(e,t,r){var n=r(0).TYPE.Comment
e.exports={name:"Comment",structure:{value:String},parse:function(){var e=this.scanner.tokenStart
var t=this.scanner.tokenEnd
this.eat(n)
t-e+2>=2&&42===this.scanner.source.charCodeAt(t-2)&&47===this.scanner.source.charCodeAt(t-1)&&(t-=2)
return{type:"Comment",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.source.substring(e+2,t)}},generate:function(e){this.chunk("/*")
this.chunk(e.value)
this.chunk("*/")}}},function(e,t,r){var n=r(28).isCustomProperty
var a=r(0).TYPE
var i=r(4).mode
var o=a.Ident
var s=a.Hash
var l=a.Colon
var c=a.Semicolon
var u=a.Delim
function f(e){return this.Raw(e,i.exclamationMarkOrSemicolon,!0)}function h(e){return this.Raw(e,i.exclamationMarkOrSemicolon,!1)}function d(){var e=this.scanner.tokenIndex
var t=this.Value()
"Raw"!==t.type&&!1===this.scanner.eof&&this.scanner.tokenType!==c&&!1===this.scanner.isDelim(33)&&!1===this.scanner.isBalanceEdge(e)&&this.error()
return t}e.exports={name:"Declaration",structure:{important:[Boolean,String],property:String,value:["Value","Raw"]},parse:function(){var e=this.scanner.tokenStart
var t=this.scanner.tokenIndex
var r=p.call(this)
var a=n(r)
var i=a?this.parseCustomProperty:this.parseValue
var o=a?h:f
var s=!1
var u
this.scanner.skipSC()
this.eat(l)
a||this.scanner.skipSC()
u=i?this.parseWithFallback(d,o):o.call(this,this.scanner.tokenIndex)
if(this.scanner.isDelim(33)){s=m.call(this)
this.scanner.skipSC()}!1===this.scanner.eof&&this.scanner.tokenType!==c&&!1===this.scanner.isBalanceEdge(t)&&this.error()
return{type:"Declaration",loc:this.getLocation(e,this.scanner.tokenStart),important:s,property:r,value:u}},generate:function(e){this.chunk(e.property)
this.chunk(":")
this.node(e.value)
e.important&&this.chunk(!0===e.important?"!important":"!"+e.important)},walkContext:"declaration"}
function p(){var e=this.scanner.tokenStart
if(this.scanner.tokenType===u)switch(this.scanner.source.charCodeAt(this.scanner.tokenStart)){case 42:case 36:case 43:case 35:case 38:this.scanner.next()
break
case 47:this.scanner.next()
this.scanner.isDelim(47)&&this.scanner.next()}this.scanner.tokenType===s?this.eat(s):this.eat(o)
return this.scanner.substrToCursor(e)}function m(){this.eat(u)
this.scanner.skipSC()
var e=this.consume(o)
return"important"===e||e}},function(e,t,r){var n=r(0).TYPE
var a=r(4).mode
var i=n.WhiteSpace
var o=n.Comment
var s=n.Semicolon
function l(e){return this.Raw(e,a.semicolonIncluded,!0)}e.exports={name:"DeclarationList",structure:{children:[["Declaration"]]},parse:function(){var e=this.createList()
for(;!this.scanner.eof;)switch(this.scanner.tokenType){case i:case o:case s:this.scanner.next()
break
default:e.push(this.parseWithFallback(this.Declaration,l))}return{type:"DeclarationList",loc:this.getLocationFromList(e),children:e}},generate:function(e){this.children(e,(function(e){"Declaration"===e.type&&this.chunk(";")}))}}},function(e,t,r){var n=r(10).consumeNumber
var a=r(0).TYPE.Dimension
e.exports={name:"Dimension",structure:{value:String,unit:String},parse:function(){var e=this.scanner.tokenStart
var t=n(this.scanner.source,e)
this.eat(a)
return{type:"Dimension",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.source.substring(e,t),unit:this.scanner.source.substring(t,this.scanner.tokenStart)}},generate:function(e){this.chunk(e.value)
this.chunk(e.unit)}}},function(e,t,r){var n=r(0).TYPE.RightParenthesis
e.exports={name:"Function",structure:{name:String,children:[[]]},parse:function(e,t){var r=this.scanner.tokenStart
var a=this.consumeFunctionName()
var i=a.toLowerCase()
var o
o=t.hasOwnProperty(i)?t[i].call(this,t):e.call(this,t)
this.scanner.eof||this.eat(n)
return{type:"Function",loc:this.getLocation(r,this.scanner.tokenStart),name:a,children:o}},generate:function(e){this.chunk(e.name)
this.chunk("(")
this.children(e)
this.chunk(")")},walkContext:"function"}},function(e,t,r){var n=r(0).TYPE.Hash
e.exports={name:"HexColor",structure:{value:String},parse:function(){var e=this.scanner.tokenStart
this.eat(n)
return{type:"HexColor",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.substrToCursor(e+1)}},generate:function(e){this.chunk("#")
this.chunk(e.value)}}},function(e,t,r){var n=r(0).TYPE.Ident
e.exports={name:"Identifier",structure:{name:String},parse:function(){return{type:"Identifier",loc:this.getLocation(this.scanner.tokenStart,this.scanner.tokenEnd),name:this.consume(n)}},generate:function(e){this.chunk(e.name)}}},function(e,t,r){var n=r(0).TYPE.Hash
e.exports={name:"IdSelector",structure:{name:String},parse:function(){var e=this.scanner.tokenStart
this.eat(n)
return{type:"IdSelector",loc:this.getLocation(e,this.scanner.tokenStart),name:this.scanner.substrToCursor(e+1)}},generate:function(e){this.chunk("#")
this.chunk(e.name)}}},function(e,t,r){var n=r(0).TYPE
var a=n.Ident
var i=n.Number
var o=n.Dimension
var s=n.LeftParenthesis
var l=n.RightParenthesis
var c=n.Colon
var u=n.Delim
e.exports={name:"MediaFeature",structure:{name:String,value:["Identifier","Number","Dimension","Ratio",null]},parse:function(){var e=this.scanner.tokenStart
var t
var r=null
this.eat(s)
this.scanner.skipSC()
t=this.consume(a)
this.scanner.skipSC()
if(this.scanner.tokenType!==l){this.eat(c)
this.scanner.skipSC()
switch(this.scanner.tokenType){case i:r=this.lookupNonWSType(1)===u?this.Ratio():this.Number()
break
case o:r=this.Dimension()
break
case a:r=this.Identifier()
break
default:this.error("Number, dimension, ratio or identifier is expected")}this.scanner.skipSC()}this.eat(l)
return{type:"MediaFeature",loc:this.getLocation(e,this.scanner.tokenStart),name:t,value:r}},generate:function(e){this.chunk("(")
this.chunk(e.name)
if(null!==e.value){this.chunk(":")
this.node(e.value)}this.chunk(")")}}},function(e,t,r){var n=r(0).TYPE
var a=n.WhiteSpace
var i=n.Comment
var o=n.Ident
var s=n.LeftParenthesis
e.exports={name:"MediaQuery",structure:{children:[["Identifier","MediaFeature","WhiteSpace"]]},parse:function(){this.scanner.skipSC()
var e=this.createList()
var t=null
var r=null
e:for(;!this.scanner.eof;){switch(this.scanner.tokenType){case i:this.scanner.next()
continue
case a:r=this.WhiteSpace()
continue
case o:t=this.Identifier()
break
case s:t=this.MediaFeature()
break
default:break e}if(null!==r){e.push(r)
r=null}e.push(t)}null===t&&this.error("Identifier or parenthesis is expected")
return{type:"MediaQuery",loc:this.getLocationFromList(e),children:e}},generate:function(e){this.children(e)}}},function(e,t,r){var n=r(0).TYPE.Comma
e.exports={name:"MediaQueryList",structure:{children:[["MediaQuery"]]},parse:function(e){var t=this.createList()
this.scanner.skipSC()
for(;!this.scanner.eof;){t.push(this.MediaQuery(e))
if(this.scanner.tokenType!==n)break
this.scanner.next()}return{type:"MediaQueryList",loc:this.getLocationFromList(t),children:t}},generate:function(e){this.children(e,(function(){this.chunk(",")}))}}},function(e,t){e.exports={name:"Nth",structure:{nth:["AnPlusB","Identifier"],selector:["SelectorList",null]},parse:function(e){this.scanner.skipSC()
var t=this.scanner.tokenStart
var r=t
var n=null
var a
a=this.scanner.lookupValue(0,"odd")||this.scanner.lookupValue(0,"even")?this.Identifier():this.AnPlusB()
this.scanner.skipSC()
if(e&&this.scanner.lookupValue(0,"of")){this.scanner.next()
n=this.SelectorList()
this.needPositions&&(r=this.getLastListNode(n.children).loc.end.offset)}else this.needPositions&&(r=a.loc.end.offset)
return{type:"Nth",loc:this.getLocation(t,r),nth:a,selector:n}},generate:function(e){this.node(e.nth)
if(null!==e.selector){this.chunk(" of ")
this.node(e.selector)}}}},function(e,t,r){var n=r(0).TYPE.Number
e.exports={name:"Number",structure:{value:String},parse:function(){return{type:"Number",loc:this.getLocation(this.scanner.tokenStart,this.scanner.tokenEnd),value:this.consume(n)}},generate:function(e){this.chunk(e.value)}}},function(e,t){e.exports={name:"Operator",structure:{value:String},parse:function(){var e=this.scanner.tokenStart
this.scanner.next()
return{type:"Operator",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.substrToCursor(e)}},generate:function(e){this.chunk(e.value)}}},function(e,t,r){var n=r(0).TYPE
var a=n.LeftParenthesis
var i=n.RightParenthesis
e.exports={name:"Parentheses",structure:{children:[[]]},parse:function(e,t){var r=this.scanner.tokenStart
var n
this.eat(a)
n=e.call(this,t)
this.scanner.eof||this.eat(i)
return{type:"Parentheses",loc:this.getLocation(r,this.scanner.tokenStart),children:n}},generate:function(e){this.chunk("(")
this.children(e)
this.chunk(")")}}},function(e,t,r){var n=r(10).consumeNumber
var a=r(0).TYPE.Percentage
e.exports={name:"Percentage",structure:{value:String},parse:function(){var e=this.scanner.tokenStart
var t=n(this.scanner.source,e)
this.eat(a)
return{type:"Percentage",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.source.substring(e,t)}},generate:function(e){this.chunk(e.value)
this.chunk("%")}}},function(e,t,r){var n=r(0).TYPE
var a=n.Ident
var i=n.Function
var o=n.Colon
var s=n.RightParenthesis
e.exports={name:"PseudoClassSelector",structure:{name:String,children:[["Raw"],null]},parse:function(){var e=this.scanner.tokenStart
var t=null
var r
var n
this.eat(o)
if(this.scanner.tokenType===i){n=(r=this.consumeFunctionName()).toLowerCase()
if(this.pseudo.hasOwnProperty(n)){this.scanner.skipSC()
t=this.pseudo[n].call(this)
this.scanner.skipSC()}else(t=this.createList()).push(this.Raw(this.scanner.tokenIndex,null,!1))
this.eat(s)}else r=this.consume(a)
return{type:"PseudoClassSelector",loc:this.getLocation(e,this.scanner.tokenStart),name:r,children:t}},generate:function(e){this.chunk(":")
this.chunk(e.name)
if(null!==e.children){this.chunk("(")
this.children(e)
this.chunk(")")}},walkContext:"function"}},function(e,t,r){var n=r(0).TYPE
var a=n.Ident
var i=n.Function
var o=n.Colon
var s=n.RightParenthesis
e.exports={name:"PseudoElementSelector",structure:{name:String,children:[["Raw"],null]},parse:function(){var e=this.scanner.tokenStart
var t=null
var r
var n
this.eat(o)
this.eat(o)
if(this.scanner.tokenType===i){n=(r=this.consumeFunctionName()).toLowerCase()
if(this.pseudo.hasOwnProperty(n)){this.scanner.skipSC()
t=this.pseudo[n].call(this)
this.scanner.skipSC()}else(t=this.createList()).push(this.Raw(this.scanner.tokenIndex,null,!1))
this.eat(s)}else r=this.consume(a)
return{type:"PseudoElementSelector",loc:this.getLocation(e,this.scanner.tokenStart),name:r,children:t}},generate:function(e){this.chunk("::")
this.chunk(e.name)
if(null!==e.children){this.chunk("(")
this.children(e)
this.chunk(")")}},walkContext:"function"}},function(e,t,r){var n=r(0).isDigit
var a=r(0).TYPE
var i=a.Number
var o=a.Delim
function s(){this.scanner.skipWS()
var e=this.consume(i)
for(var t=0;t<e.length;t++){var r=e.charCodeAt(t)
n(r)||46===r||this.error("Unsigned number is expected",this.scanner.tokenStart-e.length+t)}0===Number(e)&&this.error("Zero number is not allowed",this.scanner.tokenStart-e.length)
return e}e.exports={name:"Ratio",structure:{left:String,right:String},parse:function(){var e=this.scanner.tokenStart
var t=s.call(this)
var r
this.scanner.skipWS()
this.scanner.isDelim(47)||this.error("Solidus is expected")
this.eat(o)
r=s.call(this)
return{type:"Ratio",loc:this.getLocation(e,this.scanner.tokenStart),left:t,right:r}},generate:function(e){this.chunk(e.left)
this.chunk("/")
this.chunk(e.right)}}},function(e,t,r){var n=r(0).TYPE
var a=r(4).mode
var i=n.LeftCurlyBracket
function o(e){return this.Raw(e,a.leftCurlyBracket,!0)}function s(){var e=this.SelectorList()
"Raw"!==e.type&&!1===this.scanner.eof&&this.scanner.tokenType!==i&&this.error()
return e}e.exports={name:"Rule",structure:{prelude:["SelectorList","Raw"],block:["Block"]},parse:function(){var e=this.scanner.tokenIndex
var t=this.scanner.tokenStart
var r
var n
r=this.parseRulePrelude?this.parseWithFallback(s,o):o.call(this,e)
n=this.Block(!0)
return{type:"Rule",loc:this.getLocation(t,this.scanner.tokenStart),prelude:r,block:n}},generate:function(e){this.node(e.prelude)
this.node(e.block)},walkContext:"rule"}},function(e,t){e.exports={name:"Selector",structure:{children:[["TypeSelector","IdSelector","ClassSelector","AttributeSelector","PseudoClassSelector","PseudoElementSelector","Combinator","WhiteSpace"]]},parse:function(){var e=this.readSequence(this.scope.Selector)
null===this.getFirstListNode(e)&&this.error("Selector is expected")
return{type:"Selector",loc:this.getLocationFromList(e),children:e}},generate:function(e){this.children(e)}}},function(e,t,r){var n=r(0).TYPE.Comma
e.exports={name:"SelectorList",structure:{children:[["Selector","Raw"]]},parse:function(){var e=this.createList()
for(;!this.scanner.eof;){e.push(this.Selector())
if(this.scanner.tokenType!==n)break
this.scanner.next()}return{type:"SelectorList",loc:this.getLocationFromList(e),children:e}},generate:function(e){this.children(e,(function(){this.chunk(",")}))},walkContext:"selector"}},function(e,t,r){var n=r(0).TYPE.String
e.exports={name:"String",structure:{value:String},parse:function(){return{type:"String",loc:this.getLocation(this.scanner.tokenStart,this.scanner.tokenEnd),value:this.consume(n)}},generate:function(e){this.chunk(e.value)}}},function(e,t,r){var n=r(0).TYPE
var a=n.WhiteSpace
var i=n.Comment
var o=n.AtKeyword
var s=n.CDO
var l=n.CDC
function c(e){return this.Raw(e,null,!1)}e.exports={name:"StyleSheet",structure:{children:[["Comment","CDO","CDC","Atrule","Rule","Raw"]]},parse:function(){var e=this.scanner.tokenStart
var t=this.createList()
var r
for(;!this.scanner.eof;){switch(this.scanner.tokenType){case a:this.scanner.next()
continue
case i:if(33!==this.scanner.source.charCodeAt(this.scanner.tokenStart+2)){this.scanner.next()
continue}r=this.Comment()
break
case s:r=this.CDO()
break
case l:r=this.CDC()
break
case o:r=this.parseWithFallback(this.Atrule,c)
break
default:r=this.parseWithFallback(this.Rule,c)}t.push(r)}return{type:"StyleSheet",loc:this.getLocation(e,this.scanner.tokenStart),children:t}},generate:function(e){this.children(e)},walkContext:"stylesheet"}},function(e,t,r){var n=r(0).TYPE.Ident
function a(){this.scanner.tokenType!==n&&!1===this.scanner.isDelim(42)&&this.error("Identifier or asterisk is expected")
this.scanner.next()}e.exports={name:"TypeSelector",structure:{name:String},parse:function(){var e=this.scanner.tokenStart
if(this.scanner.isDelim(124)){this.scanner.next()
a.call(this)}else{a.call(this)
if(this.scanner.isDelim(124)){this.scanner.next()
a.call(this)}}return{type:"TypeSelector",loc:this.getLocation(e,this.scanner.tokenStart),name:this.scanner.substrToCursor(e)}},generate:function(e){this.chunk(e.name)}}},function(e,t,r){var n=r(0).isHexDigit
var a=r(0).cmpChar
var i=r(0).TYPE
var o=r(0).NAME
var s=i.Ident
var l=i.Number
var c=i.Dimension
function u(e,t){for(var r=this.scanner.tokenStart+e,a=0;r<this.scanner.tokenEnd;r++){var i=this.scanner.source.charCodeAt(r)
if(45===i&&t&&0!==a){0===u.call(this,e+a+1,!1)&&this.error()
return-1}n(i)||this.error(t&&0!==a?"HyphenMinus"+(a<6?" or hex digit":"")+" is expected":a<6?"Hex digit is expected":"Unexpected input",r);++a>6&&this.error("Too many hex digits",r)}this.scanner.next()
return a}function f(e){var t=0
for(;this.scanner.isDelim(63);){++t>e&&this.error("Too many question marks")
this.scanner.next()}}function h(e){this.scanner.source.charCodeAt(this.scanner.tokenStart)!==e&&this.error(o[e]+" is expected")}function d(){var e=0
if(this.scanner.isDelim(43)){this.scanner.next()
if(this.scanner.tokenType===s){(e=u.call(this,0,!0))>0&&f.call(this,6-e)
return}if(this.scanner.isDelim(63)){this.scanner.next()
f.call(this,5)
return}this.error("Hex digit or question mark is expected")}else if(this.scanner.tokenType!==l)if(this.scanner.tokenType!==c)this.error()
else{h.call(this,43);(e=u.call(this,1,!0))>0&&f.call(this,6-e)}else{h.call(this,43)
e=u.call(this,1,!0)
if(this.scanner.isDelim(63)){f.call(this,6-e)
return}if(this.scanner.tokenType===c||this.scanner.tokenType===l){h.call(this,45)
u.call(this,1,!1)
return}}}e.exports={name:"UnicodeRange",structure:{value:String},parse:function(){var e=this.scanner.tokenStart
a(this.scanner.source,e,117)||this.error("U is expected")
a(this.scanner.source,e+1,43)||this.error("Plus sign is expected")
this.scanner.next()
d.call(this)
return{type:"UnicodeRange",loc:this.getLocation(e,this.scanner.tokenStart),value:this.scanner.substrToCursor(e)}},generate:function(e){this.chunk(e.value)}}},function(e,t,r){var n=r(0).isWhiteSpace
var a=r(0).cmpStr
var i=r(0).TYPE
var o=i.Function
var s=i.Url
var l=i.RightParenthesis
e.exports={name:"Url",structure:{value:["String","Raw"]},parse:function(){var e=this.scanner.tokenStart
var t
switch(this.scanner.tokenType){case s:var r=e+4
var i=this.scanner.tokenEnd-1
for(;r<i&&n(this.scanner.source.charCodeAt(r));)r++
for(;r<i&&n(this.scanner.source.charCodeAt(i-1));)i--
t={type:"Raw",loc:this.getLocation(r,i),value:this.scanner.source.substring(r,i)}
this.eat(s)
break
case o:a(this.scanner.source,this.scanner.tokenStart,this.scanner.tokenEnd,"url(")||this.error("Function name must be `url`")
this.eat(o)
this.scanner.skipSC()
t=this.String()
this.scanner.skipSC()
this.eat(l)
break
default:this.error("Url or Function is expected")}return{type:"Url",loc:this.getLocation(e,this.scanner.tokenStart),value:t}},generate:function(e){this.chunk("url")
this.chunk("(")
this.node(e.value)
this.chunk(")")}}},function(e,t){e.exports={name:"Value",structure:{children:[[]]},parse:function(){var e=this.scanner.tokenStart
var t=this.readSequence(this.scope.Value)
return{type:"Value",loc:this.getLocation(e,this.scanner.tokenStart),children:t}},generate:function(e){this.children(e)}}},function(e,t,r){var n=r(0).TYPE.WhiteSpace
var a=Object.freeze({type:"WhiteSpace",loc:null,value:" "})
e.exports={name:"WhiteSpace",structure:{value:String},parse:function(){this.eat(n)
return a},generate:function(e){this.chunk(e.value)}}},function(e,t,r){e.exports={parseContext:{default:"StyleSheet",stylesheet:"StyleSheet",atrule:"Atrule",atrulePrelude:function(e){return this.AtrulePrelude(e.atrule?String(e.atrule):null)},mediaQueryList:"MediaQueryList",mediaQuery:"MediaQuery",rule:"Rule",selectorList:"SelectorList",selector:"Selector",block:function(){return this.Block(!0)},declarationList:"DeclarationList",declaration:"Declaration",value:"Value"},scope:r(169),atrule:r(175),pseudo:r(181),node:r(31)}},function(e,t,r){e.exports={AtrulePrelude:r(170),Selector:r(171),Value:r(172)}},function(e,t,r){e.exports={getNode:r(55)}},function(e,t,r){var n=r(0).TYPE
var a=n.Delim
var i=n.Ident
var o=n.Dimension
var s=n.Percentage
var l=n.Number
var c=n.Hash
var u=n.Colon
var f=n.LeftSquareBracket
e.exports={getNode:function(e){switch(this.scanner.tokenType){case f:return this.AttributeSelector()
case c:return this.IdSelector()
case u:return this.scanner.lookupType(1)===u?this.PseudoElementSelector():this.PseudoClassSelector()
case i:return this.TypeSelector()
case l:case s:return this.Percentage()
case o:46===this.scanner.source.charCodeAt(this.scanner.tokenStart)&&this.error("Identifier is expected",this.scanner.tokenStart+1)
break
case a:switch(this.scanner.source.charCodeAt(this.scanner.tokenStart)){case 43:case 62:case 126:e.space=null
e.ignoreWSAfter=!0
return this.Combinator()
case 47:return this.Combinator()
case 46:return this.ClassSelector()
case 42:case 124:return this.TypeSelector()
case 35:return this.IdSelector()}}}}},function(e,t,r){e.exports={getNode:r(55),"-moz-element":r(56),element:r(56),expression:r(173),var:r(174)}},function(e,t){e.exports=function(){return this.createSingleNodeList(this.Raw(this.scanner.tokenIndex,null,!1))}},function(e,t,r){var n=r(0).TYPE
var a=r(4).mode
var i=n.Comma
e.exports=function(){var e=this.createList()
this.scanner.skipSC()
e.push(this.Identifier())
this.scanner.skipSC()
if(this.scanner.tokenType===i){e.push(this.Operator())
e.push(this.parseCustomProperty?this.Value(null):this.Raw(this.scanner.tokenIndex,a.exclamationMarkOrSemicolon,!1))}return e}},function(e,t,r){e.exports={"font-face":r(176),import:r(177),media:r(178),page:r(179),supports:r(180)}},function(e,t){e.exports={parse:{prelude:null,block:function(){return this.Block(!0)}}}},function(e,t,r){var n=r(0).TYPE
var a=n.String
var i=n.Ident
var o=n.Url
var s=n.Function
var l=n.LeftParenthesis
e.exports={parse:{prelude:function(){var e=this.createList()
this.scanner.skipSC()
switch(this.scanner.tokenType){case a:e.push(this.String())
break
case o:case s:e.push(this.Url())
break
default:this.error("String or url() is expected")}if(this.lookupNonWSType(0)===i||this.lookupNonWSType(0)===l){e.push(this.WhiteSpace())
e.push(this.MediaQueryList())}return e},block:null}}},function(e,t){e.exports={parse:{prelude:function(){return this.createSingleNodeList(this.MediaQueryList())},block:function(){return this.Block(!1)}}}},function(e,t){e.exports={parse:{prelude:function(){return this.createSingleNodeList(this.SelectorList())},block:function(){return this.Block(!0)}}}},function(e,t,r){var n=r(0).TYPE
var a=n.WhiteSpace
var i=n.Comment
var o=n.Ident
var s=n.Function
var l=n.Colon
var c=n.LeftParenthesis
function u(){return this.createSingleNodeList(this.Raw(this.scanner.tokenIndex,null,!1))}function f(){this.scanner.skipSC()
return this.scanner.tokenType===o&&this.lookupNonWSType(1)===l?this.createSingleNodeList(this.Declaration()):h.call(this)}function h(){var e=this.createList()
var t=null
var r
this.scanner.skipSC()
e:for(;!this.scanner.eof;){switch(this.scanner.tokenType){case a:t=this.WhiteSpace()
continue
case i:this.scanner.next()
continue
case s:r=this.Function(u,this.scope.AtrulePrelude)
break
case o:r=this.Identifier()
break
case c:r=this.Parentheses(f,this.scope.AtrulePrelude)
break
default:break e}if(null!==t){e.push(t)
t=null}e.push(r)}return e}e.exports={parse:{prelude:function(){var e=h.call(this)
null===this.getFirstListNode(e)&&this.error("Condition is expected")
return e},block:function(){return this.Block(!1)}}}},function(e,t,r){e.exports={dir:r(182),has:r(183),lang:r(184),matches:r(185),not:r(186),"nth-child":r(187),"nth-last-child":r(188),"nth-last-of-type":r(189),"nth-of-type":r(190),slotted:r(191)}},function(e,t){e.exports={parse:function(){return this.createSingleNodeList(this.Identifier())}}},function(e,t){e.exports={parse:function(){return this.createSingleNodeList(this.SelectorList())}}},function(e,t){e.exports={parse:function(){return this.createSingleNodeList(this.Identifier())}}},function(e,t,r){e.exports=r(57)},function(e,t,r){e.exports=r(57)},function(e,t,r){e.exports=r(58)},function(e,t,r){e.exports=r(58)},function(e,t,r){e.exports=r(59)},function(e,t,r){e.exports=r(59)},function(e,t){e.exports={parse:function(){return this.createSingleNodeList(this.Selector())}}},function(e,t,r){e.exports={node:r(31)}},function(e,t,r){var n=r(1).List
var a=r(1).clone
var i=r(194)
var o=r(195)
var s=r(203)
var l=r(215)
var c=r(1).walk
function u(e,t){var r=new n
var a=!1
var i
e.nextUntil(e.head,(function(e,n,o){if("Comment"!==e.type){"WhiteSpace"!==e.type&&(a=!0)
r.insert(o.remove(n))}else{if(!t||"!"!==e.value.charAt(0)){o.remove(n)
return}if(a||i)return!0
o.remove(n)
i=e}}))
return{comment:i,stylesheet:{type:"StyleSheet",loc:null,children:r}}}function f(e,t,r,n){n.logger("Compress block #"+r,null,!0)
var a=1
if("StyleSheet"===e.type){e.firstAtrulesAllowed=t
e.id=a++}c(e,{visit:"Atrule",enter:function(e){null!==e.block&&(e.block.id=a++)}})
n.logger("init",e)
o(e,n)
n.logger("clean",e)
s(e,n)
n.logger("replace",e)
n.restructuring&&l(e,n)
return e}function h(e){return"restructure"in e?e.restructure:!("restructuring"in e)||e.restructuring}e.exports=function(e,t){e=e||{type:"StyleSheet",loc:null,children:new n}
var r={logger:"function"==typeof(t=t||{}).logger?t.logger:function(){},restructuring:h(t),forceMediaMerge:Boolean(t.forceMediaMerge),usage:!!t.usage&&i.buildIndex(t.usage)}
var o=function(e){var t="comments"in e?e.comments:"exclamation"
"boolean"==typeof t?t=!!t&&"exclamation":"exclamation"!==t&&"first-exclamation"!==t&&(t=!1)
return t}(t)
var s=!0
var l
var c=new n
var d
var p=1
var m
t.clone&&(e=a(e))
if("StyleSheet"===e.type){l=e.children
e.children=c}else l=(g=e,(new n).appendData({type:"Rule",loc:null,prelude:{type:"SelectorList",loc:null,children:(new n).appendData({type:"Selector",loc:null,children:(new n).appendData({type:"TypeSelector",loc:null,name:"x"})})},block:g}))
var g
do{f((d=u(l,Boolean(o))).stylesheet,s,p++,r)
m=d.stylesheet.children
if(d.comment){c.isEmpty()||c.insert(n.createItem({type:"Raw",value:"\n"}))
c.insert(n.createItem(d.comment))
m.isEmpty()||c.insert(n.createItem({type:"Raw",value:"\n"}))}if(s&&!m.isEmpty()){var v=m.last();("Atrule"!==v.type||"import"!==v.name&&"charset"!==v.name)&&(s=!1)}"exclamation"!==o&&(o=!1)
c.appendList(m)}while(!l.isEmpty())
return{ast:e}}},function(e,t){var r=Object.prototype.hasOwnProperty
function n(e,t){var r=Object.create(null)
if(!Array.isArray(e))return null
for(var n=0;n<e.length;n++){var a=e[n]
t&&(a=a.toLowerCase())
r[a]=!0}return r}function a(e){if(!e)return null
var t=n(e.tags,!0)
var r=n(e.ids)
var a=n(e.classes)
return null===t&&null===r&&null===a?null:{tags:t,ids:r,classes:a}}e.exports={buildIndex:function(e){var t=!1
if(e.scopes&&Array.isArray(e.scopes)){t=Object.create(null)
for(var n=0;n<e.scopes.length;n++){var i=e.scopes[n]
if(!i||!Array.isArray(i))throw new Error("Wrong usage format")
for(var o=0;o<i.length;o++){var s=i[o]
if(r.call(t,s))throw new Error("Class can't be used for several scopes: "+s)
t[s]=n+1}}}return{whitelist:a(e),blacklist:a(e.blacklist),scopes:t}}}},function(e,t,r){var n=r(1).walk
var a={Atrule:r(196),Comment:r(197),Declaration:r(198),Raw:r(199),Rule:r(200),TypeSelector:r(201),WhiteSpace:r(202)}
e.exports=function(e,t){n(e,{leave:function(e,r,n){a.hasOwnProperty(e.type)&&a[e.type].call(this,e,r,n,t)}})}},function(e,t,r){var n=r(1).keyword
var{hasNoChildren:a}=r(17)
e.exports=function(e,t,r){if(e.block){null!==this.stylesheet&&(this.stylesheet.firstAtrulesAllowed=!1)
if(a(e.block)){r.remove(t)
return}}switch(e.name){case"charset":if(a(e.prelude)){r.remove(t)
return}if(t.prev){r.remove(t)
return}break
case"import":if(null===this.stylesheet||!this.stylesheet.firstAtrulesAllowed){r.remove(t)
return}r.prevUntil(t.prev,(function(e){if("Atrule"!==e.type||"import"!==e.name&&"charset"!==e.name){this.root.firstAtrulesAllowed=!1
r.remove(t)
return!0}}),this)
break
default:var i=n(e.name).basename
"keyframes"!==i&&"media"!==i&&"supports"!==i||(a(e.prelude)||a(e.block))&&r.remove(t)}}},function(e,t){e.exports=function(e,t,r){r.remove(t)}},function(e,t){e.exports=function(e,t,r){e.value.children&&e.value.children.isEmpty()&&r.remove(t)}},function(e,t,r){var{isNodeChildrenList:n}=r(17)
e.exports=function(e,t,r){(n(this.stylesheet,r)||n(this.block,r))&&r.remove(t)}},function(e,t,r){var n=Object.prototype.hasOwnProperty
var a=r(1).walk
var{hasNoChildren:i}=r(17)
e.exports=function(e,t,r,o){if(i(e.prelude)||i(e.block))r.remove(t)
else{var s=o.usage
if(s&&(null!==s.whitelist||null!==s.blacklist)){!function e(t,r){t.children.each((function(i,o,s){var l=!1
a(i,(function(a){if(null===this.selector||this.selector===t)switch(a.type){case"SelectorList":null!==this.function&&"not"===this.function.name.toLowerCase()||e(a,r)&&(l=!0)
break
case"ClassSelector":null===r.whitelist||null===r.whitelist.classes||n.call(r.whitelist.classes,a.name)||(l=!0)
null!==r.blacklist&&null!==r.blacklist.classes&&n.call(r.blacklist.classes,a.name)&&(l=!0)
break
case"IdSelector":null===r.whitelist||null===r.whitelist.ids||n.call(r.whitelist.ids,a.name)||(l=!0)
null!==r.blacklist&&null!==r.blacklist.ids&&n.call(r.blacklist.ids,a.name)&&(l=!0)
break
case"TypeSelector":if("*"!==a.name.charAt(a.name.length-1)){null===r.whitelist||null===r.whitelist.tags||n.call(r.whitelist.tags,a.name.toLowerCase())||(l=!0)
null!==r.blacklist&&null!==r.blacklist.tags&&n.call(r.blacklist.tags,a.name.toLowerCase())&&(l=!0)}}}))
l&&s.remove(o)}))
return t.children.isEmpty()}(e.prelude,s)
if(i(e.prelude)){r.remove(t)
return}}}}},function(e,t){e.exports=function(e,t,r){if("*"===t.data.name){var n=t.next&&t.next.data.type
"IdSelector"!==n&&"ClassSelector"!==n&&"AttributeSelector"!==n&&"PseudoClassSelector"!==n&&"PseudoElementSelector"!==n||r.remove(t)}}},function(e,t,r){var{isNodeChildrenList:n}=r(17)
function a(e){return"Operator"===e.type&&"+"!==e.value&&"-"!==e.value}e.exports=function(e,t,r){null!==t.next&&null!==t.prev?n(this.stylesheet,r)||n(this.block,r)?r.remove(t):"WhiteSpace"!==t.next.data.type?(a(t.prev.data)||a(t.next.data))&&r.remove(t):r.remove(t):r.remove(t)}},function(e,t,r){var n=r(1).walk
var a={Atrule:r(204),AttributeSelector:r(206),Value:r(207),Dimension:r(211),Percentage:r(212),Number:r(18),String:r(213),Url:r(214),HexColor:r(32).compressHex,Identifier:r(32).compressIdent,Function:r(32).compressFunction}
e.exports=function(e){n(e,{leave:function(e,t,r){a.hasOwnProperty(e.type)&&a[e.type].call(this,e,t,r)}})}},function(e,t,r){var n=r(1).keyword
var a=r(205)
e.exports=function(e){"keyframes"===n(e.name).basename&&a(e)}},function(e,t){e.exports=function(e){e.block.children.each((function(e){e.prelude.children.each((function(e){e.children.each((function(e,t){"Percentage"===e.type&&"100"===e.value?t.data={type:"TypeSelector",loc:e.loc,name:"to"}:"TypeSelector"===e.type&&"from"===e.name&&(t.data={type:"Percentage",loc:e.loc,value:"0"})}))}))}))}},function(e,t){var r=/\\([0-9A-Fa-f]{1,6})(\r\n|[ \t\n\f\r])?|\\./g
var n=/^(-?\d|--)|[\u0000-\u002c\u002e\u002f\u003A-\u0040\u005B-\u005E\u0060\u007B-\u009f]/
e.exports=function(e){var t=e.value
if(t&&"String"===t.type){var a=t.value.replace(/^(.)(.*)\1$/,"$2");(function(e){if(""!==e&&"-"!==e){e=e.replace(r,"a")
return!n.test(e)}})(a)&&(e.value={type:"Identifier",loc:t.loc,name:a})}}},function(e,t,r){var n=r(1).property
var a={font:r(208),"font-weight":r(209),background:r(210),border:r(60),outline:r(60)}
e.exports=function(e){if(this.declaration){var t=n(this.declaration.property)
a.hasOwnProperty(t.basename)&&a[t.basename](e)}}},function(e,t){e.exports=function(e){var t=e.children
t.eachRight((function(e,t){if("Identifier"===e.type)if("bold"===e.name)t.data={type:"Number",loc:e.loc,value:"700"}
else if("normal"===e.name){var r=t.prev
r&&"Operator"===r.data.type&&"/"===r.data.value&&this.remove(r)
this.remove(t)}else if("medium"===e.name){var n=t.next
n&&"Operator"===n.data.type||this.remove(t)}}))
t.each((function(e,t){"WhiteSpace"===e.type&&(t.prev&&t.next&&"WhiteSpace"!==t.next.data.type||this.remove(t))}))
t.isEmpty()&&t.insert(t.createItem({type:"Identifier",name:"normal"}))}},function(e,t){e.exports=function(e){var t=e.children.head.data
if("Identifier"===t.type)switch(t.name){case"normal":e.children.head.data={type:"Number",loc:t.loc,value:"400"}
break
case"bold":e.children.head.data={type:"Number",loc:t.loc,value:"700"}}}},function(e,t,r){var n=r(1).List
e.exports=function(e){function t(){if(i.length)return i[i.length-1].type}function r(){"WhiteSpace"===t()&&i.pop()
i.length||i.unshift({type:"Number",loc:null,value:"0"},{type:"WhiteSpace",value:" "},{type:"Number",loc:null,value:"0"})
a.push.apply(a,i)
i=[]}var a=[]
var i=[]
e.children.each((function(e){if("Operator"!==e.type||","!==e.value)("Identifier"!==e.type||"transparent"!==e.name&&"none"!==e.name&&"repeat"!==e.name&&"scroll"!==e.name)&&("WhiteSpace"!==e.type||i.length&&"WhiteSpace"!==t())&&i.push(e)
else{r()
a.push(e)}}))
r()
e.children=(new n).fromArray(a)}},function(e,t,r){var n=r(18).pack
var a={px:!0,mm:!0,cm:!0,in:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vh:!0,vw:!0,vmin:!0,vmax:!0,vm:!0}
e.exports=function(e,t){var r=n(e.value,t)
e.value=r
if("0"===r&&null!==this.declaration&&null===this.atrulePrelude){var i=e.unit.toLowerCase()
if(!a.hasOwnProperty(i))return
if("-ms-flex"===this.declaration.property||"flex"===this.declaration.property)return
if(this.function&&"calc"===this.function.name)return
t.data={type:"Number",loc:e.loc,value:r}}}},function(e,t,r){var n=r(1).lexer
var a=r(18).pack
var i=new Set(["width","min-width","max-width","height","min-height","max-height","flex","-ms-flex"])
e.exports=function(e,t){e.value=a(e.value,t)
if("0"===e.value&&this.declaration&&!i.has(this.declaration.property)){t.data={type:"Number",loc:e.loc,value:e.value}
n.matchDeclaration(this.declaration).isType(t.data,"length")||(t.data=e)}}},function(e,t){e.exports=function(e){var t=e.value
t=t.replace(/\\(\r\n|\r|\n|\f)/g,"")
e.value=t}},function(e,t){var r=new RegExp("^((\\\\[0-9a-f]{1,6}(\\r\\n|[ \\n\\r\\t\\f])?|\\\\[^\\n\\r\\f0-9a-fA-F])|[^\"'\\(\\)\\\\\\s\0\b\v-])*$","i")
e.exports=function(e){var t=e.value
if("String"===t.type){var n=t.value[0]
var a=t.value.substr(1,t.value.length-2)
a=a.replace(/\\\\/g,"/")
r.test(a)?e.value={type:"Raw",loc:e.value.loc,value:a}:e.value.value=-1===a.indexOf('"')?'"'+a+'"':n+a+n}}},function(e,t,r){var n=r(216)
var a=r(219)
var i=r(220)
var o=r(221)
var s=r(222)
var l=r(223)
var c=r(224)
var u=r(225)
e.exports=function(e,t){var r=n(e,t)
t.logger("prepare",e)
a(e,t)
t.logger("mergeAtrule",e)
i(e)
t.logger("initialMergeRuleset",e)
o(e)
t.logger("disjoinRuleset",e)
s(e,r)
t.logger("restructShorthand",e)
l(e)
t.logger("restructBlock",e)
c(e)
t.logger("mergeRuleset",e)
u(e)
t.logger("restructRuleset",e)}},function(e,t,r){var n=r(1).keyword
var a=r(1).walk
var i=r(1).generate
var o=r(217)
var s=r(218)
e.exports=function(e,t){var r=o()
a(e,{visit:"Rule",enter:function(e){e.block.children.each(r)
s(e,t.usage)}})
a(e,{visit:"Atrule",enter:function(e){if(e.prelude){e.prelude.id=null
e.prelude.id=i(e.prelude)}if("keyframes"===n(e.name).basename){e.block.avoidRulesMerge=!0
e.block.children.each((function(e){e.prelude.children.each((function(e){e.compareMarker=e.id}))}))}}})
return{declaration:r}}},function(e,t,r){var n=r(1).generate
function a(){this.seed=0
this.map=Object.create(null)}a.prototype.resolve=function(e){var t=this.map[e]
if(!t){t=++this.seed
this.map[e]=t}return t}
e.exports=function(){var e=new a
return function(t){var r=n(t)
t.id=e.resolve(r)
t.length=r.length
t.fingerprint=null
return t}}},function(e,t,r){var n=r(1).generate
var a=r(19)
var i={"first-letter":!0,"first-line":!0,after:!0,before:!0}
var o={link:!0,visited:!0,hover:!0,active:!0,"first-letter":!0,"first-line":!0,after:!0,before:!0}
e.exports=function(e,t){var r=Object.create(null)
var s=!1
e.prelude.children.each((function(e){var l="*"
var c=0
e.children.each((function(a){switch(a.type){case"ClassSelector":if(t&&t.scopes){var u=t.scopes[a.name]||0
if(0!==c&&u!==c)throw new Error("Selector can't has classes from different scopes: "+n(e))
c=u}break
case"PseudoClassSelector":var f=a.name.toLowerCase()
if(!o.hasOwnProperty(f)){r[f]=!0
s=!0}break
case"PseudoElementSelector":f=a.name.toLowerCase()
if(!i.hasOwnProperty(f)){r[f]=!0
s=!0}break
case"TypeSelector":l=a.name.toLowerCase()
break
case"AttributeSelector":if(a.flags){r["["+a.flags.toLowerCase()+"]"]=!0
s=!0}break
case"WhiteSpace":case"Combinator":l="*"}}))
e.compareMarker=a(e).toString()
e.id=null
e.id=n(e)
c&&(e.compareMarker+=":"+c)
"*"!==l&&(e.compareMarker+=","+l)}))
e.pseudoSignature=s&&Object.keys(r).sort().join(",")}},function(e,t,r){var n=r(1).List
var a=r(1).keyword
var i=Object.prototype.hasOwnProperty
var o=r(1).walk
function s(e,t,r,o){var s=t.data
var l=a(s.name).basename
var c=s.name.toLowerCase()+"/"+(s.prelude?s.prelude.id:null)
i.call(e,l)||(e[l]=Object.create(null))
o&&delete e[l][c]
i.call(e[l],c)||(e[l][c]=new n)
e[l][c].append(r.remove(t))}function l(e){return"Atrule"===e.type&&"media"===e.name}function c(e,t,r){if(l(e)){var n=t.prev&&t.prev.data
if(n&&l(n)&&e.prelude&&n.prelude&&e.prelude.id===n.prelude.id){n.block.children.appendList(e.block.children)
r.remove(t)}}}e.exports=function(e,t){!function(e,t){var r=Object.create(null)
var n=null
e.children.each((function(e,i,o){if("Atrule"===e.type){var l=a(e.name).basename
switch(l){case"keyframes":s(r,i,o,!0)
return
case"media":if(t.forceMediaMerge){s(r,i,o,!1)
return}}null===n&&"charset"!==l&&"import"!==l&&(n=i)}else null===n&&(n=i)}))
for(var i in r)for(var o in r[i])e.children.insertList(r[i][o],"media"===i?null:n)}(e,t)
o(e,{visit:"Atrule",reverse:!0,enter:c})}},function(e,t,r){var n=r(1).walk
var a=r(33)
function i(e,t,r){var n=e.prelude.children
var i=e.block.children
r.prevUntil(t.prev,(function(o){if("Rule"!==o.type)return a.unsafeToSkipNode.call(n,o)
var s=o.prelude.children
var l=o.block.children
if(e.pseudoSignature===o.pseudoSignature){if(a.isEqualSelectors(s,n)){l.appendList(i)
r.remove(t)
return!0}if(a.isEqualDeclarations(i,l)){a.addSelectors(s,n)
r.remove(t)
return!0}}return a.hasSimilarSelectors(n,s)}))}e.exports=function(e){n(e,{visit:"Rule",enter:i})}},function(e,t,r){var n=r(1).List
var a=r(1).walk
function i(e,t,r){var a=e.prelude.children
for(;a.head!==a.tail;){var i=new n
i.insert(a.remove(a.head))
r.insert(r.createItem({type:"Rule",loc:e.loc,prelude:{type:"SelectorList",loc:e.prelude.loc,children:i},block:{type:"Block",loc:e.block.loc,children:e.block.children.copy()},pseudoSignature:e.pseudoSignature}),t)}}e.exports=function(e){a(e,{visit:"Rule",reverse:!0,enter:i})}},function(e,t,r){var n=r(1).List
var a=r(1).generate
var i=r(1).walk
var o=["top","right","bottom","left"]
var s={"margin-top":"top","margin-right":"right","margin-bottom":"bottom","margin-left":"left","padding-top":"top","padding-right":"right","padding-bottom":"bottom","padding-left":"left","border-top-color":"top","border-right-color":"right","border-bottom-color":"bottom","border-left-color":"left","border-top-width":"top","border-right-width":"right","border-bottom-width":"bottom","border-left-width":"left","border-top-style":"top","border-right-style":"right","border-bottom-style":"bottom","border-left-style":"left"}
var l={margin:"margin","margin-top":"margin","margin-right":"margin","margin-bottom":"margin","margin-left":"margin",padding:"padding","padding-top":"padding","padding-right":"padding","padding-bottom":"padding","padding-left":"padding","border-color":"border-color","border-top-color":"border-color","border-right-color":"border-color","border-bottom-color":"border-color","border-left-color":"border-color","border-width":"border-width","border-top-width":"border-width","border-right-width":"border-width","border-bottom-width":"border-width","border-left-width":"border-width","border-style":"border-style","border-top-style":"border-style","border-right-style":"border-style","border-bottom-style":"border-style","border-left-style":"border-style"}
function c(e){this.name=e
this.loc=null
this.iehack=void 0
this.sides={top:null,right:null,bottom:null,left:null}}c.prototype.getValueSequence=function(e,t){var r=[]
var n=""
if(e.value.children.some((function(t){var a=!1
switch(t.type){case"Identifier":switch(t.name){case"\\0":case"\\9":n=t.name
return
case"inherit":case"initial":case"unset":case"revert":a=t.name}break
case"Dimension":switch(t.unit){case"rem":case"vw":case"vh":case"vmin":case"vmax":case"vm":a=t.unit}break
case"HexColor":case"Number":case"Percentage":break
case"Function":a=t.name
break
case"WhiteSpace":return!1
default:return!0}r.push({node:t,special:a,important:e.important})}))||r.length>t)return!1
if("string"==typeof this.iehack&&this.iehack!==n)return!1
this.iehack=n
return r}
c.prototype.canOverride=function(e,t){var r=this.sides[e]
return!r||t.important&&!r.important}
c.prototype.add=function(e,t){if(!function(){var r=this.sides
var n=s[e]
if(n){if(n in r==0)return!1
if(!(i=this.getValueSequence(t,1))||!i.length)return!1
for(var a in r)if(null!==r[a]&&r[a].special!==i[0].special)return!1
if(!this.canOverride(n,i[0]))return!0
r[n]=i[0]
return!0}if(e===this.name){var i
if(!(i=this.getValueSequence(t,4))||!i.length)return!1
switch(i.length){case 1:i[1]=i[0]
i[2]=i[0]
i[3]=i[0]
break
case 2:i[2]=i[0]
i[3]=i[1]
break
case 3:i[3]=i[1]}for(var l=0;l<4;l++)for(var a in r)if(null!==r[a]&&r[a].special!==i[l].special)return!1
for(l=0;l<4;l++)this.canOverride(o[l],i[l])&&(r[o[l]]=i[l])
return!0}}.call(this))return!1
this.loc||(this.loc=t.loc)
return!0}
c.prototype.isOkToMinimize=function(){var e=this.sides.top
var t=this.sides.right
var r=this.sides.bottom
var n=this.sides.left
if(e&&t&&r&&n){var a=e.important+t.important+r.important+n.important
return 0===a||4===a}return!1}
c.prototype.getValue=function(){var e=new n
var t=this.sides
var r=[t.top,t.right,t.bottom,t.left]
var i=[a(t.top.node),a(t.right.node),a(t.bottom.node),a(t.left.node)]
if(i[3]===i[1]){r.pop()
if(i[2]===i[0]){r.pop()
i[1]===i[0]&&r.pop()}}for(var o=0;o<r.length;o++){o&&e.appendData({type:"WhiteSpace",value:" "})
e.appendData(r[o].node)}if(this.iehack){e.appendData({type:"WhiteSpace",value:" "})
e.appendData({type:"Identifier",loc:null,name:this.iehack})}return{type:"Value",loc:null,children:e}}
c.prototype.getDeclaration=function(){return{type:"Declaration",loc:this.loc,important:this.sides.top.important,property:this.name,value:this.getValue()}}
function u(e,t,r,n){var a=e.block.children
var i=e.prelude.children.first().id
e.block.children.eachRight((function(e,o){var s=e.property
if(l.hasOwnProperty(s)){var u=l[s]
var f
var h
if((!n||i===n)&&u in t){h=2
f=t[u]}if(!f||!f.add(s,e)){h=1
if(!(f=new c(u)).add(s,e)){n=null
return}}t[u]=f
r.push({operation:h,block:a,item:o,shorthand:f})
n=i}}))
return n}e.exports=function(e,t){var r={}
var n=[]
i(e,{visit:"Rule",reverse:!0,enter:function(e){var t=this.block||this.stylesheet
var a=(e.pseudoSignature||"")+"|"+e.prelude.children.first().id
var i
var o
if(r.hasOwnProperty(t.id))i=r[t.id]
else{i={lastShortSelector:null}
r[t.id]=i}if(i.hasOwnProperty(a))o=i[a]
else{o={}
i[a]=o}i.lastShortSelector=u.call(this,e,o,n,i.lastShortSelector)}})
!function(e,t){e.forEach((function(e){var r=e.shorthand
r.isOkToMinimize()&&(1===e.operation?e.item.data=t(r.getDeclaration()):e.block.remove(e.item))}))}(n,t.declaration)}},function(e,t,r){var n=r(1).property
var a=r(1).keyword
var i=r(1).walk
var o=r(1).generate
var s=1
var l={src:1}
var c={display:/table|ruby|flex|-(flex)?box$|grid|contents|run-in/i,"text-align":/^(start|end|match-parent|justify-all)$/i}
var u=["auto","crosshair","default","move","text","wait","help","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","pointer","progress","not-allowed","no-drop","vertical-text","all-scroll","col-resize","row-resize"]
var f=["static","relative","absolute","fixed"]
var h={"border-width":["border"],"border-style":["border"],"border-color":["border"],"border-top":["border"],"border-right":["border"],"border-bottom":["border"],"border-left":["border"],"border-top-width":["border-top","border-width","border"],"border-right-width":["border-right","border-width","border"],"border-bottom-width":["border-bottom","border-width","border"],"border-left-width":["border-left","border-width","border"],"border-top-style":["border-top","border-style","border"],"border-right-style":["border-right","border-style","border"],"border-bottom-style":["border-bottom","border-style","border"],"border-left-style":["border-left","border-style","border"],"border-top-color":["border-top","border-color","border"],"border-right-color":["border-right","border-color","border"],"border-bottom-color":["border-bottom","border-color","border"],"border-left-color":["border-left","border-color","border"],"margin-top":["margin"],"margin-right":["margin"],"margin-bottom":["margin"],"margin-left":["margin"],"padding-top":["padding"],"padding-right":["padding"],"padding-bottom":["padding"],"padding-left":["padding"],"font-style":["font"],"font-variant":["font"],"font-weight":["font"],"font-size":["font"],"font-family":["font"],"list-style-type":["list-style"],"list-style-position":["list-style"],"list-style-image":["list-style"]}
function d(e,t,r){var i=n(e).basename
if("background"===i)return e+":"+o(t.value)
var l=t.id
var h=r[l]
if(!h){switch(t.value.type){case"Value":var d=""
var p=""
var m={}
var g=!1
t.value.children.each((function e(t){switch(t.type){case"Value":case"Brackets":case"Parentheses":t.children.each(e)
break
case"Raw":g=!0
break
case"Identifier":var r=t.name
d||(d=a(r).vendor);/\\[09]/.test(r)&&(p=RegExp.lastMatch)
"cursor"===i?-1===u.indexOf(r)&&(m[r]=!0):"position"===i?-1===f.indexOf(r)&&(m[r]=!0):c.hasOwnProperty(i)&&c[i].test(r)&&(m[r]=!0)
break
case"Function":r=t.name
d||(d=a(r).vendor)
"rect"===r&&(t.children.some((function(e){return"Operator"===e.type&&","===e.value}))||(r="rect-backward"))
m[r+"()"]=!0
t.children.each(e)
break
case"Dimension":var n=t.unit;/\\[09]/.test(n)&&(p=RegExp.lastMatch)
switch(n){case"rem":case"vw":case"vh":case"vmin":case"vmax":case"vm":m[n]=!0}}}))
h=g?"!"+s++:"!"+Object.keys(m).sort()+"|"+p+d
break
case"Raw":h="!"+t.value.value
break
default:h=o(t.value)}r[l]=h}return e+h}function p(e,t,r,a,i){var o=e.block.children
o.eachRight((function(e,t){var r=e.property
var s=d(r,e,i)
if((c=a[s])&&!l.hasOwnProperty(r))if(e.important&&!c.item.data.important){a[s]={block:o,item:t}
c.block.remove(c.item)}else o.remove(t)
else{var c
if(c=function(e,t,r){var a=n(t.property)
if(h.hasOwnProperty(a.basename)){var i=h[a.basename]
for(var o=0;o<i.length;o++){var s=d(a.prefix+i[o],t,r)
var l=e.hasOwnProperty(s)?e[s]:null
if(l&&(!t.important||l.item.data.important))return l}}}(a,e,i))o.remove(t)
else{e.fingerprint=s
a[s]={block:o,item:t}}}}))
o.isEmpty()&&r.remove(t)}e.exports=function(e){var t={}
var r=Object.create(null)
i(e,{visit:"Rule",reverse:!0,enter:function(e,n,a){var i=this.block||this.stylesheet
var o=(e.pseudoSignature||"")+"|"+e.prelude.children.first().id
var s
var l
if(t.hasOwnProperty(i.id))s=t[i.id]
else{s={}
t[i.id]=s}if(s.hasOwnProperty(o))l=s[o]
else{l={}
s[o]=l}p.call(this,e,n,a,l,r)}})}},function(e,t,r){var n=r(1).walk
var a=r(33)
function i(e,t,r){var n=e.prelude.children
var i=e.block.children
var o=n.first().compareMarker
var s={}
r.nextUntil(t.next,(function(t,l){if("Rule"!==t.type)return a.unsafeToSkipNode.call(n,t)
if(e.pseudoSignature!==t.pseudoSignature)return!0
var c=t.prelude.children.head
var u=t.block.children
var f=c.data.compareMarker
if(f in s)return!0
if(n.head!==n.tail||n.first().id!==c.data.id)if(a.isEqualDeclarations(i,u)){var h=c.data.id
n.some((function(e,t){var r=e.id
if(h<r){n.insert(c,t)
return!0}if(!t.next){n.insert(c)
return!0}}))
r.remove(l)}else{if(f===o)return!0
s[f]=!0}else{i.appendList(u)
r.remove(l)}}))}e.exports=function(e){n(e,{visit:"Rule",enter:i})}},function(e,t,r){var n=r(1).List
var a=r(1).walk
var i=r(33)
function o(e){var t=0
e.each((function(e){t+=e.id.length+1}))
return t-1}function s(e){var t=0
for(var r=0;r<e.length;r++)t+=e[r].length
return t+e.length-1}function l(e,t,r){var l=null!==this.block&&this.block.avoidRulesMerge
var c=e.prelude.children
var u=e.block
var f=Object.create(null)
var h=!0
var d=!0
r.prevUntil(t.prev,(function(p,m){var g=p.block
var v=p.type
if("Rule"!==v){var b=i.unsafeToSkipNode.call(c,p)
!b&&"Atrule"===v&&g&&a(g,{visit:"Rule",enter:function(e){e.prelude.children.each((function(e){f[e.compareMarker]=!0}))}})
return b}var y=p.prelude.children
if(e.pseudoSignature!==p.pseudoSignature)return!0
if(!(d=!y.some((function(e){return e.compareMarker in f})))&&!h)return!0
if(h&&i.isEqualSelectors(y,c)){g.children.appendList(u.children)
r.remove(t)
return!0}var x=i.compareDeclarations(u.children,g.children)
if(x.eq.length){if(!x.ne1.length&&!x.ne2.length){if(d){i.addSelectors(c,y)
r.remove(m)}return!0}if(!l)if(x.ne1.length&&!x.ne2.length){var k=o(c)
var w=s(x.eq)
if(h&&k<w){i.addSelectors(y,c)
u.children=(new n).fromArray(x.ne1)}}else if(!x.ne1.length&&x.ne2.length){k=o(y)
w=s(x.eq)
if(d&&k<w){i.addSelectors(c,y)
g.children=(new n).fromArray(x.ne2)}}else{var S={type:"SelectorList",loc:null,children:i.addSelectors(y.copy(),c)}
var A=o(S.children)+2
if((w=s(x.eq))>=A){var E=r.createItem({type:"Rule",loc:null,prelude:S,block:{type:"Block",loc:null,children:(new n).fromArray(x.eq)},pseudoSignature:e.pseudoSignature})
u.children=(new n).fromArray(x.ne1)
g.children=(new n).fromArray(x.ne2overrided)
h?r.insert(E,m):r.insert(E,t)
return!0}}}h&&(h=!y.some((function(e){return c.some((function(t){return t.compareMarker===e.compareMarker}))})))
y.each((function(e){f[e.compareMarker]=!0}))}))}e.exports=function(e){a(e,{visit:"Rule",reverse:!0,enter:l})}},function(e){e.exports=JSON.parse('{"_from":"csso@4.0.3","_id":"csso@4.0.3","_inBundle":false,"_integrity":"sha512-NL3spysxUkcrOgnpsT4Xdl2aiEiBG6bXswAABQVHcMrfjjBisFOKwLDOmf4wf32aPdcJws1zds2B0Rg+jqMyHQ==","_location":"/csso","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"csso@4.0.3","name":"csso","escapedName":"csso","rawSpec":"4.0.3","saveSpec":null,"fetchSpec":"4.0.3"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/csso/-/csso-4.0.3.tgz","_shasum":"0d9985dc852c7cc2b2cacfbbe1079014d1a8e903","_spec":"csso@4.0.3","_where":"C:\\\\Users\\\\Dr\\\\Documents\\\\GitHub\\\\libsvgo","author":{"name":"Sergey Kryzhanovsky","email":"skryzhanovsky@ya.ru","url":"https://github.com/afelix"},"bugs":{"url":"https://github.com/css/csso/issues"},"bundleDependencies":false,"dependencies":{"css-tree":"1.0.0-alpha.39"},"deprecated":false,"description":"CSS minifier with structural optimisations","devDependencies":{"@rollup/plugin-commonjs":"^11.0.1","@rollup/plugin-json":"^4.0.1","@rollup/plugin-node-resolve":"^7.0.0","coveralls":"^3.0.11","eslint":"^6.8.0","mocha":"^7.1.1","nyc":"^15.0.0","rollup":"^1.29.0","source-map":"^0.6.1","terser":"^4.6.3"},"engines":{"node":">=8.0.0"},"files":["dist/csso.js","dist/csso.min.js","lib"],"homepage":"https://github.com/css/csso","keywords":["css","compress","minifier","minify","optimise","optimisation","csstree"],"license":"MIT","main":"./lib/index","maintainers":[{"name":"Roman Dvornov","email":"rdvornov@gmail.com"}],"name":"csso","repository":{"type":"git","url":"git+https://github.com/css/csso.git"},"scripts":{"build":"rollup --config && terser dist/csso.js --compress --mangle -o dist/csso.min.js","coverage":"nyc npm test","coveralls":"nyc report --reporter=text-lcov | coveralls","gh-pages":"git clone --depth=1 -b gh-pages https://github.com/css/csso.git .gh-pages && npm run build && cp dist/csso.min.js .gh-pages/ && cd .gh-pages && git commit -am \\"update\\" && git push && cd .. && rm -rf .gh-pages","hydrogen":"node --trace-hydrogen --trace-phase=Z --trace-deopt --code-comments --hydrogen-track-positions --redirect-code-traces --redirect-code-traces-to=code.asm --trace_hydrogen_file=code.cfg --print-opt-code bin/csso --stat -o /dev/null","lint":"eslint lib test","lint-and-test":"npm run lint && npm test","postpublish":"npm run gh-pages","prepublishOnly":"npm run build","test":"mocha --reporter dot","travis":"nyc npm run lint-and-test && npm run coveralls"},"version":"4.0.3"}')},function(e,t,r){"use strict"
r.r(t)
var n={}
r.r(n)
r.d(n,"name",()=>je)
r.d(n,"type",()=>Ue)
r.d(n,"active",()=>Fe)
r.d(n,"description",()=>Ge)
r.d(n,"params",()=>Ve)
r.d(n,"fn",()=>Xe)
var a={}
r.r(a)
r.d(a,"name",()=>$e)
r.d(a,"type",()=>Qe)
r.d(a,"active",()=>Je)
r.d(a,"description",()=>Ze)
r.d(a,"params",()=>Ke)
r.d(a,"fn",()=>et)
var i={}
r.r(i)
r.d(i,"name",()=>rt)
r.d(i,"type",()=>nt)
r.d(i,"active",()=>at)
r.d(i,"description",()=>it)
r.d(i,"params",()=>ot)
r.d(i,"fn",()=>dt)
var o={}
r.r(o)
r.d(o,"name",()=>gt)
r.d(o,"type",()=>vt)
r.d(o,"active",()=>bt)
r.d(o,"description",()=>yt)
r.d(o,"params",()=>xt)
r.d(o,"fn",()=>St)
var s={}
r.r(s)
r.d(s,"name",()=>Et)
r.d(s,"type",()=>Ct)
r.d(s,"active",()=>Tt)
r.d(s,"description",()=>Pt)
r.d(s,"params",()=>Lt)
r.d(s,"fn",()=>_t)
var l={}
r.r(l)
r.d(l,"name",()=>Nt)
r.d(l,"type",()=>Rt)
r.d(l,"active",()=>Dt)
r.d(l,"description",()=>Mt)
r.d(l,"params",()=>It)
r.d(l,"fn",()=>Ut)
var c={}
r.r(c)
r.d(c,"name",()=>Ft)
r.d(c,"type",()=>Gt)
r.d(c,"active",()=>Vt)
r.d(c,"description",()=>Yt)
r.d(c,"params",()=>Ht)
r.d(c,"fn",()=>Wt)
var u={}
r.r(u)
r.d(u,"name",()=>Lr)
r.d(u,"type",()=>Or)
r.d(u,"active",()=>_r)
r.d(u,"description",()=>Nr)
r.d(u,"params",()=>Rr)
r.d(u,"fn",()=>Ur)
var f={}
r.r(f)
r.d(f,"name",()=>en)
r.d(f,"type",()=>tn)
r.d(f,"active",()=>rn)
r.d(f,"description",()=>nn)
r.d(f,"params",()=>an)
r.d(f,"fn",()=>ln)
var h={}
r.r(h)
r.d(h,"name",()=>un)
r.d(h,"type",()=>fn)
r.d(h,"active",()=>hn)
r.d(h,"description",()=>dn)
r.d(h,"params",()=>pn)
r.d(h,"fn",()=>An)
var d={}
r.r(d)
r.d(d,"name",()=>Cn)
r.d(d,"type",()=>Tn)
r.d(d,"active",()=>Pn)
r.d(d,"description",()=>Ln)
r.d(d,"params",()=>On)
r.d(d,"fn",()=>Dn)
var p={}
r.r(p)
r.d(p,"name",()=>Fn)
r.d(p,"type",()=>Gn)
r.d(p,"active",()=>Vn)
r.d(p,"description",()=>Hn)
r.d(p,"params",()=>Yn)
r.d(p,"fn",()=>Wn)
var m={}
r.r(m)
r.d(m,"name",()=>Xn)
r.d(m,"type",()=>$n)
r.d(m,"active",()=>Qn)
r.d(m,"description",()=>Jn)
r.d(m,"params",()=>Zn)
r.d(m,"fn",()=>Kn)
var g={}
r.r(g)
r.d(g,"name",()=>ta)
r.d(g,"type",()=>ra)
r.d(g,"active",()=>na)
r.d(g,"description",()=>aa)
r.d(g,"params",()=>ia)
r.d(g,"fn",()=>oa)
var v={}
r.r(v)
r.d(v,"name",()=>ca)
r.d(v,"type",()=>ua)
r.d(v,"active",()=>fa)
r.d(v,"description",()=>ha)
r.d(v,"params",()=>da)
r.d(v,"fn",()=>pa)
var b={}
r.r(b)
r.d(b,"name",()=>ga)
r.d(b,"type",()=>va)
r.d(b,"active",()=>ba)
r.d(b,"description",()=>ya)
r.d(b,"params",()=>xa)
r.d(b,"fn",()=>ka)
var y={}
r.r(y)
r.d(y,"name",()=>wa)
r.d(y,"type",()=>Sa)
r.d(y,"active",()=>Aa)
r.d(y,"description",()=>Ea)
r.d(y,"params",()=>Ca)
r.d(y,"fn",()=>Ta)
var x={}
r.r(x)
r.d(x,"name",()=>Pa)
r.d(x,"type",()=>La)
r.d(x,"active",()=>Oa)
r.d(x,"description",()=>Na)
r.d(x,"params",()=>_a)
r.d(x,"fn",()=>Da)
var k={}
r.r(k)
r.d(k,"name",()=>Ma)
r.d(k,"type",()=>Ia)
r.d(k,"active",()=>qa)
r.d(k,"description",()=>Ba)
r.d(k,"params",()=>za)
r.d(k,"fn",()=>ja)
var w={}
r.r(w)
r.d(w,"name",()=>Fa)
r.d(w,"type",()=>Ga)
r.d(w,"active",()=>Va)
r.d(w,"description",()=>Ya)
r.d(w,"params",()=>Wa)
r.d(w,"fn",()=>Xa)
var S={}
r.r(S)
r.d(S,"name",()=>$a)
r.d(S,"type",()=>Qa)
r.d(S,"active",()=>Ja)
r.d(S,"description",()=>Za)
r.d(S,"params",()=>Ka)
r.d(S,"fn",()=>ei)
var A={}
r.r(A)
r.d(A,"name",()=>ri)
r.d(A,"type",()=>ni)
r.d(A,"active",()=>ai)
r.d(A,"description",()=>ii)
r.d(A,"params",()=>oi)
r.d(A,"fn",()=>si)
var E={}
r.r(E)
r.d(E,"name",()=>li)
r.d(E,"type",()=>ci)
r.d(E,"active",()=>ui)
r.d(E,"description",()=>fi)
r.d(E,"params",()=>hi)
r.d(E,"fn",()=>di)
var C={}
r.r(C)
r.d(C,"name",()=>pi)
r.d(C,"type",()=>mi)
r.d(C,"active",()=>gi)
r.d(C,"description",()=>vi)
r.d(C,"params",()=>bi)
r.d(C,"fn",()=>xi)
var T={}
r.r(T)
r.d(T,"name",()=>ki)
r.d(T,"type",()=>wi)
r.d(T,"active",()=>Si)
r.d(T,"description",()=>Ai)
r.d(T,"params",()=>Ei)
r.d(T,"fn",()=>Ci)
var P={}
r.r(P)
r.d(P,"name",()=>Ti)
r.d(P,"type",()=>Pi)
r.d(P,"active",()=>Li)
r.d(P,"description",()=>Oi)
r.d(P,"params",()=>_i)
r.d(P,"fn",()=>Ni)
var L={}
r.r(L)
r.d(L,"name",()=>Ri)
r.d(L,"type",()=>Di)
r.d(L,"active",()=>Mi)
r.d(L,"description",()=>Ii)
r.d(L,"params",()=>qi)
r.d(L,"fn",()=>Bi)
var O={}
r.r(O)
r.d(O,"name",()=>zi)
r.d(O,"type",()=>ji)
r.d(O,"active",()=>Ui)
r.d(O,"description",()=>Fi)
r.d(O,"params",()=>Gi)
r.d(O,"fn",()=>Yi)
var _={}
r.r(_)
r.d(_,"name",()=>Hi)
r.d(_,"type",()=>Wi)
r.d(_,"active",()=>Xi)
r.d(_,"description",()=>$i)
r.d(_,"params",()=>Qi)
r.d(_,"fn",()=>Ji)
var N={}
r.r(N)
r.d(N,"name",()=>Ki)
r.d(N,"type",()=>eo)
r.d(N,"active",()=>to)
r.d(N,"description",()=>ro)
r.d(N,"params",()=>no)
r.d(N,"fn",()=>ao)
var R={}
r.r(R)
r.d(R,"name",()=>oo)
r.d(R,"type",()=>so)
r.d(R,"active",()=>lo)
r.d(R,"description",()=>co)
r.d(R,"params",()=>uo)
r.d(R,"fn",()=>mo)
var D={}
r.r(D)
r.d(D,"name",()=>go)
r.d(D,"type",()=>vo)
r.d(D,"active",()=>bo)
r.d(D,"description",()=>yo)
r.d(D,"params",()=>xo)
r.d(D,"fn",()=>wo)
var M={}
r.r(M)
r.d(M,"name",()=>So)
r.d(M,"type",()=>Ao)
r.d(M,"active",()=>Eo)
r.d(M,"description",()=>Co)
r.d(M,"params",()=>To)
r.d(M,"fn",()=>Po)
var I={}
r.r(I)
r.d(I,"name",()=>Lo)
r.d(I,"type",()=>Oo)
r.d(I,"active",()=>_o)
r.d(I,"description",()=>No)
r.d(I,"params",()=>Ro)
r.d(I,"fn",()=>Do)
var q={}
r.r(q)
r.d(q,"name",()=>qo)
r.d(q,"type",()=>Bo)
r.d(q,"active",()=>zo)
r.d(q,"description",()=>jo)
r.d(q,"params",()=>Uo)
r.d(q,"fn",()=>Fo)
var B={}
r.r(B)
r.d(B,"name",()=>Go)
r.d(B,"type",()=>Vo)
r.d(B,"active",()=>Yo)
r.d(B,"description",()=>Ho)
r.d(B,"params",()=>Wo)
r.d(B,"fn",()=>Xo)
var z={}
r.r(z)
r.d(z,"name",()=>$o)
r.d(z,"type",()=>Qo)
r.d(z,"active",()=>Jo)
r.d(z,"description",()=>Zo)
r.d(z,"params",()=>Ko)
r.d(z,"fn",()=>ns)
var j={}
r.r(j)
r.d(j,"name",()=>as)
r.d(j,"type",()=>is)
r.d(j,"active",()=>os)
r.d(j,"description",()=>ls)
r.d(j,"params",()=>ss)
r.d(j,"fn",()=>gs)
var U={}
r.r(U)
r.d(U,"name",()=>vs)
r.d(U,"type",()=>bs)
r.d(U,"active",()=>ys)
r.d(U,"description",()=>xs)
r.d(U,"params",()=>ks)
r.d(U,"fn",()=>ws)
var F={}
r.r(F)
r.d(F,"name",()=>Ss)
r.d(F,"type",()=>As)
r.d(F,"active",()=>Es)
r.d(F,"description",()=>Cs)
r.d(F,"params",()=>Ts)
r.d(F,"fn",()=>Ps)
var G={}
r.r(G)
r.d(G,"name",()=>Ls)
r.d(G,"type",()=>Os)
r.d(G,"active",()=>_s)
r.d(G,"description",()=>Ns)
r.d(G,"params",()=>Rs)
r.d(G,"fn",()=>Ds)
var V={}
r.r(V)
r.d(V,"name",()=>Ms)
r.d(V,"type",()=>Is)
r.d(V,"active",()=>qs)
r.d(V,"description",()=>Bs)
r.d(V,"params",()=>zs)
r.d(V,"fn",()=>js)
var Y={}
r.r(Y)
r.d(Y,"name",()=>Us)
r.d(Y,"type",()=>Fs)
r.d(Y,"active",()=>Gs)
r.d(Y,"description",()=>Vs)
r.d(Y,"params",()=>Ys)
r.d(Y,"fn",()=>Xs)
var H={}
r.r(H)
r.d(H,"name",()=>$s)
r.d(H,"type",()=>Qs)
r.d(H,"active",()=>Js)
r.d(H,"description",()=>Zs)
r.d(H,"params",()=>Ks)
r.d(H,"fn",()=>el)
var W={}
r.r(W)
r.d(W,"name",()=>tl)
r.d(W,"type",()=>rl)
r.d(W,"active",()=>nl)
r.d(W,"description",()=>al)
r.d(W,"params",()=>il)
r.d(W,"fn",()=>ol)
var X={}
r.r(X)
r.d(X,"name",()=>sl)
r.d(X,"type",()=>ll)
r.d(X,"active",()=>cl)
r.d(X,"description",()=>ul)
r.d(X,"params",()=>fl)
r.d(X,"fn",()=>hl)
var $={}
r.r($)
r.d($,"name",()=>dl)
r.d($,"type",()=>pl)
r.d($,"active",()=>ml)
r.d($,"description",()=>gl)
r.d($,"params",()=>vl)
r.d($,"fn",()=>bl)
var Q={}
r.r(Q)
r.d(Q,"name",()=>yl)
r.d(Q,"type",()=>xl)
r.d(Q,"active",()=>kl)
r.d(Q,"description",()=>wl)
r.d(Q,"params",()=>Sl)
r.d(Q,"fn",()=>Al)
var J={}
r.r(J)
r.d(J,"name",()=>Cl)
r.d(J,"type",()=>Tl)
r.d(J,"active",()=>Pl)
r.d(J,"description",()=>Ll)
r.d(J,"params",()=>Ol)
r.d(J,"fn",()=>_l)
var Z={}
r.r(Z)
r.d(Z,"addAttributesToSVGElement",()=>q)
r.d(Z,"addClassesToSVGElement",()=>B)
r.d(Z,"cleanupAttrs",()=>n)
r.d(Z,"cleanupEnableBackground",()=>a)
r.d(Z,"cleanupIDs",()=>i)
r.d(Z,"cleanupListOfValues",()=>z)
r.d(Z,"cleanupNumericValues",()=>o)
r.d(Z,"collapseGroups",()=>s)
r.d(Z,"convertColors",()=>l)
r.d(Z,"convertEllipseToCircle",()=>c)
r.d(Z,"convertPathData",()=>u)
r.d(Z,"convertShapeToPath",()=>f)
r.d(Z,"convertStyleToAttrs",()=>h)
r.d(Z,"convertTransform",()=>d)
r.d(Z,"inlineStyles",()=>p)
r.d(Z,"mergePaths",()=>m)
r.d(Z,"minifyStyles",()=>g)
r.d(Z,"moveElemsAttrsToGroup",()=>v)
r.d(Z,"moveGroupAttrsToElems",()=>b)
r.d(Z,"prefixIds",()=>j)
r.d(Z,"removeAttributesBySelector",()=>U)
r.d(Z,"removeAttrs",()=>F)
r.d(Z,"removeComments",()=>y)
r.d(Z,"removeDesc",()=>x)
r.d(Z,"removeDimensions",()=>G)
r.d(Z,"removeDoctype",()=>k)
r.d(Z,"removeEditorsNSData",()=>w)
r.d(Z,"removeElementsByAttr",()=>V)
r.d(Z,"removeEmptyAttrs",()=>S)
r.d(Z,"removeEmptyContainers",()=>A)
r.d(Z,"removeEmptyText",()=>E)
r.d(Z,"removeHiddenElems",()=>C)
r.d(Z,"removeMetadata",()=>T)
r.d(Z,"removeNonInheritableGroupAttrs",()=>P)
r.d(Z,"removeOffCanvasPaths",()=>Y)
r.d(Z,"removeRasterImages",()=>H)
r.d(Z,"removeScriptElement",()=>W)
r.d(Z,"removeStyleElement",()=>X)
r.d(Z,"removeTitle",()=>L)
r.d(Z,"removeUnknownsAndDefaults",()=>O)
r.d(Z,"removeUnusedNS",()=>_)
r.d(Z,"removeUselessDefs",()=>N)
r.d(Z,"removeUselessStrokeAndFill",()=>R)
r.d(Z,"removeViewBox",()=>D)
r.d(Z,"removeXMLNS",()=>$)
r.d(Z,"removeXMLProcInst",()=>M)
r.d(Z,"reusePaths",()=>Q)
r.d(Z,"sortAttrs",()=>J)
r.d(Z,"sortDefsChildren",()=>I)
const K=function(e){e=Object.assign({},e,{plugins:e.plugins.map(e=>Object.assign({},e,{params:Object.assign({},e.params)}))})
Array.isArray(e.plugins)&&(e.plugins=function(e){let t
return e.reduce((function(e,r){t&&r.type===t[0].type?t.push(r):e.push(t=[r])
return e}),[])}(e.plugins))
return e}
var ee=r(61)
var te=r.n(ee)
var re=r(20)
var ne=r.n(re)
var ae=r(62)
const ie={xmlMode:!0,adapter:r.n(ae)()({isTag:function(e){return e.isElem()},getParent:function(e){return e.parentNode||null},getChildren:function(e){return e.content||[]},getName:function(e){return e.elem},getText:function(e){return e.content[0].text||e.content[0].cdata||""},getAttributeValue:function(e,t){return e.hasAttr(t)?e.attr(t).value:null}})}
const oe=function(e,t){Object.assign(this,e)
t&&Object.defineProperty(this,"parentNode",{writable:!0,value:t})}
oe.prototype.clone=function(){const e=this
let t={}
Object.keys(e).forEach((function(r){"class"!==r&&"style"!==r&&"content"!==r&&(t[r]=e[r])}))
t=JSON.parse(JSON.stringify(t))
const r=new oe(t,!!e.parentNode)
e.class&&(r.class=e.class.clone(r))
e.style&&(r.style=e.style.clone(r))
e.content&&(r.content=e.content.map((function(e){const t=e.clone()
t.parentNode=r
return t})))
return r}
oe.prototype.isElem=function(e){return e?Array.isArray(e)?!!this.elem&&e.indexOf(this.elem)>-1:!!this.elem&&this.elem===e:!!this.elem}
oe.prototype.renameElem=function(e){e&&"string"==typeof e&&(this.elem=this.local=e)
return this}
oe.prototype.isEmpty=function(){return!this.content||!this.content.length}
oe.prototype.closestElem=function(e){let t=this
for(;(t=t.parentNode)&&!t.isElem(e););return t}
oe.prototype.spliceContent=function(e,t,r){if(arguments.length<2)return[]
Array.isArray(r)||(r=Array.apply(null,arguments).slice(2))
r.forEach((function(e){e.parentNode=this}),this)
return this.content.splice.apply(this.content,[e,t].concat(r))}
oe.prototype.hasAttr=function(e,t){return!!(this.attrs&&Object.keys(this.attrs).length&&(arguments.length?void 0!==t?this.attrs[e]&&this.attrs[e].value===t.toString():this.attrs[e]:this.attrs))}
oe.prototype.hasAttrLocal=function(e,t){if(!this.attrs||!Object.keys(this.attrs).length)return!1
if(!arguments.length)return!!this.attrs
let r
switch(null!=t&&t.constructor&&t.constructor.name){case"Number":case"String":r=a
break
case"RegExp":r=i
break
case"Function":r=o
break
default:r=n}return this.someAttr(r)
function n(t){return t.local===e}function a(r){return r.local===e&&t===r.value}function i(r){return r.local===e&&t.test(r.value)}function o(r){return r.local===e&&t(r.value)}}
oe.prototype.attr=function(e,t){if(this.hasAttr()&&arguments.length)return void 0!==t?this.hasAttr(e,t)?this.attrs[e]:void 0:this.attrs[e]}
oe.prototype.computedAttr=function(e,t){if(!arguments.length)return
let r=this
for(;r&&(!r.hasAttr(e)||!r.attr(e).value);r=r.parentNode);return null!=t?!!r&&r.hasAttr(e,t):r&&r.hasAttr(e)?r.attrs[e].value:void 0}
oe.prototype.removeAttr=function(e,t,r){if(!arguments.length)return!1
if(Array.isArray(e)){e.forEach(this.removeAttr,this)
return!1}if(!this.hasAttr(e))return!1
if(!r&&t&&this.attrs[e].value!==t)return!1
delete this.attrs[e]
Object.keys(this.attrs).length||delete this.attrs
return!0}
oe.prototype.addAttr=function(e){if(void 0===(e=e||{}).name||void 0===e.prefix||void 0===e.local)return!1
this.attrs=this.attrs||{}
this.attrs[e.name]=e
"class"===e.name&&this.class.hasClass()
"style"===e.name&&this.style.hasStyle()
return this.attrs[e.name]}
oe.prototype.eachAttr=function(e,t){if(!this.hasAttr())return!1
for(const r in this.attrs)e.call(t,this.attrs[r])
return!0}
oe.prototype.someAttr=function(e,t){if(!this.hasAttr())return!1
for(const r in this.attrs)if(e.call(t,this.attrs[r]))return!0
return!1}
oe.prototype.querySelectorAll=function(e){const t=ne()(e,this,ie)
return t.length>0?t:null}
oe.prototype.querySelector=function(e){return ne.a.selectOne(e,this,ie)}
oe.prototype.matches=function(e){return ne.a.is(this,e,ie)}
const se=function(e){this.parentNode=e
this.classNames=new Set
this.classAttr=null}
se.prototype.clone=function(e){const t=this
let r={}
Object.keys(t).forEach((function(e){"parentNode"!==e&&(r[e]=t[e])}))
r=JSON.parse(JSON.stringify(r))
const n=new se(e)
Object.assign(n,r)
return n}
se.prototype.hasClass=function(){this.classAttr={name:"class",value:null}
this.addClassHandler()}
se.prototype.addClassHandler=function(){Object.defineProperty(this.parentNode.attrs,"class",{get:this.getClassAttr.bind(this),set:this.setClassAttr.bind(this),enumerable:!0,configurable:!0})
this.addClassValueHandler()}
se.prototype.addClassValueHandler=function(){Object.defineProperty(this.classAttr,"value",{get:this.getClassValue.bind(this),set:this.setClassValue.bind(this),enumerable:!0,configurable:!0})}
se.prototype.getClassAttr=()=>this.classAttr
se.prototype.setClassAttr=function(e){this.setClassValue(e.value)
this.classAttr=e
this.addClassValueHandler()}
se.prototype.getClassValue=function(){return Array.from(this.classNames).join(" ")}
se.prototype.setClassValue=function(e){if(void 0===e){this.classNames.clear()
return}const t=e.split(" ")
this.classNames=new Set(t)}
se.prototype.add=function(){this.hasClass()
Object.values(arguments).forEach(this._addSingle.bind(this))}
se.prototype._addSingle=function(e){this.classNames.add(e)}
se.prototype.remove=function(){this.hasClass()
Object.values(arguments).forEach(this._removeSingle.bind(this))}
se.prototype._removeSingle=function(e){this.classNames.delete(e)}
se.prototype.item=function(e){return Array.from(this.classNames)[e]}
se.prototype.toggle=function(e,t){(this.contains(e)||!1===t)&&this.classNames.delete(e)
this.classNames.add(e)}
se.prototype.contains=function(e){return this.classNames.has(e)}
var le=r(1)
var ce=r.n(le)
var ue=r(63)
var fe=r.n(ue)
var he=r(19)
var de=r.n(he)
const pe=ce.a.List
function me(e){const t=[]
ce.a.walk(e,{visit:"Rule",enter:function(e){if("Rule"!==e.type)return
const r=this.atrule
const n=e
e.prelude.children.each((function(e,a){const i={item:a,atrule:r,rule:n,pseudos:[]}
e.children.each((function(e,t,r){"PseudoClassSelector"!==e.type&&"PseudoElementSelector"!==e.type||i.pseudos.push({item:t,list:r})}))
t.push(i)}))}})
return t}function ge(e,t){return r=e.item.data,n=t.item.data,function(e,t){for(let r=0;r<4;r+=1){if(e[r]<t[r])return-1
if(e[r]>t[r])return 1}return 0}(de()(r),de()(n))
var r,n}function ve(e){return{name:e.property,value:ce.a.generate(e.value),priority:e.important?"important":""}}function be(e,t){if(e.content[0].cdata){e.content[0].cdata=t
return e.content[0].cdata}e.content[0].text=t
return e.content[0].text}const ye=function(e){this.parentNode=e
this.properties=new Map
this.hasSynced=!1
this.styleAttr=null
this.styleValue=null
this.parseError=!1}
ye.prototype.clone=function(e){var t=this
var r={}
Object.keys(t).forEach((function(e){"parentNode"!==e&&(r[e]=t[e])}))
r=JSON.parse(JSON.stringify(r))
var n=new ye(e)
Object.assign(n,r)
return n}
ye.prototype.hasStyle=function(){this.addStyleHandler()}
ye.prototype.addStyleHandler=function(){this.styleAttr={name:"style",value:null}
Object.defineProperty(this.parentNode.attrs,"style",{get:this.getStyleAttr.bind(this),set:this.setStyleAttr.bind(this),enumerable:!0,configurable:!0})
this.addStyleValueHandler()}
ye.prototype.addStyleValueHandler=function(){Object.defineProperty(this.styleAttr,"value",{get:this.getStyleValue.bind(this),set:this.setStyleValue.bind(this),enumerable:!0,configurable:!0})}
ye.prototype.getStyleAttr=()=>this.styleAttr
ye.prototype.setStyleAttr=function(e){this.setStyleValue(e.value)
this.styleAttr=e
this.addStyleValueHandler()
this.hasSynced=!1}
ye.prototype.getStyleValue=function(){return this.getCssText()}
ye.prototype.setStyleValue=function(e){this.properties.clear()
this.styleValue=e
this.hasSynced=!1}
ye.prototype._loadCssText=function(){if(!this.hasSynced){this.hasSynced=!0
if(this.styleValue&&0!==this.styleValue.length){var e=this.styleValue
var t={}
try{t=ce.a.parse(e,{context:"declarationList",parseValue:!1})}catch(e){this.parseError=e
return}this.parseError=!1
var r=this
t.children.each((function(e){try{var t=ve(e)
r.setProperty(t.name,t.value,t.priority)}catch(e){"Unknown node type: undefined"!==e.message&&(r.parseError=e)}}))}}}
ye.prototype.getCssText=function(){var e=this.getProperties()
if(this.parseError)return this.styleValue
var t=[]
e.forEach((function(e,r){var n="important"===e.priority?"!important":""
t.push(r.trim()+":"+e.value.trim()+n)}))
return t.join(";")}
ye.prototype._handleParseError=function(){this.parseError&&console.warn("Warning: Parse error when parsing inline styles, style properties of this element cannot be used. The raw styles can still be get/set using .attr('style').value. Error details: "+this.parseError)}
ye.prototype._getProperty=function(e){if(void 0===e)throw Error("1 argument required, but only 0 present.")
var t=this.getProperties()
this._handleParseError()
return t.get(e.trim())}
ye.prototype.getPropertyPriority=function(e){var t=this._getProperty(e)
return t?t.priority:""}
ye.prototype.getPropertyValue=function(e){var t=this._getProperty(e)
return t?t.value:null}
ye.prototype.item=function(e){if(void 0===e)throw Error("1 argument required, but only 0 present.")
var t=this.getProperties()
this._handleParseError()
return Array.from(t.keys())[e]}
ye.prototype.getProperties=function(){this._loadCssText()
return this.properties}
ye.prototype.removeProperty=function(e){if(void 0===e)throw Error("1 argument required, but only 0 present.")
this.hasStyle()
var t=this.getProperties()
this._handleParseError()
var r=this.getPropertyValue(e)
t.delete(e.trim())
return r}
ye.prototype.setProperty=function(e,t,r){if(void 0===e)throw Error("propertyName argument required, but only not present.")
this.hasStyle()
var n=this.getProperties()
this._handleParseError()
var a={value:t.trim(),priority:r.trim()}
n.set(e.trim(),a)
return a}
const xe=/<!ENTITY\s+(\S+)\s+(?:'([^']+)'|"([^"]+)")\s*>/g
const ke={strict:!0,trim:!1,normalize:!0,lowercase:!0,xmlns:!0,position:!0}
function we(e,t,r,n){return function e(a){a.content=a.content.filter((function(a){n&&a.content&&e(a)
let i=!0
for(let e=0;i&&e<r.length;e++){const n=r[e]
n.active&&!1===n.fn(a,n.params,t)&&(i=!1)}!n&&a.content&&e(a)
return i}))
return a}(e)}const Se={animation:["animate","animateColor","animateMotion","animateTransform","set"],descriptive:["desc","metadata","title"],shape:["circle","ellipse","line","path","polygon","polyline","rect"],structural:["defs","g","svg","symbol","use"],paintServer:["solidColor","linearGradient","radialGradient","meshGradient","pattern","hatch"],nonRendering:["linearGradient","radialGradient","pattern","clipPath","mask","marker","symbol","filter","solidColor"],container:["a","defs","g","marker","mask","missing-glyph","pattern","svg","switch","symbol","foreignObject"],textContent:["altGlyph","altGlyphDef","altGlyphItem","glyph","glyphRef","textPath","text","tref","tspan"],textContentChild:["altGlyph","textPath","tref","tspan"],lightSource:["feDiffuseLighting","feSpecularLighting","feDistantLight","fePointLight","feSpotLight"],filterPrimitive:["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence"]}
const Ae=["path","glyph","missing-glyph"]
const Ee={animationAddition:["additive","accumulate"],animationAttributeTarget:["attributeType","attributeName"],animationEvent:["onbegin","onend","onrepeat","onload"],animationTiming:["begin","dur","end","min","max","restart","repeatCount","repeatDur","fill"],animationValue:["calcMode","values","keyTimes","keySplines","from","to","by"],conditionalProcessing:["requiredFeatures","requiredExtensions","systemLanguage"],core:["id","tabindex","xml:base","xml:lang","xml:space"],graphicalEvent:["onfocusin","onfocusout","onactivate","onclick","onmousedown","onmouseup","onmouseover","onmousemove","onmouseout","onload"],presentation:["alignment-baseline","baseline-shift","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cursor","direction","display","dominant-baseline","enable-background","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-orientation-horizontal","glyph-orientation-vertical","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","word-spacing","writing-mode"],xlink:["xlink:href","xlink:show","xlink:actuate","xlink:type","xlink:role","xlink:arcrole","xlink:title"],documentEvent:["onunload","onabort","onerror","onresize","onscroll","onzoom"],filterPrimitive:["x","y","width","height","result"],transferFunction:["type","tableValues","slope","intercept","amplitude","exponent","offset"]}
const Ce={core:{"xml:space":"preserve"},filterPrimitive:{x:"0",y:"0",width:"100%",height:"100%"},presentation:{clip:"auto","clip-path":"none","clip-rule":"nonzero",mask:"none",opacity:"1","stop-color":"#000","stop-opacity":"1","fill-opacity":"1","fill-rule":"nonzero",fill:"#000",stroke:"none","stroke-width":"1","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"4","stroke-dasharray":"none","stroke-dashoffset":"0","stroke-opacity":"1","paint-order":"normal","vector-effect":"none",display:"inline",visibility:"visible","marker-start":"none","marker-mid":"none","marker-end":"none","color-interpolation":"sRGB","color-interpolation-filters":"linearRGB","color-rendering":"auto","shape-rendering":"auto","text-rendering":"auto","image-rendering":"auto","font-style":"normal","font-variant":"normal","font-weight":"normal","font-stretch":"normal","font-size":"medium","font-size-adjust":"none",kerning:"auto","letter-spacing":"normal","word-spacing":"normal","text-decoration":"none","text-anchor":"start","text-overflow":"clip","writing-mode":"lr-tb","glyph-orientation-vertical":"auto","glyph-orientation-horizontal":"0deg",direction:"ltr","unicode-bidi":"normal","dominant-baseline":"auto","alignment-baseline":"baseline","baseline-shift":"baseline"},transferFunction:{slope:"1",intercept:"0",amplitude:"1",exponent:"1",offset:"0"}}
const Te={a:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation","xlink"],attrs:["class","style","externalResourcesRequired","transform","target"],defaults:{target:"_self"},contentGroups:["animation","descriptive","shape","structural","paintServer"],content:["a","altGlyphDef","clipPath","color-profile","cursor","filter","font","font-face","foreignObject","image","marker","mask","pattern","script","style","switch","text","view"]},altGlyph:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation","xlink"],attrs:["class","style","externalResourcesRequired","x","y","dx","dy","glyphRef","format","rotate"]},altGlyphDef:{attrsGroups:["core"],content:["glyphRef"]},altGlyphItem:{attrsGroups:["core"],content:["glyphRef","altGlyphItem"]},animate:{attrsGroups:["conditionalProcessing","core","animationAddition","animationAttributeTarget","animationEvent","animationTiming","animationValue","presentation","xlink"],attrs:["externalResourcesRequired"],contentGroups:["descriptive"]},animateColor:{attrsGroups:["conditionalProcessing","core","animationEvent","xlink","animationAttributeTarget","animationTiming","animationValue","animationAddition","presentation"],attrs:["externalResourcesRequired"],contentGroups:["descriptive"]},animateMotion:{attrsGroups:["conditionalProcessing","core","animationEvent","xlink","animationTiming","animationValue","animationAddition"],attrs:["externalResourcesRequired","path","keyPoints","rotate","origin"],defaults:{rotate:"0"},contentGroups:["descriptive"],content:["mpath"]},animateTransform:{attrsGroups:["conditionalProcessing","core","animationEvent","xlink","animationAttributeTarget","animationTiming","animationValue","animationAddition"],attrs:["externalResourcesRequired","type"],contentGroups:["descriptive"]},circle:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation"],attrs:["class","style","externalResourcesRequired","transform","cx","cy","r"],defaults:{cx:"0",cy:"0"},contentGroups:["animation","descriptive"]},clipPath:{attrsGroups:["conditionalProcessing","core","presentation"],attrs:["class","style","externalResourcesRequired","transform","clipPathUnits"],defaults:{clipPathUnits:"userSpaceOnUse"},contentGroups:["animation","descriptive","shape"],content:["text","use"]},"color-profile":{attrsGroups:["core","xlink"],attrs:["local","name","rendering-intent"],defaults:{name:"sRGB","rendering-intent":"auto"},contentGroups:["descriptive"]},cursor:{attrsGroups:["core","conditionalProcessing","xlink"],attrs:["externalResourcesRequired","x","y"],defaults:{x:"0",y:"0"},contentGroups:["descriptive"]},defs:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation"],attrs:["class","style","externalResourcesRequired","transform"],contentGroups:["animation","descriptive","shape","structural","paintServer"],content:["a","altGlyphDef","clipPath","color-profile","cursor","filter","font","font-face","foreignObject","image","marker","mask","pattern","script","style","switch","text","view"]},desc:{attrsGroups:["core"],attrs:["class","style"]},ellipse:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation"],attrs:["class","style","externalResourcesRequired","transform","cx","cy","rx","ry"],defaults:{cx:"0",cy:"0"},contentGroups:["animation","descriptive"]},feBlend:{attrsGroups:["core","presentation","filterPrimitive"],attrs:["class","style","in","in2","mode"],defaults:{mode:"normal"},content:["animate","set"]},feColorMatrix:{attrsGroups:["core","presentation","filterPrimitive"],attrs:["class","style","in","type","values"],defaults:{type:"matrix"},content:["animate","set"]},feComponentTransfer:{attrsGroups:["core","presentation","filterPrimitive"],attrs:["class","style","in"],content:["feFuncA","feFuncB","feFuncG","feFuncR"]},feComposite:{attrsGroups:["core","presentation","filterPrimitive"],attrs:["class","style","in","in2","operator","k1","k2","k3","k4"],defaults:{operator:"over",k1:"0",k2:"0",k3:"0",k4:"0"},content:["animate","set"]},feConvolveMatrix:{attrsGroups:["core","presentation","filterPrimitive"],attrs:["class","style","in","order","kernelMatrix","divisor","bias","targetX","targetY","edgeMode","kernelUnitLength","preserveAlpha"],defaults:{order:"3",bias:"0",edgeMode:"duplicate",preserveAlpha:"false"},content:["animate","set"]},feDiffuseLighting:{attrsGroups:["core","presentation","filterPrimitive"],attrs:["class","style","in","surfaceScale","diffuseConstant","kernelUnitLength"],defaults:{surfaceScale:"1",diffuseConstant:"1"},contentGroups:["descriptive"],content:["feDistantLight","fePointLight","feSpotLight"]},feDisplacementMap:{attrsGroups:["core","presentation","filterPrimitive"],attrs:["class","style","in","in2","scale","xChannelSelector","yChannelSelector"],defaults:{scale:"0",xChannelSelector:"A",yChannelSelector:"A"},content:["animate","set"]},feDistantLight:{attrsGroups:["core"],attrs:["azimuth","elevation"],defaults:{azimuth:"0",elevation:"0"},content:["animate","set"]},feFlood:{attrsGroups:["core","presentation","filterPrimitive"],attrs:["class","style"],content:["animate","animateColor","set"]},feFuncA:{attrsGroups:["core","transferFunction"],content:["set","animate"]},feFuncB:{attrsGroups:["core","transferFunction"],content:["set","animate"]},feFuncG:{attrsGroups:["core","transferFunction"],content:["set","animate"]},feFuncR:{attrsGroups:["core","transferFunction"],content:["set","animate"]},feGaussianBlur:{attrsGroups:["core","presentation","filterPrimitive"],attrs:["class","style","in","stdDeviation"],defaults:{stdDeviation:"0"},content:["set","animate"]},feImage:{attrsGroups:["core","presentation","filterPrimitive","xlink"],attrs:["class","style","externalResourcesRequired","preserveAspectRatio","href","xlink:href"],defaults:{preserveAspectRatio:"xMidYMid meet"},content:["animate","animateTransform","set"]},feMerge:{attrsGroups:["core","presentation","filterPrimitive"],attrs:["class","style"],content:["feMergeNode"]},feMergeNode:{attrsGroups:["core"],attrs:["in"],content:["animate","set"]},feMorphology:{attrsGroups:["core","presentation","filterPrimitive"],attrs:["class","style","in","operator","radius"],defaults:{operator:"erode",radius:"0"},content:["animate","set"]},feOffset:{attrsGroups:["core","presentation","filterPrimitive"],attrs:["class","style","in","dx","dy"],defaults:{dx:"0",dy:"0"},content:["animate","set"]},fePointLight:{attrsGroups:["core"],attrs:["x","y","z"],defaults:{x:"0",y:"0",z:"0"},content:["animate","set"]},feSpecularLighting:{attrsGroups:["core","presentation","filterPrimitive"],attrs:["class","style","in","surfaceScale","specularConstant","specularExponent","kernelUnitLength"],defaults:{surfaceScale:"1",specularConstant:"1",specularExponent:"1"},contentGroups:["descriptive","lightSource"]},feSpotLight:{attrsGroups:["core"],attrs:["x","y","z","pointsAtX","pointsAtY","pointsAtZ","specularExponent","limitingConeAngle"],defaults:{x:"0",y:"0",z:"0",pointsAtX:"0",pointsAtY:"0",pointsAtZ:"0",specularExponent:"1"},content:["animate","set"]},feTile:{attrsGroups:["core","presentation","filterPrimitive"],attrs:["class","style","in"],content:["animate","set"]},feTurbulence:{attrsGroups:["core","presentation","filterPrimitive"],attrs:["class","style","baseFrequency","numOctaves","seed","stitchTiles","type"],defaults:{baseFrequency:"0",numOctaves:"1",seed:"0",stitchTiles:"noStitch",type:"turbulence"},content:["animate","set"]},filter:{attrsGroups:["core","presentation","xlink"],attrs:["class","style","externalResourcesRequired","x","y","width","height","filterRes","filterUnits","primitiveUnits","href","xlink:href"],defaults:{primitiveUnits:"userSpaceOnUse",x:"-10%",y:"-10%",width:"120%",height:"120%"},contentGroups:["descriptive","filterPrimitive"],content:["animate","set"]},font:{attrsGroups:["core","presentation"],attrs:["class","style","externalResourcesRequired","horiz-origin-x","horiz-origin-y","horiz-adv-x","vert-origin-x","vert-origin-y","vert-adv-y"],defaults:{"horiz-origin-x":"0","horiz-origin-y":"0"},contentGroups:["descriptive"],content:["font-face","glyph","hkern","missing-glyph","vkern"]},"font-face":{attrsGroups:["core"],attrs:["font-family","font-style","font-variant","font-weight","font-stretch","font-size","unicode-range","units-per-em","panose-1","stemv","stemh","slope","cap-height","x-height","accent-height","ascent","descent","widths","bbox","ideographic","alphabetic","mathematical","hanging","v-ideographic","v-alphabetic","v-mathematical","v-hanging","underline-position","underline-thickness","strikethrough-position","strikethrough-thickness","overline-position","overline-thickness"],defaults:{"font-style":"all","font-variant":"normal","font-weight":"all","font-stretch":"normal","unicode-range":"U+0-10FFFF","units-per-em":"1000","panose-1":"0 0 0 0 0 0 0 0 0 0",slope:"0"},contentGroups:["descriptive"],content:["font-face-src"]},"font-face-format":{attrsGroups:["core"],attrs:["string"]},"font-face-name":{attrsGroups:["core"],attrs:["name"]},"font-face-src":{attrsGroups:["core"],content:["font-face-name","font-face-uri"]},"font-face-uri":{attrsGroups:["core","xlink"],attrs:["href","xlink:href"],content:["font-face-format"]},foreignObject:{attrsGroups:["core","conditionalProcessing","graphicalEvent","presentation"],attrs:["class","style","externalResourcesRequired","transform","x","y","width","height"],defaults:{x:0,y:0}},g:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation"],attrs:["class","style","externalResourcesRequired","transform"],contentGroups:["animation","descriptive","shape","structural","paintServer"],content:["a","altGlyphDef","clipPath","color-profile","cursor","filter","font","font-face","foreignObject","image","marker","mask","pattern","script","style","switch","text","view"]},glyph:{attrsGroups:["core","presentation"],attrs:["class","style","d","horiz-adv-x","vert-origin-x","vert-origin-y","vert-adv-y","unicode","glyph-name","orientation","arabic-form","lang"],defaults:{"arabic-form":"initial"},contentGroups:["animation","descriptive","shape","structural","paintServer"],content:["a","altGlyphDef","clipPath","color-profile","cursor","filter","font","font-face","foreignObject","image","marker","mask","pattern","script","style","switch","text","view"]},glyphRef:{attrsGroups:["core","presentation"],attrs:["class","style","d","horiz-adv-x","vert-origin-x","vert-origin-y","vert-adv-y"],contentGroups:["animation","descriptive","shape","structural","paintServer"],content:["a","altGlyphDef","clipPath","color-profile","cursor","filter","font","font-face","foreignObject","image","marker","mask","pattern","script","style","switch","text","view"]},hatch:{attrsGroups:["core","presentation","xlink"],attrs:["class","style","x","y","pitch","rotate","hatchUnits","hatchContentUnits","transform"],defaults:{hatchUnits:"objectBoundingBox",hatchContentUnits:"userSpaceOnUse",x:"0",y:"0",pitch:"0",rotate:"0"},contentGroups:["animation","descriptive"],content:["hatchPath"]},hatchPath:{attrsGroups:["core","presentation","xlink"],attrs:["class","style","d","offset"],defaults:{offset:"0"},contentGroups:["animation","descriptive"]},hkern:{attrsGroups:["core"],attrs:["u1","g1","u2","g2","k"]},image:{attrsGroups:["core","conditionalProcessing","graphicalEvent","xlink","presentation"],attrs:["class","style","externalResourcesRequired","preserveAspectRatio","transform","x","y","width","height","href","xlink:href"],defaults:{x:"0",y:"0",preserveAspectRatio:"xMidYMid meet"},contentGroups:["animation","descriptive"]},line:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation"],attrs:["class","style","externalResourcesRequired","transform","x1","y1","x2","y2"],defaults:{x1:"0",y1:"0",x2:"0",y2:"0"},contentGroups:["animation","descriptive"]},linearGradient:{attrsGroups:["core","presentation","xlink"],attrs:["class","style","externalResourcesRequired","x1","y1","x2","y2","gradientUnits","gradientTransform","spreadMethod","href","xlink:href"],defaults:{x1:"0",y1:"0",x2:"100%",y2:"0",spreadMethod:"pad"},contentGroups:["descriptive"],content:["animate","animateTransform","set","stop"]},marker:{attrsGroups:["core","presentation"],attrs:["class","style","externalResourcesRequired","viewBox","preserveAspectRatio","refX","refY","markerUnits","markerWidth","markerHeight","orient"],defaults:{markerUnits:"strokeWidth",refX:"0",refY:"0",markerWidth:"3",markerHeight:"3"},contentGroups:["animation","descriptive","shape","structural","paintServer"],content:["a","altGlyphDef","clipPath","color-profile","cursor","filter","font","font-face","foreignObject","image","marker","mask","pattern","script","style","switch","text","view"]},mask:{attrsGroups:["conditionalProcessing","core","presentation"],attrs:["class","style","externalResourcesRequired","x","y","width","height","maskUnits","maskContentUnits"],defaults:{maskUnits:"objectBoundingBox",maskContentUnits:"userSpaceOnUse",x:"-10%",y:"-10%",width:"120%",height:"120%"},contentGroups:["animation","descriptive","shape","structural","paintServer"],content:["a","altGlyphDef","clipPath","color-profile","cursor","filter","font","font-face","foreignObject","image","marker","mask","pattern","script","style","switch","text","view"]},metadata:{attrsGroups:["core"]},"missing-glyph":{attrsGroups:["core","presentation"],attrs:["class","style","d","horiz-adv-x","vert-origin-x","vert-origin-y","vert-adv-y"],contentGroups:["animation","descriptive","shape","structural","paintServer"],content:["a","altGlyphDef","clipPath","color-profile","cursor","filter","font","font-face","foreignObject","image","marker","mask","pattern","script","style","switch","text","view"]},mpath:{attrsGroups:["core","xlink"],attrs:["externalResourcesRequired","href","xlink:href"],contentGroups:["descriptive"]},path:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation"],attrs:["class","style","externalResourcesRequired","transform","d","pathLength"],contentGroups:["animation","descriptive"]},pattern:{attrsGroups:["conditionalProcessing","core","presentation","xlink"],attrs:["class","style","externalResourcesRequired","viewBox","preserveAspectRatio","x","y","width","height","patternUnits","patternContentUnits","patternTransform","href","xlink:href"],defaults:{patternUnits:"objectBoundingBox",patternContentUnits:"userSpaceOnUse",x:"0",y:"0",width:"0",height:"0",preserveAspectRatio:"xMidYMid meet"},contentGroups:["animation","descriptive","paintServer","shape","structural"],content:["a","altGlyphDef","clipPath","color-profile","cursor","filter","font","font-face","foreignObject","image","marker","mask","pattern","script","style","switch","text","view"]},polygon:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation"],attrs:["class","style","externalResourcesRequired","transform","points"],contentGroups:["animation","descriptive"]},polyline:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation"],attrs:["class","style","externalResourcesRequired","transform","points"],contentGroups:["animation","descriptive"]},radialGradient:{attrsGroups:["core","presentation","xlink"],attrs:["class","style","externalResourcesRequired","cx","cy","r","fx","fy","fr","gradientUnits","gradientTransform","spreadMethod","href","xlink:href"],defaults:{gradientUnits:"objectBoundingBox",cx:"50%",cy:"50%",r:"50%"},contentGroups:["descriptive"],content:["animate","animateTransform","set","stop"]},meshGradient:{attrsGroups:["core","presentation","xlink"],attrs:["class","style","x","y","gradientUnits","transform"],contentGroups:["descriptive","paintServer","animation"],content:["meshRow"]},meshRow:{attrsGroups:["core","presentation"],attrs:["class","style"],contentGroups:["descriptive"],content:["meshPatch"]},meshPatch:{attrsGroups:["core","presentation"],attrs:["class","style"],contentGroups:["descriptive"],content:["stop"]},rect:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation"],attrs:["class","style","externalResourcesRequired","transform","x","y","width","height","rx","ry"],defaults:{x:"0",y:"0"},contentGroups:["animation","descriptive"]},script:{attrsGroups:["core","xlink"],attrs:["externalResourcesRequired","type","href","xlink:href"]},set:{attrsGroups:["conditionalProcessing","core","animation","xlink","animationAttributeTarget","animationTiming"],attrs:["externalResourcesRequired","to"],contentGroups:["descriptive"]},solidColor:{attrsGroups:["core","presentation"],attrs:["class","style"],contentGroups:["paintServer"]},stop:{attrsGroups:["core","presentation"],attrs:["class","style","offset","path"],content:["animate","animateColor","set"]},style:{attrsGroups:["core"],attrs:["type","media","title"],defaults:{type:"text/css"}},svg:{attrsGroups:["conditionalProcessing","core","documentEvent","graphicalEvent","presentation"],attrs:["class","style","x","y","width","height","viewBox","preserveAspectRatio","zoomAndPan","version","baseProfile","contentScriptType","contentStyleType"],defaults:{x:"0",y:"0",width:"100%",height:"100%",preserveAspectRatio:"xMidYMid meet",zoomAndPan:"magnify",version:"1.1",baseProfile:"none",contentScriptType:"application/ecmascript",contentStyleType:"text/css"},contentGroups:["animation","descriptive","shape","structural","paintServer"],content:["a","altGlyphDef","clipPath","color-profile","cursor","filter","font","font-face","foreignObject","image","marker","mask","pattern","script","style","switch","text","view"]},switch:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation"],attrs:["class","style","externalResourcesRequired","transform"],contentGroups:["animation","descriptive","shape"],content:["a","foreignObject","g","image","svg","switch","text","use"]},symbol:{attrsGroups:["core","graphicalEvent","presentation"],attrs:["class","style","externalResourcesRequired","preserveAspectRatio","viewBox","refX","refY"],defaults:{refX:0,refY:0},contentGroups:["animation","descriptive","shape","structural","paintServer"],content:["a","altGlyphDef","clipPath","color-profile","cursor","filter","font","font-face","foreignObject","image","marker","mask","pattern","script","style","switch","text","view"]},text:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation"],attrs:["class","style","externalResourcesRequired","transform","lengthAdjust","x","y","dx","dy","rotate","textLength"],defaults:{x:"0",y:"0",lengthAdjust:"spacing"},contentGroups:["animation","descriptive","textContentChild"],content:["a"]},textPath:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation","xlink"],attrs:["class","style","externalResourcesRequired","href","xlink:href","startOffset","method","spacing","d"],defaults:{startOffset:"0",method:"align",spacing:"exact"},contentGroups:["descriptive"],content:["a","altGlyph","animate","animateColor","set","tref","tspan"]},title:{attrsGroups:["core"],attrs:["class","style"]},tref:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation","xlink"],attrs:["class","style","externalResourcesRequired","href","xlink:href"],contentGroups:["descriptive"],content:["animate","animateColor","set"]},tspan:{attrsGroups:["conditionalProcessing","core","graphicalEvent","presentation"],attrs:["class","style","externalResourcesRequired","x","y","dx","dy","rotate","textLength","lengthAdjust"],contentGroups:["descriptive"],content:["a","altGlyph","animate","animateColor","set","tref","tspan"]},use:{attrsGroups:["core","conditionalProcessing","graphicalEvent","presentation","xlink"],attrs:["class","style","externalResourcesRequired","transform","x","y","width","height","href","xlink:href"],defaults:{x:"0",y:"0"},contentGroups:["animation","descriptive"]},view:{attrsGroups:["core"],attrs:["externalResourcesRequired","viewBox","preserveAspectRatio","zoomAndPan","viewTarget"],contentGroups:["descriptive"]},vkern:{attrsGroups:["core"],attrs:["u1","g1","u2","g2","k"]}}
const Pe=["clip-path","color-profile","fill","filter","marker-start","marker-mid","marker-end","mask","stroke","style"]
const Le=["clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cursor","direction","dominant-baseline","fill","fill-opacity","fill-rule","font","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-orientation-horizontal","glyph-orientation-vertical","image-rendering","letter-spacing","marker","marker-end","marker-mid","marker-start","paint-order","pointer-events","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-rendering","transform","visibility","word-spacing","writing-mode"]
const Oe=["display","clip-path","filter","mask","opacity","text-decoration","transform","unicode-bidi","visibility"]
const _e={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#0ff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000",blanchedalmond:"#ffebcd",blue:"#00f",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#0ff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#f0f",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#789",lightslategrey:"#789",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#0f0",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#f0f",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#639",red:"#f00",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#fff",whitesmoke:"#f5f5f5",yellow:"#ff0",yellowgreen:"#9acd32"}
const Ne={"#f0ffff":"azure","#f5f5dc":"beige","#ffe4c4":"bisque","#a52a2a":"brown","#ff7f50":"coral","#ffd700":"gold","#808080":"gray","#008000":"green","#4b0082":"indigo","#fffff0":"ivory","#f0e68c":"khaki","#faf0e6":"linen","#800000":"maroon","#000080":"navy","#808000":"olive","#ffa500":"orange","#da70d6":"orchid","#cd853f":"peru","#ffc0cb":"pink","#dda0dd":"plum","#800080":"purple","#f00":"red","#ff0000":"red","#fa8072":"salmon","#a0522d":"sienna","#c0c0c0":"silver","#fffafa":"snow","#d2b48c":"tan","#008080":"teal","#ff6347":"tomato","#ee82ee":"violet","#f5deb3":"wheat"}
const Re=["color","fill","stroke","stop-color","flood-color","lighting-color"]
const De=Se.textContent.concat("title")
const Me={doctypeStart:"<!DOCTYPE",doctypeEnd:">",procInstStart:"<?",procInstEnd:"?>",tagOpenStart:"<",tagOpenEnd:">",tagCloseStart:"</",tagCloseEnd:">",tagShortStart:"<",tagShortEnd:"/>",attrStart:'="',attrEnd:'"',commentStart:"\x3c!--",commentEnd:"--\x3e",cdataStart:"<![CDATA[",cdataEnd:"]]>",textStart:"",textEnd:"",indent:4,regEntities:/[&'"<>]/g,regValEntities:/[&"<>]/g,encodeEntity:function(e){return Ie[e]},pretty:!1,useShortTags:!0}
const Ie={"&":"&amp;","'":"&apos;",'"':"&quot;",">":"&gt;","<":"&lt;"}
function qe(e){this.config=e?Object.assign({},Me,e):Object.assign({},Me)
const t=this.config.indent
"number"!=typeof t||isNaN(t)?"string"!=typeof t&&(this.config.indent="    "):this.config.indent=t<0?"\t":" ".repeat(t)
if(this.config.pretty){this.config.doctypeEnd+="\n"
this.config.procInstEnd+="\n"
this.config.commentEnd+="\n"
this.config.cdataEnd+="\n"
this.config.tagShortEnd+="\n"
this.config.tagOpenEnd+="\n"
this.config.tagCloseEnd+="\n"
this.config.textEnd+="\n"}this.indentLevel=0
this.textContext=null}qe.prototype.convert=function(e){let t=""
if(e.content){this.indentLevel++
e.content.forEach((function(e){e.elem?t+=this.createElem(e):e.text?t+=this.createText(e.text):e.doctype?t+=this.createDoctype(e.doctype):e.processinginstruction?t+=this.createProcInst(e.processinginstruction):e.comment?t+=this.createComment(e.comment):e.cdata&&(t+=this.createCDATA(e.cdata))}),this)}this.indentLevel--
return{data:t,info:{width:this.width,height:this.height}}}
qe.prototype.createIndent=function(){let e=""
this.config.pretty&&!this.textContext&&(e=this.config.indent.repeat(this.indentLevel-1))
return e}
qe.prototype.createDoctype=function(e){return this.config.doctypeStart+e+this.config.doctypeEnd}
qe.prototype.createProcInst=function(e){return this.config.procInstStart+e.name+" "+e.body+this.config.procInstEnd}
qe.prototype.createComment=function(e){return this.config.commentStart+e+this.config.commentEnd}
qe.prototype.createCDATA=function(e){return this.createIndent()+this.config.cdataStart+e+this.config.cdataEnd}
qe.prototype.createElem=function(e){if(e.isElem("svg")&&e.hasAttr("width")&&e.hasAttr("height")){this.width=e.attr("width").value
this.height=e.attr("height").value}if(e.isEmpty())return this.config.useShortTags?this.createIndent()+this.config.tagShortStart+e.elem+this.createAttrs(e)+this.config.tagShortEnd:this.createIndent()+this.config.tagShortStart+e.elem+this.createAttrs(e)+this.config.tagOpenEnd+this.config.tagCloseStart+e.elem+this.config.tagCloseEnd
{let t=this.config.tagOpenStart
let r=this.config.tagOpenEnd
let n=this.config.tagCloseStart
let a=this.config.tagCloseEnd
let i=this.createIndent()
let o=""
let s=""
let l=""
if(this.textContext){t=Me.tagOpenStart
r=Me.tagOpenEnd
n=Me.tagCloseStart
a=Me.tagCloseEnd
i=""}else if(e.isElem(De)){this.config.pretty&&(o+=i+this.config.indent)
this.textContext=e}s+=this.convert(e).data
if(this.textContext===e){this.textContext=null
this.config.pretty&&(l="\n")}return i+t+e.elem+this.createAttrs(e)+r+o+s+l+this.createIndent()+n+e.elem+a}}
qe.prototype.createAttrs=function(e){let t=""
e.eachAttr((function(e){void 0!==e.value?t+=" "+e.name+this.config.attrStart+String(e.value).replace(this.config.regValEntities,this.config.encodeEntity)+this.config.attrEnd:t+=" "+e.name}),this)
return t}
qe.prototype.createText=function(e){return this.createIndent()+this.config.textStart+e.replace(this.config.regEntities,this.config.encodeEntity)+(this.textContext?"":this.config.textEnd)}
var Be=r(2)

;/**
 * SVGO is a Nodejs-based tool for optimizing SVG vector graphics files.
 *
 * @see https://github.com/svg/svgo
 *
 * @author Kir Belevich <kir@soulshine.in> (https://github.com/deepsweet)
 * @copyright © 2012 Kir Belevich
 * @license MIT https://raw.githubusercontent.com/svg/svgo/master/LICENSE
 */const ze=function(e){this.config=ze.Config(e)}
ze.Config=K
ze.prototype.optimize=function(e,t){t=t||{}
return new Promise((r,n)=>{if(this.config.error){n(this.config.error)
return}const a=this.config
const i=a.multipass?10:1
let o=0
let s=Number.POSITIVE_INFINITY
const l=e=>{if(e.error)n(e.error)
else{t.multipassCount=o
if(++o<i&&e.data.length<s){s=e.data.length
this._optimizeOnce(e.data,t,l)}else{a.datauri&&(e.data=Object(Be.b)(e.data,a.datauri))
t&&t.path&&(e.path=t.path)
r(e)}}}
this._optimizeOnce(e,t,l)})}
ze.prototype._optimizeOnce=function(e,t,r){const n=this.config
!function(e,t){const r=te.a.parser(ke.strict,ke)
const n=new oe({elem:"#document",content:[]})
let a=n
const i=[n]
let o=null
let s=!1
function l(e){e=new oe(e,a);(a.content=a.content||[]).push(e)
return e}r.ondoctype=function(t){l({doctype:t})
const n=t.indexOf("[")
let a
if(n>=0){xe.lastIndex=n
for(;null!=(a=xe.exec(e));)r.ENTITIES[a[1]]=a[2]||a[3]}}
r.onprocessinginstruction=function(e){l({processinginstruction:e})}
r.oncomment=function(e){l({comment:e.trim()})}
r.oncdata=function(e){l({cdata:e})}
r.onopentag=function(e){let t={elem:e.name,prefix:e.prefix,local:e.local,attrs:{}}
t.class=new se(t)
t.style=new ye(t)
if(Object.keys(e.attributes).length)for(const r in e.attributes){"class"===r&&t.class.hasClass()
"style"===r&&t.style.hasStyle()
t.attrs[r]={name:r,value:e.attributes[r].value,prefix:e.attributes[r].prefix,local:e.attributes[r].local}}t=l(t)
a=t
"text"!==e.name||e.prefix||(o=a)
i.push(t)}
r.ontext=function(e){if(/\S/.test(e)||o){o||(e=e.trim())
l({text:e})}}
r.onclosetag=function(){if(i.pop()===o){!function(e){if(!e.content)return e
let t=e.content[0]
let r=e.content[e.content.length-1]
for(;t&&t.content&&!t.text;)t=t.content[0]
t&&t.text&&(t.text=t.text.replace(/^\s+/,""))
for(;r&&r.content&&!r.text;)r=r.content[r.content.length-1]
r&&r.text&&(r.text=r.text.replace(/\s+$/,""))}(o)
o=null}a=i[i.length-1]}
r.onerror=function(e){e.message="Error in parsing SVG: "+e.message
if(e.message.indexOf("Unexpected end")<0)throw e}
r.onend=function(){this.error?t({error:this.error.message}):t(n)}
try{r.write(e)}catch(e){t({error:e.message})
s=!0}s||r.close()}(e,(function(e){if(e.error)r(e)
else{e=function(e,t,r){r.forEach((function(r){switch(r[0].type){case"perItem":e=we(e,t,r)
break
case"perItemReverse":e=we(e,t,r,!0)
break
case"full":e=function(e,t,r){r.forEach((function(r){r.active&&(e=r.fn(e,r.params,t))}))
return e}(e,t,r)}}))
return e}(e,t,n.plugins)
r(function(e,t){return new qe(t).convert(e)}(e,n.js2svg))}}))}
ze.prototype.createContentItem=function(e){return new oe(e)}
const je="cleanupAttrs"
const Ue="perItem"
const Fe=!0
const Ge="cleanups attributes from newlines, trailing and repeating spaces"
const Ve={newlines:!0,trim:!0,spaces:!0}
const Ye=/(\S)\r?\n(\S)/g
const He=/\r?\n/g
const We=/\s{2,}/g
const Xe=function(e,t){e.isElem()&&e.eachAttr((function(e){if(t.newlines){e.value=e.value.replace(Ye,(function(e,t,r){return t+" "+r}))
e.value=e.value.replace(He,"")}t.trim&&(e.value=e.value.trim())
t.spaces&&(e.value=e.value.replace(We," "))}))}
const $e="cleanupEnableBackground"
const Qe="full"
const Je=!0
const Ze="remove or cleanup enable-background attribute when possible"
const Ke={}
const et=function(e){const t=/^new\s0\s0\s([-+]?\d*\.?\d+([eE][-+]?\d+)?)\s([-+]?\d*\.?\d+([eE][-+]?\d+)?)$/
const r=["svg","mask","pattern"]
let n=!1
function a(e,t){e.content.forEach((function(e){t(e)
e.content&&a(e,t)}))
return e}const i=a(e,(function(e){!function(e){if(e.isElem(r)&&e.hasAttr("enable-background")&&e.hasAttr("width")&&e.hasAttr("height")){const r=e.attr("enable-background").value.match(t)
r&&e.attr("width").value===r[1]&&e.attr("height").value===r[3]&&(e.isElem("svg")?e.removeAttr("enable-background"):e.attr("enable-background").value="new")}}(e)
n||function(e){e.isElem("filter")&&(n=!0)}(e)}))
return n?i:a(i,(function(e){e.removeAttr("enable-background")}))}
const tt=new Set(Pe)
const rt="cleanupIDs"
const nt="full"
const at=!0
const it="removes unused IDs and minifies used"
const ot={remove:!0,minify:!0,prefix:"",preserve:[],preservePrefixes:[],force:!1}
const st=/\burl\(("|')?#(.+?)\1\)/
const lt=/^#(.+?)$/
const ct=/(\w+)\./
const ut=["style","script"]
const ft=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const ht=ft.length-1
const dt=function(e,t){let r
let n
const a=new Map
const i=new Map
let o=!1
const s=new Set(Array.isArray(t.preserve)?t.preserve:t.preserve?[t.preserve]:[])
const l=new Set(Array.isArray(t.preservePrefixes)?t.preservePrefixes:t.preservePrefixes?[t.preservePrefixes]:[])
e=function e(r){for(let n=0;n<r.content.length&&!o;n++){const s=r.content[n]
if(!t.force){const e=Boolean(s.content)
if(s.isElem(ut)&&e){o=!0
continue}if(s.isElem("svg")){let e=!0
for(let t=0;t<s.content.length;t++)if(!s.content[t].isElem("defs")){e=!1
break}if(e)break}}s.isElem()&&s.eachAttr((function(e){let t
let r
if("id"!==e.name){tt.has(e.name)&&(r=e.value.match(st))?t=r[2]:("href"===e.local&&(r=e.value.match(lt))||"begin"===e.name&&(r=e.value.match(ct)))&&(t=r[1])
if(t){const r=i.get(t)||[]
r.push(e)
i.set(t,r)}}else{t=e.value
a.has(t)?s.removeAttr("id"):a.set(t,s)}}))
s.content&&e(s)}return r}(e)
if(o)return e
const c=e=>s.has(e)||function(e,t){if(!t)return!1
for(const r of e)if(t.startsWith(r))return!0
return!1}(l,e)
for(const e of i){const i=e[0]
if(a.has(i)){if(t.minify&&!c(i)){do{n=mt(r=pt(r),t)}while(c(n))
a.get(i).attr("id").value=n
for(const t of e[1])t.value=t.value.includes("#")?t.value.replace("#"+i,"#"+n):t.value.replace(i+".",n+".")}a.delete(i)}}if(t.remove)for(const e of a)c(e[0])||e[1].removeAttr("id")
return e}
function pt(e){if(!e)return[0]
e[e.length-1]++
for(let t=e.length-1;t>0;t--)if(e[t]>ht){e[t]=0
void 0!==e[t-1]&&e[t-1]++}if(e[0]>ht){e[0]=0
e.unshift(0)}return e}function mt(e,t){return t.prefix+e.map(e=>ft[e]).join("")}const gt="cleanupNumericValues"
const vt="perItem"
const bt=!0
const yt="rounds numeric values to the fixed precision, removes default ‘px’ units"
const xt={floatPrecision:3,leadingZero:!0,defaultPx:!0,convertToPx:!0}
const kt=/^([-+]?\d*\.?\d+([eE][-+]?\d+)?)(px|pt|pc|mm|cm|m|in|ft|em|ex|%)?$/
const wt={cm:96/2.54,mm:96/25.4,in:96,pt:4/3,pc:16}
const St=function(e,t){if(e.isElem()){const r=t.floatPrecision
if(e.hasAttr("viewBox")){const t=e.attr("viewBox").value.split(/\s,?\s*|,\s*/g)
e.attr("viewBox").value=t.map((function(e){const t=+e
return isNaN(t)?e:+t.toFixed(r)})).join(" ")}e.eachAttr((function(e){if("version"===e.name)return
const n=e.value.match(kt)
if(n){let a=+(+n[1]).toFixed(r)
let i=n[3]||""
if(t.convertToPx&&i&&i in wt){const e=+(wt[i]*n[1]).toFixed(r)
if(String(e).length<n[0].length){a=e
i="px"}}t.leadingZero&&(a=Object(Be.c)(a))
t.defaultPx&&"px"===i&&(i="")
e.value=a+i}}))}}
const At=Se.animation
const Et="collapseGroups"
const Ct="perItemReverse"
const Tt=!0
const Pt="collapses useless groups"
const Lt={}
function Ot(e){return e.isElem(At)&&e.hasAttr("attributeName",this)||!e.isEmpty()&&e.content.some(Ot,this)}const _t=function(e){!e.isElem()||e.isElem("switch")||e.isEmpty()||e.content.forEach((function(t,r){if(t.isElem("g")&&!t.isEmpty()){if(t.hasAttr()&&1===t.content.length){const e=t.content[0]
!e.isElem()||e.hasAttr("id")||t.hasAttr("filter")||t.hasAttr("class")&&e.hasAttr("class")||(t.hasAttr("clip-path")||t.hasAttr("mask"))&&(!e.isElem("g")||t.hasAttr("transform")||e.hasAttr("transform"))||t.eachAttr((function(r){if(!t.content.some(Ot,r.name)){if(e.hasAttr(r.name)){if("transform"===r.name)e.attr(r.name).value=r.value+" "+e.attr(r.name).value
else if(e.hasAttr(r.name,"inherit"))e.attr(r.name).value=r.value
else if(Le.indexOf(r.name)<0&&!e.hasAttr(r.name,r.value))return}else e.addAttr(r)
t.removeAttr(r.name)}}))}t.hasAttr()||t.content.some((function(e){return e.isElem(At)}))||e.spliceContent(r,1,t.content)}}))}
const Nt="convertColors"
const Rt="perItem"
const Dt=!0
const Mt="converts colors: rgb() to #rrggbb and #rrggbb to #rgb"
const It={currentColor:!1,names2hex:!0,rgb2hex:!0,shorthex:!0,shortname:!0}
const qt="([+-]?(?:\\d*\\.\\d+|\\d+\\.?)%?)"
const Bt=new RegExp("^rgb\\(\\s*"+qt+"\\s*,\\s*"+qt+"\\s*,\\s*"+qt+"\\s*\\)$")
const zt=/^#(([a-fA-F0-9])\2){3}$/
const jt=/\bnone\b/i
const Ut=function(e,t){e.elem&&e.eachAttr((function(e){if(Re.indexOf(e.name)>-1){let n=e.value
let a
if(t.currentColor){a="string"==typeof t.currentColor?n===t.currentColor:t.currentColor.exec?t.currentColor.exec(n):!n.match(jt)
a&&(n="currentColor")}t.names2hex&&n.toLowerCase()in _e&&(n=_e[n.toLowerCase()])
if(t.rgb2hex&&(a=n.match(Bt))){a=a.slice(1,4).map((function(e){e.indexOf("%")>-1&&(e=Math.round(2.55*parseFloat(e)))
return Math.max(0,Math.min(e,255))}))
n="#"+("00000"+((r=a)[0]<<16|r[1]<<8|r[2]).toString(16)).slice(-6).toUpperCase()}t.shorthex&&(a=n.match(zt))&&(n="#"+a[0][1]+a[0][3]+a[0][5])
if(t.shortname){const e=n.toLowerCase()
e in Ne&&(n=Ne[e])}e.value=n}var r}))}
const Ft="convertEllipseToCircle"
const Gt="perItem"
const Vt=!0
const Yt="converts non-eccentric <ellipse>s to <circle>s"
const Ht={}
const Wt=function(e){if(e.isElem("ellipse")){const t=e.attr("rx").value||0
const r=e.attr("ry").value||0
if(t===r||"auto"===t||"auto"===r){const n="auto"!==t?t:r
e.renameElem("circle")
e.removeAttr(["rx","ry"])
e.addAttr({name:"r",value:n,prefix:"",local:"r"})}}}
const Xt=/matrix|translate|scale|rotate|skewX|skewY/
const $t=/\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/
const Qt=/[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g
const Jt=function(e){const t=[]
let r
e.split($t).forEach((function(e){let n
if(e)if(Xt.test(e))t.push(r={name:e})
else for(;n=Qt.exec(e);){n=Number(n)
r.data?r.data.push(n):r.data=[n]}}))
return r&&r.data?t:[]}
const Zt=function(e){return{name:"matrix",data:(e=e.map((function(e){return"matrix"===e.name?e.data:function(e){if("matrix"===e.name)return e.data
let t
switch(e.name){case"translate":t=[1,0,0,1,e.data[0],e.data[1]||0]
break
case"scale":t=[e.data[0],0,0,e.data[1]||e.data[0],0,0]
break
case"rotate":const r=Kt.cos(e.data[0])
const n=Kt.sin(e.data[0])
const a=e.data[1]||0
const i=e.data[2]||0
t=[r,n,-n,r,(1-r)*a+n*i,(1-r)*i-n*a]
break
case"skewX":t=[1,0,Kt.tan(e.data[0]),1,0,0]
break
case"skewY":t=[1,Kt.tan(e.data[0]),0,1,0,0]}return t}(e)}))).length>0?e.reduce(tr):[]}}
const Kt={rad:function(e){return e*Math.PI/180},deg:function(e){return 180*e/Math.PI},cos:function(e){return Math.cos(this.rad(e))},acos:function(e,t){return+this.deg(Math.acos(e)).toFixed(t)},sin:function(e){return Math.sin(this.rad(e))},asin:function(e,t){return+this.deg(Math.asin(e)).toFixed(t)},tan:function(e){return Math.tan(this.rad(e))},atan:function(e,t){return+this.deg(Math.atan(e)).toFixed(t)}}
const er=function(e,t){const r=t.floatPrecision
const n=e.data
const a=[]
let i=+Math.hypot(n[0],n[1]).toFixed(t.transformPrecision)
let o=+((n[0]*n[3]-n[1]*n[2])/i).toFixed(t.transformPrecision)
const s=n[0]*n[2]+n[1]*n[3]
const l=n[0]*n[1]+n[2]*n[3]
const c=0!==l||i===o;(n[4]||n[5])&&a.push({name:"translate",data:n.slice(4,n[5]?6:5)})
if(!n[1]&&n[2])a.push({name:"skewX",data:[Kt.atan(n[2]/o,r)]})
else if(n[1]&&!n[2]){a.push({name:"skewY",data:[Kt.atan(n[1]/n[0],r)]})
i=n[0]
o=n[3]}else if(!s||1===i&&1===o||!c){if(!c){i=(n[0]<0?-1:1)*Math.hypot(n[0],n[2])
o=(n[3]<0?-1:1)*Math.hypot(n[1],n[3])
a.push({name:"scale",data:[i,o]})}const e=Math.min(Math.max(-1,n[0]/i),1)
const t=[Kt.acos(e,r)*((c?1:o)*n[1]<0?-1:1)]
t[0]&&a.push({name:"rotate",data:t})
l&&s&&a.push({name:"skewX",data:[Kt.atan(s/(i*i),r)]})
if(t[0]&&(n[4]||n[5])){a.shift()
const e=n[0]/i
const r=n[1]/(c?i:o)
const s=n[4]*(c||o)
const l=n[5]*(c||i)
const u=(Math.pow(1-e,2)+Math.pow(r,2))*(c||i*o)
t.push(((1-e)*s-r*l)/u)
t.push(((1-e)*l+r*s)/u)}}else if(n[1]||n[2])return e;(!c||1===i&&1===o)&&a.length||a.push({name:"scale",data:i===o?[i]:[i,o]})
return a}
function tr(e,t){return[e[0]*t[0]+e[2]*t[1],e[1]*t[0]+e[3]*t[1],e[0]*t[2]+e[2]*t[3],e[1]*t[2]+e[3]*t[3],e[0]*t[4]+e[2]*t[5]+e[4],e[1]*t[4]+e[3]*t[5]+e[5]]}const rr=Ce.presentation["stroke-width"]
const nr=String.raw`[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?\s*`
const ar=String.raw`(?:\s,?\s*|,\s*)`
const ir=`(${nr})`+ar
const or=`([01])${ar}?`
const sr=String.raw`(${nr})${ar}?(${nr})`
const lr=(ir+"?").repeat(2)+ir+or.repeat(2)+sr
const cr=/([MmLlHhVvCcSsQqTtAaZz])\s*/
const ur=new RegExp(nr,"g")
const fr=new RegExp(lr,"g")
const hr=/[-+]?(\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/
const dr=function(e){if(e.pathJS)return e.pathJS
const t={H:1,V:1,M:2,L:2,T:2,Q:4,S:4,C:6,A:7,h:1,v:1,m:2,l:2,t:2,q:4,s:4,c:6,a:7}
const r=[]
let n
let a=!1
e.attr("d").value.split(cr).forEach((function(e){if(e){if(!a){if("M"!==e&&"m"!==e)return
a=!0}if(cr.test(e)){n=e
"Z"!==n&&"z"!==n||r.push({instruction:"z"})}else{if("A"===n||"a"===n){const t=[]
for(let r;r=fr.exec(e);)for(let e=1;e<r.length;e++)t.push(r[e])
e=t}else e=e.match(ur)
if(!e)return
e=e.map(Number)
if("M"===n||"m"===n){r.push({instruction:0===r.length?"M":n,data:e.splice(0,2)})
n="M"===n?"L":"l"}for(const a=t[n];e.length;)r.push({instruction:n,data:e.splice(0,a)})}}}))
r.length&&"m"===r[0].instruction&&(r[0].instruction="M")
e.pathJS=r
return r}
const pr=function(e){const t=[0,0]
const r=[0,0]
let n
return e.map((function(e){const a=e.instruction
const i=e.data&&e.data.slice()
if("M"===a){vr(t,i)
vr(r,i)}else if("mlcsqt".indexOf(a)>-1){for(n=0;n<i.length;n++)i[n]+=t[n%2]
vr(t,i)
"m"===a&&vr(r,i)}else if("a"===a){i[5]+=t[0]
i[6]+=t[1]
vr(t,i)}else if("h"===a){i[0]+=t[0]
t[0]=i[0]}else if("v"===a){i[0]+=t[1]
t[1]=i[0]}else"MZLCSQTA".indexOf(a)>-1?vr(t,i):"H"===a?t[0]=i[0]:"V"===a?t[1]=i[0]:"z"===a&&vr(t,r)
return"z"===a?{instruction:"z"}:{instruction:a.toUpperCase(),data:i}}))}
function mr(e,t,r){return[e[0]*t+e[2]*r+e[4],e[1]*t+e[3]*r+e[5]]}const gr=function(e,t,r){e.pathJS=t
r.collapseRepeated&&(t=function(e){let t
let r
return e.reduce((function(e,n){if(t&&n.data&&n.instruction===t.instruction)if("M"!==n.instruction)t=e[r]={instruction:t.instruction,data:t.data.concat(n.data),coords:n.coords,base:t.base}
else{t.data=n.data
t.coords=n.coords}else{e.push(n)
t=n
r=e.length-1}return e}),[])}(t))
e.attr("d").value=t.reduce((function(e,t){let n=""
t.data&&(n=Object(Be.a)(t.data,r,t.instruction))
return e+(t.instruction+n)}),"")}
function vr(e,t){e[0]=t[t.length-2]
e[1]=t[t.length-1]
return e}const br=function(e,t){if(e.length<3||t.length<3)return!1
const r=pr(e).reduce(Er,[])
const n=pr(t).reduce(Er,[])
if(r.maxX<=n.minX||n.maxX<=r.minX||r.maxY<=n.minY||n.maxY<=r.minY||r.every((function(e){return n.every((function(t){return e[e.maxX][0]<=t[t.minX][0]||t[t.maxX][0]<=e[e.minX][0]||e[e.maxY][1]<=t[t.minY][1]||t[t.maxY][1]<=e[e.minY][1]}))})))return!1
const a=r.map(Cr)
const i=n.map(Cr)
return a.some((function(e){return!(e.length<3)&&i.some((function(t){if(t.length<3)return!1
const r=[o(e,t,[1,0])]
const n=xr(r[0])
let a=1e4
for(;;){if(0==a--){console.error("Error: infinite loop while processing mergePaths plugin.")
return!0}r.push(o(e,t,n))
if(wr(n,r[r.length-1])<=0)return!1
if(yr(r,n))return!0}}))}))
function o(e,t,r){return kr(s(e,r),s(t,xr(r)))}function s(e,t){let r=t[1]>=0?t[0]<0?e.maxY:e.maxX:t[0]<0?e.minX:e.minY
let n=-1/0
let a
for(;(a=wr(e[r],t))>n;){n=a
r=++r%e.length}return e[(r||e.length)-1]}}
function yr(e,t){if(2===e.length){const r=e[1]
const n=e[0]
const a=xr(e[1])
const i=kr(n,r)
if(wr(a,i)>0)vr(t,Sr(i,r))
else{vr(t,a)
e.shift()}}else{const r=e[2]
const n=e[1]
const a=e[0]
const i=kr(n,r)
const o=kr(a,r)
const s=xr(r)
const l=Sr(i,o)
const c=Sr(o,i)
if(wr(l,s)>0)if(wr(i,s)>0){vr(t,l)
e.shift()}else{vr(t,s)
e.splice(0,2)}else{if(!(wr(c,s)>0))return!0
if(wr(o,s)>0){vr(t,c)
e.splice(1,1)}else{vr(t,s)
e.splice(0,2)}}}return!1}function xr(e){return[-e[0],-e[1]]}function kr(e,t){return[e[0]-t[0],e[1]-t[1]]}function wr(e,t){return e[0]*t[0]+e[1]*t[1]}function Sr(e,t){const r=[-e[1],e[0]]
return wr(r,xr(t))<0?xr(r):r}let Ar
function Er(e,t,r,n){let a=e.length&&e[e.length-1]
const i=r&&n[r-1]
let o=a.length&&a[a.length-1]
const s=t.data
let l=o
switch(t.instruction){case"M":e.push(a=[])
break
case"H":u(a,[s[0],o[1]])
break
case"V":u(a,[o[0],s[0]])
break
case"Q":u(a,s.slice(0,2))
Ar=[s[2]-s[0],s[3]-s[1]]
break
case"T":if("Q"===i.instruction||"T"===i.instruction){l=[o[0]+Ar[0],o[1]+Ar[1]]
u(a,l)
Ar=[s[0]-l[0],s[1]-l[1]]}break
case"C":u(a,[.5*(o[0]+s[0]),.5*(o[1]+s[1])])
u(a,[.5*(s[0]+s[2]),.5*(s[1]+s[3])])
u(a,[.5*(s[2]+s[4]),.5*(s[3]+s[5])])
Ar=[s[4]-s[2],s[5]-s[3]]
break
case"S":if("C"===i.instruction||"S"===i.instruction){u(a,[o[0]+.5*Ar[0],o[1]+.5*Ar[1]])
l=[o[0]+Ar[0],o[1]+Ar[1]]}u(a,[.5*(l[0]+s[0]),.5*(l[1]+s[1])])
u(a,[.5*(s[0]+s[2]),.5*(s[1]+s[3])])
Ar=[s[2]-s[0],s[3]-s[1]]
break
case"A":const t=Pr.apply(0,o.concat(s))
for(let e;(e=t.splice(0,6).map(c)).length;){u(a,[.5*(o[0]+e[0]),.5*(o[1]+e[1])])
u(a,[.5*(e[0]+e[2]),.5*(e[1]+e[3])])
u(a,[.5*(e[2]+e[4]),.5*(e[3]+e[5])])
t.length&&u(a,o=e.slice(-2))}}s&&s.length>=2&&u(a,s.slice(-2))
return e
function c(e,t){return e+o[t%2]}function u(t,r){if(!t.length||r[1]>t[t.maxY][1]){t.maxY=t.length
e.maxY=e.length?Math.max(r[1],e.maxY):r[1]}if(!t.length||r[0]>t[t.maxX][0]){t.maxX=t.length
e.maxX=e.length?Math.max(r[0],e.maxX):r[0]}if(!t.length||r[1]<t[t.minY][1]){t.minY=t.length
e.minY=e.length?Math.min(r[1],e.minY):r[1]}if(!t.length||r[0]<t[t.minX][0]){t.minX=t.length
e.minX=e.length?Math.min(r[0],e.minX):r[0]}t.push(r)}}function Cr(e){e.sort((function(e,t){return e[0]===t[0]?e[1]-t[1]:e[0]-t[0]}))
const t=[]
let r=0
let n=0
for(let a=0;a<e.length;a++){for(;t.length>=2&&Tr(t[t.length-2],t[t.length-1],e[a])<=0;)t.pop()
if(e[a][1]<e[r][1]){r=a
n=t.length}t.push(e[a])}const a=[]
let i=e.length-1
let o=0
for(let t=e.length;t--;){for(;a.length>=2&&Tr(a[a.length-2],a[a.length-1],e[t])<=0;)a.pop()
if(e[t][1]>e[i][1]){i=t
o=a.length}a.push(e[t])}a.pop()
t.pop()
const s=t.concat(a)
s.minX=0
s.maxX=t.length
s.minY=n
s.maxY=(t.length+o)%s.length
return s}function Tr(e,t,r){return(t[0]-e[0])*(r[1]-e[1])-(t[1]-e[1])*(r[0]-e[0])}function Pr(e,t,r,n,a,i,o,s,l,c){const u=120*Math.PI/180
const f=Math.PI/180*(+a||0)
let h=[]
let d
let p
let m
let g
const v=function(e,t,r){return e*Math.cos(r)-t*Math.sin(r)}
const b=function(e,t,r){return e*Math.sin(r)+t*Math.cos(r)}
if(c){m=c[0]
g=c[1]
p=c[2]
d=c[3]}else{t=b(e=v(e,t,-f),t,-f)
const a=(e-(s=v(s,l,-f)))/2
const c=(t-(l=b(s,l,-f)))/2
let u=a*a/(r*r)+c*c/(n*n)
if(u>1){u=Math.sqrt(u)
r*=u
n*=u}const h=r*r
const y=n*n
const x=(i===o?-1:1)*Math.sqrt(Math.abs((h*y-h*c*c-y*a*a)/(h*c*c+y*a*a)))
p=x*r*c/n+(e+s)/2
d=x*-n*a/r+(t+l)/2
m=Math.asin(((t-d)/n).toFixed(9))
g=Math.asin(((l-d)/n).toFixed(9))
m=e<p?Math.PI-m:m
g=s<p?Math.PI-g:g
m<0&&(m=2*Math.PI+m)
g<0&&(g=2*Math.PI+g)
o&&m>g&&(m-=2*Math.PI)
!o&&g>m&&(g-=2*Math.PI)}let y=g-m
if(Math.abs(y)>u){const e=g
const t=s
const i=l
g=m+u*(o&&g>m?1:-1)
h=Pr(s=p+r*Math.cos(g),l=d+n*Math.sin(g),r,n,a,0,o,t,i,[g,e,p,d])}y=g-m
const x=Math.cos(m)
const k=Math.sin(m)
const w=Math.cos(g)
const S=Math.sin(g)
const A=Math.tan(y/4)
const E=4/3*r*A
const C=4/3*n*A
const T=[-E*k,C*x,s+E*S-e,l-C*w-t,s-e,l-t]
if(c)return T.concat(h)
{h=T.concat(h)
const e=[]
for(let t=0,r=h.length;t<r;t++)e[t]=t%2?b(h[t-1],h[t],f):v(h[t],h[t+1],f)
return e}}const Lr="convertPathData"
const Or="perItem"
const _r=!0
const Nr="optimizes path data: writes in shorter form, applies transformations"
const Rr={applyTransforms:!0,applyTransformsStroked:!0,makeArcs:{threshold:2.5,tolerance:.5},straightCurves:!0,lineShorthands:!0,curveSmoothShorthands:!0,floatPrecision:3,transformPrecision:5,removeUseless:!0,collapseRepeated:!0,utilizeAbsolute:!0,leadingZero:!0,negativeExtraSpace:!0,noSpaceAfterFlags:!0,forceAbsolutePath:!1}
let Dr
let Mr
let Ir
let qr
let Br
let zr
let jr
const Ur=function(e,t){if(e.isElem(Ae)&&e.hasAttr("d")){Mr=t.floatPrecision
Ir=!1!==Mr?+Math.pow(.1,Mr).toFixed(Mr):.01
Dr=Mr>0&&Mr<20?Vr:Yr
if(t.makeArcs){qr=t.makeArcs.threshold
Br=t.makeArcs.tolerance}zr=e.hasAttr("marker-mid")
const r=e.computedAttr("stroke")
const n=e.computedAttr("stroke")
jr=r&&"none"!==r&&n&&"butt"!==n
let a=dr(e)
if(a.length){!function(e){const t=[0,0]
const r=[0,0]
let n
e.forEach((function(a,i){let o=a.instruction
const s=a.data
if(s){if("mcslqta".indexOf(o)>-1){t[0]+=s[s.length-2]
t[1]+=s[s.length-1]
if("m"===o){r[0]=t[0]
r[1]=t[1]
n=a}}else"h"===o?t[0]+=s[0]:"v"===o&&(t[1]+=s[0])
if("M"===o){i>0&&(o="m")
s[0]-=t[0]
s[1]-=t[1]
r[0]=t[0]+=s[0]
r[1]=t[1]+=s[1]
n=a}else if("LT".indexOf(o)>-1){o=o.toLowerCase()
s[0]-=t[0]
s[1]-=t[1]
t[0]+=s[0]
t[1]+=s[1]}else if("C"===o){o="c"
s[0]-=t[0]
s[1]-=t[1]
s[2]-=t[0]
s[3]-=t[1]
s[4]-=t[0]
s[5]-=t[1]
t[0]+=s[4]
t[1]+=s[5]}else if("SQ".indexOf(o)>-1){o=o.toLowerCase()
s[0]-=t[0]
s[1]-=t[1]
s[2]-=t[0]
s[3]-=t[1]
t[0]+=s[2]
t[1]+=s[3]}else if("A"===o){o="a"
s[5]-=t[0]
s[6]-=t[1]
t[0]+=s[5]
t[1]+=s[6]}else if("H"===o){o="h"
s[0]-=t[0]
t[0]+=s[0]}else if("V"===o){o="v"
s[0]-=t[1]
t[1]+=s[0]}a.instruction=o
a.data=s
a.coords=t.slice(-2)}else if("z"===o){n&&(a.coords=n.coords)
t[0]=r[0]
t[1]=r[1]}a.base=i>0?e[i-1].coords:[0,0]}))}(a)
t.applyTransforms&&(a=function(e,t,r){if(!e.hasAttr("transform")||!e.attr("transform").value||e.someAttr((function(e){return~Pe.indexOf(e.name)&&~e.value.indexOf("url(")})))return t
const n=Zt(Jt(e.attr("transform").value))
const a=e.computedAttr("stroke")
const i=e.computedAttr("id")
const o=r.transformPrecision
let s
let l
if(a&&"none"!==a){if(!r.applyTransformsStroked||(n.data[0]!==n.data[3]||n.data[1]!==-n.data[2])&&(n.data[0]!==-n.data[3]||n.data[1]!==n.data[2]))return t
if(i){let r=e
let n=!1
do{r.hasAttr("stroke-width")&&(n=!0)}while(!r.hasAttr("id",i)&&!n&&(r=r.parentNode))
if(!n)return t}l=+Math.sqrt(n.data[0]*n.data[0]+n.data[1]*n.data[1]).toFixed(o)
if(1!==l){const t=e.computedAttr("stroke-width")||rr
e.hasAttr("vector-effect")&&"non-scaling-stroke"===e.attr("vector-effect").value||(e.hasAttr("stroke-width")?e.attrs["stroke-width"].value=e.attrs["stroke-width"].value.trim().replace(hr,(function(e){return Object(Be.c)(e*l)})):e.addAttr({name:"stroke-width",prefix:"",local:"stroke-width",value:t.replace(hr,(function(e){return Object(Be.c)(e*l)}))}))}}else if(i)return t
t.forEach((function(e){if(e.data){if("h"===e.instruction){e.instruction="l"
e.data[1]=0}else if("v"===e.instruction){e.instruction="l"
e.data[1]=e.data[0]
e.data[0]=0}if("M"!==e.instruction||0===n.data[4]&&0===n.data[5]){if("a"===e.instruction){!function(e,t){let r=e[0]
let n=e[1]
const a=e[2]*Math.PI/180
const i=Math.cos(a)
const o=Math.sin(a)
let s=Math.pow(e[5]*i+e[6]*o,2)/(4*r*r)+Math.pow(e[6]*i-e[5]*o,2)/(4*n*n)
if(s>1){s=Math.sqrt(s)
r*=s
n*=s}const l=tr(t,[r*i,r*o,-n*o,n*i,0,0])
const c=l[2]*l[2]+l[3]*l[3]
const u=l[0]*l[0]+l[1]*l[1]+c
const f=Math.hypot(l[0]-l[3],l[1]+l[2])*Math.hypot(l[0]+l[3],l[1]-l[2])
if(f){const t=(u+f)/2
const r=(u-f)/2
const n=Math.abs(t-c)>1e-6
const a=(n?t:r)-c
const i=l[0]*l[2]+l[1]*l[3]
const o=l[0]*a+l[2]*i
const s=l[1]*a+l[3]*i
e[0]=Math.sqrt(t)
e[1]=Math.sqrt(r)
e[2]=((n?s<0:o>0)?-1:1)*Math.acos((n?o:s)/Math.hypot(o,s))*180/Math.PI}else{e[0]=e[1]=Math.sqrt(u/2)
e[2]=0}t[0]<0!=t[3]<0&&(e[4]=1-e[4])}(e.data,n.data)
if(Math.abs(e.data[2])>80){const t=e.data[0]
const r=e.data[2]
e.data[0]=e.data[1]
e.data[1]=t
e.data[2]=r+(r>0?-90:90)}s=mr(n.data,e.data[5],e.data[6])
e.data[5]=s[0]
e.data[6]=s[1]}else for(let t=0;t<e.data.length;t+=2){s=mr(n.data,e.data[t],e.data[t+1])
e.data[t]=s[0]
e.data[t+1]=s[1]}e.coords[0]=e.base[0]+e.data[e.data.length-2]
e.coords[1]=e.base[1]+e.data[e.data.length-1]}else{s=mr(n.data,e.data[0],e.data[1])
vr(e.data,s)
vr(e.coords,s)
n.data[4]=0
n.data[5]=0}}}))
e.removeAttr("transform")
return t}(e,a,t))
a=function(e,t){const r=Kr.bind(null,t)
const n=[0,0]
const a=[0,0]
let i={}
return e.filter((function(e,o,s){let l=e.instruction
let c=e.data
let u=s[o+1]
if(c){let f=c
let h
if("s"===l){f=[0,0].concat(c)
if("cs".indexOf(i.instruction)>-1){const e=i.data
const t=e.length
f[0]=e[t-2]-e[t-4]
f[1]=e[t-1]-e[t-3]}}if(t.makeArcs&&("c"===l||"s"===l)&&Fr(f)&&(h=function(e){const t=$r(e,.5)
const r=[t[0]/2,t[1]/2]
const n=[(t[0]+e[4])/2,(t[1]+e[5])/2]
const a=Gr([r[0],r[1],r[0]+r[1],r[1]-r[0],n[0],n[1],n[0]+(n[1]-t[1]),n[1]-(n[0]-t[0])])
const i=a&&Xr([0,0],a)
const o=Math.min(qr*Ir,Br*i/100)
if(a&&i<1e15&&[1/4,3/4].every((function(t){return Math.abs(Xr($r(e,t),a)-i)<=o})))return{center:a,radius:i}}(f))){let t
const a=Dr([h.radius])[0]
let d=Zr(f,h)
const p=f[5]*f[0]-f[4]*f[1]>0?1:0
let m={instruction:"a",data:[a,a,0,0,p,f[4],f[5]],coords:e.coords.slice(),base:e.base}
const g=[m]
const v=[h.center[0]-f[4],h.center[1]-f[5]]
const b={center:v,radius:h.radius}
const y=[e]
let x=0
let k=""
let w
if("c"===i.instruction&&Fr(i.data)&&Jr(i.data,h)||"a"===i.instruction&&i.sdata&&Jr(i.sdata,h)){y.unshift(i)
m.base=i.base
m.data[5]=m.coords[0]-m.base[0]
m.data[6]=m.coords[1]-m.base[1]
const e="a"===i.instruction?i.sdata:i.data
d+=Zr(e,{center:[e[4]+h.center[0],e[5]+h.center[1]],radius:h.radius})
d>Math.PI&&(m.data[3]=1)
x=1}for(t=o;(u=s[++t])&&~"cs".indexOf(u.instruction);){let e=u.data
if("s"===u.instruction){w=Wr({instruction:"s",data:u.data.slice()},s[t-1].data)
e=w.data
w.data=e.slice(0,2)
k=r([w])}if(!Fr(e)||!Qr(e,b))break
d+=Zr(e,b)
if(d-2*Math.PI>.001)break
d>Math.PI&&(m.data[3]=1)
y.push(u)
if(!(2*Math.PI-d>.001)){m.data[5]=2*(b.center[0]-e[4])
m.data[6]=2*(b.center[1]-e[5])
m.coords=[m.base[0]+m.data[5],m.base[1]+m.data[6]]
m={instruction:"a",data:[a,a,0,0,p,u.coords[0]-m.coords[0],u.coords[1]-m.coords[1]],coords:u.coords,base:m.coords}
g.push(m)
t++
break}m.coords=u.coords
m.data[5]=m.coords[0]-m.base[0]
m.data[6]=m.coords[1]-m.base[1]
v[0]-=e[4]
v[1]-=e[5]}if((r(g)+k).length<r(y).length){s[t]&&"s"===s[t].instruction&&Wr(s[t],s[t-1].data)
if(x){const t=g.shift()
Dr(t.data)
n[0]+=t.data[5]-i.data[i.data.length-2]
n[1]+=t.data[6]-i.data[i.data.length-1]
i.instruction="a"
i.data=t.data
e.base=i.coords=t.coords}m=g.shift()
1===y.length?e.sdata=f.slice():y.length-1-x>0&&s.splice.apply(s,[o+1,y.length-1-x].concat(g))
if(!m)return!1
l="a"
c=m.data
e.coords=m.coords}}if(!1!==Mr){if("mltqsc".indexOf(l)>-1)for(let t=c.length;t--;)c[t]+=e.base[t%2]-n[t%2]
else if("h"===l)c[0]+=e.base[0]-n[0]
else if("v"===l)c[0]+=e.base[1]-n[1]
else if("a"===l){c[5]+=e.base[0]-n[0]
c[6]+=e.base[1]-n[1]}Dr(c)
if("h"===l)n[0]+=c[0]
else if("v"===l)n[1]+=c[0]
else{n[0]+=c[c.length-2]
n[1]+=c[c.length-1]}Dr(n)
if("m"===l.toLowerCase()){a[0]=n[0]
a[1]=n[1]}}if(t.straightCurves)if("c"===l&&Hr(c)||"s"===l&&Hr(f)){u&&"s"===u.instruction&&Wr(u,c)
l="l"
c=c.slice(-2)}else if("q"===l&&Hr(c)){u&&"t"===u.instruction&&Wr(u,c)
l="l"
c=c.slice(-2)}else if("t"===l&&"q"!==i.instruction&&"t"!==i.instruction){l="l"
c=c.slice(-2)}else if("a"===l&&(0===c[0]||0===c[1])){l="l"
c=c.slice(-2)}if(t.lineShorthands&&"l"===l)if(0===c[1]){l="h"
c.pop()}else if(0===c[0]){l="v"
c.shift()}if(t.collapseRepeated&&!zr&&"mhv".indexOf(l)>-1&&i.instruction&&l===i.instruction.toLowerCase()&&("h"!==l&&"v"!==l||i.data[0]>=0==c[0]>=0)){i.data[0]+=c[0]
"h"!==l&&"v"!==l&&(i.data[1]+=c[1])
i.coords=e.coords
s[o]=i
return!1}if(t.curveSmoothShorthands&&i.instruction)if("c"===l){if("c"===i.instruction&&c[0]===-(i.data[2]-i.data[4])&&c[1]===-(i.data[3]-i.data[5])){l="s"
c=c.slice(2)}else if("s"===i.instruction&&c[0]===-(i.data[0]-i.data[2])&&c[1]===-(i.data[1]-i.data[3])){l="s"
c=c.slice(2)}else if(-1==="cs".indexOf(i.instruction)&&0===c[0]&&0===c[1]){l="s"
c=c.slice(2)}}else if("q"===l)if("q"===i.instruction&&c[0]===i.data[2]-i.data[0]&&c[1]===i.data[3]-i.data[1]){l="t"
c=c.slice(2)}else if("t"===i.instruction&&c[2]===i.data[0]&&c[3]===i.data[1]){l="t"
c=c.slice(2)}if(t.removeUseless&&!jr){if("lhvqtcs".indexOf(l)>-1&&c.every((function(e){return 0===e}))){s[o]=i
return!1}if("a"===l&&0===c[5]&&0===c[6]){s[o]=i
return!1}}e.instruction=l
e.data=c
i=e}else{n[0]=a[0]
n[1]=a[1]
if("z"===i.instruction)return!1
i=e}return!0}))}(a,t)
t.utilizeAbsolute&&(a=function(e,t){let r=e[0]
return e.filter((function(e,n){if(0===n)return!0
if(!e.data){r=e
return!0}const a=e.instruction
const i=e.data
const o=i&&i.slice(0)
if("mltqsc".indexOf(a)>-1)for(let t=o.length;t--;)o[t]+=e.base[t%2]
else if("h"===a)o[0]+=e.base[0]
else if("v"===a)o[0]+=e.base[1]
else if("a"===a){o[5]+=e.base[0]
o[6]+=e.base[1]}Dr(o)
const s=Object(Be.a)(o,t)
const l=Object(Be.a)(i,t)
if(t.forceAbsolutePath||s.length<l.length&&!(t.negativeExtraSpace&&a===r.instruction&&r.instruction.charCodeAt(0)>96&&s.length===l.length-1&&(i[0]<0||/^0\./.test(i[0])&&r.data[r.data.length-1]%1))){e.instruction=a.toUpperCase()
e.data=o}r=e
return!0}))}(a,t))
gr(e,a,t)}}}
function Fr(e){const t=Gr([0,0,e[2],e[3],e[0],e[1],e[4],e[5]])
return t&&e[2]<t[0]==t[0]<0&&e[3]<t[1]==t[1]<0&&e[4]<t[0]==t[0]<e[0]&&e[5]<t[1]==t[1]<e[1]}function Gr(e){const t=e[1]-e[3]
const r=e[2]-e[0]
const n=e[0]*e[3]-e[2]*e[1]
const a=e[5]-e[7]
const i=e[6]-e[4]
const o=e[4]*e[7]-e[5]*e[6]
const s=t*i-a*r
if(!s)return
const l=[(r*o-i*n)/s,(t*o-a*n)/-s]
return!isNaN(l[0])&&!isNaN(l[1])&&isFinite(l[0])&&isFinite(l[1])?l:void 0}function Vr(e){for(let t=e.length;t-- >0;)if(e[t].toFixed(Mr)!==e[t]){const r=+e[t].toFixed(Mr-1)
e[t]=+Math.abs(r-e[t]).toFixed(Mr+1)>=Ir?+e[t].toFixed(Mr):r}return e}function Yr(e){for(let t=e.length;t-- >0;)e[t]=Math.round(e[t])
return e}function Hr(e){let t=e.length-2
const r=-e[t+1]
const n=e[t]
const a=1/(r*r+n*n)
if(t<=1||!isFinite(a))return!1
for(;(t-=2)>=0;)if(Math.sqrt(Math.pow(r*e[t]+n*e[t+1],2)*a)>Ir)return!1
return!0}function Wr(e,t){switch(e.instruction){case"s":e.instruction="c"
break
case"t":e.instruction="q"}e.data.unshift(t[t.length-2]-t[t.length-4],t[t.length-1]-t[t.length-3])
return e}function Xr(e,t){return Math.hypot(e[0]-t[0],e[1]-t[1])}function $r(e,t){const r=t*t
const n=r*t
const a=1-t
const i=a*a
return[3*i*t*e[0]+3*a*r*e[2]+n*e[4],3*i*t*e[1]+3*a*r*e[3]+n*e[5]]}function Qr(e,t){const r=Math.min(qr*Ir,Br*t.radius/100)
return[0,1/4,.5,3/4,1].every((function(n){return Math.abs(Xr($r(e,n),t.center)-t.radius)<=r}))}function Jr(e,t){return Qr(e,{center:[t.center[0]+e[4],t.center[1]+e[5]],radius:t.radius})}function Zr(e,t){const r=-t.center[0]
const n=-t.center[1]
const a=e[4]-t.center[0]
const i=e[5]-t.center[1]
return Math.acos((r*a+n*i)/Math.sqrt((r*r+n*n)*(a*a+i*i)))}function Kr(e,t){return t.reduce((function(t,r){let n=""
r.data&&(n=Object(Be.a)(Dr(r.data.slice()),e))
return t+r.instruction+n}),"")}const en="convertShapeToPath"
const tn="perItem"
const rn=!0
const nn="converts basic shapes to more compact path form"
const an={convertArcs:!1}
const on={value:0}
const sn=/[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g
const ln=function(e,t){const r=t&&t.convertArcs
if(e.isElem("rect")&&e.hasAttr("width")&&e.hasAttr("height")&&!e.hasAttr("rx")&&!e.hasAttr("ry")){const t=+(e.attr("x")||on).value
const r=+(e.attr("y")||on).value
const n=+e.attr("width").value
const a=+e.attr("height").value
if(isNaN(t-r+n-a))return
const i="M"+t+" "+r+"H"+(t+n)+"V"+(r+a)+"H"+t+"z"
e.addAttr({name:"d",value:i,prefix:"",local:"d"})
e.renameElem("path").removeAttr(["x","y","width","height"])}else if(e.isElem("line")){const t=+(e.attr("x1")||on).value
const r=+(e.attr("y1")||on).value
const n=+(e.attr("x2")||on).value
const a=+(e.attr("y2")||on).value
if(isNaN(t-r+n-a))return
e.addAttr({name:"d",value:"M"+t+" "+r+"L"+n+" "+a,prefix:"",local:"d"})
e.renameElem("path").removeAttr(["x1","y1","x2","y2"])}else if((e.isElem("polyline")||e.isElem("polygon"))&&e.hasAttr("points")){const t=(e.attr("points").value.match(sn)||[]).map(Number)
if(t.length<4)return!1
e.addAttr({name:"d",value:"M"+t.slice(0,2).join(" ")+"L"+t.slice(2).join(" ")+(e.isElem("polygon")?"z":""),prefix:"",local:"d"})
e.renameElem("path").removeAttr("points")}else if(e.isElem("circle")&&r){const t=+(e.attr("cx")||on).value
const r=+(e.attr("cy")||on).value
const n=+(e.attr("r")||on).value
if(isNaN(t-r+n))return
const a="M"+t+" "+(r-n)+"A"+n+" "+n+" 0 1 0 "+t+" "+(r+n)+"A"+n+" "+n+" 0 1 0 "+t+" "+(r-n)+"Z"
e.addAttr({name:"d",value:a,prefix:"",local:"d"})
e.renameElem("path").removeAttr(["cx","cy","r"])}else if(e.isElem("ellipse")&&r){const t=+(e.attr("cx")||on).value
const r=+(e.attr("cy")||on).value
const n=+(e.attr("rx")||on).value
const a=+(e.attr("ry")||on).value
if(isNaN(t-r+n-a))return
const i="M"+t+" "+(r-a)+"A"+n+" "+a+" 0 1 0 "+t+" "+(r+a)+"A"+n+" "+a+" 0 1 0 "+t+" "+(r-a)+"Z"
e.addAttr({name:"d",value:i,prefix:"",local:"d"})
e.renameElem("path").removeAttr(["cx","cy","rx","ry"])}}
const cn=Ee.presentation
const un="convertStyleToAttrs"
const fn="perItem"
const hn=!0
const dn="converts style to attributes"
const pn={keepImportant:!1}
const mn="\\\\(?:[0-9a-f]{1,6}\\s?|\\r\\n|.)"
const gn="\\s*("+En("[^:;\\\\]",mn)+"*?)\\s*"
const vn="'(?:[^'\\n\\r\\\\]|"+mn+")*?(?:'|$)"
const bn='"(?:[^"\\n\\r\\\\]|'+mn+')*?(?:"|$)'
const yn=new RegExp("^"+En(vn,bn)+"$")
const xn="\\("+En("[^'\"()\\\\]+",mn,vn,bn)+"*?\\)"
const kn="\\s*("+En("[^!'\"();\\\\]+?",mn,vn,bn,xn,"[^;]*?")+"*?)"
const wn=new RegExp(gn+":"+kn+"(\\s*!important(?![-(\\w]))?\\s*(?:;\\s*|$)","ig")
const Sn=new RegExp(En(mn,vn,bn,"/\\*[^]*?\\*/"),"ig")
const An=function(e,t){if(e.elem&&e.hasAttr("style")){let r=e.attr("style").value
let n=[]
const a={}
r=r.replace(Sn,(function(e){return"/"===e[0]?"":"\\"===e[0]&&/[-g-z]/i.test(e[1])?e[1]:e}))
wn.lastIndex=0
for(let e;e=wn.exec(r);)t.keepImportant&&e[3]||n.push([e[1],e[2]])
if(n.length){n=n.filter((function(e){if(e[0]){const t=e[0].toLowerCase()
let r=e[1]
yn.test(r)&&(r=r.slice(1,-1))
if(cn.indexOf(t)>-1){a[t]={name:t,value:r,local:t,prefix:""}
return!1}}return!0}))
Object.assign(e.attrs,a)
n.length?e.attr("style").value=n.map((function(e){return e.join(":")})).join(";"):e.removeAttr("style")}}}
function En(){return"(?:"+Array.prototype.join.call(arguments,"|")+")"}const Cn="convertTransform"
const Tn="perItem"
const Pn=!0
const Ln="collapses multiple transformations and optimizes it"
const On={convertToShorts:!0,floatPrecision:3,transformPrecision:5,matrixToTransform:!0,shortTranslate:!0,shortScale:!0,shortRotate:!0,removeUseless:!0,collapseIntoOne:!0,leadingZero:!0,negativeExtraSpace:!1}
let _n
let Nn
let Rn
const Dn=function(e,t){if(e.elem){e.hasAttr("transform")&&Mn(e,"transform",t)
e.hasAttr("gradientTransform")&&Mn(e,"gradientTransform",t)
e.hasAttr("patternTransform")&&Mn(e,"patternTransform",t)}}
function Mn(e,t,r){let n=Jt(e.attr(t).value);(r=function(e,t){const r=e.reduce(In,[])
let n=t.transformPrecision
t=Object.assign({},t)
if(r.length){t.transformPrecision=Math.min(t.transformPrecision,Math.max.apply(Math,r.map(qn))||t.transformPrecision)
n=Math.max.apply(Math,r.map((function(e){return String(e).replace(/\D+/g,"").length})))}"degPrecision"in t||(t.degPrecision=Math.max(0,Math.min(t.floatPrecision,n-2)))
Nn=t.floatPrecision>=1&&t.floatPrecision<20?Un.bind(this,t.floatPrecision):jn
_n=t.degPrecision>=1&&t.floatPrecision<20?Un.bind(this,t.degPrecision):jn
Rn=t.transformPrecision>=1&&t.floatPrecision<20?Un.bind(this,t.transformPrecision):jn
return t}(n,r)).collapseIntoOne&&n.length>1&&(n=[Zt(n)])
r.convertToShorts?n=function(e,t){for(let r=0;r<e.length;r++){let n=e[r]
if(t.matrixToTransform&&"matrix"===n.name){const a=er(n,t)
a!==n&&Bn(a,t).length<=Bn([n],t).length&&e.splice.apply(e,[r,1].concat(a))
n=e[r]}zn(n)
t.shortTranslate&&"translate"===n.name&&2===n.data.length&&!n.data[1]&&n.data.pop()
t.shortScale&&"scale"===n.name&&2===n.data.length&&n.data[0]===n.data[1]&&n.data.pop()
if(t.shortRotate&&e[r-2]&&"translate"===e[r-2].name&&"rotate"===e[r-1].name&&"translate"===e[r].name&&e[r-2].data[0]===-e[r].data[0]&&e[r-2].data[1]===-e[r].data[1]){e.splice(r-2,3,{name:"rotate",data:[e[r-1].data[0],e[r-2].data[0],e[r-2].data[1]]})
r-=2
n=e[r]}}return e}(n,r):n.forEach(zn)
r.removeUseless&&(n=n.filter((function(e){return!(["translate","rotate","skewX","skewY"].indexOf(e.name)>-1&&(1===e.data.length||"rotate"===e.name)&&!e.data[0]||"translate"===e.name&&!e.data[0]&&!e.data[1]||"scale"===e.name&&1===e.data[0]&&(e.data.length<2||1===e.data[1])||"matrix"===e.name&&1===e.data[0]&&1===e.data[3]&&!(e.data[1]||e.data[2]||e.data[4]||e.data[5]))})))
n.length?e.attr(t).value=Bn(n,r):e.removeAttr(t)}function In(e,t){return"matrix"===t.name?e.concat(t.data.slice(0,4)):e}function qn(e){return(e=String(e)).slice(e.indexOf(".")).length-1}function Bn(e,t){let r=""
e.forEach((function(e){zn(e)
r+=(r&&" ")+e.name+"("+Object(Be.a)(e.data,t)+")"}))
return r}function zn(e){switch(e.name){case"translate":e.data=Nn(e.data)
break
case"rotate":e.data=_n(e.data.slice(0,1)).concat(Nn(e.data.slice(1)))
break
case"skewX":case"skewY":e.data=_n(e.data)
break
case"scale":e.data=Rn(e.data)
break
case"matrix":e.data=Rn(e.data.slice(0,4)).concat(Nn(e.data.slice(4)))}return e}function jn(e){return e.map(Math.round)}function Un(e,t){for(let r=t.length,n=+Math.pow(.1,e).toFixed(e);r--;)if(t[r].toFixed(e)!==t[r]){const a=+t[r].toFixed(e-1)
t[r]=+Math.abs(a-t[r]).toFixed(e+1)>=n?+t[r].toFixed(e):a}return t}const Fn="inlineStyles"
const Gn="full"
const Vn=!0
const Yn={onlyMatchedOnce:!0,removeMatchedSelectors:!0,useMqs:["","screen"],usePseudos:[""]}
const Hn="inline styles (additional options)"
const Wn=function(e,t){const r=e.querySelectorAll("style")
if(null===r)return e
const n=[]
let a=[]
for(const t of r){if(t.isEmpty()||t.closestElem("foreignObject"))continue
const r=(i=t).content[0].text||i.content[0].cdata||[]
let o={}
try{o=ce.a.parse(r,{parseValue:!1,parseCustomProperty:!1})}catch(e){continue}n.push({styleEl:t,cssAst:o})
a=a.concat(me(o))}var i
const o=function(e,t){return e.filter((function(e){const r=ce.a.generate({type:"Selector",children:(new pe).fromArray(e.pseudos.map((function(e){return e.item.data})))})
return~t.indexOf(r)}))}(function(e,t){return e.filter((function(e){if(null===e.atrule)return~t.indexOf("")
const r=e.atrule.name
let n=r
e.atrule.expression&&"MediaQueryList"===e.atrule.expression.children.first().type&&(n=[r,ce.a.generate(e.atrule.expression)].join(" "))
return~t.indexOf(n)}))}(a,t.useMqs),t.usePseudos)
!function(e){e.forEach((function(e){e.pseudos.forEach((function(e){e.list.remove(e.item)}))}))}(o)
const s=function(e){return fe()(e,ge)}(o).reverse()
let l
let c
for(l of s){const t=ce.a.generate(l.item.data)
let r=null
try{r=e.querySelectorAll(t)}catch(e){if(e.message.includes("Unmatched selector:"))continue
throw e}null!==r&&(l.selectedEls=r)}for(l of s)if(l.selectedEls&&!(t.onlyMatchedOnce&&null!==l.selectedEls&&l.selectedEls.length>1)){for(c of l.selectedEls)null!==l.rule&&ce.a.walk(l.rule,{visit:"Declaration",enter:function(e){const t=ve(e)
null!==c.style.getPropertyValue(t.name)&&c.style.getPropertyPriority(t.name)>=t.priority||c.style.setProperty(t.name,t.value,t.priority)}})
t.removeMatchedSelectors&&null!==l.selectedEls&&l.selectedEls.length>0&&l.rule.prelude.children.remove(l.item)}if(!t.removeMatchedSelectors)return e
for(l of s)if(l.selectedEls&&!(t.onlyMatchedOnce&&null!==l.selectedEls&&l.selectedEls.length>1))for(c of l.selectedEls){const e=l.item.data.children.first()
"ClassSelector"===e.type&&c.class.remove(e.name)
void 0===c.class.item(0)&&c.removeAttr("class")
"IdSelector"===e.type&&c.removeAttr("id",e.name)}for(const e of n){ce.a.walk(e.cssAst,{visit:"Rule",enter:function(e,t,r){("Atrule"===e.type&&null!==e.block&&e.block.children.isEmpty()||"Rule"===e.type&&e.prelude.children.isEmpty())&&r.remove(t)}})
if(e.cssAst.children.isEmpty()){const t=e.styleEl.parentNode
t.spliceContent(t.content.indexOf(e.styleEl),1)
if("defs"===t.elem&&0===t.content.length){const e=t.parentNode
e.spliceContent(e.content.indexOf(t),1)}}else be(e.styleEl,ce.a.generate(e.cssAst))}return e}
const Xn="mergePaths"
const $n="perItem"
const Qn=!0
const Jn="merges multiple paths in one if possible"
const Zn={collapseRepeated:!0,force:!1,leadingZero:!0,negativeExtraSpace:!0,noSpaceAfterFlags:!0}
const Kn=function(e,t){if(!e.isElem()||e.isEmpty())return
let r=null
let n=null
e.content=e.content.filter((function(e){if(r&&r.isElem("path")&&r.isEmpty()&&r.hasAttr("d")&&e.isElem("path")&&e.isEmpty()&&e.hasAttr("d")){n||(n=Object.keys(r.attrs))
const a=Object.keys(e.attrs)
const i=n.length===a.length&&a.every((function(t){return"d"===t||r.hasAttr(t)&&r.attr(t).value===e.attr(t).value}))
const o=dr(r)
const s=dr(e)
if(i&&(t.force||!br(o,s))){gr(r,o.concat(s),t)
return!1}}r=e
n=null
return!0}))}
var ea=r(34)
const ta="minifyStyles"
const ra="full"
const na=!0
const aa="minifies styles and removes unused styles based on usage data"
const ia={usage:{force:!1,ids:!0,classes:!0,tags:!0}}
const oa=function(e,t){const r=sa(t=t||{})
const n=sa(t)
const a=function(e){return function e(t,r){for(let n=0;n<t.content.length;n++){const a=t.content[n]
a.content&&e(a,r);(a.isElem("style")&&!a.isEmpty()||a.isElem()&&a.hasAttr("style"))&&r.push(a)}return r}(e,[])}(e)
r.usage=function(e,t){let r=!0
const n={}
let a=!1
const i=function e(t,n){for(let a=0;a<t.content.length;a++){const i=t.content[a]
i.content&&e(i,n)
i.isElem("script")&&(r=!1)
if(i.isElem()){n.tags[i.elem]=!0
i.hasAttr("id")&&(n.ids[i.attr("id").value]=!0)
i.hasAttr("class")&&i.attr("class").value.replace(/^\s+|\s+$/g,"").split(/\s+/).forEach((function(e){n.classes[e]=!0}))
i.attrs&&Object.keys(i.attrs).some((function(e){return/^on/i.test(e)}))&&(r=!1)}}return n}(e,{ids:Object.create(null),classes:Object.create(null),tags:Object.create(null)})
!r&&t.usage&&t.usage.force&&(r=!0)
for(const e in i)if(la(t,e)){n[e]=Object.keys(i[e])
a=!0}return r&&a?n:null}(e,t)
n.usage=null
a.forEach((function(e){if(e.isElem("style")){const t=e.content[0].text||e.content[0].cdata||[]
const n=t.indexOf(">")>=0||t.indexOf("<")>=0?"cdata":"text"
e.content[0][n]=Object(ea.minify)(t,r).css}else{const t=e.attr("style").value
e.attr("style").value=Object(ea.minifyBlock)(t,n).css}}))
return e}
function sa(e){const t={}
for(const r in e)t[r]=e[r]
return t}function la(e,t){return"usage"in e==0||!(!e.usage||t in e.usage!=0)||Boolean(e.usage&&e.usage[t])}const ca="moveElemsAttrsToGroup"
const ua="perItemReverse"
const fa=!0
const ha="moves elements attributes to the existing group wrapper"
const da={}
const pa=function(e){if(e.isElem("g")&&!e.isEmpty()&&e.content.length>1){let t={}
let r=!1
const n=e.hasAttr("clip-path")||e.hasAttr("mask")
const a=e.content.every((function(e){if(e.isElem()&&e.hasAttr()){if(e.hasAttr("class"))return!1
if(Object.keys(t).length){t=function(e,t){const r={}
for(const n in e)Object.prototype.hasOwnProperty.call(t,n)&&Le.indexOf(n)>-1&&e[n].name===t[n].name&&e[n].value===t[n].value&&e[n].prefix===t[n].prefix&&e[n].local===t[n].local&&(r[n]=e[n])
return!!Object.keys(r).length&&r}(t,e.attrs)
if(!t)return!1}else t=e.attrs
return!0}}))
const i=e.content.every((function(e){return e.isElem(Ae)}))
a&&e.content.forEach((function(a){for(const o in t)if(!i&&!n||"transform"!==o){a.removeAttr(o)
if("transform"===o){if(!r){e.hasAttr("transform")?e.attr("transform").value+=" "+t[o].value:e.addAttr(t[o])
r=!0}}else e.addAttr(t[o])}}))}}
const ma=Ae.concat(["g","text"])
const ga="moveGroupAttrsToElems"
const va="perItem"
const ba=!0
const ya="moves some group attributes to the content elements"
const xa={}
const ka=function(e){if(e.isElem("g")&&e.hasAttr("transform")&&!e.isEmpty()&&!e.someAttr((function(e){return~Pe.indexOf(e.name)&&~e.value.indexOf("url(")}))&&e.content.every((function(e){return e.isElem(ma)&&!e.hasAttr("id")}))){e.content.forEach((function(t){const r=e.attr("transform")
t.hasAttr("transform")?t.attr("transform").value=r.value+" "+t.attr("transform").value:t.addAttr({name:r.name,local:r.local,prefix:r.prefix,value:r.value})}))
e.removeAttr("transform")}}
const wa="removeComments"
const Sa="perItem"
const Aa=!0
const Ea="removes comments"
const Ca={}
const Ta=function(e){if(e.comment&&"!"!==e.comment.charAt(0))return!1}
const Pa="removeDesc"
const La="perItem"
const Oa=!0
const _a={removeAny:!0}
const Na="removes <desc>"
const Ra=/^(Created with|Created using)/
const Da=function(e,t){return!e.isElem("desc")||!(t.removeAny||e.isEmpty()||Ra.test(e.content[0].text))}
const Ma="removeDoctype"
const Ia="perItem"
const qa=!0
const Ba="removes doctype declaration"
const za={}
const ja=function(e){if(e.doctype)return!1}
let Ua=["http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd","http://inkscape.sourceforge.net/DTD/sodipodi-0.dtd","http://www.inkscape.org/namespaces/inkscape","http://www.bohemiancoding.com/sketch/ns","http://ns.adobe.com/AdobeIllustrator/10.0/","http://ns.adobe.com/Graphs/1.0/","http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/","http://ns.adobe.com/Variables/1.0/","http://ns.adobe.com/SaveForWeb/1.0/","http://ns.adobe.com/Extensibility/1.0/","http://ns.adobe.com/Flows/1.0/","http://ns.adobe.com/ImageReplacement/1.0/","http://ns.adobe.com/GenericCustomNamespace/1.0/","http://ns.adobe.com/XPath/1.0/","http://schemas.microsoft.com/visio/2003/SVGExtensions/","http://taptrix.com/vectorillustrator/svg_extensions","http://www.figma.com/figma/ns","http://purl.org/dc/elements/1.1/","http://creativecommons.org/ns#","http://www.w3.org/1999/02/22-rdf-syntax-ns#","http://www.serif.com/","http://www.vector.evaxdesign.sk"]
const Fa="removeEditorsNSData"
const Ga="perItem"
const Va=!0
const Ya="removes editors namespaces, elements and attributes"
const Ha=[]
const Wa={additionalNamespaces:[]}
const Xa=function(e,t){Array.isArray(t.additionalNamespaces)&&(Ua=Ua.concat(t.additionalNamespaces))
if(e.elem){e.isElem("svg")&&e.eachAttr((function(t){if("xmlns"===t.prefix&&Ua.indexOf(t.value)>-1){Ha.push(t.local)
e.removeAttr(t.name)}}))
e.eachAttr((function(t){Ha.indexOf(t.prefix)>-1&&e.removeAttr(t.name)}))
if(Ha.indexOf(e.prefix)>-1)return!1}}
const $a="removeEmptyAttrs"
const Qa="perItem"
const Ja=!0
const Za="removes empty attributes"
const Ka={}
const ei=function(e){e.elem&&e.eachAttr((function(t){""===t.value&&e.removeAttr(t.name)}))}
const ti=Se.container
const ri="removeEmptyContainers"
const ni="perItemReverse"
const ai=!0
const ii="removes empty container elements"
const oi={}
const si=function(e){return!(e.isElem(ti)&&!e.isElem("svg")&&e.isEmpty()&&(!e.isElem("pattern")||!e.hasAttrLocal("href")))}
const li="removeEmptyText"
const ci="perItem"
const ui=!0
const fi="removes empty <text> elements"
const hi={text:!0,tspan:!0,tref:!0}
const di=function(e,t){return!(t.text&&e.isElem("text")&&e.isEmpty())&&!(t.tspan&&e.isElem("tspan")&&e.isEmpty())&&!(t.tref&&e.isElem("tref")&&!e.hasAttrLocal("href"))&&void 0}
const pi="removeHiddenElems"
const mi="perItem"
const gi=!0
const vi="removes hidden elements (zero sized, with absent attributes)"
const bi={isHidden:!0,displayNone:!0,opacity0:!0,circleR0:!0,ellipseRX0:!0,ellipseRY0:!0,rectWidth0:!0,rectHeight0:!0,patternWidth0:!0,patternHeight0:!0,imageWidth0:!0,imageHeight0:!0,pathEmptyD:!0,polylineEmptyPoints:!0,polygonEmptyPoints:!0}
const yi=/M\s*(?:[-+]?(?:\d*\.\d+|\d+(?:\.|(?!\.)))([eE][-+]?\d+)?(?!\d)\s*,?\s*){2}\D*\d/i
const xi=function(e,t){if(e.elem){if(t.isHidden&&e.hasAttr("visibility","hidden"))return!1
if(t.displayNone&&e.hasAttr("display","none"))return!1
if(t.opacity0&&e.hasAttr("opacity","0"))return!1
if(t.circleR0&&e.isElem("circle")&&e.isEmpty()&&e.hasAttr("r","0"))return!1
if(t.ellipseRX0&&e.isElem("ellipse")&&e.isEmpty()&&e.hasAttr("rx","0"))return!1
if(t.ellipseRY0&&e.isElem("ellipse")&&e.isEmpty()&&e.hasAttr("ry","0"))return!1
if(t.rectWidth0&&e.isElem("rect")&&e.isEmpty()&&e.hasAttr("width","0"))return!1
if(t.rectHeight0&&t.rectWidth0&&e.isElem("rect")&&e.isEmpty()&&e.hasAttr("height","0"))return!1
if(t.patternWidth0&&e.isElem("pattern")&&e.hasAttr("width","0"))return!1
if(t.patternHeight0&&e.isElem("pattern")&&e.hasAttr("height","0"))return!1
if(t.imageWidth0&&e.isElem("image")&&e.hasAttr("width","0"))return!1
if(t.imageHeight0&&e.isElem("image")&&e.hasAttr("height","0"))return!1
if(t.pathEmptyD&&e.isElem("path")&&(!e.hasAttr("d")||!yi.test(e.attr("d").value)))return!1
if(t.polylineEmptyPoints&&e.isElem("polyline")&&!e.hasAttr("points"))return!1
if(t.polygonEmptyPoints&&e.isElem("polygon")&&!e.hasAttr("points"))return!1}}
const ki="removeMetadata"
const wi="perItem"
const Si=!0
const Ai="removes <metadata>"
const Ei={}
const Ci=function(e){return!e.isElem("metadata")}
const Ti="removeNonInheritableGroupAttrs"
const Pi="perItem"
const Li=!0
const Oi="removes non-inheritable group’s presentational attributes"
const _i={}
const Ni=function(e){e.isElem("g")&&e.eachAttr((function(t){!~Ee.presentation.indexOf(t.name)||~Le.indexOf(t.name)||~Oe.indexOf(t.name)||e.removeAttr(t.name)}))}
const Ri="removeTitle"
const Di="perItem"
const Mi=!0
const Ii="removes <title>"
const qi={}
const Bi=function(e){return!e.isElem("title")}
const zi="removeUnknownsAndDefaults"
const ji="perItem"
const Ui=!0
const Fi="removes unknown elements content and attributes, removes attrs with default values"
const Gi={unknownContent:!0,unknownAttrs:!0,defaultAttrs:!0,uselessOverrides:!0,keepDataAttrs:!0,keepAriaAttrs:!0,keepRoleAttr:!1}
for(var Vi in Te){if((Vi=Te[Vi]).attrsGroups){Vi.attrs=Vi.attrs||[]
Vi.attrsGroups.forEach((function(e){Vi.attrs=Vi.attrs.concat(Ee[e])
var t=Ce[e]
if(t){Vi.defaults=Vi.defaults||{}
for(var r in t)Vi.defaults[r]=t[r]}}))}if(Vi.contentGroups){Vi.content=Vi.content||[]
Vi.contentGroups.forEach((function(e){Vi.content=Vi.content.concat(Se[e])}))}}const Yi=function(e,t){if(e.isElem()&&!e.prefix){var r=e.elem
t.unknownContent&&!e.isEmpty()&&Te[r]&&"foreignObject"!==r&&e.content.forEach((function(t,n){t.isElem()&&!t.prefix&&(Te[r].content&&-1===Te[r].content.indexOf(t.elem)||!Te[r].content&&!Te[t.elem])&&e.content.splice(n,1)}))
Te[r]&&Te[r].attrs&&e.eachAttr((function(n){"xmlns"===n.name||"xml"!==n.prefix&&n.prefix||t.keepDataAttrs&&0===n.name.indexOf("data-")||t.keepAriaAttrs&&0===n.name.indexOf("aria-")||t.keepRoleAttr&&"role"===n.name||(t.unknownAttrs&&-1===Te[r].attrs.indexOf(n.name)||t.defaultAttrs&&!e.hasAttr("id")&&Te[r].defaults&&Te[r].defaults[n.name]===n.value&&(Le.indexOf(n.name)<0||!e.parentNode.computedAttr(n.name))||t.uselessOverrides&&!e.hasAttr("id")&&Oe.indexOf(n.name)<0&&Le.indexOf(n.name)>-1&&e.parentNode.computedAttr(n.name,n.value))&&e.removeAttr(n.name)}))}}
const Hi="removeUnusedNS"
const Wi="full"
const Xi=!0
const $i="removes unused namespaces declaration"
const Qi={}
const Ji=function(e){let t
const r=[]
function n(e){const t=r.indexOf(e)
t>-1&&r.splice(t,1)}e=function e(a){let i=0
const o=a.content.length
for(;i<o;){const o=a.content[i]
if(o.isElem("svg")){o.eachAttr((function(e){"xmlns"===e.prefix&&e.local&&r.push(e.local)}))
r.length&&(t=o)}if(r.length){o.prefix&&n(o.prefix)
o.eachAttr((function(e){n(e.prefix)}))}r.length&&o.content&&e(o)
i++}return a}(e)
r.length&&r.forEach((function(e){t.removeAttr("xmlns:"+e)}))
return e}
const Zi=Se.nonRendering
const Ki="removeUselessDefs"
const eo="perItem"
const to=!0
const ro="removes elements in <defs> without id"
const no={}
const ao=function(e){if(e.isElem("defs")){e.content&&(e.content=function e(t,r){t.content.forEach((function(n){if(n.hasAttr("id")||n.isElem("style")){r.push(n)
n.parentNode=t}else n.isEmpty()||(n.content=e(n,r))}))
return r}(e,[]))
if(e.isEmpty())return!1}else if(e.isElem(Zi)&&!e.hasAttr("id"))return!1}
const io=Se.shape
const oo="removeUselessStrokeAndFill"
const so="perItem"
const lo=!0
const co="removes useless stroke and fill attributes"
const uo={stroke:!0,fill:!0,removeNone:!1,hasStyleOrScript:!1}
const fo=/^stroke/
const ho=/^fill-/
const po=["style","script"]
const mo=function(e,t){e.isElem(po)&&(t.hasStyleOrScript=!0)
if(!t.hasStyleOrScript&&e.isElem(io)&&!e.computedAttr("id")){const r=t.stroke&&e.computedAttr("stroke")
const n=t.fill&&!e.computedAttr("fill","none")
if(t.stroke&&(!r||"none"===r||e.computedAttr("stroke-opacity","0")||e.computedAttr("stroke-width","0"))){const t=e.parentNode.computedAttr("stroke")
const r=t&&"none"!==t
e.eachAttr((function(t){fo.test(t.name)&&e.removeAttr(t.name)}))
r&&e.addAttr({name:"stroke",value:"none",prefix:"",local:"stroke"})}if(t.fill&&(!n||e.computedAttr("fill-opacity","0"))){e.eachAttr((function(t){ho.test(t.name)&&e.removeAttr(t.name)}))
n&&(e.hasAttr("fill")?e.attr("fill").value="none":e.addAttr({name:"fill",value:"none",prefix:"",local:"fill"}))}if(t.removeNone&&(!r||e.hasAttr("stroke")&&"none"===e.attr("stroke").value)&&(!n||e.hasAttr("fill")&&"none"===e.attr("fill").value))return!1}}
const go="removeViewBox"
const vo="perItem"
const bo=!0
const yo="removes viewBox attribute when possible"
const xo={}
const ko=["svg","pattern","symbol"]
const wo=function(e){if(e.isElem(ko)&&e.hasAttr("viewBox")&&e.hasAttr("width")&&e.hasAttr("height")){const t=e.attr("viewBox").value.split(/[ ,]+/g)
"0"===t[0]&&"0"===t[1]&&e.attr("width").value.replace(/px$/,"")===t[2]&&e.attr("height").value.replace(/px$/,"")===t[3]&&e.removeAttr("viewBox")}}
const So="removeXMLProcInst"
const Ao="perItem"
const Eo=!0
const Co="removes XML processing instructions"
const To={}
const Po=function(e){return!(e.processinginstruction&&"xml"===e.processinginstruction.name)}
const Lo="sortDefsChildren"
const Oo="perItem"
const _o=!0
const No="Sorts children of <defs> to improve compression"
const Ro={}
const Do=function(e){if(e.isElem("defs")){if(e.content){const t=e.content.reduce((function(e,t){t.elem in e?e[t.elem]++:e[t.elem]=1
return e}),{})
e.content.sort((function(e,r){const n=t[r.elem]-t[e.elem]
if(0!==n)return n
const a=r.elem.length-e.elem.length
return 0!==a?a:e.elem!==r.elem?e.elem>r.elem?-1:1:0}))}return!0}}
const Mo=[n,a,i,o,s,l,c,u,f,h,d,p,m,g,v,b,y,x,k,w,S,A,E,C,T,P,L,O,_,N,R,D,M,I]
const Io=ze
Io.Config=(e={plugins:Mo})=>K(e)
const qo="addAttributesToSVGElement"
const Bo="full"
const zo=!1
const jo="adds attributes to an outer <svg> element"
const Uo={}
const Fo=function(e,t){if(!t||!Array.isArray(t.attributes)&&!t.attribute){console.error('Error in plugin "addAttributesToSVGElement": absent parameters.\nIt should have a list of "attributes" or one "attribute".\nConfig example:\n\nplugins:\n- addAttributesToSVGElement:\n    attribute: "mySvg"\n\nplugins:\n- addAttributesToSVGElement:\n    attributes: ["mySvg", "size-big"]\n\nplugins:\n- addAttributesToSVGElement:\n    attributes:\n        - focusable: false\n        - data-image: icon')
return e}const r=t.attributes||[t.attribute]
const n=e.content[0]
n.isElem("svg")&&r.forEach((function(e){"string"==typeof e?n.hasAttr(e)||n.addAttr({name:e,prefix:"",local:e}):"object"==typeof e&&Object.keys(e).forEach((function(t){n.hasAttr(t)||n.addAttr({name:t,value:e[t],prefix:"",local:t})}))}))
return e}
const Go="addClassesToSVGElement"
const Vo="full"
const Yo=!1
const Ho="adds classnames to an outer <svg> element"
const Wo={}
const Xo=function(e,t){if(!t||!(Array.isArray(t.classNames)&&t.classNames.some(String)||t.className)){console.error('Error in plugin "addClassesToSVGElement": absent parameters.\nIt should have a list of classes in "classNames" or one "className".\nConfig example:\n\nplugins:\n- addClassesToSVGElement:\n    className: "mySvg"\n\nplugins:\n- addClassesToSVGElement:\n    classNames: ["mySvg", "size-big"]\n')
return e}const r=t.classNames||[t.className]
const n=e.content[0]
n.isElem("svg")&&n.class.add.apply(n.class,r)
return e}
const $o="cleanupListOfValues"
const Qo="perItem"
const Jo=!1
const Zo="rounds list of values to the fixed precision"
const Ko={floatPrecision:3,leadingZero:!0,defaultPx:!0,convertToPx:!0}
const es=/^([-+]?\d*\.?\d+([eE][-+]?\d+)?)(px|pt|pc|mm|cm|m|in|ft|em|ex|%)?$/
const ts=/\s+,?\s*|,\s*/
const rs={cm:96/2.54,mm:96/25.4,in:96,pt:4/3,pc:16}
const ns=function(e,t){e.hasAttr("points")&&r(e.attrs.points)
e.hasAttr("enable-background")&&r(e.attrs["enable-background"])
e.hasAttr("viewBox")&&r(e.attrs.viewBox)
e.hasAttr("stroke-dasharray")&&r(e.attrs["stroke-dasharray"])
e.hasAttr("dx")&&r(e.attrs.dx)
e.hasAttr("dy")&&r(e.attrs.dy)
e.hasAttr("x")&&r(e.attrs.x)
e.hasAttr("y")&&r(e.attrs.y)
function r(e){let r
let n
let a
let i
const o=e.value.split(ts)
const s=[]
o.forEach((function(e){a=e.match(es)
i=e.match(/new/)
if(a){r=+(+a[1]).toFixed(t.floatPrecision)
n=a[3]||""
if(t.convertToPx&&n&&n in rs){const e=+(rs[n]*a[1]).toFixed(t.floatPrecision)
if(String(e).length<a[0].length){r=e
n="px"}}t.leadingZero&&(r=Object(Be.c)(r))
t.defaultPx&&"px"===n&&(n="")
s.push(r+n)}else i?s.push("new"):e&&s.push(e)}))
const l=s.join(" ")
e.value=l}}
const as="prefixIds"
const is="perItem"
const os=!1
const ss={delim:"__",prefixIds:!0,prefixClassNames:!0}
const ls="prefix IDs"
const cs=/^#(.*)$/
let us=null
const fs=function(e){return e&&e.value&&e.value.length>0}
const hs=function(e){const t=function(e){const t=e.match(cs)
return null!==t&&t[1]}(e)
return!!t&&"#"+us(t)}
const ds=function(e){if(!fs(e))return
const t=hs(e.value)
t&&(e.value=t)}
const ps=function(e){if(!fs(e))return
const t=function(e){const t=/url\((.*?)\)/gi.exec(e)
return null!==t&&t[1]}(e.value)
if(!t)return
const r=hs(t)
r&&(e.value="url("+r+")")}
const ms=function(e){if(!fs(e))return
const t=e.value.split("; ").map((function(e){if((e=e.trim()).endsWith(".end")||e.endsWith(".start")){const t=e.split(".")
const r=t[0]
const n=t[1]
let a=hs(`#${r}`)
if(!a)return e
a=a.slice(1)
return`${a}.${n}`}return e}))
e.value=t.join("; ")}
const gs=function(e,t,r){if(r.multipassCount&&r.multipassCount>0)return e
let n="prefix"
t.prefix?n="function"==typeof t.prefix?t.prefix(e,r):t.prefix:!1===t.prefix?n=!1:r&&r.path&&r.path.length>0&&(n=r.path.split(/[/\\]/).pop())
us=function(e){return function(e){return e.replace(/[. ]/g,"_")}(!1===n?e:n+t.delim+e)}
if("style"===e.elem){if(e.isEmpty())return e
const r=e.content[0].text||e.content[0].cdata||[]
let n={}
try{n=ce.a.parse(r,{parseValue:!0,parseCustomProperty:!1})}catch(t){console.warn("Warning: Parse error of styles of <style/> element, skipped. Error details: "+t)
return e}let a=""
ce.a.walk(n,(function(e){if((t.prefixIds&&"IdSelector"===e.type||t.prefixClassNames&&"ClassSelector"===e.type)&&e.name)e.name=us(e.name)
else if("Url"===e.type&&e.value.value&&e.value.value.length>0){a=hs(((e="")=>{const{length:t}=e
if(0!==t){const r=e.charCodeAt(0)
const n=e.charCodeAt(t-1)
const a=39===r||34===r
const i=39===n||34===n
e=e.slice(a?1:0,i?t-1:t)}return e})(e.value.value))
if(!a)return
e.value.value=a}}))
e.content[0].text=ce.a.generate(n)
return e}if(!e.attrs)return e
t.prefixIds&&(a=e.attrs.id,fs(a)&&(a.value=us(a.value)))
var a
t.prefixClassNames&&function(e){fs(e)&&(e.value=e.value.split(/\s+/).map(us).join(" "))}(e.attrs.class)
ds(e.attrs.href)
ds(e.attrs["xlink:href"])
for(const t of Pe)ps(e.attrs[t])
ms(e.attrs.begin)
ms(e.attrs.end)
return e}
const vs="removeAttributesBySelector"
const bs="perItem"
const ys=!1
const xs="removes attributes of elements that match a css selector"
const ks={}
const ws=function(e,t){(Array.isArray(t.selectors)?t.selectors:[t]).map((function(t){e.matches(t.selector)&&e.removeAttr(t.attributes)}))}
const Ss="removeAttrs"
const As="perItem"
const Es=!1
const Cs="removes specified attributes"
const Ts={elemSeparator:":",preserveCurrentColor:!1,attrs:[]}
const Ps=function(e,t){Array.isArray(t.attrs)||(t.attrs=[t.attrs])
if(e.isElem()){const r="string"==typeof t.elemSeparator?t.elemSeparator:":"
const n="boolean"==typeof t.preserveCurrentColor&&t.preserveCurrentColor
t.attrs.map((function(e){-1===e.indexOf(r)?e=[".*",r,e,r,".*"].join(""):e.split(r).length<3&&(e=[e,r,".*"].join(""))
return e.split(r).map((function(e){"*"===e&&(e=".*")
return new RegExp(["^",e,"$"].join(""),"i")}))})).forEach((function(t){t[0].test(e.elem)&&e.eachAttr((function(r){const a=r.name
const i=r.value
n&&"fill"===a&&"currentColor"===i||n&&"stroke"===a&&"currentColor"===i||t[1].test(a)&&t[2].test(r.value)&&e.removeAttr(a)}))}))}}
const Ls="removeDimensions"
const Os="perItem"
const _s=!1
const Ns="removes width and height in presence of viewBox (opposite to removeViewBox, disable it first)"
const Rs={}
const Ds=function(e){if(e.isElem("svg"))if(e.hasAttr("viewBox")){e.removeAttr("width")
e.removeAttr("height")}else if(e.hasAttr("width")&&e.hasAttr("height")&&!isNaN(Number(e.attr("width").value))&&!isNaN(Number(e.attr("height").value))){e.addAttr({name:"viewBox",value:"0 0 "+Number(e.attr("width").value)+" "+Number(e.attr("height").value),prefix:"",local:"viewBox"})
e.removeAttr("width")
e.removeAttr("height")}}
const Ms="removeElementsByAttr"
const Is="perItem"
const qs=!1
const Bs="removes arbitrary elements by ID or className (disabled by default)"
const zs={id:[],class:[]}
const js=function(e,t){["id","class"].forEach((function(e){Array.isArray(t[e])||(t[e]=[t[e]])}))
if(!e.isElem())return
const r=e.attr("id")
if(r)return-1===t.id.indexOf(r.value)
const n=e.attr("class")
return n?!new RegExp(t.class.join("|")).test(n.value):void 0}
const Us="removeOffCanvasPaths"
const Fs="perItem"
const Gs=!1
const Vs="removes elements that are drawn outside of the viewbox (disabled by default)"
const Ys={}
let Hs
let Ws
const Xs=function(e){if(e.isElem("path")&&e.hasAttr("d")&&void 0!==Hs){if(function e(t){return t.hasAttr("transform")||t.parentNode&&e(t.parentNode)}(e)||function(e){const t=/M\s*(-?\d*\.?\d+)(?!\d)\s*(-?\d*\.?\d+)/g
let r
for(;null!==(r=t.exec(e));)if(r[1]>=Hs.left&&r[1]<=Hs.right&&r[2]>=Hs.top&&r[2]<=Hs.bottom)return!0
return!1}(e.attr("d").value))return!0
let t=dr(e)
if(2===t.length){t=JSON.parse(JSON.stringify(t))
t.push({instruction:"z"})}return br(Ws,t)}e.isElem("svg")&&function(e){let t=""
e.hasAttr("viewBox")?t=e.attr("viewBox").value:e.hasAttr("height")&&e.hasAttr("width")&&(t="0 0 "+e.attr("width").value+" "+e.attr("height").value)
t=t.replace(/[,+]|px/g," ").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")
const r=/^(-?\d*\.?\d+) (-?\d*\.?\d+) (\d*\.?\d+) (\d*\.?\d+)$/.exec(t)
if(!r)return
Hs={left:parseFloat(r[1]),top:parseFloat(r[2]),right:parseFloat(r[1])+parseFloat(r[3]),bottom:parseFloat(r[2])+parseFloat(r[4])}
const n=new oe({elem:"path",prefix:"",local:"path"})
n.addAttr({name:"d",prefix:"",local:"d",value:"M"+r[1]+" "+r[2]+"h"+r[3]+"v"+r[4]+"H"+r[1]+"z"})
Ws=dr(n)}(e)
return!0}
const $s="removeRasterImages"
const Qs="perItem"
const Js=!1
const Zs="removes raster images (disabled by default)"
const Ks={}
const el=function(e){if(e.isElem("image")&&e.hasAttrLocal("href",/(\.|image\/)(jpg|png|gif)/))return!1}
const tl="removeScriptElement"
const rl="perItem"
const nl=!1
const al="removes <script> elements (disabled by default)"
const il={}
const ol=function(e){return!e.isElem("script")}
const sl="removeStyleElement"
const ll="perItem"
const cl=!1
const ul="removes <style> element (disabled by default)"
const fl={}
const hl=function(e){return!e.isElem("style")}
const dl="removeXMLNS"
const pl="perItem"
const ml=!1
const gl="removes xmlns attribute (for inline svg, disabled by default)"
const vl={}
const bl=function(e){e.isElem("svg")&&e.hasAttr("xmlns")&&e.removeAttr("xmlns")}

;/**
 * @license
 * The MIT License
 *
 * Copyright © 2012–2016 Kir Belevich
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 * Лицензия MIT
 *
 * Copyright © 2012–2016 Кир Белевич
 *
 * Данная лицензия разрешает лицам, получившим копию
 * данного
 * программного обеспечения и сопутствующей
 * документации
 * (в дальнейшем именуемыми «Программное Обеспечение»),
 * безвозмездно
 * использовать Программное Обеспечение без
 * ограничений, включая
 * неограниченное право на использование, копирование,
 * изменение,
 * добавление, публикацию, распространение,
 * сублицензирование
 * и/или продажу копий Программного Обеспечения, также
 * как и лицам,
 * которым предоставляется данное Программное
 * Обеспечение,
 * при соблюдении следующих условий:
 *
 * Указанное выше уведомление об авторском праве и
 * данные условия
 * должны быть включены во все копии или значимые части
 * данного
 * Программного Обеспечения.
 *
 * ДАННОЕ ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЯЕТСЯ «КАК
 * ЕСТЬ»,
 * БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ, ЯВНО ВЫРАЖЕННЫХ ИЛИ
 * ПОДРАЗУМЕВАЕМЫХ,
 * ВКЛЮЧАЯ, НО НЕ ОГРАНИЧИВАЯСЬ ГАРАНТИЯМИ ТОВАРНОЙ
 * ПРИГОДНОСТИ,
 * СООТВЕТСТВИЯ ПО ЕГО КОНКРЕТНОМУ НАЗНАЧЕНИЮ И
 * ОТСУТСТВИЯ НАРУШЕНИЙ
 * ПРАВ. НИ В КАКОМ СЛУЧАЕ АВТОРЫ ИЛИ ПРАВООБЛАДАТЕЛИ НЕ
 * НЕСУТ
 * ОТВЕТСТВЕННОСТИ ПО ИСКАМ О ВОЗМЕЩЕНИИ УЩЕРБА, УБЫТКОВ
 * ИЛИ ДРУГИХ
 * ТРЕБОВАНИЙ ПО ДЕЙСТВУЮЩИМ КОНТРАКТАМ, ДЕЛИКТАМ ИЛИ
 * ИНОМУ,
 * ВОЗНИКШИМ ИЗ, ИМЕЮЩИМ ПРИЧИНОЙ ИЛИ СВЯЗАННЫМ С
 * ПРОГРАММНЫМ
 * ОБЕСПЕЧЕНИЕМ ИЛИ ИСПОЛЬЗОВАНИЕМ ПРОГРАММНОГО
 * ОБЕСПЕЧЕНИЯ
 * ИЛИ ИНЫМИ ДЕЙСТВИЯМИ С ПРОГРАММНЫМ ОБЕСПЕЧЕНИЕМ.
 */const yl="reusePaths"
const xl="full"
const kl=!1
const wl="Finds <path> elements with the same d, fill, and stroke, and converts them to <use> elements referencing a single <path> def."
const Sl={}
const Al=function(e){const t=new Map
let r=0
const n=[]
!function e(t,r){if(!t.isEmpty())for(const n of t.content){r(n)
e(n,r)}}(e,e=>{if(!e.isElem("path")||!e.hasAttr("d"))return
const a=e.attr("d").value
const i=e.hasAttr("fill")&&e.attr("fill").value||""
const o=a+";s:"+(e.hasAttr("stroke")&&e.attr("stroke").value||"")+";f:"+i
const s=t.get(o)
if(s){if(!s.reused){s.reused=!0
s.elem.hasAttr("id")||s.elem.addAttr({name:"id",local:"id",prefix:"",value:"reuse-"+r++})
n.push(s.elem)}e=El(e,s.elem.attr("id").value)}else t.set(o,{elem:e,reused:!1})})
const a=new oe({elem:"defs",prefix:"",local:"defs",content:[],attrs:[]},e)
e.content[0].spliceContent(0,0,a)
for(let e of n){const t=e.style
const r=e.class
delete e.style
delete e.class
const n=e.clone()
e.style=t
e.class=r
n.removeAttr("transform")
a.spliceContent(0,0,n)
e=El(e,n.attr("id").value)
e.removeAttr("id")}return e}
function El(e,t){e.renameElem("use")
e.removeAttr("d")
e.removeAttr("stroke")
e.removeAttr("fill")
e.addAttr({name:"xlink:href",local:"xlink:href",prefix:"none",value:"#"+t})
delete e.pathJS
return e}const Cl="sortAttrs"
const Tl="perItem"
const Pl=!1
const Ll="sorts element attributes (disabled by default)"
const Ol={order:["id","width","height","x","x1","x2","y","y1","y2","cx","cy","r","fill","stroke","marker","d","points"]}
const _l=function(e,t){const r=[]
const n={}
const a=t.order.length+1
const i=t.xmlnsOrder||"front"
if(e.elem){e.eachAttr((function(e){r.push(e)}))
r.sort((function(e,r){if(e.prefix!==r.prefix){if("front"===i){if("xmlns"===e.prefix)return-1
if("xmlns"===r.prefix)return 1}return e.prefix<r.prefix?-1:1}let n=a
let o=a
for(let a=0;a<t.order.length;a++){e.name===t.order[a]?n=a:0===e.name.indexOf(t.order[a]+"-")&&(n=a+.5)
r.name===t.order[a]?o=a:0===r.name.indexOf(t.order[a]+"-")&&(o=a+.5)}return n!==o?n-o:e.name<r.name?-1:1}))
r.forEach((function(e){n[e.name]=e}))
e.attrs=n}}
t.default=Object.assign(Io,{SVGO_LITE:ze,CONFIG_LITE:K,PLUGINS_DEFAULT_LIST:Mo,PLUGINS_MAP:Z})}]).default},"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SVGO=t():e.SVGO=t()
var e,t
