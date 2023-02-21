import { previewData } from "next/headers"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
import { PreviewSuspense } from "next-sanity/preview"


const query = groq`
*[_type=='post'] {
    ..., author ->,
    categories[]->
} | order(_createdAt desc)
`

export default async function Homepage (){
    if (previewData()){
        return( <PreviewSuspense fallback={
      <div role="status">
        <p className="text-center text-lg animate-pulse text-[#F7AB0A]">Loading preview data ...</p>
      </div>      
        }>
            <PreviewBlogList />
            
    </PreviewSuspense>)
    }
    //const posts = await client.fetch(query)

    return (
        <div>
           <h1>Not in preview mode</h1> 
        </div>
    )
}