import axios from 'axios';
import Swal from 'sweetalert2';
import getAllContact from "./getAllContact";

const deleteContact = (id) => {
    return function(dispatch) {
        axios({
            url: `http://localhost:3001/contacts/${id}`,
            method: 'delete'
        })
        .then(() => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
                title: "Your contact has been deleted"
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
        });
    }
}

export default deleteContact;