import './App.css';
import Colorbox from './components/box.js/colorbox';
import TodoContainer from './components/todo/todo.container';
import PostContainer from "./components/post/post.container";
import BetterClock from './components/betterClock';
import MagicBox from './components/box.js/magicBox';
import Counter from './components/commons/countter';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Colorbox></Colorbox>
                <MagicBox />
                <Counter></Counter>
                <BetterClock />
                <TodoContainer />
                <PostContainer />
            </header>
        </div>
    );
}

export default App;
