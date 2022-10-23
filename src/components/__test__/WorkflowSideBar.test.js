import { render, screen,fireEvent } from '@testing-library/react';
import WorkflowSideBar from "../WorkflowSideBar"


describe("workflow sidebar",()=>{
  beforeEach(()=>{
    render(
      <WorkflowSideBar />
    )
  })

  test('check correct search result  when searched for word - Live', () => {
    const inputElement = screen.getByRole('textbox');
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: "Live" }, });
    const divElement = screen.queryByText(/Live News/i);
    expect(divElement).toBeInTheDocument
  });


  test('check correct search result when searched for letter  - L ', () => {
    const inputElement = screen.getByRole('textbox');
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: "L" }, });
    const divElement = screen.getAllByRole('listItem');
    expect(divElement.length).toBe(6)
  });

  test(' if element searched is not present, renders Zero List Items', () => {
    const inputElement = screen.getByRole('textbox');
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: "Ank" }, });
    // fireEvent.click(buttonElement)
    const divElement = screen.queryAllByRole('listItem');
    expect(divElement.length).toBe(0)
  });

  

  test('on clicking cancel icon,  render all elements', () => {
    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByTestId("icon");
    fireEvent.click(inputElement)
    fireEvent.change(inputElement, { target: { value: "Ank" }, });
    fireEvent.click(buttonElement)
    const divElement = screen.getAllByRole('listItem');
    expect(divElement.length).toBe(10)
  });

  
});