## eCloudvalley線上作業

本次測驗的目標，將一個用 PHP 、 JavaScript / jQuery 所編寫的程式，嘗試重構為 Vue.js 框架，並完成表單所需求之功能撰寫。
<br>

## 開發步驟

  1. 建立頁面架構
     * 沿用既有的HTML架構，將 CSS 移出至 style.css 、 JavaScript 則移出至 script.js 並改寫成 Vue 
  
  2. 改用 CDN 引入 Bootstrap-Vue 取代原先資料夾有使用到的 jQuery 、 Bootstrap 
   
  3. 運用 Vue Components 的功能將頁面底下的`<ul>`列表移至 template 中管理
  4. 串接 API 取得資料
     * 在 Vue mounted() 中執行 axios 請求第三方 API 資料
  5. 使用 Vue watch 事件來監聽表單驗證功能
  6. Vue methods 事件中用來執行各項 Function
     * Insert () ： 在 HTML 中使用 v-on:click 來執行表單送出的功能
     * empty () ： 送出後，清空輸入框的內容

<br>

## 關於Target#4
用 Vue 來監控 Form 所有的值，並使用 Regular Expression (正規表達式)來驗證是否錯誤，錯誤提示的部分使用 Bootstrap 4 顯示紅色提醒
<br>

### HTML的部分

* 建立 input 數值，使用 v-model 綁在 data 上， v-bind:class 則是顯示錯誤的開關，再建立一個 invalid-feedback 的 div ，裡面用來放錯誤訊息
* example：
![image](https://github.com/Sandyjj0503/frontend_homework_vuejs_Sandy/blob/master/img/example1.JPG)

### Title in Chinese 

* 在 Vue 中建立 chName 用來繫結輸入的值
* chNameError 用來控制是否錯誤
* chNameErrMsg 用來控制顯示錯誤訊息
* 運用判斷式來限制字數長度是否介於1~50

### Title in English

* 在 Vue 中建立 enName 用來繫結輸入的值
* enNameError 用來控制是否錯誤
* enNameErrMsg 用來控制顯示錯誤訊息
* 運用判斷式來限制字數長度是否介於1~100
* 使用正規表達式檢查是否有特殊字元

### Intro

* 在 Vue 中建立 intro 用來繫結輸入的值
* introError 用來控制是否錯誤
* introErrMsg 用來控制顯示錯誤訊息
* 使用正規表達式檢查字串開頭是否符合Intro
* 運用判斷式來限制字數長度是否介於10~255

