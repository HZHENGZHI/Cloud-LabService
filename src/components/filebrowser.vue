<template >
    <!-- {{ route.query.type }} -->
    <n-data-table :columns="columns" :bordered="false" v-model:data="data" style="height: 105%;width:100%" :row-key="rowKey"
        flex-height @update:checked-row-keys="handleCheck" size="large" :loading="isLoading" />
    <n-modal v-model:show="isCopy" :mask-closable="false" preset="dialog" title="复制到"  positive-text="复制到此"
        negative-text="取消" @positive-click="isCopy=false" @mask-click="isCopy=false" @negative-click="isCopy=false" :autoFocus="false" :show-icon="false">
        kkskskskks
    </n-modal>
    <n-modal v-model:show="isMove" :mask-closable="false" preset="dialog" title="移动到" positive-text="移动到此"
        negative-text="取消" @positive-click="isMove=false" @mask-click="isMove=false" @negative-click="isMove=false" :autoFocus="false" :show-icon="false">
        kskkskkskskskksksk    
    </n-modal>
</template>
<script setup lang="ts">
import router from "@/router/index"
import { useRouter, useRoute } from 'vue-router'
import type { DataTableColumns, DataTableRowKey } from 'naive-ui'
import { NDataTable, NIcon, NTime, NButton, useMessage, NA,NModal, NPopconfirm, NInput, useDialog, NDialogProvider } from 'naive-ui'
import { h, Component, ref, shallowRef } from 'vue';
import {
    FolderAddOutlined as addfolder,
    FileAddOutlined as addfile,
    // FolderOutlined as folder,
    SwapOutlined as swap
} from '@vicons/antd'
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
    FolderOutline as folder,
    CheckmarkDoneOutline as checkmark
} from '@vicons/ionicons5';
const router1 = useRouter()
const route = useRoute()
console.log(route.query)
const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))
var isCopy=ref(false)
var isLoading = ref(false)
var isMove=ref(false)
const dialog1 = useDialog();
type RowData = {
    key: number
    name: string
    age: string
    address: string,
    icon: string
}
const createColumns = (): DataTableColumns<RowData> => [
    {
        type: 'selection',
        disabled(row: RowData) {
            return row.name === 'Edward King 3'
        }
    },
    {
        title: '文件名',
        key: 'name',
        width: '250',
        minWidth: '150',
        // defaultSortOrder: 'false',
        sorter: 'default',
        render(row) {
            return h('div', { style: { display: 'flex', alignItems: 'center' } }, [
                h(NIcon, null, { default: () => h(row.icon) }),
                h(NButton, {
                    text: true, focusable: false, onClick(event) {
                        message.info(row.name)
                        // setTimeout(`console.log("你好")`, 10000)
                        repeatedGreetings()
                        // isLoading.value=false
                        console.log("123")
                        console.log(data)
                        router.push({
                            path: '/disk/detail',
                            query: {
                                category: 'all',
                                type: row.name
                            }
                        });
                    }
                }, row.name,)
            ])
        }
    },
    {
        title: '创建时间',
        key: 'createtime',
        width: '200',
        render(row) {
            return h(NTime, { time: Math.floor(Math.random() * (new Date().getTime() - new Date('2022-01-01').getTime() + 1)) + new Date('2022-01-01').getTime() })
        }
    },
    {
        title: '操作',
        key: 'address',
        width: '150',
        render(row) {
            // 重命名、下载、删除、移动、分享
            return h('div', [
                h('a', { download }, [h(NButton, { size: 'tiny', style: { marginRight: '5px' }, onClick() { const fileUrl = 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'; console.log(row.name); window.open(fileUrl); }, }, { icon: () => h(download) })]),
                // h(NButton, { size: 'tiny', style: { marginRight: '5px' } }, { icon: () => h(create) }),
                h(NPopconfirm, { onPositiveClick() { console.log('123') }, onNegativeClick() { console.log('12333') }, showIcon: false, negativeButtonProps: { size: 'tiny' }, positiveButtonProps: { size: 'tiny' } }, { default: () => h(NInput, { size: 'tiny', placeholder: row.name }), trigger: () => h(NButton, { size: 'tiny' }, { icon: () => h(create) }) }),
                h(NButton, { size: 'tiny', style: { marginRight: '5px' },onClick(){isCopy.value=true} }, { icon: () => h(copy) }),
                h(NButton, { size: 'tiny', style: { marginRight: '5px' },onClick(){isMove.value=true} }, { icon: () => h(move) }),
                h(NButton, {
                    size: 'tiny', style: { marginRight: '0px' }, onClick() {
                        dialog1.info({
                            title: '确认删除',
                            content: '确认删除' + row.name,
                            positiveText: '确认',
                            negativeText: '取消',
                            onPositiveClick: () => {
                                message.success('已经删除文件')
                            },
                            onNegativeClick: () => {
                                message.error('撤销删除文件')
                            },
                            autoFocus: false
                        })
                    }
                }, { icon: () => h(trash) })
            ])
        }
    }
]
var data = shallowRef(Array.from({ length: 20 }).map((_, index) => ({
    name: `Edward King ${index}`,
    age: 32,
    address: `London, Park Lane no. ${index}`,
    icon: folder
})))
const columns = createColumns()
var checkedRowKeysRef = <DataTableRowKey[]>([])
var pagination = { pageSize: 7 }
const rowKey = (row: RowData) => row.address
const emit = defineEmits(['message-received'])
import { useStore } from 'vuex'
const store = useStore()
function handleCheck(rowKeys: DataTableRowKey[]) {
    checkedRowKeysRef = rowKeys;
    // emit('message-received', checkedRowKeysRef);
    const entries = Object.entries(checkedRowKeysRef)
    console.log(typeof entries)
    var arr: String[] = []
    for (const [key, value] of entries) {
        arr.push(String(value)) // 输出键值对：a 1, b 2, c 3
    }
    console.log(arr)
    store.commit('increment', arr)
}
// router.push({path:'/disk/detail/'})
const message = useMessage()
const repeatedGreetings = async () => {
    isLoading.value = true
    await sleep(1000)
    data.value = Array.from({ length: 20 }).map((_, index) => ({
        name: `Edward 999222 ${index}`,
        age: 999222,
        address: `London, Park Lane no. ${index}`,
        icon: folder
    }))
    await sleep(1000)
    isLoading.value = false
    await sleep(1000)
    console.log(3)
}
function rowProps(row: RowData) {
    return {
        style: 'cursor: pointer;',
        onClick: () => {
            // isLoading.value=true
            message.info(row.name)
            // setTimeout(`console.log("你好")`, 10000)
            repeatedGreetings()
            // isLoading.value=false
            console.log("123")
            console.log(data)
            router.push({
                path: '/disk/detail',
                query: {
                    category: 'all',
                    type: row.name
                }
            });
        }
    }
}
function handlePositiveClick() {
    console.log('12333333')
    message.info('是的')
}
function handleNegativeClick() {
    message.info('并不')
}
</script>
    