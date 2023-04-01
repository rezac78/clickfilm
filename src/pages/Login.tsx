import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Meta from '@/components/MetaTitle/Meta'
import Link from 'next/link';
import api from "../pages/api/api"
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
export default function Login() {
        const [inputVal, setInputVal] = useState(false)
        const router = useRouter();
        const onSubmit = (e: any) => {
                api.post("/login", e).then((result) => {
                        const Token = result.data.token
                        setInputVal(true);
                        if (result.data.message === "Invalid username/password") {
                                toast.error("ایمیل یا پسورد اشتباه است", {
                                        position: "top-right",
                                        closeButton: true,
                                        closeOnClick: true,
                                });
                                setInputVal(false);
                        } else if (result.data.message === "Invalid password") {
                                toast.error("پسورد اشتباه است", {
                                        position: "top-right",
                                        closeButton: true,
                                        closeOnClick: true,
                                });
                                setInputVal(false);
                        } else {
                                toast.success("ورود موفق بود 👍", {
                                        position: "top-right",
                                        closeButton: true,
                                        closeOnClick: true,
                                });
                                setInputVal(false);
                                localStorage.setItem('token', Token)
                                router.push("/");
                        }
                }, (error) => {
                        toast.error(` Eror❗️❗️❗️`, {
                                position: "top-right",
                                closeOnClick: true,
                        });
                });
        }
        const { values, handleChange, handleSubmit } = useFormik({
                initialValues: {
                        username: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                },
                onSubmit,
        });
        return (
                <>
                        <Meta NameTitle="Login" linkTitle="Home" />
                        <div className="containerLogin">
                                <div className="modalis-open">
                                        <div className="modal-container">
                                                <div className="modal-left">
                                                        <form onSubmit={handleSubmit}>
                                                                <h1 className="modal-title">Click <big>FILM</big></h1>
                                                                <div className="input-block">
                                                                        <label htmlFor="email" className="input-label">ایمیل</label>
                                                                        <input type="email" name="email" id="email" placeholder="ایمیل" value={values.email} autoComplete="true" onChange={handleChange} />
                                                                </div>
                                                                <div className="input-block">
                                                                        <label htmlFor="password" className="input-label">رمز</label>
                                                                        <input type="password" name="password" id="password" placeholder="رمز" value={values.password} autoComplete="true" onChange={handleChange} />
                                                                </div>
                                                                <div className="modal-buttonsLogin">
                                                                        <Link href="/change-password">رمز عبور را فراموش کردبد؟</Link>
                                                                        <button className={inputVal === false ? "input-button" : "input-buttonClick"}>ورود</button>
                                                                </div>
                                                                <p className="sign-up">اکانت نداری ؟ <Link href="/Register">همین الان ثبت نام کن</Link></p>
                                                        </form>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <ToastContainer />
                </>
        )
}