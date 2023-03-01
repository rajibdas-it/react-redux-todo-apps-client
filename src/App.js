import Header from "./component/Header";
import TodoList from "./component/TodoList";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <div className="fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg">
        Simple Todo Application with Redux
      </div>
      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />

        <hr className="mt-4" />

        <TodoList />

        <hr className="mt-4" />

        <Footer />
      </div>
    </div>
  );
}

export default App;
