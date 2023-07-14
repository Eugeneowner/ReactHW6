import ListItem from "../componets/list/listItem";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("ListItem component", () => {
  it("Render with price and name", () => {
    const name = "testName";
    const price = 100;
    render(
      <ListItem
        name={name}
        price={price}
        wishList={[]}
        basketList={[]}
        id={1}
      />
    );
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(/100/)).toBeInTheDocument();
  });
  it("Render with button buy", () => {
    render(<ListItem wishList={[]} basketList={[]} id={1} />);
    expect(screen.getByText("Buy now")).toBeInTheDocument();
  });
  it("Check click to button buy", () => {
    const id = 1;
    const onClick = jest.fn();

    render(
      <ListItem wishList={[]} basketList={[]} id={id} handleBuy={onClick} />
    );
    const buttonBuy = screen.getByText("Buy now");
    userEvent.click(buttonBuy);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(id);
  });
  it("Render with button buy cancel", () => {
    const id = 1;
    render(<ListItem wishList={[]} basketList={[1]} id={id} />);
    expect(screen.getByText("Buy cancel")).toBeInTheDocument();
  });
  it("Check click buy cancel", () => {
    const id = 1;
    const onClick = jest.fn();
    render(
      <ListItem
        wishList={[]}
        basketList={[1]}
        id={id}
        handleRemoveBasket={onClick}
      />
    );
    const buttonCancel = screen.getByText("Buy cancel");
    userEvent.click(buttonCancel);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(id);
  });
  it("Render with button wish list", () => {
    const id = 1;
    render(<ListItem
         wishList={[]} 
         basketList={[]} 
         id={id}/>);
    expect(screen.getByText("Add to wish")).toBeInTheDocument();
  });
  it ("Check click to buttton wish list", () => {
    const id = 1  
    const onClick = jest.fn();
    render(
      <ListItem
        wishList={[]}
        basketList={[]}
        id={id}
        handleWish={onClick}
      />)
      const buttonWish = screen.getByText("Add to wish");
      userEvent.click(buttonWish)
      expect(onClick).toHaveBeenCalledWith(id);
      expect(onClick).toHaveBeenCalledTimes(1);
  })
  it("Render with button remove wish", () => { 
    const id = 1
    render(
      <ListItem
      wishList={[id]}
      basketList={[]}
      id={id}
    />)
    expect(screen.getByTestId("btnRemoveWish")).toBeInTheDocument();
   })
   it ("Check click to button remove wish", () => {
    const id = 1  
    const onClick = jest.fn();
    render(
      <ListItem
        wishList={[id]}
        basketList={[]}
        id={id}
        handleRemoveWish={onClick}
      />)
      const buttonRemoveWish = screen.getByTestId("btnRemoveWish");
      userEvent.click(buttonRemoveWish)
      expect(onClick).toHaveBeenCalledWith(id);
      expect(onClick).toHaveBeenCalledTimes(1);
    })
});

