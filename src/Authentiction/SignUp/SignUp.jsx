const SignUp  = () => {
    return (
        <section className="max-w-xl mx-auto mt-16">
            <div>
                <p className="text-center py-5">Please Register Here:</p>
            </div>
            <div>
                <form action="" className="flex flex-col mx-20 space-y-4">
                <input type="email" placeholder="Enter Your Email" className="border-black border-2 rounded-xl py-2 px-2" name="" id="" />
                <input type="text" placeholder="Enter Your Name" className="border-2 border-black  rounded-xl py-2 px-2" name="" id="" />
                <div className="flex mr-8">
                <input type="password" placeholder="Enter Password" className="border-2 border-black rounded-xl py-2 px-2" name="" id="" />
                <input type="password" placeholder="Confirm password" className=" ml-2 border-2 border-black rounded-xl py-2 px-2" name="" id="" />
            </div>
            <div className="flex justify-center">
                
            <input className="bg-blue-400 px-8 py-2 font-semibold rounded-full " type="submit" value="Submit" />
                </div>
                </form>
            </div>
        </section>
    )
};

export default SignUp;