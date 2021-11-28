import React,{useRef,useState,useEffect} from 'react';
import { motion } from 'framer-motion';

import LoccaImg from '../assets/image/svg/1.svg';
import GetInTouchImg from '../assets/image/svg/2.svg';
import LoccaTruckImg from '../assets/image/png/1.png';
import ContainerImg from '../assets/image/png/8.png';
import BoxesImg from '../assets/image/svg/3.svg';
import ServiceImg1 from '../assets/image/png/5.png';
import ServiceImg2 from '../assets/image/png/6.png';
import ServiceImg3 from '../assets/image/png/7.png';
import CupboardImg from '../assets/image/png/10.png';
import CheckImg from '../assets/image/svg/13.svg';
import CheckGreenImg from '../assets/image/svg/8.svg';
import LoccaWorkerImg from '../assets/image/png/15.png';
import FishFoodImg from '../assets/image/svg/9.svg';
import MeatImg from '../assets/image/svg/4.svg';
import PolutryImg from '../assets/image/svg/5.svg';
import VegetablesImg from '../assets/image/svg/6.svg';
import PharmacyImg from '../assets/image/svg/7.svg';
import FullfilmentImg1 from '../assets/image/png/12.png';
import FullfilmentImg2 from '../assets/image/png/14.png';
import FullfilmentImg3 from '../assets/image/png/13.png';
import FullfilmentImg4 from '../assets/image/png/11.png';
import MiniErpImg from '../assets/image/png/4.png';
import SupportingImg from '../assets/image/png/3.png';
import EwalletImg from '../assets/image/png/2.png';
import Person1Img from '../assets/image/png/19.png';
import Person2Img from '../assets/image/png/18.png';
import Person3Img from '../assets/image/png/17.png';
import BoxesImgOpacity from '../assets/image/png/20.png';
import PeopleImg from '../assets/image/png/16.png';
import LoccaNoBackImg from '../assets/image/svg/14.svg';
import InstagramImg from '../assets/image/svg/10.svg';
import TwitterImg from '../assets/image/svg/11.svg';
import FacebookImg from '../assets/image/svg/12.svg';


import useWindowSize from '../hooks/useWindowSize';


const services = [
    {image: ServiceImg1,title: 'Fulﬁllment & Processing',desc: 'Tingkatkan produktivitas bisnis anda hingga 100%. Semua kebutuhan pergudangan anda akan Locca bantu mulai dari cari gudang, operasional gudang, hingga manajemen dan laporan gudang'},
    {image: ServiceImg2,title: 'Distribution & Transportation',desc: 'Terkendala dalam mencari kendaraan berpendingin dengan harga yang terjangkau? Locca hadir untuk permudah anda dalam menemukan kendaraan berpendingin dengan harga terbaik serta bantuan tracking juga scheduling pengiriman'},
    {image: ServiceImg3,title: 'Business Analytic & Support Features',desc: 'Locca bantu pencatatan barang atau laporan stok barang dengan teknologi WMS (Warehouse Management System) dan IMS (Inventory Management System) untuk mempermudah menganalisa bisnis anda'}
]

const types = [
    {image: FishFoodImg,title: 'Fish & Seafood'},
    {image: MeatImg,title: 'Meat'},
    {image: PolutryImg,title: 'Polutry'},
    {image: VegetablesImg,title: 'Vegetables'},
    {image: PharmacyImg,title: 'Pharmacy'}
]

const fullfilments = [
    {image: FullfilmentImg1, title: 'Cold Room',desc: 'Volume : >100 Tonnes'},
    {image: FullfilmentImg2,title: 'Container Storage',desc: 'Volume : 10-30 Tonnes'},
    {image: FullfilmentImg3,title: 'Freezer Storage',desc: 'Volume : 1-2 Tonnes'},
    {image: FullfilmentImg4,title: 'Refer Truck & Van',desc: 'Volume : 1 - 40 Tonnes'}
]

