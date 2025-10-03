import Input from "../../components/Input";
import "./Colors.css"
const Colors = () => {
  const handleChange = (event) => {
    console.log("Selected color:", event.target.value);
  };
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>

     <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2"  />
        <span className="checkmark"></span>All
        </label>

        <Input 
         handleChange={handleChange}
         value="black"
         title="Black"
         name="test1"
         color="black"
         
         />


         <Input 
         handleChange={handleChange}
         value="Blue"
         title="Blue"
         name="test1"
         color="blue"
         
         />


         <Input 
         handleChange={handleChange}
         value="Red"
         title="Red"
         name="test1"
         color="red"
         
         />


         <Input 
         handleChange={handleChange}
         value="Green"
         title="Green"
         name="test1"
         color="Green"
         
         />



         <Input 
         handleChange={handleChange}
         value="White"
         title="White"
         name="test1"
         color="White"
         
         />

        <label  className="sidebar-label-container">
          <input type="radio" onChange={handleChange}value="White" name="test1" />
          <span className="checkmark" style={{background:"white", border:"2px solid black",}}>

          </span>
          white
        </label>
        
        </div>
  );
}

export default Colors
