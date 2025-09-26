
function Button(){

   const handleClick = () =>{
    alert("Кнопка нажата!")
   };

   return  <button onClick={handleClick}>Press me </button>;
   
}

export default Button;