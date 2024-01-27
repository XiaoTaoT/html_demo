<template>
  <div id="watermask-wrapper image-container">
<!--    <img src="/img/idcard_1.jpg"/>-->
    <img class="image-container" src="/img/house_id.jpg"/>
  </div>
</template>

<script>
import dataList from '@/../json'

export default {
  methods: {
    watermark(settings) {
      //默认设置
      var defaultSettings = {
        watermark_txt: "text",
        watermark_x: 20, //水印起始位置x轴坐标
        watermark_y: 20, //水印起始位置Y轴坐标
        watermark_rows: 20, //水印行数
        watermark_cols: 20, //水印列数
        watermark_x_space: 100, //水印x轴间隔
        watermark_y_space: 50, //水印y轴间隔
        watermark_color: '#aaa', //水印字体颜色
        watermark_alpha: 0.4, //水印透明度
        watermark_fontsize: '15px', //水印字体大小
        watermark_font: '微软雅黑', //水印字体
        watermark_width: 210, //水印宽度
        watermark_height: 80, //水印长度
        watermark_angle: 20 //水印倾斜度数
      };
      if (arguments.length === 1 && typeof arguments[0] === "object") {
        var src = arguments[0] || {};
        for (let key in src) {
          if (src[key] && defaultSettings[key] && src[key] === defaultSettings[key]) continue;
          else if (src[key]) defaultSettings[key] = src[key];
        }
      }
      var oTemp = document.createDocumentFragment();
      //获取页面最大宽度
      var page_width = Math.min(document.getElementById("watermask-wrapper").scrollWidth, document.getElementById("watermask-wrapper").clientWidth);
      var cutWidth = page_width * 0.0150;
      page_width = page_width - cutWidth;
      //获取页面最大高度
      var page_height = Math.max(document.body.scrollHeight, document.body.clientHeight) + 450;
      page_height = Math.max(page_height, window.innerHeight - 30);
      //如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
      if (defaultSettings.watermark_cols == 0 || (parseInt(defaultSettings.watermark_x + defaultSettings.watermark_width * defaultSettings.watermark_cols + defaultSettings.watermark_x_space * (defaultSettings.watermark_cols - 1)) > page_width)) {
        defaultSettings.watermark_cols = parseInt((page_width - defaultSettings.watermark_x + defaultSettings.watermark_x_space) / (defaultSettings.watermark_width + defaultSettings.watermark_x_space));
        defaultSettings.watermark_x_space = parseInt((page_width - defaultSettings.watermark_x - defaultSettings.watermark_width * defaultSettings.watermark_cols) / (defaultSettings.watermark_cols - 1));
      }
      //如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
      if (defaultSettings.watermark_rows == 0 || (parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows + defaultSettings.watermark_y_space * (defaultSettings.watermark_rows - 1)) > page_height)) {
        defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space + page_height - defaultSettings.watermark_y) / (defaultSettings.watermark_height + defaultSettings.watermark_y_space));
        defaultSettings.watermark_y_space = parseInt(((page_height - defaultSettings.watermark_y) - defaultSettings.watermark_height * defaultSettings.watermark_rows) / (defaultSettings.watermark_rows - 1));
      }
      var x;
      var y;
      for (var i = 0; i < defaultSettings.watermark_rows; i++) {
        y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i;
        for (var j = 0; j < defaultSettings.watermark_cols; j++) {
          x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j;
          var mask_div = document.createElement('div');
          mask_div.id = 'mask_div' + i + j;
          mask_div.className = 'mask_div';
          mask_div.appendChild(document.createTextNode(defaultSettings.watermark_txt));
          //设置水印div倾斜显示
          mask_div.style.webkitTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
          mask_div.style.MozTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
          mask_div.style.msTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
          mask_div.style.OTransform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
          mask_div.style.transform = "rotate(-" + defaultSettings.watermark_angle + "deg)";
          mask_div.style.visibility = "";
          mask_div.style.position = "absolute";
          mask_div.style.left = x + 'px';
          mask_div.style.top = y + 'px';
          mask_div.style.overflow = "hidden";
          mask_div.style.zIndex = "9999";
          //让水印不遮挡页面的点击事件
          mask_div.style.pointerEvents = 'none';
          mask_div.style.opacity = defaultSettings.watermark_alpha;
          mask_div.style.fontSize = defaultSettings.watermark_fontsize;
          mask_div.style.fontFamily = defaultSettings.watermark_font;
          mask_div.style.color = defaultSettings.watermark_color;
          mask_div.style.textAlign = "center";
          mask_div.style.width = defaultSettings.watermark_width + 'px';
          mask_div.style.height = defaultSettings.watermark_height + 'px';
          mask_div.style.display = "block";
          oTemp.appendChild(mask_div);
        }

      }

      document.getElementById("watermask-wrapper").appendChild(oTemp);
      // document.body.appendChild(oTemp);
    },

    getNow() {
      var d = new Date();
      var year = d.getFullYear();
      var month = change(d.getMonth() + 1);
      var day = change(d.getDate());
      var hour = change(d.getHours());
      var minute = change(d.getMinutes());
      var second = change(d.getSeconds());

      function change(t) {
        if (t < 10) {
          return "0" + t;
        } else {
          return t;
        }
      }

      var time = year + '年' + month + '月' + day + '日 ' + hour + '时' + minute + '分' + second + '秒';
      return time;
    }
  },
  mounted() {
    this.$nextTick(() => {

    })
    // var now = this.getNow();
    // this.watermark({"watermark_txt": "仅用于蓝岸丽景推荐业委会使用","watermark_color":"#fff"});
    let out = {
      node: [
        // {id:"",name:"",icon:""}
      ],
      edges: [
        // {source:"",target:""}
      ]
    }
    dataList.forEach(p => {
      p.data.list.forEach(s => {
        if (!out.node.includes(s.s1_name)) {
          out.node.push(s.s1_name)
        }
        if (!out.node.includes(s.s2_name)) {
          out.node.push(s.s2_name)
        }
        if (!out.node.includes(s.ret_name)) {
          out.node.push(s.ret_name)
        }
        out.edges.push({source: s.s1_name, target: s.ret_name});
        out.edges.push({source: s.s2_name, target: s.ret_name});
      })
    })
    console.log(JSON.stringify(out))
  }
}
</script>

<style scoped lang="less">
.image-container {
  position: relative;
  display: inline-block;
}

.image-container::after {
  content: "仅用于蓝岸丽景推荐业委会使用"; /* 水印文本 */
  position: absolute;
  top: 50%; /* 调整水印文本位置 */
  left: 50%; /* 调整水印文本位置 */
  transform: translate(-50%, -50%) rotate(-45deg); /* 倾斜并居中水印文本 */
  color: rgba(0, 0, 0, 0.2); /* 设置水印文本颜色和透明度 */
  font-size: 40px; /* 设置水印文本大小 */
  pointer-events: none; /* 防止水印文本干扰用户操作 */
  white-space: nowrap; /* 确保水印文本不换行 */
  z-index: 1; /* 确保水印在图片上方 */
}
</style>
