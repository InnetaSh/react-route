import PropTypes from 'prop-types';


function Profile({name, age})
{
    return <p>{name}, {age} years!</p>
}



Profile.propTypes  ={
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
}
export default Profile;