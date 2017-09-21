import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class HomeLinks extends React.Component {

    render() {

        const { routes } = this.props

        const Links = routes.map((item, index) => <Link key={index} className={item.cssClass} to={item.url}> {item.text} </Link>)

        return (
            <div className="container">
                {Links}
            </div>
        );
    }

};

HomeLinks.propTypes = {
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            cssClass: PropTypes.string.isRequired
        })
    ).isRequired
};

export default HomeLinks;
