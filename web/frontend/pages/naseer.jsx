import {Button} from '@shopify/polaris';
import { Card, Page, Layout, TextContainer, Heading, DataTable } from "@shopify/polaris";
import React, { useEffect } from 'react';
import {TextField, FormLayout} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
// import Alert from 'react-bootstrap/Alert';
import { sign } from 'jsonwebtoken';



export default function Naseer() {
  const [value, setValue] = useState('');
  const handleChange = useCallback((value) => setValue(value), []);
  
  const [users, setUsers] = useState([])
  const [boolean, setBoolean] = useState(false);
  const [conditioncheck, setconditioncheck] = useState(false);
  const check  = [];
  let i=0;
const skus=[];
const signscheck = [];
  const name=[];
  const tablestyle={
      'border': '1px solid #dddddd',
      'textAlign': 'left',
      'padding': '8px'

  }
  // const orderdata=()=>{
  //   const sku = [];
  //   for (var i=0; i<users.orders[0].line_items.length;i++){
      
  //     sku[i]=users.orders[0].line_items[i].sku;
  //   }
    
  // }
    const faisal = async () =>{
      const username = 'e4a293e87c07dcc205a9597fa4058773';
      const password = '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'
      
        const response = await fetch('https://faisalnaseer.myshopify.com/admin/api/2022-07/orders.json?name='+value,{
          headers: {
            'Authorization': `Basic ${btoa(username+':'+password)}`,
        },
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin'
    })
  
    
      const data = await response.json();
      
      setUsers(data)
      console.log(data.orders[0].id)
      console.log(users.orders[0].line_items)
      setBoolean(true);

          

      // const row = users.orders[0].line_items.map(user => (user.sku))
     
      

//       fact.map(user=>(
//   console.log(user.id)
// )
//   )
    // orderdata();
      // users.orders.map(users => (
      //  console.log(orders.id)
      // ))

  
}

function checking(){
 

  if(skus.length==0){
    users.orders[0].line_items.map(user => (
            
            
      skus.push(user.sku)
      
      ))}
for(let c=0;c<skus.length;c++){
  
  if(skus.includes(check[c])===true){
    signscheck.push('true')
  }
  if(skus.includes(check[c])===false){
    signscheck.push('false')
  }
  
}
console.log(signscheck)
setconditioncheck(true)


}
// const signcheck=()=>{

//   const signsalert=()=>{
//     for(let f=0;f<signscheck.length;f++){
//       if(signscheck[f]==='true'){
//         <Alert variant="success">matched</Alert>
//       }
//       if(signscheck[f]==='false'){
//         <Alert variant="danger"> not matched</Alert>
//       }
//     }
//   }
//   {conditioncheck ? signsalert()
//   :'No status'}
  
//   }

const createskuarray =(e)=>{
if (e.key==='Enter'){
  if(e.target.value.length =="16"){
  check.push(e.target.value)}
  // document.getElementById("input0").focus();
if(document.getElementById("input0").value.length=="16"){
  document.getElementById("input1").focus();
  if(document.getElementById("input1").value.length=="16"){
    document.getElementById("input2").focus();
    if(document.getElementById("input2").value.length=="16"){
      document.getElementById("input3").focus();
      if(document.getElementById("input3").value.length=="16"){
        document.getElementById("input4").focus();
        if(document.getElementById("input4").value.length=="16"){
          document.getElementById("input5").focus();}
}}}}
  
    
      
        
  // document.getElementById("input2").focus();
  // document.getElementById("input3").focus();
  // document.getElementById("input4").focus();
  // document.getElementById("input5").focus();
  // document.getElementById("input6").focus();
  // document.getElementById("input7").focus();
  // document.getElementById("input8").focus();
  // document.getElementById("input9").focus();
}
}
function movetonext(current, nextFieldID) {  
  if (current.length >= current.maxLength) {  
  document.getElementById(nextFieldID).focus();  
  }  
  }



return(
<>
<Layout>

  <FormLayout>
<TextField
      label="Order Number"
      value={value}
      onChange={handleChange}
      autoComplete="off"
    /> 
  

  
 <Button primary onClick={faisal}>Load</Button> 

        {/* <div>
        {boolean ? (<div>{users.orders[0].line_items.map(user => (
          <li >{user.sku}</li>
        ))}</div>
       ) 
       : ("button not pressed")}
  
       </div> */}

 </FormLayout>
 
 </Layout>
 <Page title="The Products in Order">
 <Card>
        <Table striped bordered hover>
        <tr>
          <th>Products</th>
          <th>Scanned</th>
          <th>Status</th>
        </tr>
      
      
        
      {boolean ? (<tbody>{users.orders[0].line_items.map(user => (
        
       <tr>
          <td>{user.sku}</td>
         <td>
          {/* <Form.Control
          placeholder="SKU"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleChange1}/> */}
          <input
          type="text"
          id={"input"+i}

          maxLength="16"
          size="15"
          onKeyPress={createskuarray}
          // onKeyUp={movetonext(globalThis, "input"+(i+1) )}
      

          
          />
          {i++}
          </td>
          <td>
            {/* {conditioncheck ? (signscheck.map(signcheck=>{
              if(signcheck==='true'){<Alert variant="success">matched</Alert>}
              if(signcheck==='false'){<Alert variant="danger">not matched</Alert>}
              
              })):'no status'} */}

          </td>
         </tr>
         
        ))}</tbody>
       ) 
       : (<tr>button not pressed</tr>)}
       
        </Table>
      </Card>
      <Button variant="primary" onClick={checking}>Primary</Button>
     </Page>
 </>
); 
        

}