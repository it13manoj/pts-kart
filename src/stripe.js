import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_yUYDwn6dMvYPlQZIza7lEHXI00sSojAosg" // your publishable key
);
