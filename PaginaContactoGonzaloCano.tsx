"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  Code,
  Database,
  Server,
  GraduationCap,
  Briefcase,
  User,
  Languages,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const skills = [
    { name: "MySQL", category: "Database", icon: Database },
    { name: "MongoDB", category: "Database", icon: Database },
    { name: "Java", category: "Backend", icon: Server },
    { name: "Spring Boot", category: "Backend", icon: Server },
    { name: "JavaScript", category: "Frontend", icon: Code },
    { name: "Vue.js", category: "Frontend", icon: Code },
    { name: "Programación Concurrente", category: "Backend", icon: Server },
    { name: "Criptografía", category: "Security", icon: Server },
  ]

  const experience = [
    {
      company: "CON&SELL",
      position: "Desarrollador Front-end",
      duration: "3 meses",
      period: "11-03-25 A 05-06-25",
      description: "Desarrollador front-end en JavaScript, Redacción del manual de usuario",
      reference: "Chief Technology Officer Freddy Marin",
    },
    {
      company: "TNL S.L",
      position: "Informático General",
      duration: "4 meses",
      period: "05-06-24 A 01-10-24",
      description: "Informático general, mejora de rendimiento de ordenadores, resolución de problemas",
      reference: "Directora General Cristina Zamorano",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Gonzalo Cano</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                Perfil
              </Link>
              <Link href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">
                Experiencia
              </Link>
              <Link href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">
                Habilidades
              </Link>
              <Link href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">
                Educación
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contacto
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              GONZALO <span className="text-blue-600">CANO</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-8 tracking-wide">
              PROGRAMADOR FULLSTACK JUNIOR
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Soy un programador junior con 2 años de experiencia en el sector, mucho hambre de crecer y convertirme en
              un gran desarrollador, estoy abierto a todo tipo de ofertas priorizando proyectos ambiciosos donde se
              pueda aprender.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Download className="mr-2 h-4 w-4" />
                Descargar CV
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-4 w-4" />
                Contactar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <User className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Perfil Profesional</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                    Información Personal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3 text-gray-500" />
                    <span>(34) 649882910</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3 text-gray-500" />
                    <span>gonncanno@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-3 text-gray-500" />
                    <span>Boadilla Del Monte (Madrid) 28660</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Languages className="h-5 w-5 mr-2 text-blue-600" />
                    Idiomas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Inglés</span>
                        <span className="text-sm text-gray-500">70%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Español</span>
                        <span className="text-sm text-gray-500">Nativo</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Experiencia Profesional</h2>
            </div>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-blue-600">{job.company}</CardTitle>
                        <CardDescription className="text-lg font-medium text-gray-700">{job.position}</CardDescription>
                      </div>
                      <Badge variant="secondary">{job.duration}</Badge>
                    </div>
                    <p className="text-sm text-gray-500">{job.period}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">{job.description}</p>
                    <div className="text-sm text-gray-600">
                      <strong>Referencia:</strong> {job.reference}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Code className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Habilidades Técnicas</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon
                return (
                  <Card key={index} className="text-center hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <IconComponent className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <h3 className="font-medium text-gray-900 mb-1">{skill.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {skill.category}
                      </Badge>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Educación</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">IES Arquitecto Ventura Rodriguez</CardTitle>
                  <CardDescription>Desarrollo de Aplicaciones Multiplataforma</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge className="bg-green-100 text-green-800">Graduado con honores académicos</Badge>
                    <p className="text-sm text-gray-600">Subdelegado de DAM</p>
                    <p className="text-sm text-gray-600">Promoción 2025</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Certificaciones</CardTitle>
                  <CardDescription>Formación complementaria</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Badge variant="outline">Dinámicas de Grupo - 2022</Badge>
                    <p className="text-sm text-gray-600">Certificación en dinámicas de grupo</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <Mail className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Contacto</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">¿Tienes un proyecto interesante? ¡Hablemos!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-4 w-4" />
                gonncanno@gmail.com
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                (34) 649882910
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="h-5 w-5" />
              <span className="font-medium">Gonzalo Cano</span>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Separator className="my-4 bg-gray-700" />
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Gonzalo Cano. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
