import {Component} from "react";
import PropTypes from 'prop-types';


class ShopItemClass extends Component {
    render () {
        return (
            <div className="main-content">
                <h2>{this.props.item.brand}</h2>
                <h1>{this.props.item.title}</h1>
                <h3>{this.props.item.description ? this.props.item.description : undefined}</h3>
                <div className="description">{this.props.item.descriptionFull ? this.props.item.descriptionFull : undefined}</div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">{this.props.item.currency} {parseFloat(this.props.item.price).toFixed(2)}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        )
    }
}


ShopItemClass.propTypes = {
    brand: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    currency: PropTypes.symbol.isRequired,
    price: PropTypes.number.isRequired
}

export default ShopItemClass

