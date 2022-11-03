import { useContext } from 'react';
import { AuthContext } from "../context/authContext";

function Homepage() {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <h1>SkateUs</h1>
        </div>
    )
};

export default Homepage;