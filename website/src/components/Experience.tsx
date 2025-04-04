import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Experience = {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  skills: string[]
  link?: string
  logo?: string
}


const experiencesData: Experience[] = [
  {
    id: "exp1",
    title: "Incoming Software Engineer Intern",
    company: "GitHub",
    location: "San Francisco, CA (Remote)",
    startDate: "May 2025",
    endDate: "Aug 2025",
    description: ["..."],
    skills: ["..."],
    link: "https://github.com/about",
    logo: "/github-logo.png",
  },
  {
    id: "exp2",
    title: "Software Engineer",
    company: "App Team Carolina",
    location: "Chapel Hill, NC",
    startDate: "Sep 2024",
    endDate: "Present",
    description: [
      "Led the development and release of 5+ features for Centible, a published iOS app helping 500+ users manage their daily spending habits.",
      "Spearheaded the refactoring of a deprecated JavaScript Firebase backend, reducing notification errors by nearly 100% and ensuring stable, real-time updates for all users.",
      "Directed an Agile team of 3 backend engineers in a cross-functional group of 20, including UI/UX and iOS developers."
    ],
    skills: ["Swift", "JavaScript", "Node.js", "Google Firebase"],
    link: "https://appteamcarolina.com/",
    logo: "/appteam.svg",
  }
  
]

export default function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState<string>(experiencesData[0].id)

  const currentExperience = experiencesData.find((exp) => exp.id === selectedExperience) || experiencesData[0]

  return (
    <motion.div
      id="experience"
      className="container max-w-[1000px] mx-auto py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-8 "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-4">
          {experiencesData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                onClick={() => setSelectedExperience(experience.id)}
                className={cn(
                  "w-full text-left p-4 rounded-lg transition-colors border",
                  selectedExperience === experience.id ? "bg-primary/10 border-primary" : "hover:bg-gray-600",
                )}
              >
                <div className="flex items-start gap-3">
                  {experience.logo && (
                    <img
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      className="h-6 w-6 mt-1 rounded-sm object-contain flex-shrink-0"
                    />
                  )}
                  <div>
                    <h3 className="font-medium">{experience.title}</h3>
                    <p className="text-sm font-bold text-[#D1DEDE]">{experience.company}</p>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <div className="md:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedExperience}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="text-white bg-transparent shadow-none border-none">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{currentExperience.title}</CardTitle>
                      <CardDescription className="font-bold mt-1 text-[#D1DEDE]">
                        {currentExperience.company} • {currentExperience.location}
                      </CardDescription>
                    </div>
                    {currentExperience.link && (
                      <Button variant="ghost" size="icon" asChild>
                        <a href={currentExperience.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {currentExperience.startDate} - {currentExperience.endDate}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                      {currentExperience.description.map((point, index) => (
                        <li key={index}>
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Skills & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentExperience.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

