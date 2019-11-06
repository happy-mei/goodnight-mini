import './index.less';
import { formatTime, getDayCn } from '../../utils';
import '@tarojs/async-await';
import { ScrollView, Text, View } from '@tarojs/components';
import Taro, { Component, Config } from '@tarojs/taro';

interface ListItem {
  date: string,
  timestamp: number
}

interface State {
  list: ListItem[]
}

export default class Index extends Component<{}, State> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '数据'
  }

  constructor() {
    super()
    this.state = {
      list: []
    }
  }

  componentWillMount () { }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () {
    this.getListData()
  }

  componentDidHide () { }

  render () {
    return (
      <ScrollView scrollY={true} className="list">
        {this.state.list.map((item: ListItem) => (
          <View className="list__item" key={item.date}>
            <Text className="list__item__date">{item.date}</Text>
            <Text className="list__item__day">{getDayCn(new Date(item.timestamp))}</Text>
            <Text className="list__item__time">{formatTime(new Date(item.timestamp))}</Text>
          </View>
        ))}
      </ScrollView>
    )
  }

  async getListData() {
    Taro.showLoading()
    try {
      const resp = await Taro
        .cloud
        .callFunction({
          name: "list"
        })
      // console.log(resp)
      if (resp.result) {
        this.setState({
          list: resp.result
        })
      } else {
        Taro.showToast({
          title: '获取数据失败，请稍后再试',
          icon: 'none',
          duration: 2000
        })
      }
    } catch(e) {
      console.error(e.toString())
      Taro.showToast({
        title: '获取数据出错，请联系管理员',
        icon: 'none',
        duration: 2000
      })
    }
    Taro.hideLoading()
  }
}
