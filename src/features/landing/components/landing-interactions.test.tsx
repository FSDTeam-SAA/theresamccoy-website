import { fireEvent, render, screen } from "@testing-library/react";
import { LandingHeader } from "./landing-header";
import { LandingFaq } from "./landing-faq";
import { Testimonials } from "./testimonials";

describe("landing page interactions", () => {
  it("returns keyboard focus to the menu toggle when Escape closes navigation", () => {
    render(<LandingHeader />);
    const toggle = screen.getByRole("button", { name: "Open navigation" });
    fireEvent.click(toggle);
    fireEvent.keyDown(
      screen.getByRole("navigation", { name: "Mobile navigation" }),
      { key: "Escape" },
    );
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
  });
  it("closes the mobile navigation after choosing a section", () => {
    render(<LandingHeader />);
    const toggle = screen.getByRole("button", { name: "Open navigation" });
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(screen.getAllByRole("link", { name: "Training" }).at(-1)!);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("allows the initially expanded FAQ to close and another to open", () => {
    render(<LandingFaq />);
    const first = screen.getByRole("button", {
      name: "What construction services do you provide?",
    });
    expect(first).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(first);
    expect(first).toHaveAttribute("aria-expanded", "false");
    const next = screen.getByRole("button", {
      name: "Can I request a free project estimate?",
    });
    fireEvent.click(next);
    expect(next).toHaveAttribute("aria-expanded", "true");
  });

  it("cycles the portrait selection in both directions", () => {
    render(<Testimonials />);
    expect(
      screen.getByRole("button", { name: "View portrait 3" }),
    ).toHaveAttribute("aria-pressed", "true");
    fireEvent.click(screen.getByRole("button", { name: "Next portrait" }));
    expect(
      screen.getByRole("button", { name: "View portrait 4" }),
    ).toHaveAttribute("aria-pressed", "true");
    fireEvent.click(screen.getByRole("button", { name: "Previous portrait" }));
    expect(
      screen.getByRole("button", { name: "View portrait 3" }),
    ).toHaveAttribute("aria-pressed", "true");
  });
});
