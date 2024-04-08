'use client'
import Image from "next/image";
import PaginationCard from "@/components/PaginationCard";
import BlogForm from "@/components/BlogForm";

const blogs = [
    {
        image: '/image/feature.png',
        title: 'Tiêu đề',
        content: 'nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung'
    },
    {
        image: '/image/feature.png',
        title: 'Tiêu đề',
        content: 'nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung'
    },
    {
        image: '/image/feature.png',
        title: 'Tiêu đề',
        content: 'nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung'
    },
    {
        image: '/image/feature.png',
        title: 'Tiêu đề',
        content: 'nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung'
    },
    {
        image: '/image/feature.png',
        title: 'Tiêu đề',
        content: 'nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung'
    },
    {
        image: '/image/feature.png',
        title: 'Tiêu đề',
        content: 'nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung nội dung'
    },
]
const BlogDetailPage = () => {
    return (
        <div className='container mx-auto py-12 xl:pt-16'>
            <div className='flex flex-wrap justify-center xl:justify-between'>
                <div>
                    <div
                        className='grid gap-y-10 xl:gap-y-10 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-[30px]'>
                        {blogs.map((blog, index) => {
                            return (
                                <div
                                    key={index}
                                    className='border-2 border-outline w-[270px] rounded-xl overflow-hidden hover:cursor-pointer group hover:hover:bg-violet-100 transition-all duration-700 mx-auto xl:mx-0'
                                >
                                    <Image src={blog.image} width={270} height={270} alt=''/>
                                    <div className='p-6'>
                                        <h4 className='font-semibold'>
                                            {blog.title}
                                        </h4>
                                        <p>
                                            {blog.content.slice(0, 50)}...
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='mt-2'>
                        <PaginationCard/>
                    </div>
                </div>
                <div className='w-full max-w-[400px] mt-10 xl:mt-0'>
                    <BlogForm/>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailPage;
