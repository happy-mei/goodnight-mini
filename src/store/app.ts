import { observable } from 'mobx'

const appStore = observable({
  isUpdate: false,
  setUpdate(val) {
    this.isUpdate = val
  },
})

export default appStore