import './Profile.css'
import NavBar from './Navbar/navbar';

const ProfilePage = () => {

    return (
        <>
            <NavBar />
            <div className="container-profile">
                <div className='title-profile'>
                    <h2>Información Personal</h2>
                </div>
                <div className="profile-card">
                    <ul className='data-list'>
                        <li>Nombre:</li>
                        <li>Apellidos:</li>
                        <li>Correo Electronico:</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;