import {default as homeimg} from '../../images/home.svg'
import {default as officeimg} from '../../images/office.svg'

// export const pic = [

//     {
//         image: homeimg,
//         image2: officeimg
//     }

//  ]




export const images = {


    homeimg: homeimg,
    officeimg: officeimg


}




export const data = [
	{
		title: 'Best For Home | TP-Link AC1750',
		description:
			'Smart Wi-Fi Router that is perfect for homes looking for higher speeds and a wider range. The router supports two bands, including 2.4 GHz and 5 GHz.',
		image: 'https://lzd-img-global.slatic.net/g/p/9eed81ee49fb6629aba877925bb2af77.jpg_1200x1200q80.jpg_.webp',
	},
	{
		title: 'Best Value | Xiaomi Router 3',
		description: 'Not only does it have a long lifespan but its also equipped with a bunch of features that make it the best in its price segment.',
		image: 'https://www.xiaomimy.com/image/cache/router/pms_1470288129.01686992-800x800.jpg',
	},
	{
		title: 'Best Single Band | TP-Link TL-WR940N',
		description: 'One of the most affordable routers you can buy. While youre cutting quite a few corners at this price, the solid 2.4GHz 802.11n WI-Fi 4 performance makes it a great choice for anybody who doesnt need to worry about supporting 5GHz devices. ',
		image: 'https://www.lifewire.com/thmb/fTcjn_pXAt1E2BtmiJC0kUGDaQE=/fit-in/800x415/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TP-Link-TL-WR940N-b10ebe54c480428a8e7d3d41fea00ad2.jpg',
	},
	{
		title: 'For Small Homes | TP-Link Archer AC1200',
		description: 'Inexpensive router that can easily handle streaming 4K in Netflix, keeping in touch with friends and colleagues on FaceTime and Zoom, and even light online gaming.',
		image: 'https://www.atel-electronics.eu/pic_cache/10/06238.jpg?1629311568',
	},
	{
		title: 'Best Gaming | Asus ROG Strix GS-AX5400',
		description: 'This dual-band Wi-Fi 6 gaming router not only offers tools designed to reduce latency and provide maximum bandwidth for online gamers, but it delivers speedy throughput and comes with strong network security and parental control tools. ',
		image: 'https://i.pcmag.com/imagery/reviews/06OgPGoOx7nvGVK6BGvRThv-5.fit_lim.size_238x139.v1638993428.png',
	},
    {
		title: 'Affordable Gaming | TP-Link Archer AX50',
		description: 'The TP-Link Archer AX50 is an affordable Wi-Fi 6 router that delivers speedy throughput and comes with lifetime malware protection  without breaking your bank',
		image: 'https://i.pcmag.com/imagery/reviews/01c5jCiDcWfV8pQZNRPFUAg-1.fit_lim.size_238x139.v1616616745.png',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};