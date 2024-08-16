import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Swal from "sweetalert2";

//action
import getDetailContact from "../redux/action/getDetailContact";
import updateContact from "../redux/action/updateContact";

export default function UpdateContactForm(props) {
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState("Family");

    const contact = useSelector(state=>state.contactReducer.detailContact);

    const detailContact = (id) => {
        dispatch(getDetailContact(id))
    }

    const resetForm = () => {
        setName("")
        setEmail("")
        setPhone("")
        setCategory("Family")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "" || phone === "") {
            Swal.fire({
                position: "top-end",
                icon: "error",
                timer: 3000,
                showConfirmButton: false,
                title: `Please Fill Form Update`
            })
        } else {
            dispatch(updateContact({
                user:{
                    name,
                    phone,
                    email,
                    category
                }
            }, contact.id))
        }
        resetForm()
    }

    useEffect(() => {
        setName(contact.name)
        setEmail(contact.email)
        setPhone(contact.phonenumber)
        setCategory(contact.category)
    }, [contact])
    
    return (
        <>
        <button onClick={()=>detailContact(props.idContact)} className="btn btn-dark" type="button" data-bs-toggle="modal" data-bs-target="#formUpdateContact">Update</button>
        <div className="modal fade" id="formUpdateContact" tabindex="-1" aria-labelledby="formUpdateContactLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Form Update Contact</h5>
                        <button onClick={()=>resetForm()} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="form-group mt-1">
                                <label htmlFor="name">Name</label>
                                <input value={name} onChange={(e)=>setName(e.target.value)}
                                type="text" className="form-control" />
                            </div>
                            <div className="form-group mt-1">
                                <label htmlFor="email">Email</label>
                                <input value={email} onChange={(e)=>setEmail(e.target.value)}
                                type="email" className="form-control" />
                            </div>
                            <div className="form-group mt-1">
                                <label htmlFor="phone">Phone Number</label>
                                <input value={phone} onChange={(e)=>setPhone(e.target.value)}
                                type="number" className="form-control" />
                            </div>
                            <div className="form-group mt-1">
                                <label htmlFor="category">Category</label>
                                <select value={category} onChange={(e)=>setCategory(e.target.value)}
                                name="category" className="form-control">
                                    <option value="family">Family</option>
                                    <option value="friend">Friend</option>
                                    <option value="work">Work</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button data-bs-dismiss="modal" onClick={()=>resetForm()} type="button" className="btn btn-danger">Cancel</button>
                            <button data-bs-dismiss="modal" type="submit" className="btn btn-secondary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}