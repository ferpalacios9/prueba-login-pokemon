import './Profile.css'

const ProfilePage = () => {
    return (
        <div className="container">
            <div className='title-profile'>
            <h2>Información Personal</h2>
            </div>
            <div className="profile-card">
                <ul className='data-list'>
                    <li>Nombre Completo:</li>
                    <li>Correo Electronico:</li>
                </ul>
            </div>
        </div>
    )
}

export default ProfilePage;