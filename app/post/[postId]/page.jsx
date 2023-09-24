import React from 'react'
import PostViewPage from './components/PostViewPage'

export async function generateMetadata({ searchParams }) {
  return {
    title: `${searchParams["title"]} - Vrukshaa`,
    description: `Find the treatment of ${searchParams["title"]}`
  }
}


export default function Page({ params: { postId } }) {
  return (
    <PostViewPage postId={postId} />
  )
}
