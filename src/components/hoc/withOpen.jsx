import React, { useState } from 'react';

const withOpen = (WarppedComponent) => {
    return (props) => {

        // 複用商業邏輯
        const [isOpen, setIsOpen] = useState(false)

        const toggle = () => {
            setIsOpen(!isOpen)
        }

        // 接受不同的 UI Component
        return <WarppedComponent toggle={toggle} isOpen={isOpen} {...props} />
    }
}

export default withOpen;

/**
 * 
 * 場景 1: 不同組件(UI)套用相同商業邏輯
 * 
 * 場景 2: 不同商業邏輯套用相同組件(UI)
 * 
 * - HOC 是一種函式 
 * - 傳入一個元件當作參數
 * - 回傳新的元件
 * - 目的是為了可以重複使用程式碼
 * - 複用商業邏輯或是 UI 邏輯
 * - 按照慣例會把 props 傳入到參數的元件上(  )
 * 
 */
