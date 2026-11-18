import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { signIn } from "next-auth/react";
import { LoginForm } from "./login-form";
import { SignupForm } from "./signup-form";
import { ResetPasswordForm } from "./recovery-forms";
import { VerifyEmailForm } from "./verify-email-form";

const replace = jest.fn();
const refresh = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({ replace, refresh }),
}));
jest.mock("next-auth/react", () => ({ signIn: jest.fn() }));

beforeEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
});

function fillLogin() {
  fireEvent.change(screen.getByLabelText("Email Address"), {
    target: { value: "hello@example.com" },
  });
  fireEvent.change(screen.getByLabelText("Password", { exact: true }), {
    target: { value: "test-password" },
  });
}

it("keeps rejected login credentials on screen and announces the failure", async () => {
  jest.mocked(signIn).mockResolvedValue({
    error: "CredentialsSignin",
    status: 401,
    ok: false,
    url: null,
  });
  render(<LoginForm />);
  fillLogin();
  fireEvent.click(screen.getByRole("button", { name: "Log In" }));
  expect(await screen.findByRole("alert")).toHaveTextContent(
    "Unable to log in",
  );
  expect(screen.getByLabelText("Email Address")).toHaveValue(
    "hello@example.com",
  );
  expect(replace).not.toHaveBeenCalled();
});

it("uses the existing credentials provider and rejects an external redirect", async () => {
  jest.mocked(signIn).mockResolvedValue({
    error: null,
    status: 200,
    ok: true,
    url: "https://evil.example",
  });
  render(<LoginForm callbackUrl="https://evil.example" />);
  fillLogin();
  fireEvent.click(screen.getByRole("button", { name: "Log In" }));
  await waitFor(() => expect(replace).toHaveBeenCalledWith("/"));
  expect(signIn).toHaveBeenCalledWith(
    "credentials",
    expect.objectContaining({
      email: "hello@example.com",
      password: "test-password",
      redirect: false,
    }),
  );
});

it("switches account type without losing shared fields and validates company name", async () => {
  render(<SignupForm />);
  fireEvent.change(screen.getByLabelText("First Name"), {
    target: { value: "Sarah" },
  });
  fireEvent.click(screen.getByRole("button", { name: "I am a Business" }));
  expect(screen.getByLabelText("First Name")).toHaveValue("Sarah");
  fireEvent.click(screen.getByRole("button", { name: "Sign Up" }));
  await waitFor(() =>
    expect(screen.getByLabelText("Company Name")).toHaveAttribute(
      "aria-invalid",
      "true",
    ),
  );
  expect(
    screen.getByRole("button", { name: "I am a Business" }),
  ).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByRole("alert")).toHaveFocus();
});

it("rejects a callback whose path becomes a protocol-relative redirect", async () => {
  jest
    .mocked(signIn)
    .mockResolvedValue({ error: null, status: 200, ok: true, url: null });
  render(<LoginForm callbackUrl={`${window.location.origin}//evil.example`} />);
  fillLogin();
  fireEvent.click(screen.getByRole("button", { name: "Log In" }));
  await waitFor(() => expect(replace).toHaveBeenCalledWith("/"));
});

it("preserves a local callback and remembers only the opted-in email", async () => {
  jest
    .mocked(signIn)
    .mockResolvedValue({ error: null, status: 200, ok: true, url: null });
  render(<LoginForm callbackUrl="/marketplace?sort=name" />);
  fillLogin();
  fireEvent.click(screen.getByRole("checkbox", { name: /Remember me/ }));
  fireEvent.click(screen.getByRole("button", { name: "Log In" }));
  await waitFor(() =>
    expect(replace).toHaveBeenCalledWith("/marketplace?sort=name"),
  );
  expect(Object.values(localStorage)).toEqual(["hello@example.com"]);
});

it("accepts a pasted complete OTP and does not pretend verification succeeded", async () => {
  render(<VerifyEmailForm />);
  fireEvent.change(screen.getByLabelText("Verification code"), {
    target: { value: "123456" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Verify" }));
  expect(await screen.findByRole("alert")).toHaveTextContent(
    "Email verification is not available yet",
  );
  expect(replace).not.toHaveBeenCalled();
});

it("rejects mismatched passwords without reporting a successful change", async () => {
  render(<ResetPasswordForm />);
  fireEvent.change(screen.getByLabelText("Create New Password"), {
    target: { value: "test-password" },
  });
  fireEvent.change(screen.getByLabelText("Confirm New Password"), {
    target: { value: "different-password" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Change Password" }));
  expect(
    await screen.findByText("Passwords do not match."),
  ).toBeInTheDocument();
  expect(replace).not.toHaveBeenCalled();
});
