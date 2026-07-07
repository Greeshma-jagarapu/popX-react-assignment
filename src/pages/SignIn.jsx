import { useState } from "react";
import { useNavigate } from "react-router";

function SignIn() {

    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [errorType,setErrorType] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        if(userData.email.trim().length == 0){
           setError('Please enter Your email');
           setErrorType('email');
           return;
        }else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(userData.email)){
            setError('Please enter valid email');
           setErrorType('email');
            return;
        }

        if(userData.password.trim().length == 0){
           setError('Please enter Your password');
           setErrorType('password');
           return;
        }else if(userData.password.length < 8){
           setError('Password length should be atleast 8');
           setErrorType('password');
            return;
        }

        const userInfo = JSON.parse(localStorage.getItem('user')); 
        
        if((userInfo.email != userData.email) || userInfo.password != userData.password){
            alert('User Not Found!');
            return;
        }

        navigate('/settings');
    }
    return (
        <div className="w-[375px] h-[730px] px-5 py-6 bg-white shadow-md">
            <h1 className="font-bold text-3xl text-slate-800">Signin to your<br /> PopX account</h1>
            <p className="text-slate-500 my-4">Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</p>
            <form onSubmit={handleLogin}>
                <div className="relative">
                    <label className="absolute top-2 bg-white px-2 left-2 text-purple-600">Email Address</label><br />
                    <input onChange={(e) => setEmail(e.target.value)} className="outline-none w-full px-5 py-2 rounded border border-1 border-slate-400 text-slate-800" type="email" name="email" placeholder="Enter email address" />
                    {error && errorType == 'email' && <p className="text-red-700 text-sm">{error}</p>}
                </div>
                <div className="relative">
                    <label className="absolute top-2 bg-white px-2 left-2 text-purple-600">Password</label><br />
                    <input onChange={(e) => setPassword(e.target.value)} className="outline-none w-full px-5 py-2 rounded border border-1 border-slate-400" type="password" name="password" placeholder="Enter password" />
                    {error && errorType == 'password' && <p className="text-red-700 text-sm">{error}</p>}
                </div>
                
                <button disabled={(email?.length > 0 && password?.length > 0) ? false : true}type="submit" className="w-full py-2 my-3 bg-purple-600 disabled:bg-zinc-300 disabled:cursor-not-allowed cursor-pointer rounded font-medium text-slate-50 outline-none">Login</button>
                
            </form>
        </div>
    )
}

export default SignIn;