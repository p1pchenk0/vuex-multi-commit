# vuex-multi-commit
[![npm](https://img.shields.io/npm/v/vuex-multi-commit.svg)](vuex-multi-commit) ![npm](https://img.shields.io/npm/dt/vuex-multi-commit.svg)

This package allows to combine code needed to commit multiple mutations inside one `commit` call.

## Installation
```javascript
  import Vuex from 'vuex'
  import 'vuex-multi-commit'

  Vue.use(Vuex)
```
For NUXT import this package inside main store module or inside `store.js` file

## Usage
Instead of:
```javascript
  this.$store.commit('doThis')
  this.$store.commit('doThat')
```
You can write:
```javascript
  this.$store.commit(['doThis', 'doThat'])
```
Instead of this:
```javascript
  this.$store.commit('doThis')
  this.$store.commit('doThat', 200300)
  this.$store.commit('andDoThis', 300600)
  this.$store.commit('andAlsoDoThat', 400700)
```
You can do:
```javascript
  this.$store.commit([
    'doThis',
    {
      'doThat': 200300,
      'andDoThis': 300600,
      'andAlsoDoThat': 400700
    }
  ])
```
If you want, you can use single object:
```javascript
  this.$store.commit({
    'doThis': 100500,
    'doThat': 200300,
    'andDoThis': 300600,
    'andAlsoDoThat': 400700
  })
```
Unfortunately, so far this package doesn't allow to use arrays or objects inside store modules except root.