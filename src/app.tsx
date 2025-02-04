import { Component, PropsWithChildren } from 'react'
import { Provider } from 'mobx-react'

import appStore from './store/app'

import './app.less'

const store = {
  appStore
}

class App extends Component<PropsWithChildren> {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
