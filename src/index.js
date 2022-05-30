import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const lang = navigator.appName === 'Netscape' ? navigator.language : navigator.userLanguage;
let config = {};
switch (lang) {
    case 'zh-CN':
    case 'zh-SG':
        config = {
            name: '搜索酱',
            general: '常规设置',
            searchEngines: '搜索引擎',
            exportConfig: '导出设置',
            about: '关于',
            errorNoType: '请输入类别名',
            editType: '编辑类别',
            typeName: '类别名',
            typeIcon: '类别图标',
            iconTips: '图标可使用 FontAwsome、图片链接或者 base64 代码',
            typeMatch: '匹配URL',
            typeEnableSelTxt: '启用后选择文字并长按鼠标方可调出工具栏',
            typeEnableSelImg: '启用后指向图片并长按鼠标方可调出工具栏',
            typeOpenInNewTab: '启用后该组链接将默认在新窗口打开',
            delete: '删除',
            cancel: '取消',
            edit: '编辑',
            editSite: '编辑站点',
            siteName: '站点名',
            siteUrl: '站点URL',
            siteIcon: '站点图标',
            siteKeywords: '搜索词正则',
            siteMatch: '匹配URL',
            siteCharset: '站点编码',
            toolbarPosition: '工具栏位置',
            portrait: '纵向',
            horizontal: '横向',
            openInNewTab: '默认在新标签页打开链接',
            openInNewTabTips: '启用后链接将默认在新标签页打开，否则链接将在当前页面打开',
            enableInPage: '启用划词搜索',
            enableInPageTips: '启用后选择文字并长按鼠标可调出工具栏',
            bindFunctionKey: '绑定功能键',
            ctrlKey: 'Ctrl键',
            altKey: 'Alt键',
            shiftKey: 'Shift键',
            metaKey: 'meta键',
            configContent: '设置源码',
            copy: '复制',
            save: '保存',
            autoClose: '自动合上类别',
            autoDelay: '延时',
            needName: '需要名称',
            needUrl: '需要URL',
            overOpen: '鼠标划过类别自动展开',
            overOpenTips: '选中此项则当鼠标划过类别图标，对应类别将自动展开',
            selectToShow: '划选立即调用',
            selectToShowTips: '启用后无需右键长按，划选立即调出工具栏',
            autoCloseTips: '启用之后一旦鼠标离开搜索条，已打开的类别抽屉将会自动合上',
            enableShortcut: '启用站点快捷键',
            enableShortcutTips: '启用后，将使得所有为站点分配的快捷键生效',
            siteShotcut: '搜索快捷键',
            aboutContent: '平时工作中搜索引擎跳转功能用得很频繁，但尝试了相关的扩展，发现大多夹有私货。\n\n而这只是一个简单功能，所以不如自己写一个啦。\n\n结果写配置页面耗费的精力数倍于脚本本身……🤦‍\n\n这个搜索引擎跳转支持自己拖拽定义位置，同时也支持站内搜索，多语言编码设置（例如shift-jis），划词搜索，以及配置导入导出。'
        }
        break;
    case 'zh-TW':
    case 'zh-HK':
        config = {
            name: '搜索醬',
            general: '常規設置',
            searchEngines: '搜尋引擎',
            exportConfig: '導出設置',
            about: '關於',
            errorNoType: '請輸入類別名',
            editType: '編輯類別',
            typeName: '類別名',
            typeIcon: '類別圖標',
            iconTips: '圖標可使用 FontAwsome、圖片連結或者 base64 代碼',
            typeMatch: '匹配URL',
            typeEnableSelTxt: '啟用後選擇文字並長按滑鼠方可調出工具欄',
            typeEnableSelImg: '啟用後指向圖片並長按滑鼠方可調出工具欄',
            typeOpenInNewTab: '啟用後該組連結將默認在新窗口打開',
            delete: '刪除',
            cancel: '取消',
            edit: '編輯',
            editSite: '編輯站點',
            siteName: '站點名',
            siteUrl: '站點URL',
            siteIcon: '站點圖標',
            siteKeywords: '搜索詞正則',
            siteMatch: '匹配URL',
            siteCharset: '站點編碼',
            toolbarPosition: '工具欄位置',
            portrait: '縱向',
            horizontal: '橫向',
            openInNewTab: '默認在新標籤頁打開連結',
            openInNewTabTips: '啟用後連結將默認在新標籤頁打開，否則連結將在當前頁面打開',
            enableInPage: '啟用劃詞搜索',
            enableInPageTips: '啟用後選擇文字並長按滑鼠可調出工具欄',
            bindFunctionKey: '綁定功能鍵',
            ctrlKey: 'Ctrl鍵',
            altKey: 'Alt鍵',
            shiftKey: 'Shift鍵',
            metaKey: 'meta鍵',
            configContent: '設置源碼',
            copy: '複製',
            save: '保存',
            autoClose: '自動合上類別',
            autoDelay: '延時',
            needName: '需要名稱',
            needUrl: '需要URL',
            overOpen: '滑鼠划過類別自動展開',
            overOpenTips: '選中此項則當滑鼠划過類別圖標，對應類別將自動展開',
            selectToShow: '劃選立即調用',
            selectToShowTips: '啟用後無需右鍵長按，劃選立即調出工具欄',
            autoCloseTips: '啟用之後一旦滑鼠離開搜索條，已打開的類別抽屜將會自動合上',
            enableShortcut: '啟用站點快捷鍵',
            enableShortcutTips: '啟用後，將使得所有為站點分配的快捷鍵生效',
            siteShotcut: '搜索快捷鍵',
            aboutContent: '平時工作中搜尋引擎跳轉功能用得很頻繁，但嘗試了相關的擴展，發現大多夾有私貨。\n\n而這只是一個簡單功能，所以不如自己寫一個啦。\n\n結果寫配置頁面耗費的精力數倍於腳本本身……🤦‍\n\n這個搜尋引擎跳轉支持自己拖拽定義位置，同時也支持站內搜索，多語言編碼設置（例如shift-jis），劃詞搜索，以及配置導入導出。'
        }
        break;
    default:
        config = {
            name: 'Search Jumper',
            general: 'General',
            searchEngines: 'Search Engines',
            exportConfig: 'Export Config',
            about: 'About',
            errorNoType: 'Please enter the category name',
            editType: 'Edit category',
            typeName: 'Category name',
            typeIcon: 'Category icon',
            iconTips: 'The icon can use FontAwsome, image link or base64 code',
            typeMatch: 'Match url',
            typeEnableSelTxt: 'After enabling, only show toolbar when select text content and long press the mouse',
            typeEnableSelImg: 'After enabling, obly show toolbar when point to a picture and long press the mouse',
            typeOpenInNewTab: 'After enabling, this group of links will be opened in a new window by default',
            delete: 'Delete',
            cancel: 'Cancel',
            edit: 'Edit',
            editSite: 'Edit site',
            siteName: 'Site name',
            siteUrl: 'Site url',
            siteIcon: 'Site icon',
            siteKeywords: 'RegExp of search keywords',
            siteMatch: 'RegExp of match url',
            siteCharset: 'Charset',
            toolbarPosition: 'Toolbar position',
            portrait: 'Portrait',
            horizontal: 'Horizontal',
            openInNewTab: 'Open links in new tabs by default',
            openInNewTabTips: 'When enabled, the link will be opened in a new tab by default, otherwise the link will be opened in the current page',
            enableInPage: 'Enable select to search',
            enableInPageTips: 'After enabling, select some text and long press the mouse to bring up the toolbar',
            bindFunctionKey: 'Bind function key',
            ctrlKey: 'Ctrl key',
            altKey: 'Alt key',
            shiftKey: 'Shift key',
            metaKey: 'Meta key',
            configContent: 'Config source code',
            copy: 'Copy',
            save: 'Save',
            autoClose: 'Auto close type',
            autoDelay: 'Delay',
            needName: 'Require name',
            needUrl: 'Require url',
            overOpen: 'Mouse over to expand category automatically ',
            overOpenTips: 'If you select this item, when the mouse moves over the category icon, the corresponding category will be automatically expanded',
            selectToShow: 'Select to call',
            selectToShowTips: 'After enabling, no need to right-click and long-press, select to bring up the toolbar immediately',
            autoCloseTips: 'When enabled, opened category drawer will be closed automatically once the mouse leaves the search bar',
            enableShortcut: 'Enable site shortcuts',
            enableShortcutTips: 'After enabling, all shortcut keys assigned to single site will take effect',
            siteShotcut: 'Search shortcut key',
            aboutContent: "I use the search engine jump function very frequently in my work, but I found that most of them contain trojans after tried many related extensions. \n\nThis is just a simple function, so why not write one by myself? \n\nThe result is that writing the configuration page takes several times more energy than the script itself... 🤦‍\n\nThis search engine jump supports dragging and dropping with defined location, and also supports in-site search, word-marking search, and configuration import and export."
        }
        break;
}
window.i18n = (name, param) => {
    return config[name]?config[name].replace("#t#",param):name;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
