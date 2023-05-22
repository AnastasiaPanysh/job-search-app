import { Link } from "react-router-dom"

function NavItem({ name }) {
    return (
        <>
            <Link to={'/products'}>
                <p>{name} </p>
            </Link>
        </>
    )
}

export default NavItem;