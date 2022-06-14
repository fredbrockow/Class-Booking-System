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
     border-color: var(--MainBlack);
     background-color: var(--semi-tranparent-grey-InputField);
     color: var(--MainBlack);
     min-width:40px;
     text-align: right;

     padding: 5px 0px;
 
     & option {
         background-color: var(--semi-tranparent-grey-InputField);
         /* text-align: left; */
     }
 
 `;
 
 export default CustomSelector;