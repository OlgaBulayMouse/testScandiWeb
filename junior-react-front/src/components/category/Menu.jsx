import React from "react";

class Menu extends React.Component {
    state = {
        activeItem: null,
    };

    onSelectItem = (index) => {
        this.setState({
            activeItem: index,
        })
    };

    render() {
        return (
            <div className="ulGender">
                <ul className="gender">
                    {this.props.items.map((name, index) => (
                        <li
                            className={this.state.activeItem === index ? 'active' : 'sex'}
                            onClick={() => this.onSelectItem(index)}
                            key={`${name}_${index}`}
                        >{name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
};

export default Menu;