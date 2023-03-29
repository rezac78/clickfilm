import Meta from '@/components/MetaTitle/Meta'
import Link from 'next/link';
export default function Login() {
        return (
                <>
                        <Meta NameTitle="Login" linkTitle="Home" />
                        <div className="containerLogin">
                                <div className="modalis-open">
                                        <div className="modal-container">
                                                <div className="modal-left">
                                                        <h1 className="modal-title">Click <big>FILM</big></h1>
                                                        <div className="input-block">
                                                                <label htmlFor="email" className="input-label">Email</label>
                                                                <input type="email" name="email" id="email" placeholder="Email" />
                                                        </div>
                                                        <div className="input-block">
                                                                <label htmlFor="password" className="input-label">Password</label>
                                                                <input type="password" name="password" id="password" placeholder="Password" />
                                                        </div>
                                                        <div className="modal-buttons">
                                                                <Link href="/">Forgot your password?</Link>
                                                                <button className="input-button">Login</button>
                                                        </div>
                                                        <p className="sign-up">Don&lsquo;t have an account? <Link href="/Register">Sign up now</Link></p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}