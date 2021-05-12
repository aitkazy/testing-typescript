import React, { useState } from 'react';
import { TNotRegisteredLead, TRegisteredLead } from './types';

type TNewLead = {
    iin: string,
    name: string,
    phone: string
};

type TPropsRegisterLead = {
    notRegisteredLead: TNotRegisteredLead,
    onRegisteredLead: (registeredLead: TRegisteredLead) => void
};

export const RegisterLead : React.FC<TPropsRegisterLead> = props => {
    const { notRegisteredLead, onRegisteredLead } = props;

    const [form, nextForm] = useState<TNewLead>({ iin: notRegisteredLead.iin, name: "", phone: "" });



    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        nextForm({ ...form, name: event.target.value });
    };

    const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) : void => {
        nextForm({ ...form, phone: event.target.value });
    };

    const handleSave = () => {
        onRegisteredLead(form);
    };

    return <div>
        <div>New Lead Form</div>
        <div>{`IIN: ${form.iin}`}</div>
        <div>
            <input
                value={form.name}
                onChange={handleChangeName}
                placeholder="NAME"
            />
        </div>
        <div>
            <input
                value={form.phone}
                onChange={handleChangePhone}
                placeholder="PHONE"
            />
        </div>
        <div>
            <button onClick={handleSave} type="button">
                SAVE
            </button>
        </div>
    </div>;
};