import React, { Component } from "react";

const List = [
  { id: '1', task: 'Do this', completed: true },
  { id: '2', task: 'Do that', completed: false },
]

const Delist = ({data})=>{
//  console.log()
  return(
    <ul>
      {data.map((items)=>{
        console.log(items)
        return (<Deitim key={items.id} item={items} />)})}
    </ul>
  )
}

const Deitim = ({item})=>{
  console.log(item.id)
  return(
    <li>{item.task} {item.completed.toString()}</li>
  )
}

const fetchData = () =>{
  return {data: [],isLoading: true}
}
const withHigOrderComponent = (Component)=> props =><Component {...props} />

const TestHOC = withHigOrderComponent(Delist)
export default function HighOComponent() {
const { data,isLoading } = fetchData();
  return(
  <>
  <h1 className="text-[100px] text-center">1.HOC USECASE</h1>
    <Delist data={List} />
    {isLoading && <div> data loaded .</div>}
    {!data && <div>No data loaded yet.</div>}
    {!data.length && <div>No data loaded yet.</div>}

    <h1 className="text-[100px] text-center">enchacment</h1>
    <TestHOC data={List} />
  </>)
}


