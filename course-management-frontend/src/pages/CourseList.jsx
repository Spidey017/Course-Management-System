import React, { useContext, useState } from 'react'
import { CourseProvider } from '../context/CourseContext'
import CourseCard from '../components/CourseCard'

const CourseList = () => {
  let { allCourses } = useContext(CourseProvider)
  let [searchTerm, setSearchTerm] = useState('')

  let filtered = (allCourses ?? []).filter((course) =>
    course.cName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="flex flex-col text-3xl justify-center items-center">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-2 px-5 w-[300px] h-[80px]"
        placeholder="Search...."
      />
      {filtered?.map((course) => (
        <CourseCard key={course.id} data={course} />
      ))}
    </div>
  )
}

export default CourseList
