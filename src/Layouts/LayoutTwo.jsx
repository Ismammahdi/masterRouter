
import NavberTwo from '../Components/NavberTwo';
import { Outlet } from 'react-router-dom';

const LayoutTwo = () => {
    return (
        <div>
            <NavberTwo></NavberTwo>
            <Outlet></Outlet>
        </div>
    );
};

export default LayoutTwo;