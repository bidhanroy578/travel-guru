import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context_provider/Contexts";

const FormLogin = () => {
    const [errMsg, setErrMsg] = useState(null)
    const { login, githubLogin, googleLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    // handle google login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                setErrMsg('Create account successfully')
                navigate(location?.state || '/')
            }).catch(error => setErrMsg('error happened ' + error.message))
    }
    // handle github login 
    const handleGithubLogin = () => {
        githubLogin()
            .then(() => {
                setErrMsg('Create account successfully')
                navigate(location?.state || '/')
            }).catch(error => setErrMsg('error happened ' + error.message))
    }
    // handle form
    const handleSubmit = e => {
        e.preventDefault();
        let form = new FormData(e.currentTarget)
        let email = form.get('email')
        let password = form.get('password')

        setErrMsg('')
        if (password.length < 6) {
            setErrMsg('Password should contain at least 6 charecteres')
            return
        }
        // regex 
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/;
        if (!passwordRegex.test(password)) {
            setErrMsg('Password should contain at least a small, capital , number and special cherecter')
            return
        }
        // login using email 
        login(email, password)
            .then(() => {
                setErrMsg('Login successfully')
                navigate(location?.state || '/')
            }).catch(error => setErrMsg('error happened ' + error.message))

    }
    return (
        <div className="text-center space-y-4">
            <div className="hero">
                <div className="hero-content ">
                    <div className="card  w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <form onSubmit={handleSubmit} className="fieldset">
                                <input name="email" type="text" placeholder="Username or Email" className="input input-ghost border-b-black" />
                                <input name="password" type="text" placeholder="Passowrd" className="input input-ghost border-b-black" />
                                <div className="flex justify-between"><label htmlFor="check" className="flex gap-1"><input type="checkbox" name="check" id="check" />Remember Me</label><a className="link link-hover text-[#f9a51a]">Forgot password?</a></div>
                                <button className="btn btn-warning mt-4">Login</button>
                            </form>
                            <p>Don’t have an account? <Link to={'/login/create-account'} className="text-[#f9a51a]">Create an account</Link></p>
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

export default FormLogin;