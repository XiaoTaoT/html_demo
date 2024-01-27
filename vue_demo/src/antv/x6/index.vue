<template>
  <div class="fill box">
    <div class="left" id="dnd-tools">
      <span class="node rect" data-type="rect" @mousedown="startDrag">rect</span>
      <span class="node circle" data-type="circle" @mousedown="startDrag">rect</span>
      <DagNode/>
    </div>
    <div class="right">
      <div class="top">
        <!--        panning:
                <el-switch v-model="config.panning.enabled"></el-switch>-->
      </div>
      <div class="bottom" id="container"></div>
    </div>
  </div>
</template>

<script>
import {Addon, Graph} from '@antv/x6';
import DagNode from "./comp/DagNode";

const data = {
  // 节点
  nodes: [
    {
      id: 'node1', // String，可选，节点的唯一标识
      x: 40,       // Number，必选，节点位置的 x 值
      y: 40,       // Number，必选，节点位置的 y 值
      width: 80,   // Number，可选，节点大小的 width 值
      height: 40,  // Number，可选，节点大小的 height 值
      label: 'hello', // String，节点标签
    },
    {
      id: 'node2', // String，节点的唯一标识
      x: 160,      // Number，必选，节点位置的 x 值
      y: 180,      // Number，必选，节点位置的 y 值
      width: 80,   // Number，可选，节点大小的 width 值
      height: 40,  // Number，可选，节点大小的 height 值
      label: 'world', // String，节点标签
    },
  ],
  // 边
  edges: [
    {
      source: 'node1', // String，必须，起始节点 id
      target: 'node2', // String，必须，目标节点 id
    },
  ],
};
export default {
  components: {DagNode},
  data() {
    return {
      graph: null,
      dnd: null,

      config: {
        panning: {
          enabled: true,
          modifiers: 'shift',
        },
        connecting: {
          snap: true,
        }
      }
    }
  },
  methods: {
    startDrag(e) {
      console.log(e)
      const target = e.target
      const type = target.getAttribute('data-type')
      const node =
          type === 'rect'
              ? this.graph.createNode({
                width: 100,
                height: 40,
                attrs: {
                  label: {
                    text: 'Rect',
                    fill: '#6a6c8a',
                  },
                  body: {
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                  },
                },
              })
              : this.graph.createNode({
                width: 60,
                height: 60,
                shape: 'html',
                html: () => {
                  const wrap = document.createElement('div')
                  wrap.style.width = '100%'
                  wrap.style.height = '100%'
                  wrap.style.display = 'flex'
                  wrap.style.alignItems = 'center'
                  wrap.style.justifyContent = 'center'
                  wrap.style.border = '2px solid rgb(49, 208, 198)'
                  wrap.style.background = '#fff'
                  wrap.style.borderRadius = '100%'
                  wrap.innerText = 'Circle'
                  return wrap
                },
              })
      this.dnd.start(node, e)
    },
    reload() {
      if (!this.graph) {
        this.graph = new Graph({
          container: document.getElementById('container'),
          width: '100%',
          height: '100%',
          grid: {
            size: 10,      // 网格大小 10px
            visible: true, // 渲染网格背景
          },
          ...this.config
        });
      }
      if (!this.dnd) {
        //  dnd-tools

        this.dnd = new Addon.Dnd({
          target: this.graph,
          dndContainer: document.getElementById('dnd-tools')
        })
      }
      this.graph.fromJSON(data)
    },
    refresh() {

    }
  },
  mounted() {
    this.reload()
  },
  watch: {
    config: {
      deep: true,
      handler() {
        this.refresh()
      }
    }
  }
}
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  height: 100%;
}

.box {
  display: grid;
  grid-template-columns: 1fr 6fr;
}

.left {
  border: 1px dashed black;
  padding: 10px;
  user-select: none;
}

.right {
  display: grid;
  grid-template-rows: 1fr 10fr;

  .top {
    border: 1px dashed black;
  }

  .bottom {
    border: 1px dashed black;
    width: 100%;
    height: 100%;
  }
}

.node {
  display: inline-block;
  cursor: move;
  user-select: none;
  border: 3px solid black;
  text-align: center;
  height: 40px;
  line-height: 40px;
  margin: 5px;
}

.rect {
  width: 80px;
}

.circle {
  width: 40px;
  border-radius: 50%;
}


.validating {
  position: relative;
}

.validating:after {
  position: absolute;
  top: 4px;
  left: 4px;
  content: ' ';
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 6px solid #873bf4;
  border-color: #873bf4 transparent #873bf4 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>