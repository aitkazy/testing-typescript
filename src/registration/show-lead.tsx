import React, { FC } from 'react';
import { TRegisteredLead } from './types';

type TPropsShowLead = {
    registeredLead: TRegisteredLead
};

export const ShowLead : FC<TPropsShowLead> = props => {
    const { registeredLead } = props;

    return <div>
        <div style={{ display: "inline-block", background: "red" }}>Show LEAD Details</div>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>NAME</td><td>IIN</td><td>PHONE</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{registeredLead.name}</td><td>{registeredLead.iin}</td><td>{registeredLead.phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
};