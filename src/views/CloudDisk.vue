<template>
    <n-layout has-sider position="absolute">
        <n-layout-sider bordered content-style="padding: 12px 0px 0px 0px;justify-content:center;display: flex;"
            collapse-mode="width" :collapsed-width="64" show-trigger width="160" v-model:collapsed="collapsed">
            <n-menu :root-indent="Number(24)" :indent="Number(12)" :options="menuOptions"
                @update:expanded-keys="handleUpdateExpandedKeys" :collapsed-width="64" :collapsed-icon-size="22"
                default-value="all" />
        </n-layout-sider>
        <n-layout-content content-style="padding: 12px 12px 0px 12px;">
            <div style="display:flex;margin-bottom: 10px;">
                <div>
                    <n-space :size="[Number(20), Number(1)]">
                        <n-upload action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f" :headers="{
                            'naive-info': 'hello!'
                        }" :data="{
    'naive-data': 'cool! naive!'
}">
                            <n-button round size="tiny" @click="router.push({ name: 'kkk', query: { cc: '123', } });">
                                上传
                                <template #icon>
                                    <n-icon>
                                        <upload />
                                    </n-icon>
                                </template>
                            </n-button>
                        </n-upload>

                        <n-button-group>
                            <!-- <n-button round size="tiny">
                                <template #icon>
                                    <n-icon>
                                        <addfolder></addfolder>
                                    </n-icon>
                                </template>
                                创建文件夹
                            </n-button> -->
                            <n-popconfirm @positive-click="handlePositiveClick" @negative-click="handleNegativeClick"
                                :show-icon="false" :negative-button-props="{ size: 'tiny' }"
                                :positive-button-props="{ size: 'tiny' }" negative-text="取消" positive-text="创建">
                                <template #icon>
                                    <n-icon color="black">
                                        <addfolder />
                                    </n-icon>
                                </template>
                                <template #trigger>
                                    <n-button round size="tiny">
                                        <template #icon>
                                            <n-icon>
                                                <addfolder></addfolder>
                                            </n-icon>
                                        </template>
                                        创建文件夹
                                    </n-button>
                                </template>
                                <n-input-group>
                                    <n-input placeholder="创建文件夹" size="tiny" />
                                </n-input-group>
                            </n-popconfirm>
                            <n-button ghost size="tiny" @click="OnlineFile = true">
                                <template #icon>
                                    <n-icon>
                                        <addfile />
                                    </n-icon>
                                </template>
                                创建在线文档
                            </n-button>
                            <n-button round size="tiny" @click="MulDown = true"
                                :disabled="(store.state.checkfilelist.length) <= 1">
                                <template #icon>
                                    <n-icon>
                                        <download></download>
                                    </n-icon>
                                </template>
                                批量下载
                            </n-button>
                        </n-button-group>
                    </n-space>
                </div>
                <div style="margin-left: auto;margin-right: 10px;display: flex;">
                    <n-button size="tiny" circle style="margin-right: 10px;" @click="UpDown = true">
                        <template #icon>
                            <n-icon style="transform: rotate(90deg) scaleX(-1);">
                                <swap></swap>
                            </n-icon>
                        </template>
                    </n-button>
                    <n-input-group style="height: 22px;">
                        <n-input round size="tiny" />
                        <n-button round size="tiny">
                            搜索
                        </n-button>
                    </n-input-group>
                </div>
            </div>
            <div style="height: 91%;display: flex;width: 100%;">
                <div style="height: 94%;width: 80%;">
                    <n-dialog-provider>
                        <filebrowser></filebrowser>
                    </n-dialog-provider>
                </div>
                <div style="width: 20%;margin-left: 10px;">

                    <n-thing>
                        <template #avatar>
                            <n-icon>
                                <folder style="font-size: 23px;" />
                            </n-icon>
                        </template>
                        <template #header>
                            文件名称
                        </template>

                        <n-divider style="margin-top: -10px;margin-bottom: 5px;" />

                        <n-thing style="margin-left:10px;">
                            <div v-for="(value, key) in store.state.checkfilelist" :key="key"
                                style="display: flex;text-align: center;">
                                <n-icon style="margin-right: 10px;margin-bottom: 10px;">
                                    <folder style="font-size: 23px;" />
                                </n-icon>
                                <span>{{ value }}</span>
                            </div>
                        </n-thing>

                    </n-thing>
                </div>
            </div>
        </n-layout-content>
    </n-layout>
    <n-drawer v-model:show="UpDown" :width="300" :auto-focus="false">
        <n-drawer-content title="传输列表">
            上传(未完成/总数量)
            <div>
                <!-- </div> -->
                <div>

                    <span>文件名.txt</span>
                    <div style="display:flex;text-align: center;">

                        <n-progress type="line" :percentage="90" />
                        <n-button class="k1" size="tiny" text circle :focusable="false">
                            <template #icon>
                                <n-icon>
                                    <play></play>
                                </n-icon>
                            </template>
                        </n-button>
                        <n-button class="k1" size="tiny" text circle :focusable="false">
                            <template #icon>
                                <n-icon>
                                    <pause></pause>
                                </n-icon>
                            </template>
                        </n-button>
                        <n-button class="k1" size="tiny" text circle :focusable="false">
                            <template #icon>
                                <n-icon>
                                    <checkmark></checkmark>
                                </n-icon>
                            </template>
                        </n-button>
                        <n-button class="k1" size="tiny" text circle :focusable="false">
                            <template #icon>
                                <n-icon>
                                    <close></close>
                                </n-icon>
                            </template>
                        </n-button>
                    </div>
                    <n-text depth="3">
                        1月9日
                    </n-text>
                </div>
                <div style="">
                    <span>文件名.gif</span>
                    <div style="display:flex;text-align: center;">

                        <n-progress type="line" :percentage="9" :show-indicator="true" processing />
                        <n-button class="k2" size="tiny" circle text :focusable="false">
                            <template #icon>
                                <n-icon style="">
                                    <close></close>
                                </n-icon>
                            </template>
                        </n-button>
                    </div>
                </div>
                <div style="">
                    <span>文件名.pdf</span>
                    <div style="display: flex;">
                        <n-progress type="line" :percentage="10" :show-indicator="true" />
                        <n-button class="k1" size="tiny" circle text :focusable="false">
                            <template #icon>
                                <n-icon>
                                    <close></close>
                                </n-icon>
                            </template>
                        </n-button>
                    </div>
                </div>
            </div>
            <n-divider />
            离线下载
            <div>

                <span>文件名.txt</span>
                <div style="display:flex;text-align: center;">

                    <n-progress type="line" :percentage="90" />
                    <n-button class="k1" size="tiny" text circle :focusable="false">
                        <template #icon>
                            <n-icon>
                                <play></play>
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button class="k1" size="tiny" text circle :focusable="false">
                        <template #icon>
                            <n-icon>
                                <pause></pause>
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button class="k1" size="tiny" text circle :focusable="false">
                        <template #icon>
                            <n-icon>
                                <checkmark></checkmark>
                            </n-icon>
                        </template>
                    </n-button>
                    <n-button class="k1" size="tiny" text circle :focusable="false">
                        <template #icon>
                            <n-icon>
                                <close></close>
                            </n-icon>
                        </template>
                    </n-button>
                </div>
                <n-text depth="3">
                    1月9日
                </n-text>
            </div>
        </n-drawer-content>
    </n-drawer>

    <n-modal v-model:show="OnlineFile" class="custom-card" preset="card" title="文件预览" size="medium" :auto-focus="false"
        :bordered="false" style="width:800px" :mask-closable="false">
        内
    </n-modal>

    <n-modal v-model:show="MulDown">
        <n-card style="width: 600px" title="模态框" :bordered="false" size="huge" role="dialog" aria-modal="true">
            <template #header-extra>
                噢！
            </template>
            {{ store.state.checkfilelist }}
            <template #footer>
                尾部
            </template>
        </n-card>
    </n-modal>
