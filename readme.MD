### 使用方法

自行改成对应的 require 路径

省市区三级数据[官方](http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/201504/t20150415_712722.html)

![](https://raw.githubusercontent.com/zwlcoding/wxapp-city-picker/master/demo/data.png)
![](https://raw.githubusercontent.com/zwlcoding/wxapp-city-picker/master/demo/pic1.png)
![](https://raw.githubusercontent.com/zwlcoding/wxapp-city-picker/master/demo/pic2.png)
![](https://raw.githubusercontent.com/zwlcoding/wxapp-city-picker/master/demo/pic3.png)
![](https://raw.githubusercontent.com/zwlcoding/wxapp-city-picker/master/demo/demo.gif)



```js
var citySelect = require('../../../ui/citySelect/citySelect.js')

onload: function(){
     var that = this
     citySelect.init(that)
}
```

```css

@import '../../../ui/citySelect/citySelect.css';

```

```html
<import src="/ui/citySelect/citySelect.wxml" />

<template is="addressPicker" data="{{ ...city }}"/>
```
