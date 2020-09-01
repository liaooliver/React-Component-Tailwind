import React from 'react';
import { useForm } from 'react-hook-form';

const NewForm = ({createMember, close}) => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
        createMember(data)
    }
    
    return (
        <form className="bg-white shadow-md rounded px-4 pt-6 pb-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="job">Job Title</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="job"
                    name="job"
                    ref={register({ required: true })}
                    type="text" 
                    placeholder="Job Title" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label> 
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="name" 
                    name="name"
                    ref={register({ required: true })}
                    type="text" 
                    placeholder="Please enter name" />
                {errors.name && <span>This field is required</span>}
            </div>
            <div className="mb-4">
                <label className="inline-block mr-2 text-gray-700 text-sm font-bold" htmlFor="isLeader">Leader</label> 
                <input
                    id="isLeader" 
                    name="isLeader"
                    ref={register}
                    type="checkbox"
                />
                {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex items-center justify-between">
                <input type="submit" value="Submit" className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                <input type="button" value="Cancel" className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=> close()} />
            </div>
        </form>
    );
}

export default NewForm;
