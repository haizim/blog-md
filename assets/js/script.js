let blogs_raw = []
let last_top = 0

const converter = new showdown.Converter({
    tables: true,
    simpleLineBreaks: true,
    openLinksInNewWindow: true,
    omitExtraWLInCodeBlocks: true,
    sanitize: true
});

document.getElementById('article-container').onscroll = (e) => {
    let target = e.target
    let scroll_position = target.scrollTop
    
    if ((scroll_position < last_top) || (scroll_position > (target.scrollTopMax - 50))) {
        document.getElementById('back-button').style.setProperty('margin-top', '-4em')
    } else {
        document.getElementById('back-button').style.setProperty('margin-top', '1em')
    }

    last_top = scroll_position
}

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
            fetch('/blog.json?x=123')
            .then(response => response.json())
            .then(data => {
                this.blogs = data
                blogs_raw = data
                
                this.blogs_show = data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                this.categories = [...new Set(this.blogs.map(blog => blog.category))].sort()

                if (window.location.search) {
                    const urlParams = new URLSearchParams(window.location.search);
                    const id = urlParams.get('id')
                    this.open_article(id)
                }
            })
            .catch(error => {
                console.error('Error:', error)
                this.blogs = [
                    {
                        "id": "",
                        "timestamp": (new Date).toISOString(),
                        "title": "Error mengambil data"
                    }
                ]
            });

            // document.addEventListener("deviceready", function() {
            //     document.addEventListener("backbutton", function(e) { e.preventDefault(); alert('back'); this.close_article();}, false);
            // }, false);

            // document.addEventListener("backbutton", function(e) { e.preventDefault(); alert('back'); this.close_article();}, false);

            // Fallback for direct back button event (without deviceready)
            document.addEventListener("backbutton", function(e) { 
                e.preventDefault(); 
                if (self.show_blog) {
                    self.close_article();
                }
            }, false);

            // Browser back/forward button handling
            window.addEventListener('popstate', function(e) {
                if (self.show_blog && !window.location.search) {
                    self.close_article();
                }
            });

            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    this.close_article()
                }
                
                if (event.key === 'ArrowLeft') {
                    this.close_article()
                }
            });

        },

        open_article(id) {
            const article_new = this.blogs.find(b => b.id === id)

            this.article.title = article_new.title
            this.article.timestamp = article_new.timestamp
            this.article.category = article_new.category

            fetch(`/article/${id}.md`)
            .then(response => response.text())
            .then(data => {
                const content_new = converter.makeHtml(data)
                this.article.content = content_new
                document.title = this.article.title

                // set url
                history.pushState(null, null, `?id=${id}`);
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
                document.getElementById('article-container').focus()
                document.getElementById('back-button').style.setProperty('margin-top', '-4em')
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
