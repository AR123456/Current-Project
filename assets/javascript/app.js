//phone number handler 
const phoneHandler = {
  set(target, name, value) {
    target[name] = value.match(/[0-9]/g).join("");
  },
  get(target, name) {
    return target[name].replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
}

const phoneNumbers = new Proxy({}, phoneHandler);