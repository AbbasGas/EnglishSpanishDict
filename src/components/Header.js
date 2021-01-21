import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'


const Header = ({ title, onAdd, showAdd }) => {

    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' &&
            (<Button color={showAdd ? '#ef4f4f' : '#16c79a'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>)}
        </header>
    )
}

Header.defaultProps = {
    title: 'English Spanish Dict',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'steelblue', 
//     backgroundColor: 'lightgray'
// }

export default Header
