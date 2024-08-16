import React, {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import getAllContact from '../redux/action/getAllContact';

//components
import CardContact from '../components/CardContact';
import Loading from "../components/Loading";

export default function CategoryContact() {
    const dispatch = useDispatch();
    const params = useParams();

    const loading = useSelector(state=>state.loadingReducer.loading)
    const contacts = useSelector(state=>state.contactReducer.allContact)
    const categoryContact = useSelector(state=>state.contactReducer.CategoryContact) 

    useEffect(() => {
        dispatch(getAllContact());
    }, [])

    useEffect(() => {
        const regex = new RegExp(params.category, "i");
        const myContact = contacts.filter(contact =>{
            return regex.test(contact.category)
        });
        dispatch({type:'CATEGORY_CONTACT', payload:myContact});
    }, [params, contacts])
    
    
    return(
        <div className="container mt-3">
            {/* <div className="row"> */}
            {
                loading ?
                <Loading/>
                :
                categoryContact.length === 0 ?
                <div className="text-center a-2 p-4 border border-white rounded"><span className="text-white">Data Not Found</span></div>
                :
                    categoryContact.map((contact) => {
                        return (
                            <div key={contact.id} className="col-md-3 p-1">
                                <CardContact contact = {contact}/>
                            </div>
                        )
                    })
            }
            </div>
        // </div>
    )
}