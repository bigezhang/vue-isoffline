const isofflinePlugin = {
  install (Vue, options = {}) {
    const vm = new Vue({
      data: {
        isoffline: !window.navigator.onLine
      }
    })
    window.addEventListener('online', function handleOnLine (e) {
      vm.$data.isoffline = false
    })
    window.addEventListener('offline', function handleOffLine (e) {
      vm.$data.isoffline = true
    })
    Vue.mixin({
      computed: {
        isOffLine () {
          return vm.$data.isoffline
        }
      }
    })
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(isofflinePlugin)
}

export default isofflinePlugin
