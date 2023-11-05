# Portfolio website

<img width="1510" alt="Screenshot 2023-11-05 at 9 28 36 PM" src="https://github.com/bgb10/portfolio/assets/25452313/e311798b-8476-488a-b6bc-917f6b7cce2a">

Available in [here](https://portfolio-five-omega-99.vercel.app/about)

# Features

- A responsive website that can be viewed on multiple devices
- Visualize with charts for working periods, skill stats
- Fetch portfolio data from DB(Hygraph)

# Tech stack

- Frontend: Next.js, Chart.js, Graphql
- Backend: Hygraph (GraphQL Headless CMS)
- Language: Typescript
- Deployed on Vercel
- Tried to apply Gitflow, but I did it alone, so I didn't apply it rigorously.

# Details

## Why Next.js?

Next.js supports server-side rendering, which has an SEO advantage. I chose Next.js over React because of the nature of my portfolio is for self-advertisement, where SEO is important.

## Why Hygraph?

It is inefficient to build an RDB-based backend server to power a portfolio website. I don't need ACID, which is the biggest advantage of RDB, because only I will modify the information on the portfolio website. Also, I think I will change the portfolio structure frequently, and RDB is vulnerable to schema changes, and the corresponding API endpoints need to be rewritten. Therefore, I used Hygraph, a NoSQL-based platform that can write data in an unstructured format. This allows us to easily change the schema and access the data via graphql.

## Why Typescript?

Typescript is now a standard, not an option in JS project. With Typescript, things like autocomplete are supported and errors can be prevented at compile time. This makes life a lot easier. However, there are some things that don't work well with Hygraph. We use graphql to fetch data from Hygraph, which means we have to change the type definitions every time the query changes.
