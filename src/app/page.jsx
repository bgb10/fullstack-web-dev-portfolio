import { AllPosts } from '../queries/posts'
import Link from 'next/link'
import Image from 'next/image'

async function getPosts() {
  const allPosts = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: AllPosts
    })
  }).then((res) => res.json())

  return allPosts.data.posts
}

export const metadata = {
  title: 'Hygraph Next.js Blog Starter'
}

export default async function Home({}) {
  const allPosts = await getPosts()

  console.log(allPosts[0])
  return (
    <div className="divide-y divide-gray-200">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Latest
        </h1>
        <p className="text-lg leading-7 text-gray-500">
          Our latest blog posts.
        </p>
      </div>

      <ul className="divide-y divide-gray-200">
        {allPosts.map((post) => {
          return (
            <li key={post.id} className="py-12">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-us', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link
                        href={`/posts/${post.slug}`}
                        className="text-gray-900"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    {post.excerpt && (
                      <div className="prose max-w-none text-gray-500">
                        {post.excerpt}
                      </div>
                    )}
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <Link
                      href={`/posts/${post.slug}`}
                      className="text-purple-500 hover:text-purple-600"
                      aria-label={`Read "${post.title}"`}
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
