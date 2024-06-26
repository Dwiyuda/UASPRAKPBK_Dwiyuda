import { createApp } from 'vue'
import { Quasar } from 'quasar'
import App from './App.vue'
import router from './router'


import 'quasar/dist/quasar.css'


import '@quasar/extras/material-icons/material-icons.css'


import { Notify } from 'quasar'

const app = createApp(App)

app.use(Quasar, {
  plugins: {
    Notify
  }
})

app.use(router)

app.mount('#app')
