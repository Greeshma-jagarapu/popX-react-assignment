
function AccountSettings() {

    const userInfo = JSON.parse(localStorage.getItem('user'));

    const {fullname, email} = userInfo;

    return (
        <div className="w-[375px] h-[730px] bg-slate-100 relative shadow-md">
            <h4 className="font-medium text-xl text-slate-700 px-5 h-18 flex items-center bg-white shadow-xs">Account Settings</h4>
            <div>
                <div className="flex gap-3 p-5">
                    <div className="flex items-end">
                        <img className="h-18 w-18 rounded-full" src="src/assets/profile-img.jpg" alt="profile" />
                        <div className="h-5 w-5 flex justify-center align-center bg-indigo-700 p-1 rounded-full relative bottom-1 right-4">
                           <img className="invert" src="src/assets/camera-icon.png" alt="camera-icon" />
                        </div>                    
                    </div>
                    <div>
                        <h3 className="font-medium">{fullname}</h3>
                        <p className="text-slate-900">{email}</p>
                    </div>
                </div>
                <p className="px-5 text-slate-900 pb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sunt ratione, a tempora possimus officia quis laborum voluptates sint magni hic sapiente dicta incidunt.</p>
                <hr className="border-t border-dashed border-gray-400" />
            </div>
            <hr className="border-t border-dashed border-gray-400 absolute bottom-10 left-0 w-full" />
        </div>
    )
}

export default AccountSettings;