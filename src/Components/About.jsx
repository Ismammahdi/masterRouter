import { useState,useEffect } from "react";



const About = () => {
    const [products, setProduct]=useState([]);

    useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>setProduct(data))
    },[])

    return (
        <div >
            <h2>products</h2>
            <div className=" container mx-auto flex justify-between items-center flex-wrap mt-12" > 
                {
                    products.map((product)=>{
                        return(
                            <div key={product.id} className="w-[30%] py-5 rounded-lg  border-solid border-4 border-gray-600 mb-5 p-5" >
                                <img className="w-full object-cover object-top h-[250px]" src={product.image} alt="" />
                                <h1 className=" text-2xl text-[#38419D] font-bold">price: ${product.price}</h1>
                                <p className="mt-5 text-gray-700 "> . Sed libero numquam cum iure ratione autem, facere dolorem. Quibusdam laborum laudantium architecto asperiores amet.</p>
                                     <button className=" transition ease-in hover:bg-orange-600 mt-7 py-[6px] px-[20px] bg-red-700 text-white font-bold rounded-lg ">see details</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default About;