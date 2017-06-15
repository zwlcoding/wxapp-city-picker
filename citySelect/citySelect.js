var cityData = require('./cityData')

//数据
const city={
  provinceState:{
    data: null,
    selectedId: null,
    index: 0
  },
  cityState:{
    data: null,
    selectedId: null,
    index: 0
  },
  areaState:{
    data: null,
    selectedId: null,
    index: 0
  }
};

const citySelect = {
  init: function( that ){

    var _this = this;
    city.provinceState.data = cityData.province
    //设置默认省市区
    city.provinceState.selectedId = 110000; //北京市  省
    city.cityState.selectedId = 110100;     //市辖区  市
    city.areaState.selectedId = 110101;     //东城区  区

    that.setData({
      'city': city
    })

    //过滤对应的数据
    _this.filterCity( that )
    _this.filterArea( that )

    let bindProvinceChange = function( e ){
      var pIndex = e.detail.value
      var pSelectedId = that.data.city.provinceState.data[pIndex].code
      console.log( pIndex )
      console.log( pSelectedId )
      that.setData({
        'city.provinceState.index':e.detail.value,
        'city.provinceState.selectedId': pSelectedId,
        'city.cityState.index': 0,
        'city.areaState.index': 0
      })
      _this.filterCity( that )
      _this.filterArea( that )
    }

    let bindCityChange = function(e){
      var pIndex = e.detail.value
      var pSelectedId = that.data.city.cityState.data[pIndex].code
      console.log( pIndex )
      console.log( pSelectedId )
      that.setData({
        'city.cityState.index':e.detail.value,
        'city.cityState.selectedId': pSelectedId,
        'city.areaState.index': 0
      })
      _this.filterArea( that )
    }

    let bindAreaChange = function(e){
      var pIndex = e.detail.value
      var pSelectedId = that.data.city.areaState.data[pIndex].code
      console.log( pIndex )
      console.log( pSelectedId )
      that.setData({
        'city.areaState.index':e.detail.value,
        'city.areaState.selectedId': pSelectedId
      })
    }


    //初始化 change 事件
    that['bindProvinceChange'] = bindProvinceChange;
    that['bindCityChange'] = bindCityChange;
    that['bindAreaChange'] = bindAreaChange;

  },
  filterCity: function( that ){

    console.log('过滤市数据')
    var _this = this;
    var _city = that.data.city
    console.log(_city)

    // es6 过滤器
    console.log( cityData.city )
    console.log( _city.provinceState.selectedId )
    _city.cityState.data = cityData.city.filter( ( item, index ) => {
      return item.parentId === _city.provinceState.selectedId
    })
    console.log(_city.cityState.data)

    _city.cityState.selectedId = _city.cityState.data[0] && _city.cityState.data[0].code

    that.setData({
      'city': _city
    })

  },
  filterArea: function(that){

    var _this = this;
    var _city = that.data.city
    console.log('过滤县级数据')

    // es6 过滤器
    _city.areaState.data = cityData.area.filter( ( item, index ) => {
      return item.parentId === _city.cityState.selectedId
    })
    _city.areaState.selectedId = _city.areaState.data[0] && _city.areaState.data[0].code

    that.setData({
      'city': _city
    })

  }
}


module.exports =  citySelect
