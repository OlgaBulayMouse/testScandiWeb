import React from "react";
import ArowGreen from "./ArowGreen";
import Menu from "./Menu";
import CartOnRight from "./CartOnRight";

class TopPage extends React.Component {
    render() {
        return (
            <header>
                <Menu 
                onClickItem={(name) => {console.log(name)}}
                items={[
                    <div className="itemMenu">WOMEN</div>,
                    <div className="itemMenu">MEN</div>,
                    <div className="itemMenu">KIDS</div>,
                ]}/>
                <ArowGreen />
                <CartOnRight />
            </header>
        )
    }
};

export default TopPage;

