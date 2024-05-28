import React from 'react';
import {auth, signOut} from "@/auth";
import {Button} from "@/components/ui/button";

const SettingsPage = async () => {
    const session = await auth();
    return (
        <div>
            Private settings Page
            <p>{JSON.stringify(session)}</p>
            <form action={
                async ()=> {
                    "use server";
                    await signOut();
                }
            }
            >
                <Button
                    variant="default"
                    className=" mt-4"
                    type="submit">Sign Out</Button>
            </form>
        </div>
    );
};

export default SettingsPage;
