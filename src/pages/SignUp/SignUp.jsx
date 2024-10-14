import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal  from 'sweetalert2';

const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() => {
                console.log('user profile info updated');
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully.",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/');
            })
            .catch(error => console.log(error));
        })
    };

    return (
        <>
        <Helmet>
                <title>Yumsy | Sign Up </title>
                
            </Helmet>
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input 
                                type="text" 
                                {...register("name", { required: true })} 
                                placeholder="Name" 
                                className="input input-bordered" 
                            />
                            {errors.name && <p className="text-red-600">Name is required</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input 
                                type="text" 
                                {...register("photoURL", { required: true })} 
                                placeholder="Photo URL" 
                                className="input input-bordered" 
                            />
                            {errors.photoURL && <p className="text-red-600">Photo URL is required</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                {...register("email", { required: true })} 
                                placeholder="Email" 
                                className="input input-bordered" 
                            />
                            {errors.email && <p className="text-red-600">Email is required</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                type="password" 
                                placeholder="Password" 
                                {...register("password", { 
                                    required: true, 
                                    minLength: {
                                        value: 6, 
                                        message: "Password must be at least 6 characters" 
                                    }, 
                                    maxLength: {
                                        value: 20, 
                                        message: "Password must be no more than 20 characters"
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,20}$/,
                                        message: "Password must include uppercase, lowercase, and a number"
                                    }
                                })} 
                                className="input input-bordered" 
                            />
                            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                            
                        </div>
                    </form>
                    <p><small>Already have an account? <Link to="/login">Login</Link></small></p>

                </div>
            </div>
        </div>
        </>
    );
};

export default SignUp;
