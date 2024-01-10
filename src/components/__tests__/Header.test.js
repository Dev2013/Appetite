// we need to provide all utilities to component it uses for testing in isolation
import {render,screen,fireEvent} from "@testing-library/react";
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";
describe("Header Testing",()=>{
    it("Should render with a login button",()=>{
        render(
            //header uses Link which is part of react-router-dom so we need to provide router
             //header uses redux store
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
            </BrowserRouter>
        );
        const button = screen.getByRole("button",{name:"login"});
        expect(button).toBeInTheDocument();
    });
    it("Should render with a cart item",()=>{
        render(
            //header uses Link which is part of react-router-dom so we need to provide router
             //header uses redux store
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
            </BrowserRouter>

        );
        const cart = screen.getByText(/Cart-0/);// regex
        expect(cart).toBeInTheDocument();


    });
    it("Should change to logout buuton when clicked on login",()=>{
        render(
            //header uses Link which is part of react-router-dom so we need to provide router
             //header uses redux store
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
            </BrowserRouter>
        );
        const button = screen.getByRole("button",{name:"login"});
        fireEvent.click(button);
        const new_button = screen.getByRole("button",{name:"logout"});
        expect(new_button ).toBeInTheDocument();


    });
});
