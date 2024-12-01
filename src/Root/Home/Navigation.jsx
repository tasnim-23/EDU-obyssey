import { Link } from "react-router";
import "./Navigation.css"

const Navigation = () => {
    return(
        <section className="flex justify-between items-center bg-blue-400 px-4 py-4 font-semibold">
            <div className="w-8/12">
                <ul className="gap-5 menu-content">
                    <li> 
                        <Link>Home</Link>
                    </li>
                    <li>
                        <Link>Menu </Link>
                    </li>
                    <li>
                        <Link>Profile</Link>
                    </li>
                    <li>
                        <Link>About</Link>
                    </li>
                </ul>
            </div>
            <div className="w-4/12 flex justify-end gap-2">
                <Link>
                <button className="bg-white px-4 py-1 rounded-md">
                    Login
                </button>
                </Link>
                <Link>
                    <button  className="bg-white px-4 py-1 rounded-md">Register</button>
                </Link>
                
            </div>
        </section>
    );
};
export default Navigation;