(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ble/ble"],{4814:function(e,t,a){"use strict";var n=a("7600"),l=a.n(n);l.a},7600:function(e,t,a){},"9f64":function(e,t,a){"use strict";a.r(t);var n=a("c2e0"),l=a.n(n);for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);t["default"]=l.a},a3eb:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},l=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return l})},bbf9:function(e,t,a){"use strict";a.r(t);var n=a("a3eb"),l=a("9f64");for(var o in l)"default"!==o&&function(e){a.d(t,e,function(){return l[e]})}(o);a("4814");var i=a("2877"),c=Object(i["a"])(l["default"],n["a"],n["b"],!1,null,"2f7e7fcd",null);t["default"]=c.exports},c2e0:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{bleData:[],bleIndex:[],modalName:"",available:!1,discovering:!1}},mounted:function(){var e=this;e.initBle(),setInterval(function(){setTimeout(function(){e.available||e.initBle()},0)},2e3)},methods:{hideModal:function(){this.modalName=""},ab2hex:function(e){var t=Array.prototype.map.call(new Uint8Array(e),function(e){return("00"+e.toString(16)).slice(-2)});return t.join("")},getBleState:function(){var t=this;e.onBluetoothAdapterStateChange(function(e){t.available=e.available,t.discovering=e.discovering,console.log("蓝牙是否可用："+e.available," at pages\\ble\\ble.vue:91"),console.log("蓝牙是否搜索："+e.discovering," at pages\\ble\\ble.vue:92"),t.available?t.modalName="":t.modalName="isOpenBle"})},initBle:function(){var t=this,a=1;e.openBluetoothAdapter({success:function(n){console.log(n," at pages\\ble\\ble.vue:109"),"openBluetoothAdapter:ok"==n.errMsg&&(console.log("************************初始化蓝牙成功************************"," at pages\\ble\\ble.vue:111"),t.getBleState(),e.startBluetoothDevicesDiscovery({services:[],success:function(n){console.log("************************开始搜寻旧蓝牙************************"," at pages\\ble\\ble.vue:118"),e.getBluetoothDevices({success:function(e){console.log(e," at pages\\ble\\ble.vue:122"),e.devices[0]&&console.log(t.ab2hex(e.devices[0].advertisData)," at pages\\ble\\ble.vue:124")}}),console.log("************************开始搜寻新蓝牙************************"," at pages\\ble\\ble.vue:129"),e.onBluetoothDeviceFound(function(e){console.log("************************新蓝牙 "+a+"************************"," at pages\\ble\\ble.vue:133"),a++;var n=e.devices[0];-1==t.bleIndex.indexOf(n.deviceId)&&(""==n.name?(t.bleData.push({name:n.deviceId,id:n.deviceId,tag:!1}),t.bleIndex.push(n.deviceId)):(t.bleData.push({name:n.name,id:n.deviceId,tag:!0}),t.bleIndex.push(n.deviceId)))})}}))},fail:function(e){(e.errCode="10001")&&(t.modalName="isOpenBle")}})}}};t.default=a}).call(this,a("6e42")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/ble/ble-create-component',
    {
        'pages/ble/ble-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("bbf9"))
        })
    },
    [['pages/ble/ble-create-component']]
]);                
