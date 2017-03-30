import 'es6-promise/auto'
import 'es6-object-assign/auto'

import { app, store } from './main'

store.replaceState(window.__INITIAL_STATE__)

app.$mount('#app')
