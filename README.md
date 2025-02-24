# Welcome to Remix Admin Template!

**View demo:** [https://remix-admin-template.netlify.app/](https://remix-admin-template.netlify.app/)

The Remix Supabase starter demonstrates how to integrate **Supabase** into an Remix project deployed on Netlify.

## Deploying to Netlify

If you click "Deploy to Netlify" button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/remix-admin-template&fullConfiguration=true)

### Set up the database

To use this template, you’ll need to set up and seed a new Supabase database.

1. Create a new Supabase project.
2. Run the SQL commands found in the `supabase/migrations` directory in the Supabase UI.
3. To seed the database with data, you can import the contents of the `supabase/seed.csv` file in the Supabase UI.

ℹ️ _Note: This template was created to be used with the Supabase extension for Netlify. If you don’t wish to use the Netlify Supabase extension, you will need to set the `SUPABASE_DATABASE_URL` and `SUPABASE_ANON_KEY` environment variables in the `.env` file._

## Development

Run the dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

## Support

If you get stuck along the way, get help in our [support forums](https://answers.netlify.com/).