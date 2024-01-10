import "@testing-library/jest-dom";
import { render , screen} from '@testing-library/react';
import Contact from "../Contact";
test("Contact page should get rendered",()=>{
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

});