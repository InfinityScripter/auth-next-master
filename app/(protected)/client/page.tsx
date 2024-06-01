"use client";
import React from 'react';
import UserInfo from "@/components/auth/user-info";
import {useCurrentUser} from "@/hooks/use-current-user";

const ClientPage =  () => {
    const user = useCurrentUser();

    return (
        <div>
            <UserInfo user={user} label="Client component User Info"/>
        </div>
    );
};

export default ClientPage;
