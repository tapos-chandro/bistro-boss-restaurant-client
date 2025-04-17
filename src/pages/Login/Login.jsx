import { FcGoogle } from "react-icons/fc";
import authention from "../../assets/others/authentication2.png"
import { Link } from "react-router";

const Login = () => {

    return (
        <div>

            <div className={`hero bg-base-200 min-h-screen`} >

                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={authention} alt="" />
                    </div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl py-10">
                        <h1 className="text-center text-2xl font-bold">Login Page</h1>
                        <div className="card-body text-center">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn mt-4 bg-[#d9b682] text-light rounded-md">Login</button>
                            </fieldset>
                            <p className=" text-md font-bold text-[#d19f54]">New here? <Link className="font-extrabold" to={'/register'}>Create a New Account</Link></p>
                            <h3 className="text-lg font-medium">Or sign in with</h3>
                            <div className="flex justify-center">
                                <FcGoogle className="text-4xl hover:cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;