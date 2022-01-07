const Profile2 = () => {
    const user = {
        firstName: 'Bandi',
        lastName: 'Hajdu' 
    }

    const {firstName, lastName} = user;
    
    return <div>
            <h2>{user.firstName}</h2>
            <h3>{user.lastName}</h3>
            <h2>{firstName}</h2>
            <h3>{lastName}</h3>
        </div>
}

export default Profile2;