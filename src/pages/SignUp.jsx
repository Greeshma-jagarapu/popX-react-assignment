import { useState } from "react";
import { useNavigate } from "react-router";
function SignUp() {

    const navigate = useNavigate();

    const [error, setError] = useState('');
    const [errorType,setErrorType] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        setError('');

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log(userData);

        if((userData.fullname.trim()).length == 0){
           setError('Please enter Your Name');
           setErrorType('name');
           return;
        }

        if(userData.mobile.trim().length == 0) {
           setError('Please enter Your Phone number');
           setErrorType('number');
           return;
        }else if(!/^\d{10}$/.test(userData.mobile)){
           setError('Please enter valid Phone number');
           setErrorType('number');
           return;
        }

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

        if(!userData.agencyCheck){
            setError('Not selected');
            setErrorType('agency');
            return;
        }

        localStorage.setItem('user',JSON.stringify(userData));
        navigate('/settings');
    }
    return (
        <div className="w-[375px] h-[730px] border border-1 px-5 py-6 bg-white flex flex-col">
            <h1 className="font-bold text-3xl text-slate-800">Create your <br />PopX account</h1>
            <form className="flex-1 relative text-slate-800" onSubmit={handleSignUp}>
                <div className="relative mt-7">
                   <label className="absolute -top-3 left-2 bg-white px-1 text-purple-600">Full Name<span className="text-red-700">*</span></label>
                   <input className="outline-none border border-1 border-slate-400 px-4 py-2.5 w-full rounded font-medium" type="text" name="fullname" placeholder="Marry Doe" />
                   {error && errorType == 'name' && <p className="text-red-700 text-sm">{error}</p>}
                </div>
                <div className="relative mt-7">
                   <label className="absolute -top-3 left-2 bg-white px-1 text-purple-600">Phone number<span className="text-red-700">*</span></label>
                   <input className="outline-none border border-1 border-slate-400 px-4 py-2.5 w-full rounded font-medium" type="tel" name="mobile" placeholder="Marry Doe" />
                   {error && errorType == 'number' && <p className="text-red-700 text-sm">{error}</p>}
                </div>
                <div className="relative mt-7">
                   <label className="absolute -top-3 left-2 bg-white px-1 text-purple-600">Email address<span className="text-red-700">*</span></label>
                   <input className="outline-none border border-1 border-slate-400 px-4 py-2.5 w-full rounded font-medium" type="email" name="email" placeholder="Marry Doe" />
                   {error && errorType == 'email' && <p className="text-red-700 text-sm">{error}</p>}
                </div>
                <div className="relative mt-7">
                   <label className="absolute -top-3 left-2 bg-white px-1 text-purple-600">Password<span className="text-red-700">*</span></label>
                   <input className="outline-none border border-1 border-slate-400 px-4 py-2.5 w-full rounded font-medium" type="password" name="password" placeholder="Marry Doe" />
                   {error && errorType == 'password' && <p className="text-red-700 text-sm">{error}</p>}
                </div>
                <div className="relative mt-7">
                   <label className="absolute -top-3 left-2 bg-white px-1 text-purple-600">Company Name</label>
                   <input className="outline-none border border-1 border-slate-400 px-4 py-2.5 w-full rounded font-medium" type="text" name="companyName" placeholder="Marry Doe" />
                </div>
                <div className="relative mt-5 font-medium text-slate-700">
                   <label>Are you an Agency?<span className="text-red-700">*</span></label>
                   {error && errorType == 'agency' && <p className="text-red-700 text-sm">{error}</p>}
                   <div className="my-2 flex items-center">
                       <input className="size-5" type="radio" name="agencyCheck" /> <span className="mx-3">Yes</span>
                       <input className="size-5 ml-3" type="radio" name="agencyCheck" /> <span className="mx-3">No</span>
                   </div>                  
                </div>
                <button className="w-full bg-purple-600 py-2.5 text-slate-50 outline-none rounded font-medium absolute bottom-0 cursor-pointer">Create Account</button>
            </form>
        </div>
    )
}

export default SignUp;