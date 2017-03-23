### 使用方法

自行改成对应的 require 路径

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
