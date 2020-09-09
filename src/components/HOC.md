HOC - Higher Order Component

- 在 React 中能夠重複使用程式碼的一種模式、一個函式、一個 React Component。

- 這個函式將其他的 React Comonent 當作參數傳入，並回傳一個新的 Component。

- 被當作參數被傳入的 React Component 被稱為 warppedComponent。

- HOC 回傳出來的 Component 被稱為 Enhanced Component 或 Composed Component，但實際上仍然是一個 function。

- 撰寫 HOC 的慣例

    - 將 HOC 用不到的 props 也要傳回到 warppedComponent。

    - 在 HOC 中只帶入一個參數 warppedComponent。

- 注意不要在 render 方法中使用 HOC。

- 用法

    - 場景 1: 不同組件(UI)使用重複的商業邏輯

    - 場景 2: 不同商業邏輯套用相同組件(UI)