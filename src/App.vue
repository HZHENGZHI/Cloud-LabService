<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="themeOverrides">

    
    <n-message-provider>
        
        <router-view/>
</n-message-provider>
</n-config-provider>


</template>
<script setup lang="ts">
import {NMessageProvider, NConfigProvider,NDialogProvider} from "naive-ui";
import type { GlobalThemeOverrides } from 'naive-ui'
import { zhCN, dateZhCN } from 'naive-ui'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const route = useRouter()
route.beforeEach((to,from,next)=>{
  store.commit('resetState');
  next();
})
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#10A2FC',
    primaryColorHover: '#12A2FB',
    primaryColorPressed: '#FFC0CB'
    // primaryColorSuppl: '#4098FC'
  }
  // Button: {
  //     textColor: '#FF0000'
  // }
}

</script>
