import {useLocation} from "react-router-dom";

export default function SuccessIndex() {
    const location = useLocation();

    console.log(location);
    return (
        <div>
            successful
        </div>
    )
}