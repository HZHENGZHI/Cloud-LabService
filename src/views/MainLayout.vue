<template>
    <n-layout style="height: 100vh;width: 100vw;">
        <n-layout-header style="height: 64px; padding: 24px" bordered>
            <div style="display: flex;">
                <div>
                    <span>
                        实验室云盘及报销系统
                    </span>
                </div>
                <div style="margin-left: auto; margin-right: 10px;">
                    
                    <n-dropdown trigger="click" :options="options">
                        <n-button text style="font-size: 14px">
                            <n-icon>
                                <person-outline />
                            </n-icon>
                        </n-button>
                    </n-dropdown>

                </div>
            </div>
        </n-layout-header>
        <n-layout has-sider position="absolute" style="top: 64px; bottom: 40px;">
            <n-layout-sider bordered content-style="padding: 7px 0px 0px 0px;justify-content:center;display: flex;"
                width="110">
                <!-- <n-space style="height:40px;width: 30px;" justify="center">
                    <n-icon size="30">
                        <cloud-app />
                    </n-icon>
                    <n-p style="font-size: 7px;margin-top: -15px;">云盘</n-p>
                </n-space> -->

                <n-menu :root-indent=rootIndent :options="menuOptions" @update:value="handleUpdateValue"
                    :default-value=defaultSelectKey />

                <!-- <div >
                </div> -->
            </n-layout-sider>
            <n-layout-content content-style="padding: 24px;">
                <router-view />
            </n-layout-content>
            <!-- <n-layout>
                <n-layout-content content-style="padding: 24px;">平山道
                </n-layout-content>
            </n-layout> -->
        </n-layout>
        <n-layout-footer bordered position="absolute" style="height: 40px; padding: 12px">
            <span>嘎嘎好用</span>
            <n-divider vertical />
            <span>我是你爹</span>
        </n-layout-footer>
    </n-layout>
</template>
<script setup lang="ts">
import { NLayout, NH2, NLayoutSider, NButton, NMenu,NDropdown, NLayoutHeader, useMessage, NLayoutFooter, NDivider, NSpace, NIcon, NP, NLayoutContent } from 'naive-ui'
import { CloudApp, Finance } from '@vicons/carbon'
import { LogoTux, PersonOutline } from '@vicons/ionicons5'
import type { MenuOption } from 'naive-ui'
import { h, Component } from 'vue'
import { RouterLink } from 'vue-router'
import router from "@/router/index"
import { useRouter, useRoute } from 'vue-router'
function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}
const rootIndent = 12
const menuOptions: MenuOption[] = [
    {
        label: '云盘',
        key: 'yundisk',
        icon: renderIcon(CloudApp),
        disabled: false,
        path: '/disk'
        // children: [
        //   {
        //     label: '鼠',
        //     key: 'rat'
        //   }
        // ]
    },
    {
        label: '服务器',
        key: 'service',
        icon: renderIcon(LogoTux),
        disabled: false,
        path: '/index'
    },
    {
        label: '报销',
        key: 'baoxiao',
        icon: renderIcon(Finance),
        disabled: false,
        path: '/reimburse'
    }
]
const options= [
        {
          label: '用户资料',
          key: 'profile',
         
        },
        {
          label: '设置',
          key: 'editProfile',
          
        },
        {
          label: '退出登录',
          key: 'logout',
         
        }
      ]
const message = useMessage()
const route = useRoute()
router.push({ path: String('/disk') })
const defaultSelectKey = "yundisk"
function handleUpdateValue(key: string, item: MenuOption) {
    // message.info('[onUpdate:value]: ' + JSON.stringify(key))
    // message.info('[onUpdate:value]: ' + JSON.stringify(item))
    router.push({ path: String(item.path) })
}

</script>
