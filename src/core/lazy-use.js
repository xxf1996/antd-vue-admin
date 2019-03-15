import Vue from 'vue'
import vueStorage from 'vue-ls'
import config from '@/config/default-settings'

// base library
import '@/core/lazy_lib/components_use'
import viser from 'viser-vue'

// ext library
import vueClipboard from 'vue-clipboard2'
import permissionHelper from '@/utils/helper/permission'

vueClipboard.config.autoSetContainer = true

Vue.use(viser)

Vue.use(vueStorage, config.storageOptions)
Vue.use(vueClipboard)
Vue.use(permissionHelper)
