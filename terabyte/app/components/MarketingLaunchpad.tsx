"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Bookmark, TrendingUp, Users, Target } from 'lucide-react';

const blogPosts = [
  {
    title: "Growth Marketing Strategies",
    excerpt: "Learn effective strategies to accelerate your startup's growth",
    category: "Growth",
    icon: TrendingUp,
    readTime: "5 min read"
  },
  {
    title: "Building Customer Relationships",
    excerpt: "Discover techniques for better customer engagement",
    category: "Customer Success",
    icon: Users,
    readTime: "4 min read"
  },
  {
    title: "Marketing Goals & KPIs",
    excerpt: "Set and track the right marketing metrics for your startup",
    category: "Strategy",
    icon: Target,
    readTime: "6 min read"
  }
];

const MarketingLaunchpad = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="w-full py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
              Marketing Launchpad
            </h2>
            <Rocket className="text-secondary w-6 h-6 md:w-8 md:h-8" />
          </div>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Practical Marketing Tips To Help You Grow And Scale
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className="h-full bg-card hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent-foreground">
                      {post.category}
                    </span>
                    <post.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {post.readTime}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 hover:bg-transparent"
                    >
                      <Bookmark className="w-4 h-4 text-primary hover:text-secondary transition-colors" />
                    </Button>
                  </div>
                </CardContent>
                <div 
                  className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 transform transition-transform duration-300 ${
                    hoveredCard === index ? 'translate-x-0' : '-translate-x-full'
                  }`}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white group"
          >
            <span>READ BLOG POSTS</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingLaunchpad;