import React, { useState } from 'react';
import { Search, Bell, Menu, User, BookOpen, Users, MessageSquare, Lightbulb, HelpCircle, ChevronDown } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "AI-Powered Learning Assistant",
      institute: "IIT Delhi",
      category: "Computer Science",
      collaborators: 4,
      status: "In Progress",
      description: "Developing an AI assistant to help students with personalized learning paths."
    },
    {
      id: 2,
      title: "Sustainable Energy Solutions",
      institute: "IIT Bombay",
      category: "Environmental Engineering",
      collaborators: 6,
      status: "Open",
      description: "Research project on implementing renewable energy solutions for rural areas."
    }
  ];

  const notifications = [
    { id: 1, text: "New collaboration request on AI Project", time: "2h ago" },
    { id: 2, text: "Your project idea received 5 upvotes", time: "4h ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Menu className="h-6 w-6 text-gray-500 mr-4" />
              <h1 className="text-xl font-semibold text-gray-900">Academic Collaboration Hub</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-6 w-6 text-gray-500" />
              </button>
              <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100">
                <User className="h-6 w-6 text-gray-500" />
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex space-x-8">
            {[
              { name: 'Dashboard', icon: BookOpen, id: 'dashboard' },
              { name: 'Projects', icon: Users, id: 'projects' },
              { name: 'Discussions', icon: MessageSquare, id: 'discussions' },
              { name: 'Ideas', icon: Lightbulb, id: 'ideas' },
              { name: 'Help', icon: HelpCircle, id: 'help' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-4 py-4 text-sm font-medium ${
                  activeTab === item.id
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Projects Section */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Active Projects</h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Create Project
              </button>
            </div>
            
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{project.institute}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      project.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">{project.category}</span>
                      <span className="text-sm text-gray-500">{project.collaborators} collaborators</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications Section */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              {notifications.map((notification) => (
                <div key={notification.id} className="py-3 border-b last:border-b-0">
                  <p className="text-sm text-gray-600">{notification.text}</p>
                  <span className="text-xs text-gray-400 mt-1">{notification.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;