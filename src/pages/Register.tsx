import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from "formik";
import Meta from '@/components/MetaTitle/Meta'
import Link from 'next/link';
import api from "../pages/api/api"
import { ToastContainer, toast } from 'react-toastify';
import { FormRegisterSchema } from "../schemas/index"
export default function Register() {
        const [inputVal, setInputVal] = useState(false);
        const router = useRouter();
        const onSubmit = (e: any, actions: any) => {
                setInputVal(true);
                api.post("/signup", e).then((result) => {
                        if (result.data.message === "Password Not Matched!!!") {
                                toast.error("پسورد ها یکی نیستند", {
                                        position: "top-right",
                                        closeButton: true,
                                        closeOnClick: true,
                                });
                                setInputVal(false);
                        } else if (result.data.message === "Email already used") {
                                toast.error("ایمیل موجود است", {
                                        position: "top-right",
                                        closeButton: true,
                                        closeOnClick: true,
                                });
                                setInputVal(false);
                        } else if (result.data.message === "Username already used") {
                                toast.error("این نام کاربری موجود است", {
                                        position: "top-right",
                                        closeButton: true,
                                        closeOnClick: true,
                                });
                                setInputVal(false);
                        }
                        else {
                                toast.success("ثبت نام موفق امیز بود 👍", {
                                        position: "top-right",
                                        closeButton: true,
                                        closeOnClick: true,
                                });
                                setInputVal(false);
                                actions.resetForm();
                                router.push("/Login");
                        }
                }, (error) => {
                        toast.error(` Eror❗️❗️❗️`, {
                                position: "top-right",
                                closeOnClick: true,
                        });
                });
        }
        const { values, errors, handleChange, handleSubmit } = useFormik({
                initialValues: {
                        username: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                },
                validationSchema: FormRegisterSchema,
                onSubmit,
        });
        return (
                <>
                        <Meta NameTitle="Register" linkTitle="Home" />
                        <div className="containerLogin">
                                <div className="modalis-open">
                                        <div className="modal-container-Req">
                                                <div className="modal-left">
                                                        <form onSubmit={handleSubmit}>
                                                                <h1 className="modal-title">Click <big>FILM</big></h1>
                                                                <div className="input-block">
                                                                        <label htmlFor="username" className="input-label">نام</label>
                                                                        <input type="username" name="username" id="username" placeholder="نام" value={values.username} onChange={handleChange} />
                                                                </div>
                                                                {errors.username && <p className="error">{errors.username}</p>}
                                                                <div className="input-block">
                                                                        <label htmlFor="email" className="input-label">ایمیل</label>
                                                                        <input type="email" name="email" id="email" placeholder="ایمیل" value={values.email} onChange={handleChange} />
                                                                </div>
                                                                {errors.email && <p className="error">{errors.email}</p>}
                                                                <div className="input-block">
                                                                        <label htmlFor="password" className="input-label">رمز</label>
                                                                        <input type="password" name="password" id="password" placeholder="رمز" value={values.password} onChange={handleChange} />
                                                                </div>
                                                                {errors.password && <p className="error">{errors.password}</p>}
                                                                <div className="input-block">
                                                                        <label htmlFor="repeatpassword" className="input-label">تکرار رمز</label>
                                                                        <input type="password" name="confirmPassword" id="repeatpassword" placeholder="تکرار رمز" value={values.confirmPassword} onChange={handleChange} />
                                                                </div>
                                                                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                                                                <div className="modal-buttons">
                                                                        <button type="submit" className={inputVal === false ? "input-button" : "input-buttonClick"}>ثبت نام</button>
                                                                </div>
                                                                <p className="sign-up">عضو هستم <Link href="/Login">ورود</Link></p>
                                                        </form>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <ToastContainer />
                </>
        )
}