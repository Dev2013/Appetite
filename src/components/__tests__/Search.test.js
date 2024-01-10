import {render,screen,fireEvent} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import data from "./Body_mock.json";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(data);
        }
    })
    }
);

it("Should render the body component on searching 'Pizza'",async()=>{
    await act( async ()=>{
        render(
        <BrowserRouter>
         <Body/>
        </BrowserRouter>
        );
    });
    const before_cards = screen.getAllByTestId("res");
    expect(before_cards.length).toBe(9);
    const btn = screen.getByRole("button",{name :"Search"});
    expect(btn).toBeInTheDocument();
    const input = screen.getByTestId("input-search");
    fireEvent.change(input,{target : { value : "Domino"}});
    fireEvent.click(btn);
    const carditem  = screen.getAllByTestId("res");
    expect(carditem.length).toBe(1);
});

it("Should render the body component on clicking the top rated button'",async()=>{
    await act( async ()=>{
        render(
        <BrowserRouter>
         <Body/>
        </BrowserRouter>
        );
    });
    // const before_cards = screen.getAllByTestId("res");
    // expect(before_cards.length).toBe(9);
    const top_btn = screen.getByRole("button",{name :"Top Rated restaurant"});
    expect(top_btn).toBeInTheDocument();
    fireEvent.click(top_btn);
    const carditem  = screen.getAllByTestId("res");
    console.log(carditem);
    expect(carditem.length).toBe(2);
});

