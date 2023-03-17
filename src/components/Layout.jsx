import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const Main = styled.div`
    color: #0ac470;
    background-color: white;
`;

const Layout = () => {
    return (
        <>
            <Header />
            <Main>
                <main>
                    <Outlet />
                </main>
            </Main>
            <Footer />
        </>
    )
}

export default Layout;