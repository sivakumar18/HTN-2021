import React, {useState} from 'react';
import './Tiles.css';
import Button from "./Button";
import GenreSelector from "./GenreSelector";

function DropdownMenu() {
  const [showGenSel, setShowGenSel] = useState(false);
  return (
    <div className="menu">
      <Button id="Genre" text="Cuisine" onClick={() => setShowGenSel(true)}/>
      <GenreSelector show={showGenSel}/>
      <Button id="Distance" text="Distance" />
      <Button id="Price" text="Price" />
      <Button id="Dietary Restrictions" text="Dietary Restrictions" />
    </div>
  )
}
// class DropdownMenu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "Test",
//     }
//
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     this.setState({
//       text: "Clicked!",
//     });
//     console.log('Clicked!');
//   }
// }

export default DropdownMenu;
