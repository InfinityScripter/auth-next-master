"use client"

import React from 'react';
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import RoleGate from "@/components/auth/role-gate";
import {FormSuccess} from "@/components/form-success";
import {UserRole} from ".prisma/client";
import {Button} from "@/components/ui/button";
import {toast} from "sonner";
import {admin} from "@/action/admin";

const AdminPage =  () => {

    const onServerActionClick = async () => {
        await admin()
            .then((res) => {
                if (res.success) {
                    toast.success(res.success)
                } else {
                    toast.error(res.error)
                }
            })
    }
const onApiRouteClick = async () => {
    fetch("/api/admin")
        .then(async (res) => {
            if (res.ok) {
             toast.success("Allowed API! Success")
            } else {
                toast.error("Not allowed API! Error")
            }
        })
}
    return (
        <Card className="w-[600px] shadow-md">
         <CardHeader>
             <p className="text-2xl font-semibold text-center">Admin Page</p>
         </CardHeader>
    <CardContent className="space-y-4">
        <RoleGate allowedRoles={UserRole.ADMIN}>
            <FormSuccess message="You are an admin"/>
            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md text-center ">
                <p className="text-sm font-semibold">Admin-only API ROUTE</p>
                <Button

                    onClick={onApiRouteClick}>
                    Click me
                </Button>
            </div>
            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md text-center ">
                <p className="text-sm font-semibold">Admin-only Server action</p>
                <Button

                    onClick={onServerActionClick}>
                    Click me
                </Button>
            </div>

        </RoleGate>
    </CardContent>
        </Card>
    );
};

export default AdminPage;
