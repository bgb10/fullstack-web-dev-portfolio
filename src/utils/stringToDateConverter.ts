export default function stringToDateConverter(data: any) {
  const updatedData = JSON.parse(JSON.stringify(data)) // Deep copy to avoid modifying the original object

  updatedData.experiences.forEach(
    (experience: {
      duration: {
        startedAt: string | number | Date
        endedAt: string | number | Date
      }
    }) => {
      experience.duration.startedAt = new Date(experience.duration.startedAt)
      experience.duration.endedAt = new Date(experience.duration.endedAt)
    }
  )

  return updatedData
}
