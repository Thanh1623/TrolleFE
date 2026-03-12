import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex w-screen h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-muted-foreground">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link
        to="/login"
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
      >
        Back to Login
      </Link>
    </div>
  );
}
