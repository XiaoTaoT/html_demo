<template>
  <div class="data-processing-dag-node">
    <div class="main-area">
      <div class="main-info">
        <i class="node-logo"
           style="background-image: url(&quot;https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*RXnuTpQ22xkAAAAAAAAAAAAADtOHAQ/original&quot;);"></i>
        <div class="ellipsis-row node-name">数据输入_1</div>
      </div>
      <div class="status-action">
        <i class="status-icon status-icon-success"></i>
        <div class="more-action-container">
          <i class="more-action"></i>
        </div>
      </div>
    </div>
    <div class="plus-dag">
      <i class="ant-dropdown-trigger plus-action"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.node {
  border-color: #3471f9;
}

.main-area {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px;
  width: 180px;
  height: 48px;
  color: rgba(0, 0, 0, 65%);
  font-size: 12px;
  font-family: PingFangSC;
  line-height: 24px;
  background-color: #fff;
  box-shadow: 0 -1px 4px 0 rgb(209 209 209 / 50%), 1px 1px 4px 0 rgb(217 217 217 / 50%);
  border-radius: 2px;
  border: 1px solid transparent;
}

.node-logo {
  display: inline-block;
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}

.node-name {
  overflow: hidden;
  display: inline-block;
  width: 70px;
  margin-left: 6px;
  color: rgba(0, 0, 0, 65%);
  font-size: 12px;
  font-family: PingFangSC;
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.status-action {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.status-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
}

.status-icon-success {
  background: url(https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*6l60T6h8TTQAAAAAAAAAAAAAARQnAQ) no-repeat center center / 100% 100%;
}

.more-action-container {
  margin-left: 12px;
  width: 15px;
  height: 15px;
  text-align: center;
  cursor: pointer;
}

.more-action {
  display: inline-block;
  width: 3px;
  height: 15px;
  background: url(https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*tFw7SIy-ttQAAAAAAAAAAAAADtOHAQ/original) no-repeat center center / 100% 100%;
}
</style>