import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import Restcard,{Withpromobanner} from "../Restcard";
import data from "./mock.json";

    it("Should render with props data",()=>{
        render(<Restcard resdata={data}/>);
        const result = screen.getByText( "LunchBox - Meals and Thalis");
        expect(result).toBeInTheDocument();
    });