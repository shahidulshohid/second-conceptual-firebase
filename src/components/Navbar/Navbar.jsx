import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='max-h-screen bg-blue-500 text-white flex justify-between items-center'>
            <div className='text-xl font-extrabold ml-4'>
                TEETH WIZARD
            </div>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink className='ml-4' to='/allTreatments'>All Treatments</NavLink>
                <NavLink className='ml-4' to='/myAppointments'>My Appointments</NavLink>
                <NavLink className='ml-4' to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/login'>
                <button className='btn btn-primary mr-4'>Login</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;