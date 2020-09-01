import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import DraggableMember from './DraggableMember';
import Member from './Member';

const GroupContainer = ({group:{ teamMember, title}, groupindex, handleMoveMyTask}) => {
    
    const [{ isOver, canDrop }, dropRef] = useDrop({
        accept: ItemTypes.MEMBER,
        drop: item => {
            const from = item;
            const to = { toGruop: groupindex };
            handleMoveMyTask(from, to);
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    })

    const team = teamMember.map((team, index) => {
        const propsToDraggableMember = { team, groupindex, index };
        return (
          <DraggableMember
            key={`${groupindex}-${index}`}
            {...propsToDraggableMember}
          />
        );
    });

    return (
        <div className="p-3 bg-white mr-2 mb-2 last:mr-0 overflow-auto rounded-md shadow-md" style={{ minWidth: '350px', height:'350px' }}>
            <h2>{title}</h2>
            <div ref={dropRef} className="w-full p-2 rounded-md bg-blue-100" style={{height: '300px'}}>
                {team}
                {isOver && canDrop ? <Member empty /> : ""}
            </div>
        </div>
    )
}

export default GroupContainer;