import React from 'react';
import { Users, Target, Award, Heart, Code, BookOpen, Lightbulb, Globe } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Editor-in-Chief',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Senior Frontend Developer with 8+ years of experience in React, TypeScript, and modern web technologies.',
      expertise: ['React', 'TypeScript', 'UI/UX Design']
    },
    {
      name: 'Mike Chen',
      role: 'Technical Writer',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'React specialist and technical writer passionate about making complex concepts accessible to developers.',
      expertise: ['React', 'JavaScript', 'Technical Writing']
    },
    {
      name: 'Emma Wilson',
      role: 'Backend Specialist',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Backend architect and API design expert with extensive experience in Node.js and scalable systems.',
      expertise: ['Node.js', 'API Design', 'System Architecture']
    },
    {
      name: 'Alex Rodriguez',
      role: 'Design Lead',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'CSS specialist and UI/UX designer focused on creating beautiful, accessible web experiences.',
      expertise: ['CSS', 'UI/UX', 'Accessibility']
    }
  ];

  const values = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Quality Content',
      description: 'We provide well-researched, practical articles that help developers solve real-world problems.'
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'Continuous Learning',
      description: 'We believe in lifelong learning and staying updated with the latest technologies and best practices.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community First',
      description: 'Our community of developers is at the heart of everything we do. We learn and grow together.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We explore cutting-edge technologies and share insights about the future of web development.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Monthly Readers' },
    { number: '200+', label: 'Articles Published' },
    { number: '15+', label: 'Expert Contributors' },
    { number: '5+', label: 'Years of Experience' }
  ];

  return (
    <div className="min-h-screen bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About DevBlog</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're passionate developers sharing knowledge, insights, and best practices 
            to help the web development community grow and thrive.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-blue-700" />
                <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
              </div>
              <p className="text-blue-700 text-lg leading-relaxed mb-6">
                At DevBlog, we believe that knowledge should be accessible to everyone. Our mission is to 
                create high-quality, practical content that empowers developers at all levels to build 
                better web applications and advance their careers.
              </p>
              <p className="text-blue-600 leading-relaxed">
                Whether you're just starting your development journey or you're a seasoned professional 
                looking to stay current with the latest trends, we're here to provide the insights and 
                tutorials you need to succeed.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
              <div className="text-blue-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-blue-700 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-blue-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                  <p className="text-blue-700 font-medium mb-3">{member.role}</p>
                  <p className="text-blue-600 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Cover */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">What We Cover</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Globe className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Frontend Development</h3>
              <p className="text-blue-600">React, Vue, Angular, CSS, JavaScript, and modern frontend frameworks.</p>
            </div>
            <div className="text-center">
              <Code className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Backend Development</h3>
              <p className="text-blue-600">Node.js, APIs, databases, server architecture, and scalability.</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-blue-900 mb-2">Best Practices</h3>
              <p className="text-blue-600">Code quality, testing, performance optimization, and industry standards.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <Heart className="h-12 w-12 text-blue-700 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Join Our Community</h2>
          <p className="text-blue-600 text-lg mb-6 max-w-2xl mx-auto">
            Ready to level up your development skills? Subscribe to our newsletter and never miss 
            an update on the latest web development trends and tutorials.
          </p>
          <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;