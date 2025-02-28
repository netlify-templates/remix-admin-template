# Set up Supabase with Netlify Remix template

In this guide we’re going to install and configure the Supabase Netlify extension, create Supabase project and fill the database with data.

## Set up Supabase database

1. Create Supabase account at [Supabase.com](https://supabase.com).
2. After signing up to your Supabase account, click New project from your dashboard. Select your organization, give the project a name, generate a new password for the database, and select the us-east-1 region.

## Create the members table

Once the database is provisioned, we can create the **members** table. From your project dashboard, open the SQL editor.

![Create the members table](/public/guides/supabase-netlify-sql-editor.png)

Run the following commands in the SQL editor to create the **members** table.

```sql
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  avatar_url TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  location TEXT NOT NULL
);
```

## Add data

Next, let’s add some starter data to the **members** table. From the Table Editor in Supabase (1), choose the **members** table from the list (2) and then select **Insert > Import** data from CSV (3).

![Create the members table](/public/guides/supabase-netlify-import-csv.png)

Paste the following data:

```sql
id,created_at,avatar_url,name,email,location
14c8afd0-50cc-4aca-9547-c997ed306065,2025-02-21 12:29:21.704945+00,https://i.pravatar.cc/120?img=7,Ethan Reynolds,ethanreynolds@demoemail.com,United States
33a9549c-d436-4f53-ab61-86612c812fda,2025-02-21 12:29:59.907726+00,https://i.pravatar.cc/120?img=52,Eero Virtanen,virtanen@demoemail.com,Finland
4badfc0a-3ec0-4282-833a-6f90604f3e54,2025-02-21 12:28:50.565559+00,https://i.pravatar.cc/120?img=47,Viktoria Melnyk,viktoria@demoemail.com,Ukraine
6af079d1-e63e-499b-84b5-2c94720bdd4a,2025-02-21 12:31:38.60595+00,https://i.pravatar.cc/120?img=14,Elliot Mercer,elliotmercer@demoemail.com,Norway
6e09dac3-e052-4fa6-a57d-eabac73e8b38,2025-02-21 12:30:32.745623+00,https://i.pravatar.cc/120?img=68,Piotr Kaminski,kaminski@demoemail.com,Poland
a2ac4de2-383e-41c8-a1a2-17089c04ace7,2025-02-21 12:27:31.655131+00,https://i.pravatar.cc/120?img=16,Mira Thornton,mira@demoemail.com,Canada
a905829d-2302-4dfd-a758-ff40f25bf97a,2025-02-21 12:28:19.614953+00,https://i.pravatar.cc/120?img=31,Suhyun Park,suhyunpark@demoemail.com,South Korea
```

This will give you a preview of the data that will be inserted into the database. Click **Import data** to add the data to the database.

## Install the Supabase Netlify extension

Now we can install the [Supabase extension](https://app.netlify.com/extensions/supabase). In the Netlify UI, go to your team’s dashboard, navigate to **Extensions** and click on the Supabase extension. Click the install button to install the extension.

### Configure the Supabase extension

After the extension is installed, navigate to the Supabase template site that you deployed, and go to **Site configuration**. In the **General** settings, you will see a new **Supabase** section. Click **Connect** to connect your Netlify site to your Supabase account using OAuth.

![Configure the Supabase extension](/public/guides/supabase-netlify-connect-oauth.png)

Once you’ve completed this process, return to the Supabase section of your site configuration, and choose the project you just created in Supabase. Make sure to choose **Other** in the "Where will you use Supabase?" dropdown field..

![Supabase Netlify extension configuration](/public/guides/supabase-netlify-extension-configuration.png)

## Deploy the site again

Now that the extension is configured, we can deploy the site again. Got to **Deploys** (1) and click the **Deploy site** (2) button to deploy the site. 

![Supabase Netlify extension configuration](/public/guides/deploy-button.png)

Once the build is complete, navigate to your production URL, and you should see the login form.

![Template login form](/public/guides/remix-login.png)

Next, add an authenticated user to log in to the template. In your Supabase project, navigate to **Authentication** (1), choose **Add user** (2), and provide an email and password (Email: demo@example.com, Password: demo123).

![Add user in the Supabase Authentication](/public/guides/remix-supabase-add-user.png)

Once you've completed this process, return to the login form and log in to the template. You should see the <strong>members</strong> that we just added to the database.

![Template with data](/public/guides/remix-dashboard.png)
