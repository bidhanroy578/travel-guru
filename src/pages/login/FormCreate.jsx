import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../context_provider/Contexts";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

const FormCreate = () => {
    const [errMsg, setErrMsg] = useState(null)
    const [show, setShow] = useState(false)
    const { createAccount, githubLogin, googleLogin } = useContext(AuthContext)

    // handle google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                setErrMsg('Create account successfully')
            }).catch(error => setErrMsg('error happened ' + error.message))
    }
    // handle github login 
    const handleGithubLogin = () => {
        githubLogin()
            .then(() => {
                setErrMsg('Create account successfully')
            }).catch(error => setErrMsg('error happened ' + error.message))
    }

    // handle form data on submit
    const handleSubmit = (e) => {
        e.preventDefault();
        let form = new FormData(e.currentTarget)
        // let firstName = form.get('firstName')
        // let lastName = form.get('lastName')
        // let name = form.get('firstName') + ' ' + form.get('lastName')
        let email = form.get('email')
        let password = form.get('password')
        let passwordRetype = form.get('passwordRetype')
        // let checked = e.target.check.checked
        // console.log(name , email , password , passwordRetype , checked)

        setErrMsg('')
        if (password !== passwordRetype) {
            setErrMsg('Please retype password carefully . Password should match')
            return
        }
        if (password.length < 6) {
            setErrMsg('Password should contain at least 6 charecteres')
            return
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/;
        if (!passwordRegex.test(password)) {
            setErrMsg('Password should contain at least a small, capital , number and special cherecter')
            return
        }


        // create acc using email 
        createAccount(email, password)
            .then(() => {
                // console.log("sign in from btn clicked ", data)
                setErrMsg('Create account successfully')
            }).catch(error => setErrMsg('error happened ' + error.message))
    };
    return (
        <div className="text-center space-y-4">
            <div className="hero">
                <div className="hero-content ">
                    <div className="card  w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <form onSubmit={handleSubmit} className="fieldset">
                                <input type="text" name="firstName" placeholder="First Name" className="input input-ghost border-b-black" />
                                <input type="text" name="lastName" placeholder="Last Name" className="input input-ghost border-b-black" />
                                <input type="text" name="email" required placeholder="Username or Email" className="input input-ghost border-b-black" />
                                <label htmlFor="password" className="flex relative items-center">
                                    <input type={show ? 'text' : 'password'} name="password" className="input input-ghost border-b-black pr-7" required placeholder="Passowrd" />
                                    {/* <FaEye className="absolute right-1 text-xl"></FaEye> */}
                                    {
                                        show ?
                                            <PiEyeBold onClick={() => setShow(!show)} className="absolute cursor-pointer right-1 text-xl" />
                                            :
                                            <PiEyeClosedBold onClick={() => setShow(!show)} className="absolute cursor-pointer right-1 text-xl" />
                                    }
                                </label>

                                <input type={show ? 'text' : 'password'} name="passwordRetype" required placeholder="Confrim Passowrd" className="input input-ghost border-b-black" />
                                <div className="flex justify-between">
                                    <label htmlFor="check" className="flex gap-1">
                                        <input type="checkbox" name="check" id="check" />
                                        Remember Me
                                    </label>
                                    <a className="link link-hover text-[#f9a51a]">Forgot password?</a>
                                </div>
                                <button className="btn btn-warning mt-4">Create Account</button>
                            </form>
                            <p>Already have an Account? <Link to={'/login'} className="text-[#f9a51a]">Login Here...</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-red-600">{errMsg}</p>
            <div className="divider w-1/4 mx-auto">Or</div>

            <button onClick={handleGoogleLogin} className="btn block mx-auto rounded-3xl px-20 relative"><FaGoogle className="absolute text-xl left-2"></FaGoogle>  Continue with Google </button>
            <button onClick={handleGithubLogin} className="btn block mx-auto rounded-3xl px-20 relative mb-10"><FaGithub className="absolute text-xl left-2"></FaGithub> Continue with GitHub</button>
        </div>
    );
};

export default FormCreate;