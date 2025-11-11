import { COLORS } from "@/config/designTokens";
import { IMAGES } from "@/config/images";
import Link from "next/link";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Video Post: Golf Swing Techniques",
      category: "VIDEO",
      date: "May 5, 2025",
      excerpt: "Sed dapibus massa vitae ipsum aliquam sollicitudin. Aenean turpis leo, hendrerit quis bibendum sed, scelerisque nec sem. Praesent convallis lacinia pulvinar. Duis id sem urna. Ut et feugiat ligula. Vivamus tincidunt diam e lecus imperdiet tempus...",
      image: IMAGES.GOLF_COURSE_1,
      slug: "golf-swing-techniques"
    },
    {
      id: 2,
      title: "Mastering the Perfect Golf Shot",
      category: "TIPS",
      date: "May 3, 2025",
      excerpt: "Learn advanced techniques to improve your golf performance. Our coaches share professional insights on grip, stance, and swing mechanics that will elevate your game to the next level.",
      image: IMAGES.GOLF_COURSE_2,
      slug: "mastering-perfect-golf-shot"
    },
    {
      id: 3,
      title: "Training Programs for Golf Excellence",
      category: "TRAINING",
      date: "May 1, 2025",
      excerpt: "Discover our comprehensive training programs designed to enhance your golf skills. From beginners to professionals, we have tailored programs to meet your goals.",
      image: IMAGES.GOLF_EQUIPMENT_1,
      slug: "training-programs-golf"
    },
    {
      id: 4,
      title: "Fitness Tips for Golf Players",
      category: "FITNESS",
      date: "April 28, 2025",
      excerpt: "A comprehensive guide to fitness routines that improve your golf performance. Build strength, flexibility, and endurance with expert-designed workout plans.",
      image: IMAGES.GOLF_EQUIPMENT_2,
      slug: "fitness-tips-golf-players"
    },
    {
      id: 5,
      title: "Course Strategy and Game Planning",
      category: "STRATEGY",
      date: "April 25, 2025",
      excerpt: "Master the mental aspects of golf with proven strategies. Learn how to read courses, manage pressure, and make smart decisions during competition.",
      image: IMAGES.SERVICE_1,
      slug: "course-strategy-game-planning"
    },
    {
      id: 6,
      title: "Equipment Guide: Choosing Your Perfect Set",
      category: "EQUIPMENT",
      date: "April 22, 2025",
      excerpt: "A detailed guide to selecting the right golf equipment for your skill level. Understand the importance of club selection, ball choice, and other essential gear.",
      image: IMAGES.SERVICE_2,
      slug: "equipment-guide-golf-set"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <PageHero
        title="Our Blog"
        description="Tips, techniques, and insights from our expert coaches to improve your golf game"
      />

      {/* Latest Post Featured Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="Latest Post"
            subtitle="Featured Article"
          />

          {posts.length > 0 && (
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Featured Image */}
              <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* Featured Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`bg-${COLORS.PRIMARY_MAIN} text-white px-4 py-1 text-xs font-bold uppercase tracking-wider`}>
                    {posts[0].category}
                  </span>
                  <span className="text-gray-500 text-sm">{posts[0].date}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {posts[0].title}
                </h3>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                  {posts[0].excerpt}
                </p>

                <Link
                  href={`/blog/${posts[0].slug}`}
                  className={`inline-block bg-${COLORS.PRIMARY_MAIN} hover:bg-${COLORS.PRIMARY_DARK} text-white font-bold py-3 px-8 transition duration-300 uppercase text-sm tracking-wider`}
                >
                  Read More
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Posts Section */}
      <section className={`bg-gradient-to-b from-${COLORS.BG_LIGHT} to-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title="All Articles"
            subtitle="Explore Our Content"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
              >
                {/* Post Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className={`absolute top-4 left-4 bg-${COLORS.PRIMARY_MAIN} text-white px-3 py-1 text-xs font-bold uppercase tracking-wider`}>
                    {post.category}
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6 sm:p-7 md:p-8 flex-1 flex flex-col">
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-semibold mb-3">
                    {post.date}
                  </p>

                  <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-3 line-clamp-2`}>
                    <Link href={`/blog/${post.slug}`} className={`hover:text-${COLORS.PRIMARY_MAIN} transition duration-200`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className={`inline-flex items-center text-${COLORS.PRIMARY_MAIN} hover:text-${COLORS.PRIMARY_DARK} font-bold text-sm uppercase tracking-wider transition duration-200`}
                  >
                    Read More
                    {' '}
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`bg-gradient-to-r from-${COLORS.PRIMARY_MAIN} to-${COLORS.PRIMARY_DARK} py-16 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-white/90 text-base sm:text-lg mb-8">
              Subscribe to our newsletter and get the latest golf tips and articles delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none"
              />
              <button className={`bg-white hover:bg-gray-100 text-${COLORS.PRIMARY_MAIN} font-bold py-3 px-8 transition duration-300 uppercase text-sm tracking-wider`}>
                Subscribe
              </button>
            </div>

            <p className="text-white/70 text-xs sm:text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Improve Your Game?"
        description="Join our membership and get expert coaching along with unlimited access to all our training resources."
        primaryButton={{ text: "Explore Memberships", href: "/services" }}
      />
    </div>
  );
}
