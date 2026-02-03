import './Header.css'

function Header(props){
    return <h2 className='header'>Happy BirthDay {props.name}, now you are {props.age}</h2>;
}

export default Header