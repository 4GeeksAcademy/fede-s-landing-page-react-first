import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {

	const cards = [{
		title: "Titulo 1",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis omnis ea qui earum eos inventore distinctio tenetur neque optio.",
		image: "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
	},
	{
		title: "Titulo 2",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis omnis ea qui earum eos inventore distinctio tenetur neque optio.",
		image: "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg"
	},
	{
		title: "Titulo 3",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis omnis ea qui earum eos inventore distinctio tenetur neque optio.",
		image: "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
	},
	{
		title: "Titulo 4",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis omnis ea qui earum eos inventore distinctio tenetur neque optio.",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6zoRR_FPG7f2knECoYTgOuETejMYPg71vg&s"
	}];

	const cardArticles = cards.map(article => 
		<Card title={article.title} description={article.description} image={article.image}/>
	);

	return (
		<div>
			<div className="container">
				<Navbar/>
				<Jumbotron/>
				<div className="row">
					{cardArticles}
				</div>
				
			</div>
			<Footer />

		</div>
	);
};

export default Home;