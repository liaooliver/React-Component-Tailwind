import React, { useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import GroupContainer from './GroupContainer';
import MemberContainer from './MemberContainer';
import BtnGroup from './BtnGroup';
import NewForm from './NewForm';
import '../styles/oraniztional.css';

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

    const [groups, setGroups] = useState(workGroups);
    const [isOpen, setIsOpen] = useState(false);
    const [addTeam, setAddTeam] = useState(false);
    const [addMember, setAddMember] = useState(false);

    const handleMoveMyTask = (from, to) => {

        const { team, groupindex, index } = from;
        const { toGruop } = to;
        const newGroups = [...groups];
        // remove task
        newGroups[groupindex].teamMember.splice(index, 1);
        // move task
        newGroups[toGruop].teamMember.push(team);
        setGroups(newGroups);
    };

    const createMember = ({job, name}) => {
        const obj = {
            job,
            name,
            leader: false
        }
        const newGroups = [...groups];
        newGroups[0]['teamMember'].push(obj);
        setGroups(newGroups);
        close();
    }

    const openCreate = () => {
        setIsOpen(!isOpen)
    }

    const openTeam = () => {
        setAddTeam(!addTeam)
    }

    const openMember = () => {
        setAddMember(!addMember)
    }

    const close = () => {
        setIsOpen(false)
        setAddTeam(false)
        setAddMember(false)
    }

    return (
        <div className="relative rounded-md bg-gray-400 mx-auto">
            {
                addTeam || addMember ? <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gray-600 opacity-25 z-20"></div>
                    <div className="absolute z-30 form-position">
                        <NewForm createMember={createMember} />
                    </div>
                </div>
                 : ""
            }
            <div className="p-3">
                <BtnGroup openCreate={openCreate} openTeam={openTeam} openMember={openMember} isOpen={isOpen}  />
            </div>
            <DndProvider backend={HTML5Backend}>
                <div className="w-full h-full flex">
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
        </div>
    )
}

export default Oraniztional;