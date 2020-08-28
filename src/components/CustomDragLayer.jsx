import React from 'react';
import { useDragLayer } from 'react-dnd';
import { ItemTypes } from './constants';
import Member from './Member';

const layerStyles = {
    position: "fixed",
    pointerEvents: "none",
    zIndex: 100,
    left: 0,
    top: 0
};

function getItemStyles(initialOffset, currentOffset) {
    if (!initialOffset || !currentOffset) {
        return {
            display: "none"
        };
    }
    let { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px) rotate(10deg)`;
    return {
        transform,
        WebkitTransform: transform
    };
}
const CustomDragLayer = () => {
    const {
        itemType,
        isDragging,
        item,
        initialOffset,
        currentOffset
      } = useDragLayer(monitor => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging()
      }));
      function renderItem() {
        console.log(item)
        switch (itemType) {
          case ItemTypes.MEMBER:
            console.log(item.team)
            return <Member name={item.team.name} />;
          default:
            return null;
        }
      }
      if (!isDragging) {
        return null;
      }
      return (
        <div style={layerStyles}>
          <div style={getItemStyles(initialOffset, currentOffset)}>
            {renderItem()}
          </div>
        </div>
      );
}

export default CustomDragLayer;