export default function BlogPostPage({ params }: { params: { id: string } }) {
    return (
        <div className="p-20 text-center">
            <h1 className="text-3xl font-bold">Blog Post {params.id}</h1>
            <p className="mt-4">Content coming soon...</p>
        </div>
    );
}
