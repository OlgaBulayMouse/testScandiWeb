import React from "react";
import Title from "./Title";
import TopPage from "./TopPage";
import Product from "./Product";


class Category extends React.Component {
    render() {
        return (
            <div className="category">
                <div className="wrapper">
                    <main>
                        <TopPage />
                        <Title />
                        <div className="container">
                            <Product />
                           
                        </div>
                    </main>
                </div>
            </div>
        )
    }
};

export default Category;
