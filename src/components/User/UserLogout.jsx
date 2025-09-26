import {useEffectOnce, useLocalStorage} from "react-use";
import {userLogout} from "../../lib/api/UserApi.js";
import {alertError} from "../../lib/alert.js";
import {useNavigate} from "react-router";

export default function UserLogout() {
    const [token, setToken] = useLocalStorage("token", "");
    const navigate = useNavigate();

    async function logout() {
        const response = await userLogout(token);
        const responseBody = await response.json();
        // console.log("response body", responseBody);
        console.log(response)

        if (response.status === 200) {
            if(responseBody.data === "OK"){
                setToken("");
                navigate("/login");
            }
        } else {
            await alertError(responseBody.errors);
        }
    }

    useEffectOnce(() => {
        logout().then(() => console.log("logout berhasil"));
    })
    return(
        <>
        </>
    )
}