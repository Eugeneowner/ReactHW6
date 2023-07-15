/*
describe("Modal component", () =>{
    it("Check render component", () =>{
        expect(...).toBe(value)
    })
})

*/
import Modal from "../componets/modal/modal";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("Modal component", () => {
  it("Check render component without props", () => {
    render(<Modal />);
    expect(screen.getByText("Confirm")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });
  it("Check snapshot without props", () => {
    const modal = render(<Modal />);
    expect(modal).toMatchSnapshot();
  })
  it("Check render component with props", () => {
    const modal = {
      title: "title",
      text: "text",
    };
    render(<Modal title={modal.title} text={modal.text} />);
    expect(screen.getByText(modal.title)).toBeInTheDocument();
    expect(screen.getByText(modal.text)).toBeInTheDocument();
  });
  it("Check snapshot with props", () => {
    const modal = render(<Modal />)
    expect(modal).toMatchSnapshot();
  })
  it ("Check render component close modal", () => {
    render(<Modal closeButton={true} />)
    const closeBtn = screen.getByTestId("CloseBtn");
    expect(closeBtn).toBeInTheDocument(); 
  });
  it("Check snapshot component without close", () => {
    const modal = render(<Modal closeButton={false} />)
    expect(modal).toMatchSnapshot();
  })
  it("Check render component without close btn upper", () => {
    render(<Modal closeButton={false} />)
    expect(screen.queryByTestId("CloseBtn")).toBeNull()
  });
  it("Check snapshot component without btn upper", () => {
    const modal = render(<Modal closeButton={false} />)
    expect(modal).toMatchSnapshot();
  })
  it("Check click on buttons confirm click", () => {
    const onClick = jest.fn();
    render(<Modal handleConfirm={onClick} />);
    const button = screen.getByText("Confirm");
    userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("Check click on buttons cancel click", () => {
    const onClick = jest.fn();
    render(<Modal handleClickClose={onClick} />);
    const button = screen.getByText("Cancel");
    userEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });
});
