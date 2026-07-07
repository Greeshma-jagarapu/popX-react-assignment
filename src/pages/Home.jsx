import { useNavigate } from "react-router";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="w-[375px] h-[730px] shadow-md flex items-end font-rubik bg-white">
            <div className="w-full px-5 py-6">
               <h1 className="font-bold text-3xl text-slate-800">Welcome to PopX</h1>
               <p className="text-slate-500 my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
               <button onClick={() => navigate('/signup')} className="block w-full py-2.5 bg-purple-600 text-slate-50 font-medium rounded my-2 outline-none cursor-pointer">Create Account</button>
               <button onClick={() => navigate('/signin')} className="w-full py-2.5 bg-purple-200 font-medium text-slate-800 rounded outline-none cursor-pointer">Already Registered? Login</button>
            </div>
        </div>
    )
}

export default Home;