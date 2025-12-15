# **容積式潤滑系統中係數 $K$ 與機構轉速之動態關聯性深度研究報告**

## **1\. 執行摘要 (Executive Summary)**

在現代精密機械工程中，容積式潤滑系統（Volumetric Lubrication System，又稱集中式間歇潤滑系統）的設計核心在於精確計算所需的潤滑油量（$Q$）。此計算通常依賴於一個經驗係數——即潤滑係數 $K$（Coefficient $K$），該係數將機械的幾何尺寸（如軸承直徑、導軌面積）轉換為具體的體積需求。儘管在許多基礎手冊中，$K$ 常被視為一個僅與軸承類型有關的靜態常數，但深入的摩擦學分析與製造商（如 Lube Corp、Showa、Trabon、SKF）的技術數據顯示，$K$ 值與機構的轉速（Speed, RPM）及速率（Rate）存在顯著的動態正相關性。

本報告旨在詳盡探討係數 $K$ 與機構轉速之間的函數關係。分析表明，在低速邊界潤滑區，$K$ 主要由油膜形成與重力流失決定，數值相對恆定；然而，隨著轉速提升進入混合與流體動力潤滑區，離心力拋甩效應（Centrifugal Ejection）、熱致黏度降低（Thermal Thinning）及風阻氣簾效應（Air Curtain Effect）成為主導，$K$ 值呈現非線性或階梯式增長。具體而言，根據 Trabon 等權威標準，當轉速從 100 RPM 提升至 500 RPM 以上時，係數 $K$ 可能需要增加 10 倍以維持有效的油膜厚度。本報告將從理論基礎、現有工業標準模型及物理流失機制三個維度，對此關聯性進行詳盡論證。

---

## **2\. 容積式潤滑系統的理論架構與 $K$ 的定義**

### **2\.1 潤滑需求的基本公式**

容積式潤滑系統的運作邏輯是「補充」（Replenishment）。不同於強制循環潤滑系統利用大量油流帶走熱量，容積式系統旨在定期補充因洩漏、蒸發或機械運動而損耗的微量油膜。在工業界（包括 Lube USA、Showa 等日系與美系規範），計算單一潤滑點需求油量的通用公式可表示為：

$$
Q\ =\ K \times\ A\ \times\ S_f
$$

其中：

- $Q$：單位時間內的需求油量（通常為 $\ \text{cc/hr}$ 或 $\ \text{cm}^3/\ \text{hr}$）。  

- $A$：受潤機構的幾何特徵量（Equivalent Area）。對於滑動面為面積（長 $\ \times$ 寬），對於滾動軸承則常簡化為軸徑（$D$）或軸徑與列數的函數。  

- $K$：潤滑係數（Lubrication Coefficient），代表單位幾何特徵在單位時間內的基礎油耗量。  

- $S_f$：工況服務係數（Service Factor），涵蓋轉速、溫度、衝擊負荷等動態變數。

