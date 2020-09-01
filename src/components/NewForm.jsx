import React from 'react';
import { useForm } from 'react-hook-form';

const NewForm = ({createMember}) => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        createMember(data)
    }
    console.log(errors)
    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="job">Job Title</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    id="job"
                    name="job"
                    ref={register}
                    type="text" 
                    placeholder="Job Title" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label> 
                <input
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="name" 
                    name="name"
                    ref={register({ required: true })}
                    type="text" 
                    placeholder="Please enter name" />
                {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex items-center justify-between">
                <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
            </div>
        </form>
      );

    // return <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
    //     <div className="mb-4">
    //         <label className="block text-gray-700 text-sm font-bold mb-2" for="job">Job Title</label>
    //         <input
    //             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
    //             id="job"
    //             name="job"
    //             ref={register}
    //             type="text" 
    //             placeholder="Job Title" />
    //     </div>
    //     <div className="mb-6">
    //         <label className="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
    //         <input
    //             className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
    //             id="name" 
    //             name="name"
    //             ref={register}
    //             type="text" 
    //             placeholder="Please enter name" />
    //         <p className="text-red-500 text-xs italic">Please enter name.</p>
    //     </div>
    //     <div className="flex items-center justify-between">
    //         <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" />    
    //     </div>
    // </form>
}

export default NewForm;
