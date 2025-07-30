// import React from 'react';
// import { Link } from 'react-router-dom';
// import { BookOpen, Users, Target, Award, ArrowRight } from 'lucide-react';

// const About: React.FC = () => {
//   const team = [
//     {
//       name: 'Sarah Chen',
//       role: 'Lead Developer & Content Creator',
//       bio: 'Full-stack developer with 8+ years of experience in React, TypeScript, and modern web technologies.',
//       avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
//       skills: ['React', 'TypeScript', 'Node.js', 'GraphQL']
//     },
//     {
//       name: 'Alex Rodriguez',
//       role: 'UI/UX Designer & Frontend Developer',
//       bio: 'Passionate about creating beautiful and intuitive user experiences with a focus on accessibility.',
//       avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
//       skills: ['Design Systems', 'Figma', 'CSS', 'Animation']
//     },
//     {
//       name: 'David Kim',
//       role: 'Backend Engineer & DevOps',
//       bio: 'Expert in scalable architecture, cloud computing, and performance optimization.',
//       avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
//       skills: ['Cloud Architecture', 'Docker', 'PostgreSQL', 'AWS']
//     }
//   ];

//   const values = [
//     {
//       icon: BookOpen,
//       title: 'Knowledge Sharing',
//       description: 'We believe in the power of open knowledge and sharing insights that help developers grow.'
//     },
//     {
//       icon: Users,
//       title: 'Community First',
//       description: 'Building a supportive community where developers can learn, share, and collaborate.'
//     },
//     {
//       icon: Target,
//       title: 'Practical Focus',
//       description: 'Our content is always practical, tested, and applicable to real-world projects.'
//     },
//     {
//       icon: Award,
//       title: 'Quality Content',
//       description: 'We maintain high standards for accuracy, clarity, and usefulness in every article.'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black opacity-20"></div>
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//               About DevBlog
//             </h1>
//             <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
//               We're passionate developers sharing knowledge and insights about modern web development,
//               helping you build better applications and advance your career.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               Our Mission
//             </h2>
//             <p className="text-lg text-gray-600 leading-relaxed mb-8">
//               DevBlog was created to bridge the gap between theoretical knowledge and practical application
//               in web development. We focus on providing in-depth tutorials, best practices, and insights
//               that you can immediately apply to your projects.
//             </p>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               Whether you're a beginner looking to learn the fundamentals or an experienced developer
//               staying current with the latest trends, our content is designed to help you grow and succeed
//               in your development journey.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Values
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               The principles that guide everything we do and create
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
//                 <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
//                   <value.icon className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-900 mb-3">
//                   {value.title}
//                 </h3>
//                 <p className="text-gray-600">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Meet Our Team
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Passionate developers and designers creating content to help you succeed
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {team.map((member, index) => (
//               <div key={index} className="bg-gray-50 rounded-lg p-6 text-center group hover:shadow-lg transition-all duration-300">
//                 <img
//                   src={member.avatar}
//                   alt={member.name}
//                   className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {member.name}
//                 </h3>
//                 <p className="text-blue-600 font-medium mb-3">
//                   {member.role}
//                 </p>
//                 <p className="text-gray-600 mb-4">
//                   {member.bio}
//                 </p>
//                 <div className="flex flex-wrap justify-center gap-2">
//                   {member.skills.map((skill) => (
//                     <span
//                       key={skill}
//                       className="px-2 py-1 bg-white rounded-md text-xs font-medium text-gray-700"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Ready to Start Learning?
//           </h2>
//           <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//             Join thousands of developers who are already learning and growing with our content.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               to="/blog"
//               className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
//             >
//               Explore Articles
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//             <Link
//               to="/blog"
//               className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
//             >
//               Subscribe to Newsletter
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;














import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Target, Award, ArrowRight } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'Lead Developer & Content Creator',
      bio: 'Full-stack developer with 8+ years of experience in React, TypeScript, and modern web technologies.',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL']
    },
    {
      name: 'Alex Rodriguez',
      role: 'UI/UX Designer & Frontend Developer',
      bio: 'Passionate about creating beautiful and intuitive user experiences with a focus on accessibility.',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      skills: ['Design Systems', 'Figma', 'CSS', 'Animation']
    },
    {
      name: 'David Kim',
      role: 'Backend Engineer & DevOps',
      bio: 'Expert in scalable architecture, cloud computing, and performance optimization.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      skills: ['Cloud Architecture', 'Docker', 'PostgreSQL', 'AWS']
    }
  ];

  const values = [
    {
      icon: BookOpen,
      title: 'Knowledge Sharing',
      description: 'We believe in the power of open knowledge and sharing insights that help developers grow.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a supportive community where developers can learn, share, and collaborate.'
    },
    {
      icon: Target,
      title: 'Practical Focus',
      description: 'Our content is always practical, tested, and applicable to real-world projects.'
    },
    {
      icon: Award,
      title: 'Quality Content',
      description: 'We maintain high standards for accuracy, clarity, and usefulness in every article.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About DevBlog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              We're passionate developers sharing knowledge and insights about modern web development,
              helping you build better applications and advance your career.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              DevBlog was created to bridge the gap between theoretical knowledge and practical application
              in web development. We focus on providing in-depth tutorials, best practices, and insights
              that you can immediately apply to your projects.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're a beginner looking to learn the fundamentals or an experienced developer
              staying current with the latest trends, our content is designed to help you grow and succeed
              in your development journey.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and create
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <value.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate developers and designers creating content to help you succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center group hover:shadow-lg transition-all duration-300">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 mb-4">
                  {member.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-white rounded-md text-xs font-medium text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already learning and growing with our content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            >
              Explore Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;