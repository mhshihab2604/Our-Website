import { useLoaderData } from "react-router-dom";
import User from "./User";
const Users = () => {
    const users = useLoaderData();
    return (
        <div className="mt-10 max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    {
                        users.map(user => <User key={user.id} user={user}></User> )
                    }
                </div>
        </div>
    );
};

export default Users;