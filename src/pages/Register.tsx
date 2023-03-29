import Meta from '@/components/MetaTitle/Meta'
import Link from 'next/link';
export default function Register() {
        return (
                <>
                        <Meta NameTitle="Register" linkTitle="Home" />
                        <div className="containerLogin">
                                <div className="modalis-open">
                                        <div className="modal-container-Req">
                                                <div className="modal-left">
                                                        <h1 className="modal-title">Click <big>FILM</big></h1>
                                                        <div className="input-block">
                                                                <label htmlFor="username" className="input-label">Username</label>
                                                                <input type="username" name="username" id="username" placeholder="Username" />
                                                        </div>
                                                        <div className="input-block">
                                                                <label htmlFor="password" className="input-label">Password</label>
                                                                <input type="password" name="password" id="password" placeholder="Password" />
                                                        </div>
                                                        <div className="input-block">
                                                                <label htmlFor="repeatpassword" className="input-label">RepeatPassword</label>
                                                                <input type="password" name="repeatpassword" id="repeatpassword" placeholder="RepeatPassword" />
                                                        </div>
                                                        <div className="input-block">
                                                                <label htmlFor="email" className="input-label">Email</label>
                                                                <input type="email" name="email" id="email" placeholder="Email" />
                                                        </div>
                                                        <div className="modal-buttons">
                                                                <button className="input-button">Register</button>
                                                        </div>
                                                        <p className="sign-up">Already Member? <a href="/Login">Login</a></p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}