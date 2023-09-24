import React from 'react'
import ArticleViewPage from './components/ArticleViewPage'

export async function generateMetadata({ searchParams }) {
  return {
    title: `${searchParams["title"]} - Vrukshaa`,
    description: `Read about ${searchParams["title"]} by our experts`
  }
}

export default function Page({ params: { articleId } }) {
  return (
    <ArticleViewPage articleId={articleId} />
  )
}
