# Portfolio website

> Created for applying Intel Software Engineer Intern 

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
