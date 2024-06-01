"use client";

import React from 'react';
import {Button} from "@/components/ui/button";
import {signOut} from "next-auth/react";
import {logout} from "@/action/logout";
import {useCurrentUser} from "@/hooks/use-current-user";

const SettingsPage =  () => {
    const user = useCurrentUser();
    const onSignOut = async  () => {
       // 1st method
        await signOut();
        //2nd method
        //  logout();
    }
    return (
        <>
            <form

            >
                <Button
                    variant="outline"
                    className=" mt-4"
                    onClick={onSignOut}
                    type="submit">Sign Out</Button>
            </form>
        </>
    );
};

export default SettingsPage;
