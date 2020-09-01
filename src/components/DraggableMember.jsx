import React from "react";
import Member from './Member';
import { ItemTypes } from './constants';
import { useDrag } from "react-dnd";

const DraggableMember = props => {
    
    const [{}, dragRef] = useDrag({
      item: { type: ItemTypes.MEMBER, ...props }
    });

    return (
      <li ref={dragRef}  className="mb-3 last:mb-0 rounded-md bg-orange-200 list-none">
        <Member name={props.team.name} leader={props.team.leader} />
      </li>
    );
  };
  
  export default DraggableMember;
  