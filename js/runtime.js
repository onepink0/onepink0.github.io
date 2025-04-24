var now = new Date();

function createtime() {
  now.setTime(now.getTime() + 1000);

  // 启动时间
  var start = new Date("09/05/1977 00:00:00");

  // 旅行者距离计算
  var distance = Math.trunc(234000000 + (now - start) / 1000 * 17); // 千米
  var au = (distance / 149600000).toFixed(6); // 天文单位

  // 博客运行时间计算
  var startRun = new Date("04/20/2025 00:00:00");
  var diff = (now - startRun) / 1000;
  var days = Math.floor(diff / (60 * 60 * 24));
  var h = Math.floor((diff / 3600) % 24).toString().padStart(2, '0');
  var m = Math.floor((diff / 60) % 60).toString().padStart(2, '0');
  var s = Math.floor(diff % 60).toString().padStart(2, '0');

  // 输出内容
  let content = `
    <div style="
      font-size: 14px;
      font-family: 'Segoe UI', 'HarmonyOS Sans', '微软雅黑', sans-serif;
      font-weight: 600;
      color: #ffffffcc;
      text-shadow: 1px 1px 2px #000;
      line-height: 1.8;
    ">
      本站居然运行了 <span style="color:#ffd700">${days}</span> 天 
      <span style="color:#87cefa">${h}</span> 小时 
      <span style="color:#ffa07a">${m}</span> 分 
      <span style="color:#98fb98">${s}</span> 秒 
      <i id="heartbeat" class="fas fa-heartbeat" style="color:red"></i> <br>
      旅行者 1 号当前距离地球 <span style="color:#00fa9a">${distance}</span> 千米，约为 
      <span style="color:#ba55d3">${au}</span> 个天文单位 🚀
    </div>
  `;

  // 更新元素内容
  const workboard = document.getElementById("workboard");
  if (workboard) workboard.innerHTML = content;
}

// 每秒更新
setInterval(() => {
  createtime();
}, 1000);
