import React from 'react'
import { Card } from 'react-bootstrap'


function Latestcourse() {
    const arr = [{title:'cassandra',text:"Apache Cassandra is an open source NoSQL distributed database trusted by thousands of companies for scalability and high availability without compromising ....", Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Cassandra_logo.svg/1200px-Cassandra_logo.svg.png"},
    {title:'Hadoob',text:"The Apache Hadoop software library is a framework that allows for the distributed processing of large data sets across clusters of computers using simple ..", Image:"https://www.techrepublic.com/wp-content/uploads/2014/02/hadoop.logo.tr.jpg"},
    {title:'Docker',text:"Docker is a platform designed to help developers build, share, and run modern applications. We handle the tedious setup, so you can focus on the code.",Image:"https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2014/05/homepage-docker-logo.png?itok=zx0e-vcP"},
    {title:'Hykky',text:"Uplift Your Career with an Immersive Learning Program. Learn from the MAANG Instructors. Learn the Latest Web Technologies & Gain a Competitive Edge in the Job Market. Enroll..",Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRifWsidz38tYJbR0GHtaQiDoSvJfCYJjZQ&usqp=CAU"}]
console.log(arr)
    

  return (
    <div>
      <h1>Latest Courses</h1>
      
        {arr.map((demo)=>
        {return(
            <Card style={{float:"left", width: '18rem', height:"25rem",padding:"2px",margin:"10px"}}>
      <Card.Img style={{height:"18rem", width:"18rem" }} variant="top" src={demo.Image} />
      <Card.Body>
        <Card.Title>{demo.title}</Card.Title>
        <Card.Text>
         {demo.text}
        </Card.Text>
      
      </Card.Body>
    </Card>

        )})}

    </div>
  )
}

export default Latestcourse