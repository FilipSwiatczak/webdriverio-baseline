import {TextField} from "src/web-elements/TextField";
import {Container} from "src/web-elements/Container";
import {Button} from "src/web-elements/Button";

class GoogleCheckPO {
    field = {
        search: new TextField(()=> $('input[title="Search"]'))
    };
    button = {
        search: new Button(()=> $('input[value="Google Search"]'),
            {waitForVisible: true})
    };
    results = {
        firstResult: new Container(()=> $('div#search div.g:nth-child(1)> div > div[data-hveid] h3 > span')),
        stats: new Container(()=> $('div#resultStats'))
    }
}
const GoogleCheck = new GoogleCheckPO();
export default GoogleCheck;