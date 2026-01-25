import { createRoot } from 'react-dom/client'
import State from './State';
import Reducer from './Reducer';
import ActionState from './ActionState';
import FormStatus from "./FormSatus";
import Effect from "./Effect";
import Context from "./Context";
import Ref from "./Ref";

const root = createRoot(document.querySelector("#root"))

root.render(
  <div>
    <Ref/>
  </div>
)