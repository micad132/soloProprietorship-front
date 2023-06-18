import {useAppSelector} from "../../../utils/hooks";
import {getUserDetails} from "../../../store/reducers/utilsReducer";

const LoggedUserData = () => {

    const userDetails = useAppSelector(getUserDetails);

    const properContent = userDetails
        ? (
            <div style={{margin: '5px 0'}}>
                <h3>Jesteś zalogowany jako {userDetails.firstName} {userDetails.email}</h3>
            </div>
        )
        : <h3>Nie jesteś zalogowany!</h3>

    return(
        <div>
            {properContent}
        </div>
    )
}

export default LoggedUserData;