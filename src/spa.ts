import { h, createApp } from 'vue'
import singleSpaVue from 'single-spa-vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import { cssLifecycleFactory } from 'vite-plugin-single-spa/ex'

const lc = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App)
    }
  },
  handleInstance: (app, { base }: any) => {
    app.use(router(base))
    app.use(createPinia())
  }
})

const cssLc = cssLifecycleFactory('spa')
export const bootstrap = [cssLc.bootstrap, lc.bootstrap]
export const mount = [cssLc.mount, lc.mount]
export const unmount = [cssLc.unmount, lc.unmount]
