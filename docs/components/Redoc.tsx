import pkg from 'redoc'; 
console.log(pkg)
const {RedocStandalone} = pkg

function Redoc() {
  return (
    <div className="App">
     <RedocStandalone specUrl="https://petstore.swagger.io/v2/swagger.json"/>
    </div>
  );
}

export default Redoc;