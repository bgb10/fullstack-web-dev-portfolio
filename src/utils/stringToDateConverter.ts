export default function stringToDateConverter(data: any, section: string) {
  const updatedData = JSON.parse(JSON.stringify(data)) // Deep copy to avoid modifying the original object

  console.log(updatedData)
  updatedData[`${section}`].forEach(
    (inner: {
      duration: {
        startedAt: string | number | Date
        endedAt: string | number | Date
      }
    }) => {
      inner.duration.startedAt = new Date(inner.duration.startedAt)
      inner.duration.endedAt = new Date(inner.duration.endedAt)
    }
  )

  return updatedData
}
