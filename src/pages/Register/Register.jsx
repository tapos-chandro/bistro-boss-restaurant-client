import { Link, useNavigate } from "react-router";
import authention from "../../assets/others/authentication2.png"
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import useAuth from './../../hooks/useAuth';
import Swal from 'sweetalert2'

const Register = () => {

    const { createUser, logOutUser, error } = useAuth();
    const navigate = useNavigate();


    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const { email, password, name } = data
        const result = await createUser(name, email, password)
        const user = result.user;

        if (user) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "User successfully registered",
                showConfirmButton: false,
                timer: 1500
            });
            logOutUser()
            navigate('/login')
            
        }
    }

    return (
        <div>
            <div className={`hero bg-base-200 min-h-screen`} >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={authention} alt="" />
                    </div>
                    <div className="card w-full max-w-sm shrink-0 shadow-2xl py-10">
                        <h1 className="text-center text-2xl font-bold">Sign Up Page</h1>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <label className="fieldset-label">Name</label>
                                    <input type="text" className="input" {...register("name")} placeholder="Email" />
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" className="input" {...register("email")} placeholder="Email" />
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" className="input" {...register('password')} placeholder="Password" />
                                    <div><a className="link link-hover text-left">Forgot password?</a></div>
                                    {error && <p className="text-red-500">{error}</p>}
                                    <input type="submit" value={"Sign Up"} className="btn mt-4 bg-[#d19f54] text-light rounded-md w-full" />
                                </form>
                            </fieldset>
                            <div className="text-center">
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
        </div>
    );
};

export default Register;