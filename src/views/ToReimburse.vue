<template>
    <n-layout has-sider position="absolute" >
            <n-layout-sider bordered content-style="padding: 24px 0px 0px 0px;justify-content:center;display: flex;" width="90">
                文件夹
            </n-layout-sider>
            <n-layout-content content-style="padding: 24px;">
               内容
            </n-layout-content>
            <!-- <n-layout>
                <n-layout-content content-style="padding: 24px;">平山道
                </n-layout-content>
            </n-layout> -->
        </n-layout>
</template>
<script setup lang="ts">
import { NLayout, NLayoutContent,NLayoutSider } from 'naive-ui';
</script>