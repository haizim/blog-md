let blogs_raw = []
const converter = new showdown.Converter({
    tables: true,
    simpleLineBreaks: true,
    openLinksInNewWindow: true,
    omitExtraWLInCodeBlocks: true
});

function blog_view() {
    return {
        blogs: [],
        blogs_show: [],
        article: {
            "timestamp": (new Date).toISOString(),
            "title": "",
            "content": "",
            "category": ""
        },
        show_blog: false,
        categories: [],
        category_selected: "",

        init() {
            fetch('/blog.json')
            .then(response => response.json())
            .then(data => {
                this.blogs = data
                blogs_raw = data
                
                this.blogs_show = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                this.categories = [...new Set(this.blogs.map(blog => blog.category))].sort()

                if (window.location.search) {
                    const urlParams = new URLSearchParams(window.location.search);
                    const slug = urlParams.get('slug')
                    this.open_article(slug)
                }
            })
            .catch(error => {
                console.error('Error:', error)
                this.blogs = [
                    {
                        "slug": "",
                        "timestamp": (new Date).toISOString(),
                        "title": "Error mengambil data"
                    }
                ]
            });

        },

        open_article(slug) {
            const article_new = this.blogs.find(b => b.slug === slug)

            this.article.title = article_new.title
            this.article.timestamp = article_new.timestamp
            this.article.category = article_new.category

            fetch(`/article/${slug}.md`)
            .then(response => response.text())
            .then(data => {
                const content_new = converter.makeHtml(data)
                this.article.content = content_new
                document.title = this.article.title

                // set url
                history.pushState(null, null, `?slug=${slug}`);
            })
            .catch(error => {
                console.error('Error:', error)
                this.article = {
                    "timestamp": (new Date).toISOString(),
                    "title": "Gagal mengambil artikel",
                    "content": ""
                }
            })
            .finally(() => {
                this.show_blog = true
                document.getElementById('article-top').scrollIntoView()
                document.getElementById('article-title').focus()
                document.getElementById('article-modal').focus()
            });
        },

        close_article() {
            this.show_blog = false
            document.title = "Haizim's Blog"
            history.pushState(null, null, '/');
        },

        filter_blog(category) {
            this.category_selected = category
            
            if (category === "") {
                this.blogs_show = this.blogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            } else {
                this.blogs_show = this.blogs.filter(b => b.category === category).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            }
        }
    }
}
