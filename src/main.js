import { createApp } from 'vue'
import App from './App.vue'
import { loadFonts } from './plugins/webfontloader'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

loadFonts()
const vuetify = createVuetify({
  components,
  directives,
})
createApp(App)
  .use(vuetify)
  .mount('#app')
