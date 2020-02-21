import React from "react";
import './PurchaceFailed.scss';
import Chooses from "../../../Elements/Chooses/Chooses";
import failed from '../../../Assets/svgs/failed.svg';

const PurchaceFailed = () => {
    return(
        <div className='purchace_failed'>
            <img src={failed} alt='failed' />
            <h1>Oops! Something went wrong</h1>
            <p>We couln’t be able to charge you money.
                Please ensure that your card is valid or check with your bank.</p>
            <Chooses/>
        </div>
    );
}

export default PurchaceFailed;