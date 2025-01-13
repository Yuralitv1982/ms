export default function TabButton(props) {
   // console.log(props);
   // document.querySelector('button').addEventListener('click', () => {
   //     do something
   // })

   function handleClick() {
      console.log(`hello from button:${props.children}`);
   }
   return (
      <li>
         <button onClick={handleClick}>{props.children}</button>
      </li>
   );
}
