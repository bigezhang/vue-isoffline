## vue-isoffline [![Travis](https://img.shields.io/travis/rust-lang/rust.svg)]()

> A tiny plugin to detect offline status & respond to changes in the browser for vue.js 2.x

### Installation

```
npm install -S vue-isoffline

```

### Usage

```
import VueisOffLine from 'vue-isoffline'
Vue.use(VueisOffLine)
```
```
<h1 v-if="isOffLine">offline</h1>

or

watch: {
  isOffLine (val) {
    if (val) {
      console.log('I am offline')
    }
  }
}
```




