import React, { useState } from 'react'
import Meta from '@/components/MetaTitle/Meta';
import axios from "axios";
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
export default function ChangePassword() {
        const [inputVal, setInputVal] = useState(false);
        const router = useRouter();
        const onSubmit = (e: any) => {
                setInputVal(true);
                axios({
                        method: 'post',
                        url: 'http://localhost:3001/api/change-password',
                        data: {
                                newPassword: e.password,
                                token: localStorage.getItem('token')
                        }
                }).then((res) => {
                        if (res.data.status === 'ok') {
                                toast.success("تغیر رمز موفقیت امیز بود 👍", {
                                        position: "top-right",
                                        closeButton: true,
                                        closeOnClick: true,
                                });
                                setInputVal(false);
                                router.push("/Login");
                        } else {
                                toast.error("مشکلی پیش امده است :((", {
                                        position: "top-right",
                                        closeButton: true,
                                        closeOnClick: true,
                                });
                        }
                })
        }
        const { values, handleChange, handleSubmit } = useFormik({
                initialValues: {
                        password: "",
                },
                onSubmit,
        });
        return (
                <>
                        <Meta NameTitle="change-password" linkTitle="Home" />
                        <div className="containerLogin">
                                <div className="modalis-open">
                                        <div className="modal-container-ChangePassword">
                                                <div className="modal-FormChangePassword">
                                                        <form onSubmit={handleSubmit}>
                                                                <h1 className="modal-title">تغیر پسورد</h1>
                                                                <div className="FormChangePassword">
                                                                        <div className="modal-buttonsChangePass">
                                                                                <button className={inputVal === false ? "input-button" : "input-buttonClick"}>ارسال</button>
                                                                        </div>
                                                                        <div className="input-blockChangePass">
                                                                                <label htmlFor="password" className="input-label">رمز</label>
                                                                                <input type="password" name="password" id="password" placeholder="رمز" value={values.password} autoComplete="true" onChange={handleChange} />

                                                                        </div>
                                                                </div>
                                                        </form>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <ToastContainer />
                </>
        )
}