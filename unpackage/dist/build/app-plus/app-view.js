var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190703_syb_scopedata*/window.__wcc_version__='v0.5vv_20190703_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'text']])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-badge data-v-6e798548']],[[2,'?:'],[[7],[3,'inverted']],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'uni-badge--'],[[7],[3,'type']]],[1,' uni-badge--']],[[7],[3,'size']]],[1,' uni-badge--']],[[7],[3,'type']]],[1,'-inverted']],[[2,'+'],[[2,'+'],[[2,'+'],[1,'uni-badge--'],[[7],[3,'type']]],[1,' uni-badge--']],[[7],[3,'size']]]]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'onClick']]]]]]]]])
Z([[7],[3,'width']])
Z([a,[[7],[3,'text']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'uni-icons data-v-5f4d46d9'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'_onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']],[[2,'+'],[[2,'+'],[1,'font-size:'],[[2,'+'],[[7],[3,'size']],[1,'px']]],[1,';']]])
Z([a,[[6],[[7],[3,'icons']],[[7],[3,'type']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-list-item data-v-c097ecf0']],[[2,'?:'],[[7],[3,'disabled']],[1,'uni-list-item--disabled'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClick']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'?:'],[[2,'||'],[[7],[3,'disabled']],[[7],[3,'showSwitch']]],[1,''],[1,'uni-list-item--hover']])
Z([[4],[[5],[[5],[1,'uni-list-item__container data-v-c097ecf0']],[[2,'?:'],[[7],[3,'isFirstChild']],[1,'uni-list-item--first'],[1,'']]]])
Z([[7],[3,'thumb']])
Z([3,'uni-list-item__icon data-v-c097ecf0'])
Z([3,'uni-list-item__icon-img data-v-c097ecf0'])
Z(z[5])
Z([[7],[3,'showExtraIcon']])
Z(z[6])
Z([3,'__l'])
Z([3,'uni-icon-wrapper data-v-c097ecf0'])
Z([[6],[[7],[3,'extraIcon']],[3,'color']])
Z([[6],[[7],[3,'extraIcon']],[3,'size']])
Z([[6],[[7],[3,'extraIcon']],[3,'type']])
Z([3,'1'])
Z([3,'uni-list-item__content data-v-c097ecf0'])
Z([3,'uni-list-item__content-title data-v-c097ecf0'])
Z([a,[[7],[3,'title']]])
Z([[7],[3,'note']])
Z([3,'uni-list-item__content-note data-v-c097ecf0'])
Z([a,[[7],[3,'note']]])
Z([[2,'||'],[[2,'||'],[[7],[3,'showBadge']],[[7],[3,'showArrow']]],[[7],[3,'showSwitch']]])
Z([3,'uni-list-item__extra data-v-c097ecf0'])
Z([[7],[3,'showBadge']])
Z(z[11])
Z([3,'data-v-c097ecf0'])
Z([[7],[3,'badgeText']])
Z([[7],[3,'badgeType']])
Z([3,'2'])
Z([[7],[3,'showSwitch']])
Z(z[0])
Z([[7],[3,'switchChecked']])
Z(z[27])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'onSwitchChange']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'disabled']])
Z([[7],[3,'showArrow']])
Z(z[11])
Z(z[12])
Z([3,'#bbb'])
Z([1,20])
Z([3,'arrowright'])
Z([3,'3'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-list data-v-9e78ad06'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-detail-wraper'])
Z([[2,'==='],[[7],[3,'entrance']],[1,'share']])
Z([3,'toHome'])
Z([3,'switchTab'])
Z([3,'../explore/index'])
Z([3,'book-detail clearfix'])
Z([[6],[[7],[3,'bookDetail']],[3,'allowMonthly']])
Z([3,'vipBg'])
Z([3,'cover'])
Z([[2,'+'],[[6],[[7],[3,'url']],[3,'cdn']],[[6],[[7],[3,'bookDetail']],[3,'cover']]])
Z([3,'desc'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'bookDetail']],[3,'title']]])
Z([[2,'&&'],[[2,'&&'],[[2,'!'],[[6],[[7],[3,'bookDetail']],[3,'allowMonthly']]],[[6],[[7],[3,'bookDetail']],[3,'rating']]],[[6],[[6],[[7],[3,'bookDetail']],[3,'rating']],[3,'isEffect']]])
Z([3,'rating'])
Z([3,'score'])
Z([a,[[6],[[6],[[7],[3,'bookDetail']],[3,'rating']],[3,'score']]])
Z([[4],[[5],[[2,'?:'],[[2,'>='],[[6],[[6],[[7],[3,'bookDetail']],[3,'rating']],[3,'score']],[1,1]],[1,'star'],[1,'star-o']]]])
Z([[4],[[5],[[2,'?:'],[[2,'>='],[[6],[[6],[[7],[3,'bookDetail']],[3,'rating']],[3,'score']],[1,3]],[1,'star'],[1,'star-o']]]])
Z([[4],[[5],[[2,'?:'],[[2,'>='],[[6],[[6],[[7],[3,'bookDetail']],[3,'rating']],[3,'score']],[1,5]],[1,'star'],[1,'star-o']]]])
Z([[4],[[5],[[2,'?:'],[[2,'>='],[[6],[[6],[[7],[3,'bookDetail']],[3,'rating']],[3,'score']],[1,7]],[1,'star'],[1,'star-o']]]])
Z([[4],[[5],[[2,'?:'],[[2,'>='],[[6],[[6],[[7],[3,'bookDetail']],[3,'rating']],[3,'score']],[1,9]],[1,'star'],[1,'star-o']]]])
Z([3,'line'])
Z([3,'|'])
Z([a,[[2,'+'],[[6],[[6],[[7],[3,'bookDetail']],[3,'rating']],[3,'count']],[1,'人评']]])
Z([3,'sku'])
Z([3,'author'])
Z([a,[[6],[[7],[3,'bookDetail']],[3,'author']]])
Z(z[22])
Z(z[23])
Z([a,[[6],[[7],[3,'bookDetail']],[3,'majorCate']]])
Z(z[25])
Z([a,[[2,'+'],[[2,'?:'],[[2,'>='],[[6],[[7],[3,'bookDetail']],[3,'wordCount']],[1,10000]],[[2,'+'],[[2,'/'],[[6],[[7],[3,'bookDetail']],[3,'wordCount']],[1,10000]],[1,'万']],[[6],[[7],[3,'bookDetail']],[3,'wordCount']]],[1,'字']]])
Z(z[22])
Z(z[23])
Z([3,'update'])
Z([a,[[2,'?:'],[[2,'!'],[[6],[[7],[3,'bookDetail']],[3,'isSerial']]],[1,'完结'],[[6],[[7],[3,'bookDetail']],[3,'updated']]]])
Z([[2,'&&'],[[2,'!'],[[6],[[7],[3,'bookPrice']],[3,'originalPrice']]],[[2,'!'],[[6],[[7],[3,'bookDetail']],[3,'allowMonthly']]]])
Z([3,'allowMonthly'])
Z([3,'免费'])
Z(z[6])
Z([3,'toPayMonthly'])
Z([[4],[[5],[[2,'?:'],[[2,'!'],[[6],[[7],[3,'monthlyInfo']],[3,'isMonthly']]],[1,'needMonthly'],[1,'isvip']]]])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[2,'?:'],[[2,'!'],[[6],[[7],[3,'monthlyInfo']],[3,'isMonthly']]],[[2,'?:'],[[7],[3,'isIos']],[1,''],[1,'开通VIP用户，免费阅读此书']],[1,'你已开通VIP 免费阅读此书']]],[1,'']]])
Z([3,'reader-data'])
Z([3,'item'])
Z([a,[[2,'?:'],[[6],[[7],[3,'bookDetail']],[3,'latelyFollower']],[[6],[[7],[3,'bookDetail']],[3,'latelyFollower']],[[2,'+'],[[2,'/'],[[6],[[7],[3,'bookDetail']],[3,'latelyFollower']],[1,10000]],[1,'万']]]])
Z([3,'key'])
Z([3,'追书人气'])
Z(z[45])
Z([a,[[2,'?:'],[[6],[[7],[3,'bookDetail']],[3,'retentionRatio']],[[2,'+'],[[6],[[7],[3,'bookDetail']],[3,'retentionRatio']],[1,'%']],[1,'暂无统计']]])
Z(z[47])
Z([3,'读者留存'])
Z(z[45])
Z([a,[[6],[[7],[3,'bookDetail']],[3,'serializeWordCount']]])
Z(z[47])
Z([3,'日更字数'])
Z([3,'showIntro'])
Z([3,'introduction'])
Z(z[11])
Z([3,'简介'])
Z([[4],[[5],[[2,'?:'],[[2,'!'],[[7],[3,'showAllIntro']]],[1,'arrow'],[1,'arrow up']]]])
Z([[4],[[5],[[2,'?:'],[[7],[3,'showAllIntro']],[1,'active'],[1,'']]]])
Z([a,[[6],[[7],[3,'bookDetail']],[3,'longIntro']]])
Z([[2,'>'],[[6],[[7],[3,'bestComment']],[3,'length']],[1,0]])
Z([3,'hot-comment'])
Z([3,'hot-comment-top'])
Z([3,'热门书评'])
Z(z[64])
Z([3,'c-comment-list'])
Z([3,'index'])
Z(z[45])
Z([[7],[3,'bestComment']])
Z(z[70])
Z([3,'li'])
Z(z[11])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'content'])
Z([a,[[6],[[7],[3,'item']],[3,'content']]])
Z([3,'inner'])
Z([3,'left'])
Z([3,'avater'])
Z([[2,'+'],[[6],[[7],[3,'url']],[3,'cdn']],[[6],[[6],[[7],[3,'item']],[3,'author']],[3,'avatar']]])
Z(z[26])
Z([3,'name'])
Z([a,[[6],[[6],[[7],[3,'item']],[3,'author']],[3,'nickname']]])
Z([3,'updated'])
Z([a,[[6],[[7],[3,'item']],[3,'updated']]])
Z([3,'right'])
Z(z[15])
Z([[4],[[5],[[2,'?:'],[[2,'>='],[[6],[[7],[3,'item']],[3,'rating']],[1,1]],[1,'star'],[1,'star-o']]]])
Z([[4],[[5],[[2,'?:'],[[2,'>='],[[6],[[7],[3,'item']],[3,'rating']],[1,2]],[1,'star'],[1,'star-o']]]])
Z([[4],[[5],[[2,'?:'],[[2,'>='],[[6],[[7],[3,'item']],[3,'rating']],[1,3]],[1,'star'],[1,'star-o']]]])
Z([[4],[[5],[[2,'?:'],[[2,'>='],[[6],[[7],[3,'item']],[3,'rating']],[1,4]],[1,'star'],[1,'star-o']]]])
Z([[4],[[5],[[2,'?:'],[[2,'>='],[[6],[[7],[3,'item']],[3,'rating']],[1,5]],[1,'star'],[1,'star-o']]]])
Z([3,'likeCount'])
Z([a,[[2,'+'],[[6],[[7],[3,'item']],[3,'likeCount']],[1,'人觉得有用']]])
Z([[2,'==='],[[6],[[7],[3,'bestComment']],[3,'length']],[1,0]])
Z([3,'c-comment-list-none'])
Z([3,'暂无评论~'])
Z([3,'c-book-recommend-section mb20'])
Z(z[11])
Z([3,'猜你喜欢'])
Z([[6],[[7],[3,'bookRecommend']],[3,'secondTitle']])
Z([3,'sub-title'])
Z([a,[[6],[[7],[3,'bookRecommend']],[3,'secondTitle']]])
Z([[4],[[5],[[5],[1,'more']],[[2,'?:'],[[2,'!'],[[6],[[7],[3,'bookRecommend']],[3,'secondTitle']]],[1,'null-sub-title'],[1,'']]]])
Z([[2,'+'],[1,'../results/index?type\x3dbook\x26id\x3d'],[[7],[3,'bookId']]])
Z([3,'查看更多'])
Z([3,'arrow'])
Z([3,'content c-book-imageRecommended-3x'])
Z(z[70])
Z(z[45])
Z([[6],[[7],[3,'bookRecommend']],[3,'books']])
Z(z[70])
Z([[2,'<'],[[7],[3,'index']],[1,6]])
Z([3,'other-navigator-hover'])
Z([3,'redirect'])
Z([[2,'+'],[1,'bookDetail?id\x3d'],[[6],[[7],[3,'item']],[3,'_id']]])
Z([[4],[[5],[[2,'?:'],[[2,'!=='],[[6],[[7],[3,'bookRecommend']],[3,'sellType']],[1,'无']],[1,'cover'],[1,'cover']]]])
Z([[2,'+'],[[2,'+'],[[6],[[7],[3,'url']],[3,'cdn']],[[6],[[7],[3,'item']],[3,'cover']]],[1,'?imageMogr2/thumbnail/190x270']])
Z([[2,'&&'],[[2,'!'],[[7],[3,'isIos']]],[[6],[[7],[3,'item']],[3,'allowMonthly']]])
Z([3,'is-vip'])
Z([3,'book-name'])
Z([a,z[76][1]])
Z(z[26])
Z([a,[[6],[[7],[3,'item']],[3,'author']]])
Z([[6],[[7],[3,'bookDetail']],[3,'copyright']])
Z([3,'book-copyright'])
Z([3,'图书信息'])
Z(z[10])
Z([a,[[6],[[7],[3,'bookDetail']],[3,'copyright']]])
Z([3,'read-link'])
Z([[7],[3,'copyright']])
Z([3,'button'])
Z([3,'width:90%;background:#999;color:#fff;border:none;'])
Z([3,'应版权方要求 本书暂时下架'])
Z([3,'toggleSubtract'])
Z([[4],[[5],[[2,'?:'],[[2,'!'],[[7],[3,'inBookshelf']]],[1,'button'],[1,'button subtract']]]])
Z([a,[[2,'?:'],[[7],[3,'inBookshelf']],[1,'移出书架'],[1,'加入书架']]])
Z(z[134])
Z([3,'margin:0px 0px 0px 5%;'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'../reader/index?id\x3d'],[[7],[3,'bookId']]],[1,'\x26index\x3d1\x26bookName\x3d']],[[6],[[7],[3,'bookDetail']],[3,'title']]])
Z([3,'开始阅读'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-category-wraper'])
Z([3,'right-content'])
Z([[7],[3,'scrollTop']])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'scrollHeight']],[1,'px']]],[1,';']])
Z([3,'cetegory-section'])
Z([3,'male'])
Z([3,'title'])
Z([3,'_i'])
Z([3,'男生'])
Z([3,'inner'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'category']],[3,'male']])
Z(z[10])
Z([3,'category-item'])
Z([3,'hover-category'])
Z([[2,'+'],[1,'./categoryDetail?gender\x3dmale\x26major\x3d'],[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'name'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([3,'count'])
Z([a,[[2,'+'],[[6],[[7],[3,'item']],[3,'bookCount']],[1,' 本']]])
Z([3,'covers'])
Z([[2,'+'],[[2,'+'],[[7],[3,'cdn']],[[6],[[6],[[7],[3,'item']],[3,'bookCover']],[1,0]]],[1,'?imageMogr2/thumbnail/148x204']])
Z([[2,'+'],[[2,'+'],[[7],[3,'cdn']],[[6],[[6],[[7],[3,'item']],[3,'bookCover']],[1,1]]],[1,'?imageMogr2/thumbnail/148x204']])
Z([[2,'+'],[[2,'+'],[[7],[3,'cdn']],[[6],[[6],[[7],[3,'item']],[3,'bookCover']],[1,2]]],[1,'?imageMogr2/thumbnail/148x204']])
Z(z[4])
Z([3,'female'])
Z(z[6])
Z(z[7])
Z([3,'女生'])
Z(z[9])
Z(z[10])
Z(z[11])
Z([[6],[[7],[3,'category']],[3,'female']])
Z(z[10])
Z(z[14])
Z(z[15])
Z([[2,'+'],[1,'.categoryDetail/index?gender\x3dmale\x26major\x3d'],[[6],[[7],[3,'item']],[3,'name']]])
Z(z[17])
Z([a,z[18][1]])
Z(z[19])
Z([a,z[20][1]])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[24])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[7],[3,'booksData']])
Z([3,'page-explore-wrapper'])
Z([[2,'!=='],[[6],[[7],[3,'banner']],[3,'length']],[1,0]])
Z([3,'true'])
Z(z[4])
Z([3,'explore-banner'])
Z([3,'1000'])
Z([3,'3000'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'banner']])
Z(z[9])
Z([3,'explore-banner-item'])
Z([[2,'+'],[1,'../bookDetail/bookDetail?id\x3d'],[[6],[[7],[3,'item']],[3,'link']]])
Z([3,'banner-img'])
Z([[6],[[7],[3,'item']],[3,'img']])
Z([3,'explore-entrance'])
Z([3,'navigator-hover'])
Z([3,'../ranking/ranking'])
Z([3,'entrance-img nav-3'])
Z([3,'排行榜'])
Z(z[18])
Z([3,'../vip/index'])
Z([3,'entrance-img nav-1'])
Z([3,'VIP'])
Z(z[18])
Z([3,'../category/category'])
Z([3,'entrance-img nav-2'])
Z([3,'分类'])
Z(z[9])
Z(z[10])
Z(z[1])
Z(z[9])
Z([3,'explore-recommended'])
Z([[2,'==='],[[6],[[6],[[7],[3,'booksData']],[[7],[3,'index']]],[3,'bookType']],[1,'3列表']])
Z([3,'__l'])
Z([[6],[[7],[3,'booksData']],[[7],[3,'index']]])
Z([[2,'+'],[1,'1-'],[[7],[3,'index']]])
Z([[2,'==='],[[6],[[6],[[7],[3,'booksData']],[[7],[3,'index']]],[3,'bookType']],[1,'全文推']])
Z(z[36])
Z(z[37])
Z([[2,'+'],[1,'2-'],[[7],[3,'index']]])
Z([[2,'==='],[[6],[[6],[[7],[3,'booksData']],[[7],[3,'index']]],[3,'bookType']],[1,'封文推1']])
Z(z[36])
Z(z[37])
Z([[2,'+'],[1,'3-'],[[7],[3,'index']]])
Z(z[36])
Z(z[37])
Z([[2,'+'],[1,'4-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'c-book-recommend-section mb20'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'books']],[3,'title']]])
Z([[6],[[7],[3,'books']],[3,'secondTitle']])
Z([3,'sub-title'])
Z([a,[[6],[[7],[3,'books']],[3,'secondTitle']]])
Z([[4],[[5],[[5],[1,'more']],[[2,'?:'],[[2,'!'],[[6],[[7],[3,'books']],[3,'secondTitle']]],[1,'null-sub-title'],[1,'']]]])
Z([[2,'+'],[1,'../results/index?type\x3drecommend\x26id\x3d'],[[6],[[7],[3,'data']],[3,'_id']]])
Z([3,'查看更多'])
Z([3,'arrow'])
Z([3,'content c-book-coverTextRecommended'])
Z([3,'c-book-fullTextRecommended'])
Z([3,'clearfix'])
Z([[2,'+'],[1,'../bookDetail/bookDetail?id\x3d'],[[6],[[6],[[6],[[7],[3,'books']],[3,'books']],[1,0]],[3,'_id']]])
Z([3,'cover'])
Z([[2,'+'],[[6],[[6],[[6],[[7],[3,'books']],[3,'books']],[1,0]],[3,'cover']],[1,'?imageMogr2/thumbnail/100x140']])
Z([3,'right'])
Z([3,'name'])
Z([a,[[6],[[6],[[6],[[7],[3,'books']],[3,'books']],[1,0]],[3,'title']]])
Z([3,'desc'])
Z([a,[[6],[[6],[[6],[[7],[3,'books']],[3,'books']],[1,0]],[3,'shortIntro']]])
Z([3,'sku'])
Z([3,'author'])
Z([3,'person-icon'])
Z([a,[[6],[[6],[[6],[[7],[3,'books']],[3,'books']],[1,0]],[3,'author']]])
Z([3,'popularity'])
Z([3,'c-red'])
Z([a,[[2,'+'],[[2,'+'],[1,''],[[2,'?:'],[[2,'>='],[[6],[[6],[[6],[[7],[3,'books']],[3,'books']],[1,0]],[3,'latelyFollower']],[1,10000]],[[2,'+'],[[2,'/'],[[6],[[6],[[6],[[7],[3,'books']],[3,'books']],[1,0]],[3,'latelyFollower']],[1,10000]],[1,'万人气']],[[2,'+'],[[6],[[6],[[6],[[7],[3,'books']],[3,'books']],[1,0]],[3,'latelyFollower']],[1,'人气']]]],[1,'']]])
Z([3,'tag'])
Z([a,[[6],[[6],[[6],[[7],[3,'books']],[3,'books']],[1,0]],[3,'majorCate']]])
Z([a,[[2,'?:'],[[6],[[6],[[6],[[7],[3,'books']],[3,'books']],[1,0]],[3,'isSerial']],[1,'连载'],[1,'完结']]])
Z([[2,'*'],[[6],[[6],[[6],[[6],[[7],[3,'books']],[3,'books']],[1,0]],[3,'rating']],[3,'score']],[1,1]])
Z([a,[[2,'+'],[[2,'*'],[[6],[[6],[[6],[[6],[[7],[3,'books']],[3,'books']],[1,0]],[3,'rating']],[3,'score']],[1,1]],[1,'分']]])
Z([3,'sub-list'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'books']],[3,'books']])
Z(z[34])
Z([[2,'&&'],[[2,'>'],[[7],[3,'index']],[1,0]],[[2,'<'],[[7],[3,'index']],[1,4]]])
Z([[2,'+'],[1,'../bookDetail/bookDetail?id\x3d'],[[6],[[6],[[6],[[7],[3,'books']],[3,'books']],[[7],[3,'index']]],[3,'_id']]])
Z([3,'inner'])
Z(z[1])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z(z[21])
Z(z[22])
Z(z[23])
Z([a,[[6],[[7],[3,'item']],[3,'author']]])
Z(z[25])
Z(z[26])
Z([a,[[2,'?:'],[[2,'>='],[[6],[[7],[3,'item']],[3,'latelyFollower']],[1,10000]],[[2,'+'],[[2,'/'],[[6],[[7],[3,'item']],[3,'latelyFollower']],[1,10000]],[1,'万人气']],[[2,'+'],[[6],[[7],[3,'item']],[3,'latelyFollower']],[1,'人气']]]])
Z(z[28])
Z([a,[[6],[[7],[3,'item']],[3,'majorCate']]])
Z([a,[[2,'?:'],[[6],[[7],[3,'item']],[3,'isSerial']],[1,'连载'],[1,'完结']]])
Z([[2,'*'],[[6],[[6],[[7],[3,'item']],[3,'rating']],[3,'score']],[1,1]])
Z([a,[[2,'+'],[[2,'*'],[[6],[[6],[[7],[3,'item']],[3,'rating']],[3,'score']],[1,1]],[1,'分']]])
Z(z[19])
Z([a,[[6],[[7],[3,'item']],[3,'shortIntro']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'c-book-recommend-section mb20'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'books']],[3,'title']]])
Z([[6],[[7],[3,'books']],[3,'secondTitle']])
Z([3,'sub-title'])
Z([a,[[6],[[7],[3,'books']],[3,'secondTitle']]])
Z([[4],[[5],[[5],[1,'more']],[[2,'?:'],[[2,'!'],[[6],[[7],[3,'books']],[3,'secondTitle']]],[1,'null-sub-title'],[1,'']]]])
Z([[2,'+'],[1,'../results/index?type\x3drecommend\x26id\x3d'],[[6],[[7],[3,'books']],[3,'_id']]])
Z([3,'查看更多'])
Z([3,'arrow'])
Z([3,'content c-book-imageRecommended-4x'])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'books']],[3,'books']])
Z(z[11])
Z([[2,'<'],[[7],[3,'index']],[1,4]])
Z([[2,'+'],[1,'../bookDetail/bookDetail?id\x3d'],[[6],[[6],[[6],[[7],[3,'books']],[3,'books']],[[7],[3,'index']]],[3,'_id']]])
Z([[4],[[5],[[2,'?:'],[[2,'!=='],[[6],[[7],[3,'books']],[3,'sellType']],[1,'无']],[1,'cover discount'],[1,'cover']]]])
Z([[2,'+'],[[6],[[7],[3,'item']],[3,'cover']],[1,'?imageMogr2/thumbnail/100x140']])
Z([[6],[[7],[3,'item']],[3,'allowMonthly']])
Z([3,'is-vip'])
Z([3,'book-name'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!='],[[6],[[7],[3,'books']],[3,'title']],[1,'漫画精选']])
Z([3,'c-book-recommend-section mb20'])
Z([3,'title'])
Z([a,[[6],[[7],[3,'books']],[3,'title']]])
Z([[6],[[7],[3,'books']],[3,'secondTitle']])
Z([3,'sub-title'])
Z([a,[[6],[[7],[3,'books']],[3,'secondTitle']]])
Z([[4],[[5],[[5],[1,'more']],[[2,'?:'],[[2,'!'],[[6],[[7],[3,'books']],[3,'secondTitle']]],[1,'null-sub-title'],[1,'']]]])
Z([[2,'+'],[1,'../results/index?type\x3drecommend\x26id\x3d'],[[6],[[7],[3,'data']],[3,'_id']]])
Z([3,'查看更多'])
Z([3,'arrow'])
Z([3,'content c-book-fullTextRecommended'])
Z([3,'index2'])
Z([3,'item'])
Z([[6],[[7],[3,'books']],[3,'books']])
Z(z[12])
Z([[2,'<'],[[7],[3,'index2']],[1,4]])
Z([3,'clearfix'])
Z([[2,'+'],[1,'../bookDetail/bookDetail?id\x3d'],[[6],[[6],[[6],[[7],[3,'books']],[3,'books']],[[7],[3,'index2']]],[3,'_id']]])
Z([3,'cover'])
Z([[2,'+'],[[6],[[7],[3,'item']],[3,'cover']],[1,'?imageMogr2/thumbnail/100x140']])
Z([[6],[[7],[3,'item']],[3,'allowMonthly']])
Z([3,'is-vip'])
Z([3,'right'])
Z([3,'name'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z([3,'desc'])
Z([a,[[6],[[7],[3,'item']],[3,'shortIntro']]])
Z([3,'sku'])
Z([3,'author'])
Z([3,'person-icon'])
Z([a,[[6],[[7],[3,'item']],[3,'author']]])
Z([3,'popularity'])
Z([3,'c-red'])
Z([a,[[2,'?:'],[[2,'>='],[[6],[[7],[3,'item']],[3,'latelyFollower']],[1,10000]],[[2,'+'],[[2,'/'],[[6],[[7],[3,'item']],[3,'latelyFollower']],[1,10000]],[1,'万人气']],[[2,'+'],[[6],[[7],[3,'item']],[3,'latelyFollower']],[1,'人气']]]])
Z([3,'tag'])
Z([a,[[6],[[7],[3,'item']],[3,'majorCate']]])
Z([a,[[2,'?:'],[[6],[[7],[3,'item']],[3,'isSerial']],[1,'连载'],[1,'完结']]])
Z([[2,'*'],[[6],[[6],[[7],[3,'item']],[3,'rating']],[3,'score']],[1,1]])
Z([a,[[2,'+'],[[2,'*'],[[6],[[6],[[7],[3,'item']],[3,'rating']],[3,'score']],[1,1]],[1,'分']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'page-ranking-wraper'])
Z([3,'ranking-list-header'])
Z([3,'J_listHeader'])
Z([3,'ranking-type'])
Z([3,'__e'])
Z([[4],[[5],[[2,'?:'],[[2,'==='],[[7],[3,'rankTypeIndex']],[1,0]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'rankTypeClick']],[[4],[[5],[[5],[1,0]],[1,'male']]]]]]]]]]])
Z([3,'男频'])
Z(z[4])
Z([[4],[[5],[[2,'?:'],[[2,'==='],[[7],[3,'rankTypeIndex']],[1,1]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'rankTypeClick']],[[4],[[5],[[5],[1,1]],[1,'female']]]]]]]]]]])
Z([3,'女频'])
Z([3,'ranking-box'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'scrollHeight']],[1,'px']]],[1,';']],[[2,'+'],[[2,'+'],[1,'width:'],[[2,'+'],[[7],[3,'width']],[1,'px']]],[1,';']]])
Z([3,'box'])
Z([3,'male'])
Z([3,'rankingContent'])
Z([3,'nav_width'])
Z([3,'J_left_nav'])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'scrollHeight']],[1,'px']]],[1,';']])
Z([3,'left-nav'])
Z(z[19])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'male']])
Z(z[22])
Z([[2,'==='],[[7],[3,'rankType']],[1,'male']])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'collapse']]])
Z(z[4])
Z([[4],[[5],[[2,'?:'],[[2,'==='],[[7],[3,'rankIndex']],[[7],[3,'index']]],[1,'active'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'getRankBooksId']],[[4],[[5],[[5],[1,'$0']],[[7],[3,'index']]]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'male']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([3,'_i'])
Z([a,[[6],[[7],[3,'item']],[3,'title']]])
Z(z[22])
Z(z[23])
Z([[7],[3,'female']])
Z(z[22])
Z([[2,'==='],[[7],[3,'rankType']],[1,'female']])
Z(z[27])
Z(z[4])
Z(z[29])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'getRankBooksId']],[[4],[[5],[[5],[1,'$0']],[[7],[3,'index']]]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'female']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z(z[31])
Z([a,z[32][1]])
Z([3,'right-content'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'scrollHeight']],[1,'px']]],[1,';']],[[2,'+'],[[2,'+'],[1,'width:'],[[2,'+'],[[7],[3,'scrollWidth']],[1,'px']]],[1,';']]])
Z([3,'c-booklist'])
Z(z[22])
Z(z[23])
Z([[7],[3,'bookList']])
Z(z[22])
Z([3,'clearfix'])
Z([[2,'+'],[1,'../bookDetail/bookDetail?id\x3d'],[[6],[[6],[[7],[3,'bookList']],[[7],[3,'index']]],[3,'_id']]])
Z([3,'cover'])
Z([[2,'+'],[[6],[[7],[3,'item']],[3,'cover']],[1,'?imageMogr2/thumbnail/100x140']])
Z([3,'right'])
Z([3,'name'])
Z([a,z[32][1]])
Z([3,'desc'])
Z([a,[[6],[[7],[3,'item']],[3,'shortIntro']]])
Z([3,'sku'])
Z([3,'popularity'])
Z([3,'c-red'])
Z([a,[[2,'?:'],[[2,'>='],[[6],[[7],[3,'item']],[3,'latelyFollower']],[1,10000]],[[2,'+'],[[2,'/'],[[6],[[7],[3,'item']],[3,'latelyFollower']],[1,10000]],[1,'万']],[[6],[[7],[3,'item']],[3,'latelyFollower']]]])
Z([3,'人气'])
Z(z[61])
Z(z[62])
Z([a,[[2,'+'],[[2,'*'],[[6],[[7],[3,'item']],[3,'retentionRatio']],[1,1]],[1,'%']]])
Z([3,'留存'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'Box'])
Z([3,'pagbg anmt'])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'pageBg']]],[1,';']])
Z([3,'topBox anmt'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'fontColor']]],[1,';']],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'menuBg']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'top:'],[[2,'?:'],[[7],[3,'show']],[1,'0'],[1,'-150px']]],[1,';']]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'statusBarHeight']]],[1,';']])
Z([3,'height:40rpx;'])
Z([3,'tMain'])
Z([3,'height:100rpx;line-height:100rpx;text-overflow:ellipsis;'])
Z([3,'__e'])
Z([3,'back'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z([3,'../../static/yueduBack.png'])
Z([3,'font-size:24rpx;'])
Z([a,[[2,'+'],[[2,'+'],[1,'('],[[7],[3,'section_title']]],[1,')']]])
Z([3,'bottomBox anmt'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'fontColor']]],[1,';']],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'menuBg']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'bottom:'],[[2,'?:'],[[7],[3,'show']],[1,'0'],[1,'-150px']]],[1,';']]])
Z([3,'overflow:hidden;'])
Z([3,'float:left;width:50%;overflow:hidden;'])
Z([3,'float:left;width:30%;line-height:70rpx;text-align:center;font-size:24rpx;'])
Z([3,'字体'])
Z([3,'float:left;width:70%;height:70rpx;display:flex;align-content:center;justify-content:center;'])
Z([[7],[3,'fontColor']])
Z([[7],[3,'pageBg']])
Z(z[9])
Z(z[9])
Z(z[22])
Z([3,'20'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'changing']],[[4],[[5],[[4],[[5],[[5],[1,'changeFontSize']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeFontSize']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'100'])
Z(z[27])
Z([3,'width:100%;'])
Z([[7],[3,'size']])
Z(z[18])
Z(z[19])
Z([3,'间距'])
Z(z[21])
Z(z[22])
Z(z[23])
Z(z[9])
Z(z[9])
Z(z[22])
Z(z[27])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'changing']],[[4],[[5],[[4],[[5],[[5],[1,'changeLineHeight']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeLineHeight']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'150'])
Z([3,'50'])
Z(z[31])
Z([[7],[3,'lineHeight']])
Z(z[17])
Z([3,'float:left;width:15%;line-height:100rpx;text-align:center;font-size:24rpx;'])
Z([3,'背景'])
Z([3,'float:left;width:85%;height:100rpx;display:flex;'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'zhutiList']])
Z([3,'name'])
Z([[2,'&&'],[[2,'!='],[[7],[3,'index']],[1,1]],[[2,'!='],[[7],[3,'index']],[1,2]]])
Z(z[9])
Z([3,'sekuai'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'qiehuan']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'background-color:'],[[6],[[7],[3,'item']],[3,'pageBg']]],[1,';']],[[2,'+'],[[2,'+'],[1,'border-color:'],[[2,'?:'],[[2,'=='],[[7],[3,'dqzhuti']],[[7],[3,'index']]],[[6],[[7],[3,'item']],[3,'fontColor']],[1,'rgba(0,0,0,0)']]],[1,';']]])
Z([3,'ddd'])
Z([3,'width:100%;display:flex;'])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'mulu']]]]]]]]])
Z([3,'tficon'])
Z([3,''])
Z([3,'目录'])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'qiehuan']],[[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'dqzhuti']],[1,1]],[1,0],[1,1]]]]]]]]]]]])
Z(z[65])
Z([a,[[2,'?:'],[[2,'=='],[[7],[3,'dqzhuti']],[1,1]],[1,''],[1,'']]])
Z([a,[[2,'?:'],[[2,'=='],[[7],[3,'dqzhuti']],[1,1]],[1,'白天'],[1,'夜间']]])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'qiehuan']],[[4],[[5],[[2,'?:'],[[2,'=='],[[7],[3,'dqzhuti']],[1,2]],[1,0],[1,2]]]]]]]]]]]])
Z([[2,'?:'],[[2,'=='],[[7],[3,'dqzhuti']],[1,2]],[1,'color:green'],[1,'']])
Z(z[65])
Z([3,''])
Z([3,'护眼'])
Z([3,'anmt'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'fontColor']]],[1,';']],[[2,'+'],[[2,'+'],[1,'line-height:'],[[7],[3,'statusBarHeight']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'background-color:'],[[2,'?:'],[[7],[3,'show']],[[7],[3,'menuBg']],[[7],[3,'pageBg']]]],[1,';']]],[[2,'+'],[[2,'+'],[1,'position:'],[1,'fixed']],[1,';']]],[[2,'+'],[[2,'+'],[1,'top:'],[1,'0']],[1,';']]],[[2,'+'],[[2,'+'],[1,'left:'],[1,'0']],[1,';']]],[[2,'+'],[[2,'+'],[1,'z-index:'],[1,'6']],[1,';']]],[[2,'+'],[[2,'+'],[1,'width:'],[1,'100%']],[1,';']]],[[2,'+'],[[2,'+'],[1,'font-size:'],[1,'3vw']],[1,';']]],[[2,'+'],[[2,'+'],[1,'z-index:'],[1,'20']],[1,';']]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'height:'],[[7],[3,'statusBarHeight']]],[1,';']],[[2,'+'],[[2,'+'],[1,'padding:'],[1,'0 5vw']],[1,';']]])
Z([3,'float:left;letter-spacing:0;'])
Z([a,[[7],[3,'systemTime']]])
Z([3,'float:right;letter-spacing:0;'])
Z([3,'iconfont icon-80dianliang'])
Z([3,'font-size:5vw;position:relative;'])
Z([3,'dianxin'])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[2,'?:'],[[7],[3,'show']],[[7],[3,'menuBg']],[[7],[3,'pageBg']]]],[1,';']])
Z([3,'dLiang'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'fontColor']]],[1,';']],[[2,'+'],[[2,'+'],[1,'width:'],[[2,'+'],[[7],[3,'battery']],[1,'%']]],[1,';']]])
Z([3,'height:40rpx;line-height:40rpx;padding:0 5vw;'])
Z([3,'float:left;width:300rpx;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;'])
Z([a,[[7],[3,'shuming']]])
Z([3,'float:right;width:300rpx;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:right;'])
Z([a,[[7],[3,'section_title']]])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'nextBook']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'scrollTop'])
Z([3,'true'])
Z([3,'height:100vh;overflow-y:auto;'])
Z(z[9])
Z([3,'sview'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[1,'dianjile']]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'padding-top:'],[[2,'+'],[[2,'+'],[1,'calc('],[[7],[3,'statusBarHeight']]],[1,' + 40px)']]],[1,';']],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'textColor']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'font-size:'],[[2,'+'],[[6],[[7],[3,'$root']],[3,'m0']],[1,'px']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'line-height:'],[[2,'+'],[[6],[[7],[3,'$root']],[3,'m1']],[1,'px']]],[1,';']]])
Z([[7],[3,'content_text']])
Z([[7],[3,'showChapters']])
Z([3,'chaptersBox'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'menuBg']]],[1,';']],[[2,'+'],[[2,'+'],[1,'padding-top:'],[[2,'+'],[[2,'+'],[1,'calc('],[[7],[3,'statusBarHeight']]],[1,' + 80px)']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'textColor']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'font-size:'],[[2,'+'],[[6],[[7],[3,'$root']],[3,'m2']],[1,'px']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'line-height:'],[[2,'+'],[[6],[[7],[3,'$root']],[3,'m3']],[1,'px']]],[1,';']]])
Z(z[3])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'fontColor']]],[1,';']],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'menuBg']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'top:'],[1,'0']],[1,';']]])
Z(z[5])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'e0']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[12])
Z(z[13])
Z([a,z[14][1]])
Z([3,'__l'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z(z[52])
Z(z[53])
Z([[6],[[7],[3,'$root']],[3,'l0']])
Z(z[121])
Z(z[9])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'checkChapter']],[[4],[[5],[[5],[1,'$0']],[[7],[3,'index']]]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'chapters']],[1,'']],[[7],[3,'index']]],[1,'link']]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'g0']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'2-'],[[7],[3,'index']]],[1,',']],[1,'1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/uni-badge/uni-badge.wxml','./components/uni-icons/uni-icons.wxml','./components/uni-list-item/uni-list-item.wxml','./components/uni-list/uni-list.wxml','./pages/bookDetail/bookDetail.wxml','./pages/bookshelf/bookshelf.wxml','./pages/category/category.wxml','./pages/category/categoryDetail.wxml','./pages/index/index.wxml','./pages/index/template/template1.wxml','./pages/index/template/template2.wxml','./pages/index/template/template3.wxml','./pages/ranking/ranking.wxml','./pages/reader/index.wxml','./pages/ucenter/ucenter.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'text',['bindtap',1,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var oD=_oz(z,5,e,s,gg)
_(xC,oD)
_(oB,xC)
}
oB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cF=_mz(z,'text',['bindtap',0,'class',1,'data-event-opts',1,'style',2],[],e,s,gg)
var hG=_oz(z,4,e,s,gg)
_(cF,hG)
_(r,cF)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var cI=_mz(z,'view',['bindtap',0,'class',1,'data-event-opts',1,'hoverClass',2],[],e,s,gg)
var oJ=_n('view')
_rz(z,oJ,'class',4,e,s,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,5,e,s,gg)){lK.wxVkey=1
var tM=_n('view')
_rz(z,tM,'class',6,e,s,gg)
var eN=_mz(z,'image',['class',7,'src',1],[],e,s,gg)
_(tM,eN)
_(lK,tM)
}
else{lK.wxVkey=2
var bO=_v()
_(lK,bO)
if(_oz(z,9,e,s,gg)){bO.wxVkey=1
var oP=_n('view')
_rz(z,oP,'class',10,e,s,gg)
var xQ=_mz(z,'uni-icons',['bind:__l',11,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(oP,xQ)
_(bO,oP)
}
bO.wxXCkey=1
bO.wxXCkey=3
}
var oR=_n('view')
_rz(z,oR,'class',17,e,s,gg)
var cT=_n('slot')
_(oR,cT)
var hU=_n('text')
_rz(z,hU,'class',18,e,s,gg)
var oV=_oz(z,19,e,s,gg)
_(hU,oV)
_(oR,hU)
var fS=_v()
_(oR,fS)
if(_oz(z,20,e,s,gg)){fS.wxVkey=1
var cW=_n('text')
_rz(z,cW,'class',21,e,s,gg)
var oX=_oz(z,22,e,s,gg)
_(cW,oX)
_(fS,cW)
}
fS.wxXCkey=1
_(oJ,oR)
var aL=_v()
_(oJ,aL)
if(_oz(z,23,e,s,gg)){aL.wxVkey=1
var lY=_n('view')
_rz(z,lY,'class',24,e,s,gg)
var aZ=_v()
_(lY,aZ)
if(_oz(z,25,e,s,gg)){aZ.wxVkey=1
var b3=_mz(z,'uni-badge',['bind:__l',26,'class',1,'text',2,'type',3,'vueId',4],[],e,s,gg)
_(aZ,b3)
}
var t1=_v()
_(lY,t1)
if(_oz(z,31,e,s,gg)){t1.wxVkey=1
var o4=_mz(z,'switch',['bindchange',32,'checked',1,'class',2,'data-event-opts',3,'disabled',4],[],e,s,gg)
_(t1,o4)
}
var e2=_v()
_(lY,e2)
if(_oz(z,37,e,s,gg)){e2.wxVkey=1
var x5=_mz(z,'uni-icons',['bind:__l',38,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(e2,x5)
}
aZ.wxXCkey=1
aZ.wxXCkey=3
t1.wxXCkey=1
e2.wxXCkey=1
e2.wxXCkey=3
_(aL,lY)
}
lK.wxXCkey=1
lK.wxXCkey=3
aL.wxXCkey=1
aL.wxXCkey=3
_(cI,oJ)
_(r,cI)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var f7=_n('view')
_rz(z,f7,'class',0,e,s,gg)
var c8=_n('slot')
_(f7,c8)
_(r,f7)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var o0=_n('view')
var cAB=_n('view')
_rz(z,cAB,'class',0,e,s,gg)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,1,e,s,gg)){oBB.wxVkey=1
var tEB=_mz(z,'navigator',['class',2,'openType',1,'url',2],[],e,s,gg)
_(oBB,tEB)
}
var eFB=_n('view')
_rz(z,eFB,'class',5,e,s,gg)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,6,e,s,gg)){bGB.wxVkey=1
var oHB=_n('view')
_rz(z,oHB,'class',7,e,s,gg)
_(bGB,oHB)
}
var xIB=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
_(eFB,xIB)
var oJB=_n('view')
_rz(z,oJB,'class',10,e,s,gg)
var oNB=_n('view')
_rz(z,oNB,'class',11,e,s,gg)
var cOB=_oz(z,12,e,s,gg)
_(oNB,cOB)
_(oJB,oNB)
var fKB=_v()
_(oJB,fKB)
if(_oz(z,13,e,s,gg)){fKB.wxVkey=1
var oPB=_n('view')
_rz(z,oPB,'class',14,e,s,gg)
var lQB=_n('view')
_rz(z,lQB,'class',15,e,s,gg)
var aRB=_oz(z,16,e,s,gg)
_(lQB,aRB)
_(oPB,lQB)
var tSB=_n('view')
_rz(z,tSB,'class',17,e,s,gg)
_(oPB,tSB)
var eTB=_n('view')
_rz(z,eTB,'class',18,e,s,gg)
_(oPB,eTB)
var bUB=_n('view')
_rz(z,bUB,'class',19,e,s,gg)
_(oPB,bUB)
var oVB=_n('view')
_rz(z,oVB,'class',20,e,s,gg)
_(oPB,oVB)
var xWB=_n('view')
_rz(z,xWB,'class',21,e,s,gg)
_(oPB,xWB)
var oXB=_n('view')
_rz(z,oXB,'class',22,e,s,gg)
var fYB=_oz(z,23,e,s,gg)
_(oXB,fYB)
_(oPB,oXB)
var cZB=_n('view')
var h1B=_oz(z,24,e,s,gg)
_(cZB,h1B)
_(oPB,cZB)
_(fKB,oPB)
}
var o2B=_n('view')
_rz(z,o2B,'class',25,e,s,gg)
var c3B=_n('view')
_rz(z,c3B,'class',26,e,s,gg)
var o4B=_oz(z,27,e,s,gg)
_(c3B,o4B)
_(o2B,c3B)
var l5B=_n('view')
_rz(z,l5B,'class',28,e,s,gg)
var a6B=_oz(z,29,e,s,gg)
_(l5B,a6B)
_(o2B,l5B)
var t7B=_n('view')
var e8B=_oz(z,30,e,s,gg)
_(t7B,e8B)
_(o2B,t7B)
_(oJB,o2B)
var b9B=_n('view')
_rz(z,b9B,'class',31,e,s,gg)
var o0B=_n('view')
var xAC=_oz(z,32,e,s,gg)
_(o0B,xAC)
_(b9B,o0B)
var oBC=_n('view')
_rz(z,oBC,'class',33,e,s,gg)
var fCC=_oz(z,34,e,s,gg)
_(oBC,fCC)
_(b9B,oBC)
var cDC=_n('view')
_rz(z,cDC,'class',35,e,s,gg)
var hEC=_oz(z,36,e,s,gg)
_(cDC,hEC)
_(b9B,cDC)
_(oJB,b9B)
var cLB=_v()
_(oJB,cLB)
if(_oz(z,37,e,s,gg)){cLB.wxVkey=1
var oFC=_n('view')
_rz(z,oFC,'class',38,e,s,gg)
var cGC=_oz(z,39,e,s,gg)
_(oFC,cGC)
_(cLB,oFC)
}
var hMB=_v()
_(oJB,hMB)
if(_oz(z,40,e,s,gg)){hMB.wxVkey=1
var oHC=_mz(z,'view',['bindtap',41,'class',1],[],e,s,gg)
var lIC=_oz(z,43,e,s,gg)
_(oHC,lIC)
_(hMB,oHC)
}
fKB.wxXCkey=1
cLB.wxXCkey=1
hMB.wxXCkey=1
_(eFB,oJB)
bGB.wxXCkey=1
_(cAB,eFB)
var aJC=_n('view')
_rz(z,aJC,'class',44,e,s,gg)
var tKC=_n('view')
_rz(z,tKC,'class',45,e,s,gg)
var eLC=_n('view')
var bMC=_oz(z,46,e,s,gg)
_(eLC,bMC)
_(tKC,eLC)
var oNC=_n('view')
_rz(z,oNC,'class',47,e,s,gg)
var xOC=_oz(z,48,e,s,gg)
_(oNC,xOC)
_(tKC,oNC)
_(aJC,tKC)
var oPC=_n('view')
_rz(z,oPC,'class',49,e,s,gg)
var fQC=_n('view')
var cRC=_oz(z,50,e,s,gg)
_(fQC,cRC)
_(oPC,fQC)
var hSC=_n('view')
_rz(z,hSC,'class',51,e,s,gg)
var oTC=_oz(z,52,e,s,gg)
_(hSC,oTC)
_(oPC,hSC)
_(aJC,oPC)
var cUC=_n('view')
_rz(z,cUC,'class',53,e,s,gg)
var oVC=_n('view')
var lWC=_oz(z,54,e,s,gg)
_(oVC,lWC)
_(cUC,oVC)
var aXC=_n('view')
_rz(z,aXC,'class',55,e,s,gg)
var tYC=_oz(z,56,e,s,gg)
_(aXC,tYC)
_(cUC,aXC)
_(aJC,cUC)
_(cAB,aJC)
var eZC=_mz(z,'view',['bindtap',57,'class',1],[],e,s,gg)
var b1C=_n('view')
_rz(z,b1C,'class',59,e,s,gg)
var o2C=_oz(z,60,e,s,gg)
_(b1C,o2C)
var x3C=_n('view')
_rz(z,x3C,'class',61,e,s,gg)
_(b1C,x3C)
_(eZC,b1C)
var o4C=_n('view')
_rz(z,o4C,'class',62,e,s,gg)
var f5C=_oz(z,63,e,s,gg)
_(o4C,f5C)
_(eZC,o4C)
_(cAB,eZC)
var lCB=_v()
_(cAB,lCB)
if(_oz(z,64,e,s,gg)){lCB.wxVkey=1
var c6C=_n('view')
_rz(z,c6C,'class',65,e,s,gg)
var c9C=_n('view')
_rz(z,c9C,'class',66,e,s,gg)
var o0C=_n('view')
var lAD=_oz(z,67,e,s,gg)
_(o0C,lAD)
_(c9C,o0C)
_(c6C,c9C)
var h7C=_v()
_(c6C,h7C)
if(_oz(z,68,e,s,gg)){h7C.wxVkey=1
var aBD=_n('view')
_rz(z,aBD,'class',69,e,s,gg)
var tCD=_v()
_(aBD,tCD)
var eDD=function(oFD,bED,xGD,gg){
var fID=_n('view')
_rz(z,fID,'class',74,oFD,bED,gg)
var cJD=_n('view')
_rz(z,cJD,'class',75,oFD,bED,gg)
var hKD=_oz(z,76,oFD,bED,gg)
_(cJD,hKD)
_(fID,cJD)
var oLD=_n('view')
_rz(z,oLD,'class',77,oFD,bED,gg)
var cMD=_oz(z,78,oFD,bED,gg)
_(oLD,cMD)
_(fID,oLD)
var oND=_n('view')
_rz(z,oND,'class',79,oFD,bED,gg)
var lOD=_n('view')
_rz(z,lOD,'class',80,oFD,bED,gg)
var aPD=_mz(z,'image',['class',81,'src',1],[],oFD,bED,gg)
_(lOD,aPD)
var tQD=_n('view')
_rz(z,tQD,'class',83,oFD,bED,gg)
var eRD=_n('view')
_rz(z,eRD,'class',84,oFD,bED,gg)
var bSD=_oz(z,85,oFD,bED,gg)
_(eRD,bSD)
_(tQD,eRD)
var oTD=_n('view')
_rz(z,oTD,'class',86,oFD,bED,gg)
var xUD=_oz(z,87,oFD,bED,gg)
_(oTD,xUD)
_(tQD,oTD)
_(lOD,tQD)
_(oND,lOD)
var oVD=_n('view')
_rz(z,oVD,'class',88,oFD,bED,gg)
var fWD=_n('view')
_rz(z,fWD,'class',89,oFD,bED,gg)
var cXD=_n('view')
_rz(z,cXD,'class',90,oFD,bED,gg)
_(fWD,cXD)
var hYD=_n('view')
_rz(z,hYD,'class',91,oFD,bED,gg)
_(fWD,hYD)
var oZD=_n('view')
_rz(z,oZD,'class',92,oFD,bED,gg)
_(fWD,oZD)
var c1D=_n('view')
_rz(z,c1D,'class',93,oFD,bED,gg)
_(fWD,c1D)
var o2D=_n('view')
_rz(z,o2D,'class',94,oFD,bED,gg)
_(fWD,o2D)
_(oVD,fWD)
var l3D=_n('view')
_rz(z,l3D,'class',95,oFD,bED,gg)
var a4D=_oz(z,96,oFD,bED,gg)
_(l3D,a4D)
_(oVD,l3D)
_(oND,oVD)
_(fID,oND)
_(xGD,fID)
return xGD
}
tCD.wxXCkey=2
_2z(z,72,eDD,e,s,gg,tCD,'item','index','index')
_(h7C,aBD)
}
var o8C=_v()
_(c6C,o8C)
if(_oz(z,97,e,s,gg)){o8C.wxVkey=1
var t5D=_n('view')
_rz(z,t5D,'class',98,e,s,gg)
var e6D=_oz(z,99,e,s,gg)
_(t5D,e6D)
_(o8C,t5D)
}
h7C.wxXCkey=1
o8C.wxXCkey=1
_(lCB,c6C)
}
var b7D=_n('view')
_rz(z,b7D,'class',100,e,s,gg)
var x9D=_n('view')
_rz(z,x9D,'class',101,e,s,gg)
var o0D=_oz(z,102,e,s,gg)
_(x9D,o0D)
_(b7D,x9D)
var o8D=_v()
_(b7D,o8D)
if(_oz(z,103,e,s,gg)){o8D.wxVkey=1
var fAE=_n('view')
_rz(z,fAE,'class',104,e,s,gg)
var cBE=_n('view')
var hCE=_oz(z,105,e,s,gg)
_(cBE,hCE)
_(fAE,cBE)
_(o8D,fAE)
}
var oDE=_mz(z,'navigator',['class',106,'url',1],[],e,s,gg)
var cEE=_n('view')
var oFE=_oz(z,108,e,s,gg)
_(cEE,oFE)
_(oDE,cEE)
var lGE=_n('view')
_rz(z,lGE,'class',109,e,s,gg)
_(oDE,lGE)
_(b7D,oDE)
var aHE=_n('view')
_rz(z,aHE,'class',110,e,s,gg)
var tIE=_v()
_(aHE,tIE)
var eJE=function(oLE,bKE,xME,gg){
var fOE=_v()
_(xME,fOE)
if(_oz(z,115,oLE,bKE,gg)){fOE.wxVkey=1
var cPE=_mz(z,'navigator',['hoverClass',116,'openType',1,'url',2],[],oLE,bKE,gg)
var hQE=_n('view')
_rz(z,hQE,'class',119,oLE,bKE,gg)
var cSE=_n('image')
_rz(z,cSE,'src',120,oLE,bKE,gg)
_(hQE,cSE)
var oRE=_v()
_(hQE,oRE)
if(_oz(z,121,oLE,bKE,gg)){oRE.wxVkey=1
var oTE=_n('view')
_rz(z,oTE,'class',122,oLE,bKE,gg)
_(oRE,oTE)
}
oRE.wxXCkey=1
_(cPE,hQE)
var lUE=_n('view')
_rz(z,lUE,'class',123,oLE,bKE,gg)
var aVE=_oz(z,124,oLE,bKE,gg)
_(lUE,aVE)
_(cPE,lUE)
var tWE=_n('view')
_rz(z,tWE,'class',125,oLE,bKE,gg)
var eXE=_oz(z,126,oLE,bKE,gg)
_(tWE,eXE)
_(cPE,tWE)
_(fOE,cPE)
}
fOE.wxXCkey=1
return xME
}
tIE.wxXCkey=2
_2z(z,113,eJE,e,s,gg,tIE,'item','index','index')
_(b7D,aHE)
o8D.wxXCkey=1
_(cAB,b7D)
var aDB=_v()
_(cAB,aDB)
if(_oz(z,127,e,s,gg)){aDB.wxVkey=1
var bYE=_n('view')
_rz(z,bYE,'class',128,e,s,gg)
var oZE=_n('view')
var x1E=_oz(z,129,e,s,gg)
_(oZE,x1E)
_(bYE,oZE)
var o2E=_n('view')
_rz(z,o2E,'class',130,e,s,gg)
var f3E=_oz(z,131,e,s,gg)
_(o2E,f3E)
_(bYE,o2E)
_(aDB,bYE)
}
var c4E=_n('view')
_rz(z,c4E,'class',132,e,s,gg)
var h5E=_v()
_(c4E,h5E)
if(_oz(z,133,e,s,gg)){h5E.wxVkey=1
var o6E=_mz(z,'view',['class',134,'style',1],[],e,s,gg)
var c7E=_oz(z,136,e,s,gg)
_(o6E,c7E)
_(h5E,o6E)
}
else{h5E.wxVkey=2
var o8E=_n('view')
var l9E=_mz(z,'view',['bindtap',137,'class',1],[],e,s,gg)
var a0E=_oz(z,139,e,s,gg)
_(l9E,a0E)
_(o8E,l9E)
var tAF=_mz(z,'navigator',['class',140,'style',1,'url',2],[],e,s,gg)
var eBF=_oz(z,143,e,s,gg)
_(tAF,eBF)
_(o8E,tAF)
_(h5E,o8E)
}
h5E.wxXCkey=1
_(cAB,c4E)
oBB.wxXCkey=1
lCB.wxXCkey=1
aDB.wxXCkey=1
_(o0,cAB)
_(r,o0)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oDF=_n('view')
_(r,oDF)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oFF=_n('view')
_rz(z,oFF,'class',0,e,s,gg)
var fGF=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',-1,'class',1,'scrollTop',1,'style',2],[],e,s,gg)
var cHF=_mz(z,'view',['class',4,'data-type',1],[],e,s,gg)
var hIF=_n('view')
_rz(z,hIF,'class',6,e,s,gg)
var oJF=_n('view')
_rz(z,oJF,'class',7,e,s,gg)
var cKF=_oz(z,8,e,s,gg)
_(oJF,cKF)
_(hIF,oJF)
_(cHF,hIF)
var oLF=_n('view')
_rz(z,oLF,'class',9,e,s,gg)
var lMF=_v()
_(oLF,lMF)
var aNF=function(ePF,tOF,bQF,gg){
var xSF=_mz(z,'navigator',['class',14,'hoverClass',1,'url',2],[],ePF,tOF,gg)
var oTF=_n('view')
_rz(z,oTF,'class',17,ePF,tOF,gg)
var fUF=_oz(z,18,ePF,tOF,gg)
_(oTF,fUF)
_(xSF,oTF)
var cVF=_n('view')
_rz(z,cVF,'class',19,ePF,tOF,gg)
var hWF=_oz(z,20,ePF,tOF,gg)
_(cVF,hWF)
_(xSF,cVF)
var oXF=_n('view')
_rz(z,oXF,'class',21,ePF,tOF,gg)
var cYF=_n('view')
var oZF=_n('image')
_rz(z,oZF,'src',22,ePF,tOF,gg)
_(cYF,oZF)
_(oXF,cYF)
var l1F=_n('view')
var a2F=_n('image')
_rz(z,a2F,'src',23,ePF,tOF,gg)
_(l1F,a2F)
_(oXF,l1F)
var t3F=_n('view')
var e4F=_n('image')
_rz(z,e4F,'src',24,ePF,tOF,gg)
_(t3F,e4F)
_(oXF,t3F)
_(xSF,oXF)
_(bQF,xSF)
return bQF
}
lMF.wxXCkey=2
_2z(z,12,aNF,e,s,gg,lMF,'item','index','index')
_(cHF,oLF)
_(fGF,cHF)
var b5F=_mz(z,'view',['class',25,'data-type',1],[],e,s,gg)
var o6F=_n('view')
_rz(z,o6F,'class',27,e,s,gg)
var x7F=_n('view')
_rz(z,x7F,'class',28,e,s,gg)
var o8F=_oz(z,29,e,s,gg)
_(x7F,o8F)
_(o6F,x7F)
_(b5F,o6F)
var f9F=_n('view')
_rz(z,f9F,'class',30,e,s,gg)
var c0F=_v()
_(f9F,c0F)
var hAG=function(cCG,oBG,oDG,gg){
var aFG=_mz(z,'navigator',['class',35,'hoverClass',1,'url',2],[],cCG,oBG,gg)
var tGG=_n('view')
_rz(z,tGG,'class',38,cCG,oBG,gg)
var eHG=_oz(z,39,cCG,oBG,gg)
_(tGG,eHG)
_(aFG,tGG)
var bIG=_n('view')
_rz(z,bIG,'class',40,cCG,oBG,gg)
var oJG=_oz(z,41,cCG,oBG,gg)
_(bIG,oJG)
_(aFG,bIG)
var xKG=_n('view')
_rz(z,xKG,'class',42,cCG,oBG,gg)
var oLG=_n('view')
var fMG=_n('image')
_rz(z,fMG,'src',43,cCG,oBG,gg)
_(oLG,fMG)
_(xKG,oLG)
var cNG=_n('view')
var hOG=_n('image')
_rz(z,hOG,'src',44,cCG,oBG,gg)
_(cNG,hOG)
_(xKG,cNG)
var oPG=_n('view')
var cQG=_n('image')
_rz(z,cQG,'src',45,cCG,oBG,gg)
_(oPG,cQG)
_(xKG,oPG)
_(aFG,xKG)
_(oDG,aFG)
return oDG
}
c0F.wxXCkey=2
_2z(z,33,hAG,e,s,gg,c0F,'item','index','index')
_(b5F,f9F)
_(fGF,b5F)
_(oFF,fGF)
_(r,oFF)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var lSG=_n('view')
_(r,lSG)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var tUG=_n('view')
_rz(z,tUG,'class',0,e,s,gg)
var eVG=_v()
_(tUG,eVG)
if(_oz(z,1,e,s,gg)){eVG.wxVkey=1
var bWG=_n('view')
_rz(z,bWG,'class',2,e,s,gg)
var oXG=_v()
_(bWG,oXG)
if(_oz(z,3,e,s,gg)){oXG.wxVkey=1
var xYG=_mz(z,'swiper',['autoplay',4,'circular',1,'class',2,'duration',3,'interval',4],[],e,s,gg)
var oZG=_v()
_(xYG,oZG)
var f1G=function(h3G,c2G,o4G,gg){
var o6G=_n('swiper-item')
_rz(z,o6G,'class',13,h3G,c2G,gg)
var l7G=_n('navigator')
_rz(z,l7G,'url',14,h3G,c2G,gg)
var a8G=_mz(z,'image',['class',15,'src',1],[],h3G,c2G,gg)
_(l7G,a8G)
_(o6G,l7G)
_(o4G,o6G)
return o4G
}
oZG.wxXCkey=2
_2z(z,11,f1G,e,s,gg,oZG,'item','index','index')
_(oXG,xYG)
}
var t9G=_n('view')
_rz(z,t9G,'class',17,e,s,gg)
var e0G=_mz(z,'navigator',['hoverClass',18,'url',1],[],e,s,gg)
var bAH=_n('view')
_rz(z,bAH,'class',20,e,s,gg)
_(e0G,bAH)
var oBH=_n('view')
var xCH=_oz(z,21,e,s,gg)
_(oBH,xCH)
_(e0G,oBH)
_(t9G,e0G)
var oDH=_mz(z,'navigator',['hoverClass',22,'url',1],[],e,s,gg)
var fEH=_n('view')
_rz(z,fEH,'class',24,e,s,gg)
_(oDH,fEH)
var cFH=_n('view')
var hGH=_oz(z,25,e,s,gg)
_(cFH,hGH)
_(oDH,cFH)
_(t9G,oDH)
var oHH=_mz(z,'navigator',['hoverClass',26,'url',1],[],e,s,gg)
var cIH=_n('view')
_rz(z,cIH,'class',28,e,s,gg)
_(oHH,cIH)
var oJH=_n('view')
var lKH=_oz(z,29,e,s,gg)
_(oJH,lKH)
_(oHH,oJH)
_(t9G,oHH)
_(bWG,t9G)
var aLH=_v()
_(bWG,aLH)
var tMH=function(bOH,eNH,oPH,gg){
var oRH=_n('view')
_rz(z,oRH,'class',34,bOH,eNH,gg)
var fSH=_v()
_(oRH,fSH)
if(_oz(z,35,bOH,eNH,gg)){fSH.wxVkey=1
var cTH=_mz(z,'template3',['bind:__l',36,'books',1,'vueId',2],[],bOH,eNH,gg)
_(fSH,cTH)
}
else{fSH.wxVkey=2
var hUH=_v()
_(fSH,hUH)
if(_oz(z,39,bOH,eNH,gg)){hUH.wxVkey=1
var oVH=_mz(z,'template3',['bind:__l',40,'books',1,'vueId',2],[],bOH,eNH,gg)
_(hUH,oVH)
}
else{hUH.wxVkey=2
var cWH=_v()
_(hUH,cWH)
if(_oz(z,43,bOH,eNH,gg)){cWH.wxVkey=1
var oXH=_mz(z,'template1',['bind:__l',44,'books',1,'vueId',2],[],bOH,eNH,gg)
_(cWH,oXH)
}
else{cWH.wxVkey=2
var lYH=_mz(z,'template2',['bind:__l',47,'books',1,'vueId',2],[],bOH,eNH,gg)
_(cWH,lYH)
}
cWH.wxXCkey=1
cWH.wxXCkey=3
cWH.wxXCkey=3
}
hUH.wxXCkey=1
hUH.wxXCkey=3
hUH.wxXCkey=3
}
fSH.wxXCkey=1
fSH.wxXCkey=3
fSH.wxXCkey=3
_(oPH,oRH)
return oPH
}
aLH.wxXCkey=4
_2z(z,32,tMH,e,s,gg,aLH,'item','index','index')
oXG.wxXCkey=1
_(eVG,bWG)
}
eVG.wxXCkey=1
eVG.wxXCkey=3
_(r,tUG)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var t1H=_n('view')
_rz(z,t1H,'class',0,e,s,gg)
var b3H=_n('view')
_rz(z,b3H,'class',1,e,s,gg)
var o4H=_oz(z,2,e,s,gg)
_(b3H,o4H)
_(t1H,b3H)
var e2H=_v()
_(t1H,e2H)
if(_oz(z,3,e,s,gg)){e2H.wxVkey=1
var x5H=_n('view')
_rz(z,x5H,'class',4,e,s,gg)
var o6H=_n('view')
var f7H=_oz(z,5,e,s,gg)
_(o6H,f7H)
_(x5H,o6H)
_(e2H,x5H)
}
var c8H=_mz(z,'navigator',['class',6,'url',1],[],e,s,gg)
var h9H=_n('view')
var o0H=_oz(z,8,e,s,gg)
_(h9H,o0H)
_(c8H,h9H)
var cAI=_n('view')
_rz(z,cAI,'class',9,e,s,gg)
_(c8H,cAI)
_(t1H,c8H)
var oBI=_n('view')
_rz(z,oBI,'class',10,e,s,gg)
var lCI=_n('view')
_rz(z,lCI,'class',11,e,s,gg)
var aDI=_mz(z,'navigator',['class',12,'url',1],[],e,s,gg)
var tEI=_mz(z,'image',['alt',-1,'class',14,'src',1],[],e,s,gg)
_(aDI,tEI)
var eFI=_n('view')
_rz(z,eFI,'class',16,e,s,gg)
var bGI=_n('view')
_rz(z,bGI,'class',17,e,s,gg)
var oHI=_n('view')
var xII=_oz(z,18,e,s,gg)
_(oHI,xII)
_(bGI,oHI)
_(eFI,bGI)
var oJI=_n('view')
_rz(z,oJI,'class',19,e,s,gg)
var fKI=_oz(z,20,e,s,gg)
_(oJI,fKI)
_(eFI,oJI)
var cLI=_n('view')
_rz(z,cLI,'class',21,e,s,gg)
var hMI=_n('view')
_rz(z,hMI,'class',22,e,s,gg)
var oNI=_n('view')
_rz(z,oNI,'class',23,e,s,gg)
_(hMI,oNI)
var cOI=_n('view')
var oPI=_oz(z,24,e,s,gg)
_(cOI,oPI)
_(hMI,cOI)
_(cLI,hMI)
var lQI=_n('view')
_rz(z,lQI,'class',25,e,s,gg)
var aRI=_n('view')
_rz(z,aRI,'class',26,e,s,gg)
var tSI=_oz(z,27,e,s,gg)
_(aRI,tSI)
_(lQI,aRI)
_(cLI,lQI)
var eTI=_n('view')
_rz(z,eTI,'class',28,e,s,gg)
var oVI=_n('view')
var xWI=_oz(z,29,e,s,gg)
_(oVI,xWI)
_(eTI,oVI)
var oXI=_n('view')
var fYI=_oz(z,30,e,s,gg)
_(oXI,fYI)
_(eTI,oXI)
var bUI=_v()
_(eTI,bUI)
if(_oz(z,31,e,s,gg)){bUI.wxVkey=1
var cZI=_n('view')
var h1I=_oz(z,32,e,s,gg)
_(cZI,h1I)
_(bUI,cZI)
}
bUI.wxXCkey=1
_(cLI,eTI)
_(eFI,cLI)
_(aDI,eFI)
_(lCI,aDI)
_(oBI,lCI)
var o2I=_n('view')
_rz(z,o2I,'class',33,e,s,gg)
var c3I=_v()
_(o2I,c3I)
var o4I=function(a6I,l5I,t7I,gg){
var b9I=_v()
_(t7I,b9I)
if(_oz(z,38,a6I,l5I,gg)){b9I.wxVkey=1
var o0I=_n('navigator')
_rz(z,o0I,'url',39,a6I,l5I,gg)
var xAJ=_n('view')
_rz(z,xAJ,'class',40,a6I,l5I,gg)
var oBJ=_n('view')
_rz(z,oBJ,'class',41,a6I,l5I,gg)
var fCJ=_oz(z,42,a6I,l5I,gg)
_(oBJ,fCJ)
_(xAJ,oBJ)
var cDJ=_n('view')
_rz(z,cDJ,'class',43,a6I,l5I,gg)
var hEJ=_n('view')
_rz(z,hEJ,'class',44,a6I,l5I,gg)
var oFJ=_n('view')
_rz(z,oFJ,'class',45,a6I,l5I,gg)
_(hEJ,oFJ)
var cGJ=_n('view')
var oHJ=_oz(z,46,a6I,l5I,gg)
_(cGJ,oHJ)
_(hEJ,cGJ)
_(cDJ,hEJ)
var lIJ=_n('view')
_rz(z,lIJ,'class',47,a6I,l5I,gg)
var aJJ=_n('view')
_rz(z,aJJ,'class',48,a6I,l5I,gg)
var tKJ=_oz(z,49,a6I,l5I,gg)
_(aJJ,tKJ)
_(lIJ,aJJ)
_(cDJ,lIJ)
var eLJ=_n('view')
_rz(z,eLJ,'class',50,a6I,l5I,gg)
var oNJ=_n('view')
var xOJ=_oz(z,51,a6I,l5I,gg)
_(oNJ,xOJ)
_(eLJ,oNJ)
var oPJ=_n('view')
var fQJ=_oz(z,52,a6I,l5I,gg)
_(oPJ,fQJ)
_(eLJ,oPJ)
var bMJ=_v()
_(eLJ,bMJ)
if(_oz(z,53,a6I,l5I,gg)){bMJ.wxVkey=1
var cRJ=_n('view')
var hSJ=_oz(z,54,a6I,l5I,gg)
_(cRJ,hSJ)
_(bMJ,cRJ)
}
bMJ.wxXCkey=1
_(cDJ,eLJ)
_(xAJ,cDJ)
var oTJ=_n('view')
_rz(z,oTJ,'class',55,a6I,l5I,gg)
var cUJ=_oz(z,56,a6I,l5I,gg)
_(oTJ,cUJ)
_(xAJ,oTJ)
_(o0I,xAJ)
_(b9I,o0I)
}
b9I.wxXCkey=1
return t7I
}
c3I.wxXCkey=2
_2z(z,36,o4I,e,s,gg,c3I,'item','index','index')
_(oBI,o2I)
_(t1H,oBI)
e2H.wxXCkey=1
_(r,t1H)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var lWJ=_n('view')
_rz(z,lWJ,'class',0,e,s,gg)
var tYJ=_n('view')
_rz(z,tYJ,'class',1,e,s,gg)
var eZJ=_oz(z,2,e,s,gg)
_(tYJ,eZJ)
_(lWJ,tYJ)
var aXJ=_v()
_(lWJ,aXJ)
if(_oz(z,3,e,s,gg)){aXJ.wxVkey=1
var b1J=_n('view')
_rz(z,b1J,'class',4,e,s,gg)
var o2J=_n('view')
var x3J=_oz(z,5,e,s,gg)
_(o2J,x3J)
_(b1J,o2J)
_(aXJ,b1J)
}
var o4J=_mz(z,'navigator',['class',6,'url',1],[],e,s,gg)
var f5J=_n('view')
var c6J=_oz(z,8,e,s,gg)
_(f5J,c6J)
_(o4J,f5J)
var h7J=_n('view')
_rz(z,h7J,'class',9,e,s,gg)
_(o4J,h7J)
_(lWJ,o4J)
var o8J=_n('view')
_rz(z,o8J,'class',10,e,s,gg)
var c9J=_v()
_(o8J,c9J)
var o0J=function(aBK,lAK,tCK,gg){
var bEK=_v()
_(tCK,bEK)
if(_oz(z,15,aBK,lAK,gg)){bEK.wxVkey=1
var oFK=_n('navigator')
_rz(z,oFK,'url',16,aBK,lAK,gg)
var xGK=_n('view')
_rz(z,xGK,'class',17,aBK,lAK,gg)
var fIK=_mz(z,'image',['alt',-1,'src',18],[],aBK,lAK,gg)
_(xGK,fIK)
var oHK=_v()
_(xGK,oHK)
if(_oz(z,19,aBK,lAK,gg)){oHK.wxVkey=1
var cJK=_n('view')
_rz(z,cJK,'class',20,aBK,lAK,gg)
_(oHK,cJK)
}
oHK.wxXCkey=1
_(oFK,xGK)
var hKK=_n('view')
_rz(z,hKK,'class',21,aBK,lAK,gg)
var oLK=_oz(z,22,aBK,lAK,gg)
_(hKK,oLK)
_(oFK,hKK)
_(bEK,oFK)
}
bEK.wxXCkey=1
return tCK
}
c9J.wxXCkey=2
_2z(z,13,o0J,e,s,gg,c9J,'item','index','index')
_(lWJ,o8J)
aXJ.wxXCkey=1
_(r,lWJ)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oNK=_v()
_(r,oNK)
if(_oz(z,0,e,s,gg)){oNK.wxVkey=1
var lOK=_n('view')
_rz(z,lOK,'class',1,e,s,gg)
var tQK=_n('view')
_rz(z,tQK,'class',2,e,s,gg)
var eRK=_oz(z,3,e,s,gg)
_(tQK,eRK)
_(lOK,tQK)
var aPK=_v()
_(lOK,aPK)
if(_oz(z,4,e,s,gg)){aPK.wxVkey=1
var bSK=_n('view')
_rz(z,bSK,'class',5,e,s,gg)
var oTK=_n('view')
var xUK=_oz(z,6,e,s,gg)
_(oTK,xUK)
_(bSK,oTK)
_(aPK,bSK)
}
var oVK=_mz(z,'navigator',['class',7,'url',1],[],e,s,gg)
var fWK=_n('view')
var cXK=_oz(z,9,e,s,gg)
_(fWK,cXK)
_(oVK,fWK)
var hYK=_n('view')
_rz(z,hYK,'class',10,e,s,gg)
_(oVK,hYK)
_(lOK,oVK)
var oZK=_n('view')
_rz(z,oZK,'class',11,e,s,gg)
var c1K=_v()
_(oZK,c1K)
var o2K=function(a4K,l3K,t5K,gg){
var b7K=_v()
_(t5K,b7K)
if(_oz(z,16,a4K,l3K,gg)){b7K.wxVkey=1
var o8K=_mz(z,'navigator',['class',17,'url',1],[],a4K,l3K,gg)
var x9K=_n('view')
_rz(z,x9K,'class',19,a4K,l3K,gg)
var fAL=_mz(z,'image',['alt',-1,'src',20],[],a4K,l3K,gg)
_(x9K,fAL)
var o0K=_v()
_(x9K,o0K)
if(_oz(z,21,a4K,l3K,gg)){o0K.wxVkey=1
var cBL=_n('view')
_rz(z,cBL,'class',22,a4K,l3K,gg)
_(o0K,cBL)
}
o0K.wxXCkey=1
_(o8K,x9K)
var hCL=_n('view')
_rz(z,hCL,'class',23,a4K,l3K,gg)
var oDL=_n('view')
_rz(z,oDL,'class',24,a4K,l3K,gg)
var cEL=_n('view')
var oFL=_oz(z,25,a4K,l3K,gg)
_(cEL,oFL)
_(oDL,cEL)
_(hCL,oDL)
var lGL=_n('view')
_rz(z,lGL,'class',26,a4K,l3K,gg)
var aHL=_oz(z,27,a4K,l3K,gg)
_(lGL,aHL)
_(hCL,lGL)
var tIL=_n('view')
_rz(z,tIL,'class',28,a4K,l3K,gg)
var eJL=_n('view')
_rz(z,eJL,'class',29,a4K,l3K,gg)
var bKL=_n('view')
_rz(z,bKL,'class',30,a4K,l3K,gg)
_(eJL,bKL)
var oLL=_n('view')
var xML=_oz(z,31,a4K,l3K,gg)
_(oLL,xML)
_(eJL,oLL)
_(tIL,eJL)
var oNL=_n('view')
_rz(z,oNL,'class',32,a4K,l3K,gg)
var fOL=_n('view')
_rz(z,fOL,'class',33,a4K,l3K,gg)
var cPL=_oz(z,34,a4K,l3K,gg)
_(fOL,cPL)
_(oNL,fOL)
_(tIL,oNL)
var hQL=_n('view')
_rz(z,hQL,'class',35,a4K,l3K,gg)
var cSL=_n('view')
var oTL=_oz(z,36,a4K,l3K,gg)
_(cSL,oTL)
_(hQL,cSL)
var lUL=_n('view')
var aVL=_oz(z,37,a4K,l3K,gg)
_(lUL,aVL)
_(hQL,lUL)
var oRL=_v()
_(hQL,oRL)
if(_oz(z,38,a4K,l3K,gg)){oRL.wxVkey=1
var tWL=_n('view')
var eXL=_oz(z,39,a4K,l3K,gg)
_(tWL,eXL)
_(oRL,tWL)
}
oRL.wxXCkey=1
_(tIL,hQL)
_(hCL,tIL)
_(o8K,hCL)
_(b7K,o8K)
}
b7K.wxXCkey=1
return t5K
}
c1K.wxXCkey=2
_2z(z,14,o2K,e,s,gg,c1K,'item','index2','index2')
_(lOK,oZK)
aPK.wxXCkey=1
_(oNK,lOK)
}
oNK.wxXCkey=1
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var oZL=_n('view')
_rz(z,oZL,'class',0,e,s,gg)
var x1L=_mz(z,'view',['class',1,'id',1],[],e,s,gg)
var o2L=_n('view')
_rz(z,o2L,'class',3,e,s,gg)
var f3L=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var c4L=_oz(z,7,e,s,gg)
_(f3L,c4L)
_(o2L,f3L)
var h5L=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],e,s,gg)
var o6L=_oz(z,11,e,s,gg)
_(h5L,o6L)
_(o2L,h5L)
_(x1L,o2L)
_(oZL,x1L)
var c7L=_mz(z,'scroll-view',['class',12,'style',1],[],e,s,gg)
var o8L=_mz(z,'view',['class',14,'id',1],[],e,s,gg)
var l9L=_n('view')
_rz(z,l9L,'class',16,e,s,gg)
var a0L=_mz(z,'view',['class',17,'id',1,'style',2],[],e,s,gg)
var tAM=_mz(z,'scroll-view',['scrollY',-1,'class',20,'style',1],[],e,s,gg)
var eBM=_v()
_(tAM,eBM)
var bCM=function(xEM,oDM,oFM,gg){
var cHM=_v()
_(oFM,cHM)
if(_oz(z,26,xEM,oDM,gg)){cHM.wxVkey=1
var hIM=_v()
_(cHM,hIM)
if(_oz(z,27,xEM,oDM,gg)){hIM.wxVkey=1
var oJM=_mz(z,'view',['bindtap',28,'class',1,'data-event-opts',2],[],xEM,oDM,gg)
var cKM=_n('view')
_rz(z,cKM,'class',31,xEM,oDM,gg)
var oLM=_oz(z,32,xEM,oDM,gg)
_(cKM,oLM)
_(oJM,cKM)
_(hIM,oJM)
}
hIM.wxXCkey=1
}
cHM.wxXCkey=1
return oFM
}
eBM.wxXCkey=2
_2z(z,24,bCM,e,s,gg,eBM,'item','index','index')
var lMM=_v()
_(tAM,lMM)
var aNM=function(ePM,tOM,bQM,gg){
var xSM=_v()
_(bQM,xSM)
if(_oz(z,37,ePM,tOM,gg)){xSM.wxVkey=1
var oTM=_v()
_(xSM,oTM)
if(_oz(z,38,ePM,tOM,gg)){oTM.wxVkey=1
var fUM=_mz(z,'view',['bindtap',39,'class',1,'data-event-opts',2],[],ePM,tOM,gg)
var cVM=_n('view')
_rz(z,cVM,'class',42,ePM,tOM,gg)
var hWM=_oz(z,43,ePM,tOM,gg)
_(cVM,hWM)
_(fUM,cVM)
_(oTM,fUM)
}
oTM.wxXCkey=1
}
xSM.wxXCkey=1
return bQM
}
lMM.wxXCkey=2
_2z(z,35,aNM,e,s,gg,lMM,'item','index','index')
_(a0L,tAM)
_(l9L,a0L)
var oXM=_mz(z,'scroll-view',['scrollY',-1,'class',44,'style',1],[],e,s,gg)
var cYM=_n('view')
_rz(z,cYM,'class',46,e,s,gg)
var oZM=_v()
_(cYM,oZM)
var l1M=function(t3M,a2M,e4M,gg){
var o6M=_mz(z,'navigator',['class',51,'url',1],[],t3M,a2M,gg)
var x7M=_mz(z,'image',['alt',-1,'class',53,'src',1],[],t3M,a2M,gg)
_(o6M,x7M)
var o8M=_n('view')
_rz(z,o8M,'class',55,t3M,a2M,gg)
var f9M=_n('view')
_rz(z,f9M,'class',56,t3M,a2M,gg)
var c0M=_n('view')
var hAN=_oz(z,57,t3M,a2M,gg)
_(c0M,hAN)
_(f9M,c0M)
_(o8M,f9M)
var oBN=_n('view')
_rz(z,oBN,'class',58,t3M,a2M,gg)
var cCN=_oz(z,59,t3M,a2M,gg)
_(oBN,cCN)
_(o8M,oBN)
var oDN=_n('view')
_rz(z,oDN,'class',60,t3M,a2M,gg)
var lEN=_n('view')
_rz(z,lEN,'class',61,t3M,a2M,gg)
var aFN=_n('view')
_rz(z,aFN,'class',62,t3M,a2M,gg)
var tGN=_oz(z,63,t3M,a2M,gg)
_(aFN,tGN)
_(lEN,aFN)
var eHN=_n('view')
var bIN=_oz(z,64,t3M,a2M,gg)
_(eHN,bIN)
_(lEN,eHN)
_(oDN,lEN)
var oJN=_n('view')
_rz(z,oJN,'class',65,t3M,a2M,gg)
var xKN=_n('view')
_rz(z,xKN,'class',66,t3M,a2M,gg)
var oLN=_oz(z,67,t3M,a2M,gg)
_(xKN,oLN)
_(oJN,xKN)
var fMN=_n('view')
var cNN=_oz(z,68,t3M,a2M,gg)
_(fMN,cNN)
_(oJN,fMN)
_(oDN,oJN)
_(o8M,oDN)
_(o6M,o8M)
_(e4M,o6M)
return e4M
}
oZM.wxXCkey=2
_2z(z,49,l1M,e,s,gg,oZM,'item','index','index')
_(oXM,cYM)
_(l9L,oXM)
_(o8L,l9L)
_(c7L,o8L)
_(oZL,c7L)
_(r,oZL)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var oPN=_n('view')
_rz(z,oPN,'class',0,e,s,gg)
var oRN=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
_(oPN,oRN)
var lSN=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var aTN=_n('view')
_rz(z,aTN,'style',5,e,s,gg)
_(lSN,aTN)
var tUN=_n('view')
_rz(z,tUN,'style',6,e,s,gg)
_(lSN,tUN)
var eVN=_mz(z,'view',['class',7,'style',1],[],e,s,gg)
var bWN=_mz(z,'image',['bindtap',9,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(eVN,bWN)
var oXN=_n('text')
_rz(z,oXN,'style',13,e,s,gg)
var xYN=_oz(z,14,e,s,gg)
_(oXN,xYN)
_(eVN,oXN)
_(lSN,eVN)
_(oPN,lSN)
var oZN=_mz(z,'view',['class',15,'style',1],[],e,s,gg)
var f1N=_n('view')
_rz(z,f1N,'style',17,e,s,gg)
var c2N=_n('view')
_rz(z,c2N,'style',18,e,s,gg)
var h3N=_n('view')
_rz(z,h3N,'style',19,e,s,gg)
var o4N=_oz(z,20,e,s,gg)
_(h3N,o4N)
_(c2N,h3N)
var c5N=_n('view')
_rz(z,c5N,'style',21,e,s,gg)
var o6N=_mz(z,'slider',['activeColor',22,'backgroundColor',1,'bindchange',2,'bindchanging',3,'blockColor',4,'blockSize',5,'data-event-opts',6,'max',7,'min',8,'style',9,'value',10],[],e,s,gg)
_(c5N,o6N)
_(c2N,c5N)
_(f1N,c2N)
var l7N=_n('view')
_rz(z,l7N,'style',33,e,s,gg)
var a8N=_n('view')
_rz(z,a8N,'style',34,e,s,gg)
var t9N=_oz(z,35,e,s,gg)
_(a8N,t9N)
_(l7N,a8N)
var e0N=_n('view')
_rz(z,e0N,'style',36,e,s,gg)
var bAO=_mz(z,'slider',['activeColor',37,'backgroundColor',1,'bindchange',2,'bindchanging',3,'blockColor',4,'blockSize',5,'data-event-opts',6,'max',7,'min',8,'style',9,'value',10],[],e,s,gg)
_(e0N,bAO)
_(l7N,e0N)
_(f1N,l7N)
_(oZN,f1N)
var oBO=_n('view')
_rz(z,oBO,'style',48,e,s,gg)
var xCO=_n('view')
_rz(z,xCO,'style',49,e,s,gg)
var oDO=_oz(z,50,e,s,gg)
_(xCO,oDO)
_(oBO,xCO)
var fEO=_n('view')
_rz(z,fEO,'style',51,e,s,gg)
var cFO=_v()
_(fEO,cFO)
var hGO=function(cIO,oHO,oJO,gg){
var aLO=_v()
_(oJO,aLO)
if(_oz(z,56,cIO,oHO,gg)){aLO.wxVkey=1
var tMO=_mz(z,'view',['bindtap',57,'class',1,'data-event-opts',2,'style',3],[],cIO,oHO,gg)
_(aLO,tMO)
}
aLO.wxXCkey=1
return oJO
}
cFO.wxXCkey=2
_2z(z,54,hGO,e,s,gg,cFO,'item','index','name')
_(oBO,fEO)
_(oZN,oBO)
var eNO=_mz(z,'view',['class',61,'style',1],[],e,s,gg)
var bOO=_mz(z,'view',['bindtap',63,'data-event-opts',1],[],e,s,gg)
var oPO=_n('view')
var xQO=_n('text')
_rz(z,xQO,'class',65,e,s,gg)
var oRO=_oz(z,66,e,s,gg)
_(xQO,oRO)
_(oPO,xQO)
_(bOO,oPO)
var fSO=_n('view')
var cTO=_oz(z,67,e,s,gg)
_(fSO,cTO)
_(bOO,fSO)
_(eNO,bOO)
var hUO=_mz(z,'view',['bindtap',68,'data-event-opts',1],[],e,s,gg)
var oVO=_n('view')
var cWO=_n('text')
_rz(z,cWO,'class',70,e,s,gg)
var oXO=_oz(z,71,e,s,gg)
_(cWO,oXO)
_(oVO,cWO)
_(hUO,oVO)
var lYO=_n('view')
var aZO=_oz(z,72,e,s,gg)
_(lYO,aZO)
_(hUO,lYO)
_(eNO,hUO)
var t1O=_mz(z,'view',['bindtap',73,'data-event-opts',1,'style',2],[],e,s,gg)
var e2O=_n('view')
var b3O=_n('text')
_rz(z,b3O,'class',76,e,s,gg)
var o4O=_oz(z,77,e,s,gg)
_(b3O,o4O)
_(e2O,b3O)
_(t1O,e2O)
var x5O=_n('view')
var o6O=_oz(z,78,e,s,gg)
_(x5O,o6O)
_(t1O,x5O)
_(eNO,t1O)
_(oZN,eNO)
_(oPN,oZN)
var f7O=_mz(z,'view',['class',79,'style',1],[],e,s,gg)
var c8O=_n('view')
_rz(z,c8O,'style',81,e,s,gg)
var h9O=_n('view')
_rz(z,h9O,'style',82,e,s,gg)
var o0O=_n('text')
var cAP=_oz(z,83,e,s,gg)
_(o0O,cAP)
_(h9O,o0O)
_(c8O,h9O)
var oBP=_n('view')
_rz(z,oBP,'style',84,e,s,gg)
var lCP=_mz(z,'text',['class',85,'style',1],[],e,s,gg)
var aDP=_mz(z,'text',['class',87,'style',1],[],e,s,gg)
var tEP=_mz(z,'text',['class',89,'style',1],[],e,s,gg)
_(aDP,tEP)
_(lCP,aDP)
_(oBP,lCP)
_(c8O,oBP)
_(f7O,c8O)
var eFP=_n('view')
_rz(z,eFP,'style',91,e,s,gg)
var bGP=_n('view')
_rz(z,bGP,'style',92,e,s,gg)
var oHP=_oz(z,93,e,s,gg)
_(bGP,oHP)
_(eFP,bGP)
var xIP=_n('view')
_rz(z,xIP,'style',94,e,s,gg)
var oJP=_oz(z,95,e,s,gg)
_(xIP,oJP)
_(eFP,xIP)
_(f7O,eFP)
_(oPN,f7O)
var fKP=_mz(z,'scroll-view',['bindscrolltolower',96,'data-event-opts',1,'scrollTop',2,'scrollY',3,'style',4],[],e,s,gg)
var cLP=_mz(z,'view',['bindtap',101,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var hMP=_n('rich-text')
_rz(z,hMP,'nodes',105,e,s,gg)
_(cLP,hMP)
_(fKP,cLP)
_(oPN,fKP)
var cQN=_v()
_(oPN,cQN)
if(_oz(z,106,e,s,gg)){cQN.wxVkey=1
var oNP=_mz(z,'view',['class',107,'style',1],[],e,s,gg)
var cOP=_mz(z,'view',['class',109,'style',1],[],e,s,gg)
var oPP=_n('view')
_rz(z,oPP,'style',111,e,s,gg)
_(cOP,oPP)
var lQP=_n('view')
_rz(z,lQP,'style',112,e,s,gg)
_(cOP,lQP)
var aRP=_mz(z,'view',['class',113,'style',1],[],e,s,gg)
var tSP=_mz(z,'image',['bindtap',115,'class',1,'data-event-opts',2,'src',3],[],e,s,gg)
_(aRP,tSP)
var eTP=_n('text')
_rz(z,eTP,'style',119,e,s,gg)
var bUP=_oz(z,120,e,s,gg)
_(eTP,bUP)
_(aRP,eTP)
_(cOP,aRP)
_(oNP,cOP)
var oVP=_mz(z,'uni-list',['bind:__l',121,'vueId',1,'vueSlots',2],[],e,s,gg)
var xWP=_v()
_(oVP,xWP)
var oXP=function(cZP,fYP,h1P,gg){
var c3P=_mz(z,'uni-list-item',['bind:__l',127,'bind:click',1,'data-event-opts',2,'title',3,'vueId',4],[],cZP,fYP,gg)
_(h1P,c3P)
return h1P
}
xWP.wxXCkey=4
_2z(z,126,oXP,e,s,gg,xWP,'item','index','')
_(oNP,oVP)
_(cQN,oNP)
}
cQN.wxXCkey=1
cQN.wxXCkey=3
_(r,oPN)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var l5P=_n('view')
_(r,l5P)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var usingStyleSheetManager = !!window.__styleSheetManager__
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[".",[1],"page-explore-wrapper { background: #fff; }\n.",[1],"page-explore-wrapper .",[1],"search-input { padding: ",[0,30]," ",[0,30],"; }\n.",[1],"page-explore-wrapper .",[1],"search-input wx-navigator { height: ",[0,72],"; background: #ebebf0; border-radius: ",[0,20],"; padding-left: ",[0,60],"; background-image: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/search.png\x27); background-repeat: no-repeat; background-size: ",[0,22]," ",[0,22],"; background-position: ",[0,20]," center; font-size: ",[0,34],"; line-height: ",[0,72],"; color: #d5d5db; }\n.",[1],"page-explore-wrapper .",[1],"explore-banner { width: 100%; height: ",[0,280],"; margin-bottom: ",[0,40],"; margin-top: ",[0,10],"; }\n.",[1],"page-explore-wrapper .",[1],"explore-banner .",[1],"explore-banner-item .",[1],"banner-navigator { height: ",[0,280],"; margin: 0 ",[0,10],"; }\n.",[1],"page-explore-wrapper .",[1],"explore-banner .",[1],"explore-banner-item .",[1],"banner-img { width: 100%; height: ",[0,280],"; }\n.",[1],"page-explore-wrapper .",[1],"explore-entrance { display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; padding-bottom: ",[0,40],"; -webkit-justify-content: space-around; justify-content: space-around; text-align: center; font-size: ",[0,24],"; color: #a3a3a3; }\n.",[1],"page-explore-wrapper .",[1],"explore-entrance .",[1],"entrance-img { width: ",[0,100],"; height: ",[0,100],"; margin-bottom: ",[0,10],"; }\n.",[1],"page-explore-wrapper .",[1],"explore-entrance .",[1],"nav-1 { background: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/nav-1.png\x27); background-size: 100% 100%; }\n.",[1],"page-explore-wrapper .",[1],"explore-entrance .",[1],"nav-2 { background: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/nav-2.png\x27); background-size: 100% 100%; }\n.",[1],"page-explore-wrapper .",[1],"explore-entrance .",[1],"nav-3 { background: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/nav-3.png\x27); background-size: 100% 100%; }\n.",[1],"page-explore-wrapper .",[1],"explore-entrance .",[1],"nav-4 { background: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/nav-4.png\x27); background-size: 100% 100%; }\n.",[1],"page-explore-wrapper .",[1],"explore-recommended { overflow: hidden; width: 100%; }\n.",[1],"page-explore-wrapper .",[1],"addToTheDesktop { position: fixed; display: -webkit-box; display: -webkit-flex; display: flex; bottom: ",[0,80],"; right: 0; width: ",[0,196],"; height: ",[0,70],"; background: rgba(0, 0, 0, 0.5); border-radius: ",[0,35]," 0 0 ",[0,35],"; font-size: ",[0,24],"; color: #fff; text-align: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"page-explore-wrapper .",[1],"addToTheDesktop .",[1],"_i { display: inline-block; vertical-align: middle; width: ",[0,30],"; height: ",[0,30],"; background: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/addToTheDesktop.png\x27); background-size: 100% 100%; margin-right: ",[0,8],"; }\n.",[1],"page-explore-wrapper .",[1],"addToTheDesktopBg { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); }\n.",[1],"page-explore-wrapper .",[1],"addToTheDesktopBg .",[1],"tip { position: absolute; top: 0; right: 8%; width: ",[0,416],"; height: ",[0,216],"; background: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/addToTheDesktopBg.png\x27); background-size: 100% 100%; }\n.",[1],"mb20 { margin-bottom: ",[0,20],"; }\n.",[1],"mb40 { margin-bottom: ",[0,40],"; }\n.",[1],"c-book-recommend-section { position: relative; width: 100%; }\n.",[1],"c-book-recommend-section .",[1],"title { width: 100%; height: ",[0,60],"; padding: 0 ",[0,30],"; line-height: ",[0,60],"; font-size: ",[0,44],"; overflow: hidden; }\n.",[1],"c-book-recommend-section .",[1],"sub-title { width: 100%; height: ",[0,32],"; padding: 0 ",[0,30],"; line-height: ",[0,32],"; font-size: ",[0,22],"; color: #9B9BA3; }\n.",[1],"c-book-recommend-section .",[1],"more { position: absolute; top: ",[0,60],"; right: ",[0,24],"; height: ",[0,32],"; line-height: ",[0,32],"; color: #9B9BA3; overflow: hidden; font-size: 0; }\n.",[1],"c-book-recommend-section .",[1],"more wx-view { width: auto; display: inline-block; vertical-align: middle; height: ",[0,32],"; line-height: ",[0,32],"; font-size: ",[0,22],"; }\n.",[1],"c-book-recommend-section .",[1],"more .",[1],"arrow { display: inline-block; vertical-align: middle; width: ",[0,22],"; height: ",[0,32],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEeklEQVR4XuWbz4scRRTH37dnZjcquhuFgB6iJIrmoBcPHkIMm1XM4g/EHwOLO73sTNcMexLPktVg/oDgwXWnZ1bp3mVhEPyJipAfqyeRFQxiAgoKQggEZRcxiclMv1DpCQRJunp6unuaqb7Wq6rv+3RVdderV6A+Htt2n2bmEhHGAD4mhPluH80NpCqi9mrb7hwRLd9Yn5l+GB31pmZnZ/+K2m7a9SIBaDbdhz2PztxMLDOfKRQ6E3Nzc+fSdiZKf5EA2LZzhAhv3rpD/j2XK+wvl6f/jCIqzTqRANTrzgKAwwqhZ9vt/N75+ek/0nSo174iAVheXt3V6XROEeGO4A75PEAHLMv8uVdhadlHAiDFNRruQWb6SiWUmbYAY1KI1zZUtoMojwxAirVt5wAzvgDoNsVI+NfzaLJWM78fhJNBffYFQDa8tOQ8AeAbgO4K6oiZLgL8nBDm8SxB6BuAD2HlUcPwviXCeDAEvmIYeMGySl9nBUIsALrTYQ8znQSwQzES2gCmhZj5KAsQYgMgnVlcXHsgl7uyDmCnwjkmoooQpQ8GDSFWAP50cO8FaB2gh1TOMfN8tWq+r7JLsjx2AP4nsnU386UTRHhMJZ6ZD1Wr5hGVXVLliQCQYpvN5p2eN3KCiB5Xi+ejQphvqO3it0gMgD8dPr/dMDblir9PJZ2Zl6tVs6Kyi7s8UQBSbKvVGtnc/O8TgKZU4plpVYiZEgC5SKbyJA6gCyG3tXVpjQivqr3iT8fGtr1cLBY7atv+LVIBcF1mve40AZRVsuUeY3x89MVisXhZZdtveaoApFjbdt8jovkQwr/zvPGDtdrzF0LYRjZJHUAXwttE9FYI1RuGcXmiUqn8E8I2kslAAEil9br7OkBH1ar5FLBtwrKKf6tte7cYGIDuSJCB1SYRBepgpl/z+dG95XLxfO8uBtcYKAAfwsorzLwGUD5YajJxxoEDkE7L6JLn8WcACoo3fBag/ZZV+i2ukZAJAP5ICB1dkmcO+4QwT8cBITMApDNho0tEvOl5mKzVSj/2CyFTAHwI16JLcid5j2JNiCXOmDkA3TXhQWZaJ6L7giDEEWfMJIDudNhpGJDb6V2qYQ7gKcuaOaayu1l5ZgH4EGR0iY8DeEQxHc553vbdUX6bMw3Anw5ho0v8rBDml72OgqEBwIyXqtWZj4cKwOKisyOfp5NE2BO8GPKFQqGzO8qRfGZHwNKS08MiSFNRD1syCaDRcPX9DGr9I6T1r7DWmyGtt8NaB0S6uYZ6hsS0DoratqtvWFzrgxFtj8ZarZa+h6NaH49rnSChdYpM+DDWtTDHghCld3qN5MRlH3s8QOs0Oa0TJW3b0TdVVutk6bBRnDiOseJa+G5sp69FsIcoTiwHmZkCoPWVGX+1b/+kuiVCNKSXpmzblSluck8f9Azvtbl63TkMYOHW3ieT0JSZNSD46iz9Uii0J6Oc0yXhoKrNyF+BRmNllpk//F8HGyMj3jNDf3n6utONxuqTzF6Fme8H6LQQZpgcYNVLSbX8Kr2QQF+sLrzTAAAAAElFTkSuQmCC) center right no-repeat; background-size: ",[0,20],"; }\n.",[1],"c-book-recommend-section .",[1],"more.",[1],"null-sub-title { top: ",[0,14],"; }\n.",[1],"c-book-recommend-section .",[1],"content { padding: ",[0,20]," 0; }\n.",[1],"c-book-recommend-section:after { content: \x22\x22; display: block; left: 0; bottom: 0; height: 0; margin: ",[0,20]," ",[0,30]," 0 ",[0,30],"; }\n.",[1],"c-book-recommend-section:last-child:after { border-color: transparent; }\n.",[1],"c-book-fullTextRecommended wx-navigator { display: block; height: ",[0,240],"; padding: 0 ",[0,30],"; padding-top: ",[0,20],"; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"cover { position: relative; float: left; width: ",[0,150],"; height: ",[0,200],"; margin-right: ",[0,-175],"; box-shadow: 0 ",[0,2]," ",[0,6]," rgba(0,0,0,0.3); border-radius: ",[0,4],"; background: #fff url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/default-cover.png\x27) center center no-repeat; background-size: cover; overflow: hidden; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"cover wx-image { width: 100%; height: 100%; border-radius: ",[0,4],"; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"cover .",[1],"is-vip { position: absolute; right: ",[0,6],"; top: ",[0,8],"; width: ",[0,40],"; height: ",[0,22],"; background: transparent url(data:image/png;base64,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\x3d\x3d) center center no-repeat; background-size: cover; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"right { height: ",[0,220],"; margin-left: ",[0,175],"; overflow: hidden; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"right .",[1],"name { height: ",[0,46],"; margin-bottom: ",[0,20],"; font-weight: 400; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"right .",[1],"name wx-view { display: inline-block; vertical-align: middle; max-width: 80%; height: 100%; line-height: ",[0,46],"; color: #333; font-weight: bold; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; font-size: ",[0,32],"; overflow: hidden; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"right .",[1],"desc { line-height: ",[0,36],"; margin-bottom: ",[0,22],"; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; word-break: break-all; text-overflow: ellipsis; overflow: hidden; color: #8a8a8a; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"right .",[1],"sku { position: relative; height: ",[0,36],"; line-height: ",[0,36],"; color: #8a8a8a; overflow: hidden; font-size: 0; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"right .",[1],"sku wx-view { font-style: normal; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"right .",[1],"sku wx-view { display: inline-block; vertical-align: middle; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"right .",[1],"sku .",[1],"author { max-width: 30%; margin-right: ",[0,20],"; overflow: hidden; font-size: 0; white-space: nowrap; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"right .",[1],"sku .",[1],"author wx-view { max-width: 80%; display: inline-block; vertical-align: middle; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; font-size: ",[0,22],"; height: ",[0,22],"; line-height: ",[0,24],"; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"right .",[1],"sku .",[1],"author .",[1],"person-icon { width: ",[0,22],"; height: ",[0,22],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD30lEQVR4Xu2bwVUcMQxAJQ/3QAXZVBBSAVBBmGdzDlQAVEBSAXSQ5Yz9BiqAVBCoIFBBNndmlCfizdtHYMYzls1uWF/XI8vfsmxLWoRX3vCVzx+WAJYWkJFAVVXrdV1vIOIqEW36oSeIeE1Et0VRXJRlOcmoUvotUFXVatM0+wCwCwCjrskR0TUAnBhjTrv6Svye1AdYa/cR8TMArPZVloiuiqI4LMuSgSRrSQD4VT/2qx6r/J7Wehwr5LnvxQHw5Ou6vkTEdUGlx1rrPUF5f0WJA7DWVoi4nUDZJJYgCsA5x/v9KMHkH0Q2TbO1s7NzJSlfDEBVVaOmab4PcXihE2LHaIzZCu0f0k8MgLV2jIifQgaN6UNEpTHmPEbG7LciALzX/ymlVJscIrowxoj5GBEA1tptRKxyAOAxlFJrUjdGKQAniMi3vSxN0hmKAHDOsWfeyDL7P4Mcaq1PJMZbVABftNZ85Ea3JYBohADwAltgviwg1x1guljz6AT5rf9VwppCZMzdMZjzIgQAN1prsZemiBPkVcvoB8SOQNZbDMDZ2dmmUuoyxIQj+txprTvDan3kiwHgQTM4Q/GYgCgA7wv4Vvi+zyqE9CWiU2MMO1vRJgqANfOh7ytEfCOo6Tet9TSMLihW0AfMasUQmqbhQGa0JfDKF0VxIPX6e0xP3AKmA/jgKAdJPg5ZMiL6xSF1qUfPczokAzAd0J8O/HAJfi2mXvVZGMkBzFgExwy3OSXmU2Pr3k/cAcAtp8YA4LwoiqtU5v6UFWQDMGQb5PhmCSAH5XkeY2kBKVeHkyVE9DZmDES8K8uSHWSSJmoBPOG6rvnc3xVOjgIRcTKEU+ZcRCEGRAQAn/WIeISISa6rj5desnYgCoC/9x/nmvgTe2CslOIiisFlNYMB+GwQh8F6V38Ib+aJUmpraCXJIADOOU6Bi8TlBWEMihX0BpC6BiASSG8IvQA457JGf4fAUEp96LMdggH4Nz4XQMx7Y5/AEIKOymAA1loufMpyzMUS7hM+CwKQO/8fC4C/D90KQQCccz9CqjwlFJeSEVpP1Alggfb+P+xCUmidAKy1Was/pCzAy+k8FjsBLKL5TyGGFFSFACDhVckpbqK1XmsbsBXAIu//6aS11q1zbP0xU8IzqUUopd61XYr+ewBd1SRLAG325wug+RK0sC3KB/CsnXMHAMD//ljEFn8P4Fn7mB8/hbkmWDLtnQLqDafYlFLjkBdh5z3gsYa8Le7v70dKKS5UegiHEdEIEUVLV9rIENHDX+1mLjz8t7vJysrKdd/4YG8AKZbsJWUuAbwk/XkY+9VbwG9isapQhtUBqwAAAABJRU5ErkJggg\x3d\x3d) top left no-repeat; background-size: cover; margin-right: ",[0,6],"; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"right .",[1],"sku .",[1],"popularity { max-width: 30%; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; font-size: ",[0,22],"; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"right .",[1],"sku .",[1],"tag { position: absolute; top: 0; right: 0; height: ",[0,36],"; font-size: 0; }\n.",[1],"c-book-fullTextRecommended wx-navigator .",[1],"right .",[1],"sku .",[1],"tag wx-view { display: inline-block; vertical-align: middle; height: ",[0,36],"; margin-left: ",[0,10],"; padding: 0 ",[0,14],"; line-height: ",[0,36],"; color: #777; background: #EFEFF4; font-style: normal; font-size: ",[0,16],"; border-radius: ",[0,18],"; }\n.",[1],"c-book-fullTextRecommended wx-navigator:last-child .",[1],"right { border-bottom: none; }\n.",[1],"c-book-fullTextRecommended wx-navigator:active { background-color: #eee!important; }\n.",[1],"c-book-imageRecommended-4x { font-size: 0px; padding-left: ",[0,15],"!important; padding-right: ",[0,15],"!important; }\n.",[1],"c-book-imageRecommended-4x wx-navigator { position: relative; display: inline-block; vertical-align: top; width: 25%; padding: 0 ",[0,15],"; margin: ",[0,20]," 0; text-align: left; }\n.",[1],"c-book-imageRecommended-4x wx-navigator:active { opacity: 0.7; }\n.",[1],"c-book-imageRecommended-4x wx-navigator .",[1],"cover { position: relative; width: 100%; padding-top: 140%; box-shadow: 0 ",[0,2]," ",[0,6]," rgba(0,0,0,0.3); border-radius: ",[0,4],"; background: #fff url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/default-cover.png\x27) center center no-repeat; background-size: cover; }\n.",[1],"c-book-imageRecommended-4x wx-navigator .",[1],"cover wx-image { width: 100%; height: 100%; position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%,-50%); transform: translate(-50%,-50%); border-radius: ",[0,4],"; z-index: 10; }\n.",[1],"c-book-imageRecommended-4x wx-navigator .",[1],"cover .",[1],"discount-tip { position: absolute; width: 106%; height: ",[0,40],"; padding: ",[0,8]," 0; background: #FE6702; left: -3%; bottom: ",[0,20],"; border-radius: ",[0,2]," ",[0,2]," ",[0,2]," ",[0,2],"; z-index: 10; box-shadow: 0 ",[0,-4]," ",[0,6]," rgba(0,0,0,0.3); color: #fff; text-align: center; opacity: 0.9; }\n.",[1],"c-book-imageRecommended-4x wx-navigator .",[1],"cover .",[1],"discount-tip .",[1],"free { display: inline-block; vertical-align: middle; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAFMN540AAAAAXNSR0IArs4c6QAAA5BJREFUSA3NlktIVUEYx72lqaBoRaDQxkDcSC2qhdVCgyB6LCIKalEUlUaPhQQRSIsWtSywVUFghZC1qIhaBIXVTsRNKhLIbZFIBakESqmn33/uzPE8r5eLiz743e+b7zFz5nHmnpKSfOJ53i0/TsMLNmbUwFfpO30Db7ffkKFaKxuigXCmzc5aPRjNNo9AV5/gVShoK1zCAxIWYCSW5BwEjzm7cE1Vv7LRo6EqHPdCjlxSn+8j4TOchdtyokMLWimHJCm4GHS6JHVRBj0KSrBnc1bgF+fhQDPdJLEKvkAW1qVn2ghJZ0DSEE3GV28intcZjYWnTpTEPvgLszAZLKC9tEwKBB3YNXASumzsBPZG1wF2erEt0GOOwUfbnspX3ELiFKxySUma+CQcSIoZH8GdIOmAU8byvL2pBSsaYLQu0GrfTOs4Nj+SN4NWczSTyZSh36uNtKR1oq3KwA94kZSE/xFMQ2ksjlOyJhYIOIivUlLAZQ7ILnyXnNMloXW6RE0gdpS2eUHcnBX8qgQCtagFOAeXoQL2g5Mshuks9vwskg5KCfo+ehyttdCj9rpqp2PFNrBoC0Jn3hU57R7btY1msNUYQ/BMI6NL6eyQCQZ+XPE4vlb5SWqGP5gH4bV9gnnsNyBpA+UvCUlz0L7kiVvEj4M6MuJG1gJpVasJar51Nm4U7bW2qIm8tHXKlZA4BMOgozoAY8HOlrUpqIArUL1s8n+dwAy02N9AkoVe0DUn+Qnt4O9B0ZOhk1rohnnQu3UDEj4KzNHSv5WWdwa02T0Q2vC8D0Ky9uclSDSboq5M6nT96rBI+kHvebIQ1BHU+X4LepNigr8cnkBhf7X0QK62RKvQ4DqM7scOAuXQzdkP3XEU6a/6KbE5+A51tC/AdZC8w5cmdwhoInqTjeR/sWwSnWqvHsIe67podVC1aXQc9Tz0ZDCQZEdnnJSjG0IdHbHBDnQV3IVha6vtrp+CJlPQwHSqwadR2ooJOA2adSMMgFZCy98Kv2FZiQ7sLsSKaCWr2IxP/zaP4RpsAe25Ps10vWuZt8Mvcvehg+JeQdd/MJazKdIHqYq3uii2/lC1h+Zvzfml8a2HJssmdGipaTeCLp0J0CdCupCwDUZAMgha4oKFfF3yH0CiG253wcUukaJ60DeIRN8hnRCdlVZEH7r6jpE8B/+ddX0VrelMA5wHNwCmET3QVcj7DVT0wCtZ+A+I4VSO4S6f3QAAAABJRU5ErkJggg\x3d\x3d) center center no-repeat; background-size: cover; }\n.",[1],"c-book-imageRecommended-4x wx-navigator .",[1],"cover .",[1],"discount-tip .",[1],"zhekou { display: inline-block; vertical-align: middle; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAEFCu8CAAAAAXNSR0IArs4c6QAAAqJJREFUSA3tlT1oFFEUhXdWY6FBEhCLVEbRwiKNoGhAjFiJWAgWooXBn1YQlBARRQQLE0gVBS20sZEgGDtBFn9IESKioKgoRFARf0EiZsVZv/ty7/O92ZnsEqyCD87ec889977Zmdm3pVLeqtVqt+r0NE3Ra6t8gaTPJ3WEalri415UQbgYCZIgPgGjUQHhYSTMGLu8huGFJXJtxhtHOreBH6AtciNMi0A8rXFAoluIx4UQJyXanmVJWDZq30wafNLx3lJ4C+i13EWENnA7Ev9ZwuSqPrw++A5wTfObuZtg6LZvZwa08YAvyNZdDdM02BwYe7JG6q/BHvNY45qsUQoYO8ENsDSv7odgeCsG1ig4ByY17/emeUD4XsPgM3gFDjb8SmLSG/EAvhscBt9Va80dgGGdGpaIgXyLGeG9UrM8itrUbSLmU8Ylkj8Dl0PN8exETNE5Qb4868lt1CuohDs01SgN7PIV7Fee+0qK6TfYK6Zwob2UnPgJnA1rjiN26OWtzhapXcq9TDNisEci59YQuKrDUvNYtBPJ5UmSTJTL5YTkEFgJkJK1IPI58/+POd8BHsgGMCYPZTbgkV/vETC3+0/jAdsA/ghsKrpqasvAhcB/h3xhkb9Ox1yRZtZj4E6D0IR2FFRCzTj6Se39Ba97583nI6ZBbbjvxQzBcx48zcg+pWbn3Uf47LcYwwfdcKefEBDq7eANkJ/8rqAUUWpfdM72sJC3e1UNi0JjwKfg8k8rG46AM0EtpC2a2Lyw9pcz4IRe2XO4nAKFi3oXeAeqoMeM8H6d4Q440wsjDVe0QZ7BikKjFvC0gsWSEq9rrxzF7Y16fR3zRjClzd/gx4Ab6k1K0LeCCfGqfyjraTpnkLwkg+CnDcyL1O+C9U0PnrfGPxolBLTMtFY9AAAAAElFTkSuQmCC) center center no-repeat; background-size: cover; }\n.",[1],"c-book-imageRecommended-4x wx-navigator .",[1],"cover .",[1],"discount-tip wx-view { display: inline-block; vertical-align: middle; font-size: ",[0,20],"; margin-left: ",[0,6],"; }\n.",[1],"c-book-imageRecommended-4x wx-navigator .",[1],"cover.",[1],"discount:before { content: \x22 \x22; width: 0; height: 0; position: absolute; bottom: ",[0,54],"; left: -3%; border-top: ",[0,6]," solid transparent; border-right: ",[0,6]," solid #C55307; border-bottom: ",[0,6]," solid transparent; opacity: 0.6; }\n.",[1],"c-book-imageRecommended-4x wx-navigator .",[1],"cover.",[1],"discount:after { content: \x22 \x22; width: 0; height: 0; position: absolute; bottom: ",[0,54],"; right: -3%; border-top: ",[0,6]," solid transparent; border-left: ",[0,6]," solid #C55307; border-bottom: ",[0,6]," solid transparent; opacity: 0.6; }\n.",[1],"c-book-imageRecommended-4x wx-navigator .",[1],"cover .",[1],"is-vip { position: absolute; right: ",[0,6],"; top: ",[0,8],"; width: ",[0,40],"; height: ",[0,22],"; background: transparent url(data:image/png;base64,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\x3d\x3d) center center no-repeat; background-size: cover; z-index: 11; }\n.",[1],"c-book-imageRecommended-4x wx-navigator .",[1],"book-name { display: block; max-height: ",[0,80],"; margin: ",[0,10]," 0; line-height: ",[0,35],"; font-size: ",[0,24],"; color: #333; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; word-break: break-all; text-overflow: ellipsis; overflow: hidden; font-weight: bold; }\n.",[1],"c-book-imageRecommended-4x wx-navigator .",[1],"book-author { display: block; height: ",[0,30],"; line-height: ",[0,30],"; font-size: ",[0,20],"; color: #8a8a8a; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; }\n.",[1],"c-book-imageRecommended-3x { font-size: 0px; }\n.",[1],"c-book-imageRecommended-3x wx-navigator { display: inline-block; vertical-align: top; width: 33.33%; margin: ",[0,20]," 0; padding: 0 ",[0,30],"; text-align: left; }\n.",[1],"c-book-imageRecommended-3x wx-navigator:active { opacity: 0.7; }\n.",[1],"c-book-imageRecommended-3x wx-navigator .",[1],"cover { position: relative; width: 100%; padding-top: 140%; box-shadow: ",[0,1]," ",[0,2]," ",[0,6]," rgba(0,0,0,0.3); box-shadow: 0 ",[0,2]," ",[0,6]," rgba(0,0,0,0.3); border-radius: ",[0,4],"; }\n.",[1],"c-book-imageRecommended-3x wx-navigator .",[1],"cover wx-image { width: 100%; height: 100%; position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%,-50%); transform: translate(-50%,-50%); border-radius: ",[0,4],"; }\n.",[1],"c-book-imageRecommended-3x wx-navigator .",[1],"cover .",[1],"discount-tip { position: absolute; width: 106%; height: ",[0,40],"; padding: ",[0,8]," 0; background: #FE6702; left: -3%; bottom: ",[0,20],"; border-radius: ",[0,2]," ",[0,2]," ",[0,2]," ",[0,2],"; z-index: 10; box-shadow: 0 ",[0,-4]," ",[0,6]," rgba(0,0,0,0.3); color: #fff; text-align: center; opacity: 0.9; }\n.",[1],"c-book-imageRecommended-3x wx-navigator .",[1],"cover .",[1],"discount-tip .",[1],"free { display: inline-block; vertical-align: middle; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAFMN540AAAAAXNSR0IArs4c6QAAA5BJREFUSA3NlktIVUEYx72lqaBoRaDQxkDcSC2qhdVCgyB6LCIKalEUlUaPhQQRSIsWtSywVUFghZC1qIhaBIXVTsRNKhLIbZFIBakESqmn33/uzPE8r5eLiz743e+b7zFz5nHmnpKSfOJ53i0/TsMLNmbUwFfpO30Db7ffkKFaKxuigXCmzc5aPRjNNo9AV5/gVShoK1zCAxIWYCSW5BwEjzm7cE1Vv7LRo6EqHPdCjlxSn+8j4TOchdtyokMLWimHJCm4GHS6JHVRBj0KSrBnc1bgF+fhQDPdJLEKvkAW1qVn2ghJZ0DSEE3GV28intcZjYWnTpTEPvgLszAZLKC9tEwKBB3YNXASumzsBPZG1wF2erEt0GOOwUfbnspX3ELiFKxySUma+CQcSIoZH8GdIOmAU8byvL2pBSsaYLQu0GrfTOs4Nj+SN4NWczSTyZSh36uNtKR1oq3KwA94kZSE/xFMQ2ksjlOyJhYIOIivUlLAZQ7ILnyXnNMloXW6RE0gdpS2eUHcnBX8qgQCtagFOAeXoQL2g5Mshuks9vwskg5KCfo+ehyttdCj9rpqp2PFNrBoC0Jn3hU57R7btY1msNUYQ/BMI6NL6eyQCQZ+XPE4vlb5SWqGP5gH4bV9gnnsNyBpA+UvCUlz0L7kiVvEj4M6MuJG1gJpVasJar51Nm4U7bW2qIm8tHXKlZA4BMOgozoAY8HOlrUpqIArUL1s8n+dwAy02N9AkoVe0DUn+Qnt4O9B0ZOhk1rohnnQu3UDEj4KzNHSv5WWdwa02T0Q2vC8D0Ky9uclSDSboq5M6nT96rBI+kHvebIQ1BHU+X4LepNigr8cnkBhf7X0QK62RKvQ4DqM7scOAuXQzdkP3XEU6a/6KbE5+A51tC/AdZC8w5cmdwhoInqTjeR/sWwSnWqvHsIe67podVC1aXQc9Tz0ZDCQZEdnnJSjG0IdHbHBDnQV3IVha6vtrp+CJlPQwHSqwadR2ooJOA2adSMMgFZCy98Kv2FZiQ7sLsSKaCWr2IxP/zaP4RpsAe25Ps10vWuZt8Mvcvehg+JeQdd/MJazKdIHqYq3uii2/lC1h+Zvzfml8a2HJssmdGipaTeCLp0J0CdCupCwDUZAMgha4oKFfF3yH0CiG253wcUukaJ60DeIRN8hnRCdlVZEH7r6jpE8B/+ddX0VrelMA5wHNwCmET3QVcj7DVT0wCtZ+A+I4VSO4S6f3QAAAABJRU5ErkJggg\x3d\x3d) center center no-repeat; background-size: cover; }\n.",[1],"c-book-imageRecommended-3x wx-navigator .",[1],"cover .",[1],"discount-tip .",[1],"zhekou { display: inline-block; vertical-align: middle; width: ",[0,24],"; height: ",[0,24],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAEFCu8CAAAAAXNSR0IArs4c6QAAAqJJREFUSA3tlT1oFFEUhXdWY6FBEhCLVEbRwiKNoGhAjFiJWAgWooXBn1YQlBARRQQLE0gVBS20sZEgGDtBFn9IESKioKgoRFARf0EiZsVZv/ty7/O92ZnsEqyCD87ec889977Zmdm3pVLeqtVqt+r0NE3Ra6t8gaTPJ3WEalri415UQbgYCZIgPgGjUQHhYSTMGLu8huGFJXJtxhtHOreBH6AtciNMi0A8rXFAoluIx4UQJyXanmVJWDZq30wafNLx3lJ4C+i13EWENnA7Ev9ZwuSqPrw++A5wTfObuZtg6LZvZwa08YAvyNZdDdM02BwYe7JG6q/BHvNY45qsUQoYO8ENsDSv7odgeCsG1ig4ByY17/emeUD4XsPgM3gFDjb8SmLSG/EAvhscBt9Va80dgGGdGpaIgXyLGeG9UrM8itrUbSLmU8Ylkj8Dl0PN8exETNE5Qb4868lt1CuohDs01SgN7PIV7Fee+0qK6TfYK6Zwob2UnPgJnA1rjiN26OWtzhapXcq9TDNisEci59YQuKrDUvNYtBPJ5UmSTJTL5YTkEFgJkJK1IPI58/+POd8BHsgGMCYPZTbgkV/vETC3+0/jAdsA/ghsKrpqasvAhcB/h3xhkb9Ox1yRZtZj4E6D0IR2FFRCzTj6Se39Ba97583nI6ZBbbjvxQzBcx48zcg+pWbn3Uf47LcYwwfdcKefEBDq7eANkJ/8rqAUUWpfdM72sJC3e1UNi0JjwKfg8k8rG46AM0EtpC2a2Lyw9pcz4IRe2XO4nAKFi3oXeAeqoMeM8H6d4Q440wsjDVe0QZ7BikKjFvC0gsWSEq9rrxzF7Y16fR3zRjClzd/gx4Ab6k1K0LeCCfGqfyjraTpnkLwkg+CnDcyL1O+C9U0PnrfGPxolBLTMtFY9AAAAAElFTkSuQmCC) center center no-repeat; background-size: cover; }\n.",[1],"c-book-imageRecommended-3x wx-navigator .",[1],"cover .",[1],"discount-tip wx-view { display: inline-block; vertical-align: middle; font-size: ",[0,20],"; margin-left: ",[0,6],"; }\n.",[1],"c-book-imageRecommended-3x wx-navigator .",[1],"cover.",[1],"discount:before { content: \x22 \x22; width: 0; height: 0; position: absolute; bottom: ",[0,54],"; left: -3%; border-top: ",[0,6]," solid transparent; border-right: ",[0,6]," solid #C55307; border-bottom: ",[0,6]," solid transparent; opacity: 0.6; }\n.",[1],"c-book-imageRecommended-3x wx-navigator .",[1],"cover.",[1],"discount:after { content: \x22 \x22; width: 0; height: 0; position: absolute; bottom: ",[0,54],"; right: -3%; border-top: ",[0,6]," solid transparent; border-left: ",[0,6]," solid #C55307; border-bottom: ",[0,6]," solid transparent; opacity: 0.6; }\n.",[1],"c-book-imageRecommended-3x wx-navigator .",[1],"cover .",[1],"is-vip { position: absolute; right: ",[0,6],"; top: ",[0,8],"; width: ",[0,40],"; height: ",[0,22],"; background: transparent url(data:image/png;base64,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\x3d\x3d) center center no-repeat; background-size: cover; z-index: 11; }\n.",[1],"c-book-imageRecommended-3x wx-navigator .",[1],"book-name { display: block; max-height: ",[0,80],"; margin: ",[0,20]," 0; line-height: ",[0,36],"; color: #333; font-size: ",[0,30],"; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; word-break: break-all; text-overflow: ellipsis; overflow: hidden; font-weight: bold; }\n.",[1],"c-book-imageRecommended-3x wx-navigator .",[1],"author { height: ",[0,30],"; line-height: ",[0,30],"; color: #8a8a8a; font-size: ",[0,20],"; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }\n.",[1],"c-book-coverTextRecommended .",[1],"sub-list { }\n.",[1],"c-book-coverTextRecommended .",[1],"sub-list wx-navigator { display: block; padding: 0 ",[0,30],"; }\n.",[1],"c-book-coverTextRecommended .",[1],"sub-list wx-navigator:active { background-color: #eee!important; }\n.",[1],"c-book-coverTextRecommended .",[1],"sub-list wx-navigator .",[1],"inner { padding: ",[0,30]," 0; }\n.",[1],"c-book-coverTextRecommended .",[1],"sub-list wx-navigator .",[1],"inner .",[1],"title { padding: 0; height: ",[0,44],"; margin-bottom: ",[0,10],"; line-height: ",[0,44],"; color: #333; font-weight: 400; font-size: ",[0,32],"; font-weight: bold; }\n.",[1],"c-book-coverTextRecommended .",[1],"sub-list wx-navigator .",[1],"inner .",[1],"sku { position: relative; height: ",[0,36],"; line-height: ",[0,36],"; margin-bottom: ",[0,18],"; color: #8a8a8a; font-size: 0; }\n.",[1],"c-book-coverTextRecommended .",[1],"sub-list wx-navigator .",[1],"inner .",[1],"sku wx-view { font-style: normal; }\n.",[1],"c-book-coverTextRecommended .",[1],"sub-list wx-navigator .",[1],"inner .",[1],"sku wx-view { display: inline-block; vertical-align: middle; }\n.",[1],"c-book-coverTextRecommended .",[1],"sub-list wx-navigator .",[1],"inner .",[1],"sku .",[1],"author { max-width: 30%; margin-right: ",[0,20],"; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; font-size: ",[0,22],"; }\n.",[1],"c-book-coverTextRecommended .",[1],"sub-list wx-navigator .",[1],"inner .",[1],"sku .",[1],"author wx-view { display: inline-block; vertical-align: middle; }\n.",[1],"c-book-coverTextRecommended .",[1],"sub-list wx-navigator .",[1],"inner .",[1],"sku .",[1],"author .",[1],"person-icon { width: ",[0,22],"; height: ",[0,22],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD30lEQVR4Xu2bwVUcMQxAJQ/3QAXZVBBSAVBBmGdzDlQAVEBSAXSQ5Yz9BiqAVBCoIFBBNndmlCfizdtHYMYzls1uWF/XI8vfsmxLWoRX3vCVzx+WAJYWkJFAVVXrdV1vIOIqEW36oSeIeE1Et0VRXJRlOcmoUvotUFXVatM0+wCwCwCjrskR0TUAnBhjTrv6Svye1AdYa/cR8TMArPZVloiuiqI4LMuSgSRrSQD4VT/2qx6r/J7Wehwr5LnvxQHw5Ou6vkTEdUGlx1rrPUF5f0WJA7DWVoi4nUDZJJYgCsA5x/v9KMHkH0Q2TbO1s7NzJSlfDEBVVaOmab4PcXihE2LHaIzZCu0f0k8MgLV2jIifQgaN6UNEpTHmPEbG7LciALzX/ymlVJscIrowxoj5GBEA1tptRKxyAOAxlFJrUjdGKQAniMi3vSxN0hmKAHDOsWfeyDL7P4Mcaq1PJMZbVABftNZ85Ea3JYBohADwAltgviwg1x1guljz6AT5rf9VwppCZMzdMZjzIgQAN1prsZemiBPkVcvoB8SOQNZbDMDZ2dmmUuoyxIQj+txprTvDan3kiwHgQTM4Q/GYgCgA7wv4Vvi+zyqE9CWiU2MMO1vRJgqANfOh7ytEfCOo6Tet9TSMLihW0AfMasUQmqbhQGa0JfDKF0VxIPX6e0xP3AKmA/jgKAdJPg5ZMiL6xSF1qUfPczokAzAd0J8O/HAJfi2mXvVZGMkBzFgExwy3OSXmU2Pr3k/cAcAtp8YA4LwoiqtU5v6UFWQDMGQb5PhmCSAH5XkeY2kBKVeHkyVE9DZmDES8K8uSHWSSJmoBPOG6rvnc3xVOjgIRcTKEU+ZcRCEGRAQAn/WIeISISa6rj5desnYgCoC/9x/nmvgTe2CslOIiisFlNYMB+GwQh8F6V38Ib+aJUmpraCXJIADOOU6Bi8TlBWEMihX0BpC6BiASSG8IvQA457JGf4fAUEp96LMdggH4Nz4XQMx7Y5/AEIKOymAA1loufMpyzMUS7hM+CwKQO/8fC4C/D90KQQCccz9CqjwlFJeSEVpP1Alggfb+P+xCUmidAKy1Was/pCzAy+k8FjsBLKL5TyGGFFSFACDhVckpbqK1XmsbsBXAIu//6aS11q1zbP0xU8IzqUUopd61XYr+ewBd1SRLAG325wug+RK0sC3KB/CsnXMHAMD//ljEFn8P4Fn7mB8/hbkmWDLtnQLqDafYlFLjkBdh5z3gsYa8Le7v70dKKS5UegiHEdEIEUVLV9rIENHDX+1mLjz8t7vJysrKdd/4YG8AKZbsJWUuAbwk/XkY+9VbwG9isapQhtUBqwAAAABJRU5ErkJggg\x3d\x3d) center left no-repeat; background-size: cover; margin-right: ",[0,6],"; }\n.",[1],"c-book-coverTextRecommended .",[1],"sub-list wx-navigator .",[1],"inner .",[1],"sku .",[1],"popularity { max-width: 30%; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; font-size: ",[0,22],"; }\n.",[1],"c-book-coverTextRecommended .",[1],"sub-list wx-navigator .",[1],"inner .",[1],"sku .",[1],"tag { position: absolute; top: 0; right: 0; height: ",[0,36],"; font-size: 0; }\n.",[1],"c-book-coverTextRecommended .",[1],"sub-list wx-navigator .",[1],"inner .",[1],"sku .",[1],"tag wx-view { display: inline-block; vertical-align: middle; height: ",[0,36],"; margin-left: ",[0,10],"; padding: 0 ",[0,14],"; line-height: ",[0,36],"; color: #777; background: #EFEFF4; font-style: normal; font-size: ",[0,16],"; border-radius: ",[0,18],"; }\n.",[1],"c-book-coverTextRecommended .",[1],"sub-list wx-navigator .",[1],"inner .",[1],"desc { line-height: ",[0,36],"; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; word-break: break-all; text-overflow: ellipsis; overflow: hidden; color: #8a8a8a; }\n.",[1],"c-booklist wx-navigator { display: block; height: ",[0,240],"; padding: 0 ",[0,30],"; padding-top: ",[0,20],"; }\n.",[1],"c-booklist wx-navigator .",[1],"cover { position: relative; float: left; width: ",[0,150],"; height: ",[0,200],"; margin-right: ",[0,-175],"; box-shadow: 0 ",[0,2]," ",[0,6]," rgba(0,0,0,0.3); border-radius: ",[0,4],"; background: #fff url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/default-cover.png\x27) center center no-repeat; background-size: cover; overflow: hidden; }\n.",[1],"c-booklist wx-navigator .",[1],"cover wx-image { width: 100%; height: 100%; border-radius: ",[0,4],"; }\n.",[1],"c-booklist wx-navigator .",[1],"cover .",[1],"is-vip { position: absolute; right: ",[0,6],"; top: ",[0,8],"; width: ",[0,40],"; height: ",[0,22],"; background: transparent url(data:image/png;base64,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\x3d\x3d) center center no-repeat; background-size: cover; }\n.",[1],"c-booklist wx-navigator .",[1],"right { height: ",[0,220],"; margin-left: ",[0,175],"; overflow: hidden; }\n.",[1],"c-booklist wx-navigator .",[1],"right .",[1],"name { height: ",[0,46],"; margin-bottom: ",[0,20],"; font-weight: 400; }\n.",[1],"c-booklist wx-navigator .",[1],"right .",[1],"name wx-view { display: inline-block; vertical-align: middle; max-width: 80%; height: 100%; line-height: ",[0,46],"; color: #333; font-weight: bold; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; font-size: ",[0,32],"; overflow: hidden; }\n.",[1],"c-booklist wx-navigator .",[1],"right .",[1],"desc { line-height: ",[0,36],"; margin-bottom: ",[0,22],"; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; word-break: break-all; text-overflow: ellipsis; overflow: hidden; color: #8a8a8a; }\n.",[1],"c-booklist wx-navigator .",[1],"right .",[1],"sku { position: relative; height: ",[0,36],"; line-height: ",[0,36],"; color: #8a8a8a; overflow: hidden; font-size: 0; }\n.",[1],"c-booklist wx-navigator .",[1],"right .",[1],"sku wx-view { font-style: normal; }\n.",[1],"c-booklist wx-navigator .",[1],"right .",[1],"sku wx-view { display: inline-block; vertical-align: middle; }\n.",[1],"c-booklist wx-navigator .",[1],"right .",[1],"sku .",[1],"author { max-width: 30%; margin-right: ",[0,20],"; overflow: hidden; font-size: 0; white-space: nowrap; }\n.",[1],"c-booklist wx-navigator .",[1],"right .",[1],"sku .",[1],"author wx-view { max-width: 80%; display: inline-block; vertical-align: middle; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; font-size: ",[0,22],"; height: ",[0,22],"; line-height: ",[0,24],"; }\n.",[1],"c-booklist wx-navigator .",[1],"right .",[1],"sku .",[1],"author .",[1],"person-icon { width: ",[0,22],"; height: ",[0,22],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD30lEQVR4Xu2bwVUcMQxAJQ/3QAXZVBBSAVBBmGdzDlQAVEBSAXSQ5Yz9BiqAVBCoIFBBNndmlCfizdtHYMYzls1uWF/XI8vfsmxLWoRX3vCVzx+WAJYWkJFAVVXrdV1vIOIqEW36oSeIeE1Et0VRXJRlOcmoUvotUFXVatM0+wCwCwCjrskR0TUAnBhjTrv6Svye1AdYa/cR8TMArPZVloiuiqI4LMuSgSRrSQD4VT/2qx6r/J7Wehwr5LnvxQHw5Ou6vkTEdUGlx1rrPUF5f0WJA7DWVoi4nUDZJJYgCsA5x/v9KMHkH0Q2TbO1s7NzJSlfDEBVVaOmab4PcXihE2LHaIzZCu0f0k8MgLV2jIifQgaN6UNEpTHmPEbG7LciALzX/ymlVJscIrowxoj5GBEA1tptRKxyAOAxlFJrUjdGKQAniMi3vSxN0hmKAHDOsWfeyDL7P4Mcaq1PJMZbVABftNZ85Ea3JYBohADwAltgviwg1x1guljz6AT5rf9VwppCZMzdMZjzIgQAN1prsZemiBPkVcvoB8SOQNZbDMDZ2dmmUuoyxIQj+txprTvDan3kiwHgQTM4Q/GYgCgA7wv4Vvi+zyqE9CWiU2MMO1vRJgqANfOh7ytEfCOo6Tet9TSMLihW0AfMasUQmqbhQGa0JfDKF0VxIPX6e0xP3AKmA/jgKAdJPg5ZMiL6xSF1qUfPczokAzAd0J8O/HAJfi2mXvVZGMkBzFgExwy3OSXmU2Pr3k/cAcAtp8YA4LwoiqtU5v6UFWQDMGQb5PhmCSAH5XkeY2kBKVeHkyVE9DZmDES8K8uSHWSSJmoBPOG6rvnc3xVOjgIRcTKEU+ZcRCEGRAQAn/WIeISISa6rj5desnYgCoC/9x/nmvgTe2CslOIiisFlNYMB+GwQh8F6V38Ib+aJUmpraCXJIADOOU6Bi8TlBWEMihX0BpC6BiASSG8IvQA457JGf4fAUEp96LMdggH4Nz4XQMx7Y5/AEIKOymAA1loufMpyzMUS7hM+CwKQO/8fC4C/D90KQQCccz9CqjwlFJeSEVpP1Alggfb+P+xCUmidAKy1Was/pCzAy+k8FjsBLKL5TyGGFFSFACDhVckpbqK1XmsbsBXAIu//6aS11q1zbP0xU8IzqUUopd61XYr+ewBd1SRLAG325wug+RK0sC3KB/CsnXMHAMD//ljEFn8P4Fn7mB8/hbkmWDLtnQLqDafYlFLjkBdh5z3gsYa8Le7v70dKKS5UegiHEdEIEUVLV9rIENHDX+1mLjz8t7vJysrKdd/4YG8AKZbsJWUuAbwk/XkY+9VbwG9isapQhtUBqwAAAABJRU5ErkJggg\x3d\x3d) top left no-repeat; background-size: cover; margin-right: ",[0,6],"; }\n.",[1],"c-booklist wx-navigator .",[1],"right .",[1],"sku .",[1],"popularity { max-width: 30%; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; font-size: ",[0,22],"; }\n.",[1],"c-booklist wx-navigator .",[1],"right .",[1],"sku .",[1],"tag { position: absolute; top: 0; right: 0; height: ",[0,36],"; font-size: 0; }\n.",[1],"c-booklist wx-navigator .",[1],"right .",[1],"sku .",[1],"tag wx-view { display: inline-block; vertical-align: middle; height: ",[0,36],"; margin-left: ",[0,10],"; padding: 0 ",[0,14],"; line-height: ",[0,36],"; color: #777; background: #EFEFF4; font-style: normal; font-size: ",[0,16],"; border-radius: ",[0,18],"; }\n.",[1],"c-booklist wx-navigator:last-child .",[1],"right { border-bottom: none; }\n.",[1],"c-booklist wx-navigator:active { background-color: #eee!important; }\nbody { width: 100%; height: 100%; font-size: ",[0,24],"; font-family: PingFang SC,\x22Helvetica Neue\x22,Helvetica,STHeiTi,sans-serif; box-sizing: border-box; -webkit-overflow-scrolling: touch; }\n::-webkit-scrollbar { width: 0; height: 0; color: transparent; }\nwx-view,wx-navigator,wx-text,wx-swiper,wx-input { box-sizing: border-box; }\n.",[1],"c-red { color: #DA3D3F; }\n.",[1],"c-gray { color: #bbb; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 )
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid );
}
}
Ca={};
css = makeup(file, opt);
if (usingStyleSheetManager) {
window.__styleSheetManager__.setCss(info.path, css);
return;
}
if ( !style )
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else
style.childNodes[0].nodeValue = css;
}
}
if (usingStyleSheetManager) {
window.__styleSheetManager__.addPath(info.path);
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:834:1)",{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./app.wxss:834:1)",{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/uni-badge/uni-badge.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-badge.",[1],"data-v-6e798548 { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; height: ",[0,40],"; line-height: ",[0,40],"; color: #333; border-radius: 100px; background-color: #f1f1f1; background-color: transparent; text-align: center; font-family: \x27Helvetica Neue\x27, Helvetica, sans-serif; font-size: 12px; padding: 0; }\n.",[1],"uni-badge--inverted.",[1],"data-v-6e798548 { padding: 0 5px 0 0; color: #f1f1f1; }\n.",[1],"uni-badge--default.",[1],"data-v-6e798548 { color: #333; background-color: #f1f1f1; }\n.",[1],"uni-badge--default-inverted.",[1],"data-v-6e798548 { color: #999; background-color: transparent; }\n.",[1],"uni-badge--primary.",[1],"data-v-6e798548 { color: #fff; background-color: #007aff; }\n.",[1],"uni-badge--primary-inverted.",[1],"data-v-6e798548 { color: #007aff; background-color: transparent; }\n.",[1],"uni-badge--success.",[1],"data-v-6e798548 { color: #fff; background-color: #4cd964; }\n.",[1],"uni-badge--success-inverted.",[1],"data-v-6e798548 { color: #4cd964; background-color: transparent; }\n.",[1],"uni-badge--warning.",[1],"data-v-6e798548 { color: #fff; background-color: #f0ad4e; }\n.",[1],"uni-badge--warning-inverted.",[1],"data-v-6e798548 { color: #f0ad4e; background-color: transparent; }\n.",[1],"uni-badge--error.",[1],"data-v-6e798548 { color: #fff; background-color: #dd524d; }\n.",[1],"uni-badge--error-inverted.",[1],"data-v-6e798548 { color: #dd524d; background-color: transparent; }\n.",[1],"uni-badge--small.",[1],"data-v-6e798548 { -webkit-transform: scale(0.8); transform: scale(0.8); -webkit-transform-origin: center center; transform-origin: center center; }\n",],undefined,{path:"./components/uni-badge/uni-badge.wxss"});    
__wxAppCode__['components/uni-badge/uni-badge.wxml']=$gwx('./components/uni-badge/uni-badge.wxml');

__wxAppCode__['components/uni-icons/uni-icons.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n@font-face { font-family: uniicons; src: url(\x22data:font/truetype;charset\x3dutf-8;base64,AAEAAAAQAQAABAAARkZUTYj43ssAAHbYAAAAHEdERUYAJwBmAAB2uAAAAB5PUy8yWWlcqgAAAYgAAABgY21hcGBhbBUAAAK0AAACQmN2dCAMpf40AAAPKAAAACRmcGdtMPeelQAABPgAAAmWZ2FzcAAAABAAAHawAAAACGdseWZsfgfZAAAQEAAAYQxoZWFkFof6/wAAAQwAAAA2aGhlYQd+AyYAAAFEAAAAJGhtdHgkeBuYAAAB6AAAAMpsb2NhPEknLgAAD0wAAADCbWF4cAIjA3IAAAFoAAAAIG5hbWXWOTtUAABxHAAAAdRwb3N0TJE4igAAcvAAAAO/cHJlcKW5vmYAAA6QAAAAlQABAAAAAQAACV/OOV8PPPUAHwQAAAAAANmqW7kAAAAA2apcCQAA/yAEAAMgAAAACAACAAAAAAAAAAEAAAMg/yAAXAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAFAAEAAABgAXoADAAAAAAAAgBGAFQAbAAAAQQBogAAAAAABAP/AZAABgAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAIABgMAAAAAAAAAAAABEAAAAAAAAAAAAAAAUEZFRAGAAB3mEgMs/ywAXAMgAOAAAAABAAAAAAMYAs0AAAAgAAEBdgAiAAAAAAFVAAAD6QAsBAAAYADAAMAAYADAAMAAoACAAIAAYACgAIAAgABgALMAQABAAAUAVwBeAIABAAD0AQAA9AEAAEAAVgCgAOAAwADAAFEAfgCAAGAAQABgAGAAYAA+AFEAYABAAGAAYAA0AGAAPgFAAQAAgABAAAAAJQCBAQABQAFAASwAgABgAIAAwABgAGAAwADBAQAAgACAAGAAYADBAEAARABAABcBXwATAMAAwAFAAUABQAFAAMAAwAEeAF8AVQBAAAAAAAADAAAAAwAAABwAAQAAAAABPAADAAEAAAAcAAQBIAAAAEQAQAAFAAQAAAAdAHjhAuEy4gPiM+Jk4wPjM+Ng42TkCeQR5BPkNOQ55EPkZuRo5HLlCOUw5TLlNeU35WDlY+Vl5WjlieWQ5hL//wAAAAAAHQB44QDhMOIA4jDiYOMA4zLjYONj5ADkEOQT5DTkN+RA5GDkaORw5QDlMOUy5TTlN+Vg5WLlZeVn5YDlkOYS//8AAf/k/4sfBB7XHgod3h2yHRcc6Ry9HLscIBwaHBkb+Rv3G/Eb1RvUG80bQBsZGxgbFxsWGu4a7RrsGusa1BrOGk0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBgAAAQAAAAAAAAABAgAAAAIAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAssCBgZi2wASwgZCCwwFCwBCZasARFW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCwCkVhZLAoUFghsApFILAwUFghsDBZGyCwwFBYIGYgiophILAKUFhgGyCwIFBYIbAKYBsgsDZQWCGwNmAbYFlZWRuwACtZWSOwAFBYZVlZLbACLCBFILAEJWFkILAFQ1BYsAUjQrAGI0IbISFZsAFgLbADLCMhIyEgZLEFYkIgsAYjQrIKAAIqISCwBkMgiiCKsAArsTAFJYpRWGBQG2FSWVgjWSEgsEBTWLAAKxshsEBZI7AAUFhlWS2wBCywCCNCsAcjQrAAI0KwAEOwB0NRWLAIQyuyAAEAQ2BCsBZlHFktsAUssABDIEUgsAJFY7ABRWJgRC2wBiywAEMgRSCwACsjsQQEJWAgRYojYSBkILAgUFghsAAbsDBQWLAgG7BAWVkjsABQWGVZsAMlI2FERC2wByyxBQVFsAFhRC2wCCywAWAgILAKQ0qwAFBYILAKI0JZsAtDSrAAUlggsAsjQlktsAksILgEAGIguAQAY4ojYbAMQ2AgimAgsAwjQiMtsAosS1RYsQcBRFkksA1lI3gtsAssS1FYS1NYsQcBRFkbIVkksBNlI3gtsAwssQANQ1VYsQ0NQ7ABYUKwCStZsABDsAIlQrIAAQBDYEKxCgIlQrELAiVCsAEWIyCwAyVQWLAAQ7AEJUKKiiCKI2GwCCohI7ABYSCKI2GwCCohG7AAQ7ACJUKwAiVhsAgqIVmwCkNHsAtDR2CwgGIgsAJFY7ABRWJgsQAAEyNEsAFDsAA+sgEBAUNgQi2wDSyxAAVFVFgAsA0jQiBgsAFhtQ4OAQAMAEJCimCxDAQrsGsrGyJZLbAOLLEADSstsA8ssQENKy2wECyxAg0rLbARLLEDDSstsBIssQQNKy2wEyyxBQ0rLbAULLEGDSstsBUssQcNKy2wFiyxCA0rLbAXLLEJDSstsBgssAcrsQAFRVRYALANI0IgYLABYbUODgEADABCQopgsQwEK7BrKxsiWS2wGSyxABgrLbAaLLEBGCstsBsssQIYKy2wHCyxAxgrLbAdLLEEGCstsB4ssQUYKy2wHyyxBhgrLbAgLLEHGCstsCEssQgYKy2wIiyxCRgrLbAjLCBgsA5gIEMjsAFgQ7ACJbACJVFYIyA8sAFgI7ASZRwbISFZLbAkLLAjK7AjKi2wJSwgIEcgILACRWOwAUViYCNhOCMgilVYIEcgILACRWOwAUViYCNhOBshWS2wJiyxAAVFVFgAsAEWsCUqsAEVMBsiWS2wJyywByuxAAVFVFgAsAEWsCUqsAEVMBsiWS2wKCwgNbABYC2wKSwAsANFY7ABRWKwACuwAkVjsAFFYrAAK7AAFrQAAAAAAEQ+IzixKAEVKi2wKiwgPCBHILACRWOwAUViYLAAQ2E4LbArLC4XPC2wLCwgPCBHILACRWOwAUViYLAAQ2GwAUNjOC2wLSyxAgAWJSAuIEewACNCsAIlSYqKRyNHI2EgWGIbIVmwASNCsiwBARUUKi2wLiywABawBCWwBCVHI0cjYbAGRStlii4jICA8ijgtsC8ssAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgsAlDIIojRyNHI2EjRmCwBEOwgGJgILAAKyCKimEgsAJDYGQjsANDYWRQWLACQ2EbsANDYFmwAyWwgGJhIyAgsAQmI0ZhOBsjsAlDRrACJbAJQ0cjRyNhYCCwBEOwgGJgIyCwACsjsARDYLAAK7AFJWGwBSWwgGKwBCZhILAEJWBkI7ADJWBkUFghGyMhWSMgILAEJiNGYThZLbAwLLAAFiAgILAFJiAuRyNHI2EjPDgtsDEssAAWILAJI0IgICBGI0ewACsjYTgtsDIssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbABRWMjIFhiGyFZY7ABRWJgIy4jICA8ijgjIVktsDMssAAWILAJQyAuRyNHI2EgYLAgYGawgGIjICA8ijgtsDQsIyAuRrACJUZSWCA8WS6xJAEUKy2wNSwjIC5GsAIlRlBYIDxZLrEkARQrLbA2LCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuw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bmlFMjAwB3VuaUUyMDEHdW5pRTIwMgd1bmlFMjAzB3VuaUUyMzAHdW5pRTIzMQd1bmlFMjMyB3VuaUUyMzMHdW5pRTI2MAd1bmlFMjYxB3VuaUUyNjIHdW5pRTI2Mwd1bmlFMjY0B3VuaUUzMDAHdW5pRTMwMQd1bmlFMzAyB3VuaUUzMDMHdW5pRTMzMgd1bmlFMzMzB3VuaUUzNjAHdW5pRTM2Mwd1bmlFMzY0B3VuaUU0MDAHdW5pRTQwMQd1bmlFNDAyB3VuaUU0MDMHdW5pRTQwNAd1bmlFNDA1B3VuaUU0MDYHdW5pRTQwNwd1bmlFNDA4B3VuaUU0MDkHdW5pRTQxMAd1bmlFNDExB3VuaUU0MTMHdW5pRTQzNAd1bmlFNDM3B3VuaUU0MzgHdW5pRTQzOQd1bmlFNDQwB3VuaUU0NDEHdW5pRTQ0Mgd1bmlFNDQzB3VuaUU0NjAHdW5pRTQ2MQd1bmlFNDYyB3VuaUU0NjMHdW5pRTQ2NAd1bmlFNDY1B3VuaUU0NjYHdW5pRTQ2OAd1bmlFNDcwB3VuaUU0NzEHdW5pRTQ3Mgd1bmlFNTAwB3VuaUU1MDEHdW5pRTUwMgd1bmlFNTAzB3VuaUU1MDQHdW5pRTUwNQd1bmlFNTA2B3VuaUU1MDcHdW5pRTUwOAd1bmlFNTMwB3VuaUU1MzIHdW5pRTUzNAd1bmlFNTM1B3VuaUU1MzcHdW5pRTU2MAd1bmlFNTYyB3VuaUU1NjMHdW5pRTU2NQd1bmlFNTY3B3VuaUU1NjgHdW5pRTU4MAd1bmlFNTgxB3VuaUU1ODIHdW5pRTU4Mwd1bmlFNTg0B3VuaUU1ODUHdW5pRTU4Ngd1bmlFNTg3B3VuaUU1ODgHdW5pRTU4OQRFdXJvB3VuaUU2MTIAAAEAAf//AA8AAQAAAAwAAAAWAAAAAgABAAEAXwABAAQAAAACAAAAAAAAAAEAAAAA1aQnCAAAAADZqlu5AAAAANmqXAk\x3d\x22) format(\x22truetype\x22); }\n.",[1],"uni-icons.",[1],"data-v-5f4d46d9 { font-family: uniicons; text-decoration: none; text-align: center; }\n",],undefined,{path:"./components/uni-icons/uni-icons.wxss"});    
__wxAppCode__['components/uni-icons/uni-icons.wxml']=$gwx('./components/uni-icons/uni-icons.wxml');

__wxAppCode__['components/uni-list-item/uni-list-item.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-list-item.",[1],"data-v-c097ecf0 { font-size: ",[0,32],"; position: relative; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; padding-left: ",[0,30],"; }\n.",[1],"uni-list-item--disabled.",[1],"data-v-c097ecf0 { opacity: 0.3; }\n.",[1],"uni-list-item--hover.",[1],"data-v-c097ecf0 { background-color: #f1f1f1; }\n.",[1],"uni-list-item__container.",[1],"data-v-c097ecf0 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; padding: ",[0,24]," ",[0,30],"; padding-left: 0; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; position: relative; -webkit-box-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; -webkit-box-align: center; -webkit-align-items: center; align-items: center; border-top-color: #c8c7cc; border-top-style: solid; border-top-width: 1px; }\n.",[1],"uni-list-item--first.",[1],"data-v-c097ecf0 { border-top-width: 0px; }\n.",[1],"uni-list-item__content.",[1],"data-v-c097ecf0 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; overflow: hidden; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; color: #3b4144; }\n.",[1],"uni-list-item__content-title.",[1],"data-v-c097ecf0 { font-size: ",[0,28],"; color: #3b4144; overflow: hidden; }\n.",[1],"uni-list-item__content-note.",[1],"data-v-c097ecf0 { margin-top: ",[0,6],"; color: #999; font-size: ",[0,24],"; overflow: hidden; }\n.",[1],"uni-list-item__extra.",[1],"data-v-c097ecf0 { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-pack: end; -webkit-justify-content: flex-end; justify-content: flex-end; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"uni-list-item__icon.",[1],"data-v-c097ecf0 { margin-right: ",[0,18],"; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; flex-direction: row; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; align-items: center; }\n.",[1],"uni-list-item__icon-img.",[1],"data-v-c097ecf0 { height: ",[0,52],"; width: ",[0,52],"; }\n",],undefined,{path:"./components/uni-list-item/uni-list-item.wxss"});    
__wxAppCode__['components/uni-list-item/uni-list-item.wxml']=$gwx('./components/uni-list-item/uni-list-item.wxml');

__wxAppCode__['components/uni-list/uni-list.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"uni-list.",[1],"data-v-9e78ad06 { display: -webkit-box; display: -webkit-flex; display: flex; position: relative; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; flex-direction: column; }\n.",[1],"uni-list.",[1],"data-v-9e78ad06:before { height: 0; }\n.",[1],"uni-list.",[1],"data-v-9e78ad06:after { height: 0; }\n",],undefined,{path:"./components/uni-list/uni-list.wxss"});    
__wxAppCode__['components/uni-list/uni-list.wxml']=$gwx('./components/uni-list/uni-list.wxml');

__wxAppCode__['pages/bookDetail/bookDetail.wxss']=setCssToHead([".",[1],"page-detail-wraper { padding-bottom: ",[0,200],"; }\n.",[1],"page-detail-wraper .",[1],"fixed { width: 100%; position: fixed; top: 0; z-index: 20; }\n.",[1],"page-detail-wraper .",[1],"toHome { position: fixed; z-index: 999; right: ",[0,0],"; bottom: ",[0,120],"; width: ",[0,140],"; height: ",[0,135],"; background: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/home.png\x27) no-repeat; background-size: 100% 100%; }\n.",[1],"page-detail-wraper .",[1],"book-detail { position: relative; overflow: hidden; padding: ",[0,30],"; background: #fff; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"cover { float: left; width: ",[0,192],"; height: ",[0,272],"; background: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/default-cover.png\x27) no-repeat; background-size: 100% 100%; box-shadow: 0 ",[0,2]," ",[0,6]," rgba(0, 0, 0, 0.3); border-radius: ",[0,4],"; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"vipBg { position: absolute; top: ",[0,214],"; left: ",[0,26],"; width: ",[0,200],"; height: ",[0,40],"; background: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/details_bg_vip.png\x27); background-size: 100% 100%; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc { margin-left: ",[0,216],"; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"title { font-weight: bold; font-size: ",[0,38],"; line-height: 1.2; padding-bottom: ",[0,30],"; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"rating { height: ",[0,48],"; margin-bottom: ",[0,20],"; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"rating wx-view { display: inline-block; vertical-align: middle; color: #bdbdbd; font-size: ",[0,28],"; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"rating .",[1],"score { line-height: ",[0,48],"; font-size: ",[0,40],"; color: #ffcd3e; padding-right: ",[0,18],"; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"rating .",[1],"star { width: ",[0,28],"; height: ",[0,28],"; margin-left: ",[0,12],"; background-image: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/star.png\x27); background-size: 100% 100%; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"rating .",[1],"star-o { width: ",[0,28],"; height: ",[0,28],"; margin-left: ",[0,12],"; background-image: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/star-o.png\x27); background-size: 100% 100%; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"rating .",[1],"line { margin: 0 ",[0,16],"; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"sku { height: ",[0,36],"; margin-bottom: ",[0,20],"; line-height: ",[0,36],"; overflow: hidden; font-size: 0; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"sku wx-view { display: inline-block; vertical-align: middle; color: #bdbdbd; font-size: ",[0,28],"; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"sku wx-view.",[1],"author { color: #ee4745; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"sku .",[1],"line { margin: 0 ",[0,14],"; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"allowMonthly { width: ",[0,64],"; height: ",[0,32],"; background: #f0f0f5; border-radius: ",[0,76],"; font-size: ",[0,20],"; color: #999; text-align: center; line-height: ",[0,32],"; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"needMonthly { width: 100%; height: ",[0,32],"; background: #fff; border-radius: 0; font-size: ",[0,26],"; color: #ee4745; text-align: left; line-height: ",[0,32],"; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"isvip { width: 100%; height: ",[0,32],"; background: #fff; border-radius: 0; font-size: ",[0,26],"; color: #c8c7cc; text-align: left; line-height: ",[0,32],"; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"tags { height: ",[0,30],"; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"tags .",[1],"monthly { display: inline-block; height: ",[0,30],"; border: 1px solid #cb2622; background-color: #cb2622; border-radius: 2px; overflow: hidden; border-left: none; font-size: 0px; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"tags .",[1],"monthly .",[1],"key { width: ",[0,30],"; height: 100%; display: inline-block; vertical-align: middle; background-size: 90% 90%; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"tags .",[1],"monthly .",[1],"value { height: 100%; line-height: ",[0,28],"; padding: 0 ",[0,4],"; display: inline-block; vertical-align: middle; color: #fff; font-style: normal; color: #cb2622; font-size: ",[0,20],"; background-color: #fff; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"tags .",[1],"not-monthly { border: 1px solid #ccc; background-color: #ccc; }\n.",[1],"page-detail-wraper .",[1],"book-detail .",[1],"desc .",[1],"tags .",[1],"not-monthly .",[1],"value { color: #ccc; }\n.",[1],"page-detail-wraper .",[1],"read-link { width: 100%; height: ",[0,120],"; position: fixed; z-index: 999; bottom: 0; padding: ",[0,20]," ",[0,30]," ",[0,40]," ",[0,30],"; border-top: 1px solid #ebebeb; font-size: 0px; background: #fff; }\n.",[1],"page-detail-wraper .",[1],"read-link wx-view.",[1],"button { display: inline-block; vertical-align: middle; height: ",[0,80],"; line-height: ",[0,80],"; background-color: #fce4e4; border: 1px solid #fce4e4; border-radius: ",[0,40],"; text-align: center; color: #ee4745; font-size: ",[0,32],"; width: 45%; margin-right: 5%; }\n.",[1],"page-detail-wraper .",[1],"read-link wx-navigator.",[1],"button { display: inline-block; vertical-align: middle; height: ",[0,80],"; line-height: ",[0,80],"; background-color: #ee4745; border: 1px solid #ee4745; border-radius: ",[0,40],"; text-align: center; color: #fff; font-size: ",[0,32],"; width: 45%; margin-right: 5%; }\n.",[1],"page-detail-wraper .",[1],"read-link .",[1],"button wx-view { font-style: normal; font-weight: 700; }\n.",[1],"page-detail-wraper .",[1],"read-link .",[1],"button .",[1],"plus { font-family: serif; margin-right: 2px; font-weight: bold; font-size: ",[0,32],"; }\n.",[1],"page-detail-wraper .",[1],"read-link .",[1],"button .",[1],"subtract { font-family: serif; margin-right: 2px; font-weight: bold; font-size: ",[0,32],"; }\n.",[1],"page-detail-wraper .",[1],"read-link .",[1],"button:first-child { color: #ff5e01; border: 1px solid #ffdec6; background-color: #ffdec6; }\n.",[1],"page-detail-wraper .",[1],"read-link .",[1],"button:last-child { margin: 0 0 0 5%; }\n.",[1],"page-detail-wraper .",[1],"read-link .",[1],"button.",[1],"subtract { border: 1px solid #999; background: #999; color: #fff; }\n.",[1],"page-detail-wraper .",[1],"read-link .",[1],"monthly-tags { display: block; margin-top: ",[0,40],"; text-align: center; color: #ff9a57; }\n.",[1],"page-detail-wraper .",[1],"read-link .",[1],"monthly-tags.",[1],"gray { color: #ccc; }\n.",[1],"page-detail-wraper .",[1],"read-link .",[1],"monthly-tags wx-view { font-size: ",[0,28],"; }\n.",[1],"page-detail-wraper .",[1],"read-link .",[1],"monthly-tags wx-view { font-style: normal; font-family: monospace; margin-left: ",[0,0.08],"; }\n.",[1],"page-detail-wraper .",[1],"read-link .",[1],"unable { height: ",[0,80],"; line-height: ",[0,80],"; background: #999; border: 1px solid #999; border-radius: ",[0,40],"; text-align: center; color: #fff; font-size: ",[0,32],"; width: 80%; margin-left: 10%; }\n.",[1],"page-detail-wraper .",[1],"reader-data { margin: 0 ",[0,30],"; padding-bottom: ",[0,40],"; font-size: 0px; background: #fff; }\n.",[1],"page-detail-wraper .",[1],"reader-data .",[1],"item { display: inline-block; vertical-align: middle; width: 33%; text-align: center; }\n.",[1],"page-detail-wraper .",[1],"reader-data .",[1],"item wx-view { display: block; line-height: ",[0,40],"; }\n.",[1],"page-detail-wraper .",[1],"reader-data .",[1],"item wx-view:first-child { color: #858e98; font-size: ",[0,34],"; font-weight: bold; }\n.",[1],"page-detail-wraper .",[1],"reader-data .",[1],"item wx-view:last-child { margin-top: ",[0,10],"; color: #c8c7cc; font-size: ",[0,24],"; }\n.",[1],"page-detail-wraper .",[1],"introduction { position: relative; margin: 0 ",[0,30]," ",[0,40],"; padding: ",[0,40]," 0; background: #fff; }\n.",[1],"page-detail-wraper .",[1],"introduction wx-view { line-height: ",[0,42],"; font-size: ",[0,30],"; text-align: justify; word-break: break-all; text-overflow: ellipsis; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; -webkit-transition: all 0.4s ease; }\n.",[1],"page-detail-wraper .",[1],"introduction wx-view.",[1],"title { height: ",[0,52],"; font-size: ",[0,38],"; line-height: ",[0,52],"; margin-bottom: ",[0,26],"; font-weight: bold; }\n.",[1],"page-detail-wraper .",[1],"introduction wx-view.",[1],"active { height: auto !important; overflow: auto !important; display: block !important; }\n.",[1],"page-detail-wraper .",[1],"introduction wx-view .",[1],"arrow { position: absolute; width: ",[0,26],"; height: ",[0,40],"; top: ",[0,40],"; right: 0; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEeklEQVR4XuWbz4scRRTH37dnZjcquhuFgB6iJIrmoBcPHkIMm1XM4g/EHwOLO73sTNcMexLPktVg/oDgwXWnZ1bp3mVhEPyJipAfqyeRFQxiAgoKQggEZRcxiclMv1DpCQRJunp6unuaqb7Wq6rv+3RVdderV6A+Htt2n2bmEhHGAD4mhPluH80NpCqi9mrb7hwRLd9Yn5l+GB31pmZnZ/+K2m7a9SIBaDbdhz2PztxMLDOfKRQ6E3Nzc+fSdiZKf5EA2LZzhAhv3rpD/j2XK+wvl6f/jCIqzTqRANTrzgKAwwqhZ9vt/N75+ek/0nSo174iAVheXt3V6XROEeGO4A75PEAHLMv8uVdhadlHAiDFNRruQWb6SiWUmbYAY1KI1zZUtoMojwxAirVt5wAzvgDoNsVI+NfzaLJWM78fhJNBffYFQDa8tOQ8AeAbgO4K6oiZLgL8nBDm8SxB6BuAD2HlUcPwviXCeDAEvmIYeMGySl9nBUIsALrTYQ8znQSwQzES2gCmhZj5KAsQYgMgnVlcXHsgl7uyDmCnwjkmoooQpQ8GDSFWAP50cO8FaB2gh1TOMfN8tWq+r7JLsjx2AP4nsnU386UTRHhMJZ6ZD1Wr5hGVXVLliQCQYpvN5p2eN3KCiB5Xi+ejQphvqO3it0gMgD8dPr/dMDblir9PJZ2Zl6tVs6Kyi7s8UQBSbKvVGtnc/O8TgKZU4plpVYiZEgC5SKbyJA6gCyG3tXVpjQivqr3iT8fGtr1cLBY7atv+LVIBcF1mve40AZRVsuUeY3x89MVisXhZZdtveaoApFjbdt8jovkQwr/zvPGDtdrzF0LYRjZJHUAXwttE9FYI1RuGcXmiUqn8E8I2kslAAEil9br7OkBH1ar5FLBtwrKKf6tte7cYGIDuSJCB1SYRBepgpl/z+dG95XLxfO8uBtcYKAAfwsorzLwGUD5YajJxxoEDkE7L6JLn8WcACoo3fBag/ZZV+i2ukZAJAP5ICB1dkmcO+4QwT8cBITMApDNho0tEvOl5mKzVSj/2CyFTAHwI16JLcid5j2JNiCXOmDkA3TXhQWZaJ6L7giDEEWfMJIDudNhpGJDb6V2qYQ7gKcuaOaayu1l5ZgH4EGR0iY8DeEQxHc553vbdUX6bMw3Anw5ho0v8rBDml72OgqEBwIyXqtWZj4cKwOKisyOfp5NE2BO8GPKFQqGzO8qRfGZHwNKS08MiSFNRD1syCaDRcPX9DGr9I6T1r7DWmyGtt8NaB0S6uYZ6hsS0DoratqtvWFzrgxFtj8ZarZa+h6NaH49rnSChdYpM+DDWtTDHghCld3qN5MRlH3s8QOs0Oa0TJW3b0TdVVutk6bBRnDiOseJa+G5sp69FsIcoTiwHmZkCoPWVGX+1b/+kuiVCNKSXpmzblSluck8f9Azvtbl63TkMYOHW3ieT0JSZNSD46iz9Uii0J6Oc0yXhoKrNyF+BRmNllpk//F8HGyMj3jNDf3n6utONxuqTzF6Fme8H6LQQZpgcYNVLSbX8Kr2QQF+sLrzTAAAAAElFTkSuQmCC) center center no-repeat; background-size: 80%; background-repeat: no-repeat; background-position: center center; -webkit-transition: all 0.1s ease; -webkit-transform: rotate(90deg); }\n.",[1],"page-detail-wraper .",[1],"introduction wx-view .",[1],"up { -webkit-transform: rotate(270deg); }\n.",[1],"page-detail-wraper .",[1],"chapter-item { display: block; background: #fff; padding: ",[0,40]," ",[0,30],"; margin-bottom: ",[0,40],"; color: #333; font-weight: bold; }\n.",[1],"page-detail-wraper .",[1],"chapter-item:active { background-color: #f4f4f4; }\n.",[1],"page-detail-wraper .",[1],"chapter-item .",[1],"inner { position: relative; height: ",[0,52],"; font-size: ",[0,38],"; line-height: ",[0,52],"; }\n.",[1],"page-detail-wraper .",[1],"chapter-item .",[1],"inner wx-view { float: right; max-width: 60%; font-size: ",[0,30],"; color: #8a8a8a; word-break: break-all; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; font-weight: 300; }\n.",[1],"page-detail-wraper .",[1],"chapter-item .",[1],"inner .",[1],"arrow { float: right; width: ",[0,26],"; height: ",[0,52],"; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEeklEQVR4XuWbz4scRRTH37dnZjcquhuFgB6iJIrmoBcPHkIMm1XM4g/EHwOLO73sTNcMexLPktVg/oDgwXWnZ1bp3mVhEPyJipAfqyeRFQxiAgoKQggEZRcxiclMv1DpCQRJunp6unuaqb7Wq6rv+3RVdderV6A+Htt2n2bmEhHGAD4mhPluH80NpCqi9mrb7hwRLd9Yn5l+GB31pmZnZ/+K2m7a9SIBaDbdhz2PztxMLDOfKRQ6E3Nzc+fSdiZKf5EA2LZzhAhv3rpD/j2XK+wvl6f/jCIqzTqRANTrzgKAwwqhZ9vt/N75+ek/0nSo174iAVheXt3V6XROEeGO4A75PEAHLMv8uVdhadlHAiDFNRruQWb6SiWUmbYAY1KI1zZUtoMojwxAirVt5wAzvgDoNsVI+NfzaLJWM78fhJNBffYFQDa8tOQ8AeAbgO4K6oiZLgL8nBDm8SxB6BuAD2HlUcPwviXCeDAEvmIYeMGySl9nBUIsALrTYQ8znQSwQzES2gCmhZj5KAsQYgMgnVlcXHsgl7uyDmCnwjkmoooQpQ8GDSFWAP50cO8FaB2gh1TOMfN8tWq+r7JLsjx2AP4nsnU386UTRHhMJZ6ZD1Wr5hGVXVLliQCQYpvN5p2eN3KCiB5Xi+ejQphvqO3it0gMgD8dPr/dMDblir9PJZ2Zl6tVs6Kyi7s8UQBSbKvVGtnc/O8TgKZU4plpVYiZEgC5SKbyJA6gCyG3tXVpjQivqr3iT8fGtr1cLBY7atv+LVIBcF1mve40AZRVsuUeY3x89MVisXhZZdtveaoApFjbdt8jovkQwr/zvPGDtdrzF0LYRjZJHUAXwttE9FYI1RuGcXmiUqn8E8I2kslAAEil9br7OkBH1ar5FLBtwrKKf6tte7cYGIDuSJCB1SYRBepgpl/z+dG95XLxfO8uBtcYKAAfwsorzLwGUD5YajJxxoEDkE7L6JLn8WcACoo3fBag/ZZV+i2ukZAJAP5ICB1dkmcO+4QwT8cBITMApDNho0tEvOl5mKzVSj/2CyFTAHwI16JLcid5j2JNiCXOmDkA3TXhQWZaJ6L7giDEEWfMJIDudNhpGJDb6V2qYQ7gKcuaOaayu1l5ZgH4EGR0iY8DeEQxHc553vbdUX6bMw3Anw5ho0v8rBDml72OgqEBwIyXqtWZj4cKwOKisyOfp5NE2BO8GPKFQqGzO8qRfGZHwNKS08MiSFNRD1syCaDRcPX9DGr9I6T1r7DWmyGtt8NaB0S6uYZ6hsS0DoratqtvWFzrgxFtj8ZarZa+h6NaH49rnSChdYpM+DDWtTDHghCld3qN5MRlH3s8QOs0Oa0TJW3b0TdVVutk6bBRnDiOseJa+G5sp69FsIcoTiwHmZkCoPWVGX+1b/+kuiVCNKSXpmzblSluck8f9Azvtbl63TkMYOHW3ieT0JSZNSD46iz9Uii0J6Oc0yXhoKrNyF+BRmNllpk//F8HGyMj3jNDf3n6utONxuqTzF6Fme8H6LQQZpgcYNVLSbX8Kr2QQF+sLrzTAAAAAElFTkSuQmCC) center right no-repeat; background-size: 80%; background-repeat: no-repeat; }\n.",[1],"page-detail-wraper .",[1],"hot-comment { margin: 0 ",[0,30]," ",[0,40],"; padding-bottom: ",[0,48],"; background: #fff; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"hot-comment-top { position: relative; margin-bottom: ",[0,26],"; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"hot-comment-top wx-view { height: ",[0,60],"; line-height: ",[0,60],"; font-size: ",[0,38],"; font-weight: bold; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"hot-comment-top .",[1],"more { display: block; height: ",[0,80],"; line-height: ",[0,80],"; padding: 0 ",[0,40],"; font-size: ",[0,24],"; color: #999; font-weight: 400; position: absolute; top: 0; right: 0; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list-none { background: #fff; color: #c8c7cc; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list { width: 100%; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list .",[1],"li { overflow: hidden; padding-bottom: ",[0,40],"; background: #fff; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list .",[1],"li .",[1],"title { padding-bottom: ",[0,10],"; font-size: ",[0,32],"; line-height: ",[0,44],"; color: #000; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list .",[1],"li .",[1],"content { margin-bottom: ",[0,28],"; line-height: ",[0,40],"; font-size: ",[0,30],"; text-align: justify; word-break: break-all; text-overflow: ellipsis; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; color: #8a8a8f; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list .",[1],"li .",[1],"inner { overflow: hidden; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list .",[1],"li .",[1],"inner .",[1],"left { float: left; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list .",[1],"li .",[1],"inner .",[1],"left .",[1],"avater { display: inline-block; vertical-align: middle; width: ",[0,56],"; height: ",[0,56],"; margin-right: ",[0,16],"; border-radius: ",[0,56],"; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list .",[1],"li .",[1],"inner .",[1],"left .",[1],"author { display: inline-block; vertical-align: middle; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list .",[1],"li .",[1],"inner .",[1],"left .",[1],"author .",[1],"name { height: ",[0,34],"; font-size: ",[0,24],"; color: #666; line-height: ",[0,34],"; margin-bottom: ",[0,6],"; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list .",[1],"li .",[1],"inner .",[1],"left .",[1],"author .",[1],"updated { height: ",[0,34],"; font-size: ",[0,24],"; line-height: ",[0,34],"; color: #a3a3a3; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list .",[1],"li .",[1],"inner .",[1],"right { float: right; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list .",[1],"li .",[1],"inner .",[1],"right .",[1],"score { overflow: hidden; height: ",[0,34],"; margin-bottom: ",[0,6],"; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list .",[1],"li .",[1],"inner .",[1],"right .",[1],"score .",[1],"star { display: inline-block; vertical-align: middle; width: ",[0,22],"; height: ",[0,22],"; margin-left: ",[0,12],"; background-image: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/star.png\x27); background-size: 100% 100%; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list .",[1],"li .",[1],"inner .",[1],"right .",[1],"score .",[1],"star-o { display: inline-block; vertical-align: middle; width: ",[0,22],"; height: ",[0,22],"; margin-left: ",[0,12],"; background-image: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/star-o.png\x27); background-size: 100% 100%; }\n.",[1],"page-detail-wraper .",[1],"hot-comment .",[1],"c-comment-list .",[1],"li .",[1],"inner .",[1],"right .",[1],"likeCount { height: ",[0,34],"; font-size: ",[0,26],"; line-height: ",[0,34],"; text-align: right; color: #b7b7bd; }\n.",[1],"page-detail-wraper .",[1],"c-book-recommend-section .",[1],"title { height: ",[0,52],"; font-size: ",[0,38],"; line-height: ",[0,52],"; font-weight: bold; }\n.",[1],"page-detail-wraper .",[1],"book-copyright { background: #fff; margin: ",[0,40]," 0; padding: 0 ",[0,30],"; }\n.",[1],"page-detail-wraper .",[1],"book-copyright wx-view { font-size: ",[0,38],"; font-weight: 700; }\n.",[1],"page-detail-wraper .",[1],"book-copyright .",[1],"desc { line-height: ",[0,44],"; color: #8a8a8f; font-size: ",[0,28],"; margin-top: ",[0,10],"; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/bookDetail/bookDetail.wxss:512:37)",{path:"./pages/bookDetail/bookDetail.wxss"});    
__wxAppCode__['pages/bookDetail/bookDetail.wxml']=$gwx('./pages/bookDetail/bookDetail.wxml');

__wxAppCode__['pages/bookshelf/bookshelf.wxss']=undefined;    
__wxAppCode__['pages/bookshelf/bookshelf.wxml']=$gwx('./pages/bookshelf/bookshelf.wxml');

__wxAppCode__['pages/category/category.wxss']=setCssToHead([".",[1],"page-category-wraper { display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; height: 100%; overflow: hidden; padding-bottom: ",[0,50],"; }\n.",[1],"page-category-wraper .",[1],"left-nav { width: ",[0,136],"; height: 100%; border-right: ",[0,1]," solid #f0f0f0; }\n.",[1],"page-category-wraper .",[1],"left-nav wx-view { position: relative; display: block; width: 100%; height: ",[0,104],"; text-align: center; -webkit-transition: all 0.1s ease; transition: all 0.1s ease; }\n.",[1],"page-category-wraper .",[1],"left-nav wx-view .",[1],"_i { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; height: 100%; border-bottom: 1px solid #f0f0f0; font-size: ",[0,30],"; font-style: normal; }\n.",[1],"page-category-wraper .",[1],"left-nav wx-view.",[1],"active { background: rgba(240, 240, 245, 0.39); }\n.",[1],"page-category-wraper .",[1],"left-nav wx-view.",[1],"active:after { background: #ee4745; }\n.",[1],"page-category-wraper .",[1],"left-nav wx-view:active { background: rgba(240, 240, 245, 0.39); }\n.",[1],"page-category-wraper .",[1],"left-nav wx-view:after { content: \x27 \x27; position: absolute; width: ",[0,4],"; height: ",[0,40],"; left: ",[0,20],"; top: 50%; -webkit-transform: translateY(-50%); transform: translateY(-50%); border-radius: ",[0,2],"; }\n.",[1],"page-category-wraper .",[1],"right-content { -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section { width: 100%; padding: ",[0,40]," ",[0,16],"; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section:last-of-type { width: 100%; padding: ",[0,40]," ",[0,16]," ",[0,300]," ",[0,16],"; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"title { height: ",[0,20],"; text-align: center; border-bottom: ",[0,1]," solid #f0f0f5; margin-bottom: ",[0,20],"; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"title .",[1],"_i { position: relative; display: inline-block; width: ",[0,140],"; height: ",[0,38],"; line-height: ",[0,38],"; background: #fff; text-align: center; color: #d6d5db; font-size: ",[0,30],"; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"title .",[1],"_i:before { content: \x27 \x27; position: absolute; width: ",[0,10],"; height: ",[0,10],"; left: 50%; margin-left: ",[0,-50],"; margin-top: ",[0,19],"; -webkit-transform: translateY(-50%); transform: translateY(-50%); background: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/star-o.png\x27) center center no-repeat; background-size: cover; overflow: hidden; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"title .",[1],"_i:after { content: \x27 \x27; position: absolute; width: ",[0,10],"; height: ",[0,10],"; right: 50%; margin-right: ",[0,-50],"; margin-top: ",[0,19],"; -webkit-transform: translateY(-50%); transform: translateY(-50%); background: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/star-o.png\x27) center center no-repeat; background-size: cover; overflow: hidden; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"title:after { position: absolute; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"inner { font-size: 0px; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"inner wx-navigator { position: relative; display: inline-block; vertical-align: middle; width: 48%; height: ",[0,120],"; padding: ",[0,28]," ",[0,24],"; margin: ",[0,28]," 2% 0 0; background: rgba(240, 240, 245, 0.39); border-radius: ",[0,2],"; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"inner wx-navigator:nth-child(2n + 2) { margin-right: 0; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"inner wx-navigator:active { background: rgba(240, 240, 245, 0.6); }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"inner wx-navigator .",[1],"name { height: ",[0,40],"; line-height: ",[0,40],"; font-size: ",[0,28],"; color: #616166; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"inner wx-navigator .",[1],"count { height: ",[0,28],"; line-height: ",[0,28],"; font-size: ",[0,20],"; color: #9b9b9b; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"inner wx-navigator .",[1],"covers { position: absolute; bottom: 0; right: ",[0,12],"; width: ",[0,104],"; height: ",[0,102],"; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"inner wx-navigator .",[1],"covers wx-view { position: absolute; box-shadow: 0 ",[0,0]," ",[0,1]," #ccc; overflow: hidden; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"inner wx-navigator .",[1],"covers wx-view wx-image { width: 100%; height: 100%; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"inner wx-navigator .",[1],"covers wx-view:first-child { margin-top: ",[0,0],"; margin-left: ",[0,18],"; width: ",[0,74],"; height: ",[0,102],"; z-index: 3; background: #fff url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/default-cover.png\x27) center center no-repeat; background-size: cover; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"inner wx-navigator .",[1],"covers wx-view:nth-child(2) { margin-top: ",[0,16],"; margin-left: ",[0,0],"; width: ",[0,60],"; height: ",[0,86],"; z-index: 2; background: #fff url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/default-cover.png\x27) center center no-repeat; background-size: cover; }\n.",[1],"page-category-wraper .",[1],"right-content .",[1],"cetegory-section .",[1],"inner wx-navigator .",[1],"covers wx-view:last-child { margin-top: ",[0,28],"; margin-left: ",[0,50],"; width: ",[0,52],"; height: ",[0,74],"; z-index: 1; background: url(\x27https://wechatapp.zhuishushenqi.com/zhuishu/images/icon/default-cover.png\x27) center center no-repeat; background-size: cover; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/category/category.wxss:187:63)",{path:"./pages/category/category.wxss"});    
__wxAppCode__['pages/category/category.wxml']=$gwx('./pages/category/category.wxml');

__wxAppCode__['pages/category/categoryDetail.wxss']=undefined;    
__wxAppCode__['pages/category/categoryDetail.wxml']=$gwx('./pages/category/categoryDetail.wxml');

__wxAppCode__['pages/index/index.wxss']=undefined;    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/index/template/template1.wxss']=undefined;    
__wxAppCode__['pages/index/template/template1.wxml']=$gwx('./pages/index/template/template1.wxml');

__wxAppCode__['pages/index/template/template2.wxss']=undefined;    
__wxAppCode__['pages/index/template/template2.wxml']=$gwx('./pages/index/template/template2.wxml');

__wxAppCode__['pages/index/template/template3.wxss']=undefined;    
__wxAppCode__['pages/index/template/template3.wxml']=$gwx('./pages/index/template/template3.wxml');

__wxAppCode__['pages/ranking/ranking.wxss']=setCssToHead([".",[1],"page-ranking-wraper { width: 100%; height: 100%; }\n.",[1],"page-ranking-wraper .",[1],"ranking-list-header { width: 100%; height: ",[0,84],"; padding: 0 ",[0,30],"; }\n.",[1],"page-ranking-wraper .",[1],"ranking-list-header .",[1],"ranking-type { display: -webkit-box; display: -webkit-flex; display: flex; border-bottom: ",[0,1]," solid #ebebeb; height: 100%; }\n.",[1],"page-ranking-wraper .",[1],"ranking-list-header .",[1],"ranking-type wx-view { position: relative; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; line-height: ",[0,84],"; color: #8a8a8f; font-size: ",[0,28],"; text-align: center; }\n.",[1],"page-ranking-wraper .",[1],"ranking-list-header .",[1],"ranking-type wx-view:after { content: \x27 \x27; position: absolute; left: 50%; bottom: ",[0,-2],"; width: ",[0,60],"; height: ",[0,3],"; margin-left: ",[0,-30],"; background-color: transparent; border-radius: ",[0,4],"; -webkit-transition: all 0.2s ease; transition: all 0.2s ease; }\n.",[1],"page-ranking-wraper .",[1],"ranking-list-header .",[1],"ranking-type wx-view.",[1],"active { color: #ee4745; }\n.",[1],"page-ranking-wraper .",[1],"ranking-list-header .",[1],"ranking-type wx-view.",[1],"active:after { background-color: #ee4745; }\n.",[1],"page-ranking-wraper .",[1],"ranking-box { white-space: nowrap; overflow: hidden; }\n.",[1],"page-ranking-wraper .",[1],"ranking-box .",[1],"box { display: inline-block; width: 100%; }\n.",[1],"page-ranking-wraper .",[1],"ranking-box .",[1],"box .",[1],"rankingContent { display: -webkit-box; display: -webkit-flex; display: flex; width: 100%; height: 100%; }\n.",[1],"page-ranking-wraper .",[1],"left-nav { width: ",[0,160],"; border-right: ",[0,1]," solid #f0f0f0; }\n.",[1],"page-ranking-wraper .",[1],"left-nav wx-view { position: relative; display: block; width: 100%; height: ",[0,104],"; text-align: center; -webkit-transition: all 0.1s ease; transition: all 0.1s ease; }\n.",[1],"nav_width { width: ",[0,180],"; }\n.",[1],"page-ranking-wraper .",[1],"left-nav wx-view .",[1],"_i { display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align: center; -webkit-align-items: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; justify-content: center; height: 100%; border-bottom: 1px solid #f0f0f0; font-size: ",[0,30],"; font-style: normal; }\n.",[1],"page-ranking-wraper .",[1],"left-nav wx-view.",[1],"active { background: rgba(240, 240, 245, 0.39); }\n.",[1],"page-ranking-wraper .",[1],"left-nav wx-view.",[1],"active:after { background: #ee4745; }\n.",[1],"page-ranking-wraper .",[1],"left-nav wx-view:active { background: rgba(240, 240, 245, 0.39); }\n.",[1],"page-ranking-wraper .",[1],"left-nav wx-view:after { content: \x27 \x27; position: absolute; width: ",[0,4],"; height: ",[0,40],"; left: ",[0,20],"; top: 50%; -webkit-transform: translateY(-50%); transform: translateY(-50%); border-radius: ",[0,2],"; }\n.",[1],"page-ranking-wraper .",[1],"right-content { box-sizing: border-box; }\n.",[1],"page-ranking-wraper .",[1],"right-content .",[1],"c-booklist .",[1],"desc { white-space: pre-line; }\n.",[1],"page-ranking-wraper .",[1],"right-content .",[1],"c-booklist .",[1],"right .",[1],"sku .",[1],"popularity { max-width: 50%; width: 50%; }\n.",[1],"page-ranking-wraper .",[1],"right-content .",[1],"c-booklist .",[1],"right .",[1],"sku .",[1],"popularity .",[1],"c-red { padding-right: ",[0,10],"; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/ranking/ranking.wxss:101:32)",{path:"./pages/ranking/ranking.wxss"});    
__wxAppCode__['pages/ranking/ranking.wxml']=$gwx('./pages/ranking/ranking.wxml');

__wxAppCode__['pages/reader/index.wxss']=setCssToHead([".",[1],"chaptersBox{ width: 100vw; height: 100vh; position: fixed; padding-top: ",[0,40],"; top: 0; left: 0; z-index: 999; overflow-y: auto; background: #fff; }\n@font-face {font-family: \x22iconfont\x22; src: url(data:font/ttf;base64,AAEAAAALAIAAAwAwR1NVQrD+s+0AAAE4AAAAQk9TLzI8jUgJAAABfAAAAFZjbWFw5z+17wAAAdwAAAFwZ2x5Zi4+QLoAAANUAAAAmGhlYWQWqnGAAAAA4AAAADZoaGVhB94DgwAAALwAAAAkaG10eAgAAAAAAAHUAAAACGxvY2EATAAAAAADTAAAAAZtYXhwARAAPAAAARgAAAAgbmFtZT5U/n0AAAPsAAACbXBvc3T8HjjfAAAGXAAAADUAAQAAA4D/gABcBAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAIAAQAAAAEAAJOA8TNfDzz1AAsEAAAAAADZxhcMAAAAANnGFwwAAAAABAACawAAAAgAAgAAAAAAAAABAAAAAgAwAAQAAAAAAAIAAAAKAAoAAAD/AAAAAAAAAAEAAAAKAB4ALAABREZMVAAIAAQAAAAAAAAAAQAAAAFsaWdhAAgAAAABAAAAAQAEAAQAAAABAAgAAQAGAAAAAQAAAAAAAQQAAZAABQAIAokCzAAAAI8CiQLMAAAB6wAyAQgAAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA5hfmFwOA/4AAXAOAAIAAAAABAAAAAAAABAAAAAQAAAAAAAAFAAAAAwAAACwAAAAEAAABVAABAAAAAABOAAMAAQAAACwAAwAKAAABVAAEACIAAAAEAAQAAQAA5hf//wAA5hf//wAAAAEABAAAAAEAAAEGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAABwAAAAAAAAAAQAA5hcAAOYXAAAAAQAAAAAATAAAAAQAAAAAA8ACawADABwALgAvAAA3IREhBTUuASchDgEHER4BMyEyNjc1PgE9ATQmIwcdAQ4BByEuATURNDYzITIWFxWRAhf96QMFAS4i/UwjLgEBLiMCtCIuARIXFxIoARcR/UwSFxcSArQRFwHTAUZSUiIuAQEuIv66Ii8vIlEBFxFSERcoUnoRFwEBFxEBRhEXFxF6AAAAAAASAN4AAQAAAAAAAAAVAAAAAQAAAAAAAQAIABUAAQAAAAAAAgAHAB0AAQAAAAAAAwAIACQAAQAAAAAABAAIACwAAQAAAAAABQALADQAAQAAAAAABgAIAD8AAQAAAAAACgArAEcAAQAAAAAACwATAHIAAwABBAkAAAAqAIUAAwABBAkAAQAQAK8AAwABBAkAAgAOAL8AAwABBAkAAwAQAM0AAwABBAkABAAQAN0AAwABBAkABQAWAO0AAwABBAkABgAQAQMAAwABBAkACgBWARMAAwABBAkACwAmAWkKQ3JlYXRlZCBieSBpY29uZm9udAppY29uZm9udFJlZ3VsYXJpY29uZm9udGljb25mb250VmVyc2lvbiAxLjBpY29uZm9udEdlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAAoAQwByAGUAYQB0AGUAZAAgAGIAeQAgAGkAYwBvAG4AZgBvAG4AdAAKAGkAYwBvAG4AZgBvAG4AdABSAGUAZwB1AGwAYQByAGkAYwBvAG4AZgBvAG4AdABpAGMAbwBuAGYAbwBuAHQAVgBlAHIAcwBpAG8AbgAgADEALgAwAGkAYwBvAG4AZgBvAG4AdABHAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAHMAdgBnADIAdAB0AGYAIABmAHIAbwBtACAARgBvAG4AdABlAGwAbABvACAAcAByAG8AagBlAGMAdAAuAGgAdAB0AHAAOgAvAC8AZgBvAG4AdABlAGwAbABvAC4AYwBvAG0AAAAAAgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAQIBAwALODBkaWFubGlhbmcAAAAAAA\x3d\x3d) format(\x27truetype\x27); }\n.",[1],"iconfont { font-family: \x22iconfont\x22 !important; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }\n.",[1],"icon-80dianliang:before { content: \x22\\E617\x22; }\n.",[1],"pagbg{ position: fixed; top: 0; left: 0; width: 100%; height: 100%; }\n.",[1],"zuizhong.",[1],"active{ opacity: 1; position: fixed; width: ",[0,100],"; text-align: center; font-size: ",[0,30],"; font-weight: bold; color: #ec706b; -webkit-transform: translateX(50%) scale(0.7); transform: translateX(50%) scale(0.7); right: ",[0,80],"; -webkit-transition: all 0.5s; z-index: 9 }\n.",[1],"zuizhong{ opacity: 0; position: fixed; width: ",[0,100],"; text-align: center; font-size: ",[0,20],"; font-weight: bold; color: #ec706b; right: ",[0,80],"; -webkit-transform: translateX(50%)  scale(0.1); transform: translateX(50%)  scale(0.1); -webkit-transition: all 0.5s; transition: all 0.5s; z-index: 9 }\n.",[1],"quanquan{ box-shadow: rgba(0,0,0,0.12) 0px 3px 13px 1px; position: fixed; right: ",[0,70],"; z-index: 9; border-radius: 50%; overflow: hidden; -webkit-transform: translateX(50%) scale(0.5); transform: translateX(50%) scale(0.5); }\n.",[1],"back{ width: ",[0,40],"; height: ",[0,40],"; margin: 0 ",[0,40],"; }\n.",[1],"sview{ width: calc(100% - ",[0,40],"); font-size: ",[0,45],"; line-height: ",[0,90],"; position: relative; text-indent:calc(2em + ",[0,12],"); margin: 0 auto; z-index: 5; white-space:normal; word-break:break-all; word-wrap:break-word; overflow: hidden; padding: 0 ",[0,20]," ",[0,30],"; }\n.",[1],"titlee{ width: 100%; font-size: ",[0,45],"; line-height: ",[0,65],"; position: relative; z-index: 5; padding: 0 ",[0,20]," ",[0,50],"; text-indent:-2.3em; }\n.",[1],"tMain{ display: -webkit-box; display: -webkit-flex; display: flex; -webkit-box-align:center; -webkit-align-items:center; align-items:center; }\nbody{ letter-spacing:",[0,6],"; }\n.",[1],"topBox{ position: fixed; top: 0; left: 0; width: 100%; opacity: 1; z-index: 9; }\n.",[1],"bottomBox{ padding: 0 0 ",[0,20]," 0; position: fixed; bottom: 0; left: 0; width: 100%; opacity: 1; z-index: 9; }\n.",[1],"bottomBox .",[1],"ddd\x3ewx-view{ width: 100%; text-align: center; font-size: ",[0,24],"; line-height: ",[0,40],"; }\n.",[1],"bottomBox .",[1],"ddd wx-image{ width: ",[0,40],"; height: ",[0,40],"; }\n@font-face {font-family: \x22ydiconfont\x22; src: url(\x27https://at.alicdn.com/t/font_1282539_9h0uwv1sxps.ttf\x27) format(\x27truetype\x27); }\n.",[1],"tficon{ font-family: ydiconfont; font-size: ",[0,34],"; }\n.",[1],"guanggao{ position: fixed; bottom: 0; left: 0; z-index: 6; width: 100%; }\n.",[1],"dianxin{ position: absolute; top: 32.5%; left: 11%; width: 72%; height: 35%; }\n.",[1],"dLiang{ position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: block; }\n.",[1],"anmt{ -webkit-transition: all 0.5s; transition: all 0.5s; }\n.",[1],"sekuai{ width: ",[0,150],"; height: ",[0,100],"; background-color: #EC706B; border-radius: ",[0,12],"; border: ",[0,5]," solid #000; -webkit-transform: scale(0.4); transform: scale(0.4); margin: ",[0,-10]," ",[0,-35]," 0; }\n.",[1],"zhongMenu{ top: 50%; position: fixed; left: 0; width: 100%; height: 50%; -webkit-transform: translateY(-50%); transform: translateY(-50%); z-index: 9; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/reader/index.wxss:133:17)",{path:"./pages/reader/index.wxss"});    
__wxAppCode__['pages/reader/index.wxml']=$gwx('./pages/reader/index.wxml');

__wxAppCode__['pages/ucenter/ucenter.wxss']=undefined;    
__wxAppCode__['pages/ucenter/ucenter.wxml']=$gwx('./pages/ucenter/ucenter.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
