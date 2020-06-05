import { observable, action, decorate } from 'mobx';

class addressStore {
  addresses = []

  add = (address) => {
    if(!this.addresses.find(current => current.id === address.id)){
      this.addresses.push(address)
    }
  }

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    this.addresses = result
  }

  remove = (index) => {
    this.addresses.splice(index, 1)
  }
}

decorate(addressStore, {
  addresses: observable,
  add: action,
  reorder: action,
  remove: action
})

export default addressStore