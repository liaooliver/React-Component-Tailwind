import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./constants";
import DraggableMember from './DraggableMember';
import Member from './Member';

const MemberContainer = ({ group:{ teamMember, title}, groupindex, handleMoveMyTask }) => {
    
    const team = teamMember.map((team, index) => {
        const propsToDraggableMember = { team, groupindex, index };
        return (
          <DraggableMember
            key={`${groupindex} ${index} ${team}`}
            {...propsToDraggableMember}
          />
        );
    });
    
    const [{ isOver, canDrop }, dropRef] = useDrop({
        accept: ItemTypes.MEMBER,
        drop: item => {
            console.log("Membe drop: item FROM", item)
            const from = item;
            const to = { toGruop: groupindex };
            handleMoveMyTask(from, to);
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    })


    return <div className="p-3 w-64 overflow-auto" style={{ minWidth: '300px', height: '600px'}}>
        <ul ref={dropRef} className="w-full h-full p-3 bg-white rounded-md shadow-lg">
            <h2>{title}</h2>
            {team}
            {isOver && canDrop ? <Member empty /> : ""}
        </ul>
    </div>
}

export default MemberContainer;