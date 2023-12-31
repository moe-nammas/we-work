import Vue from 'vue'
import App from './App.vue'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import './assets/main.css'

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

new Vue({
  render: (h) => h(App)
}).$mount('#app')
