import { render, screen,fireEvent } from '@testing-library/react';
import WorkflowSideBar from "../WorkflowSideBar"

// describe("WorkflowSideBar", ()=>{
// 	it('should pass correct input to data test input ' , () => {
// 		render(
// 			<WorkflowSideBar />
// 			//mock workflow search list
// 			//render workflow side bar
// 			// find the input element using rtl -- data test id
// 			//type in input box using rtl
// 			//check if the mockedSearchList  -->input is matched
// 		)
// 	})
// })


test('renders searchbar text', () => {
    render(<WorkflowSideBar />);
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByTestId("icon");
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: "L" }, });
    // fireEvent.click(buttonElement)
    const divElement = screen.getAllByRole('listItem');
    expect(divElement.length).toBe(2)
  });


  test('check correct search result', () => {
    render(<WorkflowSideBar />);
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByTestId("icon");
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: "Live" }, });
    // fireEvent.click(buttonElement)
    const divElement = screen.queryByText(/Content Ninja Team/i);
    expect(divElement).toBeNull()
  });


  test('on clicking cancel icon,  render all elements', () => {
    render(<WorkflowSideBar />);
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByTestId("icon");
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: "Ank" }, });
    fireEvent.click(buttonElement)
    const divElement = screen.getAllByRole('listItem');
    expect(divElement.length).toBe(4)
  });


  test('on if element searched is not present, renders Zero List Items', () => {
    render(<WorkflowSideBar />);
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByTestId("icon");
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: "Ank" }, });
    // fireEvent.click(buttonElement)
    const divElement = screen.queryAllByRole('listItem');
    expect(divElement.length).toBe(0)
  });
