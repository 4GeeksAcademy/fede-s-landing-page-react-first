import React from "react";

//create your first component
const Jumbotron = () => {

	return (
		<div className="mt-4 p-5 bg-light text-dark rounded">
            <h1>Bienvenido a mi app!</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi perspiciatis enim esse a, atque, nulla sed inventore quam, sequi accusantium eligendi obcaecati quasi blanditiis. In earum beatae corporis perferendis enim.</p>

			<button className="btn btn-primary">
				Call to action!
			</button>
		</div>
	);
};

export default Jumbotron;