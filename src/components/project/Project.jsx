import React from 'react';
import ProCards from './ProCards';

const Project = () => {

	return(
		<div className="flex flex-col" id="project">
			<div className="project-title text-[#CB786C] text-4xl md:text-5xl text-center pt-[6vh] lg:pt-[10vh] pb-8">PROJECTS</div>
			<ProCards src="images/p1/p1.png" title="Cryptoverse" stack="Stack: React Js, Node Js, Redux" description="User can view cryptocurrencies value statistics, market cap and supply. It has a news section for latest news. Data is fetched through an API." link="https://github.com/sonamnayak/cryptoverse" className="shrink-0" />
			<ProCards src="images/p2/p2.png" title="E-commerce App" stack="Stack: React Js, Node Js, MongoDB, Stripe" description="A one stop destination for clothing's and accessories. It has a payment gateway, one can buy products, add them to cart and then checkout." link="https://github.com/sonamnayak/ecommerce" />
			<ProCards src="images/p3/p3.png" title="Journaling Website" stack="Stack: React Js, Node Js, Mongo DB" description="User can Record their day-to-day activities or any milestone, etc." link="https://github.com/sonamnayak/my-journal" />
			<ProCards src="images/p4/p4.png" title="Museum Management Website" stack="Stack: HTML, CSS, JavaScript" description="A person can check various art collections and can also book themselves a tour. Additionally it functions as an e-commerce website." link="https://github.com/sonamnayak/A-C-Museum" />
		</div>
		);
}

export default Project;