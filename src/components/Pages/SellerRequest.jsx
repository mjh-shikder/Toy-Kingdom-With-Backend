import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const SellerRequest = () => {

    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/contributors')
            .then(res => res.json())
            .then(data => setContributors(data))
        .catch(err => toast(err))
},[])

    
    console.log(contributors);
    
    

    return (
        <div>
            seller request 
        </div>
    );
};

export default SellerRequest;