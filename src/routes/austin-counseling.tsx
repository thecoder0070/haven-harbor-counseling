import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/austin-counseling")({
  beforeLoad: () => {
    throw redirect({ to: "/services", statusCode: 301 });
  },
  component: () => null,
});
