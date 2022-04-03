import React from "react";
import ArowGreen from "./ArowGreen";
import Menu from "./Menu";
import CartOnRight from "./CartOnRight";

class TopPage extends React.Component {
    render() {
        return (
            <header>
                <Menu />
                <ArowGreen />
                <CartOnRight />
            </header>
        )
    }
};

export default TopPage;