在許多簡化計算中，$S_f$ 往往被併入 $K$ 中，形成一個綜合的「動態 $K$ 值」。因此，理解 $K$ 與轉速的關係，實際上就是解析 $K$ 內部所隱含的動態損耗補償機制 [\[1\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#8ce0ba28-8ff4-4744-a643-4197075ef21e)[\[2\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#7b98ad1c-9dd8-4ea3-812e-7e6fa83fbaf8)[\[3\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#7ad2b4ad-432b-450e-bdb0-87c380d45d0d)。

### **2\.2 係數 $K$ 的物理意義**

係數 $K$ 並非物理常數，而是一個工程經驗值。它實際上是以下三個物理量的聚合體：

1. **目標油膜厚度（Target Film Thickness, $h$）**：系統試圖維持的油膜高度。  

2. **置換率（Replenishment Rate, $R$）**：油膜因機械運動而被推擠出接觸面或被拋離的速率。  

3. **安全裕度（Safety Margin）**：為應對油路阻塞或環境變數所預留的額外量。

當機構轉速為零時，僅有重力導致的靜態流失，此時 $K$ 極小；當機構開始運轉，置換率 $R$ 隨速度急劇上升，導致維持同樣油膜厚度 $h$ 所需的 $K$ 值必須相應增加。

---

## **3\. 機構轉速與 $K$ 值的關聯模型分析**

透過分析不同潤滑系統供應商的技術手冊與摩擦學文獻，我們可以歸納出三種描述 $K$ 與轉速關係的主要模型：階梯式增長模型、線性速度模型以及幾何基準修正模型。

### **3\.1 階梯式增長模型（Trabon/Graco 方法）**

最直接量化轉速與 $K$ 值關係的數據來自 Trabon Lubriquip 的計算標準（亦稱為 Michael Neale 方法）。該方法明確定義了一個**旋轉速度係數**（Rotation Speed Factor，在此標記為 $K_g$），用於計算滾動軸承的潤滑脂或油的需求量 [\[4\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#fb8a5c36-2526-4c05-b291-1ac4548a2838)。

其公式結構為：

$$
Q\ =\ K_g\ \times\ C_d\ \times\ \pi\ \times\ D\ \times\ B
$$

在此模型中，$K_g$ 並非隨轉速線性增加，而是呈現顯著的**階梯式跳躍**，反映了不同速度區間下流失機制的本質改變。

#### **表 3.1：Trabon 旋轉速度係數** $K_g$ **與軸轉速對照表**

| 軸轉速範圍 (Shaft Speed, RPM) | 旋轉速度係數 Kg​ (Rotation Speed Factor) | 物理流失機制解析 | 
|---|---|---|
| **0 - 100** | **0\.1** | **邊界潤滑補充**：低速下離心力可忽略，油耗主要用於補充擠壓流失。 | 
| **101 - 250** | **0\.2** | **混合潤滑過渡**：速度增加導致側向洩漏（Side Leakage）增加，係數翻倍。 | 
| **251 - 500** | **0\.4** | **離心力起始**：離心力開始大於油的附著力，拋甩效應顯著，需油量再翻倍。 | 
| **501 - 1,000** | **1\.0** | **嚴重拋甩區**：高轉速下油膜極難留存，需持續大量補充以防乾磨。 | 

**深度洞察：**\
此數據揭示了一個關鍵結論：當轉速從低速（<100 RPM）提升至中高速（>500 RPM）時，潤滑係數 $K$ 暴增了 10 倍（從 0.1 增至 1.0）。這表明在容積式潤滑中，轉速對 $K$ 的影響是非線性且劇烈的。設計者若僅依據幾何尺寸而不考慮轉速修正，$K$ 值的選取將產生極大誤差，導致高速運轉下的軸承瞬間燒毀。

### **3\.2 線性速度模型（滑動軸承與導軌）**

對於滑動軸承（Plain Bearings）或線性導軌（Ways/Slides），$K$ 值與速率（Rate）的關係通常呈現線性特徵。這是因為滑動面的潤滑需求取決於「被掃過的表面積」（Swept Area）。

根據 Aryung 及 Hudson 的滑動軸承公式 [\[5\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#e60d3b5e-cac6-4124-a0a9-ed39500e5a86)：

$$
Q\ =\ 3\ \times\ r^3\ \times\ N\ \times\ 10^{-5}
$$

或者 Lube USA 針對導軌的公式 [\[2\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#7b98ad1c-9dd8-4ea3-812e-7e6fa83fbaf8)：

$$
Q\ \approx\ K\ \times\ (\text{Length} \ + \ \text{Travel})\ \times\ \ \text{Width}
$$

在這些公式中，$N$（轉速）或 Travel（行程）直接作為線性乘數出現。

- **物理機制**：滑動面依靠相對運動形成的流體動壓楔（Hydrodynamic Wedge）來支撐負載。速度越快，油楔內的壓力越高，導致從軸承兩端擠出的側向洩漏量（End Leakage）與速度成正比。  

- **結論**：對於滑動機構，$K$ 值（或總油量）應隨機構速率**線性增加**。若導軌移動速度增加一倍，理論上單位時間內的注油量也應增加一倍，以維持油膜的連續性。

### **3\.3 幾何基準修正模型（日系標準：Lube Corp / Showa）**

在 Lube Corporation 與 Showa 等日系工具機潤滑系統的規範中，公式的呈現方式略有不同。它們通常給出一個基於軸承類型的「基礎 $K$ 值」，然後要求設計者根據工況應用一個「服務係數」（Service Factor）或調整「泵浦間歇時間」[\[2\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#7b98ad1c-9dd8-4ea3-812e-7e6fa83fbaf8)[\[3\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#7ad2b4ad-432b-450e-bdb0-87c380d45d0d)。

**基礎 $K$ 值範例（Lube USA/Showa 資料綜合）：**

- **滾動軸承**：$K\ \approx 0.10$ cc/hr/inch shaft dia  

- **滑動面**：$K\ \approx 0.04\ - 0.15$ cc/hr/sq.inch  

- **齒輪**：$K\ \approx 0.30$ cc/hr/inch gear width

轉速的隱性修正：\
雖然這些手冊中的基礎 $K$ 看似常數，但其實際應用公式為：

$$
Q_{\ \text{Final}}\ =\ Q_{\ \text{Base}}\ \times\ S_f
$$

其中 $S_f$（服務係數）針對「高速」（High Speed）工況通常建議取值 1.0 至 2.0，甚至在極端條件下更高 [\[4\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#fb8a5c36-2526-4c05-b291-1ac4548a2838)。\
更重要的是，這類系統通常由控制器（PLC）設定間歇時間（Interval Time）。在高速加工模式下，PLC 邏輯會自動縮短注油間隔，這在本質上等同於提高了時間平均的 $K$ 值。

---

## **4\. 驅動 $K$ 值隨轉速變化的物理機制**

為何 $K$ 值必須隨轉速提升而增加？深入的摩擦學分析揭示了三大主導機制：離心拋甩、熱致黏度衰減與氣簾阻隔。

### **4\.1 離心拋甩效應 (Centrifugal Ejection)**

這是滾動軸承中 $K$ 值隨轉速非線性暴增的主因。

- **機制**：潤滑油附著在高速旋轉的內環與保持架（Cage）上。離心力 $F_c\ =\ mr\omega^2$ 與轉速的平方成正比。  

- **影響**：當轉速加倍，將油甩離軸承表面的力量增加四倍。為了對抗這股強大的甩油力，潤滑系統必須以更高的速率（即更大的 $K$）注入新油，以確保在油被甩出之前，滾動體能獲得瞬間的潤滑。Trabon 表格中 $K$ 值從 0.1 跳升至 1.0 的現象，正是為了補償此效應。

### **4\.2 熱致黏度衰減 (Thermal Viscosity Thinning)**

高速運轉伴隨著劇烈的剪切摩擦生熱。

- **機制**：根據 Arrhenius 方程式，液體黏度隨溫度升高呈指數下降 [\[6\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#c713bd46-e2d8-420d-bdec-a6352bdcff9c)。高速軸承內部的微觀溫度場極高，導致潤滑油變稀。  

- **影響**：變稀的油流動性大增，更容易從軸承間隙中流失（Leakage rate increases）。為了維持足夠的油膜承載力，必須增加供油量（$K$ 值）來補償流失，同時利用額外的油量帶走熱量（冷卻效應）。這解釋了為何 Aryung 的高速公式中包含熱生成率（Heat Generation Rate）參數 [\[5\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#e60d3b5e-cac6-4124-a0a9-ed39500e5a86)。

### **4\.3 氣簾與風阻效應 (Windage and Air Curtain)**

在極高轉速下（如主軸轉速 > 10,000 RPM），旋轉件周圍會形成湍流氣層（Air Curtain）。

- **機制**：這層高壓氣流像一堵牆，阻擋外部噴射的油滴進入滾動軌道 [\[7\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#e3ee22da-9cf7-450d-96e7-e9347a8e840b)。  

- **影響**：標準的容積式注油（滴油）可能完全無法穿透氣簾，油滴會被氣流吹走。此時，若仍使用容積式系統，必須大幅提高 $K$ 值（油量），以「飽和攻擊」的方式增加油滴進入的機率，或者被迫轉向油氣潤滑（Air-Oil Lubrication）。這也界定了容積式潤滑 $K$ 值的**極限轉速**——當轉速過高，單純增加 $K$ 會導致攪拌阻力（Churning）過大，反而造成過熱。

---

## **5\. 不同機構類型的 $K$ 值轉速特性對比**

不同機械元件對速度的敏感度不同，導致 $K$ 的變化曲線各異。

### **5\.1 滾動軸承 (Rolling Element Bearings)**

- **關係特徵**：強烈的非線性正相關。  

- **數據支持**：  

   - 低速 ($\ <100$ RPM): $K\ \approx 0.1$。  

   - 中速 ($100-500$ RPM): $K\ \approx 0.2 \ - 0.4$。  

   - 高速 ($\>500$ RPM): $K\ \approx 1.0$。  

- **註記**：SKF 等軸承大廠引入了黏度比 $\ \kappa$（Kappa）的概念 [\[8\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#93de7c33-8fec-4b2d-95f6-26824643e601)[\[9\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#a874e9ad-de06-4bf9-9605-6ce222c199e2)。雖然 $\ \kappa$ 主要用於壽命計算，但其邏輯相通：高速下需確保 $\ \kappa$ 值（黏度/油膜）足夠，若 $K$ 值（供油量）不足導致油膜破裂，軸承壽命將急劇下降。

### **5\.2 滑動導軌與襯套 (Slides and Bushes)**

- **關係特徵**：線性正相關。  

- **數據支持**：公式 $Q\ =\ \text{Const}\ \times\ \text{Area}\ \times\ \text{Velocity}$ [\[5\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#e60d3b5e-cac6-4124-a0a9-ed39500e5a86)。  

- **現象**：對於線性導軌，Lube Corp 開發了 LHL 潤滑脂系統，利用特殊的脲基潤滑脂（Urea Grease）來降低 $K$ 值需求。數據顯示，由於 LHL 的高附著力，其 $K$ 值受速度影響較小，相比傳統油潤滑可節省高達 80-90% 的消耗量 [\[10\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#522a6445-2684-427d-97a8-9076c0520fbc)。這反證了傳統油潤滑 $K$ 值之所以高，很大程度上是為了解決「流動過快」的問題。

### **5\.3 齒輪 (Gears)**

- **關係特徵**：極高的基礎 $K$ 值，且隨速度平方增長。  

- **數據支持**：基礎 $K\ \approx 0.30$ [\[2\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#7b98ad1c-9dd8-4ea3-812e-7e6fa83fbaf8)。  

- **原因**：齒輪嚙合時的「擠壓噴射」（Squish）效應會主動將油泵出接觸面，加上齒頂極高的線速度帶來的離心甩油，使其對 $K$ 的需求遠高於軸承。

---

## **6\. 系統設計實務：如何根據轉速設定 $K$**

在實際工程設計中，設計者並非直接在公式中輸入動態轉速，而是透過**控制邏輯**來體現 $K$ 與轉速的關係。

### **6\.1 時間控制 vs. 脈衝計數控制**

- **傳統時間控制（Timer-based）：**\
   設定泵浦每 10 分鐘注油一次。此法隱含了一個假設的平均轉速。若機器長時間處於高速運轉，固定的時間間隔會導致 $K$ 值相對不足（Under-lubrication）。  

- **轉速/行程計數控制（Counter-based）：**\
   現代 CNC 系統（如 Fanuc, Showa 系統）常採用「主軸轉數計數」或「軸移動距離計數」來觸發注油 [\[11\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#5c2fc994-c0e4-4813-9724-cd92afdd71c4)。  

   - **例如：**設定每主軸旋轉 10,000 圈注油一次。  

   - **效果**：當轉速 $N$ 增加，單位時間內的注油次數自動增加。  

   - **數學意義**：此控制邏輯直接實現了 $Q\ \propto\ N$，即 $K$ 值自動隨轉速線性調整，是目前最理想的容積式潤滑控制策略。

### **6\.2 高速主軸的極限與轉型**

當 $K$ 值隨轉速增加到一定臨界點（通常 $dn$ 值 $\ > 800,000$ 或轉速 $\ > 10,000$ RPM），繼續增加容積式注油量 $Q$ 會產生反效果。

- **液體攪拌阻力（Churning Loss）**：過多的油在高速下會像剎車一樣阻礙旋轉，並產生大量熱能。  

- **轉型**：此時工程設計會放棄容積式注油，轉而使用 **油氣潤滑（Air-Oil）**。油氣潤滑的本質是將極微量的油（極低的 $K$）以壓縮空氣載送，穿透氣簾。這說明了容積式潤滑係數 $K$ 存在一個**轉速上限**。

---

## **7\. 結論**

[\[4\]](https://app.heptabase.com/5017e6ad-4e26-4e17-a94c-1202c0624d5a/card/eda5a87a-40e9-4082-99f5-a84a237c948e#fb8a5c36-2526-4c05-b291-1ac4548a2838)綜合各方研究資料，針對「容積式潤滑公式中係數 $K$ 與機構轉速/速率的關係」，結論如下：

1. **正相關性**：係數 $K$ 與機構轉速（RPM）及速率（Velocity）呈現顯著的正相關。機構運動越快，所需的 $K$ 值越大。  

2. **非線性階梯特徵**：對於滾動軸承，這種關係往往是階梯式的。低速時 $K$ 值平穩（約 0.1），當轉速跨越離心力臨界點（約 250-500 RPM）後，$K$ 值會急劇上升（至 0.4 或 1.0），以補償離心拋甩效應。  

3. **物理驅動因素**：$K$ 值的增加是為了對抗高速下的三大物理流失：**離心力甩油**、**熱致黏度下降導致的洩漏**以及**高頻率的油膜置換需求**。  

4. **工程實現**：在實務上，這種動態 $K$ 值是通過「縮短注油間隔」或「採用轉數/行程計數控制」來實現的。若僅使用靜態 $K$ 值設計高速系統，將導致潤滑失效。

**建議**：在進行容積式潤滑系統設計時，不應將 $K$ 視為常數。應依據機構的**最高連續運轉速度**查閱如 Trabon 或 Showa 的速度修正表，選擇對應的高速 $K$ 值，或採用與轉速連動的智能控制系統，以確保在全速域下的潤滑可靠性。

## **引用的著作**

1. Basic Lubrication Formulas | Flodraulic Group, 檢索日期：12月 9, 2025， <https://flodraulic.com/resources/formulae/basic-lubrication-formulas/>  

2. Lubrication System Design, 檢索日期：12月 9, 2025， <https://www.fluidlinesystems.net/category-s/2139.htm>  

3. Showa Lubrication Systems, 檢索日期：12月 9, 2025， <https://jutech.com.pl/web/files/22510/SHOWA-LS.pdf>  

4. Lubricant application: Grease volumes and frequencies - STLE, 檢索日期：12月 9, 2025， <https://www.stle.org/images/pdf/STLE_ORG/BOK/LS/Grease/Lubricant%20Application_Grease%20Volumes%20and%20Frequencies_tlt%20article_April09.pdf>  

5. Oil Lubrication Pump - ARYUNG MACHINERY IND. CO., LTD, 檢索日期：12月 9, 2025， <https://www.aryung-pump.com/web/technology?categoryId=3&lang=en_US>  

6. Calculating lubricant viscosity versus temperature - STLE, 檢索日期：12月 9, 2025， <https://www.stle.org/files/TLTArchives/2021/03_March/Lubrication_Fundamentals.aspx>  

7. Simulation Study of the Effect of Oil Injection Speed on the Air Curtain of High-Speed Bearings - MDPI, 檢索日期：12月 9, 2025， <https://www.mdpi.com/2075-4442/13/8/334>  

8. Lubrication condition – the viscosity ratio, κ - SKF, 檢索日期：12月 9, 2025， <https://www.skf.com/group/products/rolling-bearings/principles-of-rolling-bearing-selection/bearing-selection-process/bearing-size/size-selection-based-on-rating-life/lubrication-condition-the-viscosity-ratio-k>  

9. Lubrication - NTN Bearing Wizard, 檢索日期：12月 9, 2025， <https://bearingwizard.com/bearing-selection-calculation-principles/lubrication/>  

10. LHL System Catalog | PDF | Friction | Lubricant - Scribd, 檢索日期：12月 9, 2025， <https://www.scribd.com/document/502415633/LHL-System-Catalog>  

11. NCT-04/03/02 Punch CNC System (Maintenance Manual) - [motion-control.net](http://motion-control.net), 檢索日期：12月 9, 2025， <https://www.motion-control.net/Content/upload/pdf/2020609134/NCT-04-03-02-Punch-CNC-System-Maintainance-Manual-20141024162510.pdf>