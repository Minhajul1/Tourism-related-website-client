import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddPackage.css'

const AddPackage = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://ghostly-monster-61498.herokuapp.com/packages',data)
        .then(res => {
            if (res.data.insertedId){
                alert('Order successfully done');
                reset();
            }
        })
    }
    return (
        <div className="add-package">
            <h2>Add a new Packages for you!!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name",{required: true,maxLength:20})} placeholder="Nmae" />
            <input {...register("details")} placeholder="Details" />
            <input type="number"{...register("price")} placeholder="Amount"/>
            <input type="number"{...register("phone")} placeholder="Phone" />
            <input type="submit" />
    </form>
        </div>
    );
};

export default AddPackage;