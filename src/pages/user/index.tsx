import { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, OpenData, Navigator } from '@tarojs/components'
import './index.less'

interface State {}

export default class Index extends Component<{}, State> {

  constructor() {
    super()
    this.state = {}
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config: Taro.Config = {
    navigationBarTitleText: '我的'
  }

  onShareAppMessage () {
    return {
      title: '晚安打卡，告别熬夜～',
      path: '/pages/index/index'
    }
  }

  render () {
    return (
      <View className='user'>
        <View className='user__info'>
          <OpenData className='user__info__avator' type='userAvatarUrl'></OpenData>
          <OpenData className='user__info__name' type='userNickName'></OpenData>
        </View>
        <View className='user__menu'>
          <Navigator url='https://github.com/seminelee/goodnight-mini/issues' className='user__menu__item' hover-class='navigator-hover'>去github提需求</Navigator>
        </View>
      </View>
    )
  }
}
