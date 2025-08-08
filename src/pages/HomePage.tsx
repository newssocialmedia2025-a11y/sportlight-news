import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Edit3, TrendingUp, Globe, Newspaper, Rocket, Shield, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-tennis.jpg";
import cricketImg from "@/assets/cricket-news.jpg";
import footballImg from "@/assets/football-news.jpg";
import techImg from "@/assets/tech-news.jpg";

const HomePage = () => {
  const canonical = typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}` : "https://newshub.example";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>NewsHub — Your Stories, Your Voice</title>
        <meta name="description" content="NewsHub is a modern news platform to create and discover breaking news, analysis, and stories that matter." />
        <link rel="canonical" href={canonical} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'NewsHub',
          url: canonical,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${canonical}?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        })}</script>
      </Helmet>

      <header className="relative overflow-hidden">
        <section className="relative isolate py-24 md:py-32">
          <img
            src={heroImage}
            alt="NewsHub hero background - dynamic news collage"
            loading="eager"
            className="absolute inset-0 size-full object-cover -z-10"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-hero/90 via-hero/70 to-background/80" />

          <div className="container mx-auto px-4 text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-hero-foreground">
              NewsHub: Your Stories,
              <span className="text-accent"> Your Voice</span>
            </h1>
            <p className="text-lg md:text-2xl mb-10 text-hero-foreground/90 max-w-3xl mx-auto">
              Create, curate, and consume news with a powerful, community-driven platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 hover-scale">
                <Link to="/signup">
                  Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6">
                <Link to="/news">Explore News</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-hero-foreground/80">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>10,000+ Creators</span>
              </div>
              <div className="flex items-center gap-2">
                <Edit3 className="h-5 w-5" />
                <span>50,000+ Stories</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <span>Global Reach</span>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        {/* Feature Highlights */}
        <section className="py-16 md:py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold text-foreground mb-4">Built for Modern News</h2>
              <p className="text-lg md:text-xl text-muted-foreground">Powerful tools for creators and a delightful reading experience for everyone.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                title: 'Easy Publishing',
                desc: 'Compose rich stories with images, embeds, and categories.',
                Icon: Newspaper
              }, {
                title: 'Grow Your Audience',
                desc: 'Get discovered by readers who love your topics.',
                Icon: TrendingUp
              }, {
                title: 'Secure & Reliable',
                desc: 'Your content and identity are protected end‑to‑end.',
                Icon: Shield
              }, {
                title: 'Blazing Fast',
                desc: 'Optimized for performance with smooth interactions.',
                Icon: Rocket
              }].map(({ title, desc, Icon }) => (
                <Card key={title} className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
                  <div className="w-12 h-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Categories */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-4xl font-bold text-foreground">Explore Categories</h2>
                <p className="text-muted-foreground">Dive into topics you love, from sports to technology.</p>
              </div>
              <span className="hidden md:inline-flex items-center text-accent">
                <Sparkles className="mr-2 h-5 w-5" /> Curated for you
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
                name: 'Cricket',
                path: '/news/sports',
                image: cricketImg
              }, {
                name: 'Football',
                path: '/news/sports',
                image: footballImg
              }, {
                name: 'Technology',
                path: '/news/tech',
                image: techImg
              }, {
                name: 'Top Stories',
                path: '/news',
                image: heroImage
              }].map((cat) => (
                <Link to={cat.path} key={cat.name} className="group">
                  <article className="relative overflow-hidden rounded-xl border bg-card text-card-foreground hover:shadow-lg transition-shadow hover-scale">
                    <img src={cat.image} alt={`${cat.name} news`} loading="lazy" className="h-44 w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-semibold">{cat.name}</h3>
                      <p className="text-sm text-muted-foreground">Tap to explore</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Creator CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-accent to-accent/90">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-accent-foreground mb-4">Ready to Share Your Story?</h2>
            <p className="text-lg md:text-xl text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
              Join our community of creators and start publishing today. Your voice matters.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link to="/signup">Get Started <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} NewsHub. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;