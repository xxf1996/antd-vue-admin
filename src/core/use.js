import Vue from 'vue'
import vueStorage from 'vue-ls'
import config from '@/config/default-settings'

// base library
import antd from 'ant-design-vue'
import viser from 'viser-vue'
import vueCropper from 'vue-cropper'
import 'ant-design-vue/dist/antd.less'

// ext library
import vueClipboard from 'vue-clipboard2'
import permissionHelper from '@/utils/helper/permission'
// import '@/components/use'

vueClipboard.config.autoSetContainer = true

Vue.use(antd)
Vue.use(viser)

Vue.use(vueStorage, config.storageOptions)
Vue.use(vueClipboard)
Vue.use(permissionHelper)
Vue.use(vueCropper)
