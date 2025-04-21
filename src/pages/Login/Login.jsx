import { FcGoogle } from "react-icons/fc";
import authention from "../../assets/others/authentication2.png"
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
const Login = () => {

    const { user, signInUser, signInWithGoogle, setLoading } = useAuth()
    console.log(user)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) =>{
        console.log(data)
       const res = await signInUser(data?.email, data?.password)

       console.log(res)
    }

    const handleGoogleLogin = async () => {
        const res = await signInWithGoogle()
        console.log(res)
        if(res?.user) {
            setLoading(false)
            navigate(from, { replace: true })
        }
    }




    return (
        <div>

            <div className={`hero bg-base-200 min-h-screen`} >

                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={authention} alt="" />
                    </div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl py-10">
                        <h1 className="text-center text-2xl font-bold">Login Page</h1>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label className="fieldset-label" >Email</label>
                                    <input type="email" className="input" {...register("email")} placeholder="Email" />
                                    <label className="fieldset-label" >Password</label>
                                    <input type="password" className="input" {...register('password')} placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <input className="btn mt-4 bg-[#d9b682] text-light rounded-md w-full" type="submit" value="Login" />
                                </form>
                            </fieldset>
                            <div className="text-center">
                                <p className=" text-md font-bold text-[#d19f54]">New here? <Link className="font-extrabold" to={'/register'}>Create a New Account</Link></p>
                                <h3 className="text-lg font-medium">Or sign in with</h3>
                                <div className="flex justify-center">
                                    <FcGoogle className="text-4xl hover:cursor-pointer" onClick={handleGoogleLogin} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;