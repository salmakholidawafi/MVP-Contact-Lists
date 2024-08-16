import axios from 'axios';
import Swal from 'sweetalert2';

const detailContact = (id) => {
    return function(dispatch) {
        axios({
            url: `http://localhost:3001/contacts/${id}`,
            method: 'get'
        })
        .then(({data}) => {
            dispatch({type: "DETAIL_CONTACT", payload:data})
        }).catch((err) => {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: `${err.message} ${err.status}`,
                showConfirmButton: false,
                timer: 2000
            })
        });
    }
}

export default detailContact;