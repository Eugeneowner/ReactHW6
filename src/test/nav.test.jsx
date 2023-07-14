import Nav from "../componets/header/nav/nav";
import { render, screen } from "@testing-library/react";
describe("Nav component", () => {
  it("Check render", () => {
    render(<Nav />);
    expect(screen.getByText("MODEL")).toBeInTheDocument();
    expect(screen.getByText("SHOP")).toBeInTheDocument();
    expect(screen.getByText("OWNERSHIP")).toBeInTheDocument();
    expect(screen.getByText("CONTACT")).toBeInTheDocument();
  });
});
