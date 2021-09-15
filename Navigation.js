import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            {/* a href를 사용하면 새로고침 돼 */}
            {/* why? HTML이기 때문에 → Link로 수정 */}
        </div>
    );
};

export default Navigation;