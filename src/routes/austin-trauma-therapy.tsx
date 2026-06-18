import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/austin-trauma-therapy")({
  beforeLoad: () => {
    throw redirect({ to: "/trauma-therapy-austin", statusCode: 301 });
  },
  component: () => null,
});
