import { Link } from "react-router";
import authention from "../../assets/others/authentication2.png"
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    return (
        <div>
            <div className={`hero bg-base-200 min-h-screen`} >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={authention} alt="" />
                    </div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl py-10">
                        <h1 className="text-center text-2xl font-bold">Sign Up Page</h1>
                        <div className="card-body text-center">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn mt-4 bg-[#d19f54] text-light rounded-md">Login</button>
                            </fieldset>
                            <p className=" text-md font-bold text-[#d19f54]">Already registered? <Link className="font-extrabold" to={'/login'}>Go to log in</Link></p>
                            <h3 className="text-lg font-medium">Or sign up with</h3>
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

export default Register;