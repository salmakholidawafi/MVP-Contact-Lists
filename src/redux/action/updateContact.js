import axios from 'axios';
import Swal from "sweetalert2";
import getAllContact from "./getAllContact";

const updateContact = ({user}, id) => {
    return function(dispatch) {
        axios({
            url: `http://localhost:3001/contacts/${id}`,
            method: "put",
            data: {
                name: user.name,
                email: user.email,
                phonenumber: user.phone,
                category: user.category
            }
        })
        .then((data) => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
                title: `Success update contact ${data.name}`
            })
            dispatch(getAllContact())
        }).catch((err) => {
            Swal.fire({
                position: "top-end",
                icon: "error",
                timer: 2000,
                showConfirmButton: false,
                title: `${err.message} - ${err.status}`
            })
        })
    }
};

export default updateContact;