"use client"

import {UserRole} from ".prisma/client";
import React from "react";
import {useCurrentRole} from "@/hooks/use-current-role";
import {FormError} from "@/components/form-error";

interface RoleGateProps {
    children: React.ReactNode;
    allowedRoles: UserRole;
}

export default function RoleGate({children, allowedRoles}: RoleGateProps) {
    const role = useCurrentRole();
    if (role !== allowedRoles) {
        return (
            <FormError message={"You are dont have permission to access this page"}/>)
    }
    return <>{children}</>;
}
