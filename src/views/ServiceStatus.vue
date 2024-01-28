<template >
 <n-statistic label="统计数据" :value="99">
        <!-- <template #prefix>
          <n-icon>
            <md-save />
          </n-icon>
        </template> -->
        <template #suffix>
          / 100
        </template>
      </n-statistic>
</template>
<script setup lang="ts">
import { NStatistic } from 'naive-ui';
</script>