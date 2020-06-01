import { observable, action, decorate } from 'mobx';

class addressStore {
  addresses = []

  add = (address) => {
    if(!this.addresses.find(current => current.id === address.id)){
      this.addresses.push(address)
    }
  }

  remove = (index) => {
    this.addresses.splice(index, 1)
  }
}

decorate(addressStore, {
  addresses: observable,
  add: action,
  remove: action
})

export default addressStore