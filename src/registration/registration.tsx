import React, { useState } from 'react';
import { TRegisterStates, TRegisteredLead, TNotRegisteredLead, TRegisterLead } from './types';
import { SearchLead } from './search-lead';
import { ShowLead } from './show-lead';
import { RegisterLead } from './register-lead';



export const Registration = () => {
    const [machine, nextMachine] = useState<TRegisterStates>({ status: "search_lead" });

    const handleFoundRegisteredLead = (registeredLead: TRegisteredLead) : void => {
        nextMachine({ status: "show_lead", registeredLead });
    };

    const handleDidNotFoundRegisteredLead = (notRegisteredLead: TNotRegisteredLead) : void => {
        nextMachine({ status: "register_lead", notRegisteredLead });
    };

    const handleRegisteredLead = (registeredLead: TRegisteredLead) : void => {
        nextMachine({ status: 'show_lead', registeredLead });
    };

    if (machine.status === 'search_lead') {
        return <SearchLead
            onFoundLead={handleFoundRegisteredLead}
            onDidNotFoundLead={handleDidNotFoundRegisteredLead}
        />;
    }

    if (machine.status === 'register_lead') {
        return <RegisterLead
            notRegisteredLead={machine.notRegisteredLead}
            onRegisteredLead={handleRegisteredLead}
        />;
    }

    if (machine.status === 'show_lead') {
        return <ShowLead
            registeredLead={machine.registeredLead}
        />;
    }

    return <></>;
};
