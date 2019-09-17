import Vue from 'vue'
// import VConsole from 'vconsole'
import App from './App.vue'
import store from './store'

// Vue.use(Test)
// import sscui from '@sscui/ui'
// import '@sscui/theme/src/index.scss';

// import { use } from '@sscui/locale';
// import en from '@sscui/locale/lang/en';
// import zh from '@sscui/locale/lang/zh_CN';

// const lang = {
//   en,
//   zh
// };

// const language = 'zh';
// use(lang[language]);

// let vConsole = new VConsole()
// Vue.use(vConsole)
// Vue.use(sscui, {
//   apiBaseURL: '/test'
// });
// Vue.config.productionTip = false

// Vue.use(CoursewareTeacher)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
