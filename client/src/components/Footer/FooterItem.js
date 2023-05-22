import { Link } from "react-router-dom"

function FooterItem({ name }) {
    return (
        <>
            <Link to={'*'}>
                <p>{name} </p>
            </Link>
        </>
    )
}

export default FooterItem;