</template>
<script setup lang="ts">
import { NDataTable,NDialogProvider, NLayout, NCard, NPopconfirm, NProgress, NText, NUpload, NDrawer, NDrawerContent, NModal, NThing, NTag, NDivider, NLayoutContent, NTime, NLayoutSider, NSpace, NMenu, NIcon, useMessage, NSwitch, NButton, NButtonGroup, NInput, NInputGroup } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import type { DataTableColumns, DataTableRowKey } from 'naive-ui'
import {
    ImagesOutline as Images,
    FileTrayFullOutline as file,
    DocumentsOutline as Documents,
    CloudUploadOutline as upload,
    DownloadOutline as download,
    TrashOutline as trash,
    CopyOutline as copy,
    Move as move,
    CreateOutline as create,
    CloseCircleOutline as close,
    PauseOutline as pause,
    PlayOutline as play,
    CheckmarkDoneOutline as checkmark
} from '@vicons/ionicons5';
import {
    FolderAddOutlined as addfolder,
    FileAddOutlined as addfile,
    FolderOutlined as folder,
    SwapOutlined as swap
} from '@vicons/antd'
import { BorderFull as border } from '@vicons/carbon'
import { VideoClipMultiple20Regular as video } from '@vicons/fluent'
import { h, Component, ref } from 'vue';
import router from "@/router/index"
import filebrowser from "@/components/filebrowser.vue"
import { useStore } from 'vuex'
const store = useStore()
function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
    // {
    //     label: '文件夹',
    //     key: 'file',
    //     icon: renderIcon(file),
    //     children: [
    {
        label: '所有文件',
        key: 'all',
        icon: renderIcon(border)
    },
    {
        label: '图片',
        key: 'images',
        icon: renderIcon(Images),
    },
    {
        label: '视频',
        key: 'video',
        icon: renderIcon(video)
    },
    {
        label: '文档',
        icon: renderIcon(Documents),
        key: 'document',
    }
    //     ]
    // }
]
var collapsed = ref(true)
function collapsedfuc() {
    return !collapsed
}
var UpDown = ref(false)
var OnlineFile = ref(false)
var MulDown = ref(false)
const bodyStyle = {
    width: '600px'
}
const message = useMessage()
function handleUpdateExpandedKeys(keys: string[]) {
    message.info('[onUpdate:expandedKeys]: ' + JSON.stringify(keys))
}
function handlePositiveClick() {
    message.info('是的')

}
function handleNegativeClick() {
    message.info('并不')

}
// 导航栏配置
</script>