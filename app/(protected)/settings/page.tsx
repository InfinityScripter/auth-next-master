import React from 'react';
import {auth} from "@/auth";

const SettingsPage = async () => {
    const session = await auth();
    return (
        <div>
            Private settings Page
            <p>{JSON.stringify(session)}</p>
        </div>
    );
};

export default SettingsPage;
