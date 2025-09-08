/**
 * 通用导航组件
 * 用于在各个工具页面之间进行跳转
 */

// 导航配置
const navigationConfig = {
  tools: [
    {
      name: 'Excel转JSON',
      path: 'excel2json.html',
      icon: '📊',
      description: 'Excel文件转换为JSON格式'
    },
    {
      name: 'JSON压缩',
      path: 'json-compressor.html', 
      icon: '🗜️',
      description: 'JSON数据压缩和格式化'
    }
  ],
  homePath: 'index.html'
};

/**
 * 创建导航栏HTML结构
 * @param {string} currentPath - 当前页面路径
 * @returns {string} 导航栏HTML字符串
 */
function createNavigationHTML(currentPath) {
  const toolsHTML = navigationConfig.tools.map(tool => {
    const isActive = currentPath.includes(tool.path) ? 'active' : '';
    return `
      <a href="${tool.path}" class="nav-item ${isActive}" title="${tool.description}">
        <span class="nav-icon">${tool.icon}</span>
        <span class="nav-text">${tool.name}</span>
      </a>
    `;
  }).join('');

  return `
    <nav class="tool-navigation">
      <div class="nav-container">
        <a href="${navigationConfig.homePath}" class="nav-home" title="返回首页">
          <span class="nav-icon">🏠</span>
          <span class="nav-text">首页</span>
        </a>
        <div class="nav-divider"></div>
        <div class="nav-tools">
          ${toolsHTML}
        </div>
      </div>
    </nav>
  `;
}

/**
 * 创建导航栏CSS样式
 * @returns {string} CSS样式字符串
 */
function createNavigationCSS() {
  return `
    .tool-navigation {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      align-items: center;
      gap: 20px;
      height: 60px;
    }

    .nav-home {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 8px;
      text-decoration: none;
      color: #667eea;
      font-weight: 600;
      transition: all 0.3s ease;
      background: rgba(102, 126, 234, 0.1);
    }

    .nav-home:hover {
      background: rgba(102, 126, 234, 0.2);
      transform: translateY(-1px);
    }

    .nav-divider {
      width: 1px;
      height: 30px;
      background: rgba(0, 0, 0, 0.1);
    }

    .nav-tools {
      display: flex;
      gap: 10px;
      flex: 1;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 8px;
      text-decoration: none;
      color: #666;
      font-weight: 500;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-item:hover {
      color: #667eea;
      background: rgba(102, 126, 234, 0.1);
      transform: translateY(-1px);
    }

    .nav-item.active {
      color: #667eea;
      background: rgba(102, 126, 234, 0.15);
      font-weight: 600;
    }

    .nav-item.active::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 2px;
      background: #667eea;
      border-radius: 1px;
    }

    .nav-icon {
      font-size: 1.2rem;
    }

    .nav-text {
      font-size: 0.9rem;
    }

    /* 响应式设计 */
    @media (max-width: 768px) {
      .nav-container {
        padding: 0 15px;
        height: 50px;
      }
      
      .nav-text {
        display: none;
      }
      
      .nav-item, .nav-home {
        padding: 8px 12px;
      }
      
      .nav-icon {
        font-size: 1.1rem;
      }
    }
  `;
}

/**
 * 初始化导航栏
 * 自动检测当前页面并插入导航栏
 */
function initNavigation() {
  // 获取当前页面路径
  const currentPath = window.location.pathname;
  
  // 创建导航栏HTML
  const navigationHTML = createNavigationHTML(currentPath);
  
  // 创建并插入CSS样式
  const style = document.createElement('style');
  style.textContent = createNavigationCSS();
  document.head.appendChild(style);
  
  // 插入导航栏到页面顶部
  const navigationElement = document.createElement('div');
  navigationElement.innerHTML = navigationHTML;
  document.body.insertBefore(navigationElement.firstElementChild, document.body.firstChild);
}

// 页面加载完成后初始化导航栏
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavigation);
} else {
  initNavigation();
}

// 导出函数供外部使用
window.NavigationUtils = {
  init: initNavigation,
  createHTML: createNavigationHTML,
  createCSS: createNavigationCSS
};