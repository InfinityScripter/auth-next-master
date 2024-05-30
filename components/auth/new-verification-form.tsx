"use client";

import React from 'react';
import {useCallback, useEffect, useState} from "react";
import CardWrapper from "@/components/auth/card-wrapper";
import {BeatLoader} from "react-spinners";
import {useSearchParams} from "next/navigation";
import {newVerification} from "@/action/new-verification";
import {FormError} from "@/components/form-error";
import {FormSuccess} from "@/components/form-success";

const NewVerificationForm = () => {
    const [error,setError] = useState<string | undefined>();
    const [success,setSuccess] = useState<string | undefined>();
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const onSubmit = useCallback(
        () => {
            if (success || error) return;
if (!token) {
  setError("Missing token");
  return;
}
newVerification(token)
    .then((data)=>{
        setSuccess(data.success)
        setError(data.error)
    })
    .catch((error)=>{
        setError("An error occurred")
    })
        },
        [token,success,error],
    );

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);
    return (
<CardWrapper headerLabel='Confirm your email address'
             backButtonLabel='Back to Login'
             backButtonHref='/auth/login'
             showSocial={false}>
    <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader color="#2563EB" />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
    </div>
</CardWrapper>
    );
};

export default NewVerificationForm;
