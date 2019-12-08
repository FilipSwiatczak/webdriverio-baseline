import {Container} from "src/web-elements/Container";
import {Button} from "src/web-elements/Button";
import {Dropdown} from "src/web-elements/Dropdown";

class DropdownShowcasePO {
    button = {
        tShirts: new Button(()=> $('li:last-child > a[title="T-shirts"]'),
            {waitForVisible: true})
    };
    container = {
        tShirtsLogo: new Container(()=> $('div.content_scene_cat_bg')),
        loadingSpinner: new Container(()=> $('ul > p'))
    };
    dropdown = {
        sortBy: new Dropdown(()=> $('select#selectProductSort'))
    }
}
const DropdownShowcase = new DropdownShowcasePO();
export default DropdownShowcase;


