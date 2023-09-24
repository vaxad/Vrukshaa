"use client"
import React, { useEffect, useState } from 'react'
import AuthChecker from '../../../../components/AuthChecker'
import LikeSection from '../../../../components/LikeSection'
import CommentSection from '@/app/components/CommentSection'
import Tag from '../../../components/Tag'
import { getArticle } from '@/lib/article'
import { UserAuth } from '@/lib/authContext'
import Loading from '@/app/components/Loading'


export default function ArticleViewPage({ articleId }) {
    const { user } = UserAuth()
    const [loading, setloading] = useState(true)
    const [post, setpost] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const data = await getArticle({ articleId })
            setpost(data)
        }
        if (post) {
            setloading(false)
        }
        getData()
    }, [user, post])

    return post ? (
        <div className=' px-6 md:px-12 lg:px-24 py-12 '>
            <AuthChecker />
            <div className={` flex relative flex-col bg-yellow-100 rounded-lg text-zinc-900 w-full p-8 gap-5`}>
                <div className=' flex flex-row justify-between items-center '>
                    <div className=' flex flex-col gap-1 justify-start overflow-x-hidden'>
                        <h1 className=' font-semibold text-xl break-words flex-wrap '>{post?.title}</h1>
                    </div>
                    <h2 className=' font-medium text-md '>{(new Date(post?.createdAt)).toDateString()}</h2>
                </div>
                <div className=' flex flex-row w-full gap-12'>

                    <div className=' flex flex-col w-full gap-2'>

                        {/* description  */}
                        <p className=' w-full text-lg font-normal pb-5 break-words flex-wrap'>{post?.description}</p>
                        <div className=' flex flex-row justify-between items-center '>
                            <LikeSection likes={post.likes} itemId={articleId} type={"article"} size={50} />
                            <div className=' flex flex-row gap-2 items-center justify-start'>
                                {post?.tags?.map((tag) => (
                                    <Tag key={tag} tag={tag} />
                                ))}
                            </div>
                        </div>
                        <CommentSection articleId={articleId} />
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Loading loading={true} />
    )
}
