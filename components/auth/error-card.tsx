import React from 'react';
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Header} from "@/components/auth/header";
import {FormError} from "@/components/form-error";
import BackButton from "@/components/auth/back-button";
import {BsExclamationTriangle} from "react-icons/bs";

const ErrorCard = () => {
    return (
        <Card className="w-[400px] shadow-md ">
            <CardHeader>
                <Header label="Error" />
            </CardHeader>
            <BsExclamationTriangle className="text-red-500 text-2xl mx-auto m-4" />
            <CardContent>
                <FormError message="Something went wrong. Please try again later." />
            </CardContent>
            <BackButton  href="/auth/login" label="Back to Login"/>
        </Card>
    );
};

export default ErrorCard;
