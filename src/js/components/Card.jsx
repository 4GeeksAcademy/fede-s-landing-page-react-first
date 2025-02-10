import React from "react";

const Card = (props) => {


    return (
        <div class="col-sm-12 col-md-6 col-lg-3 card-group my-4">
            <div class="text-center card" >
                <img src={props.image} className="img-fluid h-50 card-img-top"alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.description}</p>
                    </div>
                    <div class="card-footer">
                        <button className="btn btn-primary">Find Out More!</button>
                    </div>
            </div>
        </div>
    );
};

export default Card;