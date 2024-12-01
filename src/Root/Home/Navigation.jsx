import { Link } from "react-router";

const Navigation = () => {
    return(
        <section >
            <div>
                <ul>
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
            <div>
                <Link>
                <button>
                    signup
                </button>
                </Link>
                
            </div>
        </section>
    );
};
export default Navigation;