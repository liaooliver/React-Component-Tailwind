import React, { useState } from 'react';

const withOpen = (WarppedComponent) => {
    return (props) => {

        const [isOpen, setIsOpen] = useState(false)

        const toggle = () => {
            setIsOpen(!isOpen)
        }

        return <WarppedComponent toggle={toggle} isOpen={isOpen} {...props} />
    }
}

export default withOpen;