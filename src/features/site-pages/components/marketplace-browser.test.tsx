import { fireEvent, render, screen } from "@testing-library/react";
import { MarketplaceBrowser } from "./marketplace-browser";

describe("marketplace browsing", () => {
  it("opens the correct sample profile from every matching card", () => {
    render(<MarketplaceBrowser />);
    const links = screen.getAllByRole("link", { name: "View Profile" });
    expect(links).toHaveLength(3);
    links.forEach((link) =>
      expect(link).toHaveAttribute("href", "/marketplace/sarah-chen"),
    );
  });

  it("filters sample profiles and resets both search and filters", () => {
    render(<MarketplaceBrowser />);
    fireEvent.change(
      screen.getByLabelText("Search by name, skill, email or specialization"),
      { target: { value: "nonexistent" } },
    );
    expect(
      screen.getByText("No professionals match your filters."),
    ).toBeInTheDocument();
    fireEvent.click(
      screen.getAllByRole("button", { name: "Reset Filters" })[0],
    );
    expect(screen.getAllByRole("link", { name: "View Profile" })).toHaveLength(
      3,
    );
    fireEvent.click(screen.getByRole("radio", { name: "Certified" }));
    expect(
      screen.getByText("No professionals match your filters."),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("radio", { name: "Elite" }));
    expect(screen.getAllByRole("link", { name: "View Profile" })).toHaveLength(
      3,
    );
  });
});
