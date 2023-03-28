import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className='container mt-4'>
    {/* Latest Courses */}
    <h3 className='pb-1 mb-4'>Latest Courses<a href='#' className='float-end'>see all</a></h3>
    <div className='row'>
        <div className='col-md-3'>
            <div className="card">
                <img src="https://www.itechnasik.com/wp-content/uploads/2019/04/product.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title"><a href='/Latestcourse'>Course details</a></h5>
                </div>
            </div>
        </div>
    </div>
    {/* end of latest Courses */}
    {/* Popular Courses */}
    <h3 className='pb-1 mb-4 mt-5'>Popular Courses<a href='' className='float-end'>see all</a></h3>
    <div className='row'>
        <div className='col-md-3'>
            <div className="card">
                <img src="https://contentstatic.techgig.com/thumb/msid-80031808,width-460,resizemode-4/5-Programming-languages-to-kickstart-your-tech-career-in-2021.jpg?150543." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"><a href='/courscard'>Course details</a></h5>
                </div>
            </div>
        </div>
    </div>
    {/* end of Popular Courses */}
    {/* Popular Teachers */}
    <h3 className='pb-1 mb-4 mt-5'>Featured Teachers<a href='#' className='float-end'>see all</a></h3>
    <div className='row'>
        <div className='col-md-3'>
            <div className="card">
                <img src="https://prod-discovery.edx-cdn.org/media/programs/card_images/75f70b19-b26d-41bf-81a2-36fb8dded8f4-e5d0ed35edf2.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"><a href=''>Course details</a></h5>
                </div>
            </div>
        </div>
    </div>
    {/* end of Popular teachers */}
    {/* student testimonial */}
    <h3 className='pb-1 mb-4 mt-5'>Student Testimonial</h3>
    <div img src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=" id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5">
        
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <figure className='text-center'>
                <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
            </figure>
            </div>
            <div className="carousel-item">
            <figure className='text-center'>
                <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
            </figure>
            </div>
            <div className="carousel-item">
            <figure className='text-center'>
                <blockquote className="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
            </figure>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    {/* end of stuent testimonial */}
</div>

    </div>
  )
}

export default Home