/**
 * 通用Footer组件
 * 为所有页面添加统一的页脚信息
 */

// 创建并插入footer元素
function createFooter() {
  // 检查是否已经存在footer，避免重复创建
  if (document.querySelector('.common-footer')) {
    return;
  }

  // 创建footer元素
  const footer = document.createElement('footer');
  footer.className = 'common-footer';
  
  // 设置footer内容
  footer.innerHTML = `
    <div class="footer-content">
      <p>作者：小白 | QQ：303135056</p>
    </div>
  `;
  
  // 添加footer样式
  const style = document.createElement('style');
  style.textContent = `
    .common-footer {
      background: rgba(0, 0, 0, 0.8);
      color: white;
      text-align: center;
      padding: 15px 0;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      backdrop-filter: blur(10px);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .footer-content p {
      margin: 0;
      font-size: 14px;
      opacity: 0.9;
    }
    
    /* 为body添加底部padding，避免内容被footer遮挡 */
    body {
      padding-bottom: 50px !important;
    }
    
    /* 响应式设计 */
    @media (max-width: 768px) {
      .footer-content p {
        font-size: 12px;
      }
      
      .common-footer {
        padding: 10px 0;
      }
      
      body {
        padding-bottom: 40px !important;
      }
    }
  `;
  
  // 将样式添加到head
  document.head.appendChild(style);
  
  // 将footer添加到body末尾
  document.body.appendChild(footer);
}

// 页面加载完成后创建footer
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createFooter);
} else {
  createFooter();
}