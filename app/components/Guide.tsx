import CodeBlock from "./CodeBlock";

const SQL_CODE_MEMBERS = `CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  avatar_url TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  location TEXT NOT NULL
);` as const;

const CSV_CODE_MEMBERS = `id,created_at,avatar_url,name,email,location
14c8afd0-50cc-4aca-9547-c997ed306065,2025-02-21 12:29:21.704945+00,https://i.pravatar.cc/120?img=7,Ethan Reynolds,ethanreynolds@demoemail.com,United States
33a9549c-d436-4f53-ab61-86612c812fda,2025-02-21 12:29:59.907726+00,https://i.pravatar.cc/120?img=52,Eero Virtanen,virtanen@demoemail.com,Finland
4badfc0a-3ec0-4282-833a-6f90604f3e54,2025-02-21 12:28:50.565559+00,https://i.pravatar.cc/120?img=47,Viktoria Melnyk,viktoria@demoemail.com,Ukraine
6af079d1-e63e-499b-84b5-2c94720bdd4a,2025-02-21 12:31:38.60595+00,https://i.pravatar.cc/120?img=14,Elliot Mercer,elliotmercer@demoemail.com,Norway
6e09dac3-e052-4fa6-a57d-eabac73e8b38,2025-02-21 12:30:32.745623+00,https://i.pravatar.cc/120?img=68,Piotr Kaminski,kaminski@demoemail.com,Poland
a2ac4de2-383e-41c8-a1a2-17089c04ace7,2025-02-21 12:27:31.655131+00,https://i.pravatar.cc/120?img=16,Mira Thornton,mira@demoemail.com,Canada
a905829d-2302-4dfd-a758-ff40f25bf97a,2025-02-21 12:28:19.614953+00,https://i.pravatar.cc/120?img=31,Suhyun Park,suhyunpark@demoemail.com,South Korea` as const;

export default function Guide() {
  return (
    <article className="w-full max-w-4xl px-4 py-12 mx-auto space-y-8">
      <div className="relative px-8 py-10 space-y-4 border rounded-sm shadow-sm border-cyan-500 bg-cyan-100/20">
        <h1 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
          Welcome to Remix Admin Template
        </h1>
        <div className="prose prose-slate max-w-none">
          <p>
            Before your website is ready, you must complete the steps from the
            guide below to create, populate, and connect your{" "}
            <strong>Supabase</strong> database.
          </p>
        </div>
        <span className="absolute flex w-4 h-4 -top-2 -left-2">
          <span className="absolute w-full h-full rounded-full opacity-75 bg-cyan-300 animate-ping"></span>
          <span className="w-full h-full rounded-full bg-cyan-300"></span>
        </span>
      </div>
      <div className="px-8 py-10 prose bg-white rounded-md shadow-sm max-w-none prose-slate">
        <h2>Set up Supabase database</h2>
        <ol>
          <li>
            Create Supabase account at{" "}
            <a href="https://supabase.com">Supabase.com</a>.
          </li>
          <li>
            After signing up to your Supabase account, click New project from
            your dashboard. Select your organization, give the project a name,
            generate a new password for the database, and select the region  (e.g. &quot;East US (North Virginia)&quot;).
          </li>
        </ol>
        <h2>Create the members table</h2>
        <p>
          Once the database is provisioned, we can create the{" "}
          <strong>members</strong> table. From your
          project dashboard, open the SQL editor.
        </p>
        <img
          src="/guides/supabase-netlify-sql-editor.png"
          alt="Create the members and user tables"
        />
        <p>
          Run the following commands in the SQL editor to create the members
          table.
        </p>
        <CodeBlock code={SQL_CODE_MEMBERS} language="sql" />

        <h2>Add data</h2>
        <p>
          Next, let&apos;s add some starter data to the <strong>members</strong>{" "}
          table. From the Table Editor in Supabase (1), choose the{" "}
          <strong>members</strong> table from the list (2) and then select{" "}
          <strong>Insert &gt; Import</strong> data from CSV (3).
        </p>
        <img
          src="/guides/supabase-netlify-import-csv.png"
          alt="Create the frameworks table"
        />
        <p>Paste the following data:</p>
        <CodeBlock code={CSV_CODE_MEMBERS} language="csv" />
        <p>
          This will give you a preview of the data that will be inserted into
          the database. Click <strong>Import data</strong> to add the data to
          the database.
        </p>
        <h2>Configure the Supabase Netlify extension</h2>
        <p>
          The{" "}
          <a href="https://app.netlify.com/extensions/supabase">
            Supabase Netlify extension
          </a>{" "}
          should already be installed. Visit your site&apos;s configuration page
          and scroll to the Supabase section. Click <strong>Connect</strong> to
          connect your Netlify site to your Supabase account using OAuth.
        </p>
        <img
          src="/guides/supabase-netlify-connect-oauth.png"
          alt="Configure the Supabase extension"
        />
        <p>
          Once you&apos;ve completed this process, return to the Supabase
          section of your site configuration, and choose the project you just
          created in Supabase. Make sure to choose <strong>Other</strong> in the &quot;Where will you use Supabase?&quot; dropdown field.
        </p>
        <img
          src="/guides/supabase-netlify-extension-configuration.png"
          alt="Supabase Netlify extension configuration"
        />

        <h2>Deploy the site again</h2>
        <p>
          Now that the extension is configured, we can deploy the site again.
          Got to <strong>Deploys</strong> (1) and click the{" "}
          <strong>Deploy site</strong> (2) button to deploy the site.
        </p>
        <img
          src="/guides/deploy-button.png"
          alt="Supabase Netlify extension configuration"
        />
        <p>
          Once the build is complete, navigate to your production URL, and you should see the login form.
        </p>
        <img src="/guides/remix-login.png" alt="Template login form" />
        <p>Next, add an authenticated user to log in to the template. In your Supabase project, navigate to <strong>Authentication</strong> (1), choose <strong>Add user</strong> (2), and provide an email and password (Email: demo@example.com, Password: demo123).</p>
        <img src="/guides/remix-supabase-add-user.png" alt="Add user to Supabase" />
        <p>Once you&apos;ve completed this process, return to the login form and log in to the template. You should see the <strong>members</strong> that we just added to the database.</p>
        <img src="/guides/remix-dashboard.png" alt="Template with data" />
      </div>
    </article>
  );
}
