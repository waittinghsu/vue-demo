import Vue from 'vue';
import App from './App.vue';
import echarts from 'echarts';
import router from './router';
Vue.config.productionTip = false;

// echarts
echarts.registerTheme('custom', require('./config/echarts/themes/custom.json'));
// bootstrap
import {
    LayoutPlugin,
    NavbarPlugin,
    ModalPlugin,
    ListGroupPlugin,
    BadgePlugin,
    ButtonPlugin,
    LinkPlugin,
    InputGroupPlugin,
    FormPlugin,
    FormGroupPlugin,
    FormInputPlugin,
    FormTextareaPlugin,
    FormCheckboxPlugin,
    FormFilePlugin,
    PopoverPlugin
} from 'bootstrap-vue';
// bootstrap-vue
Vue.use(LayoutPlugin);
Vue.use(NavbarPlugin);
Vue.use(ModalPlugin);
Vue.use(ListGroupPlugin);
Vue.use(BadgePlugin);
Vue.use(ButtonPlugin);
Vue.use(LinkPlugin);
Vue.use(InputGroupPlugin);
Vue.use(FormPlugin);
Vue.use(FormGroupPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormTextareaPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(FormFilePlugin);
Vue.use(PopoverPlugin);
import { Slider, Dropdown, DropdownMenu, DropdownItem, Button, Timeline, TimelineItem, Card } from 'element-ui';
Vue.use(Card);
Vue.use(Button);
Vue.use(Slider);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Timeline);
Vue.use(TimelineItem);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
