/***
 * @author Frederic Brockow
 *  Component that renders the quantity selection drop down 
 *  and returns the value selected via handleSelectChange
 */

 import styled from "styled-components";


 const CustomSelector = ({ label, selectedValue, data, handleSelectChange, id}) => {
     
     return (
         <Select
            id = {id}
            onChange={(e) => handleSelectChange(e)}
            value = {selectedValue}
            required
            > 
         <>
            <option value = "" >{label}</option>
             {data.map( (element, index) => {
                 return <option value = {element.value} key = {element.value}>{element.placeHolder}</option>
             } )}
         </>
         </Select>
     );
 };
 
 const Select = styled.select`
     cursor: pointer;
     border-color: var(--veryLightGreyBorder);
     background-color: var(--itemBackground);
     color: var(--subTextColor);
     min-width:40px;
     text-align: center;
 
     & option {
         background-color: var(--itemBackground);
         /* text-align: left; */
     }
 
 `;
 
 export default CustomSelector;