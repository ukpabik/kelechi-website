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
  majorDesc: string
  minorDescs: string[]
  skills: string[]
  link?: string
  logo?: string
}


const experiencesData: Experience[] = [
  {
    id: "exp1",
    title: "Software Engineer Intern",
    company: "GitHub",
    location: "San Francisco, CA (Remote)",
    startDate: "May 2025",
    endDate: "Aug 2025",
    majorDesc: "Incoming Software Engineer Intern Summer 2025.",
    minorDescs: [],
    skills: ["Go", "Python", "Java", "Ruby on Rails"],
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
    majorDesc: "Centible is a student-led iOS startup that helps users track daily spending and build mindful financial habits.",
    minorDescs: [
      "Led development of 5+ new features, contributing to 500+ active users.",
      "Refactored legacy Firebase backend, minimizing errors by over 90%.",
      "Managed a team of 3 backend developers within a 20-person Agile org.",
    ],
    skills: ["Swift", "JavaScript", "Node.js", "Google Firebase"],
    link: "https://appteamcarolina.com/",
    logo: "/appteam.svg",
  },
]


export default function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState<string>(experiencesData[0].id)

  const currentExperience = experiencesData.find((exp) => exp.id === selectedExperience) || experiencesData[0]

  return (
    <motion.div
      id="experience"
      className="scroll-mt-12 container max-w-[1000px] mx-auto py-12 px-4 md:px-6"
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
              <Card className="text-white bg-transparent shadow-none border-none h-[400px] overflow-y-auto">
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
                    <div className="space-y-4 text-sm">
                      <p className="font-medium text-base">{currentExperience.majorDesc}</p>
                      <ul className="space-y-2">
                        {currentExperience.minorDescs.map((point, index) => (
                          <li key={index} className="flex items-start gap-2 opacity-80">
                            <span className="text-[#EAD2AC] mt-[2px]">★</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