const features = [
    {
        image: MiniErpImg,
        title: 'Mini ERP',
        items: [
            "Fulfillment Management System",
            "Fulfillment & Transport Information",
            "Product Catalogue Management",
            "Transport Management System",
            "Omni-Channel Management",
            "Vendor & Mitra Dashboard"
        ]
    },
    {
        image: SupportingImg,
        title: 'Supporting',
        items: [
            "Point Of Sales (POS)",
            "Branding & Marketing",
            "Accounting Software",
            "Technology Development",
            "Financing",
            "Last-Miles Delivery"
        ]
    },
    {
        image: EwalletImg,
        title: 'E-Wallet',
        items: [
            "Pay Later",
            "Payment Gateway",
            "Cash Management",
            "Technology Development",
        ]
    }
]

const testimonies = [
    {image: Person1Img,name: 'anna maria',position: 'CEO Start Up Business',testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {image: Person2Img,name: 'John Doe Smith',position: 'CEO Start Up Business',testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {image: Person3Img,name: 'John Doe Smith',position: 'CEO Start Up Business',testimony: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
]


const Service = ({data,index}) => {

    const [hover,setHover] = useState(false);

    return (
        <div onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} key={index} className="md:mt-16 mt-8 p-4 shadow-md relative rounded-lg bg-white hover:ring-1 hover:ring-primary " >
            <img src={data.image} alt={data.title} 
                className={` ${hover ? '-translate-y-4 scale-110' : ''} transition duration-200 pointer-events-none object-contain h-2/4 absolute w-8/12 left-1/2 -translate-x-1/2 -top-12  transform `} />
            <p className="font-montserrat text-black font-bold text-base mt-24">
                {data.title}
            </p>
            <p className="mt-2 font-roboto text-black text-sm">
                {data.desc}
            </p>
        </div>
    )
}

const Type = ({data,index}) => {

    const [hover,setHover] = useState(false);

    return (
        <div onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} key={index} className={` flex flex-col items-center md:mt-8 mt-2 ` } >
            <div className="bg-white rounded-lg shadow-md flex items-center justify-center p-4  md:p-6 lg:p-14">
                <img src={data.image} alt={data.title} className={` ${hover ? '-translate-y-4 scale-110' : ''} transform transition duration-200 w-full pointer-events-none`} />
            </div>
            <p className="text-center text-black font-roboto mt-4 text-xl font-bold">
                {data.title}
            </p>
        </div>
    )
}

const FullFilment = ({data,index}) => {
    return (
        <div key={index} className="bg-white rounded-lg flex flex-col md:flex-row overflow-hidden md:h-180 ">
            <div className="flex-1 h-100 md:h-full">
                <img src={data.image} alt={data.title} className="pointer-events-none h-full w-full object-cover" />
            </div>
            <div className="flex-1 relative flex justify-center flex-col">
                <img src={CheckGreenImg} alt="check" className="pointer-events-none w-6 absolute top-4 right-4" />
                <p className="font-montserrat text-black text-2xl font-bold ml-4">
                    {data.title}
                </p>
                <p className="font-montserrat text-grey-light text-lg mt-2 ml-4">
                    {data.desc}
                </p>
            </div>
        </div>
    )
}

const Testimony = ({data,index}) => {
    return (
        <div key={index} className="flex items-center md:items-start md:flex-row flex-col ">
            <img src={data.image} alt={data.name} className="pointer-events-none w-22 h-22 object-cover mr-0 mb-4 md:mb-0 md:mr-8 " />
            <div className="flex flex-col w-full items-center md:items-start">
                <p className="font-montserrat text-black font-bold text-sm capitalize">
                    {data.name}
                </p>
                <p className="font-montserrat text-tertiary font-bold text-sm capitalize">
                    {data.position}
                </p>
                <p className="mt-4 font-roboto text-grey-dark font-400 font-medium text-sm text-center md:text-left">
                    {data.testimony}
                </p>
            </div>
        </div>
    )
}

const Feature = ({data,index}) => {
    return (
        <div key={index} className="group shadow-md bg-white hover:bg-secondary hover:ring-1 hover:ring-tertiary flex flex-col p-8 transition duration-200 rounded-xl ">
            <div className="mb-6 group-hover:bg-tertiary group-hover:text-white font-bold self-start transition duration-200 px-6 py-2 bg-white ring-1 ring-tertiary rounded-lg flex items-center justify-center text-grey-dark font-montserrat text-lg">
                {data.title}
            </div>
            <div className="flex flex-col">
                {data.items.map((item,i)=> {
                    return (
                        <div key={i} className="flex items-center mt-2">
                            <div className="mr-2 rounded-full bg-primary w-2 h-2 ring-1 ring-black" />
                            <p className="font-montserrat text-black text-sm font-bold">
                                {item}
                            </p>
                        </div>
                    )
                })}
            </div>
            <div className="flex-1" />
            <img src={data.image} alt="mini erp" className="pointer-events-none mt-14 w-9/12 self-center" />
        </div>
    )
}


const Home = ({}) => {
    
    const size = useWindowSize();

    return (
        <>

            <div className={`bg-white transition duration-100 w-full relative `}>
                
                <div className="flex items-center w-full h-full absolute top-0 left-0 container mx-auto md:px-16 px-4">
                    <motion.p animate={{x: '100vw'}} transition={{delay: .4,duration: 2}} className="text-primary capitalize text-7xl font-montserrat font-black">LOCCA</motion.p>
                </div>
                <motion.div initial={{width: 0}} animate={{width: '100vw'}} transition={{delay: .6,duration: 1.2}} className=" w-0 h-full top-0 left-0 absolute bg-tertiary" />
                <motion.div initial={{width: 0}} animate={{width: '100vw'}} transition={{delay: 1.3,duration: 1.2}} className=" w-0 h-full top-0 left-0 absolute bg-primary" />
                <motion.div initial={size.width <= 800 ? {} : {height: '100vh'}} animate={size.width <= 800 ? {} :{height: '100%'}} transition={size.width <= 800 ? {} : {delay: 3,duration: 1.4,ease: [0.43, 0.13, 0.23, 0.96]}} className=" h-full z-20 md:px-16 px-4 flex md:flex-row flex-col-reverse items-start justify-between container mx-auto relative">
                    
                    <div className="flex-1 pb-8 md:py-16 overflow-hidden">
                        <div className="overflow-hidden">
                            <motion.img initial={{y: '100%'}} animate={{y: '0'}} transition={{delay: 3,duration: .5}} src={LoccaImg} alt="locca icon" className="w-200 mx-auto md:mx-0 pointer-events-none" />
                        </div>
                        <div className="overflow-hidden">
                            <motion.p initial={{y: '100%'}} animate={{y: '0'}} transition={{delay: 2.4,duration: .5}} className="mt-4 font-montserrat text-2xl text-center md:text-left md:text-4xl font-bold text-white">Take Care of Process for Your Business Needs</motion.p>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p initial={{y: '100%'}} animate={{y: '0'}} transition={{delay: 2.5,duration: .5}} className="mt-2 font-roboto text-base md:text-lg text-white text-center md:text-left">LOCCA hadir dalam rangka membantu dan mengoptimasi bisnis proses bagi UMKM</motion.p>
                        </div>
                        <motion.button 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 2.8,duration: .5}}
                            className="mx-auto md:mx-0 transition duration-150 rounded-full hover:ring-4 hover:ring-white hover:ring-opacity-50 mt-8 p-3 self-start bg-white border-none flex items-center justify-between">
                            <img src={GetInTouchImg} alt="icon getintouch" className="mr-2 w-30" />
                            <p className="font-montserrat text-grey-dark font-bold">Get in touch now</p>
                        </motion.button>
                    </div>

                    <div className="flex-300px md:flex-1 w-full relative mt-8 " >
                        <img src={LoccaTruckImg} alt="locca truck" className=" absolute pointer-events-none" />
                    </div>
                </motion.div>
            </div>


            <div className="bg-white w-full relative">
                <div className="z-10 md:px-16 px-4 py-16 flex md:flex-row md:items-center flex-col items-start justify-between container mx-auto relative">
                    <div className="flex-1 md:mr-16">
                        <img src={ContainerImg} alt="container img" className="w-full pointer-events-none" />
                    </div>
                    <div className="flex-1 mt-16">
                        <p className="text-grey-dark font-montserrat text-4xl font-bold text-center md:text-left">Apa itu <span className="text-primary">Locca</span> </p>
                        <p className="text-grey-dark font-roboto text-lg text-center md:text-left">Locca adalah platform logistic Cold chain on demand untuk membantu dan mengoptimasi bisnis proses bagi UMKM</p>
                    </div>
                </div>
                <img src={BoxesImg} alt="boxes" className="pointer-events-none md:w-32 w-24 opacity-30 absolute z-0 bottom-8 right-8" />
            </div>
            <div className="bg-grey-light2 w-full md:px-16 px-4 py-16">
                <div className="container mx-auto py-8 px-4 md:py-16 md:px-16 relative">
                    <p className="text-grey-dark font-montserrat text-4xl font-bold">Our <span className="text-primary">Services</span> </p>
                    <div className=" grid md:grid-cols-3 grid-cols-1 gap-8">

                        {services.map((el,i)=> <Service data={el} index={i} /> )}

                    </div>
                </div>
            </div>
            <div className="bg-white w-full relative">
                <div className="z-10 md:px-16 px-4 py-4 flex md:flex-row md:items-center flex-col items-start justify-between container mx-auto relative">
                    <div className="flex-1 mt-16 md:mr-24 md:mt-0">
                        <p className="text-grey-dark font-montserrat text-4xl font-bold text-center md:text-left">Our <span className="text-primary">Vision</span> </p>
                        <p className="text-grey-dark font-roboto text-xl text-center md:text-left">Optimizing the national cold chain ecosystem to improve food security and Indonesian society welfare.</p>
                    </div>
                    <div className="flex-1 relative">
                        <img src={BoxesImg} alt="boxes" className="pointer-events-none md:w-32 w-24 opacity-30 absolute z-0 top-24 left-0" />
                        <img src={CupboardImg} alt="pointer-events-none container img" className="w-400" />
                    </div>
                </div>
            </div>
            <div className="bg-our-mission bg-no-repeat bg-center bg-cover w-full">
                <div className="flex md:flex-row flex-col items-center justify-between relative flex md:p-16 p-4 w-full h-full z-10  bg-tertiary md:bg-transparent md:bg-gradient-to-r from-transparent via-tertiary to-tertiary">
                    
                    <div className="flex-1"></div>
                    <div className=" flex-1 flex flex-col md:px-16 box-border">
                        <p className="text-white font-montserrat font-bold text-4xl text-center md:text-left">Our Mission</p>
                        <div className="flex items-start mt-4">
                            <img src={CheckImg} alt="check" className="pointer-events-none w-4 mt-1" />
                            <p className="text-white font-roboto ml-4">Increasing the effectiveness of the national cold chain to create food security</p>
                        </div>
                        <div className="flex items-start mt-4">
                            <img src={CheckImg} alt="check" className=" pointer-events-none w-4 mt-1"  />
                            <p className="text-white font-roboto ml-4">Simplify business processes and strengthen business growth for the Agriculture (Fisheries, Livestock & Agriculture) And food industries by optimizing cold chain technology innovations</p>
                        </div>
                    </div>
                    <img src={BoxesImg} alt="boxes" className="md:w-32 w-24 opacity-30 absolute z-0 bottom-8 right-8" />
                </div>
            </div>
            <div className="bg-white w-full ">
                <div className="container mx-auto py-8 px-4 md:py-16 md:px-16 relative">
                    <div className="md:flex-row flex-col w-full flex items-center justify-center">
                        <div className="flex-1 mt-16 md:mt-0 flex flex-col md:items-end items-center">
                            <p className="text-grey-dark font-montserrat text-4xl md:text-right font-bold text-center">Why <span className="text-primary">Locca?</span> </p>
                            <p className="mt-4 text-grey-dark font-roboto text-lg md:text-right text-center">Locca dapat membantu meningkatkan produktivitas bisnis proses, memperluas akses pasar dan mengoptimasi asset dalam satu platform</p>
                        </div>
                        <div className="relative ">
                            <img src={LoccaWorkerImg} alt="locca worker" className="pointer-events-none" />
                        </div>
                        <div className="flex-1 mt-16 md:mt-0 flex flex-col md:items-start items-center">
                            <p className="text-grey-dark font-montserrat text-4xl font-bold">How <span className="text-primary">Locca?</span> </p>
                            <p className="mt-4 text-grey-dark font-roboto text-lg md:text-left text-center">Locca bermitra dengan penyedia gudang, transportasi dan processing dengan skema bagi hasil dan atau investasi berupa aset</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-grey-light2 w-full">
                <div className="container mx-auto py-8 px-4 md:py-16 md:px-16">
                    <p className="mb-8 md:mb-4 text-grey-dark font-montserrat text-4xl font-bold text-center md:text-left ">Product <span className="text-primary">Type</span> </p>
                    <div className="grid md:grid-cols-5 grid-cols-2 gap-8">
                        
                        {types.map((el,i)=> <Type data={el} index={i} />)}

                    </div>
                </div>
            </div>
            <div className="bg-primary w-full bg-boxes bg-contain bg-no-repeat bg-150px bg-left-bottom-1">
                <div className="container mx-auto py-8 px-4 md:py-16 md:px-16">
                    <p className="text-white font-montserrat text-2xl font-bold">Fullfilment</p>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-8 pb-16 z-10">
                        
                        {fullfilments.map((el,i)=> <FullFilment data={el} index={i} />)}
                        
                    </div>
                </div>
            </div>
            <div className="bg-grey-light2 w-full ">
                <div className="container mx-auto py-8 px-4 md:py-16 md:px-16 relative">
                    <p className="text-grey-dark font-montserrat text-2xl font-bold">Features</p>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-8 z-10">

                        {features.map((el,i)=> <Feature data={el} index={i} />)}

                    </div>
                </div>
            </div>
            <div className="bg-white w-full h-full bg-boxes bg-contain bg-no-repeat bg-150px bg-left-bottom-1">
                <div className="container mx-auto py-8 px-4 md:py-16 md:px-16 flex flex-col">
                    <p className="text-black font-montserrat text-xl text-center font-bold">Mereka yang menggunakan Locca</p>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {testimonies.map((el,i)=> <Testimony data={el} index={i} />)}
                        
                    </div>
                </div>
            </div>
            <div className="bg-primary w-full ">
                <div className="flex flex-col md:flex-row pt-16 md:pt-0 items-center justify-between z-20 md:px-16 px-4 container mx-auto">
                    <p className="order-first md:order-none flex-1 text-white font-montserrat font-bold text-2xl text-center md:text-left">Subscribe now and get <br /> benefit for your business</p>
                    <img src={PeopleImg} alt="people" className="md:order-none mt-8 order-last flex-1 transform md:-translate-y-6 md:scale-125" />
                    <div className="flex-1 flex items-center justify-center">
                        <button className="mt-8 md:mt-0 md:order-none self-center justify-self-center transition duration-150 rounded-full hover:ring-4 hover:ring-white hover:ring-opacity-50 p-3 self-start bg-white border-none flex items-center justify-between">
                            <img src={GetInTouchImg} alt="icon getintouch" className="pointer-events-none mr-2 w-30" />
                            <p className="font-montserrat text-grey-dark font-bold">Get in touch now</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-secondary w-full transform -translate-y-1 bg-boxes bg-contain bg-no-repeat bg-150px bg-left-bottom-1">
                <div className="W-full h-full container mx-auto py-8 px-4 md:py-16 md:px-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
                        <div className="flex flex-col">
                            <img src={LoccaNoBackImg} alt="locca" className="pointer-events-none w-24" />
                            <p className="mt-16 font-montserrat text-grey-dark">Locca adalah platform logistic Cold chain on demand untuk membantu dan mengoptimasi bisnis proses bagi UMKM</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-primary font-montserrat text-xl font-bold">Address</p>
                            <p className="mt-14 font-montserrat text-grey-dark">Gedung Cyber 2 Tower Lantai 18, JL HR Rasuna Said, blok X-5, Kaveling 13</p>
                            <p className="mt-4 font-montserrat text-grey-dark font-medium">Info@locca.co.id</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-primary font-montserrat text-xl font-bold">Resources</p>
                            <div className="flex items-center mt-14">
                                <img src={FacebookImg} alt="facebook" className="w-6 mr-8" />
                                <img src={InstagramImg} alt="instagram" className="w-6 mr-8" />
                                <img src={TwitterImg} alt="twitter" className="w-6 mr-8" />
                            </div>
                            <p className="text-primary font-montserrat text-base font-medium mt-4">Download Now</p>
                            <p className="text-primary font-montserrat text-base font-medium mt-4">Documentation</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
                        <p></p>
                        <p className="font-roboto text-grey-dark text-left md:text-center">Copyright © 2021 Locca.co.id</p>
                        <div className="flex items-center">
                            <p className="font-roboto text-blue-dark mr-16">Privacy Policy</p>
                            <p className="font-roboto text-blue-dark">Terms of Use</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;