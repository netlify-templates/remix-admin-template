import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";

import { commitSession, getSession } from "~/session.server";

import Button from "~/components/Button";
import TextField from "~/components/TextField";
import { getSupabaseClient } from "~/utils/getSupabaseClient";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Login | Remix Dashboard",
    },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return Response.json(
      { error: "Email and password must be provided." },
      { status: 400 }
    );
  }

  const supabase = getSupabaseClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  const session = await getSession(request.headers.get("Cookie"));
  session.set("__session", data.session.access_token);

  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("__session");

  if (token) {
    return redirect("/dashboard");
  }

  return Response.json({});
}

export default function LogIn() {
  const actionData = useActionData<{ error?: string }>();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="w-full max-w-2xl px-8 py-10 space-y-8 bg-white shadow-md rounded-xl lg:space-y-10 lg:px-10 lg:py-12 ">
      <div className="space-y-3">
        <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl lg:text-4xl">
          Log In to Remix Dashboard
        </h1>
        <div className="flex gap-3 p-3 rounded-md bg-cyan-50">
          <div className="flex items-center justify-center w-5 h-5 font-serif italic text-white rounded-full bg-cyan-500">
            i
          </div>
          <div className="text-xs">
            <p>
              Email: <span className="font-medium">demo@example.com</span>
            </p>
            <p>
              Password: <span className="font-medium">demo123</span>
            </p>
          </div>
        </div>
      </div>
      <Form method="POST">
        {actionData?.error && (
          <p className="p-3 mb-4 text-sm rounded-md bg-rose-50 text-rose-700">
            {actionData.error}
          </p>
        )}
        <fieldset
          className="w-full space-y-4 lg:space-y-6 disabled:opacity-70"
          disabled={isSubmitting}
        >
          <TextField
            id="email"
            name="email"
            label="Email address"
            required
            type="email"
            placeholder="Email address"
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            required
            type="password"
            placeholder="password"
          />
          <Link
            to="/reset-password"
            className="block text-sm tracking-wide underline text-cyan-600"
            >
            Forgot password?
          </Link>
          <Button
            type="submit"
            size="large"
            className="w-full"
            loading={isSubmitting}
          >
            Login
          </Button>
          <p className="text-sm text-center">
            New on Remix Dashboard?{" "}
            <Link className="underline text-cyan-600" to="/signup">
              Create an account
            </Link>
          </p>
        </fieldset>
      </Form>
    </div>
  );
}
