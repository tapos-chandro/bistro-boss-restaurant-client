import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

// import './shop/shop.css'

import { useParams } from 'react-router-dom';

import Banner from './../../sheard/Banner';
import useMenu from '../../hooks/useMenu';
import bannerImg from '../../assets/shop/banner2.jpg'
import { useState } from 'react';
import Card from '../../sheard/Card';
import Loading from '../../components/Loading';
import useTotalCount from '../../hooks/useTotalCount';


const Shop = () => {
 



  const categoryes = ['offered','dessert' ,'salad', 'soup','pizza','drinks']

  const {category} = useParams()
  const [pageNumber, setPageNumber] = useState(1)  

  const initialIndex = categoryes.indexOf(category)

  const [offered] = useMenu('offered', pageNumber, 3)
  const [pizza] = useMenu('pizza', pageNumber, 3)
  const [salad] = useMenu('salad', pageNumber, 3)
  const [soup] = useMenu('dessert', pageNumber, 3)
  const [dessert] = useMenu('soup', pageNumber, 3)
  const [drinks] = useMenu('drinks', pageNumber, 3)

  const [tabIndex, setTabIndex] = useState(initialIndex)
  
const [count] = useTotalCount(categoryes[tabIndex]);


  if(!offered || !pizza || !salad || !soup || !dessert || !drinks){
    return <Loading/>
  }

console.log(count)
if(!count){
    return <div className='h-screen flex items-center justify-center'>
         <Loading></Loading>
    </div>
}

const page = Math.ceil((count?.count / 3))

const totalPage = [...Array(page).keys()]


console.log(pageNumber)


  return (
    <div >
      <Banner
        heading='OUR SHOP'
        paragraph='Would you like to try a dish?'
        backgroundImg={bannerImg}
      ></Banner>
      <div className='my-20 '>
      <Tabs selectedIndex={tabIndex}  onSelect={initialIndex =>{setPageNumber(1), setTabIndex(initialIndex) }}>
        <TabList className='flex justify-center flex-wrap py-10'>
          <Tab><div>Offered</div></Tab>
          <Tab><div>Soups</div></Tab>
          <Tab><div>Salad</div></Tab>
          <Tab><div>Dessert</div></Tab>
          <Tab><div>Pizza</div></Tab>
          <Tab><div>Drinks</div></Tab>
        </TabList>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-3 p-5 py-10 '>
          {
            offered?.map(item => <Card item={item} key={item._id}></Card>)
          }
          </div>
          <div className='flex justify-center gap-5'>
            <button className='btn border-[2px] border-amber-500 text-amber-500 text-lg' onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}>Priv</button>
          {
            totalPage.map((page , index)=>  
                <button className={` btn border-none text-light ${pageNumber === page +1 ? "bg-amber-300": 'bg-red-300'} `} onClick={() => setPageNumber(page + 1)} key={index}>{page + 1}</button>
            )
          }
          <button className='btn border-[2px] border-amber-500 text-amber-500 text-lg' onClick={() => totalPage.length > pageNumber && setPageNumber(pageNumber + 1)}>Next</button>
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-3 p-5'>
        
            {
            soup?.map(item => <Card item={item} key={item._id}></Card>)
          }
          </div>
          <div className='flex justify-center gap-5'>
            <button className='btn border-[2px] border-amber-500 text-amber-500 text-lg' onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}>Priv</button>
          {
            totalPage.map((page , index)=>  
                <button className={` btn border-none text-light ${pageNumber === page +1 ? "bg-amber-300": 'bg-red-300'} `} onClick={() => setPageNumber(page + 1)} key={index}>{page + 1}</button>
            )
          }
          <button className='btn border-[2px] border-amber-500 text-amber-500 text-lg' onClick={() => totalPage.length > pageNumber && setPageNumber(pageNumber + 1)}>Next</button>
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-3 p-5 '>
          {
            salad?.map(item => <Card item={item} key={item._id}></Card>)
          }
          </div>
          <div className='flex justify-center gap-5'>
            <button className='btn border-[2px] border-amber-500 text-amber-500 text-lg' onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}>Priv</button>
          {
            totalPage.map((page , index)=>  
                <button className={` btn border-none text-light ${pageNumber === page +1 ? "bg-amber-300": 'bg-red-300'} `} onClick={() => setPageNumber(page + 1)} key={index}>{page + 1}</button>
            )
          }
          <button className='btn border-[2px] border-amber-500 text-amber-500 text-lg' onClick={() => totalPage.length > pageNumber && setPageNumber(pageNumber + 1)}>Next</button>
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-3 p-5 '>
          {
            dessert?.map(item => <Card item={item} key={item._id}></Card>)
          }
          </div>
          <div className='flex justify-center gap-5'>
            <button className='btn border-[2px] border-amber-500 text-amber-500 text-lg' onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}>Priv</button>
          {
            totalPage.map((page , index)=>  
                <button className={` btn border-none text-light ${pageNumber === page +1 ? "bg-amber-300": 'bg-red-300'} `} onClick={() => setPageNumber(page + 1)} key={index}>{page + 1}</button>
            )
          }
          <button className='btn border-[2px] border-amber-500 text-amber-500 text-lg' onClick={() => totalPage.length > pageNumber && setPageNumber(pageNumber + 1)}>Next</button>
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-3 p-5 '>
        {
            pizza?.map(item => <Card item={item} key={item._id}></Card>)
          }
          </div>
          <div className='flex justify-center gap-5'>
            <button className='btn border-[2px] border-amber-500 text-amber-500 text-lg' onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}>Priv</button>
          {
            totalPage.map((page , index)=>  
                <button className={` btn border-none text-light ${pageNumber === page +1 ? "bg-amber-300": 'bg-red-300'} `} onClick={() => setPageNumber(page + 1)} key={index}>{page + 1}</button>
            )
          }
          <button className='btn border-[2px] border-amber-500 text-amber-500 text-lg' onClick={() => totalPage.length > pageNumber && setPageNumber(pageNumber + 1)}>Next</button>
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-3 p-5 '>
          {
            drinks?.map(item => <Card item={item} key={item._id}></Card>)
          }
          </div>
          <div className='flex justify-center gap-5'>
            <button className='btn border-[2px] border-amber-500 text-amber-500 text-lg' onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}>Priv</button>
          {
            totalPage.map((page , index)=>  
                <button className={` btn border-none text-light ${pageNumber === page +1 ? "bg-amber-300": 'bg-red-300'} `} onClick={() => setPageNumber(page + 1)} key={index}>{page + 1}</button>
            )
          }
          <button className='btn border-[2px] border-amber-500 text-amber-500 text-lg' onClick={() => totalPage.length > pageNumber && setPageNumber(pageNumber + 1)}>Next</button>
          </div>
        </TabPanel>
      </Tabs>
      </div>
    </div>
  )
}

export default Shop