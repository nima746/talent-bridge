# Talent Bridge｜人才介紹系統

繁體中文人才介紹與招募工作台，適合展示或個人顧問本機管理。自製響應式介面，無第三方 JavaScript 依賴。

## 啟動

需要 Node.js 22 或更新版本。

```sh
node server.mjs
# 開啟 http://127.0.0.1:4174
node --test tests/model.test.mjs
```

也可將 `dist/` 部署至靜態網站主機，透過 HTTP 使用。

## 功能

- 工作總覽：人才、職缺、推薦與到職數量、招募階段及待跟進案件。
- 人才資料庫：姓名、職稱、電子郵件、地點、技能、年資、期望年薪、求職狀態及備註。
- 企業與職缺：企業、職稱、技能、年薪上限、需求人數及招募狀態。
- 技能配對：必要技能完整字詞交集比例，供人工評估，不是錄取機率；不評估薪資及地點。
- 推薦案件：關聯人才與職缺、推薦人、階段、跟進日期、介紹費及備註；阻擋重複推薦。
- 招募看板：待聯繫、初步評估、企業面試、錄取洽談、已到職、未錄取。
- 分析報表：推薦來源占比、到職占比、到職案件約定介紹費、最近操作。
- 搜尋、狀態篩選、CSV 匯出、JSON 備份與驗證還原、多分頁更新通知。

## 資料與限制

資料儲存在瀏覽器 localStorage。首次開啟顯示虛構示範資料，所有電子郵件使用 example.com。不同瀏覽器、裝置及網址不共用資料；清除網站資料會失去紀錄。請定期備份，還原將取代目前工作空間。

這是可操作的本機第一版，沒有多人資料庫、登入、角色權限、郵件通知、附件、背景排程或請款收款追蹤。介紹費僅為約定金額，並非實際營收。操作紀錄也存於本機，不是正式稽核紀錄。多人同時編輯可能互相覆蓋；正式營運需另加後端、權限、加密及備份機制。

CSV 匯出目前模組的全部資料（含篩選隱藏項目），會跳脫引號及防護公式起始字元。備份還原會檢查版本、唯一編號、關聯、重複推薦、日期、階段與數值。備份包含個人資料，請妥善保存。

## 參考來源

參考日期：2026-11-15。以下為流程規劃參考，未複製品牌、介面或程式碼，亦非官方整合。

- [Workable：Referrals overview](https://help.workable.com/hc/en-us/articles/360015551333-Referrals-overview-and-setup-process) — 推薦來源、進度與獎勵追蹤。
- [Workable：Candidate profile in pipeline view](https://help.workable.com/hc/en-us/articles/115012857047-Candidate-profile-in-pipeline-view-overview) — 職缺關聯及階段管理。
- [Workable：Referral channels report](https://help.workable.com/hc/en-us/articles/360015452533-Using-the-Referral-channels-report) — 推薦來源報表。
- [Greenhouse：Visual Candidate Pipeline](https://support.greenhouse.io/hc/en-us/articles/4874727408795-Visual-Candidate-Pipeline) — 可視化招募階段。
- [Greenhouse：Comparing cohort, activity, and snapshot reports](https://support.greenhouse.io/hc/en-us/articles/213332286-Comparing-cohort-activity-and-snapshot-reports) — 本版採目前案件快照，不宣稱歷史轉換率。

字體使用 Google Fonts（DM Sans、Noto Sans TC），離線時回退系統字體。
