import "./Services.css";
import {services} from "../../data/services"
import Title from "../Title/Title"
const Services = () => {
  return ( 
    <>
    <Title title={"Our Services"}></Title>
    <div className="card-container">
      {services.map(service=>{
        return (<div className="card" key={service.id}>
        <img src={service.img} alt="" />
        <div className="card-content">
          <h1>{service.title}</h1>
        </div>
      </div>)
      }) 
      }
    </div>
    </>
   );
}
 
export default Services;