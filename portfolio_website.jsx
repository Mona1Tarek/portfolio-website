import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Drowsiness Detection System",
      description:
        "Eye state detection with CNN to monitor driver drowsiness in real-time.",
      tech: "Python, TensorFlow, OpenCV",
      link: "#",
      image: "/projects/drowsiness.png",
    },
    {
      title: "Traffic Sign Detection (YOLO + ONNX)",
      description:
        "Recognizes 45+ classes of traffic signs using YOLO and optimized ONNX models.",
      tech: "YOLO, ONNX, OpenCV",
      link: "#",
      image: "/projects/traffic.png",
    },
    {
      title: "Voice Command System",
      description:
        "Speech-to-text with Vosk and ChromaDB integration for intelligent queries.",
      tech: "Vosk, Python, ChromaDB",
      link: "#",
      image: "/projects/voice.png",
    },
    {
      title: "Sentiment Analysis",
      description:
        "Classifying customer reviews into positive/negative sentiments.",
      tech: "Scikit-learn, Python",
      link: "#",
      image: "/projects/sentiment.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Mona Tarek
        </motion.h1>
        <p className="text-lg mb-6 max-w-xl">
          AI Engineer | Computer Vision & NLP Enthusiast | Passionate about building
          intelligent systems that solve real-world problems.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white px-6 md:px-20">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="max-w-3xl text-gray-700">
          I am a recent Electronics & Communication Engineering graduate from
          Alexandria University with hands-on experience in AI, machine learning,
          computer vision, and NLP. I have worked on projects ranging from
          drowsiness detection and ADAS systems to voice command applications.
          Currently, I’m gaining experience as a Computer Vision Intern at Cellula
          Technologies and advancing my skills through the Applied Data Science Lab
          at WorldQuant University.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-100 px-6 md:px-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "LangChain", "SQL", "Docker"].map(
            (skill) => (
              <div
                key={skill}
                className="bg-white shadow rounded-2xl p-4 font-medium"
              >
                {skill}
              </div>
            )
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white px-6 md:px-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} className="shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-2xl h-40 w-full object-cover"
              />
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                <p className="text-xs text-gray-500 mb-4">Tech: {project.tech}</p>
                <a
                  href={project.link}
                  className="text-blue-600 hover:underline text-sm"
                >
                  View on GitHub →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-100 px-6 md:px-20">
        <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
        <ul className="space-y-4 max-w-3xl mx-auto">
          <li>
            <strong>Computer Vision Intern – Cellula Technologies</strong> (2024–Present)
          </li>
          <li>
            <strong>AI Intern – Telecom Egypt</strong> (2024)
          </li>
          <li>
            <strong>Robotics Instructor – Robokid Academy</strong> (2023–Present)
          </li>
          <li>
            <strong>Software Mentor – Mind Cloud Technical Team</strong> (2022–Present)
          </li>
          <li>
            <strong>Applied Data Science Lab – WorldQuant University</strong> (2024)
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white px-6 md:px-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="mb-6 text-gray-700">Let’s connect and collaborate!</p>
        <div className="flex justify-center gap-6">
          <a href="mailto:your.email@example.com">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/yourgithub" target="_blank">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Mona Tarek. All rights reserved.
      </footer>
    </div>
  );
}
