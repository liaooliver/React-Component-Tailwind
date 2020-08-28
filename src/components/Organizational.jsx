import React, { useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import GroupContainer from './GroupContainer';
import MemberContainer from './MemberContainer';
import CustomDragLayer from './CustomDragLayer';

const workGroups = [
    {
        attr: "list",
        title: 'All Member',
        teamMember: [
            {
                job: 'Front-End',
                name: 'A',
                leader: false
            },
            {
                job: 'UI/UX',
                name: 'B',
                leader: false
            },
            {
                job: 'Back-end',
                name: 'C',
                leader: false
            },
            {
                job: 'Back-end',
                name: 'D',
                leader: false
            },
            {
                job: 'Front-end',
                name: 'E',
                leader: false
            },
            {
                job: 'PM',
                name: 'F',
                leader: false
            },
            {
                job: 'Back-end',
                name: 'G',
                leader: false
            },
            
        ]
    },
    {
        attr: "workgroup",
        title: 'Team A',
        teamMember: []
    },
    {
        attr: "workgroup",
        title: 'Team B',
        teamMember: [
            {
                job: 'Data-base',
                name: 'H',
                leader: false
            }
        ]
    },
    {
        attr: "workgroup",
        title: 'Team C',
        teamMember: []
    }
]

const Oraniztional = () => {

    const [groups, setGroups] = useState(workGroups)

    const handleMoveMyTask = (from, to) => {

        const { team, groupindex, index } = from;
        const { toGruop } = to;
        const newGroups = [...groups];
        console.log(groupindex, toGruop, newGroups[toGruop])
        // remove task
        newGroups[groupindex].teamMember.splice(index, 1);
        // move task
        newGroups[toGruop].teamMember.push(team);
        setGroups(newGroups);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <CustomDragLayer />
            <div className="w-full h-full flex bg-gray-400 rounded-md shadow-md p-3">
                {
                    groups.map((group, groupindex) => {
                        const propsToColumn = { group, groupindex, handleMoveMyTask };
                        if (group.attr === 'list') return <MemberContainer key={`column ${groupindex}`} {...propsToColumn} />
                        return null
                    })
                }
                <div className="p-3 flex flex-wrap">
                    {
                        groups.map((group, groupindex) => {
                            const propsToColumn = { group, groupindex: groupindex, handleMoveMyTask };
                            if (group.attr === 'workgroup') return <GroupContainer key={`column ${groupindex}`} {...propsToColumn} />
                            return null
                        })
                    }
                </div>
            </div>
        </DndProvider>
    )
}

export default Oraniztional;