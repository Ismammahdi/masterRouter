
import { Outlet } from 'react-router-dom';
import NavberOne from '../Components/NavberOne';


const LayoutOne = () => {
    return (
        <div>
            <NavberOne></NavberOne>
            <Outlet></Outlet>
        </div>
    );
};

export default LayoutOne;