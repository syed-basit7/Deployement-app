import React from 'react';
import cover_img from '../../assets/img/img5.jpg';
import profile_img from '../../assets/img/img11.jpg';

const Blog_Card = (props) => {
  return (
    <>
        <div class="card bg-dark text-white blog-img-card" style={{minHeight: '350px'}}>
            <img src={props.img} class="card-img blog-img" style={{minHeight: '350px'}} alt="..." />
            <div class="card-img-overlay">
                <figcaption figcaption class="mt-4  font-family blockquote-footer text-white mb-0 pb-0">
                    {props.title}
                </figcaption>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
            </div>
        </div>
    </>
  );
}

export default Blog_Card;
