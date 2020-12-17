
Reproducing a bug in Vercel.

If you have just Next.js in the `./ui` directory and deploy it, both static and dynamic routes work. Once you add the Python Flask app in `./api` *only* the dynamic routes no longer work.

This is despite Vercel showing the successful Next.js output listing both routes:

```
18:23:18.932  	$ next build ./ui
18:23:19.640  	info  - Creating an optimized production build...
18:23:22.801  	info  - Compiled successfully
18:23:22.801  	info  - Collecting page data...
18:23:22.855  	info  - Generating static pages (0/1)
18:23:23.089  	info  - Generating static pages (1/1)
18:23:23.089  	info  - Finalizing page optimization...
18:23:23.099  	Page                             Size     First Load JS
18:23:23.099  	┌ ○ /404                         2.77 kB        65.7 kB
18:23:23.099  	├ λ /api/[dynamic]               0 B              63 kB
18:23:23.099  	└ λ /api/static                  0 B              63 kB
18:23:23.099  	+ First Load JS shared by all    63 kB
18:23:23.099  	  ├ chunks/commons.b298e0.js     13 kB
18:23:23.099  	  ├ chunks/framework.b5c8be.js   41.9 kB
18:23:23.099  	  ├ chunks/main.0bf900.js        6.24 kB
18:23:23.099  	  ├ chunks/pages/_app.6b425e.js  1.01 kB
18:23:23.099  	  └ chunks/webpack.e06743.js     751 B
18:23:23.100  	λ  (Lambda)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
18:23:23.100  	○  (Static)  automatically rendered as static HTML (uses no initial props)
18:23:23.100  	●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
18:23:23.100  	   (ISR)     incremental static regeneration (uses revalidate in getStaticProps)
18:23:23.180  	Done in 4.27s.
```

On the Python side, Vercel doesn't mention anything it's doing with the Flask app other than:

```
18:23:26.304  	Installing build runtime...
18:23:27.940  	Build runtime installed: 1635.298ms
18:23:28.326  	Looking up build cache...
18:23:28.363  	Build cache not found
18:23:28.751  	Installing required dependencies...
18:23:36.355  	Uploading build outputs...
18:23:39.355  	Done with "api/app.py"
```

And it doesn't appear to be accessible at any routes.