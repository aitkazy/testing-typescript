import React, { FC } from 'react';
import { TRegisteredLead, TNotRegisteredLead } from './types';

type TPropsSearchLead = {
    onFoundLead: (lead: TRegisteredLead) => void,
    onDidNotFoundLead: (lead: TNotRegisteredLead) => void
};

export const SearchLead : FC<TPropsSearchLead> = props => {
    const { onFoundLead, onDidNotFoundLead } = props;

    const handleFound = () => {
        onFoundLead({ iin: "931226301310", name: "yerassyl", phone: "+77083790516" });
    };

    const handleDidNotFound = () => {
        onDidNotFoundLead({ iin: "931226301310" });
    };

    return <div>
        <div>SearchLead</div>
        <div><button onClick={handleFound}>found</button></div>
        <div><button onClick={handleDidNotFound}>did not found</button></div>
    </div>
};