import {Resend} from "resend";

const resend = new Resend(
    process.env.RESEND_API_KEY
);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "2FA Code",
        html: `Your 2FA code is: ${token}`,
    });
};

export const sendPasswordResetEmail = async (email: string, token:string) => {
    const resetLink = `${domain}/auth/new-password?token=${token}`;
await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `Click <a href="${resetLink}">here</a> to reset your password.`,
})

}

export const sendVerificationEmail = async (email: string, token:string) => {
    const confirmLink = `${domain}/auth/new-verification?token=${token}`;

    await resend.emails.send(
        {
            from: "onboarding@resend.dev",
            to: email,
            subject: "Please confirm your email",
            html: `Click <a href="${confirmLink}">here</a> to confirm your email.`,
        }
    )
}
